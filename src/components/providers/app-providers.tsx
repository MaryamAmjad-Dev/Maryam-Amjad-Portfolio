"use client";

import type { ReactNode } from "react";
import { CustomCursor } from "@/components/effects";
import { LanguageProvider } from "@/hooks/useLanguage";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CustomCursor />
      {children}
    </LanguageProvider>
  );
}
