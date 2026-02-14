"use client";

import * as React from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Rocket, MapPin, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "success" | "error";

export const ContactSection = () => {
  const [fullName, setFullName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");

  const [status, setStatus] = React.useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const isSending = status === "sending";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setStatusMessage("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
          message: userMessage,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data?.detail || data?.error || "Message failed to send.");
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent. Thank you.");

      setFullName("");
      setEmailAddress("");
      setUserMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Message failed to send. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Contact Info */}
          <div className="space-y-10">
            {/* HEADER */}
            <div className="text-center space-y-1">
              {/* CONTACT */}
              <h2 className="relative inline-block text-sm font-black uppercase tracking-[0.5em] text-accent">
                <span
                  aria-hidden
                  className="
                    absolute inset-0
                    text-transparent
                    [-webkit-text-stroke:0.85px_var(--color-border)]
                    dark:[-webkit-text-stroke:0.85px_theme(colors.border.muted)]
                    pointer-events-none
                  "
                >
                  {/* Title outline */}
                  Contact Me
                </span>
                <span className="relative">
                  {/* Title text */}
                  Contact Me
                </span>
              </h2>

              {/* QUESTIONS & INQUIRIES */}
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic leading-[1.05]">
                <span className="inline-grid overflow-visible">
                  <span
                    aria-hidden
                    className="
                      col-start-1 row-start-1
                      text-transparent
                      [-webkit-text-stroke:1.6px_var(--color-border)]
                      dark:[-webkit-text-stroke:1.6px_theme(colors.border.muted)]
                      pointer-events-none
                      pr-[0.55em]
                    "
                  >
                    Questions &amp; Inquiries
                  </span>

                  <span
                    className="
                      col-start-1 row-start-1
                      pr-[0.55em]
                      bg-linear-to-b from-primary via-primary to-primary/70
                      bg-clip-text text-transparent
                    "
                  >
                    Questions &amp; Inquiries
                  </span>
                </span>
              </h3>

              <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed mx-auto">
                Accepting select architectural commissions and performance-driven
                engineering roles.
              </p>
            </div>

          <Tooltip.Provider delayDuration={150}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: "E-Mail",               // visible small label under the icon
                  tooltip: "chung_chul@yahoo.com",           // tooltip text (separate)
                  value: "",
                  href: "mailto:chung_chul@yahoo.com",
                  external: false,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  tooltip: "View my LinkedIn",
                  value: "",
                  href: "https://www.linkedin.com/in/chul-w-chung",
                  external: true,
                },
                {
                  icon: MapPin,
                  label: "Headquarters",
                  tooltip: "Frisco, TX",
                  value: "",
                  href: "https://www.google.com/maps/search/?api=1&query=Frisco,TX",
                  external: true,
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex flex-col items-center text-center gap-3 group">
                    {item.href ? (
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            aria-label={item.label}
                            className="block"
                          >
                            <div className="relative group">
                              <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                              <div className="relative h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border/50 transition-all transform group-hover:scale-105 active:scale-95 duration-500 shadow-minimal group-hover:shadow-xl group-hover:border-accent/70 group-hover:bg-accent/15 group-hover:text-foreground">
                                <Icon className="h-6 w-6" />
                              </div>
                            </div>
                          </Link>
                        </Tooltip.Trigger>

                        <Tooltip.Portal>
                          <Tooltip.Content
                            side="top"
                            sideOffset={6}
                            // Tooltip format
                            className="z-50 rounded-md bg-background px-2 py-1 text-xs font-semibold text-foreground shadow-lg border border-border"
                          >
                            {item.tooltip ?? item.label}
                            <Tooltip.Arrow className="fill-border" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    ) : (
                      <div className="relative group">
                        <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border/50 transition-all duration-500 shadow-minimal group-hover:border-accent/70 group-hover:bg-accent/15 group-hover:text-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-0.5">
                      <p className="text-[12px] font-black uppercase tracking-[0.25em] text-muted-foreground/50">
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
                        <p className="text-lg font-bold tracking-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Tooltip.Provider>

          </div>

          {/* Form */}
          <div className="bg-secondary/25 p-3 md:p-20 rounded-[2.5rem] border border-border/60 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-all duration-1000">
              <Rocket className="h-16 w-16" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="text-center">
                <h3
                  className={cn(
                    "text-center text-3xl md:text-4xl font-black tracking-tight",
                    "text-foreground transition-colors duration-300",
                    "group-hover:text-accent group-focus-within:text-accent"
                  )}
                >
                  Contact Form:
                </h3>
              </div>

              <div className="space-y-6">
                <div className="group space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 transition-colors hover:border-accent/70 focus-within:border-accent/80">
                  <label className="text-[12px] font-black uppercase tracking-widest text-foreground/70 ml-1 group-hover:text-accent transition-colors">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none"
                  />
                </div>

                <div className="group space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 transition-colors hover:border-accent/70 focus-within:border-accent/80">
                  <label className="text-[12px] font-black uppercase tracking-widest text-foreground/70 ml-1 group-hover:text-accent transition-colors">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="jane.doe@example.com"
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none"
                  />
                </div>

                <div className="group space-y-2 rounded-2xl border border-border/50 bg-background/10 px-4 py-3 transition-colors hover:border-accent/70 focus-within:border-accent/80">
                  <label className="text-[12px] font-black uppercase tracking-widest text-foreground/70 ml-1 group-hover:text-accent transition-colors">
                    Your Message*
                  </label>
                  <textarea
                    required
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Describe your vision..."
                    className="w-full bg-transparent border-none p-0 text-lg md:text-xl font-bold text-foreground placeholder:text-foreground/35 focus:ring-0 outline-none min-h-37.5 resize-none"
                  />
                </div>

                {/* Success / Fail message */}
                {status !== "idle" && statusMessage && (
                  <div
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-bold",
                      status === "success"
                        ? "border-accent/40 bg-accent/10 text-accent"
                        : "border-border/60 bg-secondary/40 text-muted-foreground"
                    )}
                  >
                    {statusMessage}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className={cn(
                  "w-full relative overflow-hidden",
                  "h-14 px-6 md:px-10 rounded-full",
                  "bg-accent text-white hover:bg-accent",
                  "font-black uppercase tracking-[0.25em] text-sm",
                  "border border-accent/40",
                  "ring-1 ring-white/25 dark:ring-white/10",
                  "shadow-[0_14px_34px_rgba(0,0,0,0.16)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
                  "transition-all duration-300",
                  "hover:scale-105 active:scale-[1.02]",
                  isSending && "opacity-70 cursor-not-allowed hover:scale-100",
                  "group",
                  "before:absolute before:inset-0 before:pointer-events-none",
                  "before:bg-linear-to-b before:from-white/25 before:to-transparent",
                  "hover:[&>svg]:translate-x-1"
                )}
              >
                <span className="relative z-10">
                  {isSending ? "Sending..." : "Send Message"}
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 ml-2 transition-transform"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
