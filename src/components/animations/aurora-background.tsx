"use client";

import { cn } from "@/lib";

interface AuroraBackgroundProps {
  className?: string;
}

/**
 * Faint drifting colour wash behind the hero.
 *
 * Opacity and colour come from the `--aurora-*` design tokens so the wash
 * stays subordinate to content in both themes. Blur is applied by the
 * `.aurora-blob-*` rules in globals.css, not by utility classes, so the two
 * never fight over the `filter` property.
 */
export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 hidden overflow-hidden sm:block",
        className,
      )}
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-blob-primary absolute -left-1/4 top-0 h-[640px] w-[640px] rounded-full blur-[120px]" />
      <div className="aurora-blob aurora-blob-secondary aurora-blob-delayed absolute -right-1/4 top-1/4 h-[520px] w-[520px] rounded-full blur-[110px]" />
      <div className="aurora-blob aurora-blob-accent aurora-blob-slow absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full blur-[100px]" />
      <div className="grid-pattern absolute inset-0 opacity-40" />
    </div>
  );
}
