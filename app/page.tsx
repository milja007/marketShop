"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Assuming this path is correct
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

// SVG Imports for USP Bar
import svg1 from "@/public/HOME/Hero/SvgHero/1.svg";
import svg2 from "@/public/HOME/Hero/SvgHero/2.svg";
import svg3 from "@/public/HOME/Hero/SvgHero/3.svg";
import svg4 from "@/public/HOME/Hero/SvgHero/4.svg";

// Product Card Images
import card1_lumatek600 from "@/public/CARDS/lumatek-lumatek-zeus-600w-pro-29.jpg";
import card2_lumatek465 from "@/public/CARDS/9.jpg"; // Renamed for clarity, assuming this is for the 465W
import card3_kindled from "@/public/CARDS/kind-led-k5-xl750.jpg";
import card4_homebox from "@/public/CARDS/homebox-homebox-ambient-q60-60x60x160cm.jpg";

import CardHome from "@/components/CARDS/CardHome"; // Your CardHome component
import { CategoryGrid } from "@/components/CARDS/CategoryGrid";
import { GrowInfoSection } from "@/components/INFO/GrowInfoSection";

import OurBrandsSection from "@/components/HOME/OurBrandsSection";
import TitleBadge from "@/components/SPAN/TitleBadge";

export default function Home() {
  const uspData = [
    {
      id: "usp1",
      icon: svg1,
      title: "Fast delivery",
      subtitle: "Shipped within 48 Hours",
    },
    {
      id: "usp2",
      icon: svg2,
      title: "Discreet packed",
      subtitle: "Delivered discreetly & securely",
    },
    {
      id: "usp3",
      icon: svg3,
      title: "Free shipment",
      subtitle: "Free shipping from €150,-",
    },
    {
      id: "usp4",
      icon: svg4,
      title: "Payment Methods",
      subtitle: "Secure online payment",
    },
  ];

  // Updated product data structure for CardHome
  const productsData = [
    {
      id: "lumatek-zeus-600w",
      imageUrl: card1_lumatek600,
      imageAlt: "Lumatek Zeus 600W Pro 2.9 LED Grow Light",
      brand: "Lumatek",
      title: "Lumatek Zeus 600W Pro 2.9",
      features: ["Power: 600 Watt", "Footprint: 150 x 150 cm", "Full-spectrum"],
      oldPrice: "€989,95",
      price: "€789,95",
      buttonText: "Add",
      onButtonClick: () => console.log("Add Lumatek 600W"),
      href: "/products/lumatek-zeus-600w-pro-29",
      tags: [{ text: "Pro 2.9", color: "bg-sky-500" }],
    },
    {
      id: "lumatek-zeus-465w",
      imageUrl: card2_lumatek465,
      imageAlt: "Lumatek Zeus 465W Pro 2.9 LED Grow Light",
      brand: "Lumatek",
      title: "Lumatek Zeus 465W Pro 2.9",
      features: ["Power: 465 Watt", "Footprint: 120 x 120 cm", "Full-spectrum"],
      oldPrice: "€899,01",
      price: "€799,96",
      buttonText: "Add",
      onButtonClick: () => console.log("Add Lumatek 465W"),
      href: "/products/lumatek-zeus-465w-pro-29",
    },
    {
      id: "homebox-q60",
      imageUrl: card4_homebox,
      imageAlt: "Homebox Ambient Q60+ Grow Tent",
      brand: "Homebox",
      title: "Homebox Ambient Q60+",
      features: ["Size: 60x60x160cm", "Fabric: PAR+ optimal reflection"], // Example more concise features
      price: "€104,95",
      buttonText: "View", // Example of a "View" button
      href: "/products/homebox-ambient-q60",
      imageAspectRatio: "aspect-[3/4]",
      objectFit: "cover", // Tents might look better with cover
      tags: [{ text: "Best Seller", color: "bg-amber-500" }],
    },
    {
      id: "kind-led-xl750",
      imageUrl: card3_kindled,
      imageAlt: "Kind LED K5 XL750 Grow Light",
      brand: "Kind Led",
      title: "Kind LED K5 XL750",
      features: [
        "Power: 430 Watt",
        "Footprint: 120 x 120 cm",
        "Full-cycle spectrum",
      ],
      price: "€1.215,00",
      buttonText: "Add",
      onButtonClick: () => console.log("Add Kind LED"),
      href: "/products/kind-led-k5-xl750",
    },
  ];

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
      <OurBrandsSection />
    </div>
  );
}
