"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-secondary/30 border-t border-border/40 mt-10 py-6 px-6"
    >
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/#about" className="hover:text-accent transition-colors hover:scale-105 transform">
            About
          </Link>
          <Link href="/#experience" className="hover:text-accent transition-colors hover:scale-105 transform">
            Experience
          </Link>
          {/* <Link href="/shop" className="hover:text-accent transition-colors hover:scale-105 transform">
            Shop
          </Link> */}
          <Link href="/#contact" className="hover:text-accent transition-colors hover:scale-105 transform">
            Contact
          </Link>
        </nav>

        {/* Socials */}
        <div className="flex gap-3 py-2">
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              title={label}
              className="h-12 w-12 rounded-full border border-border/60 flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-white group-hover:scale-110 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest whitespace-nowrap">
            Jay’s Portfolio
          </p>
          <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest">
            © {currentYear} Jay Chung. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
