(function () {
    'use strict';

    const translations = {
        ko: {
            'meta.title': '김영훈 | UX/UI & 풀스택 아키텍트',
            'meta.description': '시각 디자인에서 풀스택 서비스 총괄까지. 김영훈의 포트폴리오 — 디자인, 프론트엔드, 백엔드, PM.',
            'nav.theme.light': 'Light Mode',
            'nav.theme.dark': 'Dark Mode',
            'nav.lang': 'EN',
            'toc.intro': 'Intro',
            'toc.experience': 'Experience',
            'toc.projects': 'Projects',
            'toc.gallery': 'Gallery',
            'toc.contact': 'Contact',
            'toc.print': 'Print',
            'toc.pdf': 'PDF',
            'hero.title': 'Digital Convergence:<br><i style="font-weight:600;color:var(--text-secondary);font-style:normal;">Design & Engineering.</i>',
            'hero.desc': '시각 디자인에서 풀스택 서비스 총괄까지.<br>미니멀리즘 철학과 정교한 엔지니어링을 결합하여 비즈니스 가치를 지닌 프로덕트를 만듭니다.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'exp.title': 'The Evolution',
            'exp.1.title': '의료용품 회사 개발/디자인 팀장',
            'exp.1.date': '2025. 03 - Present',
            'exp.1.desc': 'SME 조직의 팀장으로서 2500여 종 이상의 의료용품/복지용구 판매에 직결되는 디자인/개발을 총괄합니다. 방대한 엑셀 데이터 마이그레이션과 풀스택 파이프라인 구축을 주도하며, 기획 초기부터 물류·마케팅 팀과 협업해 커뮤니케이션 병목을 해결합니다.',
            'exp.2.title': 'Apple Korea GP (프리랜서)',
            'exp.2.date': '2024. 08 - 2024. 09',
            'exp.2.desc': '글로벌 스탠다드에 부합하는 정교한 시각적 산출물을 작업했습니다. 미니멀리즘 철학을 바탕으로 정제된 타이포그래피와 여백을 활용해 디테일한 시각적 완성도를 극대화했습니다.',
            'exp.3.title': '태양광 사업 UI·UX 디자이너',
            'exp.3.date': '2023. 02 - 2024. 05',
            'exp.3.desc': '에너지 비즈니스 도메인에서 복잡한 데이터를 직관적으로 이해할 수 있도록 심미성과 사용성을 고려한 UI/UX를 설계했습니다. 프론트엔드 화면을 기획·구현하며 프로덕트 가치를 높였습니다.',
            'exp.4.title': '디자인 및 개발 프리랜서',
            'exp.4.date': '2017. 01 - 2022. 01',
            'exp.4.desc': '시각 디자인 전공 베이스로 200회 이상의 프리랜서·외주 프로젝트를 완수했습니다. 기획, UI/UX 디자인, 영상 편집 등 디자인 역량을 다졌습니다.',
            'exp.5.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.5.date': 'Since 2019',
            'exp.5.desc': 'SSAFY에서 Python 기반 AI 챗봇·웹 디자인 프로젝트를 수행하고 삼성 SW 역량 테스트 A형을 패스했습니다. Alpaco에서 UiPath 기반 RPA 시스템을 구축했습니다.',
            'exp.6.title': 'Visual Design & Engineering Tools',
            'exp.6.date': 'Background',
            'exp.6.desc': '시각디자인 전공, GTQ 1급, AutoCAD·3D 프린터 활용 건축물·의료 Canula 부품 도면 설계 역량을 갖추고 있습니다.',
            'proj.title': 'Selected Works',
            'apple.title': 'Apple KR - iPhone 16 New Release',
            'apple.label': 'Visual Contract · NDA Protected',
            'apple.desc': '2024 애플 프로젝트에 참여했습니다. 글로벌 스탠다드와 미니멀리즘을 유지한 시각적 완성도 극대화 프로젝트입니다.',
            'apple.nda': 'NDA 체결로 인해 상세 내용을 공개할 수 없습니다. 면접 시 범위 내에서 설명드릴 수 있습니다.',
            'solar.title': '태양광 에너지 서비스 통합 플랫폼',
            'solar.label': 'UI/UX Design & Front-end',
            'solar.desc': '5개 서비스의 프로덕트 설계 및 브랜드 경험을 총괄했습니다. 복잡한 전력 데이터를 관리자/고객 눈높이에 맞춰 시각화했습니다.',
            'solar.b1': 'UX/UI 고도화 및 컴포넌트 시스템: 5개 웹/앱 서비스 UI 컴포넌트 규격화 및 디자인 시스템 구축.',
            'solar.b2': 'PC 모니터링 대시보드: 4px Grid 기반 반응형 대시보드 설계 — 아래 인터랙티브 프리뷰를 클릭해 전체 화면을 확인하세요.',
            'solar.b3': 'inverter 하드웨어 UX/UI 및 글로벌 확장: 7-Segment 발전량 측정기 UX 기획 및 일본 진출용 로컬라이징.',
            'solar.dashboard.title': 'Energy Monitoring Dashboard',
            'solar.dashboard.hint': '클릭하여 전체 화면 미리보기',
            'solar.stat1': '발전량',
            'solar.stat2': '효율',
            'solar.stat3': '알림',
            'solar.nav1': 'Overview',
            'solar.nav2': 'Inverters',
            'solar.nav3': 'Reports',
            'solar.nav4': 'Settings',
            'biz.title': '의료·복지용구 통합 플랫폼 (Biz & C)',
            'biz.label': 'Service PM & Full-stack Architect',
            'biz.desc': '2,500여 개 SKU의 복잡한 비즈니스 로직을 자동화하고, 디자인 시스템부터 백엔드 파이프라인까지 전 과정을 리드했습니다.',
            'biz.b1': '데이터 파이프라인: Cafe24 한계를 우회하는 독자적 백엔드(AWS, FastAPI, MySQL) 인프라.',
            'biz.b2': '영업 자동화: 맞춤형 복지용구 자동 매칭, 파트너 코드 URL 연동, 등급별 권한 기능.',
            'biz.b3': '크로스펑셔널 리더십: 물류·영업 실무진과 직접 소통하며 커뮤니케이션 병목을 선제 해결.',
            'biz.chart': 'Revenue Growth',
            'biz.flow': 'Auto-Matching UX Flow',
            'flow.1': '고객 정보 입력',
            'flow.2': '자격 심사 API',
            'flow.3': 'SKU 자동 매칭',
            'flow.4': '파트너 URL 생성',
            'flow.5': '주문 완료',
            'gallery.title': 'Visual Archive',
            'gallery.desc': '구 포트폴리오의 대표 작업물과 외부 서비스 링크를 통합했습니다. 이미지를 클릭하면 라이트박스로 확대됩니다.',
            'gallery.1': 'CI / BI Design',
            'gallery.2': 'App Store Visual',
            'gallery.3': 'SNS Campaign',
            'gallery.4': 'CMYK Branding',
            'gallery.5': 'RGB Branding',
            'gallery.6': 'PC Dashboard',
            'gallery.7': 'Mohaet Service',
            'gallery.8': 'Apple AirPods',
            'gallery.9': 'Apple Hermès',
            'gallery.10': 'Brief Results 1',
            'gallery.11': 'Brief Results 2',
            'gallery.12': 'Brief Results 3',
            'gallery.13': 'Brief Results 4',
            'link.mohaet': 'Mohaet →',
            'link.solarkim': 'Solar Kim →',
            'link.henergy': 'H-ENERGY →',
            'contact.title': 'Get in Touch',
            'contact.desc': '함께 가치 있는 프로덕트를 만들어갈 기회를 기다립니다.',
            'contact.name': 'Name or Company',
            'contact.email': 'Email Address',
            'contact.message': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'footer.a11y': '키보드 네비게이션(Tab/Shift+Tab), 충분한 색 대비, 시맨틱 HTML, alt 텍스트를 적용했습니다. 라이트박스는 Esc로 닫고 화살표 키로 이동할 수 있습니다.',
            'footer.lighthouse': 'Lighthouse Audit (Self-reported)',
            'footer.copy': 'Made by Kim Young Hoon',
            'footer.legacy': 'Legacy Portfolio',
            'lightbox.close': '닫기',
            'lightbox.prev': '이전',
            'lightbox.next': '다음',
            'pdf.generating': 'PDF 생성 중...'
        },
        en: {
            'meta.title': 'Kim Young Hoon | UX/UI & Full-Stack Architect',
            'meta.description': 'From visual design to full-stack service leadership. Portfolio showcasing design, frontend, backend, and PM.',
            'nav.theme.light': 'Light Mode',
            'nav.theme.dark': 'Dark Mode',
            'nav.lang': 'KO',
            'toc.intro': 'Intro',
            'toc.experience': 'Experience',
            'toc.projects': 'Projects',
            'toc.gallery': 'Gallery',
            'toc.contact': 'Contact',
            'toc.print': 'Print',
            'toc.pdf': 'PDF',
            'hero.title': 'Digital Convergence:<br><i style="font-weight:600;color:var(--text-secondary);font-style:normal;">Design & Engineering.</i>',
            'hero.desc': 'From visual design to full-stack service leadership.<br>I build products with business value by combining minimalism and precise engineering.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'exp.title': 'The Evolution',
            'exp.1.title': 'Dev/Design Team Lead — Medical Supplies Co.',
            'exp.1.date': '2025. 03 - Present',
            'exp.1.desc': 'Leading design and development for 2,500+ medical/welfare SKUs. Driving Excel data migration and full-stack pipelines while resolving cross-team bottlenecks with logistics and marketing.',
            'exp.2.title': 'Apple Korea GP (Freelance)',
            'exp.2.date': '2024. 08 - 2024. 09',
            'exp.2.desc': 'Delivered refined visual assets aligned with global standards. Maximized visual fidelity through minimal typography and whitespace.',
            'exp.3.title': 'Solar Energy UI/UX Designer',
            'exp.3.date': '2023. 02 - 2024. 05',
            'exp.3.desc': 'Designed intuitive UI/UX for complex energy data. Planned and implemented frontend screens to increase product value.',
            'exp.4.title': 'Design & Development Freelancer',
            'exp.4.date': '2017. 01 - 2022. 01',
            'exp.4.desc': 'Completed 200+ freelance projects with a visual design foundation. Strengthened planning, UI/UX, and video editing skills.',
            'exp.5.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.5.date': 'Since 2019',
            'exp.5.desc': 'Built AI chatbot and web design projects at SSAFY; passed Samsung SW Competency Test Type A. Built UiPath RPA at Alpaco.',
            'exp.6.title': 'Visual Design & Engineering Tools',
            'exp.6.date': 'Background',
            'exp.6.desc': 'Visual design major, GTQ Level 1, AutoCAD & 3D printing for architectural and medical canula part drawings.',
            'proj.title': 'Selected Works',
            'apple.title': 'Apple KR - iPhone 16 New Release',
            'apple.label': 'Visual Contract · NDA Protected',
            'apple.desc': 'Participated in Apple\'s 2024 project. A high-fidelity visual delivery aligned with global minimal standards.',
            'apple.nda': 'Details cannot be disclosed due to NDA. I can explain within scope during interviews.',
            'solar.title': 'Solar Energy Integrated Platform',
            'solar.label': 'UI/UX Design & Front-end',
            'solar.desc': 'Led product design and brand experience across 5 services. Visualized complex power data for admins and customers.',
            'solar.b1': 'UX/UI & component system: standardized UI across 5 web/app services with a design system.',
            'solar.b2': 'PC monitoring dashboard: 4px grid responsive dashboard — click the interactive preview below for fullscreen.',
            'solar.b3': 'Inverter hardware UX & global expansion: 7-segment meter UX and Japan localization.',
            'solar.dashboard.title': 'Energy Monitoring Dashboard',
            'solar.dashboard.hint': 'Click for fullscreen preview',
            'solar.stat1': 'Generation',
            'solar.stat2': 'Efficiency',
            'solar.stat3': 'Alerts',
            'solar.nav1': 'Overview',
            'solar.nav2': 'Inverters',
            'solar.nav3': 'Reports',
            'solar.nav4': 'Settings',
            'biz.title': 'Medical & Welfare Supplies Platform (Biz & C)',
            'biz.label': 'Service PM & Full-Stack Architect',
            'biz.desc': 'Automated business logic for 2,500+ SKUs and led the full stack from design system to backend pipeline.',
            'biz.b1': 'Data pipeline: proprietary backend (AWS, FastAPI, MySQL) bypassing Cafe24 limitations.',
            'biz.b2': 'Sales automation: welfare product auto-matching, partner code URLs, role-based permissions.',
            'biz.b3': 'Cross-functional leadership: proactive communication with logistics and sales teams.',
            'biz.chart': 'Revenue Growth',
            'biz.flow': 'Auto-Matching UX Flow',
            'flow.1': 'Customer Input',
            'flow.2': 'Eligibility API',
            'flow.3': 'SKU Auto-Match',
            'flow.4': 'Partner URL',
            'flow.5': 'Order Complete',
            'gallery.title': 'Visual Archive',
            'gallery.desc': 'Representative works and external service links from the legacy portfolio. Click images to open the lightbox.',
            'gallery.1': 'CI / BI Design',
            'gallery.2': 'App Store Visual',
            'gallery.3': 'SNS Campaign',
            'gallery.4': 'CMYK Branding',
            'gallery.5': 'RGB Branding',
            'gallery.6': 'PC Dashboard',
            'gallery.7': 'Mohaet Service',
            'gallery.8': 'Apple AirPods',
            'gallery.9': 'Apple Hermès',
            'gallery.10': 'Brief Results 1',
            'gallery.11': 'Brief Results 2',
            'gallery.12': 'Brief Results 3',
            'gallery.13': 'Brief Results 4',
            'link.mohaet': 'Mohaet →',
            'link.solarkim': 'Solar Kim →',
            'link.henergy': 'H-ENERGY →',
            'contact.title': 'Get in Touch',
            'contact.desc': 'I look forward to building meaningful products together.',
            'contact.name': 'Name or Company',
            'contact.email': 'Email Address',
            'contact.message': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'footer.a11y': 'Keyboard navigation (Tab/Shift+Tab), sufficient color contrast, semantic HTML, and alt text applied. Lightbox: Esc to close, arrow keys to navigate.',
            'footer.lighthouse': 'Lighthouse Audit (Self-reported)',
            'footer.copy': 'Made by Kim Young Hoon',
            'footer.legacy': 'Legacy Portfolio',
            'lightbox.close': 'Close',
            'lightbox.prev': 'Previous',
            'lightbox.next': 'Next',
            'pdf.generating': 'Generating PDF...'
        }
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'ko';
    let chartDrawn = false;
    let flowDrawn = false;
    let lightboxItems = [];
    let lightboxIndex = 0;

    function t(key) {
        return translations[currentLang][key] || translations.ko[key] || key;
    }

    function applyI18n() {
        document.documentElement.lang = currentLang;
        document.title = t('meta.title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = t('meta.description');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (el.hasAttribute('data-i18n-placeholder')) {
                el.placeholder = val;
            } else if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });

        const themeToggle = document.getElementById('theme-toggle');
        const isLight = document.documentElement.classList.contains('light');
        if (themeToggle) {
            themeToggle.textContent = isLight ? t('nav.theme.dark') : t('nav.theme.light');
        }

        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.textContent = t('nav.lang');

        if (chartDrawn) {
            d3.select('#chart-container').selectAll('*').remove();
            chartDrawn = false;
            drawChart();
        }
        if (flowDrawn) {
            d3.select('#flow-container').selectAll('*').remove();
            flowDrawn = false;
            drawFlowDiagram();
        }

        initDashboardPreview();
        initGallery();
    }

    function initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', (e) => {
            const isLight = document.documentElement.classList.contains('light');
            const x = e.clientX;
            const y = e.clientY;

            const toggle = () => {
                document.documentElement.classList.toggle('light');
                themeToggle.textContent = document.documentElement.classList.contains('light')
                    ? t('nav.theme.dark') : t('nav.theme.light');
            };

            if (!document.startViewTransition) {
                toggle();
                return;
            }

            const transition = document.startViewTransition(toggle);
            transition.ready.then(() => {
                const maxRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
                const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`];
                document.documentElement.animate(
                    { clipPath: document.documentElement.classList.contains('light') ? clipPath : [...clipPath].reverse() },
                    { duration: 700, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' }
                );
            });
        });
    }

    function initLang() {
        document.getElementById('lang-toggle').addEventListener('click', () => {
            currentLang = currentLang === 'ko' ? 'en' : 'ko';
            localStorage.setItem('portfolio-lang', currentLang);
            applyI18n();
        });
    }

    function initMagneticButtons() {
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.03, y: -3, duration: 0.4, ease: 'power3.out' }));
            btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }));
            btn.addEventListener('mousedown', () => gsap.to(btn, { scale: 0.97, y: 0, duration: 0.1 }));
            btn.addEventListener('mouseup', () => gsap.to(btn, { scale: 1.03, y: -3, duration: 0.4, ease: 'back.out(1.5)' }));
        });
    }

    function formatRevenue(d, lang) {
        if (d === 0) return '0';
        if (lang === 'ko') {
            if (d >= 100000000) return (d / 100000000).toFixed(1).replace('.0', '') + '억';
            return (d / 10000).toFixed(0) + '만';
        }
        if (d >= 1000000) return (d / 1000000).toFixed(1) + 'M';
        return (d / 1000).toFixed(0) + 'K';
    }

    function drawChart() {
        if (chartDrawn || typeof d3 === 'undefined') return;
        chartDrawn = true;

        const rawData = [
            { date: 'Apr-26', value: 124828580 },
            { date: 'Mar-26', value: 66870773 },
            { date: 'Feb-26', value: 32014976 },
            { date: 'Jan-26', value: 26235564 },
            { date: 'Dec-25', value: 30910873 },
            { date: 'Nov-25', value: 18736127 },
            { date: 'Oct-25', value: 9266434 },
            { date: 'Sep-25', value: 12393460 },
            { date: 'Aug-25', value: 4748444 },
            { date: 'Jul-25', value: 2239478 },
            { date: 'Jun-25', value: 819487 }
        ];

        const parseDate = d3.timeParse('%b-%y');
        const data = rawData.map(d => ({ date: parseDate(d.date), value: d.value }));
        data.sort((a, b) => d3.ascending(a.date, b.date));

        const container = d3.select('#chart-container');
        const width = container.node().getBoundingClientRect().width;
        const height = 380;
        const margin = { top: 30, right: 20, bottom: 30, left: 55 };

        const svg = container.append('svg').attr('width', width).attr('height', height).attr('role', 'img').attr('aria-label', t('biz.chart'));

        const defs = svg.append('defs');
        const gradient = defs.append('linearGradient').attr('id', 'line-gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%');
        gradient.append('stop').attr('offset', '0%').attr('stop-color', '#2997ff');
        gradient.append('stop').attr('offset', '100%').attr('stop-color', '#ff295c');

        const x = d3.scaleTime().domain(d3.extent(data, d => d.date)).range([margin.left, width - margin.right]);
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value) * 1.1]).range([height - margin.bottom, margin.top]);

        svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(d3.timeMonth.every(2)).tickFormat(d3.timeFormat('%y.%m')).tickSizeOuter(0).tickPadding(10))
            .select('.domain').attr('stroke-width', 0);

        svg.append('g').attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5).tickFormat(d => formatRevenue(d, currentLang)).tickSizeOuter(0).tickPadding(10))
            .select('.domain').attr('stroke-width', 0);

        svg.append('g').attr('class', 'grid')
            .call(d3.axisLeft(y).tickSize(-width + margin.left + margin.right).tickFormat('').ticks(5))
            .attr('transform', `translate(${margin.left},0)`)
            .selectAll('line').attr('stroke', 'var(--border-color)').attr('stroke-dasharray', '3,3');
        svg.select('.grid.domain').remove();

        const line = d3.line().x(d => x(d.date)).y(d => y(d.value)).curve(d3.curveMonotoneX);
        const path = svg.append('path').datum(data).attr('class', 'line').attr('d', line);
        const totalLength = path.node().getTotalLength();
        path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition().duration(2500).ease(d3.easeCubicOut)
            .attr('stroke-dashoffset', 0);
    }

    function drawFlowDiagram() {
        if (flowDrawn || typeof d3 === 'undefined') return;
        flowDrawn = true;

        const steps = [
            { id: 'flow.1' },
            { id: 'flow.2' },
            { id: 'flow.3' },
            { id: 'flow.4' },
            { id: 'flow.5' }
        ].map(s => ({ ...s, label: t(s.id) }));

        const container = d3.select('#flow-container');
        const width = container.node().getBoundingClientRect().width;
        const height = 320;
        const margin = { top: 40, right: 20, bottom: 40, left: 20 };
        const nodeW = Math.min(140, (width - margin.left - margin.right) / 5 - 12);
        const nodeH = 56;
        const gap = (width - margin.left - margin.right - nodeW * 5) / 4;
        const y = height / 2 - nodeH / 2;
        const connectorPad = 12;
        const yMid = y + nodeH / 2;

        const positions = steps.map((_, i) => margin.left + i * (nodeW + gap));

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('role', 'img')
            .attr('aria-label', t('biz.flow'));

        const defs = svg.append('defs');
        defs.append('marker')
            .attr('id', 'flow-arrowhead')
            .attr('viewBox', '0 0 10 10')
            .attr('refX', 8)
            .attr('refY', 5)
            .attr('markerWidth', 7)
            .attr('markerHeight', 7)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 Z')
            .attr('fill', 'var(--accent)')
            .attr('opacity', 0.85);

        const connectors = svg.append('g').attr('class', 'flow-connectors');
        for (let i = 0; i < steps.length - 1; i++) {
            const lineStart = positions[i] + nodeW + connectorPad;
            const lineEnd = positions[i + 1] - connectorPad;
            connectors.append('line')
                .attr('class', 'flow-link')
                .attr('x1', lineStart)
                .attr('y1', yMid)
                .attr('x2', lineEnd)
                .attr('y2', yMid)
                .attr('marker-end', 'url(#flow-arrowhead)');
        }

        const nodes = svg.append('g').attr('class', 'flow-nodes');
        steps.forEach((step, i) => {
            const x = positions[i];
            const g = nodes.append('g').attr('class', 'flow-node').attr('transform', `translate(${x},${y})`);
            g.append('rect')
                .attr('width', nodeW)
                .attr('height', nodeH)
                .attr('rx', 12)
                .attr('fill', 'var(--card-bg)')
                .attr('stroke', 'var(--accent)')
                .attr('stroke-width', 1.5);
            g.append('text')
                .attr('x', nodeW / 2)
                .attr('y', nodeH / 2 + 5)
                .attr('text-anchor', 'middle')
                .attr('fill', 'var(--text-primary)')
                .attr('font-size', Math.min(12, nodeW / 8))
                .attr('font-family', 'Pretendard Variable, sans-serif')
                .text(step.label);
        });
    }

    function buildDummyDashboardHTML(fullscreen) {
        const bars = [45, 72, 58, 88, 65, 92, 78, 55, 83, 70];
        const barHTML = bars.map(h => `<div class="dummy-bar" style="height:${h}%"></div>`).join('');
        const cls = fullscreen ? 'dummy-dashboard lightbox-dashboard' : 'dummy-dashboard';
        return `
            <div class="${cls}" role="img" aria-label="${t('solar.dashboard.title')}">
                <div class="dummy-dashboard-header">
                    <div class="dummy-dots" aria-hidden="true"><span></span><span></span><span></span></div>
                    <span>${t('solar.dashboard.title')}</span>
                </div>
                <div class="dummy-dashboard-body">
                    <nav class="dummy-sidebar" aria-label="Dashboard navigation">
                        <div class="dummy-nav-item active"><span class="dummy-icon"></span>${t('solar.nav1')}</div>
                        <div class="dummy-nav-item"><span class="dummy-icon muted"></span>${t('solar.nav2')}</div>
                        <div class="dummy-nav-item"><span class="dummy-icon muted"></span>${t('solar.nav3')}</div>
                        <div class="dummy-nav-item"><span class="dummy-icon muted"></span>${t('solar.nav4')}</div>
                    </nav>
                    <div class="dummy-main">
                        <div class="dummy-stats">
                            <div class="dummy-stat"><div class="dummy-stat-label"><span class="dummy-icon"></span>${t('solar.stat1')}</div><div class="dummy-stat-value">128.4 kWh</div></div>
                            <div class="dummy-stat"><div class="dummy-stat-label"><span class="dummy-icon"></span>${t('solar.stat2')}</div><div class="dummy-stat-value">94.2%</div></div>
                            <div class="dummy-stat"><div class="dummy-stat-label"><span class="dummy-icon"></span>${t('solar.stat3')}</div><div class="dummy-stat-value">2</div></div>
                        </div>
                        <div class="dummy-chart-area" aria-hidden="true">${barHTML}</div>
                    </div>
                </div>
            </div>`;
    }

    function initDashboardPreview() {
        let wrap = document.getElementById('dashboard-preview');
        if (!wrap) return;

        const parent = wrap.parentNode;
        const fresh = document.createElement('div');
        fresh.id = 'dashboard-preview';
        fresh.className = 'card-interactive';
        fresh.innerHTML = buildDummyDashboardHTML(false) + `<p class="dummy-preview-hint">${t('solar.dashboard.hint')}</p>`;
        fresh.setAttribute('role', 'button');
        fresh.setAttribute('tabindex', '0');
        fresh.setAttribute('aria-label', t('solar.dashboard.title'));
        parent.replaceChild(fresh, wrap);
        wrap = fresh;

        const openDashboard = () => openLightbox([{ type: 'dashboard', caption: t('solar.dashboard.title') }], 0);
        wrap.addEventListener('click', openDashboard);
        wrap.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openDashboard();
            }
        });
    }

    function initGallery() {
        const galleryData = [
            { src: 'images/For_CI_BI_1.png', key: 'gallery.1' },
            { src: 'images/For_App_Store_3.png', key: 'gallery.2' },
            { src: 'images/For_SNS.png', key: 'gallery.3' },
            { src: 'images/For_Personal_business_CMYK_1.png', key: 'gallery.4' },
            { src: 'images/For_Personal_business_RGB_1.png', key: 'gallery.5' },
            { src: 'images/Dashboard_2.png', key: 'gallery.6' },
            { src: 'images/mohaet.png', key: 'gallery.7' },
            { src: 'images/Apple_AirPods_1.png', key: 'gallery.8' },
            { src: 'images/Apple_Hermes_1.png', key: 'gallery.9' },
            { src: 'images/Brief_Results_1.png', key: 'gallery.10' },
            { src: 'images/Brief_Results_2.png', key: 'gallery.11' },
            { src: 'images/Brief_Results_3.png', key: 'gallery.12' },
            { src: 'images/Brief_Results_4.png', key: 'gallery.13' }
        ];

        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        grid.innerHTML = '';
        lightboxItems = galleryData.map(item => ({
            type: 'image',
            src: item.src,
            caption: t(item.key)
        }));

        galleryData.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.className = 'gallery-item';
            btn.type = 'button';
            btn.setAttribute('aria-label', t(item.key));
            btn.innerHTML = `
                <img src="${item.src}" alt="${t(item.key)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="gallery-placeholder" style="display:none">${t(item.key)}</div>
                <figcaption data-i18n="gallery.${index + 1}">${t(item.key)}</figcaption>`;
            btn.addEventListener('click', () => openLightbox(lightboxItems, index));
            grid.appendChild(btn);
        });
    }

    function openLightbox(items, index) {
        lightboxItems = items;
        lightboxIndex = index;
        renderLightbox();
        const lb = document.getElementById('lightbox');
        lb.classList.add('open');
        lb.setAttribute('aria-hidden', 'false');
        document.getElementById('lightbox-close').focus();
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lb = document.getElementById('lightbox');
        lb.classList.remove('open');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function renderLightbox() {
        const content = document.getElementById('lightbox-content');
        const item = lightboxItems[lightboxIndex];
        if (item.type === 'dashboard') {
            content.innerHTML = buildDummyDashboardHTML(true);
        } else {
            content.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
        }
        document.getElementById('lightbox-caption').textContent = item.caption || '';
        const showNav = lightboxItems.length > 1;
        document.getElementById('lightbox-prev').classList.toggle('is-hidden', !showNav);
        document.getElementById('lightbox-next').classList.toggle('is-hidden', !showNav);
    }

    function initLightbox() {
        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
        document.getElementById('lightbox-prev').addEventListener('click', () => {
            lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
            renderLightbox();
        });
        document.getElementById('lightbox-next').addEventListener('click', () => {
            lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
            renderLightbox();
        });
        document.getElementById('lightbox').addEventListener('click', e => {
            if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-stage')) closeLightbox();
        });
        document.addEventListener('keydown', e => {
            const lb = document.getElementById('lightbox');
            if (!lb.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
            if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
        });
    }

    function initPdfDownload() {
        const downloadPdf = async () => {
            const btn = document.getElementById('pdf-download');
            const orig = btn.innerHTML;
            btn.innerHTML = t('pdf.generating');
            btn.disabled = true;

            const element = document.querySelector('.container');
            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'Kim_Young_Hoon_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            try {
                await html2pdf().set(opt).from(element).save();
            } catch (err) {
                console.error(err);
                window.print();
            }
            btn.innerHTML = orig;
            btn.disabled = false;
        };

        document.getElementById('pdf-download').addEventListener('click', downloadPdf);
        document.getElementById('hero-resume').addEventListener('click', e => {
            e.preventDefault();
            downloadPdf();
        });
    }

    function initObservers() {
        const bizCard = document.getElementById('biznc-card');
        if (bizCard) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        drawChart();
                        drawFlowDiagram();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(bizCard);
        }

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.floating-toc a');
        const tocObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
        sections.forEach(s => tocObserver.observe(s));
    }

    window.addEventListener('resize', () => {
        if (chartDrawn) {
            d3.select('#chart-container').selectAll('*').remove();
            chartDrawn = false;
            drawChart();
        }
        if (flowDrawn) {
            d3.select('#flow-container').selectAll('*').remove();
            flowDrawn = false;
            drawFlowDiagram();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initLang();
        initMagneticButtons();
        initDashboardPreview();
        initGallery();
        initLightbox();
        initPdfDownload();
        initObservers();
        applyI18n();
    });
})();
