import React from "react";
import Link from "next/link";
import Image from "next/image";

import kartic3 from "@/public/FOOTER/CARDS/americaex.webp";
import kartic6 from "@/public/FOOTER/CARDS/bancontc.webp";
import kartic2 from "@/public/FOOTER/CARDS/bankc.webp";
import kartic7 from "@/public/FOOTER/CARDS/cashc.png";
import kartic5 from "@/public/FOOTER/CARDS/maestroc.webp";
import kartic4 from "@/public/FOOTER/CARDS/masterc2.webp";
import kartic1 from "@/public/FOOTER/CARDS/visac.webp";

const Footer2 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer"
    className="bg-gradient-to-br bg-cactus font-sans dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300"
  >
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* MOBILE COLLAPSIBLE NAVS */}
      <details className="sm:hidden group border-b border-white ">
        <summary className="flex items-center justify-between py-2 text-white font-bold text-lg">
          Customer service
          <span className="transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </summary>
        <ul className="mt-2 pl-4 space-y-2 text-sm text-white">
          <li>
            <Link href="/terms" className="block hover:text-feta">
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="block hover:text-feta">
              Disclaimer
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="block hover:text-feta">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/payment-methods" className="block hover:text-feta">
              Payment Methods
            </Link>
          </li>
          <li>
            <Link href="/shipping-returns" className="block hover:text-feta">
              Shipping &amp; Returns
            </Link>
          </li>
          <li>
            <Link href="/support" className="block hover:text-feta">
              Customer Support
            </Link>
          </li>
          <li>
            <Link href="/sitemap" className="block hover:text-feta">
              Sitemap
            </Link>
          </li>
        </ul>
      </details>

      <details className="sm:hidden group border-b border-white ">
        <summary className="flex items-center justify-between py-2 text-white font-bold text-lg">
          My account
          <span className="transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </summary>
        <ul className="mt-2 pl-4 space-y-2 text-sm text-white">
          <li>
            <Link href="/register" className="block hover:text-feta">
              Register
            </Link>
          </li>
          <li>
            <Link href="/orders" className="block hover:text-feta">
              My Orders
            </Link>
          </li>
          <li>
            <Link href="/tickets" className="block hover:text-feta">
              My Tickets
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="block hover:text-feta">
              My Wishlist
            </Link>
          </li>
        </ul>
      </details>

      <details className="sm:hidden group border-b border-white ">
        <summary className="flex items-center justify-between py-2 text-white font-bold text-lg">
          Information
          <span className="transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </summary>
        <ul className="mt-2 pl-4 space-y-2 text-sm text-white">
          <li>
            <Link href="/grow-lights" className="block hover:text-feta">
              Grow Lights
            </Link>
          </li>
          <li>
            <Link href="/grow-tents" className="block hover:text-feta">
              Grow Tents
            </Link>
          </li>
          <li>
            <Link href="/growbox" className="block hover:text-feta">
              Growbox
            </Link>
          </li>
          <li>
            <Link href="/ventilation" className="block hover:text-feta">
              Ventilation
            </Link>
          </li>
          <li>
            <Link href="/nutrients" className="block hover:text-feta">
              Nutrients
            </Link>
          </li>
        </ul>
      </details>

      {/* DESKTOP NAVS */}
      <nav
        aria-label="Customer Service"
        className="hidden sm:flex flex-col space-y-4"
      >
        <h1 className="text-2xl  font-bold tracking-wide text-white dark:text-green-300  ">
          Customer service
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/terms"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/disclaimer"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Disclaimer
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/payment-methods"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Payment Methods
            </Link>
          </li>
          <li>
            <Link
              href="/shipping-returns"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Shipping &amp; Returns
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Customer Support
            </Link>
          </li>
          <li>
            <Link
              href="/sitemap"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Sitemap
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        aria-label="My Account"
        className="hidden sm:flex flex-col space-y-4"
      >
        <h1 className="text-2xl font-bold tracking-wide text-white dark:text-green-300  ">
          My account
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/register"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              href="/tickets"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Tickets
            </Link>
          </li>
          <li>
            <Link
              href="/wishlist"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Wishlist
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        aria-label="Information"
        className="hidden sm:flex flex-col space-y-4"
      >
        <h1 className="text-2xl font-bold tracking-wide text-white dark:text-green-300  ">
          Information
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/grow-lights"
              className="text-sm font-bold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Grow Lights
            </Link>
          </li>
          <li>
            <Link
              href="/grow-tents"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Grow Tents
            </Link>
          </li>
          <li>
            <Link
              href="/growbox"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Growbox
            </Link>
          </li>
          <li>
            <Link
              href="/ventilation"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Ventilation
            </Link>
          </li>
          <li>
            <Link
              href="/nutrients"
              className="text-sm font-semibold text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Nutrients
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contact & Newsletter */}
      <details className="sm:hidden group border-b border-white last:border-none">
        <summary className="flex items-center justify-between py-2 text-white font-bold text-lg ">
          Contact
          <span className="transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </summary>
        <ul className="mt-2 pl-4 space-y-2 text-sm text-white">
          <li>INT eCommerce B.M.</li>
          <li>A. Straussa 66</li>
          <li>10450 Samobor, Croatia</li>
          <li>KvK: 80300448</li>
          <li>BTW: NL861622868B01</li>
        </ul>
      </details>

      <div className="hidden sm:flex flex-col space-y-4">
        <h1 className="text-2xl font-bold tracking-wide text-white dark:text-green-300">
          Contact
        </h1>
        <ul className="space-y-1 text-sm text-white dark:text-gray-400">
          <li className="font-semibold">INT eCommerce B.M.</li>
          <li className="font-semibold">A. Straussa 66</li>
          <li className="font-semibold">10450 Samobor, Croatia</li>
          <li className="font-semibold">KvK: 80300448</li>
          <li className="font-semibold">BTW: NL861622868B01</li>
        </ul>
      </div>
    </div>{" "}
    {/* ← Close the grid container here */}
    {/* Bottom Bar */}
    <div className="sm:border-t sm:border-white dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs font-semibold text-white dark:text-gray-400">
          &copy; {new Date().getFullYear()} INT eCommerce B.M. All rights
          reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4 text-white dark:text-gray-300">
          <Image src={kartic1} alt="" width={30} />
          <Image src={kartic2} alt="" width={30} />
          <Image src={kartic3} alt="" width={30} />
          <Image src={kartic4} alt="" width={30} />
          <Image src={kartic5} alt="" width={30} />
          <Image src={kartic6} alt="" width={30} />
          <Image src={kartic7} alt="" width={30} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer2;
