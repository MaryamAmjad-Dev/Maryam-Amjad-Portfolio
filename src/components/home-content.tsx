"use client";

import { BackgroundSystem } from "@/components/animations";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HackathonsSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";

export function HomeContent() {
  return (
    <>
      <BackgroundSystem showCursorGlow />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonsSection />
        <ContactSection />
      </div>
    </>
  );
}
