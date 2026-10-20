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
    skills: "기술",
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
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "프로젝트",
      hackathons: "해커톤",
      aiTools: "AI 도구",
    },
    roles: [
      "MERN 스택 개발자",
      "Next.js 개발자",
      "AI 자동화 및 에이전트 AI 열정가",
    ],
  },
  about: {
    label: "소개",
    title: "MERN 스택 개발과 지능형 시스템의 만남",
    description:
      "프로덕션 SaaS 경험, AI 자동화 전문성, 해커톤 리더십 — 채용 담당자와 협력자를 위한 스냅샷.",
    education: "학력",
    achievementHighlights: "주요 성과",
    cgpa: "평점",
    summary:
      "MERN 스택 개발자로서 MongoDB, Express.js, React.js, Next.js, Node.js, TypeScript 및 Tailwind CSS로 확장 가능하고 고성능인 풀스택 애플리케이션을 구축하는 데 열정이 있습니다.\n\n지능형 시스템에 대한 호기심으로 AI 자동화, 에이전트 기반 워크플로우, 언어 모델 API 및 머신 러닝 개념을 탐구하고 구축합니다.\n\n저의 경험에는 실제 SaaS 제품 기여, 프론트엔드 및 백엔드 개발, API 통합, 프로덕션 준비 웹 애플리케이션 제공이 포함됩니다.",
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
    title: "전문 여정",
    description:
      "SaaS 제품 구축, API 통합 및 프로덕션 기능 제공 경험이 있습니다.",
  },
  projects: {
    label: "프로젝트",
    title: "프로젝트 쇼케이스",
    description:
      "AI 기반 SaaS 플랫폼, 보안 미들웨어 및 프로덕션 웹 애플리케이션입니다.",
    featured: "추천",
    problem: "문제",
    solution: "해결책",
    github: "GitHub",
    liveDemo: "라이브 데모",
  },
  hackathons: {
    label: "해커톤",
    title: "경쟁 및 혁신",
    description:
      "전 세계 AI 및 개발 해커톤에 적극적으로 참여하고 팀을 이끄는 중입니다.",
  },
  volunteer: {
    label: "커뮤니티",
    title: "봉사 활동 경험",
    description:
      "클라이언트 및 해커톤 활동을 넘어 수행한 독립 연구와 커뮤니티 기여입니다.",
  },
  certifications: {
    label: "자격 및 인증",
    title: "자격증 및 교육",
    description: "전문성 개발, 리더십 교육, 그리고 그동안 취득한 자격증입니다.",
  },
  contact: {
    label: "연락처",
    title: "무언가 지능적인 것을 만들어 봅시다",
    description:
      "MERN 스택 개발자 기회, 협업 및 AI 기반 프로젝트를 환영합니다.",
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
