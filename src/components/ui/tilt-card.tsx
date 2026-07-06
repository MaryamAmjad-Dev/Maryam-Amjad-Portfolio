"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  intensity?: number;
  /** Full-card background tint (covers entire card, not just content area) */
  tintClassName?: string;
  /** Disable 3D tilt/transform so inputs and links remain interactive */
  interactive?: boolean;
}

/** 3D perspective card with mouse-tracking tilt (desktop only) */
export function TiltCard({
  children,
  className,
  glow = true,
  intensity = 12,
  tintClassName,
  interactive = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const shineX = useTransform(springY, [-intensity, intensity], ["0%", "100%"]);
  const shineY = useTransform(springX, [-intensity, intensity], ["0%", "100%"]);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (interactive || !canTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * intensity);
    rotateX.set(-y * intensity);
  };

  const handleLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("perspective-[1000px]", className)}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseEnter={() => !interactive && canTilt && setIsHovered(true)}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl glass transition-shadow duration-300",
          glow && "ai-glow",
          isHovered && "ai-glow-hover border-card-border",
        )}
        style={{
          rotateX: !interactive && canTilt ? springX : 0,
          rotateY: !interactive && canTilt ? springY : 0,
          transformStyle: interactive ? undefined : "preserve-3d",
        }}
      >
        {tintClassName && (
          <div
            className={cn("pointer-events-none absolute inset-0", tintClassName)}
            aria-hidden="true"
          />
        )}
        {isHovered && canTilt && !interactive && (
          <motion.div
            className="card-shine pointer-events-none absolute inset-0 rounded-2xl opacity-40"
            style={{
              background: `radial-gradient(circle at ${shineX} ${shineY}, var(--glow-primary), transparent 60%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div
          className={cn("relative p-4 sm:p-6", interactive && "isolate z-10")}
          style={{ transform: !interactive && canTilt ? "translateZ(20px)" : undefined }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
