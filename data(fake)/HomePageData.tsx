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

export const uspData = [
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

export const productsData = [
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
