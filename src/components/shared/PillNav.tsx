"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { SurfacePanel } from "@/components/shared/SurfacePanel";
import type { SiteNavLink } from "@/components/shared/site-nav";

type PillNavProps = {
  items: SiteNavLink[];
  className?: string;
  itemClassName?: string;
  showIcons?: boolean;
  ariaLabel?: string;
  onItemClick?: () => void;
};

export function PillNav({
  items,
  className,
  itemClassName,
  showIcons = false,
  ariaLabel = "Site navigation",
  onItemClick,
}: PillNavProps) {
  return (
    <SurfacePanel className={cn("inline-flex p-2", className)}>
      <nav aria-label={ariaLabel} className="flex flex-wrap items-center gap-2">
        {items.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            onClick={onItemClick}
            className={cn(
              "group inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4",
              "text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground",
              "transition-all duration-200",
              "hover:bg-white/[0.06] hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              itemClassName
            )}
          >
            {showIcons ? (
              <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            ) : null}
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </SurfacePanel>
  );
}