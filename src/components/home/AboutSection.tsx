"use client";

// import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  const FORCE_MOTION = false;

  // ADD: detect desktop pointer (mouse/trackpad)
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // CHANGE: allow motion on desktop even if reduceMotion is true
  const enableMotion = FORCE_MOTION ? true : (isDesktop ? true : !reduceMotion);

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-background relative overflow-hidden"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* HEADER */}
            <header className="text-center space-y-1">
              {/* ABOUT */}
              <h2 className="relative inline-block text-xs font-black uppercase tracking-[0.5em] text-accent">
                <span
                  aria-hidden
                  className="
                    absolute inset-0
                    text-transparent
                    [-webkit-text-stroke:0.85px_theme(colors.border.DEFAULT)]
                    dark:[-webkit-text-stroke:0.85px_theme(colors.border.muted)]
                    pointer-events-none
                  "
                >
                  About
                </span>
                <span className="relative">About</span>
              </h2>

              {/* THE PHILOSOPHY */}
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic leading-[1.05]">
                <span className="inline-grid overflow-visible">
                  <span
                    aria-hidden
                    className="
                      col-start-1 row-start-1
                      text-transparent
                      [-webkit-text-stroke:1.6px_theme(colors.border.DEFAULT)]
                      dark:[-webkit-text-stroke:1.6px_theme(colors.border.muted)]
                      pointer-events-none
                      pr-[0.55em]
                    "
                  >
                    The Philosophy
                  </span>

                  <span
                    className="
                      col-start-1 row-start-1
                      pr-[0.55em]
                      bg-linear-to-b from-primary via-primary to-primary/70
                      bg-clip-text text-transparent
                    "
                  >
                    The Philosophy
                  </span>
                </span>
              </h3>
            </header>

            {/* BODY */}
            <div className="mx-auto w-full max-w-4xl space-y-6 text-left">
              <p className="text-center text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight text-foreground">
                Great engineering is the{" "}
                <motion.span
                  className="
                    inline-grid italic overflow-visible
                    pr-[0.25em] relative left-[4px]
                    will-change-transform
                  "
                  animate={
                    enableMotion
                      ? {
                          x: [0, -1, 1, -1, 0],
                          y: [0, -1, 0, -1, 0],
                          scale: [1, 1.01, 0.99, 1.01, 1],
                        }
                      : undefined
                  }
                  transition={
                    enableMotion
                      ? {
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }
                      : undefined
                  }
                >
                  <span
                    aria-hidden
                    className="
                      col-start-1 row-start-1
                      text-transparent
                      [-webkit-text-stroke:1.1px_rgba(255,120,60,0.45)]
                      dark:[-webkit-text-stroke:1.1px_rgba(255,150,105,0.30)]
                      pointer-events-none
                      pr-[0.25em]
                    "
                  >
                    silent architect
                  </span>

                  <span
                    className="
                      col-start-1 row-start-1
                      pr-[0.25em]
                      bg-linear-to-b from-accent/85 via-accent/60 to-accent/35
                      bg-clip-text text-transparent
                    "
                  >
                    silent architect
                  </span>
                </motion.span>{" "}
                of human ambition
              </p>

              <p className="text-center text-muted-foreground leading-relaxed font-medium">
                I specialize in bridging the gap between architectural design and
                low-level execution. My process is rooted in structural integrity
                and aesthetic creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
