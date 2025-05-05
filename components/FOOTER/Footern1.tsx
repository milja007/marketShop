import React from "react";
import Image from "next/image";
import Link from "next/link";

import visa from "@/assets/bank-7073043_1280.webp";
import master from "@/assets/mastercard-157441_1280.webp";
import banking from "@/assets/bank-988164_1280.webp";
import banktr from "@/assets/online-shopping-6404106_1280.webp";
import whatsapp from "@/assets/whatappslika.webp";

const Footer1 = () => (
  <footer
    role="contentinfo"
    aria-label="Website Footer"
    className="bg-gradient-to-br bg-green-200 text-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300 font-sans"
  >
    <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo */}
      <div className="flex flex-col items-start space-y-4">
        <Image
          src={banktr}
          alt="Company logo"
          width={200}
          height={100}
          className="w-32 h-auto"
          priority
        />
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Your trusted partner in secure online payments.
        </p>
      </div>

      {/* Customer Support */}
      <nav aria-label="Customer Support" className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-100">
          Customer Support
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
          <li>Tel: 0994171467</li>
          <li>Email: borna.milja@gmail.com</li>
          <li>WhatsApp: +385994171467</li>
        </ul>
      </nav>

      {/* Reviews */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h3 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-100">
          Reviews
        </h3>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <Image
              src={whatsapp}
              alt="Review snapshot"
              width={199}
              height={122}
              className="w-20 h-auto rounded"
              priority
            />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              We score a 9.5
              <Link href="" className="text-blue-600 underline ml-1">
                Web review
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Social & Payment */}
      <div className="flex flex-col space-y-6 items-center">
        <h3 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-100">
          Many Card Options
        </h3>
        <div className="flex space-x-4">
          <Image src={banking} alt="" width={44} height={44} />
          <Image src={master} alt="" width={44} height={44} />
          <Image src={visa} alt="" width={44} height={44} />
        </div>
        <div className="flex space-x-4 mt-2 text-gray-700 dark:text-gray-400"></div>
      </div>
    </div>
  </footer>
);

export default Footer1;
