import type {
  AchievementStat,
  Certification,
  Hackathon,
  PortfolioData,
  VolunteerExperience,
} from "@/types";

/**
 * Content model sourced from the CV (`reference-docs/Maryam_Amjad_CV - Updated.pdf`).
 *
 * Every external URL below was resolved from the CV's own hyperlink annotations
 * and then fetched to confirm it resolves. Where the CV renders a link label
 * ("Acknowledgement Letter", "QuizOff Certificate") without embedding a
 * destination, no URL is modelled and no external-link control is rendered.
 */

/** Verified — GitHub profile for the "MaryamAmjad-Dev" account */
const GITHUB_PROFILE = "https://github.com/MaryamAmjad-Dev";

/**
 * Verified follower count read from the public LinkedIn profile page.
 * Used for the community achievement stat.
 */
const LINKEDIN_FOLLOWERS = 5989;

const hackathonEntries: Hackathon[] = [
  {
    id: "hack-nasa",
    title: "NASA Space Apps Challenge",
    event: "NASA International Hackathon",
    description:
      "Participated in the 2026 edition of NASA's global space and science hackathon.",
    year: "2026",
  },
  {
    id: "hack-amd",
    title: "AMD Developer Hackathon: Act II",
    event: "AMD Developer Hackathon — Team Shaheen",
    description:
      "Built AMD ZeroToken, a cost-optimised AI router, under the 4 GB RAM / 2 vCPU / no GPU constraint.",
    year: "2026",
  },
  {
    id: "hack-codesprint",
    title: "CodeSprint LA",
    event: "ACM at UCLA — international coding competition",
    placement: "25th out of 137 teams",
    year: "2026",
    links: [
      {
        label: "View Post",
        url: "https://lnkd.in/p/d2BJPfm5",
      },
    ],
  },
  // Presentation order is deliberate: the international headline events first,
  // UNESCO Youth Hackathon in the fourth slot, then the two HEC cohorts.
  {
    id: "hack-unesco",
    title: "UNESCO Youth Hackathon",
    event: "UNESCO Youth Hackathon 2026",
    description:
      "Frontend Developer for VeriVoice, aligned with UNESCO Media and Information Literacy.",
    year: "2026",
  },
  {
    id: "hack-hec2",
    title: "HEC Generative AI Cohort 2",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    description: "Led the team that delivered HireGen AI.",
    year: "2026",
  },
  {
    id: "hack-hec3",
    title: "HEC Generative AI Cohort 3",
    event: "Higher Education Commission Pakistan",
    role: "Team Lead",
    description: "Led the team that delivered Autovance AI.",
    year: "2026",
  },
  {
    id: "hack-quizoff",
    title: "QuizOff",
    event: "International quiz competition",
    description:
      "Competed among 525,000+ students from 35+ countries.",
    year: "2026",
  },
  {
    id: "hack-devlaunch",
    title: "Dev Launch Hackathon",
    event: "Developer Community Event",
    year: "2026",
  },
];

const volunteerEntries: VolunteerExperience[] = [
  {
    id: "vol-stanford-cipx",
    title: "Section Leader (Volunteer)",
    organization: "Stanford University — Code in Place X",
    date: "Oct 2026 to Present",
    description:
      "Selected on the first attempt from over a thousand applications. Teaches a section of beginner Python students as part of an international volunteer team drawn from 87 countries (around 3,500 students).",
    links: [
      {
        label: "View Post",
        url: "https://lnkd.in/p/dj9vuVxZ",
      },
    ],
  },
  {
    id: "vol-icodeguru",
    title: "Trainer, Guest Speaker and Moderator",
    organization: "iCodeGuru",
    date: "Sep 2026 to Present",
    description:
      "Moderated five and spoke at three webinars on Stanford's Code in Place X and PAI at universities including Ghazi University Karachi, NED, Iqra, KUST and GCUF. Spoke at the Stanford Section Leader Info Session at GCUF on 22 September 2026, and reviewed Section Leader applications with written feedback.",
    links: [
      {
        label: "View Post",
        url: "https://lnkd.in/p/dx9jsmd2",
      },
    ],
  },
  {
    id: "vol-ielts",
    title: "IELTS Trainer (Volunteer)",
    organization: "Volunteer",
    date: "Sep 2026 to Oct 2026",
    description:
      "Delivered IELTS Reading, Writing and Speaking sessions with techniques and solved examples.",
    links: [
      {
        label: "View Session Post",
        url: "https://lnkd.in/p/d7rjUK4B",
      },
      {
        label: "Watch Playlist",
        url: "https://youtube.com/playlist?list=PLKEpHNyU9j9o&si=5s2Kz3vjMC_-y4lu",
      },
    ],
  },
  {
    id: "vol-hci-research",
    title: "HCI Research Report and Presentation",
    organization: "Independent Volunteer Project",
    description:
      "Co-authored and presented a Human-Computer Interaction report on procrastination and digital distraction among STEM students.",
    links: [
      {
        label: "View Report",
        url: "https://drive.google.com/file/d/1jbYeRUv7bczTRSL0Zg_xY6-OFx5yL2GX/view?usp=drive_link",
      },
    ],
  },
];

