"use client";

import {
  Award,
  GraduationCap,
  Sparkles,
  Trophy,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedCounter,
  FadeIn,
  staggerContainer,
  staggerItem,
} from "@/components/animations";
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { AchievementStat } from "@/types";

const ABOUT_ACHIEVEMENT_ORDER = [
  "ach-participant",
  "ach-lead",
  "ach-codesprint",
  "ach-linkedin",
] as const;

const ACHIEVEMENT_ICONS: Record<string, LucideIcon> = {
  "ach-participant": Trophy,
  "ach-lead": Users,
  "ach-codesprint": Award,
  "ach-linkedin": TrendingUp,
};

function AchievementHighlightCard({ stat }: { stat: AchievementStat }) {
  const Icon = ACHIEVEMENT_ICONS[stat.id] ?? Sparkles;

  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard
        className="h-full ai-glow-hover"
        intensity={6}
        tintClassName="bg-linear-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-90"
      >
        <div className="relative flex h-full flex-col gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
            <Icon size={18} aria-hidden="true" />
          </div>
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            displayValue={stat.displayValue}
            className="text-2xl md:text-3xl"
          />
          <div className="mt-auto space-y-0.5">
            <p className="text-sm font-medium text-heading">{stat.label}</p>
            {stat.subtitle && (
              <p className="text-xs text-muted-subtle">{stat.subtitle}</p>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function AboutSection() {
  const { education, achievements } = portfolioData;
  const { t, dictionary } = useLanguage();

  const orderedAchievements = ABOUT_ACHIEVEMENT_ORDER.map((id) =>
    achievements.find((stat) => stat.id === id),
  ).filter((stat): stat is AchievementStat => stat !== undefined);

  return (
    <Section
      id="about"
      label={t("about.label")}
      title={t("about.title")}
      description={t("about.description")}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <TiltCard intensity={5} className="h-full">
            <div className="space-y-5">
              {dictionary.about.summary.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-relaxed text-heading"
                      : "text-base leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {dictionary.hero.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {role}
                </span>
              ))}
            </div>
          </TiltCard>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
                <span className="section-label-line h-px w-6" />
                {t("about.education")}
              </p>
              {education.map((edu) => (
                <TiltCard key={edu.id} intensity={5}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <GraduationCap size={20} aria-hidden="true" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-lg font-semibold text-heading">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-foreground">{edu.degree}</p>
                      {edu.cgpa && (
                        <p className="text-sm text-muted-subtle">
                          {t("about.cgpa")}: {edu.cgpa}
                        </p>
                      )}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="space-y-4">
              <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
                <span className="section-label-line h-px w-6" />
                {t("about.achievementHighlights")}
              </p>
              <motion.div
                className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {orderedAchievements.map((stat) => (
                  <AchievementHighlightCard key={stat.id} stat={stat} />
                ))}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
