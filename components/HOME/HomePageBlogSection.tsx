import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/CARDS/card";
import { Button } from "@/components/HOME/button"; // Your Button component
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Image imports
import calculator from "@/public/BLOGS/HOME/lightcalc.jpg";
import growtips from "@/public/BLOGS/HOME/growtips.jpg";
import ledvshps from "@/public/BLOGS/HOME/ledvshps.jpg";
import commonm from "@/public/BLOGS/HOME/commonmistakes.jpg";

// --- USER ACTION: Import your new image for common mistakes here ---
// import commonMistakesImage from "@/public/BLOGS/HOME/your-common-mistakes-image.jpg";

// Using imported image objects directly
const calculatorImageUrl = calculator;
const growTipsImageUrl = growtips;
const ledVsHpsImageUrl = ledvshps;
// --- USER ACTION: Assign your imported image to this constant ---
const commonMistakesImagePlaceholder = commonm; // Replace "" with commonMistakesImage after import

// Simplified PostData interface
interface PostData {
  slug: string;
  imageSrc: StaticImageData | string;
  altText: string;
  title: string;
  description: string;
  type: "calculator" | "blog";
  date?: string;
  year?: number;
}

const HomePageBlogSection = () => {
  const currentDate = new Date(); // Current date: May 17, 2025
  const currentYear = currentDate.getFullYear(); // 2025
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  }); // e.g., "May 17"

  const allPosts: PostData[] = [
    {
      type: "calculator",
      slug: "/light-calc",
      imageSrc: calculatorImageUrl,
      altText: "Light Calculators for Growing",
      title: "Master Your Grow with Light Calculators",
      description:
        "Optimize your indoor garden's lighting setup. Our calculators help you determine the right intensity, coverage, and energy usage for thriving plants.",
    },
    {
      type: "blog",
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
      type: "blog",
      slug: "/led-vs-hps-comparison",
      imageSrc: ledVsHpsImageUrl,
      altText: "LED vs HPS lights comparison",
      date: formattedDate,
      year: currentYear,
      title: "LED vs HPS: Which Light is Right for Your Grow?",
      description:
        "A deep dive into the pros and cons of LED and HPS lighting for indoor cultivation.",
    },
    {
      type: "blog",
      slug: "/common-led-growing-mistakes",
      imageSrc: commonMistakesImagePlaceholder, // --- USER ACTION: Use your imported image variable
      altText: "Common mistakes to avoid when growing with LED lights",
      date: formattedDate,
      year: currentYear,
      title: "Common Mistakes for Growing with LED Lights",
      description:
        "Learn about frequent errors growers make with LED lights and how to prevent them for a successful harvest.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Our Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allPosts.map((post) => {
            const isCalculator = post.type === "calculator";

            // Determine button properties based on post type
            const buttonText = isCalculator ? "Use Calculators" : "Read More";
            const buttonVariant = isCalculator ? "default" : "outline"; // Valid variants
            const buttonSize = isCalculator ? "lg" : "default"; // Valid sizes
            const buttonClassName = isCalculator
              ? undefined
              : "w-full md:w-auto";

            return (
              <Card
                key={post.slug}
                className="overflow-hidden shadow-lg hover:shadow-xl group transform hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <Link
                  href={post.slug}
                  className="block flex-grow cursor-pointer"
                >
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
                    {post.date && post.year && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {post.date}, {post.year}
                      </p>
                    )}
                    <CardTitle className="text-xl lg:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm lg:text-base line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                </Link>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button
                    asChild
                    variant={buttonVariant}
                    size={buttonSize}
                    className={buttonClassName}
                  >
                    <Link href={post.slug}>{buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogSection;
