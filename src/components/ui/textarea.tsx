import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<BaseComponentProps, "className"> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && id ? `${id}-error` : undefined}
          className={cn(
            "w-full resize-none rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-subtle transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20",
            className,
          )}
          {...props}
        />
        {error && (
          <p id={id ? `${id}-error` : undefined} className="text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
