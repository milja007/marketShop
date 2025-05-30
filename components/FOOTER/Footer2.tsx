// Footer2.tsx
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

// Updated styles for light mode on dark bg-zinc-800. Dark mode styles with text-whitee are preserved.
const mobileAccordionLinkStyle =
  "text-sm font-medium text-zinc-300 hover:text-zinc-100 dark:text-secondary-foreground dark:hover:text-whitee transition-transform transform hover:translate-x-1 block py-1";
const desktopNavLinkStyle =
  "text-sm font-medium text-zinc-300 hover:text-zinc-100 dark:text-secondary-foreground dark:hover:text-whitee transition-transform transform hover:translate-x-1 block py-1";
const desktopFooterHeadingStyle =
  "text-xl font-semibold tracking-tight text-zinc-100 dark:text-secondary-foreground mb-3"; // Light mode: Bright text for heading
const mobileAccordionSummaryStyle =
  "flex items-center justify-between py-3 text-zinc-100 dark:text-secondary-foreground font-semibold text-lg cursor-pointer list-none"; // Light mode: Bright text for summary

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
      // Light mode: bg-zinc-800 (dark), so text is light (text-zinc-300). Dark mode: original.
      className="bg-zinc-800 text-zinc-300 font-sans dark:bg-card dark:text-secondary-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Mobile Accordions */}
        <details className="sm:hidden group border-b border-border dark:border-border">
          {" "}
          {/* Ensure border is theme aware if needed */}{" "}
          <summary className={mobileAccordionSummaryStyle}>
            Customer service
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾ {/* This will inherit text-zinc-100 in light mode */}
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

        <details className="sm:hidden group border-b border-border dark:border-border">
          {" "}
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

        <details className="sm:hidden group border-b border-border dark:border-border">
          {" "}
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

        <details className="sm:hidden group border-b border-border dark:border-border last:border-none">
          {" "}
          <summary className={mobileAccordionSummaryStyle}>
            Contact
            <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
              ▾
            </span>
          </summary>
          {/* Text color for contact info list items inherits from parent (text-zinc-300 in light mode) */}
          <ul className="mt-2 pl-4 space-y-1 text-sm pb-3">
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
          {/* Text color inherits from parent (text-zinc-300 in light mode) */}
          <ul className="space-y-1 text-sm">
            {contactInfo.map((line, index) => (
              <li key={index} className="font-medium">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border dark:border-border">
        {" "}
        {/* Ensure border is theme aware */}{" "}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Light mode: text-zinc-400 for muted. Dark mode: original */}
          <p className="text-xs font-medium text-zinc-400 dark:text-muted-foreground text-center md:text-left">
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
