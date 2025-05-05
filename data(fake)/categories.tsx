interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export const MENUDATA: Category[] = [
  {
    name: "Grow Tents",
    slug: "/grow-tents", // This slug will be used for the main category link
    subcategories: [
      { name: "Budget Tents", slug: "/grow-tents/budget" },
      { name: "Premium Tents", slug: "/grow-tents/premium" },
      { name: "Propagation Tents", slug: "/grow-tents/propagation" },
    ],
  },
  {
    name: "Lighting",
    slug: "/lighting",
    subcategories: [
      { name: "LED Grow Lights", slug: "/lighting/led" },
      { name: "HPS Grow Lights", slug: "/lighting/hps" },
      { name: "Light Reflectors", slug: "/lighting/reflectors" },
      { name: "Ballasts", slug: "/lighting/ballasts" },
    ],
  },
  {
    name: "Ventilation",
    slug: "/ventilation",
    subcategories: [
      { name: "Extractors", slug: "/ventilation/extractors" },
      { name: "Carbon Filters", slug: "/ventilation/filters" },
      { name: "Ducting & Fans", slug: "/ventilation/ducting" },
    ],
  },
  {
    name: "Nutrients",
    slug: "/nutrients",
    subcategories: [],
  },
];
