import { portfolioData } from "@/data/portfolio";

const { profile } = portfolioData;

/** Global site identity and SEO defaults */
export const SITE = {
  name: profile.name,
  title: `${profile.name} | ${profile.roles[0]}`,
  description: profile.bio,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  author: profile.name,
  keywords: [
    profile.name,
    "MERN Stack Developer",
    "Next.js Developer",
    "AI Automation",
    "Agentic AI",
    "LLM APIs",
    "TypeScript",
    "React",
    "Gemini API",
    "Groq API",
    "Pakistan Developer",
  ],
} as const;

export const SITE_ROUTES = {
  home: "/",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/maryamaliali",
  linkedin: "https://www.linkedin.com/in/maryam-amjad-3a235a315/",
  email: "mailto:maryamamjad621@gmail.com",
  phone: "tel:+923147390062",
} as const;
