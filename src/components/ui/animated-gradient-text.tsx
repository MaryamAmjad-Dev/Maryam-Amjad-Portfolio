import { cn } from "@/lib";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

/** Gradient text with subtle animated shimmer */
export function AnimatedGradientText({
  children,
  className,
  as: Tag = "span",
}: AnimatedGradientTextProps) {
  return (
    <Tag
      className={cn(
        "animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent",
        "bg-linear-to-r from-primary via-secondary to-accent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
