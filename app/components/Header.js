"use client";

import { useState } from "react";
import Link from "next/link";
import { CartLink, CartLinkDesk } from "../cart-link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[100px] bg-black text-red-500 font-semibold relative">
      <div className="w-80 m-auto flex justify-between sm:flex-col text-center max-sm:p-[30px] h-full items-center">
        
        {/* Logo */}
        <div className="z-50 relative">
          <Link href="/">
            <h1 className="text-xl font-bold">Ayden Jackson</h1>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-3 sm:hidden z-50">
          {/* Hamburger / Close */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle cursor-pointer border border-white p-1"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Cart */}
          
            <CartLink />
        </div>

        {/* Navigation Menu */}
        <div
          className={`
            mobile-menu transition-all duration-700 ease-in-out
            max-sm:w-full max-sm:bg-black max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:text-lg max-sm:pt-[5rem]
            sm:block
            ${isOpen 
              ? "max-sm:h-screen max-sm:overflow-y-auto" 
              : "max-sm:h-0 max-sm:overflow-y-hidden"
            }
          `}
        >
          <ul className="flex flex-col sm:flex-row gap-10">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Listen</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>News</Link>
            </li>
            <li className="max-sm:hidden">
              <CartLinkDesk />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}