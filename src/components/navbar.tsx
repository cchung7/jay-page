"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  User,
  Briefcase,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  React.useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
    setScrolled(latest > 50);
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Buttons (theme + mobile menu) — add double ring on hover/focus-visible
  const actionClass = cn(
    "h-10 w-10 rounded-full",
    "bg-secondary/30 border border-border/60",
    "text-muted-foreground",
    "shadow-[0_1px_0_rgba(0,0,0,0.22)]",
    "transition-all duration-200",
    "hover:text-foreground hover:border-accent/60",
    "hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  const navPillClass = cn(
    "relative h-10",
    "flex items-center gap-2 px-2 rounded-full",
    "bg-secondary/50 backdrop-blur-md",
    "border border-border/60",
    "shadow-[0_1px_0_rgba(0,0,0,0.22)]",
    "ring-1 ring-white/10",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
    "before:bg-gradient-to-b before:from-white/10 before:to-transparent"
  );

  // Nav link pills — add double ring on hover/focus-visible
  const navButtonClass = cn(
    "group h-9",
    "relative inline-flex items-center gap-2 px-3 rounded-full",
    "text-[11px] font-black uppercase tracking-widest",
    "bg-secondary/30",
    "border border-border/60",
    "text-muted-foreground",
    "transition-all duration-200",
    "hover:text-foreground hover:border-accent/60",
    "hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-2"
          : "bg-transparent py-3"
      )}
    >
      <div className="container mx-auto px-6">
        {/* KEY CHANGE: relative row, absolute centered nav, absolute right actions */}
        <div className="relative h-10">
          {/* Centered Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={navPillClass}>
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link key={name} href={href} className={navButtonClass}>
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Actions (always pinned to the same vertical center) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={actionClass}
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )
              ) : null}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", actionClass)}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />

              <Dialog.Content
                className={cn(
                  "fixed right-0 top-0 z-[70] h-full w-full max-w-sm",
                  "bg-background/95 backdrop-blur-md",
                  "p-6 shadow-2xl border-l border-border/40"
                )}
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="font-black uppercase">Menu</span>
                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close menu"
                      className={cn(
                        "rounded-full",
                        "hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background",
                        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      )}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center text-3xl font-black uppercase"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-6 w-6" />
                        {name}
                      </span>
                      <ArrowUpRight className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </motion.header>
  );
}