const certificationEntries: Certification[] = [
  {
    id: "cert-wpbrigade",
    title: "Web Development Bootcamp",
    organization: "WPBrigade",
    date: "Sep 2026",
    note: "Delivered in collaboration with iCodeGuru.",
    links: [
      {
        label: "View Post",
        url: "https://lnkd.in/p/d-re-Fjt",
      },
    ],
  },
  {
    id: "cert-genai-mastermind",
    title: "Generative AI Mastermind",
    organization: "Outskill",
    note: "Led by Vaibhav Sisinty.",
    links: [
      {
        label: "View Certificate",
        url: "https://drive.google.com/file/d/1BzFw-XUYDjPm6H6YCfpoHC4p-M4oNX9x/view?usp=drive_link",
      },
    ],
  },
  {
    id: "cert-aspire",
    title: "Aspire Leaders Program (Cohort 3, 2026)",
    organization: "Aspire Institute",
    date: "2026",
    note: "Graduate and alumna of the 2026 cohort.",
    links: [
      {
        label: "View Certificate",
        url: "https://drive.google.com/file/d/1_T-idPmiRPMIl8MYWAfHXRzP2iqqMI5Z/view?usp=sharing",
      },
      {
        label: "View Post",
        url: "https://lnkd.in/p/dXRRfJPB",
      },
    ],
  },
  {
    id: "cert-gydf-mindset",
    title:
      "Developing the Mindset and Skills Young People Need to Succeed in a Global World",
    organization: "Global Youth Development Forum, Sierra Leone Chapter",
    date: "Aug 2026",
    note: "Training led by Coach Alie Bangoura.",
    links: [
      {
        label: "View Certificate",
        url: "https://drive.google.com/file/d/14TUAxZmfPehZ9mbDMy4cnHTEP9cIPD0C/view?usp=drive_link",
      },
    ],
  },
];

/**
 * Derive the hackathon achievement stats from the entries above.
 *
 * `teamLeadCount` is taken directly from the CV ("led 3 teams, including two
 * Higher Education Commission Generative AI cohorts") rather than derived from
 * the card list, because the CV states the total without naming the third
 * team-lead engagement.
 */
