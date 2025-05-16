// src/components/HomePageBlogSection.tsx

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/CARDS/card";
import { Button } from "@/components/HOME/button"; // Adjust path if necessary
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Adjust path if necessary

// Placeholder images - replace with your actual image imports or paths
// import calculatorImage from 'path/to/your/calculator-image.jpg';
// import growTipsImage from 'path/to/your/grow-tips-image.jpg';
// import ledVsHpsImage from 'path/to/your/led-vs-hps-image.jpg';

// Using simple string paths for placeholders, assuming they are in public folder
const calculatorImageUrl = "/images/placeholder-calculator.jpg"; // Replace with your actual image
const growTipsImageUrl = "/images/placeholder-grow-tips.jpg"; // Replace with your actual image
const ledVsHpsImageUrl = "/images/placeholder-led-hps.jpg"; // Replace with your actual image

const HomePageBlogSection = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const blogPosts = [
    {
      slug: "/grow-tips-led-lights",
      imageSrc: growTipsImageUrl,
      altText: "Grow tips for using LED lights",
      date: formattedDate,
      year: currentYear,
      title: "Grow Tips for Using LED Lights",
      description:
        "Unlock the full potential of your LED grow lights with these expert tips and techniques.",
    },
    {
      slug: "/led-vs-hps-comparison",
      imageSrc: ledVsHpsImageUrl,
      altText: "LED vs HPS lights comparison",
      date: formattedDate,
      year: currentYear,
      title: "LED vs HPS: Which Light is Right for Your Grow?",
      description:
        "A deep dive into the pros and cons of LED and HPS lighting for indoor cultivation.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Our Blogs
        </h2>

        {/* Top Section: Light Calculators */}
        <Card className="mb-8 md:mb-12 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="md:grid md:grid-cols-2 items-center">
            <div className="md:col-span-1">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={calculatorImageUrl}
                  alt="Light Calculators for Growing"
                  fill
                  className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </AspectRatio>
            </div>
            <div className="md:col-span-1 p-6 md:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl lg:text-3xl font-semibold text-primary">
                  Master Your Grow with Light Calculators
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mb-6">
                <p className="text-muted-foreground text-base lg:text-lg">
                  Optimize your indoor garden's lighting setup. Our calculators
                  help you determine the right intensity, coverage, and energy
                  usage for thriving plants. Achieve precision and efficiency in
                  your cultivation journey.
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <Link href="/light-calc" passHref legacyBehavior>
                  <Button size="lg" variant="default">
                    Use Calculators
                    {/* Optional: Add an icon here */}
                    {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </div>
        </Card>

        {/* Bottom Section: Two Other Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <Image
                    src={post.imageSrc}
                    alt={post.altText}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date}, {post.year}
                </p>
                <CardTitle className="text-xl lg:text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground text-sm lg:text-base line-clamp-3">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={post.slug} passHref legacyBehavior>
                  <Button variant="outline" className="w-full md:w-auto">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogSection;

// Optional: If you want to add an arrow icon to buttons, you might need an icon library like lucide-react
// import { ArrowRight } from 'lucide-react';
