"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Rocket, MapPin, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* CHANGED: force stacked layout even on large screens */}
        <div className="grid grid-cols-1 gap-6">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="text-center space-y-1">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
                Contact Me
              </h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic">
                Let&apos;s build the future
              </h3>
              <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed mx-auto">
                Currently accepting select architectural commissions and
                performance-driven engineering collaborations.
              </p>
            </div>

            {/* HORIZONTAL CONTACT ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: "",
                  href: "mailto:chung_chul@yahoo.com",
                  external: false,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "",
                  href: "https://www.linkedin.com/in/chul-w-chung",
                  external: true,
                },
                {
                  icon: MapPin,
                  label: "Frisco, TX",
                  value: "",
                  href: "https://www.google.com/maps/search/?api=1&query=Frisco,TX",
                  external: true,
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-3 group"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                        className="block"
                      >
                        <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-105 active:scale-95 duration-500 shadow-minimal group-hover:shadow-xl">
                          <Icon className="h-6 w-6" />
                        </div>
                      </Link>
                    ) : (
                      <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary transition-all duration-500 shadow-minimal">
                        <Icon className="h-6 w-6" />
                      </div>
                    )}

                    <div className="space-y-0.5">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/50">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="text-lg font-bold tracking-tight hover:text-accent transition-colors underline underline-offset-4 decoration-border/60 hover:decoration-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold tracking-tight">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/25 p-3 md:p-20 rounded-[2.5rem] border border-accent/60 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-all duration-1000">
              <Rocket className="h-16 w-16" />
            </div>

            <form className="relative z-10 space-y-10">
              <div className="text-center">
                <h3 className="text-center text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  Tell Me About the Work:
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 focus-within:border-accent/80 focus-within:bg-background/15 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-foreground/70 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none"
                  />
                </div>

                <div className="space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 focus-within:border-accent/80 focus-within:bg-background/15 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-foreground/70 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none"
                  />
                </div>

                <div className="space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 focus-within:border-accent/80 focus-within:bg-background/15 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-foreground/70 ml-1">
                    Project Description
                  </label>
                  <textarea
                    placeholder="The vision..."
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none min-h-[150px] resize-none"
                  />
                </div>
              </div>

              <Button className="w-full h-12 cursor-pointer rounded-full bg-primary text-primary-foreground font-black uppercase tracking-[0.25em] text-sm group shadow-xl transition-all hover:[&>svg]:translate-x-1">
                Send Message{" "}
                <ArrowRight size={16} className="ml-2 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
