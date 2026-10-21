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

/**
 * One tint for every card.
 *
 * The grid previously gave each category its own gradient, which read as eight
 * unrelated pastel panels rather than one dashboard. A single restrained tint
 * keeps the cards visually equal in both themes.
 */
const CARD_TINT = "bg-linear-to-br from-primary/8 to-accent/5 opacity-80";

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const { t } = useLanguage();
  const Icon = CATEGORY_ICONS[category.name] ?? Code2;

  return (
    /* h-full on every wrapper so a category with a longer technology list
       stretches its row instead of leaving a ragged card bottom. */
    <motion.div variants={staggerItem} className="h-full">
      {/* `interactive` turns the 3D tilt off: the cards hold a lot of small
         text, and a tilted row reads as an uneven grid. */}
      <TiltCard className="h-full" intensity={6} tintClassName={CARD_TINT} interactive>
        <div className="relative flex h-full flex-col">
          <div className="mb-5 flex items-center gap-3">
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

          <ul className="flex flex-col gap-1.5">
            {category.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
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
 * Three equal columns on desktop, two on tablet, one on mobile, with equal
 * card heights per row. Rendered inside the About section rather than as its
 * own section: the main portfolio content follows the seven-section order
 * (Achievements → Training and Certificates), so the technology breakdown
 * lives with the introduction instead of taking a slot in that sequence.
 */
export function SkillsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
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
