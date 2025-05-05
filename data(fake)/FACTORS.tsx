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
    acc[key] = value !== null && value !== 0 ? 1 / value : null; // Calculate inverse safely
    return acc;
  }, {} as { [key: string]: number | null });

// ***** IMPORTANT ******
// Lumens <> PPF conversion factors are NOT generally the same as LUX <> PPFD factors.
// You MUST provide accurate factors based on the light source's spectrum and total output.
// Using LUX/PPFD factors here is INCORRECT placeholder logic.
// Replace 'null' or the copied values with REAL data for accurate Lumens/PPF conversions.
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
