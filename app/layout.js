import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./cart-context";
import { CartLink } from "./cart-link";

export const metadata = { title: "Ayden Jackson Shop" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header>
            <Link href="/">Ayden Jackson</Link>
            <CartLink />
          </header>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
