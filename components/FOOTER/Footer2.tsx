// components/Footers/Footer2.tsx
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

// Styles for mobile accordion links
const mobileAccordionLinkStyle =
  "text-sm font-medium text-zinc-800 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-400 transition-transform transform hover:translate-x-1 block py-1"; // Light text: zinc-800, Light hover: emerald-700

// Styles for desktop navigation links in footer columns
const desktopNavLinkStyle =
  "text-sm font-medium text-zinc-800 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-400 transition-transform transform hover:translate-x-1 block py-1"; // Light text: zinc-800, Light hover: emerald-700

// Style for desktop section headings
const desktopFooterHeadingStyle =
  "text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3"; // Light text: zinc-900

// Style for mobile accordion summary (the clickable title)
const mobileAccordionSummaryStyle =
  "flex items-center justify-between py-3 text-zinc-900 dark:text-zinc-100 font-semibold text-lg cursor-pointer list-none"; // Light text: zinc-900

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
    links: { href: string; label: string }[]
  ) => (
    <nav aria-label={title} className="hidden sm:flex flex-col space-y-2">
      <h3 className={desktopFooterHeadingStyle}>{title}</h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={desktopNavLinkStyle}>
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
      className="bg-zinc-300 font-sans dark:bg-zinc-900 dark:text-zinc-300" // Light bg: zinc-300
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Mobile Accordions */}
        <details className="sm:hidden group border-b border-zinc-400 dark:border-zinc-700">
          {" "}
          {/* Light border: zinc-400 */}
          <summary className={mobileAccordionSummaryStyle}>
            Customer service
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {customerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={mobileAccordionLinkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-zinc-400 dark:border-zinc-700">
          {" "}
          {/* Light border: zinc-400 */}
          <summary className={mobileAccordionSummaryStyle}>
            My account
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {myAccountLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={mobileAccordionLinkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-zinc-400 dark:border-zinc-700">
          {" "}
          {/* Light border: zinc-400 */}
          <summary className={mobileAccordionSummaryStyle}>
            Information
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1.5 pb-3">
            {informationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={mobileAccordionLinkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="sm:hidden group border-b border-zinc-400 dark:border-zinc-700 last:border-none">
          {" "}
          {/* Light border: zinc-400 */}
          <summary className={mobileAccordionSummaryStyle}>
            Contact
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          <ul className="mt-2 pl-4 space-y-1 text-sm text-zinc-800 dark:text-zinc-300 pb-3">
            {" "}
            {/* Light text: zinc-800 */}
            {contactInfo.map((line, index) => (
              <li key={index} className="font-medium">
                {line}
              </li>
            ))}
          </ul>
        </details>

        {/* Desktop Sections */}
        {renderNavSection("Customer service", customerServiceLinks)}
        {renderNavSection("My account", myAccountLinks)}
        {renderNavSection("Information", informationLinks)}

        <div className="hidden sm:flex flex-col space-y-2">
          <h3 className={desktopFooterHeadingStyle}>Contact</h3>
          <ul className="space-y-1 text-sm text-zinc-800 dark:text-zinc-300">
            {" "}
            {/* Light text: zinc-800 */}
            {contactInfo.map((line, index) => (
              <li key={index} className="font-medium">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-400 dark:border-zinc-700">
        {" "}
        {/* Light border: zinc-400 */}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-zinc-700 dark:text-zinc-400 text-center md:text-left">
            {" "}
            {/* Light text: zinc-700 */}
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
