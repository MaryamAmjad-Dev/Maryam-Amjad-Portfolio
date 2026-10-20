"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
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
  sm: { dim: 48, icon: 22 },
  md: { dim: 80, icon: 36 },
  lg: { dim: 128, icon: 56 },
  xl: { dim: 200, icon: 88 },
};

export function ProfileAvatar({
  image,
  src,
  name,
  size = "lg",
  className,
}: ProfileAvatarProps) {
  const resolvedSrc = (image ?? src)?.trim();
  const [hasError, setHasError] = useState(false);
  const { dim, icon } = sizeMap[size];
  const showImage = Boolean(resolvedSrc) && !hasError;

  if (!showImage) {
    return (
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-linear-to-br from-primary via-secondary to-accent text-white ai-glow",
          className,
        )}
        style={{ width: dim, height: dim }}
        role="img"
        aria-label={`${name} avatar`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <UserRound size={icon} strokeWidth={1.75} className="drop-shadow-lg" aria-hidden="true" />
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
        sizes={`${dim}px`}
        className="h-full w-full object-cover"
        priority
        onError={() => setHasError(true)}
      />
    </motion.div>
  );
}
