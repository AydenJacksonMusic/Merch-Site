# Ayden Jackson shop

Next.js storefront for a Fourthwall catalog.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Put your storefront token in `FOURTHWALL_STOREFRONT_TOKEN`
4. `npm run dev`

Do not commit `.env.local`. The token is a shop secret.

Checkout redirects to `https://checkout.aydenjackson.com/checkout/?cartCurrency=USD&cartId=...`.
