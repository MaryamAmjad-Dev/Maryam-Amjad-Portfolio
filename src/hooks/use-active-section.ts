"use client";

import { useEffect, useState } from "react";
import { MAIN_NAV } from "@/constants";

/** Track which section anchor is currently in view */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(MAIN_NAV[0]?.href ?? "#home");

  useEffect(() => {
    const sectionIds = MAIN_NAV.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
