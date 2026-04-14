import * as React from "react";

import { cn } from "@/lib/utils";

type SectionChipProps = React.ComponentProps<"span">;

export function SectionChip({
  className,
  ...props
}: SectionChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-secondary/50 px-3 py-1",
        "text-[10px] font-bold uppercase tracking-widest text-foreground/80",
        className
      )}
      {...props}
    />
  );
}