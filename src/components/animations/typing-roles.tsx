"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { GradientText } from "@/components/ui";

interface TypingRolesProps {
  roles: string[];
  className?: string;
}

export function TypingRoles({ roles, className }: TypingRolesProps) {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // No typing loop for users who asked for reduced motion.
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, prefersReducedMotion, roleIndex, roles]);

  if (prefersReducedMotion) {
    return (
      <GradientText as="p" className={className}>
        {roles[0]}
      </GradientText>
    );
  }

  return (
    <GradientText as="p" className={className}>
      {/* Screen readers otherwise only ever hear a partial, mutating string. */}
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </GradientText>
  );
}
