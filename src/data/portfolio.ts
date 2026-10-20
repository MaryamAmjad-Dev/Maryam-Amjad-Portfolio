import type {
  AchievementStat,
  Certification,
  Hackathon,
  PortfolioData,
  VolunteerExperience,
} from "@/types";

const hackathonEntries: Hackathon[] = [
  {
    id: "hack-nasa",
    title: "NASA Space Apps Challenge",
    event: "NASA International Hackathon",
    role: "Team Lead",
    description:
      "Currently enrolled as Team Lead for the upcoming global hackathon on November 14–15, 2026.",
    year: "Nov 14–15, 2026",
  },
  {
    id: "hack-amd",
    title: "AMD Developer Hackathon ACT II",
    event: "International — lablab.ai",
    description: "Built AI-powered solutions on AMD hardware infrastructure.",
    year: "2026",
  },
  {
    id: "hack-codesprint",
    title: "CodeSprint LA",
    event: "Los Angeles Hackathon",
    placement: "25th out of 137 teams",
    year: "2026",
  },
  {
    id: "hack-hec2",
    title: "HEC GenAI Cohort 2",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    year: "2026",
  },
  {
    id: "hack-hec3",
    title: "HEC GenAI Cohort 3",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    year: "2026",
  },
  {
    id: "hack-devlaunch",
    title: "Dev Launch Hackathon",
    event: "Developer Community Event",
    year: "2026",
  },
  {
    id: "hack-unesco",
    title: "UNESCO Youth Hackathon",
    event: "UNESCO International",
    year: "2026",
  },
  {
    id: "hack-gemini-quizoff",
    title: "Google Gemini Quizoff Challenge",
    event: "Google Gemini Quizoff Challenge 2026",
    description: "Participated and attended the global AI challenge focused on Gemini-powered solutions.",
    year: "2026",
  },
];

const LINKEDIN_FOLLOWERS = 4000;

/** Derive achievement stats from portfolio data — avoids hardcoded counts */
function buildAchievements(
  events: Hackathon[],
  linkedinFollowers: number,
): AchievementStat[] {
  const codesprint = events.find((h) => h.id === "hack-codesprint");
  const placementMatch = codesprint?.placement?.match(
    /(\d+)(?:st|nd|rd|th)? out of (\d+)/i,
  );
  const rank = placementMatch?.[1];
  const total = placementMatch?.[2];

  return [
    {
      id: "ach-participant",
      label: "Hackathons",
      subtitle: "AI/Web Competitions",
      value: events.length,
      suffix: "+",
    },
    {
      id: "ach-lead",
      label: "Team Lead",
      subtitle: "GenAI Hackathons",
      value: events.filter((h) => h.role === "Team Lead").length,
      suffix: "x",
    },
    {
      id: "ach-codesprint",
      label: "CodeSprint LA Ranking",
      value: rank ? Number(rank) : 25,
      displayValue: rank && total ? `Top ${rank} / ${total}` : undefined,
    },
    {
      id: "ach-linkedin",
      label: "LinkedIn Community",
      value: linkedinFollowers,
      suffix: "+",
    },
  ];
}

const GITHUB_PROFILE = "https://github.com/MaryamAmjad-Dev";

const volunteerEntries: VolunteerExperience[] = [
  {
    id: "vol-hci-research",
    title: "HCI Research Report and Presentation",
    organization: "Independent Volunteer Project",
    description:
      "Co-authored an independent Human Computer Interaction research report with group mates, analyzing survey data on procrastination and digital distraction among STEM students. Built and delivered the companion presentation deck.",
  },
];

const certificationEntries: Certification[] = [
  {
    id: "cert-gydf-mindset",
    title:
      "Developing the Mindset and Skills Young People Need to Succeed in a Global World",
    organization: "Global Youth Development Forum, Sierra Leone Chapter",
    date: "August 2026",
    note: "Attended an online training session led by Coach Alie Bangoura.",
  },
];

