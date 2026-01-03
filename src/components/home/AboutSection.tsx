"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 md:py-12 pb-40 px-6 bg-background relative overflow-hidden"
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
            {/* HEADER (centered, stacked, above the paragraphs) */}
            <header className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
                About
              </h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tight">
                Engineering with Intent
              </h3>
            </header>

            {/* BODY (below header) */}
            <div className="mx-auto w-full max-w-4xl space-y-6 text-left">
              <p className="text-center text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight text-foreground">
                  Great engineering is the <span className="text-muted-foreground/40 italic">silent architect</span> of human ambition
              </p>
              <p className="text-center text-muted-foreground leading-relaxed font-medium">
                I specialize in bridging the gap between high-level architectural
                design and implementation. My process is rooted in sound
                technique, aesthetic creativity, and structural integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
