import type { AchievementStat, Hackathon, PortfolioData } from "@/types";

const hackathonEntries: Hackathon[] = [
  {
    id: "hack-amd",
    title: "AMD Developer Hackathon ACT II",
    event: "International — lablab.ai",
    description: "Built AI-powered solutions on AMD hardware infrastructure.",
    year: "2025",
  },
  {
    id: "hack-codesprint",
    title: "CodeSprint LA",
    event: "Los Angeles Hackathon",
    placement: "25th out of 137 teams",
    year: "2025",
  },
  {
    id: "hack-hec2",
    title: "HEC GenAI Cohort 2",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    year: "2025",
  },
  {
    id: "hack-hec3",
    title: "HEC GenAI Cohort 3",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    year: "2025",
  },
  {
    id: "hack-devlaunch",
    title: "Dev Launch Hackathon",
    event: "Developer Community Event",
    year: "2025",
  },
  {
    id: "hack-unesco",
    title: "UNESCO Youth Hackathon",
    event: "UNESCO International",
    year: "2025",
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

export const portfolioData: PortfolioData = {
  profile: {
    name: "Maryam Amjad",
    title: "MERN Stack Developer",
    tagline:
      "Building scalable full-stack applications with MERN technologies and AI automation.",
    bio: "MERN Stack Developer passionate about scalable full-stack applications and AI-powered solutions. Production SaaS experience, LLM integrations, and hackathon leadership.",
    summary:
      "A MERN Stack Developer passionate about creating scalable, high-performance full-stack applications with MongoDB, Express.js, React.js, Next.js, Node.js, TypeScript, and Tailwind CSS.\n\nDriven by curiosity for intelligent systems, I explore and build AI-powered solutions using AI Automation, Agentic AI workflows, LLM APIs, Gemini API, Groq API, and Machine Learning concepts.\n\nMy experience includes contributing to real-world SaaS products, developing frontend and backend features, integrating APIs, and building production-ready web applications within professional development workflows.\n\nBeyond engineering, I actively engage in AI and Web hackathons as a contributor and team lead, transforming ideas into impactful digital solutions through continuous learning and innovation.",
    location: "Pakistan",
    email: "maryamamjad621@gmail.com",
    phone: "+92 314 7390062",
    roles: [
      "MERN Stack Developer",
      "Next.js Developer",
      "AI Automation & Agentic AI Enthusiast",
    ],
    image: "/profile/maryam.jpg",
    avatarUrl: "/profile/maryam.jpg",
    resumeUrl: "/resume/Maryam-Amjad-Resume.pdf",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/maryamaliali",
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
      cgpa: "3.45/4.0",
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
        { name: "Vercel", level: 88 },
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
      id: "exp-zynarvo",
      company: "Zynarvo IT Solutions",
      role: "IT Recruiter",
      location: "Remote, UK",
      startDate: "2025-06",
      endDate: "2025-08",
      description: "Sourced and screened technical talent for UK-based IT roles.",
      highlights: [
        "Managed end-to-end recruitment pipeline for tech positions",
        "Collaborated with hiring managers on role requirements",
      ],
      technologies: ["LinkedIn Recruiter", "ATS Tools"],
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
      repoUrl: "https://github.com/maryamaliali",
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
      repoUrl: "https://github.com/maryamaliali",
    },
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
      tags: ["FYP", "AI", "Multi-modal"],
      thumbnailUrl: "/images/projects/feature-kit.jpg",
      featured: true,
      repoUrl: "https://github.com/maryamaliali",
    },
    {
      id: "proj-aiuc",
      title: "Edge Native AIUC Gateway",
      slug: "edge-native-aiuc-gateway",
      description:
        "AI security middleware removing sensitive information before AI requests.",
      problem:
        "Organizations risk exposing PII and sensitive data when sending requests to AI models.",
      solution:
        "Created edge-native middleware that detects and redacts sensitive information before AI API calls.",
      technologies: ["Node.js", "AI Security", "Edge Computing"],
      tags: ["Security", "AI", "Middleware"],
      thumbnailUrl: "/images/projects/aiuc.jpg",
      featured: true,
      repoUrl: "https://github.com/maryamaliali",
    },
    {
      id: "proj-driving",
      title: "MSA Driving School — Driving Web Forms System",
      slug: "driving-web-forms",
      description:
        "Next.js contact and booking system for MSA Driving School, built during MatchHalf MERN Stack internship.",
      problem: "MSA Driving School needed a reliable digital booking and contact system.",
      solution:
        "Built a Next.js app with MongoDB, API integrations, and server-side actions for responsive contact and booking forms with database persistence.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Serverless Actions"],
      tags: ["Next.js", "Forms", "MongoDB", "MSA Driving School"],
      thumbnailUrl: "/images/projects/driving.jpg",
      featured: false,
      repoUrl: "https://github.com/maryamaliali",
    },
    {
      id: "proj-forms",
      title: "Next.js Form Handling",
      slug: "nextjs-form-handling",
      description: "Modern serverless form architecture patterns.",
      problem: "Developers need robust, type-safe form patterns for Next.js App Router.",
      solution:
        "Implemented modern serverless form architecture with validation, error handling, and optimistic UI.",
      technologies: ["Next.js", "TypeScript", "Zod", "Server Actions"],
      tags: ["Next.js", "Forms", "Architecture"],
      thumbnailUrl: "/images/projects/forms.jpg",
      featured: false,
      repoUrl: "https://github.com/maryamaliali",
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
      liveUrl: "https://github.com/maryamaliali",
      repoUrl: "https://github.com/maryamaliali",
    },
    {
      id: "proj-wildlife",
      title: "Wildlife Site",
      slug: "wildlife-site",
      description: "Interactive wildlife conservation awareness website.",
      problem: "Wildlife conservation organizations need engaging digital presence.",
      solution:
        "Created an immersive wildlife site with rich media, education content, and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      tags: ["Web", "Conservation"],
      thumbnailUrl: "/images/projects/wildlife.jpg",
      featured: false,
      repoUrl: "https://github.com/maryamaliali",
    },
  ],

  hackathons: hackathonEntries,

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
      if (edu.cgpa) lines.push(`CGPA: ${edu.cgpa}`);
      return lines.join("\n");
    })
    .join("\n\n");
}

export const educationSummary = formatEducationSummary();

/** Hero highlight stats derived from portfolio data */
export const heroStats = [
  { label: "Projects", value: `${portfolioData.projects.length}+` },
  { label: "Hackathons", value: String(portfolioData.hackathons.length) },
  {
    label: "AI Tools",
    value: `${portfolioData.skills.find((c) => c.id === "ai")?.skills.length ?? 0}+`,
  },
] as const;
