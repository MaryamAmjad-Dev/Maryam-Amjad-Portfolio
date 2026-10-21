"use client";

import { cn } from "@/lib";
import { AuroraBackground } from "./aurora-background";
import { AIParticles } from "./background-effects";

interface BackgroundSystemProps {
  className?: string;
  showParticles?: boolean;
}

/**
 * Global ambient background — one faint aurora wash plus an optional grid.
 *
 * The cursor-following glow was removed: its `.cursor-blob*` classes were
 * never defined in globals.css, so it rendered two invisible fixed divs while
 * still paying for a mousemove subscription on every pointer move.
 */
export function BackgroundSystem({
  className,
  showParticles = false,
}: BackgroundSystemProps) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 z-0", className)} aria-hidden="true">
      <AuroraBackground className="opacity-90" />
      <div className="ai-grid absolute inset-0" />
      {showParticles && <AIParticles />}
    </div>
  );
}
