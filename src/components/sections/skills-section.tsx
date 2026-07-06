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
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { SkillCategory } from "@/types";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "MERN Stack Development": Layers,
  "Frontend Development": Code2,
  "Backend Development": Database,
  "AI & Data Tools": Brain,
  "Programming Languages": Terminal,
  "Developer Tools": Wrench,
  "Collaboration Tools": Users,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  "MERN Stack Development": "from-primary/18 to-secondary/10",
  "Frontend Development": "from-primary/15 to-accent/8",
  "Backend Development": "from-success/15 to-primary/8",
  "AI & Data Tools": "from-secondary/15 to-primary/8",
  "Programming Languages": "from-accent/12 to-primary/8",
  "Developer Tools": "from-accent/12 to-secondary/8",
  "Collaboration Tools": "from-primary/12 to-success/8",
};

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = CATEGORY_ICONS[category.name] ?? Code2;
  const gradient = CATEGORY_GRADIENTS[category.name] ?? "from-primary/15 to-accent/8";

  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard
        className="h-full"
        intensity={8}
        tintClassName={`bg-gradient-to-br ${gradient} opacity-80`}
      >
        <div className="relative flex h-full min-h-[220px] flex-col">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-card-border bg-card text-primary shadow-inner">
              <Icon size={20} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-heading text-base font-semibold sm:text-lg">
                {category.name}
              </h3>
              <p className="text-xs text-muted-subtle">
                {category.skills.length} technologies
              </p>
            </div>
          </div>

          <ul className="flex flex-1 flex-col justify-start space-y-2.5">
            {category.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2.5 text-sm text-foreground"
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

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="skills"
      label={t("skills.label")}
      title={t("skills.title")}
      description={t("skills.description")}
      className="relative"
    >
      <motion.div
        className="grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {portfolioData.skills.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
    </Section>
  );
}
