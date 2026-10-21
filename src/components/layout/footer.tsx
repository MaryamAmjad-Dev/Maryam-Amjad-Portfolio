"use client";

import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/constants";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-card-border py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-heading text-sm font-semibold">
              {portfolioData.profile.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {t("hero.profileCardRole")}
            </p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-primary/80">
              {t("meta.multilingualExperience")}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="inline-flex items-center py-2 text-sm text-muted transition-colors hover:text-primary"
                >
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-muted-subtle">
            &copy; {year} {SITE.name}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
