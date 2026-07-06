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

    fetch(RESUME.path, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) setAvailable(response.ok);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (available === null) {
    return (
      <Button variant={variant} size={size} className={className} disabled loading>
        <Download size={16} aria-hidden="true" />
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
