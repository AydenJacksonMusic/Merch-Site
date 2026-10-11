module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fourthwall.js [app-rsc] (ecmascript)");
;
;
;
const revalidate = 60;
async function HomePage() {
    const { products } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Shop"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16
                },
                children: products.map((product)=>{
                    const image = product.images?.[0];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/products/${product.slug}`,
                        children: [
                            image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.url,
                                alt: product.name,
                                style: {
                                    width: "100%",
                                    aspectRatio: "3/4",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 16,
                                columnNumber: 24
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 16
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMoney"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fourthwall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["priceOf"])(product))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.js [app-rsc] (ecmascript)"));
}),
"[project]/lib/fourthwall.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0m9upvdkm6ks2._.js.map