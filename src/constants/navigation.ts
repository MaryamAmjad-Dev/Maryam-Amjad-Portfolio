import type { NavSectionId } from "@/data/translations";

export interface MainNavItem {
  id: NavSectionId;
  href: string;
}

/** Primary navigation anchors — labels resolved via i18n */
export const MAIN_NAV: MainNavItem[] = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
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
    href: "https://www.linkedin.com/in/maryam-amjad-3a235a315/",
    external: true,
  },
] as const;
