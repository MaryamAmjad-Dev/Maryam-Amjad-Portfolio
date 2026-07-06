import type { ISODateString, SocialLink, WithId } from "./common";

/** Core identity and positioning */
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  roles: string[];
  /** Primary profile photo path (public/) */
  image?: string;
  avatarUrl: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

/** Individual skill with proficiency level (0–100) */
export interface SkillItem {
  name: string;
  level: number;
  /** Optional context for AI knowledge base (e.g. how the tool is used) */
  note?: string;
}

/** Technology or domain skill grouping */
export interface SkillCategory extends WithId {
  name: string;
  skills: SkillItem[];
}

/** Professional experience entry */
export interface Experience extends WithId {
  company: string;
  role: string;
  location?: string;
  startDate: ISODateString;
  endDate?: ISODateString;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

/** Portfolio project showcase */
export interface Project extends WithId {
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  longDescription?: string;
  thumbnailUrl: string;
  images?: string[];
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  completedAt?: ISODateString;
}

/** Education or certification entry */
export interface Education extends WithId {
  institution: string;
  degree: string;
  field?: string;
  startDate?: ISODateString;
  endDate?: ISODateString;
  cgpa?: string;
  description?: string;
}

/** Hackathon participation or achievement */
export interface Hackathon extends WithId {
  title: string;
  event: string;
  placement?: string;
  role?: string;
  description?: string;
  year?: string;
}

/** Animated achievement counter stat */
export interface AchievementStat extends WithId {
  label: string;
  /** Short context line shown below the label (e.g. "AI/Web Competitions") */
  subtitle?: string;
  value: number;
  prefix?: string;
  suffix?: string;
  displayValue?: string;
}

/** Aggregated portfolio content model */
export interface PortfolioData {
  profile: Profile;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  hackathons: Hackathon[];
  achievements: AchievementStat[];
}
