(function () {
    'use strict';

    const translations = {
        ko: {
            'meta.title': '김영훈 | UX/UI & 풀스택 아키텍트',
            'meta.description': '프로젝트 요구서부터 기획·디자인·개발까지. 김영훈 포트폴리오.',
            'nav.theme.light': 'Light Mode',
            'nav.theme.dark': 'Dark Mode',
            'nav.lang': 'EN',
            'toc.intro': 'Intro',
            'toc.about': '소개',
            'toc.experience': '경력',
            'toc.projects': '프로젝트',
            'toc.gallery': '갤러리',
            'toc.contact': '문의',
            'toc.print': 'Print',
            'toc.pdf': 'PDF',
            'hero.title': 'Digital Convergence:<br><i style="font-weight:600;color:var(--text-secondary);font-style:normal;">Design & Engineering.</i>',
            'hero.desc': '프로젝트 요구서를 받으면 기획부터 개발까지.<br>디자인과 구현을 한 흐름으로 묶어, 바로 쓰는 결과물을 만듭니다.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'about.title': '소개',
            'about.quote.sub': '프로젝트 요구서를 받으면',
            'about.quote.main': '기획부터 개발까지',
            'about.p1': '디자인·개발·3D를 아우르는 실무를 이어 왔습니다. 관련 수상 <b>8회</b>, 기업 외주·프리랜스는 <b>2017년</b>부터 이어지고 있습니다.',
            'about.p2': '<b>250건 이상</b>의 의뢰를 수행했습니다. 요구서를 기준으로 범위를 잡고, 화면 설계부터 구현·납품까지 한 라인으로 마감합니다.',
            'about.p3': '기획이 막히면 설계로, 설계가 막히면 구현으로 답합니다. 역할 경계에 묶이지 않고 요구서를 제품으로 바꿉니다.',
            'about.stat.awards': '수상',
            'about.stat.projects': '수행 의뢰',
            'about.stat.since': '프리랜스 시작',
            'about.tools.title': 'Toolbox',
            'exp.title': '경력',
            'exp.1.title': 'Visual Design & Engineering Tools',
            'exp.1.date': 'Background',
            'exp.1.desc': '시각디자인 전공, GTQ 1급. AutoCAD·3D 프린터로 건축·의료 캐뉼라 도면부터 출력까지 다뤄, 설계와 제작을 연결합니다.',
            'exp.2.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.2.date': 'Since 2019',
            'exp.2.desc': 'SSAFY에서 Python AI 챗봇·웹 디자인 프로젝트를 수행하고 삼성 SW 역량테스트 A형을 통과했습니다. Alpaco에서는 UiPath 기반 RPA를 구축했습니다.',
            'exp.3.title': '디자인 및 개발 프리랜서',
            'exp.3.date': '2017. 01 - 2022. 01',
            'exp.3.desc': '250건 이상의 프리랜스·외주 의뢰를 기획·UI/UX·제작까지 수행해 납품했습니다. 요구서 접수 후 결과물 출고까지 담당했습니다.',
            'exp.4.title': '태양광 사업 UI·UX 디자이너',
            'exp.4.date': '2023. 02 - 2024. 05',
            'exp.4.desc': '에너지 데이터 운영 화면을 기획·UI/UX 설계부터 프론트엔드 구현까지 맡았습니다. 관리자·고객이 바로 읽고 쓰는 화면으로 정리했습니다.',
            'exp.5.title': 'Apple Korea',
            'exp.5.date': '2024. 08 - 2024. 09 · Korea Product Launch Member',
            'exp.5.desc': '프로젝트 2건에 참여했습니다. 비밀유지 계약에 따라 직군·업무 범위·산출물은 공개하지 않습니다.',
            'exp.6.title': '의료용품 회사 개발/디자인 팀장',
            'exp.6.date': '2025. 03 - 2026. 06',
            'exp.6.desc': '팀장으로 2,500종 이상 의료·복지용품 판매에 연결된 기획·디자인·개발을 총괄했습니다. 데이터 이전과 웹·서버 구축을 리딩하고, 물류·마케팅과 맞춰 운영 병목을 줄였습니다.',
            'exp.7.title': 'Apple Korea',
            'exp.7.date': '2026. 07 - 2026. 09 · Korea Product Launch Member',
            'exp.7.desc': '2024년에 이어 다시 합류해 프로젝트 3건에 참여했습니다. 세부 직군과 업무 내용은 NDA로 공개할 수 없습니다.',
            'proj.title': '주요 프로젝트',
            'bub.title': 'Bub Diary',
            'bub.label': '기획 · UI/UX · Full-Stack · PWA',
            'bub.desc': '가족과 함께 쓰는 부드러운 다국어 아기 케어 다이어리입니다. 요구 정의부터 기획·디자인·개발·배포까지 직접 맡았고, 13개 언어·국가별 접종 일정·성장 곡선·투약·돌봄 알림·가족 공유를 Next.js + Supabase + Vercel PWA로 출시했습니다.',
            'bub.b1': '건강·의료 스케줄: 수유·기저귀·체온·성장·수면·투약과 함께 13개국 접종·검진 일정으로 ‘다음 접종’을 안내하고, WHO 기준 성장 곡선으로 키·몸무게 추이를 봅니다.',
            'bub.b2': '다국어·다문화 가정: 한·영(AU)·중·힌디·스페인·프랑스·독일어·아랍·페르시아·우르두·일본·베트남·크메르 13개 언어(RTL 포함). 온보딩에서 언어를 고르고 가족마다 다른 언어로 같은 아기 기록을 봅니다.',
            'bub.b3': '돌봄 알림·다국가 시간대: 기저귀·수유 등 돌봄 시각 알림과, 화면 언어와 별개인 아기 생활권 시간대로 해외 가족과 오늘 요약·일기를 맞춥니다.',
            'bub.b4': '가족 공유·실시간 동기화: 초대 코드·링크로 보호자·돌보미를 연결하고 소유자·돌보미·보기만 역할로 권한을 나눕니다. Supabase Realtime으로 기록을 바로 맞춥니다.',
            'bub.b5': 'PWA 출시: Next.js·TypeScript·Tailwind + Supabase Auth/DB. 홈 화면 설치, 오프라인 기록, 왼쪽·오른쪽 수유·분유·유축 퀵 숏컷, COPPA·GDPR 대응 개인정보 설계까지 포함.',
            'bub.tour.title': '어떤 앱인지 둘러보기',
            'bub.tour.prev': '이전',
            'bub.tour.next': '다음',
            'bub.tour.hint': '가로로 살짝 밀어 넘기세요',
            'bub.tour.welcome.title': '아기의 하루를 가볍게',
            'bub.tour.welcome.body': '부드러운 다국어 육아 일기예요. 수유·기저귀·수면·접종·투약을 기록하고, 돌봄 알림과 초대 코드로 가족과 하나의 아기 프로필을 나눠 씁니다.',
            'bub.tour.home.title': '오늘 한눈에',
            'bub.tour.home.body': '실제 아기 홈과 같아요. 위는 이름 카드, 아래는 오늘 요약이라 돌보는 모두가 같은 상태를 봅니다.',
            'bub.tour.quick.title': '빠른 기록',
            'bub.tour.quick.body': '홈 타일로 수유·기저귀·수면·체온을 바로 남기고, 설치형 PWA에서는 왼쪽·오른쪽 수유·분유·유축 숏컷으로 잠금화면에서도 바로 기록합니다.',
            'bub.tour.health.title': '검진·접종',
            'bub.tour.health.body': '아기 설정의 국가 일정을 따라 ‘다음 접종’을 알려 줍니다. 필수·선택 접종과 병원 방문·의사 지침도 남길 수 있습니다.',
            'bub.tour.growth.title': '성장 곡선',
            'bub.tour.growth.body': '키·몸무게를 남기면 WHO 기준 곡선 위에서 추이를 봅니다. 성장·투약·의료 기록을 한곳에서 이어 봅니다.',
            'bub.tour.timeline.title': '타임라인',
            'bub.tour.timeline.body': '왼쪽에 색 막대가 있는 카드가 쌓입니다. 종류·날짜로 고른 뒤 눌러서 수정하거나 지울 수 있습니다.',
            'bub.tour.family.title': '가족과 함께',
            'bub.tour.family.body': '초대 코드·링크로 가족·돌보미를 초대하고 역할로 권한을 나눕니다. 언어·시간대·돌봄 알림을 각자 맞춰 다문화·해외 가족도 편하게 씁니다.',
            'bub.tour.pwa.title': '집에 두고 쓰는 앱',
            'bub.tour.pwa.body': '홈 화면에 설치하면 앱처럼 열리고, 오프라인에서도 기록을 남길 수 있어요. iOS·Android PWA로 출시했습니다.',
            'bub.tour.privacy.title': '개인정보, 안심하고',
            'bub.tour.privacy.body': '전송·저장 시 암호화되고, 초대된 가족만 볼 수 있습니다. COPPA·GDPR를 고려한 개인정보 안내를 제공합니다.',
            'bub.demo.appName': 'Bub Diary',
            'bub.demo.tagline': '부드러운 다국어 육아 일기',
            'bub.demo.babyName': '미나',
            'bub.demo.babyAge': '4개월 12일',
            'bub.demo.today': '오늘 요약',
            'bub.demo.feeds': '수유·식사',
            'bub.demo.feedsVal': '4회',
            'bub.demo.sleep': '수면',
            'bub.demo.sleepVal': '2시간 40분',
            'bub.demo.quickAdd': '빠른 기록',
            'bub.demo.feeding': '수유',
            'bub.demo.nappy': '기저귀',
            'bub.demo.sleepTile': '수면',
            'bub.demo.temp': '체온',
            'bub.demo.health': '검진·접종',
            'bub.demo.nextVaccine': '다음 접종',
            'bub.demo.vaccine': '6가 혼합백신 · 2차',
            'bub.demo.vaccineWhen': '생후 4개월부터',
            'bub.demo.vaccineSource': '출처: 질병관리청 NIP(2025)',
            'bub.demo.optional': '선택 접종',
            'bub.demo.optionalVac': '수막구균 B · 선택',
            'bub.demo.timeline': '타임라인',
            'bub.demo.feedRow': '분유 90ml',
            'bub.demo.feedMeta': '10:20',
            'bub.demo.sleepRow': '낮잠 · 아기침대',
            'bub.demo.sleepMeta': '1시간 15분',
            'bub.demo.nappyRow': '소변 기저귀',
            'bub.demo.nappyMeta': '09:05',
            'bub.demo.members': '구성원',
            'bub.demo.parentA': '엄마',
            'bub.demo.parentB': '아빠',
            'bub.demo.grandparent': '할머니',
            'bub.demo.owner': '소유자',
            'bub.demo.caregiver': '돌보미',
            'bub.demo.viewer': '보기만',
            'bub.demo.invite': '초대 코드 만들기',
            'bub.demo.privacyTitle': '닉네임만 그대로 보여요',
            'bub.demo.langs': 'KO · EN · ZH · HI · ES · FR · DE · AR · FA · UR · JA · VI · KM',
            'bub.demo.growth': '성장 곡선',
            'bub.demo.growthWeight': '체중',
            'bub.demo.growthHeight': '신장',
            'bub.demo.growthWeightVal': '6.4 kg',
            'bub.demo.growthHeightVal': '63 cm',
            'bub.demo.growthSource': 'WHO 기준',
            'bub.demo.medicine': '투약',
            'bub.demo.medicineVal': '해열제 · 오늘 1회',
            'bub.demo.pwaTitle': '홈 화면에 추가',
            'bub.demo.pwaBody': '오프라인에서도 기록',
            'bub.demo.shortcutLeft': '왼쪽 수유',
            'bub.demo.shortcutRight': '오른쪽 수유',
            'bub.demo.shortcutFormula': '분유',
            'bub.demo.shortcutExpressed': '유축',
            'apple.title': 'Apple Korea',
            'apple.label': 'Korea Product Launch Member · NDA',
            'apple.desc': '2024년과 2026년 Apple Korea에서 Korea Product Launch Member로 참여했습니다. 2024년 프로젝트 2건, 2026년 프로젝트 3건에 참여했으며, 비밀유지 계약에 따라 직군·작업 내용 등 세부 사항은 공개하지 않습니다.',
            'apple.nda': 'NDA에 의해서 자세한 내용은 공개할 수 없습니다.',
            'solar.title': '태양광 에너지 서비스 통합 플랫폼',
            'solar.label': '기획 · UI/UX · Front-end',
            'solar.desc': '5개 서비스 요구를 받아 UI/UX 기획·설계와 프론트엔드까지 진행했습니다. 복잡한 전력 데이터를 관리자·고객 화면으로 나눠 쓸 수 있게 만들었습니다.',
            'solar.b1': '디자인 시스템: 5개 웹·앱 UI 규칙을 통일하고 재사용 컴포넌트로 정리했습니다.',
            'solar.b2': 'PC 모니터링 대시보드: 4px 그리드 반응형 대시보드 — 아래 미리보기로 전체 화면 확인.',
            'solar.b3': '인버터 하드웨어 UX: 7-Segment 발전량 표시기 기획과 일본 진출용 화면·문구 현지화.',
            'solar.b4': '일본 IP 현지화: 접속 지역에 맞춰 언어·단위·통화를 자동 전환하도록 구성했습니다.',
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
            'biz.label': '기획 · PM · Full-Stack',
            'biz.desc': '2,500개 이상 품목의 주문·매칭 요구를 기획부터 디자인·서버 개발까지 리딩했습니다. 영업 현장의 요구서를 자동화 제품으로 바꿨습니다.',
            'biz.b1': '백엔드 구축: Cafe24 한계를 보완하는 AWS·FastAPI·MySQL 인프라.',
            'biz.b2': '영업 자동화: 조건 기반 복지용구 매칭, 제휴사 코드 URL, 등급별 권한.',
            'biz.b3': '운영 정렬: 물류·영업과 요구·일정·이슈를 맞춰 납품 지연을 줄였습니다.',
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
            'gallery.desc': '브랜드·캠페인·서비스 UI 등 요구 기반 산출물과 외부 링크입니다. 이미지를 선택하면 확대됩니다.',
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
            'contact.desc': '요구서·협업·채용 문의는 아래 폼 또는 메일로 남겨 주세요. 기획부터 개발까지 검토해 드립니다.',
            'contact.name': 'Name or Company',
            'contact.email': 'Email Address',
            'contact.message': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'footer.a11y': '키보드(Tab) 이동, 색 대비, 시맨틱 HTML, 대체 텍스트를 반영했습니다. 라이트박스는 Esc로 닫고 화살표로 이동합니다.',
            'footer.lighthouse': 'Lighthouse Audit (Self-reported)',
            'footer.copy': 'Made by Kim Young Hoon',
            'lightbox.close': '닫기',
            'lightbox.prev': '이전',
            'lightbox.next': '다음',
            'pdf.generating': '인쇄 준비 중… PDF로 저장하세요'
        },
        en: {
            'meta.title': 'Kim Young Hoon | UX/UI & Full-Stack Architect',
            'meta.description': 'From project brief to planning, design, and development. Portfolio of Kim Young Hoon.',
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
            'hero.desc': 'Give me a project brief—planning through development.<br>I connect design and build in one flow, and ship results you can use.',
            'hero.connect': "Let's Connect",
            'hero.resume': 'Download Resume',
            'about.title': 'About Me',
            'about.quote.sub': 'From a project brief',
            'about.quote.main': 'planning through development',
            'about.p1': 'I work across design, development, and 3D. <b>8 awards</b> along the way, and client freelance work <b>since 2017</b>.',
            'about.p2': 'I\'ve delivered <b>250+</b> briefs. I define scope from the brief, then take screen design through implementation and handoff in one line.',
            'about.p3': 'When planning stalls, I answer with design. When design stalls, I answer with build. I turn briefs into products without staying stuck in one role.',
            'about.stat.awards': 'Awards',
            'about.stat.projects': 'Client Briefs',
            'about.stat.since': 'Freelancing Since',
            'about.tools.title': 'Toolbox',
            'exp.title': 'Career',
            'exp.1.title': 'Visual Design & Engineering Tools',
            'exp.1.date': 'Background',
            'exp.1.desc': 'Visual design major, GTQ Level 1. AutoCAD and 3D printing from architectural/medical canula drawings to output—linking design to production.',
            'exp.2.title': 'SSAFY & Alpaco (Academy Projects)',
            'exp.2.date': 'Since 2019',
            'exp.2.desc': 'Built Python AI chatbot and web design projects at SSAFY; passed Samsung SW Competency Test Type A. Built UiPath RPA at Alpaco.',
            'exp.3.title': 'Design & Development Freelancer',
            'exp.3.date': '2017. 01 - 2022. 01',
            'exp.3.desc': 'Delivered 250+ freelance briefs through planning, UI/UX, and production. Owned intake through handoff.',
            'exp.4.title': 'Solar Energy UI/UX Designer',
            'exp.4.date': '2023. 02 - 2024. 05',
            'exp.4.desc': 'Owned energy ops screens from planning and UI/UX through frontend implementation—so admins and customers could read and use the data right away.',
            'exp.5.title': 'Apple Korea',
            'exp.5.date': '2024. 08 - 2024. 09 · Korea Product Launch Member',
            'exp.5.desc': 'Participated in 2 projects. Role, scope, and deliverables are withheld under NDA.',
            'exp.6.title': 'Dev/Design Team Lead — Medical Supplies Co.',
            'exp.6.date': '2025. 03 - 2026. 06',
            'exp.6.desc': 'As team lead, owned planning, design, and development tied to sales across 2,500+ medical/welfare SKUs. Led data migration and web/server build-out; reduced ops bottlenecks with logistics and marketing.',
            'exp.7.title': 'Apple Korea',
            'exp.7.date': 'Late Jul 2026 - Mid Sep 2026 · Korea Product Launch Member',
            'exp.7.desc': 'Returned after the 2024 engagement and participated in 3 projects. Specific role and work details cannot be disclosed under NDA.',
            'proj.title': 'Key Projects',
            'bub.title': 'Bub Diary',
            'bub.label': 'Planning · UI/UX · Full-Stack · PWA',
            'bub.desc': 'A gentle bilingual baby care diary for families—owned from requirements through planning, design, build, and launch. 13 languages, country immunisation schedules, growth charts, medication logs, care reminders, and family sharing—shipped as a Next.js + Supabase + Vercel PWA.',
            'bub.b1': 'Health & medical schedules: feeds, nappies, temperature, growth, sleep, and medication—plus “what’s due next” from 13 national schedules and WHO-based growth curves for weight and length.',
            'bub.b2': 'Multilingual & multicultural families: 13 locales (KO, EN-AU, ZH, HI, ES, FR, DE, AR, FA, UR, JA, VI, KM) with RTL for Arabic, Persian, and Urdu—pick a language at onboarding; each caregiver can use their own language on the same baby profile.',
            'bub.b3': 'Care reminders & multi-country timezones: optional reminders for feeds, nappies, and more; set bub’s living-zone clock separately from UI language so overseas family stays synced on “today” and diary dates.',
            'bub.b4': 'Family sharing & realtime sync: invite codes and links for parents and caregivers, with owner / caregiver / viewer roles—records stay aligned via Supabase Realtime.',
            'bub.b5': 'PWA launch: Next.js, TypeScript, Tailwind + Supabase Auth/DB—installable home-screen app, offline logging, quick shortcuts for left/right breastfeed, formula, and expressed milk, plus COPPA/GDPR-aware privacy copy.',
            'bub.tour.title': 'See what this app is like',
            'bub.tour.prev': 'Back',
            'bub.tour.next': 'Next',
            'bub.tour.hint': 'Swipe sideways to browse',
            'bub.tour.welcome.title': 'A gentle diary for bub',
            'bub.tour.welcome.body': 'A soft multilingual baby care diary. Log feeds, nappies, sleep, immunisations, and medication—then share one baby profile with family via care reminders and invite codes.',
            'bub.tour.home.title': 'Today at a glance',
            'bub.tour.home.body': 'Baby home looks like this: name card on top, then today’s summary so everyone stays in sync.',
            'bub.tour.quick.title': 'Quick add',
            'bub.tour.quick.body': 'Home tiles for Feeding, Nappy, Sleep, and Temperature—and as an installed PWA, lock-screen shortcuts for left/right breastfeed, formula, and expressed milk.',
            'bub.tour.health.title': 'Immunisations & checks',
            'bub.tour.health.body': 'Health follows the national schedule you pick for the baby. See what’s due next, log shots, and keep hospital visits and doctor notes.',
            'bub.tour.growth.title': 'Growth curves',
            'bub.tour.growth.body': 'Log weight and length, then follow trends on WHO-based curves—alongside medication and medical records in one place.',
            'bub.tour.timeline.title': 'Timeline',
            'bub.tour.timeline.body': 'Recent cards stack with a colour bar on the left. Filter by type or date, then open a card to edit or delete.',
            'bub.tour.family.title': 'Share with family',
            'bub.tour.family.body': 'Invite parents or caregivers with a code or link, and split roles safely. Language, timezone, and care reminders per person make multicultural and overseas families easy.',
            'bub.tour.pwa.title': 'An app that lives on home',
            'bub.tour.pwa.body': 'Install to the home screen for an app-like shell and keep logging offline. Shipped as an iOS and Android PWA.',
            'bub.tour.privacy.title': 'Your data, protected',
            'bub.tour.privacy.body': 'Encrypted in transit and at rest—only invited family can see it. Privacy guidance considers COPPA and GDPR.',
            'bub.demo.appName': 'Bub Diary',
            'bub.demo.tagline': 'A gentle bilingual baby care diary',
            'bub.demo.babyName': 'Mina',
            'bub.demo.babyAge': '4 months 12 days',
            'bub.demo.today': 'Today’s summary',
            'bub.demo.feeds': 'Feeds & meals',
            'bub.demo.feedsVal': '4',
            'bub.demo.sleep': 'Sleep',
            'bub.demo.sleepVal': '2h 40m',
            'bub.demo.quickAdd': 'Quick add',
            'bub.demo.feeding': 'Feeding',
            'bub.demo.nappy': 'Nappy',
            'bub.demo.sleepTile': 'Sleep',
            'bub.demo.temp': 'Temperature',
            'bub.demo.health': 'Immunisations & checks',
            'bub.demo.nextVaccine': 'Next due',
            'bub.demo.vaccine': 'Hexavalent · 2nd dose',
            'bub.demo.vaccineWhen': 'From 4 months of age',
            'bub.demo.vaccineSource': 'Source: KDCA NIP (2025)',
            'bub.demo.optional': 'Optional vaccines',
            'bub.demo.optionalVac': 'MenB · optional',
            'bub.demo.timeline': 'Timeline',
            'bub.demo.feedRow': 'Bottle 90ml',
            'bub.demo.feedMeta': '10:20',
            'bub.demo.sleepRow': 'Nap · cot',
            'bub.demo.sleepMeta': '1h 15m',
            'bub.demo.nappyRow': 'Wet nappy',
            'bub.demo.nappyMeta': '09:05',
            'bub.demo.members': 'Members',
            'bub.demo.parentA': 'Mom',
            'bub.demo.parentB': 'Dad',
            'bub.demo.grandparent': 'Grandma',
            'bub.demo.owner': 'Owner',
            'bub.demo.caregiver': 'Caregiver',
            'bub.demo.viewer': 'Viewer',
            'bub.demo.invite': 'Generate invite code',
            'bub.demo.privacyTitle': 'Nicknames stay readable',
            'bub.demo.langs': 'KO · EN · ZH · HI · ES · FR · DE · AR · FA · UR · JA · VI · KM',
            'bub.demo.growth': 'Growth curve',
            'bub.demo.growthWeight': 'Weight',
            'bub.demo.growthHeight': 'Length',
            'bub.demo.growthWeightVal': '6.4 kg',
            'bub.demo.growthHeightVal': '63 cm',
            'bub.demo.growthSource': 'WHO reference',
            'bub.demo.medicine': 'Medication',
            'bub.demo.medicineVal': 'Fever med · 1 today',
            'bub.demo.pwaTitle': 'Add to Home Screen',
            'bub.demo.pwaBody': 'Keep logging offline',
            'bub.demo.shortcutLeft': 'Left breast',
            'bub.demo.shortcutRight': 'Right breast',
            'bub.demo.shortcutFormula': 'Formula',
            'bub.demo.shortcutExpressed': 'Expressed',
            'apple.title': 'Apple Korea',
            'apple.label': 'Korea Product Launch Member · NDA',
            'apple.desc': 'Joined Apple Korea as a Korea Product Launch Member in 2024 and 2026—2 projects in 2024 and 3 projects in 2026. Role and work details are withheld under NDA.',
            'apple.nda': 'Due to NDA, details cannot be disclosed.',
            'solar.title': 'Solar Energy Integrated Platform',
            'solar.label': 'Planning · UI/UX · Front-end',
            'solar.desc': 'Took requirements across 5 services through UI/UX planning and frontend build. Turned complex power data into screens admins and customers could use.',
            'solar.b1': 'Design system: unified UI rules and reusable components across 5 web/app services.',
            'solar.b2': 'PC monitoring dashboard: 4px-grid responsive dashboard — open the preview below for fullscreen.',
            'solar.b3': 'Inverter hardware UX: 7-segment generation meter planning and Japan-market screen/copy localization.',
            'solar.b4': 'Japan IP localization: auto-switch language, units, and currency by visitor region.',
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
            'biz.label': 'Planning · PM · Full-Stack',
            'biz.desc': 'Led order/matching requirements for 2,500+ SKUs from planning through design and server development—turning field briefs into an automated product.',
            'biz.b1': 'Backend build: AWS, FastAPI, and MySQL infrastructure beyond Cafe24 limits.',
            'biz.b2': 'Sales automation: condition-based welfare matching, partner-code URLs, role-based permissions.',
            'biz.b3': 'Ops alignment: synced requirements, schedule, and issues with logistics and sales to cut delivery delays.',
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
            'gallery.desc': 'Brief-driven brand, campaign, and service UI work with external links. Select an image to enlarge.',
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
            'contact.desc': 'Send a brief, collaboration, or hiring inquiry via the form or email. I\'ll review planning through development.',
            'contact.name': 'Name or Company',
            'contact.email': 'Email Address',
            'contact.message': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'footer.a11y': 'Keyboard (Tab) navigation, color contrast, semantic HTML, and alt text applied. Lightbox: Esc to close, arrow keys to navigate.',
            'footer.lighthouse': 'Lighthouse Audit (Self-reported)',
            'footer.copy': 'Made by Kim Young Hoon',
            'lightbox.close': 'Close',
            'lightbox.prev': 'Previous',
            'lightbox.next': 'Next',
            'pdf.generating': 'Preparing… choose Save as PDF'
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
        initBubTourSlides();
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

    function bubIcon(kind) {
        const paths = {
            utensils: '<path d="M4 3v7a2 2 0 0 0 2 2h1v7"/><path d="M8 3v18"/><path d="M16 3a4 4 0 0 1 4 4v5h-4V3z"/>',
            droplets: '<path d="M12 2.7c.4.5 6 7.3 6 11.3a6 6 0 1 1-12 0c0-4 5.6-10.8 6-11.3z"/>',
            moon: '<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/>',
            thermo: '<path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',
            syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="m19 9-7.5 7.5a2 2 0 0 1-2.8 0L6 14"/><path d="m8 12 4 4"/><path d="m3 21 3-3"/>'
        };
        return `<svg class="bub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind] || ''}</svg>`;
    }

    function buildBubPhoneVisual(slideId) {
        if (slideId === 'welcome') {
            return `
                <div class="bub-phone-stack">
                    <p class="bub-emoji" aria-hidden="true">🍼</p>
                    <strong class="bub-phone-title">${t('bub.demo.appName')}</strong>
                    <span class="bub-muted">${t('bub.demo.tagline')}</span>
                    <span class="bub-lang-chip">${t('bub.demo.langs')}</span>
                </div>`;
        }
        if (slideId === 'home') {
            return `
                <div class="bub-elev bub-baby-card">
                    <span class="bub-muted bub-small">${t('bub.demo.appName')}</span>
                    <strong class="bub-phone-title">${t('bub.demo.babyName')}</strong>
                    <span class="bub-muted">${t('bub.demo.babyAge')}</span>
                </div>
                <div class="bub-elev bub-summary-card">
                    <strong class="bub-phone-sub">${t('bub.demo.today')}</strong>
                    <div class="bub-stat-grid">
                        <div><span class="bub-muted bub-small">${t('bub.demo.feeds')}</span><strong>${t('bub.demo.feedsVal')}</strong></div>
                        <div><span class="bub-muted bub-small">${t('bub.demo.sleep')}</span><strong>${t('bub.demo.sleepVal')}</strong></div>
                    </div>
                </div>`;
        }
        if (slideId === 'quick') {
            const tiles = [
                { icon: 'utensils', tone: 'accent', label: t('bub.demo.feeding') },
                { icon: 'droplets', tone: 'accent3', label: t('bub.demo.nappy') },
                { icon: 'moon', tone: 'accent2', label: t('bub.demo.sleepTile') },
                { icon: 'thermo', tone: 'danger', label: t('bub.demo.temp') }
            ];
            return `
                <strong class="bub-phone-sub">${t('bub.demo.quickAdd')}</strong>
                <div class="bub-tile-grid">
                    ${tiles.map(tile => `
                        <div class="bub-elev bub-tile">
                            <span class="bub-badge bub-tone-${tile.tone}">${bubIcon(tile.icon)}</span>
                            <strong>${tile.label}</strong>
                        </div>`).join('')}
                </div>`;
        }
        if (slideId === 'health') {
            return `
                <strong class="bub-phone-sub">${t('bub.demo.health')}</strong>
                <div class="bub-elev bub-health-card">
                    <strong class="bub-phone-sub">${t('bub.demo.nextVaccine')}</strong>
                    <span class="bub-strong">${t('bub.demo.vaccine')}</span>
                    <span class="bub-muted bub-small">${t('bub.demo.vaccineWhen')}</span>
                    <span class="bub-muted bub-xsmall">${t('bub.demo.vaccineSource')}</span>
                </div>
                <div class="bub-elev bub-optional-card">
                    <span class="bub-muted bub-small">${t('bub.demo.optional')}</span>
                    <div class="bub-optional-row">
                        <span class="bub-badge bub-tone-accent2">${bubIcon('syringe')}</span>
                        <strong>${t('bub.demo.optionalVac')}</strong>
                    </div>
                </div>`;
        }
        if (slideId === 'growth') {
            return `
                <strong class="bub-phone-sub">${t('bub.demo.growth')}</strong>
                <div class="bub-elev bub-summary-card">
                    <div class="bub-stat-grid">
                        <div><span class="bub-muted bub-small">${t('bub.demo.growthWeight')}</span><strong>${t('bub.demo.growthWeightVal')}</strong></div>
                        <div><span class="bub-muted bub-small">${t('bub.demo.growthHeight')}</span><strong>${t('bub.demo.growthHeightVal')}</strong></div>
                    </div>
                    <span class="bub-muted bub-xsmall">${t('bub.demo.growthSource')}</span>
                    <div class="bub-growth-chart" aria-hidden="true">
                        <svg viewBox="0 0 120 48" preserveAspectRatio="none">
                            <path d="M4 40 C 24 36, 36 28, 52 24 S 84 18, 116 10" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.35"/>
                            <path d="M4 42 C 28 38, 40 32, 58 26 S 88 16, 116 12" fill="none" stroke="currentColor" stroke-width="2.5"/>
                            <circle cx="58" cy="26" r="3.2" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <div class="bub-elev bub-optional-card">
                    <span class="bub-muted bub-small">${t('bub.demo.medicine')}</span>
                    <strong>${t('bub.demo.medicineVal')}</strong>
                </div>`;
        }
        if (slideId === 'timeline') {
            const rows = [
                { title: t('bub.demo.feedRow'), detail: t('bub.demo.feeding'), meta: t('bub.demo.feedMeta'), tone: 'accent' },
                { title: t('bub.demo.sleepRow'), detail: '', meta: t('bub.demo.sleepMeta'), tone: 'accent2' },
                { title: t('bub.demo.nappyRow'), detail: '', meta: t('bub.demo.nappyMeta'), tone: 'accent3' }
            ];
            return `
                <strong class="bub-phone-sub">${t('bub.demo.timeline')}</strong>
                <div class="bub-timeline-list">
                    ${rows.map(row => `
                        <div class="bub-elev bub-timeline-row">
                            <span class="bub-bar bub-tone-${row.tone}"></span>
                            <div>
                                <div class="bub-timeline-head">
                                    <strong>${row.title}</strong>
                                    <span class="bub-muted bub-small">${row.meta}</span>
                                </div>
                                ${row.detail ? `<span class="bub-muted bub-small">${row.detail}</span>` : ''}
                            </div>
                        </div>`).join('')}
                </div>`;
        }
        if (slideId === 'family') {
            const members = [
                { name: t('bub.demo.parentA'), role: t('bub.demo.owner') },
                { name: t('bub.demo.parentB'), role: t('bub.demo.caregiver') },
                { name: t('bub.demo.grandparent'), role: t('bub.demo.viewer') }
            ];
            return `
                <strong class="bub-phone-sub">${t('bub.demo.members')}</strong>
                <div class="bub-elev bub-members">
                    ${members.map(m => `
                        <div class="bub-member-row">
                            <strong>${m.name}</strong>
                            <span class="bub-muted">${m.role}</span>
                        </div>`).join('')}
                </div>
                <div class="bub-invite-btn">${t('bub.demo.invite')}</div>`;
        }
        if (slideId === 'pwa') {
            const shortcuts = [
                t('bub.demo.shortcutLeft'),
                t('bub.demo.shortcutRight'),
                t('bub.demo.shortcutFormula'),
                t('bub.demo.shortcutExpressed')
            ];
            return `
                <div class="bub-elev bub-summary-card">
                    <strong class="bub-phone-sub">${t('bub.demo.pwaTitle')}</strong>
                    <span class="bub-muted bub-small">${t('bub.demo.pwaBody')}</span>
                </div>
                <div class="bub-tile-grid">
                    ${shortcuts.map(label => `
                        <div class="bub-elev bub-tile">
                            <span class="bub-badge bub-tone-accent">${bubIcon('utensils')}</span>
                            <strong>${label}</strong>
                        </div>`).join('')}
                </div>`;
        }
        return `
            <div class="bub-elev bub-privacy-card">
                <p class="bub-emoji" aria-hidden="true">🔒</p>
                <strong>${t('bub.demo.privacyTitle')}</strong>
            </div>`;
    }

    function initBubTourSlides() {
        const wrap = document.getElementById('bub-tour');
        if (!wrap) return;

        const slides = [
            { id: 'welcome', titleKey: 'bub.tour.welcome.title', bodyKey: 'bub.tour.welcome.body' },
            { id: 'home', titleKey: 'bub.tour.home.title', bodyKey: 'bub.tour.home.body' },
            { id: 'quick', titleKey: 'bub.tour.quick.title', bodyKey: 'bub.tour.quick.body' },
            { id: 'health', titleKey: 'bub.tour.health.title', bodyKey: 'bub.tour.health.body' },
            { id: 'growth', titleKey: 'bub.tour.growth.title', bodyKey: 'bub.tour.growth.body' },
            { id: 'timeline', titleKey: 'bub.tour.timeline.title', bodyKey: 'bub.tour.timeline.body' },
            { id: 'family', titleKey: 'bub.tour.family.title', bodyKey: 'bub.tour.family.body' },
            { id: 'pwa', titleKey: 'bub.tour.pwa.title', bodyKey: 'bub.tour.pwa.body' },
            { id: 'privacy', titleKey: 'bub.tour.privacy.title', bodyKey: 'bub.tour.privacy.body' }
        ];

        let index = Number(wrap.dataset.slideIndex || 0);
        if (Number.isNaN(index) || index < 0 || index >= slides.length) index = 0;
        wrap.setAttribute('aria-label', t('bub.tour.title'));
        wrap.classList.add('bub-tour-parallax');

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const goTo = (next, behavior = 'smooth') => {
            index = Math.max(0, Math.min(slides.length - 1, next));
            wrap.dataset.slideIndex = String(index);
            const track = wrap.querySelector('.bub-tour-track');
            const slide = track?.children[index];
            if (track && slide) {
                const target = slide.offsetLeft;
                track.scrollTo({ left: target, behavior: reduceMotion ? 'auto' : behavior });
                if (!reduceMotion && behavior !== 'auto') {
                    const start = performance.now();
                    const tick = () => {
                        applyParallax();
                        if (Math.abs(track.scrollLeft - target) > 1.5 && performance.now() - start < 900) {
                            requestAnimationFrame(tick);
                        } else {
                            applyParallax();
                            syncIndexFromScroll();
                        }
                    };
                    requestAnimationFrame(tick);
                } else {
                    applyParallax();
                }
            }
            updateChrome();
        };

        const updateChrome = () => {
            wrap.querySelectorAll('.bub-tour-step').forEach((step, i) => {
                // keep per-slide labels; chrome uses dots
                void i;
                void step;
            });
            wrap.querySelectorAll('[data-bub-dot]').forEach(btn => {
                const i = Number(btn.getAttribute('data-bub-dot'));
                btn.classList.toggle('is-active', i === index);
                btn.setAttribute('aria-current', i === index ? 'true' : 'false');
            });
            const prev = wrap.querySelector('[data-bub-nav="prev"]');
            const next = wrap.querySelector('[data-bub-nav="next"]');
            if (prev) prev.disabled = index === 0;
            if (next) next.disabled = index === slides.length - 1;
        };

        const applyParallax = () => {
            if (reduceMotion) {
                wrap.querySelectorAll('.bub-parallax-copy, .bub-copy-reveal').forEach(el => {
                    el.style.setProperty('--reveal', '1');
                    el.style.transform = 'none';
                    el.style.filter = 'none';
                    el.style.opacity = '1';
                });
                return;
            }
            const track = wrap.querySelector('.bub-tour-track');
            if (!track) return;
            const trackRect = track.getBoundingClientRect();
            const center = trackRect.left + trackRect.width / 2;
            track.querySelectorAll('.bub-tour-slide').forEach(slide => {
                const rect = slide.getBoundingClientRect();
                const slideCenter = rect.left + rect.width / 2;
                const progress = Math.max(-1.25, Math.min(1.25, (slideCenter - center) / Math.max(trackRect.width, 1)));
                const phone = slide.querySelector('.bub-parallax-phone');
                const copy = slide.querySelector('.bub-parallax-copy');
                const revealEl = slide.querySelector('.bub-copy-reveal');
                const glow = slide.querySelector('.bub-parallax-glow');

                // Frame/phone tracks closer to the slide; text lags behind the frame.
                if (phone) {
                    phone.style.transform =
                        `translate3d(${(-progress * 28).toFixed(2)}px, ${(Math.abs(progress) * 4).toFixed(2)}px, 0) ` +
                        `scale(${(1 - Math.abs(progress) * 0.03).toFixed(3)})`;
                }
                if (copy) {
                    copy.style.transform =
                        `translate3d(${(progress * 92).toFixed(2)}px, ${(Math.abs(progress) * -2).toFixed(2)}px, 0)`;
                }
                if (revealEl) {
                    const proximity = Math.max(0, Math.min(1, 1 - Math.abs(progress) * 1.05));
                    const eased = proximity * proximity * (3 - 2 * proximity);
                    revealEl.style.setProperty('--reveal', eased.toFixed(3));
                }
                if (glow) glow.style.transform = `translate3d(${(-progress * 110).toFixed(2)}px, 0, 0)`;
            });
        };

        const syncIndexFromScroll = () => {
            const track = wrap.querySelector('.bub-tour-track');
            if (!track) return;
            const trackRect = track.getBoundingClientRect();
            const center = trackRect.left + trackRect.width / 2;
            let best = 0;
            let bestDist = Infinity;
            [...track.children].forEach((slide, i) => {
                const rect = slide.getBoundingClientRect();
                const dist = Math.abs(rect.left + rect.width / 2 - center);
                if (dist < bestDist) {
                    bestDist = dist;
                    best = i;
                }
            });
            if (best !== index) {
                index = best;
                wrap.dataset.slideIndex = String(index);
                updateChrome();
            }
            applyParallax();
        };

        wrap.innerHTML = `
            <p class="bub-tour-hint">${t('bub.tour.hint')}</p>
            <div class="bub-tour-track" tabindex="0" role="list">
                ${slides.map((slide, i) => `
                    <article class="bub-tour-slide" role="listitem" aria-roledescription="slide" aria-label="${i + 1} / ${slides.length}">
                        <div class="bub-parallax-glow" aria-hidden="true"></div>
                        <div class="bub-tour-stage">
                            <div class="bub-phone bub-parallax-phone" aria-hidden="true">${buildBubPhoneVisual(slide.id)}</div>
                            <div class="bub-tour-copy bub-parallax-copy">
                                <div class="bub-copy-reveal">
                                    <p class="bub-tour-step">${i + 1} / ${slides.length}</p>
                                    <h4 class="bub-tour-heading">${t(slide.titleKey)}</h4>
                                    <p class="bub-tour-body">${t(slide.bodyKey)}</p>
                                </div>
                            </div>
                        </div>
                    </article>`).join('')}
            </div>
            <div class="bub-tour-controls">
                <button type="button" class="bub-tour-btn" data-bub-nav="prev" ${index === 0 ? 'disabled' : ''}>${t('bub.tour.prev')}</button>
                <div class="bub-tour-dots" role="tablist" aria-label="${t('bub.tour.title')}">
                    ${slides.map((_, i) => `<button type="button" class="bub-tour-dot${i === index ? ' is-active' : ''}" data-bub-dot="${i}" aria-label="${i + 1}" aria-current="${i === index ? 'true' : 'false'}"></button>`).join('')}
                </div>
                <button type="button" class="bub-tour-btn bub-tour-btn-primary" data-bub-nav="next">${t('bub.tour.next')}</button>
            </div>`;

        const track = wrap.querySelector('.bub-tour-track');
        let ticking = false;
        track.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                syncIndexFromScroll();
                ticking = false;
            });
        }, { passive: true });

        // Convert vertical wheel into horizontal browse when hovering the tour
        track.addEventListener('wheel', e => {
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
            if (Math.abs(e.deltaY) < 8) return;
            e.preventDefault();
            track.scrollBy({ left: e.deltaY, behavior: 'auto' });
        }, { passive: false });

        wrap.querySelector('[data-bub-nav="prev"]')?.addEventListener('click', () => goTo(index - 1));
        wrap.querySelector('[data-bub-nav="next"]')?.addEventListener('click', () => goTo(index + 1));
        wrap.querySelectorAll('[data-bub-dot]').forEach(btn => {
            btn.addEventListener('click', () => goTo(Number(btn.getAttribute('data-bub-dot'))));
        });

        if (!wrap.dataset.bubKeysBound) {
            wrap.dataset.bubKeysBound = '1';
            wrap.tabIndex = 0;
            wrap.addEventListener('keydown', e => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    goTo(index - 1);
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    goTo(index + 1);
                }
            });
        }

        goTo(index, 'auto');
        applyParallax();
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
            { src: 'images/For_CI_BI_1.avif', fallback: 'images/For_CI_BI_1.png', key: 'gallery.1' },
            { src: 'images/For_App_Store_3.avif', fallback: 'images/For_App_Store_3.png', key: 'gallery.2' },
            { src: 'images/For_SNS.avif', fallback: 'images/For_SNS.png', key: 'gallery.3' },
            { src: 'images/For_Personal_business_CMYK_1.avif', fallback: 'images/For_Personal_business_CMYK_1.png', key: 'gallery.4' },
            { src: 'images/For_Personal_business_RGB_1.avif', fallback: 'images/For_Personal_business_RGB_1.png', key: 'gallery.5' },
            { src: 'images/Dashboard_2.avif', fallback: 'images/Dashboard_2.png', key: 'gallery.6' },
            { src: 'images/mohaet.avif', fallback: 'images/mohaet.png', key: 'gallery.7' },
            { src: 'images/Apple_AirPods_1.avif', fallback: 'images/Apple_AirPods_1.png', key: 'gallery.8' },
            { src: 'images/Apple_Hermes_1.avif', fallback: 'images/Apple_Hermes_1.png', key: 'gallery.9' },
            { src: 'images/Brief_Results_1.avif', fallback: 'images/Brief_Results_1.png', key: 'gallery.10' },
            { src: 'images/Brief_Results_2.avif', fallback: 'images/Brief_Results_2.png', key: 'gallery.11' },
            { src: 'images/Brief_Results_3.avif', fallback: 'images/Brief_Results_3.png', key: 'gallery.12' },
            { src: 'images/Brief_Results_4.avif', fallback: 'images/Brief_Results_4.png', key: 'gallery.13' }
        ];

        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        grid.innerHTML = '';
        lightboxItems = galleryData.map(item => ({
            type: 'image',
            src: item.src,
            fallback: item.fallback,
            caption: t(item.key)
        }));

        galleryData.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.className = 'gallery-item';
            btn.type = 'button';
            btn.setAttribute('aria-label', t(item.key));
            btn.innerHTML = `
                <picture>
                    <source srcset="${item.src}" type="image/avif">
                    <img src="${item.fallback}" data-fallback-src="${item.fallback}" alt="${t(item.key)}" loading="lazy" width="440" height="160" onerror="this.style.display='none';this.closest('picture').nextElementSibling.style.display='flex'">
                </picture>
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
        } else if (item.fallback) {
            content.innerHTML = `
                <picture>
                    <source srcset="${item.src}" type="image/avif">
                    <img src="${item.fallback}" alt="${item.caption}">
                </picture>`;
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
        const preparePrintable = () => {
            const root = document.documentElement;
            const wasLight = root.classList.contains('light');
            const classSnapshot = [];
            const styleSnapshot = [];

            root.classList.add('pdf-export');
            if (!wasLight) root.classList.add('light');

            document.querySelectorAll('.reveal-section, .fade-in-up').forEach(section => {
                classSnapshot.push({ el: section, className: section.className });
                styleSnapshot.push({ el: section, cssText: section.getAttribute('style') || '' });
                section.classList.remove('fade-in-up', 'delay-1', 'delay-2', 'reveal-section', 'is-hero');
                section.style.cssText += ';opacity:1!important;filter:none!important;transform:none!important;animation:none!important;';
                section.style.setProperty('--reveal-progress', '1');
            });

            const hero = document.getElementById('hero');
            const heroStyle = hero ? hero.getAttribute('style') || '' : '';
            if (hero) {
                hero.style.minHeight = 'auto';
                hero.style.paddingTop = '0.5rem';
                hero.style.paddingBottom = '1rem';
            }

            const restore = () => {
                root.classList.remove('pdf-export');
                if (!wasLight) root.classList.remove('light');
                classSnapshot.forEach(({ el, className }) => { el.className = className; });
                styleSnapshot.forEach(({ el, cssText }) => {
                    if (cssText) el.setAttribute('style', cssText);
                    else el.removeAttribute('style');
                });
                if (hero) {
                    if (heroStyle) hero.setAttribute('style', heroStyle);
                    else hero.removeAttribute('style');
                }
            };

            return restore;
        };

        const downloadPdf = async () => {
            const btn = document.getElementById('pdf-download');
            const orig = btn.innerHTML;
            btn.innerHTML = t('pdf.generating');
            btn.disabled = true;

            const prevScrollY = window.scrollY;
            window.scrollTo(0, 0);
            const restore = preparePrintable();

            // Prefer browser print-to-PDF: preserves fonts/layout better than html2canvas
            // for glassmorphism pages. Fall back to html2pdf only if print is unavailable.
            let restored = false;
            const finish = () => {
                if (restored) return;
                restored = true;
                window.removeEventListener('afterprint', afterPrint);
                restore();
                window.scrollTo(0, prevScrollY);
                btn.innerHTML = orig;
                btn.disabled = false;
            };

            const afterPrint = () => finish();
            window.addEventListener('afterprint', afterPrint);

            // Safety restore if user cancels without afterprint in some browsers
            setTimeout(finish, 60000);

            await new Promise(resolve => setTimeout(resolve, 100));
            window.print();
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

        initScrollReveal();
    }

    function initScrollReveal() {
        const revealSections = document.querySelectorAll('.reveal-section:not(.is-hero)');
        if (!revealSections.length) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            revealSections.forEach(section => {
                section.classList.add('is-revealed');
                section.style.setProperty('--reveal-progress', '1');
            });
            return;
        }

        const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

        const updateRevealProgress = () => {
            const viewportH = window.innerHeight || document.documentElement.clientHeight;
            revealSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                // Start revealing as the section approaches mid-viewport; finish near center.
                const start = viewportH * 0.92;
                const end = viewportH * 0.38;
                const progress = clamp((start - rect.top) / (start - end), 0, 1);
                section.style.setProperty('--reveal-progress', progress.toFixed(3));
                section.classList.toggle('is-revealed', progress >= 0.98);
            });
        };

        let ticking = false;
        const onScrollOrResize = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateRevealProgress();
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);
        updateRevealProgress();
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
        initBubTourSlides();
        initGallery();
        initLightbox();
        initPdfDownload();
        initObservers();
        applyI18n();
    });
})();
