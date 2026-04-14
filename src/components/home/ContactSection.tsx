"use client";

import * as React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowRight, Linkedin, Mail, Rocket } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SurfacePanel } from "@/components/shared/SurfacePanel";

type FormStatus = "idle" | "sending" | "success" | "error";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    tooltip: "chung_chul@yahoo.com",
    href: "mailto:chung_chul@yahoo.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    tooltip: "View my LinkedIn",
    href: "https://www.linkedin.com/in/chul-w-chung",
    external: true,
  },
] as const;

export const ContactSection = () => {
  const [fullName, setFullName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");

  const [status, setStatus] = React.useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const isSending = status === "sending";

  const inputWrapperClass = cn(
    "group space-y-2 rounded-2xl border border-[hsl(var(--primary)/0.14)] bg-background/15 px-4 py-3",
    "transition-all duration-200",
    "hover:border-accent/35 hover:bg-white/[0.02]",
    "focus-within:border-accent/50"
  );

  const contactIconClass = cn(
    "contact-icon relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-secondary/55",
    "transition-all duration-300",
    "hover:border-accent/35 hover:bg-white/[0.05]"
  );

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
        setStatusMessage(
          data?.detail || data?.error || "Message failed to send."
        );
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
    <section id="contact" className="bg-background px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-10">
            <SectionHeader
              eyebrow="Contact"
              title="Questions & Inquiries"
              description="Accepting select architectural commissions and performance-driven engineering roles."
            />

            <Tooltip.Provider delayDuration={150}>
              <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 md:gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group flex min-w-0 flex-col items-center gap-3 text-center"
                    >
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                            aria-label={item.label}
                            className="block"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                              <div className={contactIconClass}>
                                <Icon className="h-6 w-6 transition-colors" />
                              </div>
                            </div>
                          </a>
                        </Tooltip.Trigger>

                        <Tooltip.Portal>
                          <Tooltip.Content
                            side="top"
                            sideOffset={6}
                            className="z-50 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground shadow-lg"
                          >
                            {item.tooltip}
                            <Tooltip.Arrow className="fill-border" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>

                      <div className="min-w-0 space-y-0.5">
                        <p
                          className={cn(
                            "text-[12px] font-black uppercase tracking-[0.25em] text-muted-foreground/80 transition-colors",
                            "group-hover:text-accent"
                          )}
                        >
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tooltip.Provider>
          </div>

          <SurfacePanel className="group relative overflow-hidden rounded-[2.5rem] p-3 md:p-20">
            <div className="absolute top-0 right-0 scale-150 rotate-12 p-3 opacity-10 transition-all duration-1000 group-hover:rotate-0">
              <Rocket className="h-16 w-16" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="mt-6 text-center md:mt-0">
                <h3
                  className={cn(
                    "text-center text-3xl font-black tracking-tight text-foreground transition-colors duration-300 md:text-4xl",
                    "group-hover:text-accent group-focus-within:text-accent"
                  )}
                >
                  Contact Form
                </h3>
              </div>

              <div className="space-y-6">
                <div className={inputWrapperClass}>
                  <label
                    htmlFor="fullName"
                    className="ml-1 text-[12px] font-black uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-accent"
                  >
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border-none bg-transparent p-0 text-lg font-bold text-foreground outline-none placeholder:text-foreground/45 focus:ring-0 md:text-xl"
                  />
                </div>

                <div className={inputWrapperClass}>
                  <label
                    htmlFor="emailAddress"
                    className="ml-1 text-[12px] font-black uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-accent"
                  >
                    Email Address*
                  </label>
                  <input
                    id="emailAddress"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="jane.doe@example.com"
                    className="w-full border-none bg-transparent p-0 text-lg font-bold text-foreground outline-none placeholder:text-foreground/45 focus:ring-0 md:text-xl"
                  />
                </div>

                <div className={inputWrapperClass}>
                  <label
                    htmlFor="userMessage"
                    className="ml-1 text-[12px] font-black uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-accent"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="userMessage"
                    name="message"
                    autoComplete="off"
                    required
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Describe your vision..."
                    className="min-h-[9.375rem] w-full resize-none border-none bg-transparent p-0 text-lg font-bold text-foreground outline-none placeholder:text-foreground/45 focus:ring-0 md:text-xl"
                  />
                </div>

                {status !== "idle" && statusMessage ? (
                  <div
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-bold",
                      status === "success"
                        ? "border-emerald-500/35 bg-emerald-500/10 text-emerald-400"
                        : "border-border/60 bg-secondary/40 text-muted-foreground"
                    )}
                  >
                    {statusMessage}
                  </div>
                ) : null}
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className={cn(
                  "group relative w-full overflow-hidden",
                  "h-14 rounded-full border border-accent/40 bg-accent px-6 text-sm font-black uppercase tracking-[0.25em] text-white md:px-10",
                  "ring-1 ring-white/10",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
                  "transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]",
                  isSending && "cursor-not-allowed opacity-70 hover:scale-100",
                  "before:absolute before:inset-0 before:pointer-events-none",
                  "before:bg-linear-to-b before:from-white/25 before:to-transparent"
                )}
              >
                <span className="relative z-10">
                  {isSending ? "Sending..." : "Send Message"}
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </form>
          </SurfacePanel>
        </div>
      </div>
    </section>
  );
};