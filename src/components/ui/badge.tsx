import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";

interface BadgeProps extends Pick<BaseComponentProps, "className"> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-card text-foreground",
        variant === "accent" &&
          "border border-secondary/25 bg-secondary/15 text-primary",
        variant === "outline" && "border border-card-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
