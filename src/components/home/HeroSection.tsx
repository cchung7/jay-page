"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const containerRef = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const surface3D = cn(
    "relative overflow-hidden",
    "bg-secondary/30",
    "border border-border/60",
    "ring-1 ring-white/30 dark:ring-white/10",
    "shadow-[0_10px_30px_rgba(0,0,0,0.10)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.35)]",
    "backdrop-blur-md",
    "before:absolute before:inset-0 before:pointer-events-none",
    "before:bg-gradient-to-b before:from-white/35 before:to-transparent dark:before:from-white/10"
  );

  return (
    <section
      ref={containerRef as any}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-28 pb-24 md:pb-32"
    >
      <motion.div
        style={{ opacity, scale }}
        className="container max-w-5xl text-center space-y-2 z-10"
      >
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-2"
        >
          {/* Glow ring */}
          <div className="relative group overflow-visible isolate">
            {/* glow */}
            <div
              className={cn(
                "absolute -inset-20 rounded-full pointer-events-none z-0",
                "[background:radial-gradient(circle,rgba(249,84,28,0.6)_0%,rgba(249,84,28,0.35)_30%,rgba(249,84,28,0.15)_55%,rgba(249,84,28,0)_75%)]",
                "opacity-90",
                "transition-all duration-700 group-hover:opacity-100"
              )}
            />
            {/* Avatar */}
            <div
              className={cn(
                "relative h-40 w-40 rounded-full z-10",
                surface3D,
                "shadow-[0_12px_34px_rgba(0,0,0,0.14)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
              )}
            >
              <div className="absolute inset-1.5 rounded-full border border-border/50 dark:border-border/60 pointer-events-none" />

              <Image
                src="/images/jay_pic.jpg"
                alt="Jay Chung headshot"
                fill
                priority
                className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />
            </div>

            {/* Zap badge */}
            <div
              className={cn(
                "absolute -bottom-2 -right-1 h-10 w-10 rounded-full flex items-center justify-center",
                "z-20",
                "bg-accent text-white",
                "border border-border/40",
                "ring-1 ring-white/30 dark:ring-white/10",
                "shadow-[0_10px_26px_rgba(0,0,0,0.16)] dark:shadow-[0_14px_32px_rgba(0,0,0,0.45)]",
                "before:absolute before:inset-0 before:rounded-full before:pointer-events-none",
                "before:bg-linear-to-b before:from-white/25 before:to-transparent"
              )}
            >
              <Zap className="h-5 w-5 text-white fill-current relative z-10" />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "relative",
              "text-5xl md:text-7xl font-black tracking-tighter",
              "leading-[1.1]"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "pointer-events-none select-none",
                "absolute inset-0",
                "text-transparent",
                "[-webkit-text-stroke:2px_hsl(var(--foreground))]",
                "dark:[-webkit-text-stroke:2px_hsl(var(--border))]"
              )}
            >
              Hi, My Name&apos;s <br />
              <span
                className={cn(
                  "italic",
                  "[-webkit-text-stroke:2px_hsl(var(--accent))]"
                )}
              >
                Jay Chung
              </span>
            </span>

            <span
              className={cn(
                "relative",
                "bg-linear-to-b from-primary via-primary to-primary/70",
                "bg-clip-text text-transparent"
              )}
            >
              Hi, My Name&apos;s <br />
              <span className="text-accent italic">Jay Chung</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-xl md:text-2xl font-medium max-w-2xl mx-auto"
          >
            I build and deploy scalable, intelligent systems centered around human
            experience.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-9"
        >
          <Button
            asChild
            size="lg"
            variant="destructive"
            className={cn(
              "relative overflow-hidden",
              "h-14 px-6 md:px-10 rounded-full",
              "bg-accent text-white",
              "font-black uppercase tracking-widest",
              "border border-accent/40",
              "ring-1 ring-white/25 dark:ring-white/10",
              "shadow-[0_14px_34px_rgba(0,0,0,0.16)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
              "transition-all hover:scale-105 active:scale-[1.02]",
              "group",
              "before:absolute before:inset-0 before:pointer-events-none",
              "before:bg-linear-to-b before:from-white/25 before:to-transparent"
            )}
          >
            <Link href="#experience" className="relative z-10">
              View My Work{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className={cn(
              "h-14 px-10 rounded-full",
              "font-black uppercase tracking-widest",
              surface3D,
              "text-foreground",
              "transition-all hover:scale-105 active:scale-[1.02]",
              "hover:bg-secondary/40"
            )}
          >
            <Link href="#contact" className="relative z-10">
              Message Me
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40"
      >
        <span className="text-[10px] uppercase font-black tracking-[0.4em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
};
