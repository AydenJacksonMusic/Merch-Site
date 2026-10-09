"use client";

import { useCart } from "../cart-context";

export default function CartPage() {
  const { cart, change, checkout } = useCart();
  if (!cart?.items?.length) return <main><p>Your cart is empty.</p></main>;
  return (
    <main>
      <h1>Cart</h1>
      {cart.items.map((item) => (
        <div key={item.variant.id}>
          <p>{item.variant.name} × {item.quantity}</p>
          <button onClick={() => change(item.variant.id, item.quantity + 1)}>+</button>
          <button onClick={() => change(item.variant.id, Math.max(0, item.quantity - 1))}>−</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </main>
  );
}
