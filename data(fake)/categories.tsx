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
    name: "Growbox",
    slug: "/growbox",
    subcategories: [
      { name: "Pirate Box", slug: "/growbox/pirate-box" },
      { name: "Set Growbox", slug: "/growbox/set-growbox" },
      { name: "Accessories", slug: "/growbox/accessories" },
    ],
  },
  {
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
    name: "Hydroponic",
    slug: "/hydroponic",
    subcategories: [
      { name: "Aeroponic", slug: "/hydroponic/aeroponic" },
      { name: "Propagators", slug: "/hydroponic/propagators" },
      {
        name: "Recirculating System",
        slug: "/hydroponic/recirculating-system",
      },
      { name: "EBB & Flood", slug: "/hydroponic/ebb-and-flood" },
      { name: "NFT System", slug: "/hydroponic/nft-system" },
      { name: "DWC System", slug: "/hydroponic/dwc-system" },
      { name: "Autopot", slug: "/hydroponic/autopot" },
    ],
  },
  {
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
  {
    name: "Pots",
    slug: "/pots",
    subcategories: [
      { name: "Pots", slug: "/pots/pots" },
      { name: "Pot Saucers", slug: "/pots/pot-saucers" },
      { name: "Trays", slug: "/pots/trays" },
    ],
  },
  {
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
      { name: "Paradise Seeds", slug: "/seeds/paradise-seeds" },
      { name: "Victory Seeds", slug: "/seeds/victory-seeds" },
      { name: "Anaconda Seeds", slug: "/seeds/anaconda-seeds" },
      { name: "Silent Seeds", slug: "/seeds/silent-seeds" },
      { name: "Delicious Seeds", slug: "/seeds/delicious-seeds" },
      { name: "World of Seeds", slug: "/seeds/world-of-seeds" },
      { name: "Fast Buds", slug: "/seeds/fast-buds" },
      { name: "Ripper Seeds", slug: "/seeds/ripper-seeds" },
    ],
  },
];
