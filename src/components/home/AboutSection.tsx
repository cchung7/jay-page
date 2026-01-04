"use client";

// import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 md:py-12 pb-50 px-6 bg-background relative overflow-hidden"
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
            {/* <div className="flex items-center gap-1">
              <Separator className="w-8 md:w-12 bg-accent h-1" />
            </div> */}

            {/* HEADER (centered, stacked, above the paragraphs) */}
            <header className="text-center space-y-1">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
                About
              </h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic">
                The Philosophy
              </h3>
            </header>

            {/* BODY (below header) */}
            <div className="mx-auto w-full max-w-4xl space-y-6 text-left">
              <p className="text-center text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight text-foreground">
                  Great engineering is the <span className="text-muted-foreground/45 italic">silent architect</span> of human ambition.
              </p>
              <p className="text-center text-muted-foreground leading-relaxed font-medium">
                I specialize in bridging the gap between architectural design
                and low-level execution. My process is rooted in structural integrity 
                and aesthetic creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
