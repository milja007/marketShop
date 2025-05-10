import { StaticImageData } from "next/image";
import seeds from "@/public/HEADER/seeds.jpeg";
import growbox from "@/public/HEADER/growbox.png";
import lightning from "@/public/HEADER/lights.png";
import ventilation from "@/public/HEADER/vent.png";
import liquidsubstrates from "@/public/HEADER/nutrients.png";
import accessories from "@/public/HEADER/supplies.png";

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

export const MENUDATA: Category[] = [
  {
    src: seeds,
    name: "Seeds",
    slug: "/seeds",
    subcategories: [
      { name: "Sweet Seeds", slug: "/seeds/sweet-seeds" },
      { name: "Royal Queen Seeds", slug: "/seeds/royal-queen-seeds" },
      { name: "Kannabia", slug: "/seeds/kannabia" },
      { name: "T.H.Seeds", slug: "/seeds/th-seeds" },
      { name: "Bulk Seed Bank", slug: "/seeds/bulk-seed-bank" },
      { name: "Sensi Seeds", slug: "/seeds/sensi-seeds" },
      { name: "00 Seeds", slug: "/seeds/00-seeds" },
      { name: "Barney's Farm", slug: "/seeds/barneys-farm" },
      { name: "Dutch Passion", slug: "/seeds/dutch-passion" },
    ],
  },
  {
    src: growbox,
    name: "Growbox",
    slug: "/growbox",
    subcategories: [
      { name: "Pirate Box", slug: "/growbox/pirate-box" },
      { name: "Set Growbox", slug: "/growbox/set-growbox" },
      { name: "Accessories", slug: "/growbox/accessories" },
    ],
  },
  {
    src: lightning,
    name: "Lighting",
    slug: "/lighting",
    subcategories: [
      { name: "LED", slug: "/lighting/led" },
      { name: "Light Kits", slug: "/lighting/light-kits" },
      { name: "Bulbs", slug: "/lighting/bulbs" },
      { name: "Ballast", slug: "/lighting/ballast" },
      { name: "Reflectors", slug: "/lighting/reflectors" },
      { name: "Timer-Relays", slug: "/lighting/timer-relays" },
      { name: "Reflective Sheeting", slug: "/lighting/reflective-sheeting" },
      { name: "Accessories", slug: "/lighting/accessories" },
    ],
  },
  {
    src: ventilation,
    name: "Ventilation",
    slug: "/ventilation",
    subcategories: [
      { name: "Fans", slug: "/ventilation/fans" },
      { name: "Air Cleaning", slug: "/ventilation/air-cleaning" },
      { name: "Ventilation Kits", slug: "/ventilation/ventilation-kits" },
      { name: "Controllers", slug: "/ventilation/controllers" },
      { name: "Air Ducting", slug: "/ventilation/air-ducting" },
      { name: "Ventilation Parts", slug: "/ventilation/ventilation-parts" },
      { name: "Sound Absorbers", slug: "/ventilation/sound-absorbers" },
      { name: "CO2", slug: "/ventilation/co2" },
      { name: "Humidity", slug: "/ventilation/humidity" },
    ],
  },
  {
    src: liquidsubstrates,
    name: "Liquids and Substrates",
    slug: "/liquids-and-substrates",
    subcategories: [
      { name: "Fertilizers", slug: "/liquids-and-substrates/fertilizers" },
      { name: "Soil", slug: "/liquids-and-substrates/soil" },
      { name: "Coco", slug: "/liquids-and-substrates/coco" },
      { name: "pH Adjusters", slug: "/liquids-and-substrates/ph-adjusters" },
      {
        name: "Hydroponic Substrate",
        slug: "/liquids-and-substrates/hydroponic-substrate",
      },
      { name: "Additives", slug: "/liquids-and-substrates/additives" },
    ],
  },

  {
    src: accessories,
    name: "Accessories",
    slug: "/accessories",
    subcategories: [
      { name: "Measuring Tools", slug: "/accessories/measuring-tools" },
      { name: "Heaters", slug: "/accessories/heaters" },
      { name: "Irrigation", slug: "/accessories/irrigation" },
      { name: "Trimmers", slug: "/accessories/trimmers" },
      { name: "Integra", slug: "/accessories/integra" },
      { name: "Equipment", slug: "/accessories/equipment" },
    ],
  },
];
