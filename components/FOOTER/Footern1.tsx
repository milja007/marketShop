// Footern1.tsx (or Footer1.tsx)
import React from "react";
import Image from "next/image";
import Link from "next/link";

import iphone from "@/public/FOOTER/iphonehand.webp";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react"; // Assuming lucide-react SVGs correctly use currentColor
import review1 from "@/public/FOOTER/googlesvg.png";
import review2 from "@/public/FOOTER/reviewsvg.png";
import socials from "@/public/FOOTER/socials.png";

// Updated styles with theme variables
const linkStyle =
  "text-cactus hover:text-cactus/80 dark:text-cactus dark:hover:text-cactus/80 underline transition-colors duration-200"; // Added /80 for a subtle hover change
const headingStyle =
  "text-2xl font-semibold tracking-tight text-foreground dark:text-foreground"; // Assuming this footer section is on bg-muted, text-foreground gives strong contrast
const supportTextStyle =
  "text-sm text-cactus hover:text-cactus/80 dark:text-cactus dark:hover:text-cactus/80 transition-colors duration-200";

const Footer1 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer Section 1"
    // Updated main footer background and text. Using bg-muted.
    className="lg:h-85 bg-muted text-foreground dark:bg-muted dark:text-foreground font-sans" // Removed shadow-t-lg
  >
    <div className="max-w-10xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between gap-15 justify-items-center items-start">
      {/* Logo Image */}
      <div className="flex justify-center lg:justify-start w-full">
        <Image
          src={iphone}
          alt="App on iPhone"
          width={222}
          height={222}
          className="w-44 h-auto lg:-mt-15 rounded-lg" // Removed shadow-xl
          priority
        />
      </div>

      {/* Reviews */}
      <div className="flex flex-col items-center sm:items-start space-y-5 text-center sm:text-left">
        <h3 className={headingStyle}>Reviews</h3>
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-2">
              <Image
                src={review1}
                alt="Google Review Snippet"
                width={150}
                height={50}
                className="w-10 h-auto rounded border border-border" // Updated border
                priority
              />
              <Image
                src={review2}
                alt="Web Review Snippet"
                width={150}
                height={50}
                className="w-10 h-auto rounded border border-border" // Updated border
                priority
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              {/* Text color inherits from parent (text-foreground) or can be text-muted-foreground for less emphasis */}
              <p className="font-medium text-muted-foreground">
                We score a 9.5
                <Link href="#" className={`ml-1 ${linkStyle}`}>
                  Web review
                </Link>
              </p>
              <p className="font-medium text-muted-foreground">
                We score a 8.6
                <Link href="#" className={`ml-1 ${linkStyle}`}>
                  Web review
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Support */}
      <nav
        aria-label="Customer Support"
        className="flex flex-col space-y-5 items-center sm:items-start"
      >
        <h3 className={headingStyle}>Customer Support</h3>
        {/* List items text can be muted-foreground */}
        <ul className="space-y-2 text-sm font-medium text-muted-foreground text-center sm:text-left">
          <li>
            Tel:{" "}
            <a href="tel:0994171467" className={supportTextStyle}>
              0994171467
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:borna.milja@gmail.com" className={supportTextStyle}>
              borna.milja@gmail.com
            </a>
          </li>
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/385994171467"
              target="_blank"
              rel="noopener noreferrer"
              className={supportTextStyle}
            >
              +385994171467
            </a>
          </li>
        </ul>
      </nav>

      {/* Social */}
      <div className="flex flex-col space-y-6 items-center sm:items-start">
        <h3 className={headingStyle}>Follow us on Social</h3>
        <Image
          src={socials}
          alt="Social media collage"
          width={333}
          height={333}
          className="w-44 h-auto rounded-lg" // Removed shadow-lg
          priority
        />
        <div className="flex space-x-3 lg:mb-22">
          {[
            { href: "#", label: "Github", icon: Github },
            { href: "#", label: "Facebook", icon: Facebook },
            { href: "#", label: "Instagram", icon: Instagram },
            { href: "#", label: "Twitter", icon: Twitter },
            { href: "#", label: "LinkedIn", icon: Linkedin },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              // Updated social icon link styles
              className="p-2 rounded-full text-muted-foreground hover:text-cactus hover:bg-accent
                         dark:text-muted-foreground dark:hover:text-cactus dark:hover:bg-accent
                         transition-all duration-200"
            >
              <social.icon size={22} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer1;
