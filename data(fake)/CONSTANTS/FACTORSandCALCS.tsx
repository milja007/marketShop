import dliImg from "@/public/KALKULATOR/baskalks/dli.jpg";
import luxImg from "@/public/KALKULATOR/baskalks/lumens-and-lux.png";
import ppfdImg from "@/public/KALKULATOR/baskalks/ppfdppf.jpg";
import lumensImg from "@/public/KALKULATOR/baskalks/lumens.jpg";
import ppfImg from "@/public/KALKULATOR/baskalks/ppf.jpg";

export const PPFDTOLUXFACTORS: { [key: string]: number | null } = {
  "Natural Daylight 6500K": 43.478261,
  "Halogen Lamp 3000K": 28.913615,
  "High CRI LED 6500K": 5.802603,
  "High CRI LED 4000K": 5.6108597,
  "High CRI LED 3000K": 5.2555701,
  "Low CRI LED 6500K": 7.4588939,
  "Low CRI LED 3500K": 6.235595,
  "HPS 2000K": 7.7079295,
  "CMH 3000K": 5.5092988,
  "Fluorescent Lamp 5000K": 74.112821,
  "Monochromatic Red LED 650 nm": 13.012295,
  "Monochromatic Blue LED 450 nm": 8.654105,
  "Red + Blue LED 450+650 nm": 11.270037,
  "Red + Blue + White LED 450+650nm+3500K": 38.926554,
};

export const LUXTOPPFDFACTORS: { [key: string]: number | null } =
  Object.entries(PPFDTOLUXFACTORS).reduce((acc, [key, value]) => {
    acc[key] = value !== null && value !== 0 ? 1 / value : null;
    return acc;
  }, {} as { [key: string]: number | null });

export const LUMENSTOPPFFACTORS: { [key: string]: number | null } = {
  "Natural Daylight 6500K": 0.02300000043701883,
  "Halogen Lamp 3000K": 0.03458599986579914,
  "High CRI LED 6500K": 0.1723399979665701,
  "High CRI LED 4000K": 0.17822599811049015,
  "High CRI LED 3000K": 0.190274001594326,
  "Low CRI LED 6500K": 0.1340680023330297,
  "Low CRI LED 3500K": 0.1603699983991606,
  "HPS 2000K": 0.1297390024004368,
  "CMH 3000K": 0.18150999782222615,
  "Fluorescent Lamp 5000K": 0.0134929998718511,
  "Monochromatic Red LED 650 nm": 0.0768500030891457,
  "Monochromatic Blue LED 450 nm": 0.115549996929561,
  "Red + Blue LED 450+650 nm": 0.088729997596156,
  "Red + Blue + White LED 450+650nm+3500K": 0.0256899995196353,
};

// Calculate inverse for PPF to Lumens (Lumens per PPF)
export const PPFTOLUMENSFACTORS: { [key: string]: number | null } =
  Object.entries(LUMENSTOPPFFACTORS).reduce((acc, [key, value]) => {
    acc[key] = value !== null && value !== 0 ? 1 / value : null;
    return acc;
  }, {} as { [key: string]: number | null });

export const CALCULATORSECTIONS = [
  {
    id: "dli-to-ppfd",
    type: "DLI",
    imageSrc: dliImg,
    imageAlt: "DLI chart representation",
    description:
      "Once you've identified your target DLI from plant-specific charts (photoperiod or autoflower), use this calculator. It helps determine the necessary PPFD your lights need to output over the specified photoperiod (hours of light) to hit that DLI target, ensuring optimal light exposure.",
  },
  {
    id: "ppfd-to-lux",
    type: "GENERIC",
    imageSrc: ppfdImg,
    imageAlt: "PPFD to LUX conversion concept",
    description:
      "This calculator converts PPFD (μmol/s/m²), the measure of light intensity relevant to plant photosynthesis, to LUX, which measures brightness as perceived by the human eye. The conversion is an approximation and varies by light source spectrum. Useful if your light meter only reads LUX.",
    calcProps: {
      title: "PPFD to LUX",
      inputLabel: "PPFD (μmol/s/m²):",
      outputLabel: "LUX:",
      inputDefaultValue: 100,
      conversionFactors: PPFDTOLUXFACTORS,
      calculationType: "ppfd-to-lux" as const,
      outputUnit: "lux",
      noteText: "Approximate conversion from PPFD to LUX.",
    },
  },
  {
    id: "lux-to-ppfd",
    type: "GENERIC",
    imageSrc: luxImg,
    imageAlt: "LUX to PPFD conversion concept",
    description:
      "If you have a LUX meter, use this tool to estimate the PPFD your plants are receiving. This is an approximate conversion because LUX doesn't directly measure photosynthetically active radiation. For accurate PPFD, refer to manufacturer specs or use a PAR meter.",
    calcProps: {
      title: "LUX to PPFD",
      inputLabel: "LUX:",
      outputLabel: "PPFD:",
      inputDefaultValue: 5000,
      conversionFactors: LUXTOPPFDFACTORS,
      calculationType: "lux-to-ppfd" as const,
      outputUnit: "μmol/s/m²",
      noteText: "Approximate conversion from LUX to PPFD.",
    },
  },
  {
    id: "lumens-to-ppf",
    type: "GENERIC",
    imageSrc: lumensImg,
    imageAlt: "Lumens to PPF conversion concept",
    description:
      "Convert total light output in Lumens (visible brightness to humans) to PPF (μmol/s), which is the total photosynthetic light emitted by a source per second. This estimation is heavily dependent on the light source type (e.g., LED, HPS) and its specific spectrum.",
    calcProps: {
      title: "Lumens to PPF",
      inputLabel: "Lumens (lm):",
      outputLabel: "PPF:",
      inputDefaultValue: 10000,
      conversionFactors: LUMENSTOPPFFACTORS,
      calculationType: "lumens-to-ppf" as const,
      outputUnit: "μmol/s",
      noteText: "Estimates PPF from Lumens",
    },
  },
  {
    id: "ppf-to-lumens",
    type: "GENERIC",
    imageSrc: ppfImg,
    imageAlt: "PPF to Lumens conversion concept",
    description:
      "Estimate the total human-visible brightness (Lumens) from a known PPF value. This can be helpful for comparing the perceived brightness of different grow lights if their PPF is specified. Accuracy depends on the light's spectrum and the chosen conversion factor.",
    calcProps: {
      title: "PPF to Lumens",
      inputLabel: "PPF (μmol/s):",
      outputLabel: "Lumens:",
      inputDefaultValue: 200,
      conversionFactors: PPFTOLUMENSFACTORS,
      calculationType: "ppf-to-lumens" as const,
      outputUnit: "lm",
      noteText: "Estimates Lumens from PPF",
    },
  },
];
