"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    type: "physical" | "service";
    quantity: number;
    image: string;
    variant?: string;
    date?: string;
    time?: string;
};

type CartContextType = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [items, setItems] = useState<CartItem[]>(() => {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("frisco-cart");
  return saved ? JSON.parse(saved) : [];
});

    useEffect(() => {
        localStorage.setItem("frisco-cart", JSON.stringify(items));
    }, [items]);

    const addItem = (newItem: CartItem) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === newItem.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, newItem];
        });
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev
                .map((i) =>
                    i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
                )
                .filter((i) => i.quantity > 0)
        );
    };

    const clearCart = () => setItems([]);

    const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
}
