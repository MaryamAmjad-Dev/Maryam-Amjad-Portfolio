import { portfolioData } from "../portfolio";
import {
  PRIMARY_ROLE,
  PROFILE_CARD_ROLE,
  PROFESSIONAL_BADGES,
} from "@/constants/badges";
import type { TranslationDictionary } from "@/types";

const { profile } = portfolioData;

/** Canonical English dictionary — source of truth for all locales */
export const enDictionary: TranslationDictionary = {
  meta: {
    multilingualExperience: "AI-powered multilingual experience",
  },
  language: {
    label: "Language",
    selectLanguage: "Select language",
  },
  theme: {
    current: "Current theme: {theme}",
    switchTo: "Switch to {theme} theme",
    light: "Light",
    dark: "Dark",
  },
  nav: {
    home: "Home",
    about: "About",
    achievements: "Achievements",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    hackathons: "Hackathons",
    volunteer: "Volunteer",
    certifications: "Certificates",
    contact: "Contact",
    hireMe: "Hire Me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
  },
  hero: {
    availability: "Available for opportunities",
    tagline: profile.tagline,
    headline: profile.title,
    primaryRole: PRIMARY_ROLE,
    profileCardRole: PROFILE_CARD_ROLE,
    badges: [...PROFESSIONAL_BADGES],
    hireMe: "Hire Me",
    downloadResume: "Download CV",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "Projects",
      hackathons: "Hackathons",
      aiTools: "AI Tools",
    },
    roles: [
      "Hackathon Team Lead",
      "Trainer & Mentor",
      "Guest Speaker",
      "Webinar Moderator",
      "Technical Content Writer",
    ],
  },
  about: {
    label: "About",
    title: "Engineering, Education & Community Leadership",
    description:
      "Building web applications, sharing technical knowledge, and helping others grow through teaching and community engagement.",
    summary: profile.summary,
  },
  achievements: {
    label: "Achievements",
    title: "Achievements & Recognition",
    description:
      "Verified competition results, leadership milestones, and recognition from national and international programmes.",
    cards: {
      "ach-participant": {
        label: "National and International Hackathons",
        subtitle: "AI and web competitions",
      },
      "ach-autovance": {
        label: "Autovance AI",
        subtitle: "HEC Generative AI Cohort 3",
      },
      "ach-lead": {
        label: "Team Lead",
        subtitle: "Generative AI hackathons",
      },
      "ach-codesprint": {
        label: "CodeSprint LA Ranking",
      },
      "ach-stanford": {
        label: "Section Leader at Stanford Code in Place X",
        subtitle: "Selected on the first attempt",
      },
      "ach-unesco": {
        label: "UNESCO Youth Hackathon 2026",
        subtitle: "VeriVoice — UNESCO Media & Information Literacy",
      },
      "ach-quizoff": {
        label: "QuizOff",
        subtitle: "Students from 35+ countries",
      },
      "ach-linkedin": {
        label: "LinkedIn Community",
      },
    },
  },
  education: {
    label: "Education",
    title: "Education",
    description: "Degree, academic standing, and the coursework behind the work.",
    cgpa: "CGPA",
    coursework: "Coursework",
  },
  skills: {
    label: "Skills",
    title: "AI Skill Dashboard",
    description:
      "Technologies and tools powering production applications and AI integrations.",
    technologies: "{count} technologies",
  },
  experience: {
    label: "Experience",
    title: "Professional Experience",
    description:
      "Internship and role-based work across production products, virtual simulations, and consulting engagements.",
    simulation: "Virtual Simulation",
    certificate: "Certificate",
  },
  projects: {
    label: "Projects",
    title: "Academic Projects",
    description:
      "Final-year, academic, and hackathon projects spanning AI applications, automation, and full-stack engineering.",
    featured: "Featured",
    teamProject: "Team Project",
    myRole: "My Role",
    github: "View Repository",
    liveDemo: "Live Demo",
    items: {
      "proj-feature-kit": {
        description:
          "Modular AI platform that brings text-to-image, text-to-speech, voice conversion, summarisation and background removal into one interface. Built as the final-year project, each capability stays independent so a model or endpoint can be swapped without touching the rest of the app.",
        role: "Final Year Project",
      },
      "proj-verivoice": {
        description:
          "Voice-first multilingual verification assistant built for the UNESCO Youth Hackathon 2026. A voice-in, voice-out loop answers in Urdu, Spanish, Indonesian or English, while claim classification, evidence retrieval from institutional sources and citation guardrails keep answers tied to the retrieved sources. I built the audio visualizer, hands-free voice mode and the Evidence Drawer.",
        role: "Frontend Developer",
      },
      "proj-amd-zerotoken": {
        description:
          "Resource-aware AI inference router built for Track 1 of the AMD Developer Hackathon. Deterministic solvers handle structured problems at zero token cost, a quantized local Qwen 2.5 3B model covers low-complexity tasks, and cloud escalation stays limited to an allow-list. Token ceilings and timeouts keep runs inside a 4 GB RAM, 2 vCPU, GPU-free container.",
      },
      "proj-autovance": {
        description:
          "AI-powered automation platform combining email sending, secure webhook execution, cron scheduling and custom form actions in one dashboard. Built as the team's HEC Generative AI Cohort 3 entry, it adds an explainable-AI workflow builder presented as a research prototype with a dry-run preview, and reports provider failures honestly instead of claiming success.",
        role: "Team Lead",
      },
      "proj-hiregen": {
        description:
          "Recruitment platform that auto-generates interview questions, scores candidate responses and produces hiring reports. Led the team that delivered it for HEC Generative AI Cohort 2, giving hiring teams a consistent, repeatable technical interview and scoring flow.",
        role: "Team Lead",
      },
      "proj-mira-ai": {
        description:
          "Personal growth platform combining mood journaling, habit tracking and goal analytics, with JWT and Google OAuth authentication keeping each account's entries private to its owner.",
      },
      "proj-lakki-marwat": {
        description:
          "Academic project for the Human-Computer Interaction mid-semester: a full heuristic and usability evaluation of the University of Lakki Marwat website, delivered as a written report and a presentation and assessed through Hirestive.",
      },
      "proj-portfolio": {
        description:
          "Next.js, TypeScript and Tailwind CSS portfolio with a built-in AI assistant and motion-driven UI. Designed as a live demonstration of the same full-stack and generative-AI stack used across the other projects.",
      },
    },
  },
  hackathons: {
    label: "Hackathons",
    title: "National and International Hackathons",
    description:
      "Participant and team lead across national and international AI and developer hackathons, with a top-25 finish at CodeSprint LA.",
  },
  volunteer: {
    label: "Community",
    title: "Volunteer Experience",
    description:
      "Teaching, mentoring, and community contributions beyond client and hackathon work.",
  },
  certifications: {
    label: "Credentials",
    title: "Training and Certificates",
    description:
      "Professional development, leadership training, and certifications, each linked to its verified document.",
  },
  contact: {
    label: "Contact",
    title: "Let's Build Something Intelligent",
    description:
      "Open to full-stack and AI engineering opportunities, collaborations, and AI-powered projects.",
    aiPoweredContact: "AI-Powered Contact",
    getInTouch: "Get in Touch",
    intro:
      "Reach out for hiring, freelance projects, or hackathon collaborations.",
    linkedinProfile: "LinkedIn Profile",
    githubProfile: "GitHub Profile",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or opportunity...",
      sending: "Sending...",
      send: "Send Message",
    },
    toast: {
      success: "Message sent successfully",
      error: "Something went wrong",
    },
  },
  footer: {
    email: "Email",
    rights: "All rights reserved.",
  },
  resume: {
    unavailable: "Resume is not available yet. Please contact me directly.",
  },
};
