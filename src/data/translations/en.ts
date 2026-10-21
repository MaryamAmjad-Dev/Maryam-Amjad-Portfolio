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
    roles: [...profile.roles],
  },
  about: {
    label: "About",
    title: "AI Engineering, Education & Community Leadership",
    description:
      "Building AI-powered applications, sharing technical knowledge, and helping others grow through teaching and community engagement.",
    summary: profile.summary,
  },
  achievements: {
    label: "Achievements",
    title: "Achievements & Recognition",
    description:
      "Verified competition results, leadership milestones, and recognition from national and international programmes.",
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
    problem: "Problem",
    solution: "Solution",
    github: "View Repository",
    liveDemo: "Live Demo",
  },
  hackathons: {
    label: "Hackathons",
    title: "International Hackathons",
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
