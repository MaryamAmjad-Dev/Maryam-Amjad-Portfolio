"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES } from "@/constants/languages";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib";
import type { Locale } from "@/types";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t, language, isReady } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const width = Math.min(240, window.innerWidth - 24);
    const left = Math.min(
      Math.max(12, rect.right - width),
      window.innerWidth - width - 12,
    );

    // Approximate the panel height so we can flip it above the trigger when
    // there is not enough room below (the trigger can sit near the bottom of
    // the viewport once the drawer is scrolled).
    const estimatedHeight = Math.min(360, window.innerHeight * 0.6);
    const spaceBelow = window.innerHeight - rect.bottom - 12;
    const spaceAbove = rect.top - 12;
    const flip = spaceBelow < estimatedHeight && spaceAbove > spaceBelow;

    setMenuStyle({
      top: flip
        ? Math.max(12, rect.top - 8 - estimatedHeight)
        : rect.bottom + 8,
      left,
      width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      // defer clearing menu style to avoid synchronous setState in layout effect
      const t = setTimeout(() => setMenuStyle(null), 0);
      return () => clearTimeout(t);
    }
    updateMenuPosition();
  }, [open, updateMenuPosition]);

  // Portaling the menu to <body> leaves focus behind on the trigger, so pull
  // focus into the listbox (starting on the current locale) once it opens.
  useEffect(() => {
    if (!open) return;
    listboxRef.current
      ?.querySelector<HTMLElement>('[role="option"][aria-selected="true"]')
      ?.focus();
  }, [open]);

  const onListKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const options = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="option"]'),
    );
    if (options.length === 0) return;

    const index = options.indexOf(document.activeElement as HTMLElement);
    let next: number;

    switch (event.key) {
      case "ArrowDown":
        next = index < 0 || index === options.length - 1 ? 0 : index + 1;
        break;
      case "ArrowUp":
        next = index <= 0 ? options.length - 1 : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = options.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    options[next]?.focus();
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !containerRef.current?.contains(target) &&
        !(event.target as Element).closest?.("[data-language-menu]")
      ) {
        close();
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [close, open]);

  useEffect(() => {
    if (!open) return;

    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  if (!isReady) {
    return (
      <div
        className={cn(
          "flex h-10 items-center justify-center rounded-full border border-card-border bg-card/60 px-3",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const dropdownMenu =
    open && menuStyle ? (
      <motion.div
        key="language-dropdown"
        data-language-menu
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          top: menuStyle.top,
          left: menuStyle.left,
          width: menuStyle.width,
        }}
        className={cn(
          "fixed z-[9999] overflow-hidden rounded-xl",
          "border border-card-border",
          "bg-card",
          "backdrop-blur-xl backdrop-saturate-150",
          "shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        )}
      >
        <div
          className="border-b border-card-border bg-card/60 px-3.5 py-2.5"
          aria-hidden="true"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-subtle">
            {t("language.label")}
          </p>
          <p className="mt-1 text-[10px] font-medium leading-snug text-muted">
            {t("meta.multilingualExperience")}
          </p>
        </div>

        {/* The listbox owns the option buttons directly — a wrapping <ul>/<li>
            would break the required listbox > option ownership. */}
        <div
          ref={listboxRef}
          id="language-listbox"
          role="listbox"
          aria-label={t("language.selectLanguage")}
          onKeyDown={onListKeyDown}
          className="dropdown-scrollbar max-h-[min(60dvh,calc(100dvh-140px))] overflow-y-auto overscroll-contain p-2"
        >
          {LANGUAGES.map((option) => {
            const selected = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setLocale(option.code as Locale);
                  close();
                }}
                className={cn(
                  "group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200",
                  selected
                    ? "border border-card-border bg-card/70 text-foreground"
                    : "border border-transparent text-muted hover:border-card-border hover:bg-card-hover hover:text-foreground",
                )}
              >
                <span className="flex min-w-0 items-start gap-2.5">
                  <span
                    className="mt-0.5 shrink-0 text-base leading-none"
                    aria-hidden="true"
                  >
                    {option.flag}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block truncate text-sm font-semibold leading-tight",
                        selected ? "text-heading" : "text-foreground/90 group-hover:text-heading",
                      )}
                    >
                      {option.nativeLabel}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block truncate text-xs leading-tight",
                        selected ? "text-muted" : "text-muted-subtle group-hover:text-muted",
                      )}
                    >
                      {option.label}
                    </span>
                  </span>
                </span>
                {selected && (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>
    ) : null;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "group flex h-10 items-center gap-1.5 rounded-full border border-card-border bg-card/70 px-3 text-xs font-medium text-muted backdrop-blur-md transition-all",
          "hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_var(--glow-primary)]",
          open && "border-primary/40 text-primary ai-glow",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="language-listbox"
        aria-label={t("language.selectLanguage")}
      >
        <Globe
          size={15}
          className="text-primary transition-transform group-hover:rotate-12"
          aria-hidden="true"
        />
        <span className="hidden uppercase tracking-wide sm:inline">
          {language.code}
        </span>
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && menuStyle ? dropdownMenu : null}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
