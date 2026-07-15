(function () {
    'use strict';

    const translations = {
        ko: {
            'meta.title': '김영훈 | UX/UI & 풀스택 아키텍트',
            'meta.description': '시각 디자인부터 웹·앱 개발, 서비스 운영까지. 김영훈 포트폴리오.',
            'nav.theme.light': 'Light Mode',
            'nav.theme.dark': 'Dark Mode',
            'nav.lang': 'EN',
            'toc.intro': 'Intro',
            'toc.about': '소개',
            'toc.experience': '경력',
            'toc.projects': '프로젝트',
            'toc.gallery': '갤러리',
            'toc.contact': 'Contact',
            'toc.print': 'Print',
            'toc.pdf': 'PDF',
            'hero.title': 'Digital Convergence:<br><i style="font-weight:600;color:var(--text-secondary);font-style:normal;">Design & Engineering.</i>',
            'hero.desc': '시각 디자인부터 서비스 전체를 책임지는 일까지.<br>깔끔한 디자인과 실용적인 개발을 합쳐, 실용적인 서비스를 만듭니다.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'about.title': '소개',
            'about.quote.sub': '막히면',
            'about.quote.main': '같이 풀어보면 됩니다',
            'about.p1': '디자인·개발·3D를 같이 다뤄 왔습니다. 그사이 상은 <b>8번</b> 받았고, <b>2017년</b>부터 외주·프리랜스도 계속하고 있습니다.',
            'about.p2': '지금까지 <b>250건 이상의 의뢰</b>를 맡았습니다. 의뢰 내용을 먼저 맞추고, 제 취향만 밀어붙이지는 않습니다.',
            'about.p3': '팀으로 일할 때는 말을 많이 하기보다 상대 말을 듣고 맞추는 쪽에 가깝습니다. 개발을 조금 해본 덕에 개발자와도 일하기가 수월했고, 기획이 바쁠 때는 옆에서 같이 챙기는 편입니다.',
            'about.stat.awards': '수상',
            'about.stat.projects': '진행한 프로젝트',
            'about.stat.since': '프리랜스 시작',
            'about.tools.title': 'Toolbox',
            'exp.title': '경력',
            'exp.1.title': 'Visual Design & Engineering Tools',
            'exp.1.date': 'Background',
            'exp.1.desc': '시각디자인 전공, GTQ 1급. AutoCAD와 3D 프린터로 건축물·의료용 캐뉼라 부품 도면도 작업할 수 있습니다.',
            'exp.2.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.2.date': 'Since 2019',
            'exp.2.desc': 'SSAFY에서 Python AI 챗봇·웹 디자인 프로젝트를 했고, 삼성 SW 역량테스트 A형을 통과했습니다. Alpaco에서는 UiPath로 RPA 시스템을 만들었습니다.',
            'exp.3.title': '디자인 및 개발 프리랜서',
            'exp.3.date': '2017. 01 - 2022. 01',
            'exp.3.desc': '시각디자인을 바탕으로 200건 넘는 프리랜스·외주를 마쳤습니다. 기획, UI/UX, 영상 편집까지 폭넓게 경험했습니다.',
            'exp.4.title': '태양광 사업 UI·UX 디자이너',
            'exp.4.date': '2023. 02 - 2024. 05',
            'exp.4.desc': '에너지 회사에서 복잡한 데이터를 쉽게 보이도록 UI/UX를 맡았습니다. 기획부터 화면 구현까지 하면서 서비스 사용성을 높였습니다.',
            'exp.5.title': 'Apple Korea GP (프리랜서)',
            'exp.5.date': '2024. 08 - 2024. 09',
            'exp.5.desc': '애플이 요구하는 수준에 맞춰 화면·그래픽을 작업했습니다. 여백과 글자 배치를 정리해 마감 품질을 맞췄습니다.',
            'exp.6.title': '의료용품 회사 개발/디자인 팀장',
            'exp.6.date': '2025. 03 - 2026. 06',
            'exp.6.desc': '중소기업 팀장으로 2,500종이 넘는 의료·복지용품 판매와 연결된 디자인·개발을 맡았습니다. 엑셀 데이터 이전과 웹·서버 구축을 이끌었고, 기획 초기부터 물류·마케팅 팀과 직접 맞대며 소통이 막히는 부분을 줄였습니다.',
            'exp.7.title': 'Apple Korea GP (프리랜서)',
            'exp.7.date': '2026. 07 - 2026. 09',
            'exp.7.desc': '2024년에 이어 다시 섭외되어 같은 기준으로 화면·그래픽을 작업했습니다. 여백과 글자 배치를 정리해 마감 품질을 맞췄습니다.',
            'proj.title': '주요 프로젝트',
            'bub.title': 'Bub Diary',
            'bub.label': 'Full-Stack · Product Design',
            'bub.desc': '부모·가족이 함께 쓰는 아기 케어 다이어리입니다. 휴대폰으로 빠르게 기록하고, 파스텔 UI와 다크 모드, 11개 언어를 지원합니다. Supabase 무료 백엔드와 Vercel에 배포했습니다.',
            'bub.b1': '빠른 기록: 수유(모유/분유/유축/이유식), 기저귀, 체온, 성장, 예방접종·진료, 수면·목욕 등 활동을 한곳에서 남깁니다.',
            'bub.b2': '가족 공유: 초대 코드로 보호자·가족을 초대하고, 아기별 타임라인·통계를 같이 봅니다.',
            'bub.b3': '다국어·접근성: 한국어 기본 + 영어(AU)·중·일·아랍어 등 11개 언어. 아랍어는 RTL, 4px 그리드 모바일 우선 UI.',
            'bub.b4': '풀스택 배포: Next.js·TypeScript·Tailwind + Supabase Auth/DB. 가입 없이 바로 쓰는 UX, 제품 투어, 무료 요금제 keepalive(cron)까지 구축.',
            'apple.title': 'Apple KR - iPhone 16 New Release',
            'apple.label': 'Visual Contract · NDA Protected',
            'apple.desc': '2024년과 2026년 Apple Korea GP 프로젝트에 참여했습니다. 웹 위에 애플의 감각을 옮겨 담는 작업이었습니다.',
            'apple.nda': 'NDA 때문에 자세한 내용은 자세히 공개할 수 없습니다.',
            'solar.title': '태양광 에너지 서비스 통합 플랫폼',
            'solar.label': 'UI/UX Design & Front-end',
            'solar.desc': '5개 서비스의 화면 설계와 브랜드 톤을 맞췄습니다. 복잡한 전력 데이터를 관리자와 고객이 각각 보기 쉽게 정리했습니다.',
            'solar.b1': 'UI 정리 및 컴포넌트: 5개 웹·앱 서비스의 UI 규칙을 맞추고 디자인 시스템을 만들었습니다.',
            'solar.b2': 'PC 모니터링 대시보드: 4px 그리드 반응형 대시보드 — 아래 미리보기를 눌러 전체 화면을 보세요.',
            'solar.b3': '인버터 하드웨어 UX/UI: 7-Segment 발전량 표시기 기획과 일본 진출용 화면·문구 작업.',
            'solar.b4': 'IP 기반 일본 맞춤: 일본 IP로 접속하면 언어, 단위, 통화를 일본 기준으로 자동 보여 주도록 했습니다.',
            'solar.dashboard.title': 'Energy Monitoring Dashboard',
            'solar.dashboard.hint': '클릭하여 전체 화면 미리보기',
            'solar.dash.brand': 'TEO 김태양',
            'solar.dash.search': '발전소 검색',
            'solar.dash.breadcrumb': 'Dashboard',
            'solar.dash.commError': '통신이상',
            'solar.dash.lowGen': '저발전',
            'solar.dash.plantName': '김태양 태양광 발전소',
            'solar.dash.connected': '연결 발전소',
            'solar.dash.normal': '정상',
            'solar.dash.commErr': '통신이상',
            'solar.dash.genErr': '발전이상',
            'solar.dash.plantList': '발전소 목록',
            'solar.dash.installed': '설비용량',
            'solar.dash.current': '현재발전량',
            'solar.dash.time': '발전시간',
            'solar.dash.hourly': '시간별 발전량 그래프',
            'solar.dash.total': '합계',
            'solar.dash.history': '인버터 운영 이력',
            'solar.dash.inverterStatus': '인버터 상태',
            'solar.dash.operating': '운전중',
            'solar.dash.dailyGen': '일일발전',
            'solar.dash.input': '입력전력',
            'solar.dash.output': '출력전력',
            'solar.dash.footer': '© 2023. H Energy Co., Ltd.',
            'biz.title': '의료·복지용구 통합 플랫폼 (Biz & C)',
            'biz.label': 'Service PM & Full-stack Architect',
            'biz.desc': '2,500개가 넘는 품목의 주문·매칭 로직을 자동화했고, 디자인부터 서버까지 전 과정을 맡았습니다.',
            'biz.b1': '데이터 연동: Cafe24 한계를 넘기기 위해 AWS·FastAPI·MySQL로 별도 서버를 구축했습니다.',
            'biz.b2': '영업 자동화: 고객 조건에 맞는 복지용구 자동 추천, 제휴사 코드 URL, 등급별 권한.',
            'biz.b3': '현장과의 소통: 물류·영업 팀과 직접 이야기하며 오해나 지연이 생기지 않게 맞췄습니다.',
            'biz.chart': 'Revenue Growth',
            'biz.flow': 'UX Flow for Product-Auto-Matching',
            'biz.flow.portal': 'UX Flow for Affiliated Client Portal',
            'flow.1': '사용중인 물품 입력',
            'flow.2': 'AI 정보 매칭',
            'flow.3': 'SKU 제품 매칭',
            'flow.4': '장바구니 연동',
            'flow.5': '고객 주문',
            'flow.portal.1': '제휴 전용 대시보드',
            'flow.portal.2': '공공데이터 API 호출',
            'flow.portal.3': '제휴 신청/검토',
            'flow.portal.4': '공지/이벤트 추가',
            'flow.portal.5': '배포 완료',
            'gallery.title': '디자인 갤러리',
            'gallery.desc': '예전 포트폴리오 대표 작업과 외부 링크를 모았습니다. 이미지를 누르면 크게 볼 수 있습니다.',
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
            'link.bub': 'Bub Diary →',
            'link.bub.github': 'GitHub →',
            'contact.title': 'Get in Touch',
            'contact.desc': '함께 만들어 볼 일이 있으면 연락 주세요.',
            'contact.name': 'Name or Company',
            'contact.email': 'Email Address',
            'contact.message': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'footer.a11y': '키보드(Tab)로 이동할 수 있고, 색 대비·시맨틱 HTML·대체 텍스트를 넣었습니다. 라이트박스는 Esc로 닫고, 화살표로 이동합니다.',
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
            'toc.about': 'About',
            'toc.experience': 'Career',
            'toc.projects': 'Projects',
            'toc.gallery': 'Gallery',
            'toc.contact': 'Contact',
            'toc.print': 'Print',
            'toc.pdf': 'PDF',
            'hero.title': 'Digital Convergence:<br><i style="font-weight:600;color:var(--text-secondary);font-style:normal;">Design & Engineering.</i>',
            'hero.desc': 'From visual design to full-stack service leadership.<br>I build products with business value by combining minimalism and precise engineering.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'about.title': 'About Me',
            'about.quote.sub': 'If something’s stuck',
            'about.quote.main': 'we can work it through',
            'about.p1': 'I work across design, development, and 3D. Along the way I’ve received <b>8 awards</b>, and I’ve been freelancing for companies <b>since 2017</b>.',
            'about.p2': 'I’ve taken on <b>250+</b> client briefs. I start from what the client needs, rather than pushing only my own design taste.',
            'about.p3': 'On a team I’m better at listening and adjusting than talking over people. Having studied development earlier made it easier to work with engineers, and when planning was busy I tended to jump in and help sort things out.',
            'about.stat.awards': 'Awards',
            'about.stat.projects': 'Freelance Projects',
            'about.stat.since': 'Freelancing Since',
            'about.tools.title': 'Toolbox',
            'exp.title': 'Career Journey',
            'exp.1.title': 'Visual Design & Engineering Tools',
            'exp.1.date': 'Background',
            'exp.1.desc': 'Visual design major, GTQ Level 1, AutoCAD & 3D printing for architectural and medical canula part drawings.',
            'exp.2.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.2.date': 'Since 2019',
            'exp.2.desc': 'Built AI chatbot and web design projects at SSAFY; passed Samsung SW Competency Test Type A. Built UiPath RPA at Alpaco.',
            'exp.3.title': 'Design & Development Freelancer',
            'exp.3.date': '2017. 01 - 2022. 01',
            'exp.3.desc': 'Completed 200+ freelance projects with a visual design foundation. Strengthened planning, UI/UX, and video editing skills.',
            'exp.4.title': 'Solar Energy UI/UX Designer',
            'exp.4.date': '2023. 02 - 2024. 05',
            'exp.4.desc': 'Designed intuitive UI/UX for complex energy data. Planned and implemented frontend screens to increase product value.',
            'exp.5.title': 'Apple Korea GP (Freelance)',
            'exp.5.date': '2024. 08 - 2024. 09',
            'exp.5.desc': 'Delivered refined visual assets aligned with global standards. Maximized visual fidelity through minimal typography and whitespace.',
            'exp.6.title': 'Dev/Design Team Lead — Medical Supplies Co.',
            'exp.6.date': '2025. 03 - 2026. 06',
            'exp.6.desc': 'Led design and development for 2,500+ medical/welfare SKUs. Drove Excel data migration and full-stack pipelines while resolving cross-team bottlenecks with logistics and marketing.',
            'exp.7.title': 'Apple Korea GP (Freelance)',
            'exp.7.date': 'Late Jul 2026 - Mid Sep 2026',
            'exp.7.desc': 'Re-engaged for Apple Korea GP following the 2024 project. Delivered refined visual assets aligned with global standards, maximizing fidelity through minimal typography and whitespace.',
            'proj.title': 'Key Projects',
            'bub.title': 'Bub Diary',
            'bub.label': 'Full-Stack · Product Design',
            'bub.desc': 'A mobile-first baby care diary for parents and family. Fast logging, pastel UI with dark mode, and 11 languages. Built on free Supabase and deployed to Vercel.',
            'bub.b1': 'Quick logging: feeding (breast / formula / expressed / solids), nappies, temperature, growth, immunisations & check-ups, sleep and activities in one place.',
            'bub.b2': 'Family sharing: invite codes for parents and caregivers, with per-baby timelines and stats.',
            'bub.b3': 'i18n & a11y: Korean default plus English (AU), Chinese, Japanese, Arabic and more (11 locales). Arabic RTL, 4px-grid phone-first UI.',
            'bub.b4': 'Full-stack shipping: Next.js, TypeScript, Tailwind + Supabase Auth/DB. Signup without email confirm, in-app product tour, and free-tier keepalive via cron.',
            'apple.title': 'Apple KR - iPhone 16 New Release',
            'apple.label': 'Visual Contract · NDA Protected',
            'apple.desc': 'Participated in Apple Korea GP projects in 2024 and 2026. Translating Apple’s sensibility onto the web.',
            'apple.nda': 'Due to NDA, details cannot be fully disclosed.',
            'solar.title': 'Solar Energy Integrated Platform',
            'solar.label': 'UI/UX Design & Front-end',
            'solar.desc': 'Led product design and brand experience across 5 services. Visualized complex power data for admins and customers.',
            'solar.b1': 'UX/UI & component system: standardized UI across 5 web/app services with a design system.',
            'solar.b2': 'PC monitoring dashboard: 4px grid responsive dashboard — click the interactive preview below for fullscreen.',
            'solar.b3': 'Inverter hardware UX & global expansion: 7-segment meter UX and Japan localization.',
            'solar.b4': 'IP-based Japan localization: detect Japanese visitors by IP to auto-serve language, units, and currency tailored to the Japan market.',
            'solar.dashboard.title': 'Energy Monitoring Dashboard',
            'solar.dashboard.hint': 'Click for fullscreen preview',
            'solar.dash.brand': 'TEO Solar Kim',
            'solar.dash.search': 'Search plants',
            'solar.dash.breadcrumb': 'Dashboard',
            'solar.dash.commError': 'Comm. Error',
            'solar.dash.lowGen': 'Low Generation',
            'solar.dash.plantName': 'Solar Kim Power Plant',
            'solar.dash.connected': 'Connected Plants',
            'solar.dash.normal': 'Normal',
            'solar.dash.commErr': 'Comm. Error',
            'solar.dash.genErr': 'Gen. Error',
            'solar.dash.plantList': 'Plant List',
            'solar.dash.installed': 'Installed Cap.',
            'solar.dash.current': 'Current Gen.',
            'solar.dash.time': 'Gen. Time',
            'solar.dash.hourly': 'Hourly Generation',
            'solar.dash.total': 'Total',
            'solar.dash.history': 'Inverter Operation History',
            'solar.dash.inverterStatus': 'Inverter Status',
            'solar.dash.operating': 'Operating',
            'solar.dash.dailyGen': 'Daily Gen.',
            'solar.dash.input': 'Input',
            'solar.dash.output': 'Output',
            'solar.dash.footer': '© 2023. H Energy Co., Ltd.',
            'biz.title': 'Medical & Welfare Supplies Platform (Biz & C)',
            'biz.label': 'Service PM & Full-Stack Architect',
            'biz.desc': 'Automated business logic for 2,500+ SKUs and led the full stack from design system to backend pipeline.',
            'biz.b1': 'Data pipeline: proprietary backend (AWS, FastAPI, MySQL) bypassing Cafe24 limitations.',
            'biz.b2': 'Sales automation: welfare product auto-matching, partner code URLs, role-based permissions.',
            'biz.b3': 'Cross-functional leadership: proactive communication with logistics and sales teams.',
            'biz.chart': 'Revenue Growth',
            'biz.flow': 'UX Flow for Product-Auto-Matching',
            'biz.flow.portal': 'UX Flow for Affiliated Client Portal',
            'flow.1': 'Customer Input',
            'flow.2': 'Eligibility API',
            'flow.3': 'SKU Auto-Match',
            'flow.4': 'Partner URL',
            'flow.5': 'Order Complete',
            'flow.portal.1': 'Affiliated Client Dashboard',
            'flow.portal.2': 'Public Data API Call',
            'flow.portal.3': 'Partnership Application/Review',
            'flow.portal.4': 'Notice/Event Publishing',
            'flow.portal.5': 'Deployment Complete',
            'gallery.title': 'Design Gallery',
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
            'link.bub': 'Bub Diary →',
            'link.bub.github': 'GitHub →',
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
    const flowDrawn = { matching: false, portal: false };

    const FLOW_CONFIGS = [
        {
            key: 'matching',
            containerId: '#flow-container',
            stepKeys: ['flow.1', 'flow.2', 'flow.3', 'flow.4', 'flow.5'],
            ariaKey: 'biz.flow',
            markerId: 'flow-arrowhead-matching'
        },
        {
            key: 'portal',
            containerId: '#flow-portal-container',
            stepKeys: ['flow.portal.1', 'flow.portal.2', 'flow.portal.3', 'flow.portal.4', 'flow.portal.5'],
            ariaKey: 'biz.flow.portal',
            markerId: 'flow-arrowhead-portal'
        }
    ];
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
        redrawFlowDiagrams();

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

    function drawFlowDiagram(config) {
        if (flowDrawn[config.key] || typeof d3 === 'undefined') return;
        const containerEl = document.querySelector(config.containerId);
        if (!containerEl) return;
        flowDrawn[config.key] = true;

        const steps = config.stepKeys.map(id => ({ id, label: t(id) }));
        const count = steps.length;

        const container = d3.select(config.containerId);
        const width = container.node().getBoundingClientRect().width;
        const isVertical = width < 560;

        const svg = container.append('svg')
            .attr('width', width)
            .attr('role', 'img')
            .attr('aria-label', t(config.ariaKey));

        const defs = svg.append('defs');
        defs.append('marker')
            .attr('id', config.markerId)
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
        const nodes = svg.append('g').attr('class', 'flow-nodes');
        const connectorPad = 8;

        const drawNode = (step, x, y, nodeW, nodeH, fontSize) => {
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
                .attr('font-size', fontSize)
                .attr('font-family', 'Pretendard Variable, sans-serif')
                .text(step.label);
        };

        if (isVertical) {
            const padX = 16;
            const padY = 8;
            const nodeW = Math.min(320, width - padX * 2);
            const nodeH = 50;
            const gap = 30;
            const height = padY * 2 + count * nodeH + (count - 1) * gap;
            const x = (width - nodeW) / 2;
            const xMid = x + nodeW / 2;
            const positions = steps.map((_, i) => padY + i * (nodeH + gap));

            svg.attr('height', height);

            for (let i = 0; i < count - 1; i++) {
                connectors.append('line')
                    .attr('class', 'flow-link')
                    .attr('x1', xMid)
                    .attr('y1', positions[i] + nodeH + connectorPad)
                    .attr('x2', xMid)
                    .attr('y2', positions[i + 1] - connectorPad)
                    .attr('marker-end', `url(#${config.markerId})`);
            }

            steps.forEach((step, i) => drawNode(step, x, positions[i], nodeW, nodeH, 13));
        } else {
            const padX = 20;
            const padY = 20;
            const nodeH = 56;
            const nodeW = Math.min(140, (width - padX * 2) / count - 12);
            const gap = (width - padX * 2 - nodeW * count) / (count - 1);
            const height = padY * 2 + nodeH;
            const y = padY;
            const yMid = y + nodeH / 2;
            const positions = steps.map((_, i) => padX + i * (nodeW + gap));
            const pad = Math.max(2, Math.min(connectorPad, (gap - 4) / 2));

            svg.attr('height', height);

            for (let i = 0; i < count - 1; i++) {
                connectors.append('line')
                    .attr('class', 'flow-link')
                    .attr('x1', positions[i] + nodeW + pad)
                    .attr('y1', yMid)
                    .attr('x2', positions[i + 1] - pad)
                    .attr('y2', yMid)
                    .attr('marker-end', `url(#${config.markerId})`);
            }

            steps.forEach((step, i) => drawNode(step, positions[i], y, nodeW, nodeH, Math.min(12, nodeW / 8)));
        }
    }

    function drawAllFlowDiagrams() {
        FLOW_CONFIGS.forEach(drawFlowDiagram);
    }

    function redrawFlowDiagrams() {
        const hadDrawn = FLOW_CONFIGS.some(config => flowDrawn[config.key]);
        if (!hadDrawn) return;
        FLOW_CONFIGS.forEach(config => {
            d3.select(config.containerId).selectAll('*').remove();
            flowDrawn[config.key] = false;
        });
        drawAllFlowDiagrams();
    }

    function buildGaugeSVG() {
        return `<svg class="sk-gauge" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="38" fill="none" stroke="#e8edf2" stroke-width="10"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#22c55e" stroke-width="10" stroke-dasharray="181 58" stroke-linecap="round" transform="rotate(-90 50 50)"/>
            <text x="50" y="54" text-anchor="middle" font-size="16" font-weight="700" fill="#1a1a1a">75.9%</text>
        </svg>`;
    }

    function buildLineChartSVG() {
        return `<svg class="sk-line-chart-svg" viewBox="0 0 360 100" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="sk-area-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></linearGradient></defs>
            <path d="M0,80 L45,72 L90,55 L135,40 L180,28 L225,35 L270,22 L315,30 L360,18 L360,100 L0,100 Z" fill="url(#sk-area-grad)"/>
            <polyline points="0,80 45,72 90,55 135,40 180,28 225,35 270,22 315,30 360,18" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }

    function buildDummyDashboardHTML(fullscreen) {
        const mode = fullscreen ? 'is-expanded' : 'is-compact';
        const plants = [
            { status: 'ok', name: '김태양 1호' },
            { status: 'warn', name: '김태양 2호' },
            { status: 'ok', name: '김태양 3호' },
            { status: 'err', name: '김태양 4호' },
            { status: 'ok', name: '김태양 5호' }
        ];
        const plantListHTML = plants.map(p =>
            `<li class="sk-plant-item"><span class="sk-status-dot sk-status-${p.status}"></span><span>${p.name}</span></li>`
        ).join('');

        const inverters = [1, 2, 3, 4, 5, 6];
        const inverterHTML = inverters.map(n => `
            <div class="sk-inv-card">
                <div class="sk-inv-head"><span>Inverter ${n}</span><span class="sk-inv-badge">${t('solar.dash.operating')}</span></div>
                <div class="sk-inv-icon" aria-hidden="true">☀</div>
                <div class="sk-inv-row"><span>${t('solar.dash.dailyGen')}</span><strong>${(120 + n * 8).toFixed(1)} kWh</strong></div>
                <div class="sk-inv-row"><span>${t('solar.dash.input')}</span><strong>${(3 + n * 0.4).toFixed(1)} kW</strong></div>
                <div class="sk-inv-row"><span>${t('solar.dash.output')}</span><strong>${(2.8 + n * 0.35).toFixed(1)} kW</strong></div>
            </div>`).join('');

        const tableRows = [
            { badge: 'INFO', cls: 'info', msg: 'Inverter 1 normal operation' },
            { badge: 'WARN', cls: 'warn', msg: 'Inverter 3 low output detected' },
            { badge: 'ERROR', cls: 'err', msg: 'Inverter 4 communication lost' },
            { badge: 'DISCONNECT', cls: 'disc', msg: 'Inverter 6 offline' }
        ];
        const tableHTML = tableRows.map((r, idx) => `
            <tr>
                <td>14:${20 + idx * 5}</td>
                <td>INV-${idx + 1}</td>
                <td><span class="sk-tbl-badge sk-tbl-${r.cls}">${r.badge}</span></td>
                <td>${r.msg}</td>
            </tr>`).join('');

        return `
            <div class="dummy-dashboard sk-dashboard ${mode}" role="img" aria-label="${t('solar.dashboard.title')}">
                <header class="sk-topbar">
                    <div class="sk-brand">
                        <span class="sk-brand-icon" aria-hidden="true">☀</span>
                        <span>${t('solar.dash.brand')}</span>
                    </div>
                    <div class="sk-topbar-main">
                        <div class="sk-search">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <span>${t('solar.dash.search')}</span>
                        </div>
                        <div class="sk-top-actions" aria-hidden="true">
                            <span class="sk-top-btn">⛶</span>
                            <span class="sk-top-btn sk-avatar">YH</span>
                        </div>
                    </div>
                </header>

                <div class="sk-subheader">
                    <span class="sk-crumb">${t('solar.dash.breadcrumb')} ›</span>
                    <div class="sk-subheader-main">
                        <div class="sk-alert-badges">
                            <span class="sk-alert sk-alert-err">${t('solar.dash.commError')}</span>
                            <span class="sk-alert sk-alert-warn">${t('solar.dash.lowGen')}</span>
                        </div>
                        <span class="sk-plant-name">${t('solar.dash.plantName')}</span>
                        <div class="sk-weather" aria-hidden="true">28°C · 69%</div>
                    </div>
                </div>

                <div class="sk-body">
                    <aside class="sk-sidebar">
                        <div class="sk-count-card">
                            <span class="sk-count-label">${t('solar.dash.connected')}</span>
                            <span class="sk-count-value">1,000</span>
                        </div>
                        <div class="sk-status-row">
                            <div class="sk-status-card sk-status-ok-card">
                                <span class="sk-status-icon">☀</span>
                                <span class="sk-status-num">999</span>
                                <span class="sk-status-label">${t('solar.dash.normal')}</span>
                            </div>
                            <div class="sk-status-card sk-status-warn-card">
                                <span class="sk-status-icon">📡</span>
                                <span class="sk-status-num">356</span>
                                <span class="sk-status-label">${t('solar.dash.commErr')}</span>
                            </div>
                            <div class="sk-status-card sk-status-err-card">
                                <span class="sk-status-icon">⚠</span>
                                <span class="sk-status-num">123</span>
                                <span class="sk-status-label">${t('solar.dash.genErr')}</span>
                            </div>
                        </div>
                        <div class="sk-plant-list-wrap">
                            <h4 class="sk-list-title">${t('solar.dash.plantList')}</h4>
                            <ul class="sk-plant-list">${plantListHTML}</ul>
                        </div>
                    </aside>

                    <main class="sk-main">
                        <div class="sk-grid">
                            <section class="sk-panel sk-panel-summary">
                                <div class="sk-summary-stats">
                                    <div class="sk-metric"><span>${t('solar.dash.installed')}</span><strong>99.99 kW</strong></div>
                                    <div class="sk-metric"><span>${t('solar.dash.current')}</span><strong>999.99 kWh</strong></div>
                                    <div class="sk-metric"><span>${t('solar.dash.time')}</span><strong>3.9 h</strong></div>
                                </div>
                                <div class="sk-gauge-wrap">${buildGaugeSVG()}</div>
                            </section>

                            <section class="sk-panel sk-panel-chart">
                                <div class="sk-panel-head">
                                    <h4>${t('solar.dash.hourly')}</h4>
                                    <div class="sk-legend">
                                        <span class="sk-legend-pill sk-legend-total">${t('solar.dash.total')}</span>
                                        <span class="sk-legend-pill">INV 1</span>
                                        <span class="sk-legend-pill">INV 2</span>
                                    </div>
                                </div>
                                ${buildLineChartSVG()}
                                <div class="sk-chart-axis" aria-hidden="true"><span>5</span><span>9</span><span>13</span><span>17</span><span>19</span></div>
                            </section>

                            <section class="sk-panel sk-panel-table">
                                <h4 class="sk-panel-head">${t('solar.dash.history')} ›</h4>
                                <table class="sk-table">
                                    <thead><tr><th>Time</th><th>INV</th><th>Level</th><th>Message</th></tr></thead>
                                    <tbody>${tableHTML}</tbody>
                                </table>
                            </section>

                            <section class="sk-panel sk-panel-inverters">
                                <h4 class="sk-panel-head">${t('solar.dash.inverterStatus')}</h4>
                                <div class="sk-inv-grid">${inverterHTML}</div>
                            </section>
                        </div>
                    </main>
                </div>

                <footer class="sk-footer">
                    <span>busanteam_business@naver.com</span>
                    <span>${t('solar.dash.footer')}</span>
                </footer>
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
        document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
        const lb = document.getElementById('lightbox');
        lb.classList.remove('open');
        lb.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
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
                        drawAllFlowDiagrams();
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
        redrawFlowDiagrams();
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
