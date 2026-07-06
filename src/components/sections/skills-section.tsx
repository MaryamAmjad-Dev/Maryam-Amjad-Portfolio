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
  Zap,
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

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group/skill space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground transition-colors group-hover/skill:text-heading">
          {name}
        </span>
        <span className="font-mono text-xs text-muted-subtle">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="skill-progress absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        />
        <motion.div
          className="skill-progress-shine absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08 }}
        />
      </div>
    </div>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = CATEGORY_ICONS[category.name] ?? Code2;
  const gradient = CATEGORY_GRADIENTS[category.name] ?? "from-primary/15 to-accent/8";
  const avgLevel = Math.round(
    category.skills.reduce((sum, s) => sum + s.level, 0) / category.skills.length,
  );

  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard className="h-full" intensity={8}>
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-60`}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-card text-primary shadow-inner">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-heading text-lg font-semibold">{category.name}</h3>
                <p className="text-xs text-muted-subtle">
                  {category.skills.length} technologies
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Zap size={10} aria-hidden="true" />
              {avgLevel}%
            </div>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={i}
              />
            ))}
          </div>
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
        className="grid gap-6 sm:grid-cols-2"
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
