import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";
import { Loader2 } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<BaseComponentProps, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  download?: string;
  loading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "btn-gradient ai-glow ai-glow-hover",
  secondary: "glass text-foreground hover:bg-card-hover ai-glow-hover",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
  outline:
    "border border-card-border text-foreground hover:bg-white/5 hover:border-white/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const interactiveClasses =
  "cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:hover:scale-100";

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  download,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
    interactiveClasses,
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {loading && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      href: isDisabled ? undefined : href,
      className: cn(classes, isDisabled && "pointer-events-none opacity-50"),
      "aria-disabled": isDisabled || undefined,
      ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      ...(download ? { download } : {}),
    };

    return <a {...anchorProps}>{content}</a>;
  }

  return (
    <button className={classes} disabled={isDisabled} {...props}>
      {content}
    </button>
  );
}
