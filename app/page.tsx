"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Assuming this path is correct
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

// SVG Imports for USP Bar
import { uspData } from "@/data(fake)/HomePageData";

// Product Card Images
import { productsData } from "@/data(fake)/HomePageData";

import CardHome from "@/components/CARDS/CardHome"; // Your CardHome component
import { CategoryGrid } from "@/components/CARDS/CategoryGrid";
import { GrowInfoSection } from "@/components/INFO/GrowInfoSection";

import TitleBadge from "@/components/SPAN/TitleBadge";

export default function Home() {
  // Updated product data structure for CardHome

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
          {productsData.map((product) => (
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
              buttonText="Add to Cart" // You were overriding buttonText from productData here
              showQuantitySelector={true}
              initialQuantity={3} // Starts with quantity 3
              onAddToCart={(quantity, event) => {
                console.log(`Add ${quantity} of ${product.title} to cart!`); // Enhanced log
              }}
              // You should also pass other props like tags if product objects have them
              tags={product.tags}
              imageAspectRatio={product.imageAspectRatio}
              objectFit={product.objectFit as "cover" | "contain" | undefined}
            />
          ))}
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
            {uspData.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 sm:space-x-4 text-left"
              >
                <div className="flex-shrink-0 pt-1">
                  <Image src={item.icon} alt="" width={36} aria-hidden="true" />
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
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <CategoryGrid />
      <GrowInfoSection />
    </div>
  );
}
