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

// Image imports
import calculator from "@/public/BLOGS/HOME/lightcalc.jpg";
import growtips from "@/public/BLOGS/HOME/growtips.jpg";
import ledvshps from "@/public/BLOGS/HOME/ledvshps.jpg";

// Using imported image objects directly
const calculatorImageUrl = calculator;
const growTipsImageUrl = growtips;
const ledVsHpsImageUrl = ledvshps;

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
        <Card className="mb-8 md:mb-12 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="md:grid md:grid-cols-2 items-stretch">
            {/* Clickable Image Section */}
            <Link href="/light-calc" className="block md:col-span-1 group">
              <div className="relative h-full w-full cursor-pointer">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden"
                >
                  <Image
                    src={calculatorImageUrl}
                    alt="Light Calculators for Growing"
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </AspectRatio>
              </div>
            </Link>

            {/* Clickable Text Section & Button */}
            <div className="md:col-span-1 p-6 md:p-8 flex flex-col">
              <Link href="/light-calc" className="block group mb-auto">
                <div className="cursor-pointer">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-semibold text-primary group-hover:text-indigo-600 transition-colors duration-300">
                      Master Your Grow with Light Calculators
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-base lg:text-lg">
                      Optimize your indoor garden's lighting setup. Our
                      calculators help you determine the right intensity,
                      coverage, and energy usage for thriving plants. Achieve
                      precision and efficiency in your cultivation journey.
                    </p>
                  </CardContent>
                </div>
              </Link>
              <CardFooter className="p-0 mt-6">
                <Link href="/light-calc" passHref>
                  <Button asChild size="lg" variant="default">
                    <a>Use Calculators</a>
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
              className="overflow-hidden shadow-lg hover:shadow-xl group transform hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Link wraps Image and Text Content */}
              <Link href={post.slug} className="block flex-grow cursor-pointer">
                <CardHeader className="p-0 relative">
                  <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-t-lg overflow-hidden"
                  >
                    <Image
                      src={post.imageSrc}
                      alt={post.altText}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  {" "}
                  {/* Adjusted: flex-grow is on Link, so this can be simpler */}
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.date}, {post.year}
                  </p>
                  <CardTitle className="text-xl lg:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm lg:text-base line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Link>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Link href={post.slug} passHref>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full md:w-auto"
                  >
                    <a>Read More</a>
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
