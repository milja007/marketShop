// components/CategoryCardItem.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/CARDS/card"; // Adjust path if your ui alias is different
// Assuming your types are in @/types
interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  src: StaticImageData;
  name: string;
  slug: string;
  subcategories: Subcategory[];
}
interface CategoryCardItemProps {
  category: Category;
}

export function CategoryCardItem({ category }: CategoryCardItemProps) {
  return (
    <Link
      href={category.slug}
      passHref
      className="group block outline-none"
      aria-label={`View ${category.name}`}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {/* Ensure category.src is a valid path to an image in /public or a remote URL */}
          <Image
            src={category.src}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, (max-width: 1280px) 18vw, 15vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          {" "}
          {/* Reduced padding for a tighter look if desired */}
          <CardTitle className="text-center text-base sm:text-lg font-medium group-hover:text-primary transition-colors">
            {category.name}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
