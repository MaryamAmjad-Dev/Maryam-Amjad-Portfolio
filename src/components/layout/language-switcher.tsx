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
  const [menuStyle, setMenuStyle] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );

  const close = useCallback(() => setOpen(false), []);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const width = Math.min(240, window.innerWidth - 24);
    const left = Math.min(
      Math.max(12, rect.right - width),
      window.innerWidth - width - 12,
    );

    setMenuStyle({
      top: rect.bottom + 8,
      left,
      width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setMenuStyle(null);
      return;
    }
    updateMenuPosition();
  }, [open, updateMenuPosition]);

  useEffect(() => {
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
  }, [close]);

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
          "flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card/60",
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
          "border border-cyan-400/35",
          "bg-[rgba(5,12,30,0.95)]",
          "bg-gradient-to-b from-[rgba(10,22,48,0.98)] via-[rgba(7,16,38,0.97)] to-[rgba(5,12,30,0.95)]",
          "backdrop-blur-xl backdrop-saturate-150",
          "shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(59,130,246,0.12)]",
          "ring-1 ring-cyan-300/15 ring-inset",
        )}
        role="listbox"
        aria-label={t("language.selectLanguage")}
      >
        <div
          className="border-b border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent px-3.5 py-2.5"
          aria-hidden="true"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
            {t("language.label")}
          </p>
          <p className="mt-1 text-[10px] font-medium leading-snug text-cyan-300/90">
            {t("meta.multilingualExperience")}
          </p>
        </div>

        <ul className="max-h-[min(18rem,60vh)] overflow-y-auto p-2">
          {LANGUAGES.map((option) => {
            const selected = option.code === locale;
            return (
              <li key={option.code}>
                <button
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
                      ? "border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-transparent text-white shadow-[inset_0_0_20px_rgba(34,211,238,0.08)]"
                      : "border border-transparent text-slate-100 hover:border-cyan-400/25 hover:bg-cyan-500/10 hover:text-white",
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
                          selected ? "text-white" : "text-slate-50 group-hover:text-white",
                        )}
                      >
                        {option.nativeLabel}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block truncate text-xs leading-tight",
                          selected ? "text-cyan-200/90" : "text-slate-400 group-hover:text-slate-300",
                        )}
                      >
                        {option.label}
                      </span>
                    </span>
                  </span>
                  {selected && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                      <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </motion.div>
    ) : null;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "group flex items-center gap-1.5 rounded-full border border-card-border bg-card/70 px-2.5 py-1.5 text-xs font-medium text-muted backdrop-blur-md transition-all",
          "hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
          open && "border-primary/40 text-primary ai-glow",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
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
