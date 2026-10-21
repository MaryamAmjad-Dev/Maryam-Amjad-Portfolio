"use client";

import { BackgroundSystem } from "@/components/animations";
import {
  AboutSection,
  AchievementsSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HackathonsSection,
  HeroSection,
  ProjectsSection,
  VolunteerSection,
} from "@/components/sections";

/**
 * Page order: hero → About (introduction) → the seven main portfolio sections
 * in sequence → contact.
 */
export function HomeContent() {
  return (
    <>
      <BackgroundSystem />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonsSection />
        <VolunteerSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </>
  );
}
