import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./cart-context";
import { CartLink } from "./cart-link";

export const metadata = { title: "Ayden Jackson | Official Website" };

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
          <footer className="h-[100px] bg-black text-white text-center">
      <div className="w-[80%] m-auto flex max-sm:flex-col justify-between sm:p-[30px]">
      <p>&copy; 2026 Ayden Jackson</p>
      <ul className="max-sm:flex max-sm:flex-col">
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Returns</a>
        <a href="">Support</a>
      </ul>
      </div>
    </footer>
        </CartProvider>
      </body>
    </html>
  );
}
