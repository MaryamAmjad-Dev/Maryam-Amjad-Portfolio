import { portfolioData } from "../portfolio";
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
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    hackathons: "Hackathons",
    contact: "Contact",
    hireMe: "Hire Me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    availability: "Available for opportunities",
    tagline: profile.tagline,
    hireMe: "Hire Me",
    downloadResume: "Download Resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "Projects",
      hackathons: "Hackathons",
      aiTools: "AI Tools",
    },
    roles: [...profile.roles],
  },
  about: {
    label: "About",
    title: "Where MERN Stack craft meets intelligent systems",
    description:
      "Production SaaS experience, AI automation expertise, and hackathon leadership — a snapshot for recruiters and collaborators.",
    education: "Education",
    achievementHighlights: "Achievement Highlights",
    cgpa: "CGPA",
    summary: profile.summary,
  },
  skills: {
    label: "Skills",
    title: "AI Skill Dashboard",
    description:
      "Technologies and tools powering production applications and AI integrations.",
    technologiesCount: "Proficiency",
  },
  experience: {
    label: "Experience",
    title: "Professional Journey",
    description:
      "Real-world experience building SaaS products, integrating APIs, and delivering production features.",
  },
  projects: {
    label: "Projects",
    title: "Project Showcase",
    description:
      "AI-powered SaaS platforms, security middleware, and production web applications.",
    featured: "Featured",
    problem: "Problem",
    solution: "Solution",
    github: "GitHub",
    liveDemo: "Live Demo",
  },
  hackathons: {
    label: "Hackathons",
    title: "Competition & Innovation",
    description:
      "Active participant and team lead in AI and developer hackathons worldwide.",
  },
  contact: {
    label: "Contact",
    title: "Let's Build Something Intelligent",
    description:
      "Open to MERN Stack Developer opportunities, collaborations, and AI-powered projects.",
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
