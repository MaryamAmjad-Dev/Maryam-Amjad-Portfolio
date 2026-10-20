"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/hooks";
import { cn } from "@/lib";

const TOGGLE_CLASSES =
  "flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        // Placeholder only — keep it out of the tab order while hidden from AT.
        tabIndex={-1}
        aria-hidden
        className={cn(TOGGLE_CLASSES, className)}
      />
    );
  }

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const currentTheme = resolvedTheme === "light" ? "light" : "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  const icon = nextTheme === "light" ? <Sun size={16} /> : <Moon size={16} />;
  const currentLabel = t(`theme.${currentTheme}`);
  const nextLabel = t(`theme.${nextTheme}`);

  return (
    <button
      type="button"
      title={t("theme.current", { theme: currentLabel })}
      onClick={() => setTheme(nextTheme)}
      aria-label={t("theme.switchTo", { theme: nextLabel })}
      className={cn(TOGGLE_CLASSES, "ai-glow-hover", className)}
    >
      {icon}
    </button>
  );
}

export default ThemeToggle;
