import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";

interface CardProps extends BaseComponentProps {
  glow?: boolean;
  hover?: boolean;
}

export function Card({
  className,
  children,
  glow = false,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        glow && "ai-glow",
        hover && "transition-all duration-300 hover:border-card-border ai-glow-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
