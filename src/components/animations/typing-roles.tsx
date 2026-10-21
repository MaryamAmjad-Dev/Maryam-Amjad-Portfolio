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
    if (prefersReducedMotion || roles.length === 0) return;

    const currentRole = roles[roleIndex] ?? "";
    const isHolding = !isDeleting && displayText.length >= currentRole.length;
    const delay = isHolding ? 2000 : isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else if (displayText.length > 1) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // Swap to the next role without ever passing through an empty string,
        // so the line stays occupied instead of collapsing to a blank row.
        const nextIndex = (roleIndex + 1) % roles.length;
        setRoleIndex(nextIndex);
        setDisplayText(roles[nextIndex].slice(0, 1));
        setIsDeleting(false);
      }
    }, delay);

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
