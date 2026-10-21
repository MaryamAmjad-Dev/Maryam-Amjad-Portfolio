import type { NavSectionId } from "@/data/translations";

export interface MainNavItem {
  id: NavSectionId;
  href: string;
}

/**
 * Primary navigation anchors — labels resolved via i18n.
 *
 * Order matches the rendered page: hero → About (intro) → the seven main
 * portfolio sections → contact.
 */
export const MAIN_NAV: MainNavItem[] = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "achievements", href: "#achievements" },
  { id: "education", href: "#education" },
  { id: "experience", href: "#experience" },
  { id: "projects", href: "#projects" },
  { id: "hackathons", href: "#hackathons" },
  { id: "volunteer", href: "#volunteer" },
  { id: "certifications", href: "#certifications" },
  { id: "contact", href: "#contact" },
];

/** Footer navigation links */
export const FOOTER_NAV = [
  { label: "GitHub", href: "https://github.com/MaryamAmjad-Dev", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maryam-amjad-6a7a8m/",
    external: true,
  },
] as const;
