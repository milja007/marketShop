// components/HOME/ServiceAndRangeSection.tsx (or your correct path)
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/HOME/button"; // CORRECTED IMPORT PATH (assuming standard Shadcn UI location)
import {
  Truck,
  ShieldCheck,
  PackageCheck,
  Star,
  BadgePercent,
  LayoutGrid,
} from "lucide-react";

interface ServiceAndRangeSectionProps {
  shippingImageSrc: string | StaticImageData;
}

export function ServiceAndRangeSection({
  shippingImageSrc,
}: ServiceAndRangeSectionProps) {
  const servicePoints = [
    {
      icon: <Truck className="h-6 w-6 text-primary flex-shrink-0" />,
      text: "Shipped within 48 Hours",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />,
      text: "Delivered discreetly & securely",
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-primary flex-shrink-0" />,
      text: "Free shipping from €150,-",
    },
  ];

  const productPoints = [
    {
      icon: <Star className="h-6 w-6 text-amber-500 flex-shrink-0" />,
      text: "Alleen de beste producten",
    },
    {
      icon: <BadgePercent className="h-6 w-6 text-amber-500 flex-shrink-0" />,
      text: "De beste prijs",
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-amber-500 flex-shrink-0" />,
      text: "Uitgebreid assortiment",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Service & Support Section */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl shadow-xl flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Service & Support
            </h2>
            <div className="flex-grow">
              <div className="md:flex md:space-x-6 items-center">
                <div className="mb-6 md:mb-0 md:w-1/3 md:flex-shrink-0 flex justify-center md:justify-start">
                  <Image
                    src={shippingImageSrc}
                    alt="Shipping & Support Services"
                    width={180}
                    height={180}
                    className="rounded-lg object-contain max-h-44"
                  />
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 md:w-2/3">
                  {servicePoints.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mt-1">{item.icon}</span>
                      <span className="ml-3 text-base md:text-lg">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center md:text-left">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                <Link href="/categories">View all categories</Link>
              </Button>
            </div>
          </div>

          {/* Our Product Range Section */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl shadow-xl flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Our Product Range
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8 flex-grow">
              {productPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1">{item.icon}</span>
                  <span className="ml-3 text-base md:text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 text-center md:text-left">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10 dark:hover:text-primary-foreground px-8 py-3"
              >
                <Link href="/products">
                  See all products from grow-dutch.com
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
