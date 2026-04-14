import * as React from "react";

import { cn } from "@/lib/utils";

type SurfacePanelProps = React.ComponentProps<"div">;

export function SurfacePanel({
  className,
  ...props
}: SurfacePanelProps) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-white/10 bg-secondary/40 backdrop-blur-xl",
        "ring-1 ring-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.28)]",
        className
      )}
      {...props}
    />
  );
}