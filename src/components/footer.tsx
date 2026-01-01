"use client";

import Link from "next/link";
import { Github, Linkedin, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-secondary/30 border-t border-border/40 py-6 px-6">
            <div className="container max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
                {/* Brand */}
                <div className="flex flex-col items-center gap-1 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-14 w-14 bg-accent rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                            FF
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-background rounded-full flex items-center justify-center border-2 border-secondary">
                            <Zap size={16} className="text-accent fill-current" />
                        </div>
                    </div>
                    <h4 className="font-heading font-black text-2xl tracking-tighter uppercase italic text-foreground">
                        Jay <span className="text-muted-foreground/60">Chung</span>
                    </h4>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                    <Link href="/#about" className="hover:text-accent transition-colors hover:scale-105 transform">About</Link>
                    <Link href="/#experience" className="hover:text-accent transition-colors hover:scale-105 transform">Experience</Link>
                    <Link href="/shop" className="hover:text-accent transition-colors hover:scale-105 transform">Shop</Link>
                    <Link href="/#contact" className="hover:text-accent transition-colors hover:scale-105 transform">Contact</Link>
                </nav>

                {/* Socials */}
                <div className="flex gap-2 py-4">
                    {[
                        { Icon: Github, href: "#", label: "GitHub" },
                        { Icon: Linkedin, href: "#", label: "LinkedIn" }
                    ].map(({ Icon, href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            title={label}
                            className="h-12 w-12 rounded-full bg-transparent border border-border/60 flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20"
                        >
                            {/* ICON WRAPPER (background changes here) */}
                            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-white group-hover:scale-110 transition-all" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="space-y-3">
                    <p className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest whitespace-nowrap">
                        {/* Built with <span className="text-red-500 animate-pulse">❤️</span> by */}
                        Digital Engineering Portfolio.
                    </p>
                    <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest">
                        © {currentYear} Jay's Page. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}