function buildAchievements(
  events: Hackathon[],
  linkedinFollowers: number,
  teamLeadCount: number,
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
      label: "National and International Hackathons",
      subtitle: "AI and web competitions",
      value: events.length,
      suffix: "+",
    },
    {
      id: "ach-lead",
      label: "Team Lead",
      subtitle: "Generative AI hackathons",
      value: teamLeadCount,
      suffix: "x",
    },
    {
      id: "ach-codesprint",
      label: "CodeSprint LA Ranking",
      value: rank ? Number(rank) : 25,
      displayValue: rank && total ? `Top ${rank} / ${total}` : undefined,
    },
    {
      id: "ach-stanford",
      label: "Section Leader at Stanford Code in Place X",
      subtitle: "Selected on the first attempt",
      value: 1,
      displayValue: "1st Try",
    },
    {
      id: "ach-quizoff",
      label: "QuizOff",
      subtitle: "35+ countries",
      value: 525000,
      displayValue: "525K+",
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
    title: "SL @ Stanford Code in Place X • Trainer • Guest Speaker • Moderator",
    tagline:
      "Building scalable, AI-enabled web applications with modern full-stack technology.",
    bio: "Information Technology graduate and full-stack developer building production web applications and AI applications, with experience in technical leadership, teaching, and community work.",
    summary:
      "I am an Information Technology graduate from Government College University Faisalabad, with experience building full-stack web applications.\n\nI currently serve as a Section Leader for Stanford University's Code in Place X. I also contribute to the tech community as a trainer, guest speaker, webinar moderator, and volunteer instructor.\n\nMy projects span multilingual voice-based verification, automation platforms, and cost-optimised software systems. I have participated in national and international hackathons, led teams, and collaborated with technical communities to build practical solutions.",
    location: "Pakistan",
    email: "maryamamjad621@gmail.com",
    phone: "+92 314 7390062",
    roles: [
      "Hackathon Team Lead",
      "Trainer & Mentor",
      "Guest Speaker",
      "Webinar Moderator",
      "Technical Content Writer",
    ],
    image: "/profile/maryam.svg",
    avatarUrl: "/profile/maryam.svg",
    resumeUrl: "/resume/Maryam-Amjad-Resume.pdf",
    socialLinks: [
      {
        platform: "github",
        url: GITHUB_PROFILE,
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/maryam-amjad-6a7a8m/",
        label: "LinkedIn",
      },
    ],
  },

  education: [
    {
      id: "edu-gcuf",
      institution: "Government College University Faisalabad",
      degree: "Bachelor of Science in Information Technology",
      field: "Information Technology",
      startDate: "2021-11",
      endDate: "2025-10",
      cgpa: "3.45",
      achievement: "Ranked 4th in the BS class by CGPA.",
      coursework: [
        "Data Structures",
        "Object-Oriented Programming",
        "Databases",
        "Software Engineering",
        "Quality Assurance",
        "Human-Computer Interaction",
        "Web Development",
      ],
    },
  ],

  skills: [
    {
      id: "languages",
      name: "Languages",
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "HTML5" },
        { name: "CSS3" },
      ],
    },
    {
      id: "backend",
      name: "Backend & Databases",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "FastAPI" },
        { name: "REST APIs" },
        { name: "JWT" },
        { name: "MongoDB" },
        { name: "MySQL" },
      ],
    },
    {
      id: "ai",
      name: "AI",
      skills: [
        { name: "Agentic AI" },
        { name: "Generative AI" },
        { name: "Prompt Engineering" },
        { name: "LLM Application Development" },
        { name: "Multi-Agent Systems" },
      ],
    },
    {
      id: "quality",
      name: "Quality & Usability",
      skills: [
        { name: "Software Quality Assurance" },
        { name: "Manual Testing" },
        { name: "Usability Testing" },
        { name: "Human-Computer Interaction" },
      ],
    },
    {
      id: "deployment",
      name: "Deployment",
      skills: [
        { name: "Vercel" },
        { name: "Render" },
        { name: "MongoDB Atlas" },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Cursor" },
        { name: "Claude Code" },
        { name: "Figma" },
      ],
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      skills: [
        { name: "Public Speaking" },
        { name: "Training and Mentoring" },
        { name: "Webinar Moderation" },
        { name: "Content Writing" },
      ],
    },
  ],

  experience: [
    {
      id: "exp-matchhalf",
      company: "MatchHalf",
      role: "MERN Stack Developer Intern",
      location: "Hybrid, Pakistan",
      startDate: "2026-03",
      endDate: "2026-07",
      description:
        "Built features for a production social networking application, working across the full stack with modern React tooling.",
      highlights: [
        "Built 10+ features for a production social networking application using Next.js, React, TypeScript and Tailwind CSS",
        "Integrated 5+ REST APIs",
        "Resolved 50+ tickets through pull requests",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1bD5s1Feg_bg8Tj6xt5Dq9Sb1mIRImS7b/view?usp=sharing",
    },
    {
      id: "exp-deloitte",
      company: "Deloitte Australia",
      role: "Technology Job Simulation",
      location: "Virtual (Forage)",
      startDate: "2026-06",
      endDate: "2026-08",
      simulation: true,
      description:
        "Completed Deloitte Australia's virtual technology job simulation hosted on Forage.",
      highlights: [
        "Analysed client system data to identify faults",
        "Documented solutions for the identified issues",
      ],
      technologies: ["Data Analysis", "Documentation"],
      certificateUrl:
        "https://drive.google.com/file/d/1TIcqgh-Fay6_LS21KddYqjrUJ_PI_W2v/view?usp=sharing",
    },
    {
      id: "exp-gaotek",
      company: "GAOTek Incorporated, Canada",
      role: "Technical Content Writing Intern",
      location: "Remote, Canada",
      startDate: "2025-07",
      endDate: "2025-10",
      description:
        "Produced technical content for a global technology audience on a remote basis.",
      highlights: [
        "Wrote 15+ SEO-focused technical articles",
        "Delivered all assignments on time",
      ],
      technologies: ["SEO", "Technical Writing"],
    },
  ],

  projects: [
    {
      id: "proj-feature-kit",
      title: "AI Feature Kit",
      slug: "ai-feature-kit",
      description:
        "Modular AI platform that brings text-to-image, text-to-speech, voice conversion, summarisation and background removal into one interface. Built as the final-year project, each capability stays independent so a model or endpoint can be swapped without touching the rest of the app.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      tags: ["Final Year Project", "AI", "Multi-modal"],
      featured: true,
      role: "Final Year Project",
      liveUrl: "https://fyp-ai-feature-kit-web-app.vercel.app",
      githubUrl: "https://github.com/MaryamAmjad-Dev/FYP-AI-Feature-Kit-Web-App",
    },
    {
      id: "proj-autovance",
      title: "Autovance AI",
      slug: "autovance-ai",
      description:
        "AI-powered automation platform combining email sending, secure webhook execution, cron scheduling and custom form actions in one dashboard. Built as the team's HEC Generative AI Cohort 3 entry, it adds an explainable-AI workflow builder presented as a research prototype with a dry-run preview, and reports provider failures honestly instead of claiming success.",
      technologies: [
        "Next.js (Pages Router)",
        "React",
        "Node.js",
        "PostgreSQL (Neon)",
        "OpenRouter",
        "React Flow",
        "Vercel",
      ],
      tags: ["HEC Generative AI Cohort 3", "AI", "Automation"],
      featured: true,
      teamProject: true,
      role: "Team Lead",
      liveUrl: "https://autovance-ai.vercel.app",
      githubUrl: "https://github.com/MaryamAmjad-Dev/Autovance-AI",
    },
    {
      id: "proj-verivoice",
      title: "VeriVoice",
      slug: "verivoice",
      description:
        "Voice-first multilingual verification assistant built for the UNESCO Youth Hackathon 2026. A voice-in, voice-out loop answers in Urdu, Spanish, Indonesian or English, while claim classification, evidence retrieval from institutional sources and citation guardrails keep answers tied to the retrieved sources. I built the audio visualizer, hands-free voice mode and the Evidence Drawer.",
      technologies: [
        "React 18",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Groq (Whisper, Llama 3.3 70B)",
        "Zod",
        "Edge Neural TTS",
        "Discord.js",
      ],
      tags: ["UNESCO Youth Hackathon 2026", "AI", "Multilingual", "Voice"],
      featured: true,
      teamProject: true,
      role: "Frontend Developer",
      liveUrl: "https://verivoice-ten.vercel.app",
      githubUrl:
        "https://github.com/MaryamAmjad-Dev/Veri-Voice-Unesco-Hackathon",
    },
    {
      id: "proj-amd-zerotoken",
      title: "AMD Model Router",
      slug: "amd-zerotoken",
      description:
        "Resource-aware AI inference router built for Track 1 of the AMD Developer Hackathon. Deterministic solvers handle structured problems at zero token cost, a quantized local Qwen 2.5 3B model covers low-complexity tasks, and cloud escalation stays limited to an allow-list. Token ceilings and timeouts keep runs inside a 4 GB RAM, 2 vCPU, GPU-free container.",
      technologies: [
        "Python",
        "Docker",
        "llama.cpp",
        "Qwen 2.5 3B (GGUF)",
        "Fireworks API",
        "Next.js",
        "Tailwind CSS",
      ],
      tags: [
        "AMD Developer Hackathon: Act II",
        "Team Shaheen",
        "Cost Optimisation",
      ],
      featured: false,
      teamProject: true,
      liveUrl: "https://amd-zero-token-ai-router.vercel.app",
      githubUrl:
        "https://github.com/MaryamAmjad-Dev/AMD-ZeroToken-AI-Router-Project",
      links: [
        {
          label: "View Certificate",
          url: "https://drive.google.com/file/d/1vO8gwTVjY9XZo9QPsLhlK3s6SVq2VF4n/view?usp=drive_link",
        },
      ],
    },
    {
      id: "proj-hiregen",
      title: "HireGen AI",
      slug: "hiregen-ai",
      description:
        "Recruitment platform that auto-generates interview questions, scores candidate responses and produces hiring reports. Led the team that delivered it for HEC Generative AI Cohort 2, giving hiring teams a consistent, repeatable technical interview and scoring flow.",
      technologies: ["Next.js", "AI", "Node.js", "MongoDB"],
      tags: ["HEC Generative AI Cohort 2", "AI", "Hiring"],
      featured: true,
      teamProject: true,
      role: "Team Lead",
      liveUrl: "https://hiregen-ai.vercel.app",
      githubUrl: "https://github.com/MaryamAmjad-Dev/hiregen-ai",
    },
    {
      id: "proj-mira-ai",
      title: "MIRA AI",
      slug: "mira-ai",
      description:
        "Personal growth platform combining mood journaling, habit tracking and goal analytics, with JWT and Google OAuth authentication keeping each account's entries private to its owner.",
      technologies: ["MERN", "JWT", "Google OAuth"],
      tags: ["Personal Project", "MERN", "Wellbeing"],
      featured: false,
      githubUrl:
        "https://github.com/MaryamAmjad-Dev/MIRA-AI-Personal-Growth-Assistant",
    },
    {
      id: "proj-lakki-marwat",
      title: "University of Lakki Marwat Website Evaluation",
      slug: "lakki-marwat-website-evaluation",
      description:
        "Academic project for the Human-Computer Interaction mid-semester: a full heuristic and usability evaluation of the University of Lakki Marwat website, delivered as a written report and a presentation and assessed through Hirestive.",
      technologies: ["Human-Computer Interaction", "Heuristic Evaluation"],
      tags: ["Academic Project", "HCI", "Mid Semester"],
      featured: false,
      links: [
        {
          label: "View Presentation",
          url: "https://docs.google.com/presentation/d/17H6NsZhOOeXh7tgE09xO1KK0DHyOTUOD/edit?slide=id.p1&slide=id.p1",
        },
        {
          label: "View Report",
          url: "https://docs.google.com/document/d/1tvl6LJONnrjT3y9Kf_We101-cwWqWdkO/edit",
        },
      ],
    },
    {
      id: "proj-portfolio",
      title: "Maryam AI Portfolio",
      slug: "maryam-ai-portfolio",
      description:
        "Next.js, TypeScript and Tailwind CSS portfolio with a built-in AI assistant and motion-driven UI. Designed as a live demonstration of the same full-stack and generative-AI stack used across the other projects.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Generative AI"],
      tags: ["Portfolio", "AI", "Next.js"],
      featured: false,
      liveUrl: "https://maryam-amjad-portfolio.vercel.app/",
      githubUrl: `${GITHUB_PROFILE}/Maryam-Amjad-Portfolio`,
    },
  ],

  hackathons: hackathonEntries,

  volunteer: volunteerEntries,

  certifications: certificationEntries,

  achievements: buildAchievements(hackathonEntries, LINKEDIN_FOLLOWERS, 3),
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
      if (edu.achievement) lines.push(edu.achievement);
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
    label: "AI Skills",
    value: `${portfolioData.skills.find((c) => c.id === "ai")?.skills.length ?? 0}+`,
  },
] as const;
