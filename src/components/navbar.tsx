"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sun, Moon, Menu, X, ShoppingBag,
    ArrowUpRight, User, Briefcase, Code, Mail
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart-drawer";

const navLinks = [
    { name: "About", href: "/#about", icon: User },
    { name: "Experience", href: "/#experience", icon: Briefcase },
    // { name: "Projects", href: "/#projects", icon: Code },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false);
    const { itemCount } = useCart();
    const [hidden, setHidden] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    // Fix: useScroll to track window scroll directly
    const { scrollY } = useScroll();

    // Fix hydration by waiting for client-side mount
    React.useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

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
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between gap-1">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* <motion.div
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        className="h-32 w-32 bg-primary text-primary-foreground flex items-center justify-center font-black text-xs rounded-lg"
                    >
                        FF
                    </motion.div> */}
                    <span className="font-heading font-black text-sm sm:text-base md:text-2xl tracking-tighter uppercase whitespace-nowrap">
                        Frisco <span className="text-accent italic">Fighter.</span>
                    </span>
                </Link>

                {/* Center Links (Desktop) */}
                <nav className="hidden md:flex items-center bg-secondary/50 backdrop-blur-sm px-2 py-1.5 gap-5 rounded-full border border-border/40 font-bold">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-1 py-2 rounded-full text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 relative group flex items-center gap-2"
                            >
                                <Icon className="h-5 w-5 mb-0.5 group-hover:text-accent transition-colors" />
                                {link.name}
                                <div className="absolute -bottom-1 left-1 right-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <div className="relative group">
                        <Button variant="ghost" size="icon" onClick={() => setCartOpen(true)} className="rounded-full hover:bg-secondary">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="absolute top-1 right-1 h-3 w-3 bg-accent text-[8px] font-black text-white flex items-center justify-center rounded-full border-2 border-background animate-pulse">
                                {itemCount}
                            </span>
                        </Button>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full hover:bg-secondary relative overflow-hidden"
                    >
                        {/* Prevent hydration mismatch by not rendering until mounted */}
                        {mounted ? (
                            <AnimatePresence mode="wait">
                                {theme === "dark" ? (
                                    <motion.div key="sun" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} transition={{ duration: 0.2 }}>
                                        <Sun className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="moon" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} transition={{ duration: 0.2 }}>
                                        <Moon className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        ) : (
                            // Placeholder to maintain layout during SSR
                            <div className="h-6 w-6" />
                        )}
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
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

                                    {/* --- ACCESSIBILITY FIX START --- */}
                                    <Dialog.Title className="sr-only">
                                        Mobile Navigation Menu
                                    </Dialog.Title>
                                    {/* --- ACCESSIBILITY FIX END --- */}


                                    <div className="flex items-center justify-between mb-12">
                                        <div className="font-heading font-black tracking-tighter uppercase text-xl">Menu</div>
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

                                    <div className="mt-auto pt-10 border-t border-border/40">
                                        <Button asChild className="w-full h-16 rounded-2xl bg-accent text-white font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all">
                                            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
                                                Enter the Shop
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    )}
                </AnimatePresence>
            </Dialog.Root>

            <CartDrawer open={cartOpen} setOpen={setCartOpen} />
        </motion.header>
    );
}