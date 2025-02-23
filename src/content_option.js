const logotext = "joonseo1227";

const meta = {
    title: "joonseo1227",
    description: "디자인과 기술의 조화를 추구하는 프론트엔드 개발자입니다. UI/UX를 기반으로 사용자 중심의 경험을 창조합니다.",
};

const introdata = {
    title: "안녕하세요. 정준서입니다.",
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
        where: "경기도 성남",
        date: "2024 - 현재",
    },
    {
        jobtitle: "가천대학교",
        where: "경기도 성남",
        date: "2024 - 현재",
    },
    {
        jobtitle: "용인백현고등학교",
        where: "경기도 용인",
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
        id: "lets-merge",
        img: new URL('./assets/images/LetsMerge.jpg', import.meta.url).href,
        title: "렛츠머지",
        description: "렛츠머지는 같은 방향으로 이동하는 사람들을 실시간으로 매칭해 합리적인 비용으로 편리한 이동을 돕는 택시팟 플랫폼입니다. 실시간 위치 공유, 안전한 매칭 시스템, 자동 정산 기능을 통해 효율적이고 스마트한 이동 경험을 제공합니다.",
    },
    {
        id: "challenge-one",
        img: new URL('./assets/images/ChallengeOne.jpg', import.meta.url).href,
        title: "Challenge One",
        description: "Challenge One은 사용자들이 목표를 설정하고 이를 효과적으로 달성할 수 있도록 돕는 플랫폼입니다. Firebase를 기반으로 하여 안정적인 데이터 관리와 인증 서비스를 제공하며, 사용자 친화적인 UI/UX 디자인으로 목표 설정 및 관리 경험을 최적화했습니다.",
        github: "https://github.com/joonseo1227/challengeone",
    },
    {
        id: "autonomous-driving-garbage-collector",
        img: new URL('./assets/images/AutonomousDrivingGarbageCollector.jpg', import.meta.url).href,
        title: "Autonomous Driving Garbage Collector",
        description: "이 앱은 사용자가 자율 주행 쓰레기통 로봇의 상태를 모니터링하고 제어할 수 있도록 합니다. 음성 명령과 블루투스 통신을 통해 로봇과 직관적으로 상호작용할 수 있습니다.",
        github: "https://github.com/joonseo1227/robo_can",
    },
    {
        id: "meta-gachon",
        img: new URL('./assets/images/MetaGachon.jpg', import.meta.url).href,
        title: "Meta Gachon",
        description: "Meta Gachon은 가천대학교 AI·소프트웨어학부 구성원을 위한 예약 플랫폼입니다. 강의실, 회의실, GPU 컴퓨터를 쉽고 편리하게 예약할 수 있습니다.",
    },
    {
        id: "film-choice",
        img: new URL('./assets/images/FilmChoice.jpg', import.meta.url).href,
        title: "FilmChoice",
        description: "FlimChoice는 사용자가 영화를 검색하고 다양한 정보를 확인할 수 있는 영화 정보 웹사이트입니다.",
        github: "https://github.com/joonseo1227/filmchoice",
    }
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