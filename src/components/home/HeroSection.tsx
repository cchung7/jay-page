"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SurfacePanel } from "@/components/shared/SurfacePanel";

export const HeroSection = () => {
  const containerRef = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.hash === `#${id}`) {
      const url = new URL(window.location.href);
      url.hash = "";
      window.history.replaceState(null, "", url.toString());
      url.hash = id;
      window.history.replaceState(null, "", url.toString());
    } else {
      const url = new URL(window.location.href);
      url.hash = id;
      window.history.replaceState(null, "", url.toString());
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-24 md:pt-28 md:pb-32"
    >
      <motion.div
        style={{ opacity, scale }}
        className="container z-10 max-w-5xl space-y-2 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 flex justify-center"
        >
          <div className="group relative isolate overflow-visible">
            <div
              className={cn(
                "pointer-events-none absolute -inset-12 z-0 rounded-full",
                "opacity-90 transition-all duration-700 group-hover:opacity-100",
                "[background:radial-gradient(circle,hsl(var(--hero-glow)/0.21)_0%,hsl(var(--hero-glow)/0.25)_28%,hsl(var(--hero-glow)/0.075)_52%,hsl(var(--hero-glow)/0.01)_72%)]"
              )}
            />

            <SurfacePanel
              className={cn(
                "relative z-10 h-40 w-40 rounded-full p-0",
                "border-white/12 bg-secondary/35 ring-white/8",
                "shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
              )}
            >
              <div className="pointer-events-none absolute inset-1.5 rounded-full border border-border/60" />

              <div className="absolute inset-0 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/images/jay_pic2.jpg"
                  alt="Profile Picture"
                  fill
                  sizes="(max-width: 768px) 160px, 160px"
                  priority
                  className="hero-avatar-img rounded-full object-cover"
                />

                <div className="hero-avatar-overlay pointer-events-none absolute inset-0 rounded-full" />
                <div className="hero-avatar-gloss pointer-events-none absolute inset-0 rounded-full" />
              </div>
            </SurfacePanel>

            <div
              className={cn(
                "absolute -bottom-2 -right-1 z-20 flex h-10 w-10 items-center justify-center rounded-full",
                "bg-accent text-white",
                "border border-border/40",
                "ring-1 ring-white/10",
                "shadow-[0_14px_32px_rgba(0,0,0,0.45)]",
                "before:absolute before:inset-0 before:rounded-full before:pointer-events-none",
                "before:bg-linear-to-b before:from-white/25 before:to-transparent"
              )}
            >
              <Zap className="relative z-10 h-5 w-5 fill-current text-white" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 select-none text-transparent [-webkit-text-stroke:2px_hsl(var(--border))]"
            >
              Hi, My Name&apos;s <br />
            </span>

            <span className="relative bg-linear-to-b from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Hi, My Name&apos;s <br />
              <span className="text-5xl italic text-accent md:text-7xl">
                Jay Chung
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground md:text-2xl"
          >
            I build and deploy scalable, intelligent systems centered around the
            human experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          <Button
            type="button"
            size="lg"
            variant="destructive"
            onClick={() => scrollToId("experience")}
            className={cn(
              "group relative overflow-hidden",
              "h-14 rounded-full border border-accent/40 bg-accent px-6 text-white md:px-10",
              "font-black uppercase tracking-widest",
              "ring-1 ring-white/10",
              "shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
              "transition-all hover:scale-105 active:scale-[1.02]",
              "before:absolute before:inset-0 before:pointer-events-none",
              "before:bg-linear-to-b before:from-white/25 before:to-transparent"
            )}
          >
            <span className="relative z-10 inline-flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            type="button"
            size="lg"
            variant="secondary"
            onClick={() => scrollToId("contact")}
            className={cn(
              "group relative overflow-hidden",
              "h-14 rounded-full border border-border/60 bg-secondary/30 px-6 text-foreground md:px-10",
              "font-black uppercase tracking-widest",
              "ring-1 ring-white/10 backdrop-blur-md",
              "cta-shadow cta-shadow-hover",
              "transition-all hover:scale-105 active:scale-[1.02]",
              "hover:bg-secondary/40",
              "before:absolute before:inset-0 before:pointer-events-none",
              "before:bg-linear-to-b before:from-white/10 before:to-transparent"
            )}
          >
            <span className="relative z-10">Message Me</span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/40"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
          Scroll down
        </span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
};