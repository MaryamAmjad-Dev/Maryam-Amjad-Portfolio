"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  intensity?: number;
}

/** 3D perspective card with mouse-tracking tilt */
export function TiltCard({
  children,
  className,
  glow = true,
  intensity = 12,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const shineX = useTransform(springY, [-intensity, intensity], ["0%", "100%"]);
  const shineY = useTransform(springX, [-intensity, intensity], ["0%", "100%"]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={cn(
          "relative h-full rounded-2xl glass transition-shadow duration-300",
          glow && "ai-glow",
          isHovered && "ai-glow-hover border-card-border",
        )}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
      >
        {isHovered && (
          <motion.div
            className="card-shine pointer-events-none absolute inset-0 rounded-2xl opacity-40"
            style={{
              background: `radial-gradient(circle at ${shineX} ${shineY}, var(--glow-primary), transparent 60%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div className="relative p-6" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
