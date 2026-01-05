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
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
    setScrolled(latest > 50);
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  /** Lighter, flatter action buttons */
  const actionClass = cn(
    "rounded-full",
    "bg-background/30 border border-border/50",
    "shadow-[0_1px_0_rgba(0,0,0,0.25)]",
    "transition-all duration-200",
    "hover:-translate-y-[1px] hover:shadow-[0_3px_0_rgba(0,0,0,0.25)]",
    "active:translate-y-0 active:shadow-[0_1px_0_rgba(0,0,0,0.2)]"
  );

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image
                src="/images/jay_logo.png"
                alt="Jay logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center">
            <div
              className={cn(
                "relative flex items-center gap-2 px-2 py-1.5 rounded-full",
                "bg-secondary/60 backdrop-blur-md",
                "border border-border/60",
                "shadow-[0_2px_0_rgba(0,0,0,0.25)]",
                "ring-1 ring-white/10",
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
                "before:bg-gradient-to-b before:from-white/10 before:to-transparent"
              )}
            >
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className={cn(
                    "relative inline-flex items-center gap-2 px-3 py-2 rounded-full",
                    "text-[11px] font-black uppercase tracking-widest",
                    "bg-background/30 border border-border/40",
                    "shadow-none",
                    "transition-all duration-200",
                    "hover:-translate-y-[1px] hover:shadow-[0_3px_0_rgba(0,0,0,0.25)]",
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 opacity-70" />
                  {name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={actionClass}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", actionClass)}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-sm bg-background p-6 shadow-xl border-l border-border/40">
                <div className="flex justify-between items-center mb-12">
                  <span className="font-black uppercase">Menu</span>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon">
                      <X />
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
                        <Icon />
                        {name}
                      </span>
                      <ArrowUpRight />
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
