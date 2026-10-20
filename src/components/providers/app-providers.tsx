"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/hooks/useLanguage";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      themes={["light", "dark"]}
    >
      {/* Honour the OS "reduce motion" setting across every framer-motion
          animation (drawer, stagger, counters, nav indicator). */}
      <MotionConfig reducedMotion="user">
        <LanguageProvider>{children}</LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
