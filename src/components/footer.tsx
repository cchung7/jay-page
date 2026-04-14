"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { PillNav } from "@/components/shared/PillNav";
import { SurfacePanel } from "@/components/shared/SurfacePanel";
import { siteNavLinks } from "@/components/shared/site-nav";

const socialLinks = [
  {
    name: "GitHub Account (Private)",
    href: "https://github.com/cchung7",
    icon: Github,
  },
  {
    name: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/chul-w-chung/",
    icon: Linkedin,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/5 bg-secondary/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <PillNav
          items={siteNavLinks}
          ariaLabel="Footer navigation"
          className="rounded-[1.75rem]"
          itemClassName="h-9 px-4"
        />

        <SurfacePanel className="flex items-center gap-2 rounded-full p-2">
          <Tooltip.Provider delayDuration={150}>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Tooltip.Root key={name}>
                <Tooltip.Trigger asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground",
                      "transition-all duration-200",
                      "hover:bg-white/[0.06] hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    sideOffset={6}
                    className="z-50 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground shadow-lg"
                  >
                    {name}
                    <Tooltip.Arrow className="fill-border" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))}
          </Tooltip.Provider>
        </SurfacePanel>

        <div className="space-y-1">
          <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground/60">
            Jay’s Portfolio
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40">
            © {year} Jay Chung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}