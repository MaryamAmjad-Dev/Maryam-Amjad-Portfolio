"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMounted, useMousePosition } from "@/hooks";

const PARTICLE_COUNT = 30;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 6,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    driftX: Math.random() * 30 - 15,
    driftY: Math.random() * 30 - 15,
  }));
}

export function AIParticles() {
  const mounted = useMounted();
  const [particles] = useState(generateParticles);

  if (!mounted) return null;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.innerWidth < 768;

  if (reduced || mobile || particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full blur-2xl"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(56,189,248,0.32), rgba(139,92,246,0.16) 45%, transparent 85%)",
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [0.12, 0.7, 0.12],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Cursor-following ambient glow */
export function CursorGlow() {
  const { x, y } = useMousePosition(true);
  const mounted = useMounted();

  if (!mounted) return null;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const enabled = !reduced && finePointer;

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="cursor-blob cursor-blob-main"
        style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      />
      <div
        className="cursor-blob cursor-blob-accent"
        style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      />
    </div>
  );
}
