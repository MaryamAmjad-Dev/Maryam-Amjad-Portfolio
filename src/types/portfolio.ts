import type { ISODateString, SocialLink, WithId } from "./common";

/** External reference to a post, certificate, report, or deck */
export interface ResourceLink {
  /** Descriptive link text, e.g. "Certificate", "Post", "Report" */
  label: string;
  url: string;
}

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

/**
 * Individual skill entry.
 *
 * Deliberately carries no proficiency rating, percentage, or years-of-experience
 * figure — the CV does not substantiate any, so none are modelled.
 */
export interface SkillItem {
  name: string;
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
  /** True for virtual job simulations rather than conventional employment */
  simulation?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  /** Completion / experience certificate (external URL) */
  certificateUrl?: string;
}

/** Portfolio project showcase */
export interface Project extends WithId {
  title: string;
  slug: string;
  description: string;
  /** Optional: only present when the CV or repo states the problem explicitly */
  problem?: string;
  /** Optional: only present when the CV or repo states the approach explicitly */
  solution?: string;
  longDescription?: string;
  /** Optional — several verified projects ship no image asset */
  thumbnailUrl?: string;
  images?: string[];
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  /** Optional — academic and research projects may have no repository */
  githubUrl?: string;
  /** @deprecated Use githubUrl */
  repoUrl?: string;
  featured: boolean;
  /** Built collaboratively with a team rather than solo */
  teamProject?: boolean;
  /** Maryam's specific role and contributions on the project */
  role?: string;
  completedAt?: ISODateString;
  /** Supporting material such as certificates, slides, or reports */
  links?: ResourceLink[];
}

/** Education or certification entry */
export interface Education extends WithId {
  institution: string;
  degree: string;
  field?: string;
  startDate?: ISODateString;
  endDate?: ISODateString;
  cgpa?: string;
  /** e.g. "4th in the BS class by CGPA" */
  achievement?: string;
  coursework?: string[];
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
  links?: ResourceLink[];
}

/** Volunteer or community contribution entry */
export interface VolunteerExperience extends WithId {
  title: string;
  /** Organizing body or "Independent Volunteer Project" */
  organization?: string;
  description: string;
  date?: string;
  links?: ResourceLink[];
}

/** Certification or training credential */
export interface Certification extends WithId {
  title: string;
  organization: string;
  date?: string;
  /** Optional context (e.g. session format or facilitator) */
  note?: string;
  links?: ResourceLink[];
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
  volunteer: VolunteerExperience[];
  certifications: Certification[];
  achievements: AchievementStat[];
}
