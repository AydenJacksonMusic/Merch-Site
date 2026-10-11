module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/cart/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fourthwall.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    const cartId = request.nextUrl.searchParams.get("id");
    if (!cartId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        cart: null
    });
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            cart: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCart"])(cartId)
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            cart: null
        }, {
            status: 404
        });
    }
}
async function POST(request) {
    const body = await request.json();
    const items = body.items ?? [];
    let cartId = body.cartId;
    if (!cartId) cartId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCart"])()).id;
    const cart = items.length ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addToCart"])(cartId, items) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCart"])(cartId);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        cart
    });
}
async function PATCH(request) {
    const { cartId, items } = await request.json();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        cart: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["changeCart"])(cartId, items)
    });
}
}),
"[project]/lib/fourthwall.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "changeCart",
    ()=>changeCart,
    "createCart",
    ()=>createCart,
    "formatMoney",
    ()=>formatMoney,
    "getCart",
    ()=>getCart,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "priceOf",
    ()=>priceOf
]);
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
    for (const [key, value] of Object.entries(params)){
        if (value != null) url.searchParams.set(key, String(value));
    }
    const res = await fetch(url, {
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) throw new Error(`Fourthwall ${res.status} on ${path}`);
    return res.json();
}
async function fwPost(path, body) {
    const url = new URL(`${BASE}${path}`);
    url.searchParams.set("storefront_token", token());
    url.searchParams.set("currency", "USD");
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        cache: "no-store"
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(data.code || data.message || `Fourthwall ${res.status}`);
    return data;
}
async function getProducts({ page = 0, size = 24, collection = "all" } = {}) {
    const data = await fw(`/collections/${collection}/products`, {
        page,
        size
    });
    return {
        products: data.results ?? [],
        paging: data.paging ?? null
    };
}
async function getProduct(slug) {
    return fw(`/products/${encodeURIComponent(slug)}`);
}
function createCart() {
    return fwPost("/carts", {
        items: []
    });
}
function getCart(cartId) {
    return fw(`/carts/${cartId}`);
}
function addToCart(cartId, items) {
    return fwPost(`/carts/${cartId}/add`, {
        items
    });
}
function changeCart(cartId, items) {
    return fwPost(`/carts/${cartId}/change`, {
        items
    });
}
function priceOf(item) {
    if (item.type === "BUNDLE" && item.price) return item.price;
    const variant = item.variants?.[0];
    return variant?.unitPrice ?? variant?.price ?? null;
}
function formatMoney(price) {
    if (!price) return "";
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: price.currency || "USD"
    }).format(price.value);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1hh-yu5-njch4._.js.map