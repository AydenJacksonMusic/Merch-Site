const BASE = "https://storefront-api.fourthwall.com/v1";

function token() {
  const value = process.env.FOURTHWALL_STOREFRONT_TOKEN;
  if (!value) throw new Error("Missing FOURTHWALL_STOREFRONT_TOKEN");
  return value;
}

async function fw(path, params = {}) {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("storefront_token", token());
  url.searchParams.set("currency", "USD");
  for (const [key, value] of Object.entries(params)) {
    if (value != null) url.searchParams.set(key, String(value));
  }
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Fourthwall ${res.status} on ${path}`);
  return res.json();
}

async function fwPost(path, body) {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("storefront_token", token());
  url.searchParams.set("currency", "USD");
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.code || data.message || `Fourthwall ${res.status}`);
  return data;
}

export async function getProducts({ page = 0, size = 24, collection = "all" } = {}) {
  const data = await fw(`/collections/${collection}/products`, { page, size });
  return { products: data.results ?? [], paging: data.paging ?? null };
}

export async function getProduct(slug) {
  return fw(`/products/${encodeURIComponent(slug)}`);
}

export function createCart() {
  return fwPost("/carts", { items: [] });
}

export function getCart(cartId) {
  return fw(`/carts/${cartId}`);
}

export function addToCart(cartId, items) {
  return fwPost(`/carts/${cartId}/add`, { items });
}

export function changeCart(cartId, items) {
  return fwPost(`/carts/${cartId}/change`, { items });
}

export function priceOf(item) {
  if (item.type === "BUNDLE" && item.price) return item.price;
  const variant = item.variants?.[0];
  return variant?.unitPrice ?? variant?.price ?? null;
}

export function formatMoney(price) {
  if (!price) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency || "USD",
  }).format(price.value);
}
