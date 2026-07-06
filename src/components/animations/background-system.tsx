"use client";

import { cn } from "@/lib";
import { AuroraBackground } from "./aurora-background";
import { AIParticles, CursorGlow } from "./background-effects";

interface BackgroundSystemProps {
  className?: string;
  showParticles?: boolean;
  showCursorGlow?: boolean;
}

/** Global ambient background — aurora, grid, cursor glow */
export function BackgroundSystem({
  className,
  showParticles = false,
  showCursorGlow = true,
}: BackgroundSystemProps) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 z-0", className)} aria-hidden="true">
      <AuroraBackground className="opacity-80" />
      <div className="ai-grid absolute inset-0" />
      {showCursorGlow && <CursorGlow />}
      {showParticles && <AIParticles />}
    </div>
  );
}
