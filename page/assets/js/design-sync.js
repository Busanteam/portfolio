(function () {
    'use strict';

    const DEV_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);
    const API = '/__design-sync';

    if (!DEV_HOSTS.has(window.location.hostname)) return;
    if (window.location.protocol === 'file:') return;

    const pending = new Map();
    let saveTimer = null;
    let connected = false;
    let selectedElement = null;
    let pickMode = false;
    let pickOverlay = null;

    function unlockScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.documentElement.style.overflow = '';
        document.body.classList.remove('lightbox-open', 'design-sync-pick-on');
    }

    function isValidOpenAiKey(key) {
        const k = (key || '').trim();
        return /^sk-[A-Za-z0-9_-]{10,}$/.test(k);
    }

    function formatApiError(message) {
        if (!message) return 'AI 요청 실패';
        if (message.includes('Incorrect API key') || message.includes('401')) {
            return 'OpenAI API 키가 올바르지 않습니다. sk- 로 시작하는 키를 https://platform.openai.com/api-keys 에서 발급받으세요. (다른 서비스 키는 사용할 수 없습니다)';
        }
        if (message.includes('OPENAI_API_KEY')) return message;
        return message;
    }

    function cancelPickMode() {
        pickMode = false;
        document.body.classList.remove('design-sync-pick-on');
        if (pickOverlay) pickOverlay.style.display = 'none';
        const pickBtn = document.getElementById('design-sync-pick');
        if (pickBtn) pickBtn.setAttribute('aria-pressed', 'false');
        setStatus('요소 선택 취소됨', 'idle');
    }

    function startPickMode() {
        pickMode = true;
        document.body.classList.add('design-sync-pick-on');
        if (!pickOverlay) {
            pickOverlay = document.createElement('div');
            pickOverlay.id = 'design-sync-pick-overlay';
            pickOverlay.className = 'design-sync-pick-overlay';
            pickOverlay.innerHTML = '<p class="design-sync-pick-hint">요소를 클릭하세요 · <kbd>Esc</kbd> 취소</p>';
            pickOverlay.addEventListener('click', e => {
                pickOverlay.style.pointerEvents = 'none';
                const target = document.elementFromPoint(e.clientX, e.clientY);
                pickOverlay.style.pointerEvents = 'auto';
                if (!target || target.closest('#design-sync-panel') || target.closest('#design-sync-pick-overlay')) return;
                cancelPickMode();
                selectElement(target);
            });
            document.body.appendChild(pickOverlay);
        }
        pickOverlay.style.display = 'flex';
        setStatus('요소를 클릭하세요 (Esc 취소)', 'ok');
    }

    function getSelector(el) {
        if (!(el instanceof Element)) return null;
        if (el.id) return `#${CSS.escape(el.id)}`;

        const parts = [];
        let node = el;
        while (node && node !== document.documentElement && parts.length < 6) {
            let part = node.tagName.toLowerCase();
            const classes = [...node.classList].filter(c => !c.startsWith('design-sync-'));
            if (classes.length) part += '.' + classes.slice(0, 2).map(c => CSS.escape(c)).join('.');
            const parent = node.parentElement;
            if (parent) {
                const siblings = [...parent.children].filter(c => c.tagName === node.tagName);
                if (siblings.length > 1) {
                    const idx = siblings.indexOf(node) + 1;
                    part += `:nth-of-type(${idx})`;
                }
            }
            parts.unshift(part);
            node = node.parentElement;
        }
        return parts.join(' > ');
    }

    function collectInlineRules(el, { includeRemove = false } = {}) {
        const selector = getSelector(el);
        if (!selector || !el.style) return [];
        const rules = [];
        for (let i = 0; i < el.style.length; i++) {
            const prop = el.style[i];
            const value = el.style.getPropertyValue(prop);
            if (value) rules.push({ selector, property: prop, value });
        }
        return rules;
    }

    function queueSave(updates, { immediate = false } = {}) {
        updates.forEach(u => {
            if (!u.selector || !u.property) return;
            const key = `${u.selector}|||${u.property}`;
            if (u.remove) pending.set(key, u);
            else if (u.value !== undefined && u.value !== '') pending.set(key, u);
        });
        clearTimeout(saveTimer);
        if (immediate) flushSave();
        else saveTimer = setTimeout(flushSave, 600);
    }

    async function flushSave() {
        if (pending.size === 0) {
            setStatus('저장할 변경 없음', 'idle');
            return;
        }
        const updates = [...pending.values()];
        pending.clear();
        try {
            const res = await fetch(`${API}/save-css`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ updates })
            });
            const data = await res.json();
            if (data.ok) setStatus(`저장됨 ${updates.length}건`, 'ok');
            else setStatus('저장 실패', 'err');
        } catch {
            setStatus('서버 연결 필요 — npm run dev', 'err');
        }
    }

    function setStatus(text, tone) {
        const el = document.getElementById('design-sync-status');
        if (!el) return;
        el.textContent = text;
        el.dataset.tone = tone || 'idle';
    }

    function updateSelectedUI() {
        const target = document.getElementById('design-sync-target');
        const editor = document.getElementById('design-sync-editor');
        if (!target || !editor) return;

        if (!selectedElement || !document.contains(selectedElement)) {
            target.textContent = '선택된 요소 없음 — Pick으로 요소를 지정하세요';
            editor.classList.add('is-disabled');
            return;
        }

        editor.classList.remove('is-disabled');
        const sel = getSelector(selectedElement);
        const tag = selectedElement.tagName.toLowerCase();
        target.innerHTML = `<code>${sel || tag}</code>`;
        refreshStyleList();
    }

    function refreshStyleList() {
        const list = document.getElementById('design-sync-styles-list');
        if (!list || !selectedElement) return;
        const rules = collectInlineRules(selectedElement);
        if (!rules.length) {
            list.innerHTML = '<li class="design-sync-style-empty">적용된 인라인 스타일 없음</li>';
            return;
        }
        list.innerHTML = rules.map(r =>
            `<li><code>${r.property}</code>: ${r.value}</li>`
        ).join('');
    }

    function parseCommands(text) {
        const commands = [];
        text.split(/[;\n]+/).forEach(chunk => {
            let line = chunk.trim();
            if (!line) return;

            const unsetMatch = line.match(/^(?:unset|remove|del)\s+(.+)$/i);
            if (unsetMatch) {
                commands.push({ type: 'remove', property: unsetMatch[1].trim() });
                return;
            }

            const colon = line.indexOf(':');
            if (colon === -1) {
                commands.push({ type: 'error', raw: line, message: '형식: property: value' });
                return;
            }

            const property = line.slice(0, colon).trim();
            const value = line.slice(colon + 1).trim();
            if (!property) return;
            commands.push({ type: 'set', property, value });
        });
        return commands;
    }

    function applyCommands(commands, { immediate = true } = {}) {
        if (!selectedElement) {
            setStatus('먼저 요소를 선택하세요', 'err');
            return false;
        }

        const selector = getSelector(selectedElement);
        const updates = [];
        const errors = [];

        commands.forEach(cmd => {
            if (cmd.type === 'error') {
                errors.push(cmd.message);
                return;
            }
            if (cmd.type === 'remove') {
                selectedElement.style.removeProperty(cmd.property);
                updates.push({ selector, property: cmd.property, remove: true });
                return;
            }
            selectedElement.style.setProperty(cmd.property, cmd.value);
            updates.push({ selector, property: cmd.property, value: cmd.value });
        });

        if (errors.length) {
            setStatus(errors[0], 'err');
            return false;
        }

        if (!updates.length) {
            setStatus('적용할 명령이 없습니다', 'err');
            return false;
        }

        queueSave(updates, { immediate });
        refreshStyleList();
        setStatus(`적용 ${updates.length}건${immediate ? ' · 저장 중' : ''}`, 'ok');
        return true;
    }

    function applyQuickAction(action) {
        if (!selectedElement) {
            setStatus('먼저 요소를 선택하세요', 'err');
            return;
        }

        const cs = getComputedStyle(selectedElement);
        const map = {
            'gap+': () => {
                const cur = parseFloat(cs.gap) || parseFloat(cs.columnGap) || 0;
                return [{ type: 'set', property: 'gap', value: `${cur + 4}px` }];
            },
            'gap-': () => {
                const cur = parseFloat(cs.gap) || parseFloat(cs.columnGap) || 8;
                return [{ type: 'set', property: 'gap', value: `${Math.max(0, cur - 4)}px` }];
            },
            'pad+': () => {
                const cur = parseFloat(cs.paddingTop) || 0;
                return [{ type: 'set', property: 'padding', value: `${cur + 4}px` }];
            },
            'pad-': () => {
                const cur = parseFloat(cs.paddingTop) || 8;
                return [{ type: 'set', property: 'padding', value: `${Math.max(0, cur - 4)}px` }];
            },
            'hide': () => [{ type: 'set', property: 'display', value: 'none' }],
            'show': () => [{ type: 'set', property: 'display', value: '' }, { type: 'remove', property: 'display' }],
            'bold': () => [{ type: 'set', property: 'font-weight', value: '700' }],
            'center': () => [{ type: 'set', property: 'text-align', value: 'center' }],
            'flex': () => [{ type: 'set', property: 'display', value: 'flex' }],
            'reset': () => {
                const props = [...selectedElement.style];
                return props.map(p => ({ type: 'remove', property: p }));
            }
        };

        const fn = map[action];
        if (!fn) return;
        applyCommands(fn());
    }

    async function applyAiPrompt(promptText) {
        if (!selectedElement) {
            setStatus('먼저 요소를 선택하세요', 'err');
            return;
        }
        if (!promptText.trim()) {
            setStatus('AI 수정 요청을 입력하세요', 'err');
            return;
        }

        setStatus('AI 처리 중…', 'ok');
        const apiKey = (localStorage.getItem('design-sync-openai-key') || '').trim();

        if (apiKey && !isValidOpenAiKey(apiKey)) {
            setStatus('API Key 형식 오류: OpenAI 키는 sk- 로 시작해야 합니다', 'err');
            return;
        }

        try {
            const res = await fetch(`${API}/ai-command`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: promptText.trim(),
                    selector: getSelector(selectedElement),
                    context: {
                        tagName: selectedElement.tagName.toLowerCase(),
                        className: selectedElement.className,
                        id: selectedElement.id,
                        inlineStyle: selectedElement.getAttribute('style') || '',
                        textPreview: (selectedElement.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 160)
                    },
                    apiKey
                })
            });
            const data = await res.json();
            if (!data.ok) throw new Error(formatApiError(data.error || 'AI 요청 실패'));

            if (data.htmlHint) {
                setStatus(`HTML 수정 필요: ${data.htmlHint}`, 'err');
                return;
            }

            const commands = (data.commands || []).map(c => {
                if (c.remove) return { type: 'remove', property: c.property };
                return { type: 'set', property: c.property, value: c.value };
            });

            if (!commands.length) {
                setStatus(data.explanation || '적용할 CSS 명령이 없습니다', 'err');
                return;
            }

            applyCommands(commands);
            setStatus(data.explanation || `AI 적용 ${commands.length}건`, 'ok');
        } catch (e) {
            setStatus(formatApiError(e.message), 'err');
        }
    }

    function selectElement(el) {
        document.querySelectorAll('.design-sync-highlight').forEach(n => n.classList.remove('design-sync-highlight'));
        selectedElement = el;
        el.classList.add('design-sync-highlight');
        updateSelectedUI();
        queueSave(collectInlineRules(el));
        setStatus('요소 선택됨 — 아래에서 수정 명령을 입력하세요', 'ok');
    }

    function buildUI() {
        const panel = document.createElement('div');
        panel.id = 'design-sync-panel';
        panel.className = 'design-sync-panel';
        panel.innerHTML = `
            <div class="design-sync-head">
                <span class="design-sync-dot" id="design-sync-dot"></span>
                <strong>Design Sync</strong>
            </div>
            <p class="design-sync-desc">요소 선택 후 <strong>AI 자연어</strong> 또는 CSS 명령으로 수정·저장합니다.</p>
            <p class="design-sync-status" id="design-sync-status">대기 중</p>

            <div class="design-sync-actions">
                <button type="button" class="design-sync-btn" id="design-sync-pick">요소 선택 (Pick)</button>
                <button type="button" class="design-sync-btn design-sync-btn-ghost" id="design-sync-flush">지금 저장</button>
            </div>

            <div class="design-sync-target-wrap">
                <span class="design-sync-label">선택 요소</span>
                <p class="design-sync-target" id="design-sync-target">선택된 요소 없음</p>
            </div>

            <div class="design-sync-editor is-disabled" id="design-sync-editor">
                <label class="design-sync-label" for="design-sync-ai-prompt">AI 수정 명령</label>
                <textarea id="design-sync-ai-prompt" class="design-sync-textarea design-sync-ai" rows="3" placeholder="예: 블러 오버레이를 제거하고 하단에만 자물쇠 아이콘을 보여줘"></textarea>
                <div class="design-sync-actions">
                    <button type="button" class="design-sync-btn design-sync-btn-sm design-sync-btn-ai" id="design-sync-apply-ai">AI 적용</button>
                </div>
                <input type="password" class="design-sync-input" id="design-sync-api-key" placeholder="OpenAI API Key (sk-... 만 가능)" autocomplete="off" style="margin-bottom:.5rem;font-size:10px;">

                <div class="design-sync-divider">또는 CSS 직접 입력</div>

                <div class="design-sync-row">
                    <input type="text" class="design-sync-input" id="design-sync-prop" placeholder="속성 (예: gap)" aria-label="CSS property">
                    <input type="text" class="design-sync-input" id="design-sync-val" placeholder="값 (예: 1rem)" aria-label="CSS value">
                    <button type="button" class="design-sync-btn design-sync-btn-sm" id="design-sync-apply-pair">적용</button>
                </div>

                <label class="design-sync-label" for="design-sync-cmd">수정 명령 (여러 줄 가능)</label>
                <textarea id="design-sync-cmd" class="design-sync-textarea" rows="3" placeholder="column-gap: 1rem&#10;padding-left: 0.75rem&#10;unset margin-top"></textarea>
                <div class="design-sync-actions">
                    <button type="button" class="design-sync-btn design-sync-btn-sm" id="design-sync-apply-cmd">명령 적용</button>
                    <button type="button" class="design-sync-btn design-sync-btn-sm design-sync-btn-ghost" id="design-sync-clear-cmd">입력 지우기</button>
                </div>

                <div class="design-sync-quick">
                    <button type="button" class="design-sync-chip" data-action="gap+">gap +4</button>
                    <button type="button" class="design-sync-chip" data-action="gap-">gap −4</button>
                    <button type="button" class="design-sync-chip" data-action="pad+">pad +4</button>
                    <button type="button" class="design-sync-chip" data-action="pad-">pad −4</button>
                    <button type="button" class="design-sync-chip" data-action="flex">flex</button>
                    <button type="button" class="design-sync-chip" data-action="center">center</button>
                    <button type="button" class="design-sync-chip" data-action="bold">bold</button>
                    <button type="button" class="design-sync-chip" data-action="hide">hide</button>
                    <button type="button" class="design-sync-chip" data-action="show">show</button>
                    <button type="button" class="design-sync-chip" data-action="reset">reset</button>
                </div>

                <ul class="design-sync-styles-list" id="design-sync-styles-list"></ul>
            </div>
        `;
        document.body.appendChild(panel);

        if (!document.getElementById('design-sync-styles')) {
            const style = document.createElement('style');
            style.id = 'design-sync-styles';
            style.textContent = `
                .design-sync-panel {
                    position: fixed; bottom: 1.25rem; left: 1.25rem; z-index: 10000;
                    width: min(340px, calc(100vw - 2rem)); max-height: calc(100vh - 2rem); overflow: auto;
                    padding: 1rem 1.1rem; border-radius: 16px;
                    background: rgba(20,20,22,.92); color: #f5f5f7;
                    border: 1px solid rgba(255,255,255,.12);
                    backdrop-filter: blur(16px); font: 12px/1.5 Pretendard, sans-serif;
                    box-shadow: 0 16px 48px rgba(0,0,0,.4);
                }
                .design-sync-head { display:flex; align-items:center; gap:.5rem; margin-bottom:.5rem; font-size:13px; }
                .design-sync-dot { width:8px; height:8px; border-radius:50%; background:#6b7280; flex-shrink:0; }
                .design-sync-dot.is-on { background:#30d158; box-shadow:0 0 0 4px rgba(48,209,88,.2); }
                .design-sync-desc { margin:0 0 .5rem; color:#a1a1a6; font-size:11px; }
                .design-sync-desc code { color:#7dc4ff; }
                .design-sync-status { margin:0 0 .6rem; font-size:11px; color:#a1a1a6; }
                .design-sync-status[data-tone="ok"] { color:#30d158; }
                .design-sync-status[data-tone="err"] { color:#ff453a; }
                .design-sync-label { display:block; font-size:10px; font-weight:600; color:#a1a1a6; margin:.5rem 0 .25rem; text-transform:uppercase; letter-spacing:.04em; }
                .design-sync-target { margin:0; font-size:11px; word-break:break-all; color:#e5e5ea; }
                .design-sync-target code { color:#7dc4ff; }
                .design-sync-actions { display:flex; flex-wrap:wrap; gap:.35rem; margin-bottom:.5rem; }
                .design-sync-btn {
                    padding:.45rem .75rem; border-radius:999px; border:0; cursor:pointer;
                    background:#2997ff; color:#fff; font:inherit; font-weight:600;
                }
                .design-sync-btn-sm { padding:.35rem .65rem; font-size:11px; }
                .design-sync-btn-ghost { background:transparent; border:1px solid rgba(255,255,255,.18); color:#f5f5f7; }
                .design-sync-editor.is-disabled { opacity:.45; pointer-events:none; }
                .design-sync-row { display:grid; grid-template-columns:1fr 1fr auto; gap:.35rem; align-items:center; }
                .design-sync-input, .design-sync-textarea {
                    width:100%; box-sizing:border-box; border-radius:10px;
                    border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.06);
                    color:#f5f5f7; font:inherit; padding:.45rem .55rem;
                }
                .design-sync-textarea { resize:vertical; min-height:64px; margin-bottom:.35rem; }
                .design-sync-input:focus, .design-sync-textarea:focus { outline:2px solid #2997ff; border-color:transparent; }
                .design-sync-quick { display:flex; flex-wrap:wrap; gap:.3rem; margin:.4rem 0; }
                .design-sync-chip {
                    padding:.2rem .5rem; border-radius:999px; border:1px solid rgba(255,255,255,.14);
                    background:rgba(255,255,255,.05); color:#d1d1d6; font:inherit; font-size:10px; cursor:pointer;
                }
                .design-sync-chip:hover { background:rgba(41,151,255,.2); border-color:rgba(41,151,255,.4); color:#fff; }
                .design-sync-btn-ai { background: linear-gradient(135deg, #2997ff, #5856d6); }
                .design-sync-ai { min-height: 72px; }
                .design-sync-divider {
                    margin: .75rem 0 .5rem; font-size: 10px; color: #6b7280; text-align: center;
                    border-top: 1px solid rgba(255,255,255,.08); padding-top: .65rem;
                }
                .design-sync-styles-list {
                    margin:.5rem 0 0; padding:.5rem .65rem; list-style:none;
                    background:rgba(0,0,0,.25); border-radius:10px; max-height:88px; overflow:auto;
                }
                .design-sync-styles-list li { font-size:10px; color:#a1a1a6; padding:.15rem 0; }
                .design-sync-styles-list code { color:#7dc4ff; }
                .design-sync-style-empty { color:#6b7280; font-style:italic; }
                .design-sync-pick-on { cursor: crosshair; }
                .design-sync-pick-overlay {
                    position: fixed; inset: 0; z-index: 9999;
                    display: none; align-items: flex-start; justify-content: center;
                    padding-top: 4.5rem; background: rgba(41,151,255,0.06);
                    cursor: crosshair; pointer-events: auto;
                }
                .design-sync-pick-hint {
                    margin: 0; padding: .5rem 1rem; border-radius: 999px;
                    background: rgba(20,20,22,.9); color: #f5f5f7; font-size: 12px;
                    border: 1px solid rgba(41,151,255,.35);
                    pointer-events: none;
                }
                .design-sync-pick-hint kbd {
                    padding: .1rem .35rem; border-radius: 4px;
                    background: rgba(255,255,255,.12); font-size: 11px;
                }
                .design-sync-highlight { outline:2px solid #30d158 !important; outline-offset:2px; }
            `;
            document.head.appendChild(style);
        }

        document.getElementById('design-sync-flush').addEventListener('click', flushSave);

        const apiKeyInput = document.getElementById('design-sync-api-key');
        const savedKey = localStorage.getItem('design-sync-openai-key');
        if (savedKey) apiKeyInput.value = savedKey;
        apiKeyInput.addEventListener('change', () => {
            localStorage.setItem('design-sync-openai-key', apiKeyInput.value.trim());
        });

        document.getElementById('design-sync-apply-ai').addEventListener('click', () => {
            applyAiPrompt(document.getElementById('design-sync-ai-prompt').value);
        });
        document.getElementById('design-sync-ai-prompt').addEventListener('keydown', e => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                applyAiPrompt(e.target.value);
            }
        });

        document.getElementById('design-sync-pick').addEventListener('click', () => {
            if (pickMode) {
                cancelPickMode();
                return;
            }
            startPickMode();
            document.getElementById('design-sync-pick').setAttribute('aria-pressed', 'true');
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && pickMode) cancelPickMode();
        });

        document.getElementById('design-sync-apply-pair').addEventListener('click', () => {
            const prop = document.getElementById('design-sync-prop').value.trim();
            const val = document.getElementById('design-sync-val').value.trim();
            if (!prop) { setStatus('속성을 입력하세요', 'err'); return; }
            if (!val) {
                applyCommands([{ type: 'remove', property: prop }]);
            } else {
                applyCommands([{ type: 'set', property: prop, value: val }]);
            }
        });

        document.getElementById('design-sync-apply-cmd').addEventListener('click', () => {
            const text = document.getElementById('design-sync-cmd').value;
            applyCommands(parseCommands(text));
        });

        document.getElementById('design-sync-clear-cmd').addEventListener('click', () => {
            document.getElementById('design-sync-cmd').value = '';
        });

        document.getElementById('design-sync-cmd').addEventListener('keydown', e => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                applyCommands(parseCommands(e.target.value));
            }
        });

        ['design-sync-prop', 'design-sync-val'].forEach(id => {
            document.getElementById(id).addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('design-sync-apply-pair').click();
                }
            });
        });

        document.querySelectorAll('.design-sync-chip').forEach(chip => {
            chip.addEventListener('click', () => applyQuickAction(chip.dataset.action));
        });
    }

    function watchMutations() {
        const observer = new MutationObserver(mutations => {
            const updates = [];
            mutations.forEach(m => {
                if (m.type === 'attributes' && (m.attributeName === 'style' || m.attributeName === 'class')) {
                    if (m.target.closest && m.target.closest('#design-sync-panel')) return;
                    if (m.target === selectedElement) refreshStyleList();
                    updates.push(...collectInlineRules(m.target));
                }
            });
            if (updates.length) {
                queueSave(updates);
                setStatus(`변경 감지 ${updates.length}건`, 'ok');
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style', 'class'],
            subtree: true
        });
    }

    function connectReload() {
        const es = new EventSource(`${API}/events`);
        es.onmessage = ev => {
            try {
                const data = JSON.parse(ev.data);
                if (data.type === 'reload') window.location.reload();
            } catch { /* ignore */ }
        };
        es.onerror = () => { es.close(); setTimeout(connectReload, 3000); };
    }

    async function init() {
        let health = {};
        try {
            const res = await fetch(`${API}/health`);
            health = await res.json();
            connected = !!health.ok;
        } catch {
            connected = false;
        }

        if (!connected) return;

        unlockScroll();
        buildUI();
        watchMutations();
        connectReload();
        document.getElementById('design-sync-dot')?.classList.add('is-on');
        const aiNote = health.aiConfigured ? 'AI 준비됨' : 'AI Key 필요';
        setStatus(`연결됨 — Pick 후 AI 또는 CSS 명령 (${aiNote})`, 'ok');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
