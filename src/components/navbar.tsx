"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { Sun, Moon, Menu, X, ArrowUpRight, User, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  // { name: "Projects", href: "/#projects", icon: Code },
  // { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // Track window scroll directly
  const { scrollY } = useScroll();

  // Fix hydration by waiting for client-side mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);

    setScrolled(latest > 50);
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // 3D action button styling (for theme/mobile-menu icons)
  const action3DClass = cn(
    "rounded-full",
    "bg-background/20 border border-border/50",
    "shadow-[0_6px_0_rgba(0,0,0,0.35)]",
    "transition-all duration-200",
    "hover:border-accent/60 hover:-translate-y-[1px] hover:shadow-[0_10px_0_rgba(0,0,0,0.35)]",
    "active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.35)]"
  );

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      {/* Header Row */}
      <div className="container mx-auto px-6">
        {/* 3-column layout keeps nav perfectly centered regardless of left/right widths */}
        <div className="grid grid-cols-3 items-center">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home" className="inline-flex items-center">
              {/* Larger logo + remove “button” emphasis */}
              <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden">
                <Image
                  src="/images/jay_logo.png"
                  alt="Jay logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* CENTER: Links (Desktop) */}
          <nav className="hidden md:flex justify-center">
            <div
              className={cn(
                "relative flex items-center gap-3 px-3 py-2 rounded-full font-bold",
                "bg-secondary/60 backdrop-blur-md",
                "border border-border/60",
                "shadow-[0_8px_0_rgba(0,0,0,0.35)]",
                "ring-1 ring-white/10",
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
                "before:bg-gradient-to-b before:from-white/20 before:to-transparent"
              )}
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-center gap-2 px-3 py-2 rounded-full",
                      "text-[11px] uppercase tracking-widest",
                      "bg-background/20 border border-border/50",
                      "shadow-[0_6px_0_rgba(0,0,0,0.35)]",
                      "text-muted-foreground transition-all duration-200",
                      "hover:text-foreground hover:border-accent/60 hover:-translate-y-[1px] hover:shadow-[0_10px_0_rgba(0,0,0,0.35)]",
                      "active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.35)]"
                    )}
                  >
                    <Icon className="h-5 w-5 mb-0.5 text-muted-foreground/80 transition-colors" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center justify-end gap-2">
            {/* THEME (3D) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(action3DClass, "relative overflow-hidden")}
              aria-label="Toggle theme"
            >
              {mounted ? (
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      exit={{ y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      exit={{ y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <div className="h-6 w-6" />
              )}
            </Button>

            {/* MOBILE MENU (3D) — ensure right-most in the action row */}
            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden ml-auto", action3DClass)}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog (Portal) */}
      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 right-0 z-70 w-full max-w-sm bg-background p-6 flex flex-col shadow-2xl border-l border-border/40"
                >
                  <Dialog.Title className="sr-only">
                    Mobile Navigation Menu
                  </Dialog.Title>

                  <div className="flex items-center justify-between mb-12">
                    <div className="font-heading font-black tracking-tighter uppercase text-xl">
                      Menu
                    </div>
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-black italic tracking-tighter uppercase flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-1">
                              <Icon className="h-6 w-6 text-accent" />
                              {link.name}
                            </span>
                            <ArrowUpRight className="h-6 w-6 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Removed “Enter the Shop” button */}
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </motion.header>
  );
}
