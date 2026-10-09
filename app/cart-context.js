"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const KEY = "fw_cart_id";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem(KEY);
    if (!id) return;
    fetch(`/api/cart?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cart) setCart(data.cart);
        else localStorage.removeItem(KEY);
      });
  }, []);

  function remember(next) {
    setCart(next);
    if (next?.id) localStorage.setItem(KEY, next.id);
  }

  async function add(items) {
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartId: cart?.id, items }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Could not add to cart");
    remember(data.cart);
    return data.cart;
  }

  async function change(variantId, quantity) {
    const res = await fetch("/api/cart", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartId: cart.id, items: [{ variantId, quantity }] }),
    });
    remember((await res.json()).cart);
  }

  function checkout() {
    if (!cart?.id) return;
    const params = new URLSearchParams({ cartCurrency: "USD", cartId: cart.id });
    window.location.href = `https://${process.env.NEXT_PUBLIC_CHECKOUT_DOMAIN}/checkout/?${params}`;
  }

  const count = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  return (
    <CartContext.Provider value={{ cart, count, add, change, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
