const logotext = "joonseo1227";

const meta = {
    title: "joonseo1227",
    description: "디자인과 기술의 조화를 추구하는 프론트엔드 개발자입니다. UI/UX를 기반으로 사용자 중심의 경험을 창조합니다.",
};

const introdata = {
    animated: {
        first: "코드를 디자인하고,<br/>경험을 창조합니다.",
        second: "디자인과 개발의 조화를<br/>추구합니다.",
        third: "작은 디테일로<br/>큰 가치를 만듭니다.",
    },
    description: "디자인과 기술의 조화를 추구하는 프론트엔드 개발자입니다.\nUI/UX를 기반으로 사용자 중심의 경험을 창조합니다.",
    your_img_url: new URL('./assets/images/IMG_6434.jpg', import.meta.url).href,
};

const dataabout = {
    title: "About my self",
    aboutme: "디자인과 기술의 조화를 추구하는 프론트엔드 개발자입니다. UI/UX를 기반으로 사용자 중심의 경험을 창조합니다.",
};

const worktimeline = [
    {
        jobtitle: "AIIA",
        date: "2024 - NOW",
    },
    {
        jobtitle: "가천대학교",
        date: "2024 - NOW",
    },
    {
        jobtitle: "용인백현고등학교",
        date: "2021 - 2023",
    },
];

const skills = [
    {
        name: "Flutter",
        value: 90,
    },
    {
        name: "Figma",
        value: 90,
    },
    {
        name: "Git",
        value: 90,
    },
    {
        name: "C",
        value: 85,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "사용자의 편리함과 직관적인 경험을 최우선으로, 감각적인 디자인과 혁신적인 UX를 만듭니다."
    },
    {
        title: "Mobile Apps",
        description: "다양한 플랫폼에서 완벽히 작동하는, 기능성과 디자인을 겸비한 모바일 앱을 개발합니다."
    },
    {
        title: "Web Design",
        description: "최신 트렌드와 기술을 반영하여, 사용자 친화적이고 반응형 웹 디자인을 완성합니다."
    }
];

