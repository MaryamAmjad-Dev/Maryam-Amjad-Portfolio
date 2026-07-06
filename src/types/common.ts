import type { ReactNode } from "react";

/** Shared props for composable UI components */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/** Navigation link used in header, footer, and mobile menu */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/** External profile or contact link */
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

/** Generic metadata for list items and cards */
export interface WithId {
  id: string;
}

/** ISO date string (YYYY-MM-DD) */
export type ISODateString = string;
