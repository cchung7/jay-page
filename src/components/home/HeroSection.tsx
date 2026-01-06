"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export const HeroSection = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-28 pb-24 md:pb-32"
        >
            <motion.div
                style={{ opacity, scale }}
                className="container max-w-5xl text-center space-y-2 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-2"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-700" />

                        <div className="relative h-40 w-40 rounded-full border-4 border-background bg-secondary overflow-hidden">
                        <Image
                            src="/images/jay_pic.jpg"
                            alt="Jay Chung headshot"
                            fill
                            priority
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        </div>

                        <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                            <Zap className="h-5 w-5 text-white fill-current" />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-linear-to-b from-primary via-primary to-primary/60 bg-clip-text text-transparent leading-[1.1]"
                    >
                        Hi, I'm <br /> <span className="text-accent italic">Jay Chung</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-muted-foreground text-xl md:text-2xl font-medium max-w-2xl mx-auto"
                    >
                        I design and build scalable, intelligent systems centered on human experience.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 mt-9"
                >
                    <Button asChild size="lg" variant={"destructive"} className="h-14 px-6 md:px-10 rounded-full bg-accent text-white font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 transition-all group">
                        <Link href="#experience">
                            View My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="h-14 px-10 rounded-full font-black uppercase tracking-widest hover:scale-105 hover:bg-secondary/80 transition-all">
                        <Link href="#contact">Message Me</Link>
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40"
            >
                <span className="text-[10px] uppercase font-black tracking-[0.4em]">Scroll</span>
                <ArrowDown className="h-4 w-4" />
            </motion.div>
        </section>
    );
};
