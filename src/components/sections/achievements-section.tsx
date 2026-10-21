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
  staggerContainer,
  staggerItem,
} from "@/components/animations";
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { AchievementStat } from "@/types";

/**
 * Display order for the achievement cards.
 *
 * 1. Hackathon participation (the headline number)
 * 2. Stanford Code in Place X — selected on the first attempt
 * 3. QuizOff — international quiz competition
 * 4. Team-lead count (the CV's "led 3 teams")
 * 5. CodeSprint LA ranking
 * 6. LinkedIn community
 *
 * Autovance AI and UNESCO Youth Hackathon deliberately have no card of their
 * own any more: the team-lead count and the projects grid already carry both,
 * and dropping them lands the section on an even 2x3 grid at `lg`.
 */
const ACHIEVEMENT_ORDER = [
  "ach-participant",
  "ach-stanford",
  "ach-quizoff",
  "ach-lead",
  "ach-codesprint",
  "ach-linkedin",
] as const;

const ACHIEVEMENT_ICONS: Record<string, LucideIcon> = {
  "ach-participant": Trophy,
  "ach-stanford": GraduationCap,
  "ach-quizoff": Sparkles,
  "ach-lead": Users,
  "ach-codesprint": Award,
  "ach-linkedin": TrendingUp,
};

function AchievementCard({ stat }: { stat: AchievementStat }) {
  const { dictionary } = useLanguage();
  const Icon = ACHIEVEMENT_ICONS[stat.id] ?? Sparkles;
  const copy = dictionary.achievements.cards[stat.id];
  const label = copy?.label ?? stat.label;
  const subtitle = copy?.subtitle ?? stat.subtitle;

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
            <p className="text-sm font-medium text-heading">{label}</p>
            {subtitle && (
              <p className="text-xs text-muted-subtle">{subtitle}</p>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

/** Section 1 — competition results, leadership milestones and recognition. */
export function AchievementsSection() {
  const { achievements } = portfolioData;
  const { t } = useLanguage();

  const orderedAchievements = ACHIEVEMENT_ORDER.map((id) =>
    achievements.find((stat) => stat.id === id),
  ).filter((stat): stat is AchievementStat => stat !== undefined);

  return (
    <Section
      id="achievements"
      label={t("achievements.label")}
      title={t("achievements.title")}
      description={t("achievements.description")}
    >
      <motion.div
        className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {orderedAchievements.map((stat) => (
          <AchievementCard key={stat.id} stat={stat} />
        ))}
      </motion.div>
    </Section>
  );
}