export const portfolioData: PortfolioData = {
  profile: {
    name: "Maryam Amjad",
    title: "AI Engineer • Full Stack Developer • MERN Stack Developer",
    tagline:
      "Building scalable, AI-enabled web applications with modern full-stack technology.",
    bio: "AI engineer and full-stack developer delivering production SaaS experiences, API integrations, and intelligent systems.",
    summary:
      "A global-minded AI engineer and full-stack developer who builds scalable web products with MERN, Next.js, TypeScript, and Tailwind CSS.\n\nI combine production SaaS experience with AI automation, Gemini and Groq APIs, and intelligent systems design.\n\nI also contribute to international hackathons as a participant and team lead, bringing practical development and collaboration to fast-moving AI challenges.",
    location: "Pakistan",
    email: "maryamamjad621@gmail.com",
    phone: "+92 314 7390062",
    roles: [
      "MERN Stack Developer",
      "Next.js Developer",
      "AI Automation & Agentic AI Enthusiast",
    ],
    image: "/profile/maryam.svg",
    avatarUrl: "/profile/maryam.svg",
    resumeUrl: "/resume/Maryam-Amjad-Resume.pdf",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/MaryamAmjad-Dev",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/maryam-amjad-3a235a315/",
        label: "LinkedIn",
      },
    ],
  },

  education: [
    {
      id: "edu-gcuf",
      institution: "Government College University Faisalabad",
      degree: "Bachelor of Science in Information Technology",
    },
  ],

  skills: [
    {
      id: "mern",
      name: "MERN Stack Development",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 87 },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Development",
      skills: [
        {
          name: "Tailwind CSS",
          level: 93,
          note: "Primary styling framework — modern utility-first CSS for production React and Next.js projects",
        },
        {
          name: "Bootstrap",
          level: 80,
          note: "Component-based responsive development with Bootstrap grids, utilities, and components",
        },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        {
          name: "MongoDB",
          level: 87,
          note: "Maryam uses MongoDB for MERN applications",
        },
        {
          name: "SQL",
          level: 85,
          note: "Maryam uses SQL for relational database knowledge",
        },
        { name: "REST APIs", level: 90 },
        { name: "API Integration", level: 88 },
        { name: "Serverless APIs", level: 82 },
      ],
    },
    {
      id: "ai",
      name: "AI & Data Tools",
      skills: [
        {
          name: "Google Colab",
          level: 80,
          note: "Maryam uses Google Colab for AI/ML experiments and notebooks",
        },
        { name: "Gemini API", level: 88 },
        { name: "Groq API", level: 85 },
        { name: "Llama 3.3 70B", level: 82 },
        { name: "Google ADK", level: 78 },
        { name: "Google Antigravity", level: 72 },
        { name: "Hugging Face API", level: 86 },
        { name: "AI Agents", level: 84 },
        { name: "Prompt Engineering", level: 88 },
        { name: "LLM Integration", level: 86 },
        { name: "Speech Processing", level: 82 },
        { name: "Fact Verification", level: 80 },
        { name: "RAG", level: 80 },
        { name: "Make.com", level: 80 },
      ],
    },
    {
      id: "programming-languages",
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 88 },
        {
          name: "Python",
          level: 82,
          note: "AI/ML exploration and automation scripting",
        },
        {
          name: "C++",
          level: 78,
          note: "Programming fundamentals, object-oriented programming, and problem solving",
        },
      ],
    },
    {
      id: "developer-tools",
      name: "Developer Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        {
          name: "VS Code",
          level: 88,
          note: "Maryam uses VS Code for development",
        },
        {
          name: "Cursor AI",
          level: 90,
          note: "Maryam uses Cursor AI for AI-assisted development workflows",
        },
        { name: "Claude Code", level: 78 },
        { name: "Google AI Studio", level: 78 },
        { name: "Vercel", level: 88 },
        { name: "MongoDB Atlas", level: 86 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Canva", level: 78 },
        { name: "Linear", level: 85 },
      ],
    },
    {
      id: "collaboration",
      name: "Collaboration Tools",
      skills: [
        {
          name: "Slack",
          level: 82,
          note: "Maryam uses Slack for professional team collaboration",
        },
        {
          name: "Discord",
          level: 80,
          note: "Maryam uses Discord for developer communities, hackathons, and technical collaboration",
        },
      ],
    },
  ],

  experience: [
    {
      id: "exp-matchhalf",
      company: "MatchHalf",
      role: "MERN Stack Developer Intern",
      location: "Hybrid, Pakistan",
      startDate: "2026-02",
      endDate: "2026-04",
      description:
        "Contributed to production-grade SaaS development at MatchHalf — building features, integrating APIs, and resolving 50+ Linear tickets across the full stack.",
      highlights: [
        "Developed and optimized production-grade SaaS features using Next.js, React.js, TypeScript, and Tailwind CSS",
        "Built responsive frontend interfaces and integrated backend APIs",
        "Implemented MSA Driving School contact and booking system using Next.js, MongoDB, and server-side data handling",
        "Resolved 50+ Linear tickets covering bug fixes, feature enhancements, API integrations, and UI improvements",
        "Collaborated with team using Git, GitHub pull requests, Linear, Slack, and modern development workflows",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "REST APIs",
        "Git",
        "GitHub",
        "Linear",
        "Slack",
      ],
    },
    {
      id: "exp-deloitte",
      company: "Deloitte",
      role: "Technology Intern",
      location: "Remote, Australia",
      startDate: "2026-07",
      endDate: "2026-08",
      description:
        "Technology work with the team to deliver Deloitte expertise to clients.",
      highlights: [
        "Supported remote technology delivery for client engagements with Deloitte subject matter experts",
        "Assisted in developing process improvements, documentation, and technical recommendations",
        "Collaborated across teams to align solutions with client requirements and Deloitte quality standards",
      ],
      technologies: ["Documentation", "Client Collaboration", "Process Improvement"],
    },
    {
      id: "exp-gaotek",
      company: "GAOTek Inc",
      role: "Content Writing Intern",
      location: "Remote, Canada",
      startDate: "2025-07",
      endDate: "2025-09",
      description: "Created technical and marketing content for global technology products.",
      highlights: [
        "Wrote SEO-optimized technical articles and product descriptions",
        "Researched emerging tech trends for content strategy",
      ],
      technologies: ["SEO", "Technical Writing"],
    },
  ],

  projects: [
    {
      id: "proj-feature-kit",
      title: "AI Feature Kit",
      slug: "ai-feature-kit",
      description: "Final Year Project — multi-modal AI toolkit.",
      problem:
        "Users needed a single platform for common AI tasks without switching between tools.",
      solution:
        "Built a unified toolkit with Text to Image, Text to Voice, Background Removal, Text Summarizer, and Voice Changer.",
      technologies: ["React", "AI APIs", "Python", "Node.js"],
      tags: ["FYP", "AI", "Multi-modal", "Final Year Project", "1st Position"],
      thumbnailUrl: "/images/projects/feature-kit.jpg",
      featured: true,
      githubUrl: GITHUB_PROFILE,
    },
    {
      id: "proj-verivoice",
      title: "VeriVoice",
      slug: "verivoice",
      description:
        "AI-powered multilingual voice fact verification platform built using a modular multi-agent architecture.",
      problem:
        "Misinformation in audio content is hard to verify quickly across languages and formats.",
      solution:
        "A pipelined multi-agent system performs speech analysis, language detection, translation, fact verification, evidence retrieval, and explainable reporting with confidence scoring.",
      technologies: [
        "Python",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API",
        "FastAPI",
        "MongoDB",
      ],
      tags: [
        "Featured",
        "Team Project",
        "UNESCO Youth Hackathon 2026",
        "AI",
        "Multilingual",
      ],
      thumbnailUrl: "/images/projects/verivoice.jpg",
      featured: true,
      teamProject: true,
      role: "Frontend Developer — design systems, 3D Evidence Constellation visualizer, and multilingual UI/UX.",
      liveUrl: "https://verivoice-ten.vercel.app",
      githubUrl: "https://github.com/MaryamAmjad-Dev/Veri-Voice-Unesco-Hackathon",
    },
    {
      id: "proj-amd-zerotoken",
      title: "AMD ZeroToken Hybrid AI Router",
      slug: "amd-zerotoken",
      description:
        "An intelligent AI routing platform minimizing inference costs by dynamically selecting between local and cloud AI models.",
      problem:
        "Inference costs and latency can make AI deployment expensive; choosing the right model dynamically is non-trivial.",
      solution:
        "A five-layer decision pipeline routes requests between local and cloud models, optimizing for cost, latency, and quality while providing token savings analytics.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Next.js", "React", "TypeScript"],
      tags: ["AMD Developer Hackathon", "Routing", "Cost Optimisation"],
      thumbnailUrl: "/images/projects/amd-zerotoken.jpg",
      featured: false,
      githubUrl: GITHUB_PROFILE,
    },
    {
      id: "proj-mira-ai",
      title: "MIRA AI",
      slug: "mira-ai",
      description:
        "AI-powered MERN application supporting emotional well-being, productivity, intelligent insights, mood journaling, and habit tracking.",
      problem:
        "Users need personalized, privacy-first tools for mental wellbeing and productivity that adapt over time.",
      solution:
        "Built a MERN app with mood journaling, habit tracking, and intelligent insights driven by AI models and privacy-preserving design.",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
      tags: ["MERN", "Wellbeing", "AI"],
      thumbnailUrl: "/images/projects/mira-ai.jpg",
      featured: false,
      githubUrl: GITHUB_PROFILE,
    },
    {
      id: "proj-hiregen",
      title: "HireGen AI",
      slug: "hiregen-ai",
      description:
        "AI hiring platform generating interviews, scoring responses, and reports.",
      problem:
        "Hiring teams struggle to conduct consistent, scalable technical interviews.",
      solution:
        "Developed an AI platform that auto-generates interview questions, scores candidate responses, and produces hiring reports.",
      technologies: ["Next.js", "AI", "Node.js", "MongoDB"],
      tags: ["AI", "Hiring", "SaaS"],
      thumbnailUrl: "/images/projects/hiregen.jpg",
      featured: true,
      githubUrl: `${GITHUB_PROFILE}/hiregen-ai`,
    },
    {
      id: "proj-autovance",
      title: "Autovance AI",
      slug: "autovance-ai",
      description:
        "AI SaaS automation platform supporting English/Urdu natural commands.",
      problem:
        "Businesses needed a way to automate workflows using natural language in multiple languages.",
      solution:
        "Built a MERN SaaS platform with Groq API and Llama 3.3 for bilingual command processing and workflow automation.",
      technologies: ["MERN", "Groq API", "Llama 3.3", "MongoDB"],
      tags: ["AI", "SaaS", "Automation"],
      thumbnailUrl: "/images/projects/autovance.jpg",
      featured: true,
      githubUrl: GITHUB_PROFILE,
    },
    {
      id: "proj-portfolio",
      title: "Maryam AI Portfolio",
      slug: "maryam-ai-portfolio",
      description: "Next-generation AI-powered developer portfolio.",
      problem: "Traditional portfolios fail to engage visitors interactively.",
      solution:
        "Designed an AI-driven portfolio with Gemini integration, animations, and premium SaaS UI.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Generative AI"],
      tags: ["Portfolio", "AI", "Next.js"],
      thumbnailUrl: "/images/projects/portfolio.jpg",
      featured: true,
      liveUrl: "https://maryam-amjad-portfolio.vercel.app/",
      githubUrl: `${GITHUB_PROFILE}/Maryam-Amjad-Portfolio`,
    },
  ],

  hackathons: hackathonEntries,

  volunteer: volunteerEntries,

  certifications: certificationEntries,

  achievements: buildAchievements(hackathonEntries, LINKEDIN_FOLLOWERS),
};

export const featuredProjects = portfolioData.projects.filter((p) => p.featured);

export const allSkills = portfolioData.skills.flatMap((category) =>
  category.skills.map((s) => s.name),
);

/** Human-readable education summary for UI and AI context */
export function formatEducationSummary(
  education = portfolioData.education,
): string {
  return education
    .map((edu) => {
      const lines = [edu.institution, edu.degree];
      return lines.join("\n");
    })
    .join("\n\n");
  }

export const educationSummary = formatEducationSummary();

/** Hero highlight stats derived from portfolio data */
export const heroStats = [
  { label: "Projects", value: `${portfolioData.projects.length}+` },
  { label: "Hackathons", value: `${portfolioData.hackathons.length}+` },
  {
    label: "AI Tools",
    value: `${portfolioData.skills.find((c) => c.id === "ai")?.skills.length ?? 0}+`,
  },
] as const;
