"use client";

import { useState } from "react";
import { useCart } from "./cart-context";

export function AddToCart({ product }) {
  const { add } = useCart();
  const [variantId, setVariantId] = useState(product.variants?.[0]?.id ?? "");
  const [status, setStatus] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("Adding…");
    try {
      const items =
        product.type === "BUNDLE"
          ? product.offers.map((offer) => ({
              variantId: offer.variants[0].id,
              quantity: 1,
              bundleId: product.id,
            }))
          : [{ variantId, quantity: 1 }];
      await add(items);
      setStatus("Added");
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {product.type !== "BUNDLE" && product.variants?.length > 1 ? (
        <select value={variantId} onChange={(event) => setVariantId(event.target.value)}>
          {product.variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.attributes?.description || variant.name}
            </option>
          ))}
        </select>
      ) : null}
      <button type="submit" disabled={product.state?.type === "SOLD_OUT"}>
        {product.state?.type === "SOLD_OUT" ? "Sold out" : "Add to cart"}
      </button>
      <span>{status}</span>
    </form>
  );
}
