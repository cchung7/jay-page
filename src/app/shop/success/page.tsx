"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Download, Calendar, Mail, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
    const { clearCart } = useCart();

    React.useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="min-h-screen bg-background pt-12 pb-12 px-6 flex items-center justify-center">
            <div className="container max-w-3xl mx-auto space-y-3 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="flex justify-center"
                >
              
                </motion.div>

                <div className="space-y-1">
                    <h1 className="text-5xl font-heading font-black tracking-tighter uppercase italic">Dispatch <span className="text-secondary-foreground/40">Confirmed.</span></h1>
                    <p className="text-xl text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed">
                        Your architectural investment is being processed. An authentication brief has been sent to your digital mailbox.
                    </p>
                </div>

                <Card className="border border-border/40 rounded-[2.5rem] bg-secondary/20 shadow-xl overflow-hidden text-left">
                    <CardContent className="p-2.5 space-y-2">
                        <div className="flex justify-between items-center border-b border-border/40 pb-6">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Order Identifier</p>
                                <p className="font-bold text-lg">#FF-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Total Artifacts</p>
                                <p className="font-bold text-lg">Processing...</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Next Steps</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex gap-1 items-start">
                                    <div className="h-10 w-10 shrink-0 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary"><Mail className="h-5 w-5" /></div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Check Email</p>
                                        <p className="text-xs text-muted-foreground">Download links and service invites will be sent within 5 minutes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-start">
                                    <div className="h-10 w-10 shrink-0 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary"><Calendar className="h-5 w-5" /></div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Book Slot</p>
                                        <p className="text-xs text-muted-foreground">For consultations, follow the link in your email to sync calendars.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-wrap justify-center gap-4 py-3">
                    <Button asChild className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest hover:scale-105 transition-all">
                        <Link href="/">Back to Profile</Link>
                    </Button>
                    <Button asChild variant="secondary" className="h-14 px-10 rounded-full font-black uppercase tracking-widest hover:bg-secondary/70 transition-all">
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
