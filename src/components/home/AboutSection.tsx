"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "@/components/shared/SectionHeader";

export const AboutSection = () => {
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableMotion = isDesktop || !reduceMotion;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-24 md:py-32"
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
            <SectionHeader
              eyebrow="About"
              title="The Philosophy"
            />

            <div className="mx-auto w-full max-w-4xl space-y-6 text-left">
              <p className="text-center text-3xl font-semibold leading-[1.2] tracking-tight text-foreground md:text-4xl">
                Great engineering is the{" "}
                <motion.span
                  className="relative left-1 inline-grid overflow-visible pr-[0.25em] italic will-change-transform"
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
                    className="pointer-events-none col-start-1 row-start-1 pr-[0.25em] text-transparent [-webkit-text-stroke:1.1px_rgba(255,150,105,0.30)]"
                  >
                    silent architect
                  </span>

                  <span className="col-start-1 row-start-1 bg-linear-to-b from-accent/85 via-accent/60 to-accent/35 bg-clip-text pr-[0.25em] text-transparent">
                    silent architect
                  </span>
                </motion.span>{" "}
                of human ambition and superintelligence.
              </p>

              <p className="text-center font-medium leading-relaxed text-muted-foreground">
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