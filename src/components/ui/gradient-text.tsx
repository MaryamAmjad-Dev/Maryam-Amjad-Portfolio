import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";

interface GradientTextProps extends Pick<BaseComponentProps, "className"> {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  className,
  children,
  as: Tag = "span",
}: GradientTextProps) {
  return <Tag className={cn("gradient-text", className)}>{children}</Tag>;
}
