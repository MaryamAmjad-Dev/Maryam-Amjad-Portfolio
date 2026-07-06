import type { BaseComponentProps } from "@/types";
import { cn } from "@/lib";

/**
 * Accessible skip link — visible on keyboard focus only.
 * Targets #main-content set by RootShell.
 */
export function SkipToContent({ className }: Pick<BaseComponentProps, "className">) {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50",
        "focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background",
        className,
      )}
    >
      Skip to main content
    </a>
  );
}
