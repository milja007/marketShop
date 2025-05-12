import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import kartic3 from "@/public/FOOTER/CARDS/americaex.webp";
import kartic6 from "@/public/FOOTER/CARDS/bancontc.webp";
import kartic2 from "@/public/FOOTER/CARDS/bankc.webp";
import kartic7 from "@/public/FOOTER/CARDS/cashc.png";
import kartic5 from "@/public/FOOTER/CARDS/maestroc.webp";
import kartic4 from "@/public/FOOTER/CARDS/masterc2.webp";
import kartic1 from "@/public/FOOTER/CARDS/visac.webp";

const navLinkStyle =
  "text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-transform transform hover:translate-x-1 block py-1";
const desktopNavLinkStyle =
  "text-sm font-medium text-white hover:text-feta dark:text-gray-300 dark:hover:text-green-400 transition-transform transform hover:translate-x-1 block py-1"; // Kept existing style for desktop as it's distinct
const footerHeadingStyle =
  "text-xl font-semibold tracking-tight text-white dark:text-green-300 mb-3"; // Unified desktop heading

const Footer2 = () => {
  const customerServiceLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/payment-methods", label: "Payment Methods" },
    { href: "/shipping-returns", label: "Shipping & Returns" },
    { href: "/support", label: "Customer Support" },
    { href: "/sitemap", label: "Sitemap" },
  ];

  const myAccountLinks = [
    { href: "/register", label: "Register" },
    { href: "/orders", label: "My Orders" },
    { href: "/tickets", label: "My Tickets" },
    { href: "/wishlist", label: "My Wishlist" },
  ];

  const informationLinks = [
    { href: "/grow-lights", label: "Grow Lights" },
    { href: "/grow-tents", label: "Grow Tents" },
    { href: "/growbox", label: "Growbox" },
    { href: "/ventilation", label: "Ventilation" },
    { href: "/nutrients", label: "Nutrients" },
  ];

  const contactInfo = [
    "INT eCommerce B.M.",
    "A. Straussa 66",
    "10450 Samobor, Croatia",
    "KvK: 80300448",
    "BTW: NL861622868B01",
  ];

  const paymentMethods = [
    { src: kartic1, alt: "Visa" },
    { src: kartic2, alt: "Bank Card" },
    { src: kartic3, alt: "American Express" },
    { src: kartic4, alt: "Mastercard" },
    { src: kartic5, alt: "Maestro" },
    { src: kartic6, alt: "Bank Contact" },
    { src: kartic7, alt: "Cash" },
  ];

  const renderNavSection = (
    title: string,
    links: { href: string; label: string }[],
    isDesktop?: boolean
  ) => (
    <nav
      aria-label={title}
      className={`${
        isDesktop ? "hidden sm:flex" : "sm:hidden"
      } flex-col space-y-2`}
    >
      <h3
        className={`${
          isDesktop
            ? footerHeadingStyle
            : "flex items-center justify-between py-3 text-white font-semibold text-lg cursor-pointer"
        }`}
      >
        {title}
        {!isDesktop && (
          <span className="transition-transform duration-300 group-open:rotate-180">
            ▼
          </span>
        )}
      </h3>
      <ul
        className={`${
          isDesktop ? "space-y-1.5" : "mt-2 pl-4 space-y-1.5 pb-3"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                isDesktop
                  ? desktopNavLinkStyle
                  : navLinkStyle
                      .replace("text-gray-700", "text-white")
                      .replace("dark:text-gray-300", "dark:text-gray-200")
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <footer
      role="contentinfo"
      aria-label="Website Footer Section 2"
      className="bg-cactus font-sans dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200" // text-gray-200 for base dark text
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <details className="sm:hidden group border-b border-gray-300 dark:border-gray-700">
          <summary className="flex items-center justify-between py-3 text-white font-semibold text-lg cursor-pointer list-none">
            Customer service
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {customerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkStyle
                    .replace("text-gray-700", "text-white hover:text-feta")
                    .replace(
                      "dark:text-gray-300",
                      "dark:text-gray-200 dark:hover:text-green-300"
                    )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-gray-300 dark:border-gray-700">
          <summary className="flex items-center justify-between py-3 text-white font-semibold text-lg cursor-pointer list-none">
            My account
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {myAccountLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkStyle
                    .replace("text-gray-700", "text-white hover:text-feta")
                    .replace(
                      "dark:text-gray-300",
                      "dark:text-gray-200 dark:hover:text-green-300"
                    )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-gray-300 dark:border-gray-700">
          <summary className="flex items-center justify-between py-3 text-white font-semibold text-lg cursor-pointer list-none">
            Information
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {informationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkStyle
                    .replace("text-gray-700", "text-white hover:text-feta")
                    .replace(
                      "dark:text-gray-300",
                      "dark:text-gray-200 dark:hover:text-green-300"
                    )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-gray-300 dark:border-gray-700 last:border-none">
          <summary className="flex items-center justify-between py-3 text-white font-semibold text-lg cursor-pointer list-none">
            Contact
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1 text-sm text-white pb-3">
            {contactInfo.map((line, index) => (
              <li key={index} className="font-medium">
                {line}
              </li>
            ))}
          </ul>
        </details>

        {renderNavSection("Customer service", customerServiceLinks, true)}
        {renderNavSection("My account", myAccountLinks, true)}
        {renderNavSection("Information", informationLinks, true)}

        <div className="hidden sm:flex flex-col space-y-2">
          <h3 className={footerHeadingStyle}>Contact</h3>
          <ul className="space-y-1 text-sm text-white dark:text-gray-300">
            {contactInfo.map((line, index) => (
              <li key={index} className="font-medium">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 dark:border-gray-700/50">
        {" "}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-white dark:text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} INT eCommerce B.M. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-3">
            {paymentMethods.map((method) => (
              <Image
                key={method.alt}
                src={method.src}
                alt={method.alt}
                width={32}
                height={20}
                className="h-5 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
