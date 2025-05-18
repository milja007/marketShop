// src/components/OurBrandsSection.tsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming you have cn utility

// Your Brand Logo Imports
import barneyFarm from "@/public/HOME/Brands/Barneys-Farm-Amsterdam-Logo-e1687879895923.jpg";
import advancedN from "@/public/HOME/Brands/advanced-nutrients.png";
import avtny from "@/public/HOME/Brands/avtnybne1.jpg";
import canna from "@/public/HOME/Brands/canna.png";
import fastbuds from "@/public/HOME/Brands/download (1).jpg";
import bulkseed from "@/public/HOME/Brands/download.jpg";
import dutchfarm from "@/public/HOME/Brands/logo-homepage.jpg";
import marshydro from "@/public/HOME/Brands/mars-hydro.png";
import primaklima from "@/public/HOME/Brands/prima-klima.png";
import spiderfarmer from "@/public/HOME/Brands/spider-farmer.png";

interface Brand {
  id: string;
  name: string;
  logoSrc: StaticImageData | string;
  altText: string;
  slug: string;
}

const brandsData: Brand[] = [
  // --- USER ACTION REQUIRED ---
  // IMPORTANT: Ensure name, altText, and slug for each brand below are accurate.
  {
    id: "barneys-farm",
    name: "Barney's Farm",
    logoSrc: barneyFarm,
    altText: "Barney's Farm Logo",
    slug: "/brands/barneys-farm",
  },
  {
    id: "advanced-nutrients",
    name: "Advanced Nutrients",
    logoSrc: advancedN,
    altText: "Advanced Nutrients Logo",
    slug: "/brands/advanced-nutrients",
  },
  {
    id: "avtny",
    name: "Avtny",
    logoSrc: avtny,
    altText: "Avtny Logo",
    slug: "/brands/avtny-brand",
  },
  {
    id: "canna",
    name: "Canna",
    logoSrc: canna,
    altText: "Canna Logo",
    slug: "/brands/canna-official",
  },
  {
    id: "fastbuds",
    name: "Fast Buds",
    logoSrc: fastbuds,
    altText: "Fast Buds Logo",
    slug: "/brands/fast-buds",
  },
  {
    id: "bulkseed",
    name: "Bulk Seed Bank",
    logoSrc: bulkseed,
    altText: "Bulk Seed Bank Logo",
    slug: "/brands/bulk-seed-bank",
  },
  {
    id: "dutchfarm",
    name: "Dutch Passion",
    logoSrc: dutchfarm,
    altText: "Dutch Passion Logo",
    slug: "/brands/dutch-passion",
  },
  {
    id: "marshydro",
    name: "Mars Hydro",
    logoSrc: marshydro,
    altText: "Mars Hydro Logo",
    slug: "/brands/mars-hydro-led",
  },
  {
    id: "primaklima",
    name: "Prima Klima",
    logoSrc: primaklima,
    altText: "Prima Klima Logo",
    slug: "/brands/prima-klima-ventilation",
  },
  {
    id: "spiderfarmer",
    name: "Spider Farmer",
    logoSrc: spiderfarmer,
    altText: "Spider Farmer Logo",
    slug: "/brands/spider-farmer-leds",
  },
];

const OurBrandsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const validBrands = brandsData.filter(
    (brand) => brand.logoSrc && typeof brand.logoSrc === "object"
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;
      setCanScroll(isScrollable);
      if (!isScrollable) {
        setActiveDot(0);
      }
    }
  }, [validBrands]); // Re-check when brands potentially change

  // Show 3 dots (Start, Middle, End) if scrollable, otherwise no dots.
  const numDots = canScroll && validBrands.length > 2 ? 3 : 0;

  const handleDotClick = useCallback(
    (dotIndex: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      let targetScrollLeft = 0;

      if (dotIndex === 0) {
        // Start
        targetScrollLeft = 0;
      }
      if (dotIndex === 1 && numDots === 3) {
        // Middle (only if 3 dots are shown)
        // Scroll to the middle of the scrollable content
        targetScrollLeft = (container.scrollWidth - container.clientWidth) / 2;
      }
      if (dotIndex === numDots - 1 && numDots > 0) {
        // End
        // Scroll to the very end of the content
        targetScrollLeft = container.scrollWidth - container.clientWidth;
      }

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setActiveDot(dotIndex);
    },
    [numDots]
  ); // numDots dependency ensures logic adapts if dot count changes

  if (validBrands.length === 0 && process.env.NODE_ENV === "development") {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Our Featured Brands
          </h2>
          <p className="text-muted-foreground">
            Brand logos are not configured. Please update{" "}
            <code>OurBrandsSection.tsx</code>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-foreground">
          Our Featured Brands
        </h2>
        <div
          ref={scrollContainerRef}
          className="relative flex items-center overflow-x-auto space-x-6 lg:space-x-3 px-2 scroll-px-2 pb-4  hide-scrollbar"
          // scroll-px-2 (scroll-padding-left/right: 0.5rem) is key for snap alignment with padding
        >
          {validBrands.map((brand) => (
            <div key={brand.id} className="flex-shrink-0 snap-start">
              <Link href={brand.slug}>
                {/* Items are now smaller squares */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 p-1.5 sm:p-2 bg-card rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center justify-center cursor-pointer transform hover:-translate-y-1">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.altText}
                      fill
                      // Sizes based on w-28 (112px) and sm:w-32 (128px)
                      sizes="(max-width: 639px) 112px, 128px"
                      className="object-contain group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Dots Navigation - Shown only if numDots > 0, and hidden on lg screens and larger */}
        {numDots > 0 && (
          <div className="flex justify-center space-x-2 mt-6 lg:hidden">
            {Array.from({ length: numDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to brand section ${index + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  activeDot === index
                    ? "bg-primary" // Active dot only changes color, no scaling
                    : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurBrandsSection;
