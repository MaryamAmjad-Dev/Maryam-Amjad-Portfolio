"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib";

interface ProfileAvatarProps {
  /** Preferred profile image path */
  image?: string;
  /** Legacy / fallback image path */
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: { dim: 48, text: "text-lg" },
  md: { dim: 80, text: "text-2xl" },
  lg: { dim: 128, text: "text-4xl" },
  xl: { dim: 200, text: "text-5xl" },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProfileAvatar({
  image,
  src,
  name,
  size = "lg",
  className,
}: ProfileAvatarProps) {
  const resolvedSrc = (image ?? src)?.trim();
  const [hasError, setHasError] = useState(false);
  const { dim, text } = sizeMap[size];
  const showImage = Boolean(resolvedSrc) && !hasError;

  if (!showImage) {
    return (
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent font-bold text-white ai-glow",
          text,
          className,
        )}
        style={{ width: dim, height: dim }}
        aria-label={`${name} avatar`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="drop-shadow-lg">{getInitials(name)}</span>
      </motion.div>
    );
  }

  const imagePath = resolvedSrc as string;

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-full ai-glow", className)}
      style={{ width: dim, height: dim }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={imagePath}
        alt={`${name} profile photo`}
        width={dim}
        height={dim}
        sizes={`(max-width: 768px) ${dim}px, ${dim}px`}
        className="h-full w-full object-cover"
        priority
        onError={() => setHasError(true)}
      />
    </motion.div>
  );
}
