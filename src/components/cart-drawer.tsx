"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Link from "next/link";

export function CartDrawer({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    const { items, total, updateQuantity, removeItem, itemCount } = useCart();

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 bottom-0 z-101 w-full max-w-md bg-background shadow-2xl flex flex-col"
                            >
                                <div className="p-2 border-b border-border/40 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <ShoppingBag className="h-5 w-5" />
                                        <h2 className="font-heading font-black text-xl tracking-tighter uppercase">Your Cart</h2>
                                        <span className="bg-accent text-white text-[10px] font-black px-2 py-0.5 rounded-full">{itemCount}</span>
                                    </div>
                                    {/* --- ACCESSIBILITY FIX START --- */}
                                    <Dialog.Title className="sr-only">
                                        Mobile Cart Drawer
                                    </Dialog.Title>
                                    {/* --- ACCESSIBILITY FIX END --- */}
                                    <Dialog.Close asChild>
                                        <Button variant="ghost" size="icon" className="rounded-full">
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </Dialog.Close>
                                </div>

                                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                                    {items.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                                <ShoppingBag className="h-10 w-10" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-bold text-lg">Your cart is empty</p>
                                                <p className="text-sm text-muted-foreground">Add some digital artifacts to get started.</p>
                                            </div>
                                            <Button asChild variant="secondary" className="mt-8 rounded-full px-16 h-12 uppercase font-black tracking-widest text-[10px]">
                                                <Link href="/shop" onClick={() => setOpen(false)}>Start Shopping</Link>
                                            </Button>
                                        </div>
                                    ) : (
                                        items.map((item) => (
                                            <div key={item.id} className="flex gap-4 pl-1 group">
                                                <div className="h-20 w-20 rounded-2xl bg-secondary flex items-center justify-center text-4xl shrink-0 group-hover:scale-105 transition-transform">
                                                    {item.image}
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-black tracking-tight text-lg">{item.name}</h3>
                                                            <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">{item.type} artifact</p>
                                                        </div>
                                                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="h-8 w-8 text-muted-foreground/40 hover:text-error transition-colors">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="flex justify-between items-end">
                                                        <div className="flex items-center bg-secondary rounded-lg p-1">
                                                            <button onClick={() => updateQuantity(item.id, -1)} className="h-6 w-6 flex items-center justify-center hover:bg-background rounded-md transition-colors"><Minus className="h-3 w-3" /></button>
                                                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)} className="h-6 w-6 flex items-center justify-center hover:bg-background rounded-md transition-colors"><Plus className="h-3 w-3" /></button>
                                                        </div>
                                                        <p className="font-black text-accent">${item.price * item.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {items.length > 0 && (
                                    <div className="p-2 border-t border-border/40 bg-secondary/20 space-y-1.5">
                                        <div className="space-y-2 mb-2">
                                            <div className="flex justify-between text-sm font-medium text-muted-foreground">
                                                <span>Subtotal</span>
                                                <span>${total}</span>
                                            </div>
                                            <div className="flex justify-between text-lg font-black tracking-tighter uppercase">
                                                <span>Total</span>
                                                <span className="text-accent">${total}</span>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                setOpen(false);
                                                window.location.href = "/shop/success";
                                            }}
                                            className="cursor-pointer w-full h-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-colors"
                                        >
                                            Process Checkout <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
