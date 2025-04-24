import Image from "next/image";

// Asset imports (ensure these paths are correct for your setup)
import autoimg from "@/assets/autof.webp";
import photoimg from "@/assets/photop.webp";
import budimg from "@/assets/wide-sml-purple-punch.jpg";
import purpleimg from "@/assets/shutterstock_1522132451-1.webp";

// Import the calculator components
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc"; // Assuming this exists and is styled similarly
import GenericLightCalc from "@/components/CALCS/GenericLightCalc";
import ImageSlide from "@/components/ImageSlider/ImageSlide";

const ppfdToLuxFactors: { [key: string]: number | null } = {
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

const luxToPpfdFactors: { [key: string]: number | null } = Object.entries(
  ppfdToLuxFactors
).reduce((acc, [key, value]) => {
  acc[key] = value !== null && value !== 0 ? 1 / value : null; // Calculate inverse safely
  return acc;
}, {} as { [key: string]: number | null });

// ***** IMPORTANT ******
// Lumens <> PPF conversion factors are NOT generally the same as LUX <> PPFD factors.
// You MUST provide accurate factors based on the light source's spectrum and total output.
// Using LUX/PPFD factors here is INCORRECT placeholder logic.
// Replace 'null' or the copied values with REAL data for accurate Lumens/PPF conversions.
const lumensToPpfFactors: { [key: string]: number | null } = {
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
const ppfToLumensFactors: { [key: string]: number | null } = Object.entries(
  lumensToPpfFactors
).reduce((acc, [key, value]) => {
  acc[key] = value !== null && value !== 0 ? 1 / value : null;
  return acc;
}, {} as { [key: string]: number | null });

const LightCalc = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* --- Hero Section (Keep as is) --- */}
      <section className="mb-12 sm:mb-16 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
              Grow Light Calculations Made Easy
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              All the tools you need in one place to optimize your plant
              lighting setup.Calculate your light based on autoflower or
              photoperiod(chart).
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <ImageSlide imageUrls={[autoimg, photoimg]} alt="no image" />
          </div>
        </div>
      </section>

      {/* --- Charts Section (Keep as is) --- */}
      <section className="my-16 sm:my-20"></section>

      {/* --- Calculator Sections --- */}
      <section className="my-16 sm:my-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800">
          All Light Conversion Calculators
        </h2>
        {/* Responsive Grid Layout - More Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* DLI Calculator Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            <DliToPpfdCalc /> {/* Assumes this component is also compact */}
            <p className="text-gray-600 text-xs mt-3 flex-grow">
              {/* Smaller text */}
              Calculate Daily Light Integral (DLI) from PPFD and photoperiod...
            </p>
          </div>
          {/* PPFD to LUX Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="PPFD to LUX" // Shorter title
              inputLabel="PPFD (μmol/s/m²):"
              outputLabel="LUX:"
              inputDefaultValue={100}
              conversionFactors={ppfdToLuxFactors}
              calculationType={"ppfd-to-lux"}
              outputUnit="lux"
              noteText="Approximate conversion from PPFD to LUX." // Shorter note
            />
          </div>
          {/* LUX to PPFD Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="LUX to PPFD" // Shorter title
              inputLabel="LUX:"
              outputLabel="PPFD:"
              inputDefaultValue={5000}
              conversionFactors={luxToPpfdFactors}
              calculationType={"lux-to-ppfd"}
              outputUnit="μmol/s/m²"
              noteText="Approximate conversion from LUX to PPFD." // Shorter note
            />
          </div>
          {/* --- Image Break 1 --- */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            {/* Spans grid, adds vertical margin */}
            <Image
              src={budimg} // <<<--- ADD & REPLACE
              alt="Close up of healthy plant leaves under grow light"
              width={600} // Adjust width as needed
              height={200} // Adjust height for a wider/banner feel
              className="rounded-lg shadow-md object-cover w-full max-w-3xl" // Max width helps constrain
            />
          </div>
          {/* Lumens to PPF Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="Lumens to PPF" // Shorter title
              inputLabel="Lumens (lm):"
              outputLabel="PPF:"
              inputDefaultValue={10000}
              conversionFactors={lumensToPpfFactors} // ** NEEDS REAL FACTORS **
              calculationType={"lumens-to-ppf"}
              outputUnit="μmol/s"
              noteText="Estimates PPF from Lumens. Requires accurate factors!" // Shorter note
            />
          </div>
          {/* PPF to Lumens Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="PPF to Lumens" // Shorter title
              inputLabel="PPF (μmol/s):"
              outputLabel="Lumens:"
              inputDefaultValue={200}
              conversionFactors={ppfToLumensFactors} // ** NEEDS REAL FACTORS **
              calculationType={"ppf-to-lumens"}
              outputUnit="lm" // Standard unit for lumens
              noteText="Estimates Lumens from PPF. Requires accurate factors!" // Shorter note
            />
          </div>
          {/* Placeholder for potentially another calculator or leave empty for grid balance */}
          <div className="hidden lg:block"></div>
          {/* This helps align the last row in a 3-column grid if you have 5 items */}
          {/* --- Image Break 2 (Optional) --- */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            {/* Spans grid, adds vertical margin */}
            <Image
              src={purpleimg} // <<<--- ADD & REPLACE
              alt="Image of a modern LED grow light fixture"
              width={600} // Adjust width as needed
              height={200} // Adjust height for a wider/banner feel
              className="rounded-lg shadow-md object-cover w-full max-w-3xl" // Max width helps constrain
            />
          </div>
        </div>{" "}
        {/* End Grid */}
      </section>
    </div> // End main container
  );
};

export default LightCalc;
