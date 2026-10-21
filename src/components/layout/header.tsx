"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared";
import { LanguageSwitcher } from "./language-switcher";
import ThemeToggle from "@/components/ui/theme-toggle";
import { MAIN_NAV, SOCIAL_LINKS } from "@/constants";
import { useActiveSection, useLanguage } from "@/hooks";
import { cn } from "@/lib";

const MOBILE_MENU_ID = "mobile-nav-menu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const { navLabel, t } = useLanguage();

  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the background while the drawer is open.
  // <html> has `overflow-x: hidden`, which stops body overflow propagating to
  // the viewport, so both elements have to be locked explicitly.
  useEffect(() => {
    if (!mobileOpen) return;

    const rootStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    const previousRoot = rootStyle.overflow;
    const previousBody = bodyStyle.overflow;

    rootStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";

    return () => {
      rootStyle.overflow = previousRoot;
      bodyStyle.overflow = previousBody;
    };
  }, [mobileOpen]);

  // Focus management: move focus into the drawer on open, trap Tab inside it,
  // close on Escape, and hand focus back to the trigger on close.
  useEffect(() => {
    if (!mobileOpen) return;

    const getFocusable = () =>
      menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

    getFocusable()?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const inside = menuRef.current?.contains(active) ?? false;

      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
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
            "mt-2 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:mt-3 sm:px-4 md:mt-4 md:px-5 md:py-3",
            "nav-glass",
            scrolled && "nav-glass-scrolled",
          )}
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="relative z-10 flex min-w-0 flex-1 max-w-[calc(100%-11rem)] items-center gap-2 overflow-hidden pr-2 text-xs font-semibold text-heading sm:text-sm lg:max-w-none"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="truncate min-w-0 block">
              Maryam Amjad
              <span className="hidden xl:inline text-primary"> Portfolio</span>
            </span>
          </a>

          {/* 10 destinations do not fit the `lg` bar at 1024px with the full
              action cluster present. The brand link is the element that yields
              (it is `min-w-0 flex-1` + truncate), nav items stay nowrap so no
              label is ever cut, and the two social icon buttons — duplicated in
              the hero, contact and footer — only surface from `xl` up. The ul
              also scrolls as a last-resort net for unusually long translations. */}
          <ul className="relative z-10 hidden min-w-0 shrink-0 items-center gap-0 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex xl:gap-1">
            {MAIN_NAV.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative whitespace-nowrap rounded-lg px-1.5 py-2 text-[12px] font-medium transition-colors xl:px-3 xl:text-sm",
                      isActive
                        ? "text-heading"
                        : "text-muted hover:text-foreground",
                    )}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {navLabel(item.id)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-accent xl:inset-x-3"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions — must share the `lg` breakpoint with the nav above,
              otherwise both action clusters render between md and lg. */}
          <div className="relative z-10 hidden items-center gap-2 lg:flex xl:gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            {/* Also reachable from the hero, contact section, footer and mobile
                drawer — held back below `xl` so the nav labels keep their room. */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary xl:flex"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary xl:flex"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>

          <div className="relative z-10 flex min-w-0 items-center gap-1 sm:gap-2 lg:hidden">
            <ThemeToggle className="shrink-0" />
            <LanguageSwitcher className="hidden shrink-0 sm:flex" />
            <button
              ref={triggerRef}
              type="button"
              className="shrink-0 rounded-lg p-2.5 text-muted hover:bg-card-hover"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={menuRef}
              id={MOBILE_MENU_ID}
              role="dialog"
              aria-modal="true"
              aria-label={t("nav.menu")}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="nav-mobile-menu relative z-20 mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-2xl p-4 lg:hidden"
            >
              <nav aria-label={t("nav.menu")}>
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
              </nav>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-card-border pt-4">
                {/* Theme/language already sit in the top bar from `sm` up — only
                    surface the switcher here on the smallest screens. */}
                <div className="sm:hidden">
                  <LanguageSwitcher />
                </div>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-muted"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-muted"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
