"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Assuming this path is correct
import Image from "next/image"; // Keep this for the USP bar images

// Import the entire JSON object once
import homePageJsonDataFromFile from "@/data(fake)/HomePageData.json"; // Adjusted import

import CardHome from "@/components/CARDS/CardHome"; // Your CardHome component
import { CategoryGrid } from "@/components/CARDS/CategoryGrid";
import { GrowInfoSection } from "@/components/INFO/GrowInfoSection";
import TitleBadge from "@/components/SPAN/TitleBadge";

// --- Define types to match your JSON structure and component expectations ---
// It's good practice to move these to a shared types file (e.g., src/types.ts) eventually.
interface UspItem {
  id: string;
  icon: string; // Expecting string path from JSON
  title: string;
  subtitle: string;
}

interface ProductTag {
  text: string;
  color: string;
}

interface Product {
  id: string;
  imageUrl: string; // Expecting string path from JSON
  imageAlt: string;
  brand: string;
  title: string;
  features: string[];
  oldPrice?: string;
  price: string;
  buttonText?: string; // From your JSON data
  href: string;
  tags?: ProductTag[];
  imageAspectRatio?: string;
  objectFit?: "cover" | "contain" | undefined; // Specific type for objectFit
}
// --- End Type Definitions ---

// Extract and type the data from the imported JSON object
const uspData: UspItem[] = homePageJsonDataFromFile.uspData as UspItem[];
const productsData = homePageJsonDataFromFile.productsData as Product[];

export default function Home() {
  // Updated product data structure for CardHome (Your comment)

  return (
    <div className="bg-slate-100 min-h-screen font-sans">
      {/* Main Page Heading */}
      <section className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
          The Best Growing <TitleBadge>Equipment</TitleBadge>
          <br className="hidden sm:block lg:hidden" />
          in One Place!
        </h1>
      </section>
      {/* Product Cards Section */}
      <MaxWidthWrapper className="py-12 lg:py-16">
        <div className="flex justify-between items-center mb-0 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Online{" "}
            <span className="block sm:inline bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 sm:py-1 rounded-lg shadow-lg mt-2 sm:mt-0 mx-1">
              Growshop{" "}
            </span>{" "}
            Bok Grow.com
          </h2>
          <a
            href="/all-products"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hidden sm:block"
          >
            See all products &rarr;
          </a>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsData.map(
            (
              product // 'product' is now correctly typed as 'Product'
            ) => (
              <CardHome
                key={product.id}
                productId={product.id}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                brand={product.brand}
                title={product.title}
                features={product.features}
                price={product.price}
                oldPrice={product.oldPrice}
                href={product.href}
                buttonText="Add to Cart" // Your original override
                showQuantitySelector={true}
                initialQuantity={3} // Starts with quantity 3
                onAddToCart={(quantity, event) => {
                  console.log(`Add ${quantity} of ${product.title} to cart!`); // Enhanced log
                }}
                tags={product.tags}
                imageAspectRatio={product.imageAspectRatio}
                objectFit={product.objectFit} // No cast needed here if 'product' is typed as 'Product'
              />
            )
          )}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <a
            href="/all-products"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            See all products &rarr;
          </a>
        </div>
      </MaxWidthWrapper>

      {/* USP Bar Section */}
      <section
        aria-labelledby="usp-bar-heading"
        className=" w-full py-8 sm:py-12 bg-white border-y border-gray-200 mb-10"
      >
        <MaxWidthWrapper>
          <h2 id="usp-bar-heading" className="sr-only">
            Our Unique Selling Propositions
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {uspData.map(
              (
                item // 'item' is now correctly typed as 'UspItem'
              ) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-3 sm:space-x-4 text-left"
                >
                  <div className="flex-shrink-0 pt-1">
                    <Image
                      src={item.icon}
                      alt=""
                      width={36} // Keep these for Next.js optimization & layout shift prevention
                      height={36} // Keep these for Next.js optimization & layout shift prevention
                      aria-hidden="true"
                      className="w-9 h-9" // Example: Using Tailwind classes for 36x36px (if your base size is 4px, 9*4=36)
                      // Or, more explicitly: className="w-[36px] h-[36px]"
                    />
                    {/* Preserved your original Image tag for USP items, ensure height is handled by CSS or aspect ratio if needed */}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </MaxWidthWrapper>
      </section>
      <CategoryGrid />
      <GrowInfoSection />
    </div>
  );
}
