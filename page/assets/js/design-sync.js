(function () {
    'use strict';

    const DEV_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);
    const DEV_PORTS = new Set(['3847', '']);
    const API = '/__design-sync';

    if (!DEV_HOSTS.has(window.location.hostname)) return;
    if (window.location.protocol === 'file:') return;

    const pending = new Map();
    let saveTimer = null;
    let connected = false;

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

    function collectInlineRules(el) {
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

    function queueSave(updates) {
        updates.forEach(u => {
            if (u.selector && u.property) pending.set(`${u.selector}|||${u.property}`, u);
        });
        clearTimeout(saveTimer);
        saveTimer = setTimeout(flushSave, 600);
    }

    async function flushSave() {
        if (pending.size === 0) return;
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

    function buildUI() {
        const panel = document.createElement('div');
        panel.id = 'design-sync-panel';
        panel.className = 'design-sync-panel';
        panel.innerHTML = `
            <div class="design-sync-head">
                <span class="design-sync-dot" id="design-sync-dot"></span>
                <strong>Design Sync</strong>
            </div>
            <p class="design-sync-desc">개발자도구에서 요소의 <code>style</code> / <code>class</code>를 수정하면<br><code>portfolio.overrides.css</code>에 자동 저장됩니다.</p>
            <p class="design-sync-status" id="design-sync-status">대기 중</p>
            <button type="button" class="design-sync-btn" id="design-sync-pick">요소 선택 (Pick)</button>
            <button type="button" class="design-sync-btn design-sync-btn-ghost" id="design-sync-flush">지금 저장</button>
        `;
        document.body.appendChild(panel);

        if (!document.getElementById('design-sync-styles')) {
            const style = document.createElement('style');
            style.id = 'design-sync-styles';
            style.textContent = `
                .design-sync-panel {
                    position: fixed; bottom: 1.25rem; left: 1.25rem; z-index: 10000;
                    width: min(300px, calc(100vw - 2rem));
                    padding: 1rem 1.1rem; border-radius: 16px;
                    background: rgba(20,20,22,.88); color: #f5f5f7;
                    border: 1px solid rgba(255,255,255,.12);
                    backdrop-filter: blur(16px); font: 12px/1.5 Pretendard, sans-serif;
                    box-shadow: 0 16px 48px rgba(0,0,0,.4);
                }
                .design-sync-head { display:flex; align-items:center; gap:.5rem; margin-bottom:.5rem; font-size:13px; }
                .design-sync-dot { width:8px; height:8px; border-radius:50%; background:#6b7280; }
                .design-sync-dot.is-on { background:#30d158; box-shadow:0 0 0 4px rgba(48,209,88,.2); }
                .design-sync-desc { margin:0 0 .6rem; color:#a1a1a6; font-size:11px; }
                .design-sync-desc code { color:#7dc4ff; }
                .design-sync-status { margin:0 0 .75rem; font-size:11px; color:#a1a1a6; }
                .design-sync-status[data-tone="ok"] { color:#30d158; }
                .design-sync-status[data-tone="err"] { color:#ff453a; }
                .design-sync-btn {
                    display:inline-block; margin-right:.4rem; margin-bottom:.35rem;
                    padding:.45rem .75rem; border-radius:999px; border:0; cursor:pointer;
                    background:#2997ff; color:#fff; font:inherit; font-weight:600;
                }
                .design-sync-btn-ghost { background:transparent; border:1px solid rgba(255,255,255,.18); color:#f5f5f7; }
                .design-sync-pick-active { outline: 2px dashed #2997ff !important; outline-offset: 2px; cursor: crosshair !important; }
                .design-sync-highlight { outline: 2px solid #30d158 !important; outline-offset: 2px; }
            `;
            document.head.appendChild(style);
        }

        document.getElementById('design-sync-flush').addEventListener('click', flushSave);

        let pickMode = false;
        document.getElementById('design-sync-pick').addEventListener('click', () => {
            pickMode = !pickMode;
            document.body.classList.toggle('design-sync-pick-active', pickMode);
            setStatus(pickMode ? '요소를 클릭하세요' : '대기 중', pickMode ? 'ok' : 'idle');
        });

        document.addEventListener('click', e => {
            if (!pickMode) return;
            if (e.target.closest('#design-sync-panel')) return;
            e.preventDefault();
            e.stopPropagation();
            pickMode = false;
            document.body.classList.remove('design-sync-pick-active');
            document.querySelectorAll('.design-sync-highlight').forEach(n => n.classList.remove('design-sync-highlight'));
            e.target.classList.add('design-sync-highlight');
            queueSave(collectInlineRules(e.target));
            setStatus(`선택: ${getSelector(e.target)}`, 'ok');
        }, true);
    }

    function watchMutations() {
        const observer = new MutationObserver(mutations => {
            const updates = [];
            mutations.forEach(m => {
                if (m.type === 'attributes' && (m.attributeName === 'style' || m.attributeName === 'class')) {
                    if (m.target.closest && m.target.closest('#design-sync-panel')) return;
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
        try {
            const res = await fetch(`${API}/health`);
            const data = await res.json();
            connected = !!data.ok;
        } catch {
            connected = false;
        }

        if (!connected) return;

        buildUI();
        watchMutations();
        connectReload();
        document.getElementById('design-sync-dot')?.classList.add('is-on');
        setStatus('연결됨 — DevTools 수정 시 자동 저장', 'ok');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
