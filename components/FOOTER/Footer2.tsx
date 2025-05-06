import React from "react"; // Import React
import Link from "next/link"; // Bring back Link
import kartic1 from "@/assets/FOOTER/KARTICE/icon-payment-americanexpress.webp";
import kartic2 from "@/assets/FOOTER/KARTICE/icon-payment-banktransfer.webp";
import kartic3 from "@/assets/FOOTER/KARTICE/icon-payment-cash.png";
import kartic4 from "@/assets/FOOTER/KARTICE/icon-payment-maestro.webp";
import kartic5 from "@/assets/FOOTER/KARTICE/icon-payment-mastercard.webp";
import kartic6 from "@/assets/FOOTER/KARTICE/icon-payment-mistercash.webp";
import kartic7 from "@/assets/FOOTER/KARTICE/icon-payment-visa.webp";
import Image from "next/image";

const Footer2 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer"
    // Updated light mode: subtle gradient, base text color set here for inheritance (but overridden where needed)
    className="bg-gradient-to-br from-green-700 to-green-900 text-green-100 font-sans dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300"
  >
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Customer Service */}
      <nav aria-label="Customer Service" className="flex flex-col space-y-4">
        {/* Adjusted heading color for light mode */}
        <h1 className="text-lg font-bold tracking-wide text-green-100 dark:text-green-300">
          Customer service
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/terms"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/disclaimer"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Disclaimer
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/payment-methods"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Payment Methods
            </Link>
          </li>
          <li>
            <Link
              href="/shipping-returns"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Shipping & Returns
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Customer Support
            </Link>
          </li>
          <li>
            <Link
              href="/sitemap"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Sitemap
            </Link>
          </li>
        </ul>
      </nav>

      {/* My Account */}
      <nav aria-label="My Account" className="flex flex-col space-y-4">
        {/* Adjusted heading color for light mode */}
        <h1 className="text-lg font-bold tracking-wide text-green-100 dark:text-green-300">
          My account
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/register"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              href="/tickets"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Tickets
            </Link>
          </li>
          <li>
            <Link
              href="/wishlist"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              My Wishlist
            </Link>
          </li>
        </ul>
      </nav>

      {/* Information */}
      <nav aria-label="Information" className="flex flex-col space-y-4">
        {/* Adjusted heading color for light mode */}
        <h1 className="text-lg font-bold tracking-wide text-green-100 dark:text-green-300">
          Information
        </h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="/grow-lights"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-bold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Grow Lights
            </Link>
          </li>
          <li>
            <Link
              href="/grow-tents"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Grow Tents
            </Link>
          </li>
          <li>
            <Link
              href="/growbox"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Growbox
            </Link>
          </li>
          <li>
            <Link
              href="/ventilation"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Ventilation
            </Link>
          </li>
          <li>
            <Link
              href="/nutrients"
              // Added base text color, adjusted hover color for light mode
              className="text-sm font-semibold text-green-100 hover:text-white dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1"
            >
              Nutrients
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contact & Newsletter */}
      <div className="flex flex-col space-y-4">
        {/* Adjusted heading color for light mode */}
        <h1 className="text-lg font-bold tracking-wide text-green-100 dark:text-green-300">
          Contact
        </h1>
        {/* Adjusted contact info text color for light mode */}
        <ul className="space-y-1 text-sm text-green-200 dark:text-gray-400">
          <li className="font-semibold">INT eCommerce B.M.</li>
          <li className="font-semibold">A. Straussa 66</li>
          <li className="font-semibold">10450 Samobor, Croatia</li>
          <li className="font-semibold">KvK: 80300448</li>
          <li className="font-semibold">BTW: NL861622868B01</li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    {/* Adjusted border color for light mode to complement gradient */}
    <div className="border-t border-green-600 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Adjusted copyright text color for light mode */}
        <p className="text-xs font-semibold text-green-200 dark:text-gray-400">
          &copy; {new Date().getFullYear()} INT eCommerce B.M. All rights
          reserved.
        </p>
        {/* Adjusted icon container text color and link hover color for light mode */}
        <div className="mt-4 md:mt-0 flex space-x-4 text-green-100 dark:text-gray-300">
          <Image src={kartic1} alt="" width={30} height={30} />
          <Image src={kartic2} alt="" width={30} height={30} />
          <Image src={kartic3} alt="" width={30} height={30} />
          <Image src={kartic4} alt="" width={30} height={30} />
          <Image src={kartic5} alt="" width={30} height={30} />
          <Image src={kartic6} alt="" width={30} height={30} />
          <Image src={kartic7} alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer2;
