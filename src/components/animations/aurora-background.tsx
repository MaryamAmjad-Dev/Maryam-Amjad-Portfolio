"use client";

import { cn } from "@/lib";

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden hidden sm:block", className)}
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-blob-primary absolute -left-1/4 top-0 h-[640px] w-[640px] rounded-full blur-[140px]" />
      <div className="aurora-blob-delayed aurora-blob-secondary absolute -right-1/4 top-1/4 h-[520px] w-[520px] rounded-full blur-[120px]" />
      <div className="aurora-blob-slow aurora-blob-accent absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
    </div>
  );
}
