import React from "react";
import Image from "next/image";
import Link from "next/link";

import iphone from "@/public/FOOTER/iphonehand.webp";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";
import review1 from "@/public/FOOTER/googlesvg.png";
import review2 from "@/public/FOOTER/reviewsvg.png";
import socials from "@/public/FOOTER/socials.png";
const Footer1 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer"
    className=" lg:h-85 bg-gradient-to-br bg-feta text-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300 font-sans"
  >
    <div className="max-w-10xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between gap-15 justify-items-center">
      {/* Logo */}

      <Image
        src={iphone}
        alt="Company logo"
        width={222}
        height={222}
        className="w-44 h-auto lg:-mt-15"
        priority
      />

      {/* Reviews */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className=" text-2xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
          Reviews
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col space-y-2 ">
              <Image
                src={review1}
                alt="Review snapshot"
                width={150}
                height={150}
                className="w-10 h-auto rounded"
                priority
              />
              <Image
                src={review2}
                alt="Review snapshot"
                width={150}
                height={150}
                className="w-10 h-auto rounded"
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className=" font-bold text-sm text-gray-700 dark:text-gray-400">
                We score a 9.5
                <Link href="" className="text-blue-600 underline ml-1">
                  Web review
                </Link>
              </p>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-400">
                We score a 8.6
                <Link href="" className="text-blue-600 underline ml-1">
                  Web review
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Support */}
      <nav aria-label="Customer Support" className="flex flex-col space-y-4">
        <h1 className="text-2xl  font-bold tracking-wide text-gray-900 dark:text-gray-100">
          Customer Support
        </h1>
        <ul className="space-y-2 text-sm font-bold text-gray-700 dark:text-gray-400">
          <li>Tel: 0994171467</li>
          <li>Email: borna.milja@gmail.com</li>
          <li>WhatsApp: +385994171467</li>
        </ul>
      </nav>

      {/* Social & Payment */}
      <div className="flex flex-col space-y-6 items-center">
        <h1 className="  text-2xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
          Follow us on Social
        </h1>

        <Image
          src={socials}
          alt="Review snapshot"
          width={333}
          height={333}
          className="w-44 h-auto rounded"
          priority
        />
        <div className="flex space-x-4 lg:mb-22">
          <Link
            href="#"
            aria-label="Github" // Added aria-label
            className="font-bold hover:text-white dark:hover:text-green-400 transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Facebook" // Added aria-label
            className="font-bold hover:text-white dark:hover:text-green-400 transition"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram" // Added aria-label
            className="font-bold hover:text-white dark:hover:text-green-400 transition"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter" // Added aria-label
            className="font-bold hover:text-white dark:hover:text-green-400 transition"
          >
            <Twitter size={20} />
          </Link>

          <Link
            href="#"
            aria-label="LinkedIn" // Added aria-label for accessibility
            className="font-bold hover:text-white dark:hover:text-green-400 transition"
          >
            <Linkedin size={25} />
          </Link>
        </div>

        <div className="flex space-x-4 mt-2 text-gray-700 dark:text-gray-400"></div>
      </div>
    </div>
  </footer>
);

export default Footer1;