const dataportfolio = [
    {
        id: "film-choice",
        img: new URL('./assets/images/FilmChoice.jpg', import.meta.url).href,
        title: "FilmChoice",
        description:
            "FlimChoice는 영화 정보 제공 및 검색 기능을 구현한 정적 웹사이트입니다. 웹 개발 입문 프로젝트로서 기본적인 HTML/CSS 구조에 대한 이해와 구현에 중점을 두었습니다.\n\n" +
            "- 모듈화된 HTML 구조 설계\n" +
            "- Python 스크립트를 활용한 정적 페이지 생성 자동화\n" +
            "- GitHub Pages를 통한 정적 웹사이트 배포 파이프라인 구축",
        job: "Frontend, Design, PM",
        period: "2024. 5. 1. - 2025. 6. 2.",
        tech: "HTML, CSS, Python",
        github: "https://github.com/joonseo1227/filmchoice",
    },
    {
        id: "lets-merge",
        img: new URL('./assets/images/LetsMerge.jpg', import.meta.url).href,
        title: "렛츠머지",
        description:
            "렛츠머지는 실시간 택시 합승 매칭 플랫폼입니다. 위치 기반 서비스와 실시간 데이터베이스를 활용하여 동일 경로의 사용자들을 효율적으로 매칭하는 시스템을 구현했습니다.\n\n" +
            "- Supabase Authentication을 활용한 보안 인증 시스템 구현\n" +
            "- NAVER Maps API 연동을 통한 실시간 경로 탐색 및 거리/시간 기반 택시 요금 산정 구현\n" +
            "- Riverpod 상태 관리를 통한 실시간 위치 데이터 처리 및 UI 업데이트 최적화\n" +
            "- 12인 규모의 베타 테스트를 통한 UX 개선 및 안정성 검증\n" +
            "- ThemeData를 활용한 동적 테마 시스템 구현",
        job: "Frontend, Design, PM",
        period: "2025. 1. 9. - NOW",
        tech: "Flutter, Supabase, Riverpod, NAVER Maps API",
    },
    {
        id: "autonomous-driving-garbage-collector",
        img: new URL('./assets/images/AutonomousDrivingGarbageCollector.jpg', import.meta.url).href,
        title: "Autonomous Driving Garbage Collector",
        description:
            "자율주행 쓰레기 수거 로봇 제어 애플리케이션으로, MBTI 기반의 적응형 상호작용 시스템을 구현했습니다. 음성 인식과 블루투스 통신을 통합하여 직관적인 로봇 제어 인터페이스를 제공합니다.\n\n" +
            "- MBTI 유형별 맞춤형 로봇 행동 패턴 알고리즘 구현\n" +
            "- Bluetooth Classic Protocol 기반 아두이노 통신 인터페이스 구현\n" +
            "- PicoVoice Porcupine SDK를 활용한 핫워드 음성 인식 시스템 구현 (소음 상황에서 약 80% 정확도)\n" +
            "- 실시간 로봇 상태 모니터링 및 원격 제어 기능 개발\n" +
            "- Stream 기반 비동기 상태 관리를 통한 실시간 데이터 처리",
        job: "Frontend, Design, PM",
        period: "2024. 10. 25. - 2024. 11. 28.",
        tech: "Flutter, Arduino, Bluetooth Classic Protocol, PicoVoice SDK",
        github: "https://github.com/joonseo1227/robo_can",
    },
    {
        id: "challenge-one",
        img: new URL('./assets/images/ChallengeOne.jpg', import.meta.url).href,
        title: "Challenge One",
        description:
            "Challenge One은 소셜 기능이 통합된 목표 관리 플랫폼입니다. Firestore Database를 활용하여 실시간 사용자 상호작용 및 목표 진행 상황 공유 기능을 구현했습니다.\n\n" +
            "- Firebase Authentication 기반 보안 인증 시스템 구현\n" +
            "- Cloud Firestore를 활용한 실시간 팔로우/팔로잉 시스템 개발\n" +
            "- PageView 및 Hero 애니메이션을 활용한 스토리 뷰 UI 구현\n" +
            "- StreamBuilder를 활용한 실시간 데이터 동기화 및 UI 업데이트 최적화",
        job: "Frontend, Design, PM",
        period: "2024. 6. 9. - 2025. 1. 26.",
        tech: "Flutter, Firebase Authentication, Cloud Firestore",
        github: "https://github.com/joonseo1227/challengeone",
    },
    {
        id: "meta-gachon",
        img: new URL('./assets/images/MetaGachon.jpg', import.meta.url).href,
        title: "Meta Gachon",
        description:
            "Meta Gachon은 대학 시설 예약 관리 시스템으로, Riverpod 기반의 상태 관리 아키텍처를 도입하여 애플리케이션의 확장성과 유지보수성을 개선했습니다.\n\n" +
            "- 프로젝트 전체 코드 리팩토링\n" +
            "- Riverpod으로의 상태 관리 마이그레이션 및 의존성 주입 시스템 구축\n" +
            "- LayoutBuilder와 CustomScrollView를 활용한 반응형 레이아웃 구현\n" +
            "- REST API 통신 로직 모듈화 및 에러 핸들링 고도화\n" +
            "- ThemeData 기반 다크모드 지원 및 디자인 시스템 표준화\n" +
            "- AI·소프트웨어학부 전용 예약 시스템 운영 및 유지보수",
        job: "Frontend, PM",
        period: "2024. 8. 13. - 2025. 1. 22.",
        tech: "Flutter, Riverpod, RESTful API",
    },
];

const contactConfig = {
    YOUR_EMAIL: "joonseo1227@gmail.com",
};

const socialprofils = {
    github: "https://github.com/joonseo1227",
    instagram: "https://www.instagram.com/joonseo1227/",
    linkedin: "https://www.linkedin.com/in/joonseo1227/",
    youtube: "https://www.youtube.com/@nulll0512/featured",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};