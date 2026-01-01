"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronRight, Star, Zap, ShieldCheck, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart, CartItem } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { cn } from "@/lib/utils";

const products: (Omit<CartItem, 'quantity'> & { description: string, category: string })[] = [
    { id: "p1", name: "Architectural Hoodie", price: 85, type: "physical", category: "Apparel", image: "🧥", description: "Heavyweight 450GSM cotton. Designed for the build-focused workspace." },
    { id: "p2", name: "Deep Stack Consultation", price: 250, type: "service", category: "Consulting", image: "🧠", description: "1-on-1 technical overhaul session focusing on your architecture." },
    { id: "p3", name: "Frisco Performance Tee", price: 45, type: "physical", category: "Apparel", image: "👕", description: "Minimalist embroidery. Maximum technical comfort." },
    { id: "p4", name: "Legacy System Review", price: 500, type: "service", category: "Consulting", image: "🏛️", description: "A forensic analysis of your existing codebase with a path to modernization." },
];

export default function Shop() {
    const [cartOpen, setCartOpen] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState("All");
    const { addItem } = useCart();

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    const categories = ["All", "Apparel", "Consulting"];

    return (
        <div className="min-h-screen bg-background pt-12 pb-12 px-6 mt-44">
            <div className="container max-w-7xl mx-auto space-y-6">
                {/* Shop Header */}
                <header className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                            <ShoppingBag size={24} />
                        </div>
                        <h1 className="text-4xl font-heading font-black tracking-tighter uppercase italic">Digital <span className="text-secondary-foreground/40">Marketplace.</span></h1>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-14">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-primary text-primary-foreground border-primary shadow-xl"
                                        : "bg-background text-muted-foreground border-border hover:border-accent hover:text-accent"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <Card className="h-full pb-2 pt-8 border border-border/40 bg-background hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl group overflow-hidden flex flex-col">
                                    <div className=" bg-secondary/30 flex items-center justify-center text-7xl select-none group-hover:scale-110 transition-transform duration-700 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {p.image}
                                    </div>
                                    <CardContent className="p-2 space-y-1 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <Badge className="bg-secondary text-primary border-none rounded-lg font-black text-[8px] uppercase tracking-widest">{p.category}</Badge>
                                            <span className="font-black text-accent text-lg">${p.price}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-black tracking-tight">{p.name}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-2">{p.description}</p>
                                        </div>
                                        <div className="pt-4 mt-auto">
                                            <Button
                                                onClick={() => {
                                                    addItem({ ...p, quantity: 1 });
                                                    setCartOpen(true);
                                                }}
                                                className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-colors"
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Trust Section */}
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-border/40">
                    {[
                        { icon: ShieldCheck, title: "Secure Checkout", desc: "Enterprise grade encryption powered by Stripe." },
                        { icon: Clock, title: "Flash Delivery", desc: "Digital artifacts arrive instantly via secure link." },
                        { icon: CheckCircle2, title: "Expert Support", desc: "1-on-1 access for all high-value consulting orders." }
                    ].map((trust, i) => (
                        <div key={i} className="flex gap-6 items-start group">
                            <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-minimal">
                                <trust.icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">{trust.title}</h4>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{trust.desc}</p>
                            </div>
                        </div>
                    ))}
                </footer>
            </div>

            <CartDrawer open={cartOpen} setOpen={setCartOpen} />
        </div>
    );
}
