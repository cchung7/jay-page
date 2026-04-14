import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        "space-y-1",
        isCentered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="relative inline-block text-sm font-black uppercase tracking-[0.5em] text-accent">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 text-transparent [-webkit-text-stroke:0.85px_hsl(var(--border))]"
        >
          {eyebrow}
        </span>
        <span className="relative">{eyebrow}</span>
      </h2>

      <h3
        className={cn(
          "text-5xl font-black italic leading-[1.05] tracking-tighter md:text-6xl",
          titleClassName
        )}
      >
        <span className="inline-grid overflow-visible">
          <span
            aria-hidden
            className="pointer-events-none col-start-1 row-start-1 pr-[0.55em] text-transparent [-webkit-text-stroke:1.6px_hsl(var(--border))]"
          >
            {title}
          </span>

          <span className="col-start-1 row-start-1 bg-linear-to-b from-primary via-primary to-primary/70 bg-clip-text pr-[0.55em] text-transparent">
            {title}
          </span>
        </span>
      </h3>

      {description ? (
        <div
          className={cn(
            "text-lg font-medium leading-relaxed text-muted-foreground",
            isCentered ? "mx-auto max-w-sm" : "max-w-2xl",
            descriptionClassName
          )}
        >
          {description}
        </div>
      ) : null}
    </header>
  );
}