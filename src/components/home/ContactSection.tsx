"use client";

import Link from "next/link";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 bg-background"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">

        {/* SECTION HEADER */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em]">
            Availability
          </p>

          <h2 className="text-5xl md:text-6xl font-black italic tracking-tight text-white">
            Let&apos;s build the future.
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed">
            Currently accepting select architectural commissions and
            performance-driven engineering collaborations.
          </p>
        </div>

        {/* HORIZONTAL CONTACT ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">

          {/* EMAIL */}
          <Link
            href="mailto:chung_chul@yahoo.com"
            className="group flex flex-col items-center gap-3"
          >
            <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-white" />
            </div>

            <p className="text-xs font-black tracking-widest uppercase text-muted-foreground">
              E-mail
            </p>

            <p className="text-sm font-semibold text-foreground">
              chung_chul@yahoo.com
            </p>
          </Link>

          {/* LINKEDIN */}
          <Link
            href="https://www.linkedin.com/in/chul-w-chung"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-white" />
            </div>

            <p className="text-xs font-black tracking-widest uppercase text-muted-foreground">
              LinkedIn
            </p>

            <p className="text-sm font-semibold text-foreground">
              Jay Chung
            </p>
          </Link>

          {/* HEADQUARTERS (NON-CLICKABLE) */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center">
              <MapPin className="h-6 w-6 text-muted-foreground" />
            </div>

            <p className="text-xs font-black tracking-widest uppercase text-muted-foreground">
              Headquarters
            </p>

            <p className="text-sm font-semibold text-foreground">
              Dallas, TX
            </p>
          </div>

        </div>

        {/* MESSAGE FORM CARD */}
        <div className="w-full max-w-4xl mt-16 rounded-3xl bg-secondary/40 border border-border/40 p-10">

          <h3 className="text-4xl font-black italic text-white mb-8 text-center">
            Let&apos;s Connect:
          </h3>

          {/* Your form inputs go here */}
          {/* (left unchanged intentionally) */}

        </div>
      </div>
    </section>
  );
}
