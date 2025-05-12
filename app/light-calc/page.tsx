import Image from "next/image";

// Asset imports (ensure these paths are correct for your setup)
import photoimg from "@/public/KALKULATOR/autof.jpg";
import autoimg from "@/public/KALKULATOR/photop.jpg";
import budimg from "@/public/KALKULATOR/budzeleni.jpg";
import purpleimg from "@/public/KALKULATOR/poljetrave.jpg";
import dli from "@/public/KALKULATOR/baskalks/dli.jpg";
import lux from "@/public/KALKULATOR/baskalks/lumens-and-lux.png";
import ppfd from "@/public/KALKULATOR/baskalks/ppfdppf.jpg";
import lumens from "@/public/KALKULATOR/baskalks/lumens.jpg";
// Import the calculator components
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc"; // Assuming this exists and is styled similarly
import GenericLightCalc from "@/components/CALCS/GenericLightCalc";
import ImageSlide from "@/components/CALCS/ImageSlide";

import { PPFDTOLUXFACTORS } from "@/data(fake)/FACTORS";
import { PPFTOLUMENSFACTORS } from "@/data(fake)/FACTORS";
import { LUXTOPPFDFACTORS } from "@/data(fake)/FACTORS";
import { LUMENSTOPPFFACTORS } from "@/data(fake)/FACTORS";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const LightCalc = () => {
  return (
    <div className="bg-slate-50">
      <section>
        <h1 className="relative w-fit tracking-tight text-balance  font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl mt-10  ">
          All Your Growing Light
          <br />
          <span className="bg-green-600 px-2  text-white">Calculators</span> You
          Want in One Place!
        </h1>
        <div className="md:flex  mt-30 ">
          <ImageSlide imageUrls={[autoimg, photoimg]} alt="no image" />
          <p
            className="mt-5 md:mt-30 md:ml-10 
           text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-2xl md:text-wrap xl:mt-30 xl:text-3xl "
          >
            <strong>Firstly</strong> observe chart depending if your plant is{" "}
            <span className="bg-orange-500 px-2 font-semibold text-black">
              photoperiod
            </span>
            (1) or{" "}
            <span className="bg-orange-500 px-2 font-semibold text-black">
              autoflowering
            </span>
            (2) plant and for best results follow its directives.
          </p>
        </div>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 lg:pt-24 xl:pt-32 lg:pb-52">
          {/* DLI Calculator Card */}

          <DliToPpfdCalc />

          {/* PPFD to LUX Card */}
          <div>
            <Image src={dli} alt="dli"></Image>
            <p></p>
          </div>

          <GenericLightCalc
            title="PPFD to LUX"
            inputLabel="PPFD (μmol/s/m²):"
            outputLabel="LUX:"
            inputDefaultValue={100}
            conversionFactors={PPFDTOLUXFACTORS}
            calculationType="ppfd-to-lux"
            outputUnit="lux"
            noteText="Approximate conversion from PPFD to LUX."
          />

          {/* LUX to PPFD Card */}

          <GenericLightCalc
            title="LUX to PPFD"
            inputLabel="LUX:"
            outputLabel="PPFD:"
            inputDefaultValue={5000}
            conversionFactors={LUXTOPPFDFACTORS}
            calculationType="lux-to-ppfd"
            outputUnit="μmol/s/m²"
            noteText="Approximate conversion from LUX to PPFD."
          />

          <Image
            src={budimg}
            alt="Close up of healthy plant leaves under grow light"
            width={600}
            height={200}
            className="rounded-lg shadow-md object-cover w-full max-w-3xl"
          />

          <GenericLightCalc
            title="Lumens to PPF"
            inputLabel="Lumens (lm):"
            outputLabel="PPF:"
            inputDefaultValue={10000}
            conversionFactors={LUMENSTOPPFFACTORS}
            calculationType="lumens-to-ppf"
            outputUnit="μmol/s"
            noteText="Estimates PPF from Lumens. Requires accurate factors!"
          />

          <GenericLightCalc
            title="PPF to Lumens"
            inputLabel="PPF (μmol/s):"
            outputLabel="Lumens:"
            inputDefaultValue={200}
            conversionFactors={PPFTOLUMENSFACTORS}
            calculationType="ppf-to-lumens"
            outputUnit="lm"
            noteText="Estimates Lumens from PPF. Requires accurate factors!"
          />

          <Image
            src={purpleimg}
            alt="Image of a modern LED grow light fixture"
            width={600}
            height={200}
            className="rounded-lg shadow-md object-cover w-full max-w-3xl"
          />
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default LightCalc;
