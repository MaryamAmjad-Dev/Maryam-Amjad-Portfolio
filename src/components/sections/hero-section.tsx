"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon, ResumeDownloadButton } from "@/components/shared";
import {
  AIParticles,
  AuroraBackground,
  FadeIn,
  FloatingIcons,
  TypingRoles,
} from "@/components/animations";
import {
  AnimatedGradientText,
  Button,
  ProfileAvatar,
  TiltCard,
} from "@/components/ui";
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
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <AuroraBackground />
      <AIParticles />
      <FloatingIcons />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <FadeIn direction="up">
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={14} aria-hidden="true" />
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
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

            <FadeIn direction="up" delay={0.2}>
              <p className="mt-5 text-xl font-medium text-heading sm:text-2xl md:text-3xl">
                <AnimatedGradientText as="span">{profile.title}</AnimatedGradientText>
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-4 min-h-8">
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
                <ResumeDownloadButton size="lg" className="w-full sm:w-auto" />
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
              <TiltCard className="w-full max-w-sm" intensity={14}>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl"
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

                  <p className="text-heading mt-6 text-lg font-semibold">{profile.name}</p>
                  <p className="mt-1 text-sm text-primary">{profile.title}</p>

                  <div className="mt-6 grid w-full grid-cols-3 gap-2 sm:gap-3">
                    {heroStats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-card-border bg-card px-1.5 py-2.5 text-center backdrop-blur-sm sm:px-2 sm:py-3"
                      >
                        <p className="text-base font-bold gradient-text sm:text-lg">{stat.value}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-subtle sm:text-xs">
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
