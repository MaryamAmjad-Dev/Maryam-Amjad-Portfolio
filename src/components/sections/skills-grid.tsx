"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layers,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/animations";
import { TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { SkillCategory } from "@/types";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Languages: Terminal,
  Frontend: Code2,
  "Backend & Databases": Database,
  AI: Brain,
  "Quality & Usability": Layers,
  Deployment: Wrench,
  Tools: Wrench,
  "Soft Skills": Users,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  Languages: "from-accent/12 to-primary/8",
  Frontend: "from-primary/15 to-accent/8",
  "Backend & Databases": "from-success/15 to-primary/8",
  AI: "from-secondary/15 to-primary/8",
  "Quality & Usability": "from-primary/18 to-secondary/10",
  Deployment: "from-accent/12 to-secondary/8",
  Tools: "from-primary/12 to-success/8",
  "Soft Skills": "from-secondary/12 to-accent/8",
};

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const { t } = useLanguage();
  const Icon = CATEGORY_ICONS[category.name] ?? Code2;
  const gradient = CATEGORY_GRADIENTS[category.name] ?? "from-primary/15 to-accent/8";

  return (
    <motion.div variants={staggerItem}>
      <TiltCard
        intensity={8}
        tintClassName={`bg-linear-to-br ${gradient} opacity-80`}
      >
        <div className="relative flex flex-col">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Icon size={20} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-heading sm:text-lg">
                {category.name}
              </h3>
              <p className="text-xs text-muted-subtle">
                {t("skills.technologies", { count: category.skills.length })}
              </p>
            </div>
          </div>

          <ul className="flex flex-col justify-start space-y-1.5">
            {category.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  );
}

/**
 * Skills dashboard grid.
 *
 * Rendered inside the About section rather than as its own section: the main
 * portfolio content follows the seven-section order (Achievements → Training
 * and Certificates), so the technology breakdown lives with the introduction
 * instead of taking a slot in that sequence.
 */
export function SkillsGrid() {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {portfolioData.skills.map((category) => (
        <SkillCategoryCard key={category.id} category={category} />
      ))}
    </motion.div>
  );
}
