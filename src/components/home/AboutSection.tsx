"use client";

// import { Separator } from "@/components/ui/separator";
import { AnimatedCounter } from "../shared/AnimatedCounter";

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-8 md:py-12 px-6 bg-background relative overflow-hidden"
        >
            <div className="container max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                    {/* Left Column - Concept */}
                    <div className="lg:col-span-12 space-y-6">
                        {/* <div className="flex items-center gap-1">
                            <Separator className="w-8 md:w-12 bg-accent h-1" />
                            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent"></h2>
                        </div> */}
                        <div className="max-w-4xl space-y-2">
                            <p className="text-4xl md:text-5xl font-semibold leading-[1.2] tracking-tight text-foreground">
                                Great engineering is the <span className="text-muted-foreground/40 italic">silent architect</span> of human ambition
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                                I specialize in bridging the gap between high-level architectural design and ground-level implementation. My process is rooted in technical depth, aesthetic creativity, and structural integrity.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                            { label: "Projects Deployed", value: 3, suffix: "+" },
                            { label: "Systems Designed", value: 3, suffix: "+" },
                            { label: "Technologies Used", value: 10, suffix: "+" }
                        ].map((stat, ) => (
                            <div key={stat.label} className="p-8 rounded-3xl bg-secondary/30 border border-border/40 hover:border-accent/40 transition-all duration-500 group">
                                <div className="text-5xl font-heading font-black tracking-tighter text-foreground mb-2 group-hover:text-accent transition-colors">
                                    <AnimatedCounter value={stat.value} />{stat.suffix}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
