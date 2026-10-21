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
    roles: ["풀스택 개발자", "트레이너", "게스트 연사", "사회자"],
  },
  about: {
    label: "소개",
    title: "AI 엔지니어링, 교육, 커뮤니티 리더십",
    description:
      "AI 기반 애플리케이션을 만들고, 기술 지식을 공유하며, 교육과 커뮤니티 활동을 통해 다른 사람의 성장을 돕습니다.",
    summary:
      "파키스탄 파이살라바드 정부대학교 Government College University Faisalabad에서 정보기술을 전공하고 졸업했습니다. 풀스택 웹 애플리케이션과 AI 기반 솔루션을 구축해 왔습니다.\n\n현재 Stanford University Code in Place X의 Section Leader로 활동하고 있습니다. 또한 트레이너, 게스트 연사, 웨비나 진행자, 자원봉사 강사로 기술 커뮤니티에 기여하고 있습니다.\n\n제 프로젝트는 AI 애플리케이션 개발, 다국어 음성 기반 검증, 비용 최적화 AI 시스템에 걸쳐 있습니다. 국내외 해커톤에 참여해 팀을 이끌고, 실용적인 솔루션을 만들기 위해 기술 커뮤니티와 협력해 왔습니다.",
  },
  achievements: {
    label: "성과",
    title: "성과와 인정",
    description:
      "국내외 프로그램으로부터 검증된 대회 결과, 리더십의 이정표, 그리고 인정.",
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
    title: "학술 프로젝트",
    description:
      "AI 애플리케이션, 자동화, 풀스택 엔지니어링에 걸친 졸업 프로젝트와 학술·해커톤 프로젝트.",
    featured: "추천",
    problem: "문제",
    solution: "해결책",
    github: "저장소 보기",
    liveDemo: "라이브 데모",
  },
  hackathons: {
    label: "해커톤",
    title: "국제 해커톤",
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
