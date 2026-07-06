"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";

export function AppProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
