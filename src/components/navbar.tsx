"use client";

import * as React from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PillNav } from "@/components/shared/PillNav";
import { siteNavLinks } from "@/components/shared/site-nav";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 48);
  });

  const menuButtonClass = cn(
    "h-10 w-10 rounded-full border border-white/10 bg-[rgba(30,30,36,0.58)] text-muted-foreground",
    "backdrop-blur-xl ring-1 ring-white/5 shadow-[0_10px_28px_rgba(0,0,0,0.24)]",
    "transition-all duration-200",
    "hover:bg-white/[0.06] hover:border-accent/40 hover:text-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/6 bg-[rgba(14,14,18,0.72)] py-3 backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex h-11 items-center justify-center">
          <div className="hidden md:block">
            <PillNav
              items={siteNavLinks}
              ariaLabel="Primary navigation"
              className="rounded-[1.75rem]"
              itemClassName="h-10 px-5"
            />
          </div>

          <div className="absolute right-0 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={menuButtonClass}
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <AnimatePresence>
          {mobileMenuOpen ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm" />

              <Dialog.Content
                className={cn(
                  "fixed right-0 top-0 z-70 h-full w-full max-w-sm",
                  "border-l border-white/10 bg-background/95 px-6 py-6 shadow-2xl backdrop-blur-xl"
                )}
              >
                <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

                <div className="mb-8 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-sm font-black uppercase tracking-[0.22em] text-muted-foreground">
                      Menu
                    </span>
                  </div>

                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close menu"
                      className={menuButtonClass}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>

                <div className="flex flex-col gap-3">
                  {siteNavLinks.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center justify-between rounded-2xl border border-white/8 bg-secondary/20 px-4 py-4",
                        "transition-all duration-200",
                        "hover:border-accent/35 hover:bg-white/[0.045]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl",
                            "border border-white/8 bg-white/[0.03]",
                            "text-muted-foreground transition-all duration-200",
                            "group-hover:border-accent/30 group-hover:text-accent"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <span className="text-lg font-black uppercase tracking-[0.14em] text-foreground">
                          {name}
                        </span>
                      </span>

                      <span
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full",
                          "text-muted-foreground transition-all duration-200",
                          "group-hover:bg-white/[0.05] group-hover:text-foreground"
                        )}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </motion.header>
  );
}