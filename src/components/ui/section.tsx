import { cn } from "@/lib";
import type { BaseComponentProps } from "@/types";

interface SectionProps extends BaseComponentProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
}

export function Section({
  id,
  label,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 md:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-12 md:mb-16">
          {label && (
            <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
              <span className="section-label-line h-px w-6" />
              {label}
            </p>
          )}
          <h2 className="text-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
