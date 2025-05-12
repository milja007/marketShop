import React from "react";
import Image, { StaticImageData } from "next/image"; // Ensured StaticImageData is imported if you use it elsewhere for props
import Link from "next/link";

import iphone from "@/public/FOOTER/iphonehand.webp";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";
import review1 from "@/public/FOOTER/googlesvg.png";
import review2 from "@/public/FOOTER/reviewsvg.png";
import socials from "@/public/FOOTER/socials.png";

// Define a consistent link style
const linkStyle =
  "text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors duration-200";
const headingStyle =
  "text-2xl font-semibold tracking-tight text-gray-900 dark:text-white";
const supportTextStyle =
  "text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"; // If these were links

const Footer1 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer Section 1"
    className="lg:h-85 bg-feta text-gray-800 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300 font-sans shadow-t-lg" // Added subtle top shadow
  >
    <div className="max-w-10xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between gap-15 justify-items-center items-start">
      {/* Logo Image */}
      <div className="flex justify-center lg:justify-start w-full">
        <Image
          src={iphone}
          alt="App on iPhone" // More descriptive alt
          width={222}
          height={222}
          className="w-44 h-auto lg:-mt-15 rounded-lg shadow-xl" // Added rounded-lg and shadow-xl
          priority
        />
      </div>

      {/* Reviews */}
      <div className="flex flex-col items-center sm:items-start space-y-5 text-center sm:text-left">
        <h3 className={headingStyle}>
          {" "}
          {/* Changed h1 to h3 for semantic hierarchy if this isn't the main page title */}
          Reviews
        </h3>
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-2">
              <Image
                src={review1}
                alt="Google Review Snippet" // More descriptive
                width={150} // Intrinsic width
                height={50} // Intrinsic height (adjust as per actual image aspect ratio)
                className="w-10 h-auto rounded border border-gray-200 dark:border-gray-700" // Kept w-10, added border
                priority
              />
              <Image
                src={review2}
                alt="Web Review Snippet" // More descriptive
                width={150}
                height={50} // Intrinsic height
                className="w-10 h-auto rounded border border-gray-200 dark:border-gray-700" // Kept w-10, added border
                priority
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p className="font-medium text-gray-700 dark:text-gray-300">
                We score a 9.5
                <Link href="#" className={`ml-1 ${linkStyle}`}>
                  {" "}
                  {/* Added # for placeholder href */}
                  Web review
                </Link>
              </p>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                We score a 8.6
                <Link href="#" className={`ml-1 ${linkStyle}`}>
                  {" "}
                  {/* Added # for placeholder href */}
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
        <h3 className={headingStyle}>
          {" "}
          {/* Changed h1 to h3 */}
          Customer Support
        </h3>
        <ul className="space-y-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left">
          {/* Consider making these interactive e.g. tel: and mailto: links */}
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
        <h3 className={headingStyle}>
          {" "}
          {/* Changed h1 to h3 */}
          Follow us on Social
        </h3>
        <Image
          src={socials}
          alt="Social media collage" // More descriptive
          width={333}
          height={333} // Assuming square, adjust if not
          className="w-44 h-auto rounded-lg shadow-lg" // Added rounded-lg and shadow-lg
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
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <social.icon size={22} /> {/* Adjusted size slightly */}
            </Link>
          ))}
        </div>
        {/* Empty div removed as it served no purpose */}
      </div>
    </div>
  </footer>
);

export default Footer1;
