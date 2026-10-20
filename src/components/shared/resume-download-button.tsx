"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui";
import { RESUME } from "@/constants";
import { useLanguage } from "@/hooks";
import type { ComponentProps } from "react";

type ResumeDownloadButtonProps = Pick<
  ComponentProps<typeof Button>,
  "variant" | "size" | "className"
>;

export function ResumeDownloadButton({
  variant = "secondary",
  size = "lg",
  className,
}: ResumeDownloadButtonProps) {
  const [available, setAvailable] = useState<boolean | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;

    const controller = new AbortController();
    const check = async () => {
      try {
        // Try a HEAD first (fast). If it fails (some dev servers abort HEAD),
        // fallback to a ranged GET to avoid downloading the whole PDF.
        // Use a ranged GET first to avoid HEAD requests being aborted by some dev servers.
        let res = await fetch(RESUME.path, {
          method: "GET",
          headers: { Range: "bytes=0-0" },
          signal: controller.signal,
        });
        if (!res || !res.ok) {
          // Fallback to a full GET if ranged request is not supported.
          res = await fetch(RESUME.path, { method: "GET", signal: controller.signal });
        }

        if (!cancelled) setAvailable(Boolean(res && res.ok));
      } catch {
        if (!cancelled) setAvailable(false);
      }
    };

    check();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  if (available === null) {
    return (
      <Button variant={variant} size={size} className={className} disabled loading>
        {/* The Button already renders a spinner while loading */}
        {t("hero.downloadResume")}
      </Button>
    );
  }

  if (!available) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => toast.error(t("resume.unavailable"))}
        aria-label="Download resume — file not available"
      >
        <Download size={16} aria-hidden="true" />
        {t("hero.downloadResume")}
      </Button>
    );
  }

  return (
    <Button
      href={RESUME.path}
      download={RESUME.filename}
      variant={variant}
      size={size}
      className={className}
      aria-label="Download resume PDF"
    >
      <Download size={16} aria-hidden="true" />
      {t("hero.downloadResume")}
    </Button>
  );
}
