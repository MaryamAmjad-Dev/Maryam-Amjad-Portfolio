"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, ResumeDownloadButton } from "@/components/shared";
import { AuroraBackground, FadeIn, TypingRoles } from "@/components/animations";
import {
  AnimatedGradientText,
  Badge,
  Button,
  ProfileAvatar,
  TiltCard,
} from "@/components/ui";
import { PROFILE_CARD_ROLE, PROFESSIONAL_BADGES, STANFORD_ROLE } from "@/constants/badges";
import { SOCIAL_LINKS } from "@/constants";
import { heroStats, portfolioData } from "@/data";
import { useLanguage } from "@/hooks";

const HERO_STAT_KEYS = ["projects", "hackathons", "aiTools"] as const;

export function HeroSection() {
  const { profile } = portfolioData;
  const { t, dictionary } = useLanguage();
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* Single decorative layer. The floating icon set and the 30-particle
          wash were removed — both were absolutely positioned over the content
          column and made the hero hard to read. */}
      <AuroraBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <FadeIn direction="up">
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 text-sm font-medium text-muted backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {t("hero.availability")}
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-heading text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {firstName}{" "}
                <AnimatedGradientText as="span">{lastName}</AnimatedGradientText>
              </h1>
            </FadeIn>

            {/* Primary professional identity — deliberately the first thing
                under the name, ahead of the generic technology stack. */}
            <FadeIn direction="up" delay={0.15}>
              <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary sm:text-base">
                <GraduationCap size={18} className="shrink-0" aria-hidden="true" />
                {STANFORD_ROLE}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="mt-5 text-lg font-medium text-muted sm:text-xl md:text-2xl">
                {profile.title}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {PROFESSIONAL_BADGES.map((b) => (
                  <Badge key={b} variant="outline">
                    {b}
                  </Badge>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-5 min-h-8">
                <TypingRoles
                  roles={dictionary.hero.roles}
                  className="text-base font-medium sm:text-lg"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {dictionary.hero.tagline}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-subtle">
                <MapPin size={14} aria-hidden="true" />
                {profile.location}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {t("hero.viewProjects")}
                </Button>
                <ResumeDownloadButton size="lg" className="w-full sm:w-auto" />
                <Button
                  href="#contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {t("hero.contactMe")}
                </Button>
                <Button
                  href={SOCIAL_LINKS.github}
                  variant="outline"
                  size="lg"
                  external
                  className="w-full sm:w-auto"
                >
                  <GitHubIcon size={16} />
                  {t("hero.github")}
                </Button>
                <Button
                  href={SOCIAL_LINKS.linkedin}
                  variant="outline"
                  size="lg"
                  external
                  className="w-full sm:w-auto"
                >
                  <LinkedInIcon size={16} />
                  {t("hero.linkedin")}
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.3}>
            <div className="flex justify-center lg:justify-end">
              <TiltCard className="w-full max-w-sm" intensity={10}>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-full bg-linear-to-br from-primary/15 to-accent/5 blur-2xl"
                      aria-hidden="true"
                    />
                    <ProfileAvatar
                      image={profile.image}
                      src={profile.avatarUrl}
                      name={profile.name}
                      size="xl"
                      className="relative ring-4 ring-primary/20"
                    />
                  </div>

                  <p className="mt-6 text-lg font-semibold text-heading">{profile.name}</p>
                  <p className="mt-2 text-center text-sm font-medium leading-snug text-primary">
                    {PROFILE_CARD_ROLE}
                  </p>

                  <div className="mt-6 grid w-full grid-cols-3 gap-2 sm:gap-3">
                    {heroStats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="min-w-0 rounded-xl border border-card-border bg-card px-2 py-2.5 text-center backdrop-blur-sm sm:px-2.5 sm:py-3"
                      >
                        <p className="text-base font-bold gradient-text sm:text-lg">{stat.value}</p>
                        <p className="mt-0.5 break-words text-[10px] font-medium uppercase leading-tight tracking-wider text-muted-subtle sm:text-xs">
                          {t(`hero.stats.${HERO_STAT_KEYS[index]}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="section-glow absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
