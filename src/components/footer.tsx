"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cchung7", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/chul-w-chung/", icon: Linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  const pillGroupClass = cn(
    "inline-flex items-center gap-1 p-1 rounded-full",
    "border border-border/60 bg-secondary/30",
    "backdrop-blur-md",
    "shadow-[0_1px_0_rgba(0,0,0,0.25)]",
    "ring-1 ring-white/10",
    "relative",
    "before:absolute before:inset-0 before:rounded-full",
    "before:bg-gradient-to-b before:from-white/10 before:to-transparent",
    "before:pointer-events-none"
  );

  // Footer nav buttons — add double ring on hover/focus-visible
  const pillButtonClass = cn(
    "relative h-9 px-4",
    "inline-flex items-center justify-center",
    "rounded-full",
    "text-[11px] font-black uppercase tracking-widest",
    "border border-border/60",
    "bg-secondary/30",
    "text-muted-foreground",
    "transition-all duration-200",
    "hover:text-foreground hover:border-accent/60",
    "hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  return (
    <footer className="border-t border-border/40 bg-secondary/30 mt-14">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6 text-center">
        <nav aria-label="Footer navigation">
          <div className={pillGroupClass}>
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className={pillButtonClass}>
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className={cn(
                "h-9 w-9 rounded-full",
                "inline-flex items-center justify-center",
                "border border-border/60 bg-secondary/30",
                "text-muted-foreground",
                "transition-all duration-200",
                "hover:text-foreground hover:border-accent/60",
                "hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
                "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
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
