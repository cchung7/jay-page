"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Rocket, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-8 md:py-12 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
                Availability
              </h2>

              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic">
                Let&apos;s build the future
              </h3>

              <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed mx-auto lg:mx-0">
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
                  value: "Jay Chung",
                  href: "mailto:chung_chul@yahoo.com",
                  external: false,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Jay Chung",
                  href: "https://www.linkedin.com/in/chul-w-chung",
                  external: true,
                },
                // { icon: MapPin, label: "Headquarters", value: "Dallas, TX" },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-3 group"
                  >
                    {/* Icon becomes clickable link if href exists */}
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

                      {/* Text stays as your label/hyperlink display */}
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
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
          <div className="lg:col-span-7 bg-secondary/30 p-3 md:p-20 rounded-[2.5rem] border border-border/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-all duration-1000">
              <Rocket className="h-16 w-16" />
            </div>

            <form className="relative z-10 space-y-10">
              {/* FORM TITLE (kept) */}
              <div className="text-center lg:text-left">
                <h3 className="text-5xl font-black tracking-tighter italic text-foreground">
                  Let&apos;s Connect:
                </h3>
              </div>

              {/* FORM CONTENTS (kept) */}
              <div className="space-y-6">
                <div className="space-y-2 border-b-2 border-border/60 focus-within:border-accent transition-colors pb-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-none p-2 text-xl font-bold placeholder:text-muted-foreground/20 focus:ring-0"
                  />
                </div>

                <div className="space-y-2 border-b-2 border-border/60 focus-within:border-accent transition-colors pb-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-none p-2 text-xl font-bold placeholder:text-muted-foreground/20 focus:ring-0"
                  />
                </div>

                <div className="space-y-2 border-b-2 border-border/60 focus-within:border-accent transition-colors pb-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">
                    Project Description
                  </label>
                  <textarea
                    placeholder="The vision..."
                    className="w-full bg-transparent border-none p-2 text-xl font-bold placeholder:text-muted-foreground/20 focus:ring-0 min-h-[150px] resize-none"
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
