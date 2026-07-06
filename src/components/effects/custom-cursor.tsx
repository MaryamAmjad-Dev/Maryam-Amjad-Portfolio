"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DOT_SPRING = { stiffness: 500, damping: 28, mass: 0.45 };
const RING_SPRING = { stiffness: 140, damping: 22, mass: 0.85 };

const HOVER_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "[role='button']",
  "[role='dialog']",
  "nav a",
  "nav button",
  ".btn-gradient",
  ".ai-glow-hover",
].join(", ");

function isInteractiveTarget(target: Element | null): boolean {
  if (!target) return false;
  if (target.closest(HOVER_SELECTOR)) return true;
  if (target.closest("[class*='border-card-border'][class*='rounded']")) return true;
  if (target.closest("[class*='nav-glass']")) return true;
  return false;
}

function canEnableCustomCursor(): boolean {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const hoverCapable = window.matchMedia("(hover: hover)").matches;
  const desktop = window.matchMedia("(min-width: 768px)").matches;
  const touch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  return desktop && finePointer && hoverCapable && !touch && !reduced;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, DOT_SPRING);
  const dotY = useSpring(mouseY, DOT_SPRING);
  const ringX = useSpring(mouseX, RING_SPRING);
  const ringY = useSpring(mouseY, RING_SPRING);

  useEffect(() => {
    const evaluate = () => setEnabled(canEnableCustomCursor());

    evaluate();
    const desktopMq = window.matchMedia("(min-width: 768px)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    desktopMq.addEventListener("change", evaluate);
    reducedMq.addEventListener("change", evaluate);
    return () => {
      desktopMq.removeEventListener("change", evaluate);
      reducedMq.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      setIsHovering(isInteractiveTarget(e.target as Element));
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998]"
      aria-hidden="true"
    >
      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.55 : 1,
          opacity: isVisible ? (isHovering ? 0.95 : 0.75) : 0,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      >
        <div
          className="h-9 w-9 rounded-full border border-primary/35 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 24px rgba(56, 189, 248, 0.28), 0 0 40px rgba(139, 92, 246, 0.18)",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <div
          className="h-2 w-2 rounded-full bg-gradient-to-br from-primary via-accent to-secondary"
          style={{
            boxShadow:
              "0 0 10px rgba(56, 189, 248, 0.9), 0 0 18px rgba(139, 92, 246, 0.55)",
          }}
        />
      </motion.div>
    </div>
  );
}
