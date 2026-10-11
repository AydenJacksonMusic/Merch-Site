"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

export function CartLink() {
  const { count } = useCart();
  return <div className="cursor-pointer border border-white p-1">
            <Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart ({count})</Link>
</div>;
}
export function CartLinkDesk() {
  const { count } = useCart();
  return <div className="cursor-pointer">
            <Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart ({count})</Link>
</div>;
}
