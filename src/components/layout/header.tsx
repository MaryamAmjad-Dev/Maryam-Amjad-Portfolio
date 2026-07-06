"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared";
import { LanguageSwitcher } from "./language-switcher";
import { MAIN_NAV, SOCIAL_LINKS } from "@/constants";
import { portfolioData } from "@/data";
import { useActiveSection, useLanguage } from "@/hooks";
import { cn } from "@/lib";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const { navLabel, t } = useLanguage();
  const { profile } = portfolioData;
  const firstName = profile.name.split(" ")[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 transition-opacity duration-300",
          scrolled ? "nav-backdrop opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 md:mt-4 md:px-5 md:py-3",
            "nav-glass",
            scrolled && "nav-glass-scrolled",
          )}
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="relative z-10 flex items-center gap-2 text-sm font-semibold text-heading"
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>
              {firstName}
              <span className="text-primary">.</span>
            </span>
          </a>

          <ul className="relative z-10 hidden items-center gap-0.5 lg:flex">
            {MAIN_NAV.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-heading"
                        : "text-muted hover:text-foreground",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {navLabel(item.id)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="#contact"
              className="btn-gradient ml-1 rounded-full px-5 py-2 text-sm font-medium"
            >
              {t("nav.hireMe")}
            </a>
          </div>

          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded-lg p-2 text-muted hover:bg-card-hover"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="nav-mobile-menu relative z-20 mt-2 overflow-hidden rounded-2xl p-4 lg:hidden"
            >
              <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-widest text-primary/80">
                {t("meta.multilingualExperience")}
              </p>
              <ul className="space-y-1">
                {MAIN_NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        activeSection === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-card-hover",
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {navLabel(item.id)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3 border-t border-card-border pt-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-muted"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-muted"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href="#contact"
                  className="btn-gradient flex-1 rounded-full py-2.5 text-center text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("nav.hireMe")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
