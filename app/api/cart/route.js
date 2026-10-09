import { createCart, getCart, addToCart, changeCart } from "@/lib/fourthwall";
import { NextResponse } from "next/server";

export async function GET(request) {
  const cartId = request.nextUrl.searchParams.get("id");
  if (!cartId) return NextResponse.json({ cart: null });
  try {
    return NextResponse.json({ cart: await getCart(cartId) });
  } catch {
    return NextResponse.json({ cart: null }, { status: 404 });
  }
}

export async function POST(request) {
  const body = await request.json();
  const items = body.items ?? [];
  let cartId = body.cartId;
  if (!cartId) cartId = (await createCart()).id;
  const cart = items.length ? await addToCart(cartId, items) : await getCart(cartId);
  return NextResponse.json({ cart });
}

export async function PATCH(request) {
  const { cartId, items } = await request.json();
  return NextResponse.json({ cart: await changeCart(cartId, items) });
}
