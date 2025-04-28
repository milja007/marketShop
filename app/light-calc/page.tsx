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
      {/* --- Hero Section --- */}
      <section className="mb-12 sm:mb-16 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Grow Light Calculations Made Easy
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              All the tools you need in one place to optimize your plant
              lighting setup. Calculate your light based on autoflower or
              photoperiod (chart).
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <ImageSlide imageUrls={[autoimg, photoimg]} alt="no image" />
          </div>
        </div>
      </section>

      {/* --- Charts Section --- */}
      <section className="my-16 sm:my-20"></section>

      {/* --- Calculator Section --- */}
      <section className="my-16 sm:my-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-100">
          All Light Conversion Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* DLI Calculator Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col max-w-sm mx-auto w-full">
            <DliToPpfdCalc />
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-3 flex-grow">
              Calculate Daily Light Integral (DLI) from PPFD and photoperiod...
            </p>
          </div>

          {/* PPFD to LUX Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="PPFD to LUX"
              inputLabel="PPFD (μmol/s/m²):"
              outputLabel="LUX:"
              inputDefaultValue={100}
              conversionFactors={ppfdToLuxFactors}
              calculationType="ppfd-to-lux"
              outputUnit="lux"
              noteText="Approximate conversion from PPFD to LUX."
            />
          </div>

          {/* LUX to PPFD Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="LUX to PPFD"
              inputLabel="LUX:"
              outputLabel="PPFD:"
              inputDefaultValue={5000}
              conversionFactors={luxToPpfdFactors}
              calculationType="lux-to-ppfd"
              outputUnit="μmol/s/m²"
              noteText="Approximate conversion from LUX to PPFD."
            />
          </div>

          {/* Image Break 1 */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            <Image
              src={budimg}
              alt="Close up of healthy plant leaves under grow light"
              width={600}
              height={200}
              className="rounded-lg shadow-md object-cover w-full max-w-3xl"
            />
          </div>

          {/* Lumens to PPF Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="Lumens to PPF"
              inputLabel="Lumens (lm):"
              outputLabel="PPF:"
              inputDefaultValue={10000}
              conversionFactors={lumensToPpfFactors}
              calculationType="lumens-to-ppf"
              outputUnit="μmol/s"
              noteText="Estimates PPF from Lumens. Requires accurate factors!"
            />
          </div>

          {/* PPF to Lumens Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col max-w-sm mx-auto w-full">
            <GenericLightCalc
              title="PPF to Lumens"
              inputLabel="PPF (μmol/s):"
              outputLabel="Lumens:"
              inputDefaultValue={200}
              conversionFactors={ppfToLumensFactors}
              calculationType="ppf-to-lumens"
              outputUnit="lm"
              noteText="Estimates Lumens from PPF. Requires accurate factors!"
            />
          </div>

          {/* Empty slot to balance grid */}
          <div className="hidden lg:block"></div>

          {/* Image Break 2 */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            <Image
              src={purpleimg}
              alt="Image of a modern LED grow light fixture"
              width={600}
              height={200}
              className="rounded-lg shadow-md object-cover w-full max-w-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightCalc;
