import type { TranslationOverrides } from "@/types";

export const koOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "AI 기반 다국어 경험" },
  language: { label: "언어", selectLanguage: "언어 선택" },
  theme: {
    current: "현재 테마: {theme}",
    switchTo: "{theme} 테마로 전환",
    light: "라이트",
    dark: "다크",
  },
  nav: {
    home: "홈",
    about: "소개",
    achievements: "성과",
    education: "학력",
    experience: "경력",
    projects: "프로젝트",
    hackathons: "해커톤",
    volunteer: "봉사활동",
    certifications: "자격증",
    contact: "연락처",
    hireMe: "채용하기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    menu: "메뉴",
  },
  hero: {
    availability: "기회에 열려 있습니다",
    tagline:
      "최신 풀스택 기술로 확장 가능하고 AI를 활용한 웹 애플리케이션을 만듭니다.",
    headline: "SL @ Stanford Code in Place X • 트레이너 • 게스트 연사 • 사회자",
    primaryRole: "대학원 진학 후보자",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: ["Aspire Leaders 수료생", "해커톤 8회 참여", "팀 3회 리드"],
    hireMe: "채용하기",
    downloadResume: "이력서 다운로드",
    viewProjects: "프로젝트 보기",
    contactMe: "연락하기",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "프로젝트",
      hackathons: "해커톤",
      aiTools: "AI 도구",
    },
    roles: [
      "해커톤 팀 리더",
      "트레이너 및 멘토",
      "게스트 연사",
      "웨비나 사회자",
      "기술 작가",
    ],
  },
  about: {
    label: "소개",
    title: "엔지니어링, 교육, 커뮤니티 리더십",
    description:
      "웹 애플리케이션을 만들고, 기술 지식을 공유하며, 교육과 커뮤니티 활동을 통해 다른 사람의 성장을 돕습니다.",
    summary:
      "파키스탄 파이살라바드 정부대학교 Government College University Faisalabad에서 정보기술을 전공하고 졸업했습니다. 풀스택 웹 애플리케이션을 구축해 왔습니다.\n\n현재 Stanford University Code in Place X의 Section Leader로 활동하고 있습니다. 또한 트레이너, 게스트 연사, 웨비나 진행자, 자원봉사 강사로 기술 커뮤니티에 기여하고 있습니다.\n\n제 프로젝트는 다국어 음성 기반 검증, 자동화 플랫폼, 비용 최적화된 소프트웨어 시스템에 걸쳐 있습니다. 국내외 해커톤에 참여해 팀을 이끌고, 실용적인 솔루션을 만들기 위해 기술 커뮤니티와 협력해 왔습니다.",
  },
  achievements: {
    label: "성과",
    title: "성과와 인정",
    description:
      "국내외 프로그램으로부터 검증된 대회 결과, 리더십의 이정표, 그리고 인정.",
    cards: {
      "ach-participant": { label: "국내 및 국제 해커톤", subtitle: "AI 및 웹 대회" },
      "ach-lead": { label: "팀 리더", subtitle: "생성형 AI 해커톤" },
      "ach-codesprint": { label: "CodeSprint LA 순위" },
      "ach-stanford": {
        label: "Stanford Code in Place X 섹션 리더",
        subtitle: "첫 도전에 선발",
      },
      "ach-quizoff": { label: "QuizOff", subtitle: "35개국 이상의 학생" },
      "ach-linkedin": { label: "LinkedIn 커뮤니티" },
    },
  },
  education: {
    label: "학력",
    title: "학력",
    description: "학위, 학업 성적, 그리고 일의 토대가 되는 이수 과목.",
    cgpa: "평점",
    coursework: "이수 과목",
  },
  skills: {
    label: "기술",
    title: "AI 기술 대시보드",
    description:
      "프로덕션 애플리케이션 및 AI 통합을 지원하는 기술과 도구입니다.",
    technologies: "{count}개 기술",
  },
  experience: {
    label: "경력",
    title: "전문 경력",
    description:
      "프로덕션 제품, 가상 시뮬레이션, 컨설팅 프로젝트에서의 인턴십 및 역할 기반 경력.",
    simulation: "가상 시뮬레이션",
    certificate: "수료증",
  },
  projects: {
    label: "프로젝트",
    title: "학술 및 해커톤 프로젝트",
    description:
      "AI 애플리케이션, 자동화, 풀스택 엔지니어링에 걸친 졸업 프로젝트와 학술·해커톤 프로젝트.",
    featured: "추천",
    teamProject: "팀 프로젝트",
    myRole: "담당 역할",
    github: "저장소 보기",
    liveDemo: "라이브 데모",
    items: {
      "proj-feature-kit": {
        description:
          "텍스트를 이미지와 음성으로 바꾸기, 음성 변환, 요약, 배경 제거를 하나의 화면에 담은 모듈형 AI 플랫폼. 졸업 프로젝트로 만들었으며 각 기능이 독립적이어서 모델이나 엔드포인트를 바꿔도 앱 나머지 부분은 손대지 않습니다.",
        role: "졸업 프로젝트",
      },
      "proj-verivoice": {
        description:
          "UNESCO 청년 해커톤 2026을 위해 만든 음성 중심 다국어 검증 어시스턴트. 음성으로 입력하면 우르두어·스페인어·인도네시아어·영어로 답하고, 주장 분류, 공공기관 출처에서의 증거 수집, 인용 안전장치가 답을 검색된 출처에 연결합니다. 오디오 시각화, 핸즈프리 음성 모드, Evidence Drawer를 만들었습니다.",
        role: "프론트엔드 개발자",
      },
      "proj-amd-zerotoken": {
        description:
          "AMD Developer Hackathon 트랙 1을 위한 리소스 인식 AI 추론 라우터. 결정적 솔버가 구조화된 문제를 토큰 비용 없이 처리하고, 양자화된 로컬 Qwen 2.5 3B 모델이 저복잡도 작업을 맡으며, 클라우드 에스컬레이션은 허용 목록으로 제한됩니다. 토큰 상한과 타임아웃 덕분에 실행은 4GB RAM, 2 vCPU, GPU 없는 컨테이너 안에 머뭅니다.",
      },
      "proj-autovance": {
        description:
          "이메일 발송, 안전한 Webhook 실행, cron 예약, 사용자 지정 폼 액션을 하나의 대시보드에 모은 AI 자동화 플랫폼. HEC 생성형 AI 코호트 3의 팀 출품작으로 만들었으며, 드라이런 미리보기를 갖춘 설명 가능한 AI 워크플로 빌더를 연구 프로토타입으로 제시합니다. 제공자 실패는 성공이라 말하지 않고 그대로 보고합니다.",
        role: "팀 리더",
      },
      "proj-hiregen": {
        description:
          "면접 질문을 자동 생성하고 지원자 답변을 채점하며 채용 보고서를 내는 채용 플랫폼. HEC 생성형 AI 코호트 2를 위해 납품한 팀을 이끌었으며, 채용 팀에 일관되고 반복 가능한 기술 면접·채점 흐름을 제공합니다.",
        role: "팀 리더",
      },
      "proj-mira-ai": {
        description:
          "기분 일기, 습관 추적, 목표 분석을 결합한 개인 성장 플랫폼. JWT와 Google OAuth 인증으로 각 계정의 기록은 해당 소유자에게만 공개됩니다.",
      },
      "proj-lakki-marwat": {
        description:
          "휴먼컴퓨터상호작용 중간 과제 학술 프로젝트: University of Lakki Marwat 웹사이트를 휴리스틱과 사용성 관점에서 전면 평가하고, 문서화된 보고서와 프레젠테이션으로 제출해 Hirestive로 평가받았습니다.",
      },
      "proj-portfolio": {
        description:
          "Next.js, TypeScript, Tailwind CSS로 만든 포트폴리오. 내장 AI 어시스턴트와 모션 기반 UI를 갖추고 있으며, 다른 프로젝트와 동일한 풀스택·생성형 AI 스택을 직접 보여주기 위해 설계했습니다.",
      },
    },
  },
  hackathons: {
    label: "해커톤",
    title: "국내 및 국제 해커톤",
    description:
      "국내외 AI 및 개발자 해커톤의 참여자이자 팀 리더. CodeSprint LA에서는 상위 25위에 올랐습니다.",
  },
  volunteer: {
    label: "커뮤니티",
    title: "봉사 활동 경험",
    description: "클라이언트 및 해커톤을 넘어 수행한 교육, 멘토링과 커뮤니티 기여.",
  },
  certifications: {
    label: "자격 및 인증",
    title: "교육과 자격증",
    description:
      "전문성 개발, 리더십 교육, 그리고 자격증. 각각 검증된 문서로 연결되어 있습니다.",
  },
  contact: {
    label: "연락처",
    title: "무언가 지능적인 것을 만들어 봅시다",
    description:
      "풀스택 및 AI 엔지니어링 기회, 협업 및 AI 기반 프로젝트를 환영합니다.",
    aiPoweredContact: "AI 기반 연락처",
    getInTouch: "문의하기",
    intro:
      "채용, 프리랜서 프로젝트 또는 해커톤 협업을 위해 연락주세요.",
    linkedinProfile: "LinkedIn 프로필",
    githubProfile: "GitHub 프로필",
    form: {
      name: "이름",
      namePlaceholder: "당신의 이름",
      email: "이메일",
      emailPlaceholder: "you@example.com",
      message: "메시지",
      messagePlaceholder: "프로젝트나 기회에 대해 알려주세요...",
      sending: "전송 중...",
      send: "메시지 보내기",
    },
    toast: { success: "메시지가 성공적으로 전송되었습니다", error: "문제가 발생했습니다" },
  },
  footer: { email: "이메일", rights: "모든 권리 보유." },
  resume: { unavailable: "이력서를 아직 사용할 수 없습니다. 직접 연락해주세요." },
};
