// src/components/OurBrandsSection.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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

// --- USER ACTION REQUIRED ---
// IMPORTANT: Update name, altText, and slug for each brand below to be accurate.
const brandsData: Brand[] = [
  {
    id: "barneys-farm",
    name: "Barney's Farm", // Example: Update if different
    logoSrc: barneyFarm,
    altText: "Barney's Farm Logo", // Example: Update
    slug: "/brands/barneys-farm", // Example: Update
  },
  {
    id: "advanced-nutrients",
    name: "Advanced Nutrients", // Example
    logoSrc: advancedN,
    altText: "Advanced Nutrients Logo", // Example
    slug: "/brands/advanced-nutrients", // Example
  },
  {
    id: "avtny",
    name: "Avtny", // Example
    logoSrc: avtny,
    altText: "Avtny Logo", // Example
    slug: "/brands/avtny-brand", // Example
  },
  {
    id: "canna",
    name: "Canna", // Example
    logoSrc: canna,
    altText: "Canna Logo", // Example
    slug: "/brands/canna-official", // Example
  },
  {
    id: "fastbuds",
    name: "Fast Buds", // Example
    logoSrc: fastbuds,
    altText: "Fast Buds Logo", // Example
    slug: "/brands/fast-buds", // Example
  },
  {
    id: "bulkseed",
    name: "Bulk Seed Bank", // Example
    logoSrc: bulkseed,
    altText: "Bulk Seed Bank Logo", // Example
    slug: "/brands/bulk-seed-bank", // Example
  },
  {
    id: "dutchfarm",
    name: "Dutch Passion", // Assuming based on common logo style; please verify actual brand name
    logoSrc: dutchfarm,
    altText: "Dutch Passion Logo", // Example
    slug: "/brands/dutch-passion", // Example
  },
  {
    id: "marshydro",
    name: "Mars Hydro", // Example
    logoSrc: marshydro,
    altText: "Mars Hydro Logo", // Example
    slug: "/brands/mars-hydro-led", // Example
  },
  {
    id: "primaklima",
    name: "Prima Klima", // Example
    logoSrc: primaklima,
    altText: "Prima Klima Logo", // Example
    slug: "/brands/prima-klima-ventilation", // Example
  },
  {
    id: "spiderfarmer",
    name: "Spider Farmer", // Example
    logoSrc: spiderfarmer,
    altText: "Spider Farmer Logo", // Example
    slug: "/brands/spider-farmer-leds", // Example
  },
];

const OurBrandsSection = () => {
  const validBrands = brandsData.filter(
    (brand) => brand.logoSrc && typeof brand.logoSrc === "object"
  ); // Check if logoSrc is an imported image object

  if (validBrands.length === 0 && process.env.NODE_ENV === "development") {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Our Featured Brands
          </h2>
          <p className="text-muted-foreground">
            Brand logos are not configured yet or an error occurred loading
            images. Please update <code>OurBrandsSection.tsx</code>.
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
        {/* Updated grid for smaller cells: more columns, slightly smaller gaps */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6 lg:gap-4 items-center">
          {validBrands.map((brand) => (
            <Link key={brand.id} href={brand.slug}>
              <div className="p-2 bg-card rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group aspect-square flex items-center justify-center cursor-pointer transform hover:-translate-y-1">
                {/* Image container now takes full space of its parent (the aspect-square cell, minus padding) */}
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.altText}
                    fill
                    // Updated sizes prop based on new grid column counts
                    sizes="(max-width: 639px) 30vw, (max-width: 767px) 22vw, (max-width: 1023px) 18vw, 15vw"
                    className="object-contain group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrandsSection;
