"use client";
import { createUser } from "@/server/users"; // Assuming this path is correct
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "@/client/userss"; // Assuming this path is correct
import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Assuming this path is correct
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import hero1 from "@/public/HOME/Hero/hero11.jpg";
import hero2 from "@/public/HOME/Hero/hero2.jpg";
import hero3 from "@/public/HOME/Hero/hero3.jpg";

import shipping from "@/public/HOME/shippping.jpg";
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

import HomePageBlogSection from "@/components/HOME/HomePageBlogSection";
import OurBrandsSection from "@/components/HOME/OurBrandsSection";

interface dataType {
  id: number;
  name: string;
}

export default function Home() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getUsers,
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("Mutation successful:", data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const commonButtonClasses = // This is for hero buttons, CardHome has its own
    "self-start bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 sm:py-2 sm:px-5 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 text-sm sm:text-base";

  const heroCardData = [
    // Renamed from cardData to avoid conflict
    {
      id: "hero1",
      title: "Grow Lights",
      src: hero1,
      alt: "Grow lights illuminating plants",
      priority: true,
      aspectRatio: "aspect-video lg:aspect-[4/5]",
    },
    {
      id: "hero2",
      title: "Grow Tents",
      src: hero2,
      alt: "Inside of a grow tent with plants",
      priority: false,
      aspectRatio: "aspect-video",
    },
    {
      id: "hero3",
      title: "Grow Kits",
      src: hero3,
      alt: "A complete grow kit with various components",
      priority: false,
      aspectRatio: "aspect-video",
    },
  ];

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
          The Best Growing{" "}
          <span className="block sm:inline bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 sm:py-1 rounded-lg shadow-lg mt-2 sm:mt-0 mx-1">
            Equipment
          </span>{" "}
          <br className="hidden sm:block lg:hidden" />
          in One Place!
        </h1>
      </section>
      {/* Hero Images Section (Constrained Width) */}
      <MaxWidthWrapper className="pt-10 lg:pt-12 xl:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Column 1: Main Hero Image */}
          <div
            className={`rounded-xl shadow-xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 transition-all duration-300 overflow-hidden relative group ${heroCardData[0].aspectRatio}`}
          >
            // Old way in your Home.tsx for hero images // Corrected way for
            Home.tsx hero images
            <Image
              src={heroCardData[0].src}
              alt={heroCardData[0].alt}
              fill={true} // This is correct
              className="transform group-hover:scale-105 transition-transform duration-300 object-cover" // Added object-cover here
              priority={heroCardData[0].priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add appropriate sizes prop when using fill={true} for performance
            />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/85 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight mb-3 sm:mb-4">
                {heroCardData[0].title}
              </h2>
              <button
                onClick={() => alert(`View More: ${heroCardData[0].title}`)}
                className={commonButtonClasses}
              >
                View More
              </button>
            </div>
          </div>
          {/* Column 2: Secondary Hero Images */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {[heroCardData[1], heroCardData[2]].map((card) => (
              <div
                key={card.id}
                className={`rounded-xl shadow-xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 transition-all duration-300 overflow-hidden relative group ${card.aspectRatio}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill={true}
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                  priority={card.priority}
                />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/85 transition-colors duration-300">
                  <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg leading-tight mb-2 sm:mb-3">
                    {card.title}
                  </h2>
                  <button
                    onClick={() => alert(`View More: ${card.title}`)}
                    className={commonButtonClasses}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Product Cards Section */}
      <MaxWidthWrapper className="py-12 lg:py-16">
        <div className="flex justify-between items-center mb-6 md:mb-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsData.map((product) => (
            <CardHome
              key={product.id}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              brand={product.brand}
              title={product.title}
              features={product.features}
              price={product.price}
              oldPrice={product.oldPrice}
              href={product.href}
              buttonText="Add to Cart"
              showQuantitySelector={true}
              initialQuantity={3} // Starts with quantity 3
              onAddToCart={(quantity, event) => {
                console.log(`Add ${quantity} to cart!`);
              }}
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
        className="mt-12 sm:mt-16 w-full py-8 sm:py-12 bg-white border-y border-gray-200"
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
                  <Image
                    src={item.icon}
                    alt=""
                    width={36}
                    height={36}
                    aria-hidden="true"
                  />
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

      {/* Pass the path to your shipping image */}
      {/* Or if using imported static image: <ServiceAndRangeSection shippingImageSrc={shippingImageStatic} /> */}
      {/* User creation button and list section (Constrained Width) */}
      <HomePageBlogSection />
      <OurBrandsSection />
      <MaxWidthWrapper className="mt-12 sm:mt-16 pb-24 sm:pb-32">
        <div className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg mb-6 disabled:opacity-50"
            onClick={() => {
              const newUserName = `User ${Date.now().toString().slice(-5)}`;
              mutation.mutate({ id: Date.now(), name: newUserName });
            }}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating User..." : "Create User (Demo)"}
          </button>
          {/* ... (rest of user list rendering) ... */}
          <div className="space-y-3 max-w-md mx-auto">
            {query.isLoading && (
              <div className="text-gray-600">Loading users...</div>
            )}
            {query.isError && (
              <div className="text-red-600">
                Error loading users. Please try again.
              </div>
            )}
            {query.data?.length === 0 && !query.isLoading && (
              <div className="text-gray-500">No users found.</div>
            )}
            {query.data?.map((user: dataType) => (
              <div
                key={user.id}
                className="p-4 bg-white rounded-lg shadow text-gray-700 border border-gray-200"
              >
                {user.name} (ID: {user.id})
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
