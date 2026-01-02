"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 md:py-12 pb-20 px-6 bg-background relative overflow-hidden"
    >
      {/* OUTER WRAPPER — centers the whole section content */}
      <div className="flex justify-center">
        {/* WIDTH-CONSTRAINED CONTAINER */}
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
                About
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                Engineering with Intent
              </h3>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="text-muted-foreground leading-relaxed font-medium">
                Great engineering is the silent architect of human ambition.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                I specialize in bridging the gap between high-level architectural design and implementation. 
                My process is rooted in sound technique, aesthetic creativity, and structural integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
