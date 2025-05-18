// components/CategoryGrid.tsx
import { MENUDATA } from "@/data(fake)/CONSTANTS/CATEGORIES";
import { CategoryCardItem } from "./CategoryCardItem";

export function CategoryGrid() {
  const categories = MENUDATA; // In a real app, this might come from props or an API

  return (
    <section className="py-8 md:py-12 bg-slate-100 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-center sm:text-3xl md:mb-12">
          All categories
        </h2>
        {categories.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {categories.map((category) => (
              <CategoryCardItem key={category.slug} category={category} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No categories found.
          </p>
        )}
      </div>
    </section>
  );
}
