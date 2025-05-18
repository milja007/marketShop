// components/GrowInfoSection.tsx
import TitleBadge from "../SPAN/TitleBadge";
import WordBadge from "../SPAN/WordBadge";
import HomePageBlogSection from "../HOME/HomePageBlogSection";
import InfoBlock from "../SPAN/InfoBlock";

// TitleBadge component (using the green gradient as per previous update)

// WordBadge component (using black background, white text as per previous update)

export function GrowInfoSection() {
  return (
    <section className="py-8 md:py-16 bg-slate-100 dark:bg-slate-800">
      {/*
        The 'container' class applies responsive max-widths.
        'mx-auto' centers it. 'px-4' provides horizontal padding.
        By removing 'max-w-4xl', the content area will now expand to the
        container's default larger widths on lg screens and up.
      */}
      <div className="container mx-auto px-4">
        {" "}
        {/* REMOVED max-w-4xl */}
        <InfoBlock
          title={
            <>
              Growshop <TitleBadge>Online</TitleBadge>
            </>
          }
        >
          <p>
            Growshops are a <WordBadge>great way</WordBadge> for gardeners and
            growers to obtain the <WordBadge>necessary supplies</WordBadge> to
            cultivate their plants. <WordBadge>Boki-Grow.com</WordBadge> is an
            excellent example of a <WordBadge>professional growshop</WordBadge>{" "}
            which provides quality grow supplies at competitive prices.
            Boki-Grow.com offers fertilizer, nutrients, lights, tents, and other
            components needed for <WordBadge>indoor gardening</WordBadge>, as
            well as outdoor gardening solutions like hydroponics systems, pumps
            and filters. Not only can you buy the{" "}
            <WordBadge>fully assembled systems</WordBadge> from Boki-Grow.com
            but you can also find all the{" "}
            <WordBadge>replacement parts</WordBadge> you&apos;d need in order to
            keep your growing system in top condition. Boki-Grow.com’s offerings
            go beyond just providing quality items, they give their customers
            access to <WordBadge>experts</WordBadge> who can provide advice on
            how to best care for their garden or trust Boki-Grow.com to set up a
            complete <WordBadge>customized system</WordBadge> for them based on
            their individual needs and requirements!
          </p>
        </InfoBlock>
        <InfoBlock
          title={
            <>
              <TitleBadge>LED</TitleBadge> Grow Lights
            </>
          }
        >
          <p>
            Led grow lights offer gardeners the chance to produce{" "}
            <WordBadge>healthier, larger plants</WordBadge> and{" "}
            <WordBadge>bigger yields</WordBadge> regardless of season or
            climate. Whether you’re cultivating an indoor garden, a hydroponics
            system, or simply don’t have enough natural light, led grow lights
            from <WordBadge>Boki-Grow.com</WordBadge> can take your garden to
            the next level. All led grow lights are specifically designed for{" "}
            <WordBadge>photosynthesis</WordBadge> and come with{" "}
            <WordBadge>adjustable time settings</WordBadge>, ensuring stability
            and precision throughout your plant’s cycle. Used in conjunction
            with natural natural UV light sources such as sunlight, led lights
            provide a <WordBadge>more efficient supplement</WordBadge> than
            traditional bulbs while keeping{" "}
            <WordBadge>energy consumption low</WordBadge>. Add led grow lights
            to your garden today and <WordBadge>unlock the power</WordBadge> of
            artificial lighting!
          </p>
          <HomePageBlogSection />
        </InfoBlock>
        <InfoBlock
          title={
            <>
              Grow <TitleBadge>Tents</TitleBadge>
            </>
          }
        >
          <p>
            Grow tents offer a great way to create an{" "}
            <WordBadge>ideal indoor garden</WordBadge> environment all year
            long. Regardless of the size, shape or needs of your growing
            project, you&apos;ll find a <WordBadge>large variety</WordBadge> of
            grow tents for any space and budget in the market. Growtents come in
            numerous sizes, from small 2ft X 2ft Grow Tents perfect for{" "}
            <WordBadge>propagation</WordBadge> to larger 8ft X 4ft Grow Tents
            that are suitable for <WordBadge>full scale projects</WordBadge>;
            with Grow Tent brands like Homebox Ambient Grow Tents, Homelab Grow
            Tents and Grow Boxes or <WordBadge>Mammoth Grow Tents</WordBadge> to
            choose from. Clients looking for something sturdier have options
            such as Spider Farmer Grow Tents, Mars Hydro Grow Tents or{" "}
            <WordBadge>Gorilla Grow tents</WordBadge>. Whatever grow tent you
            choose, it will help maintain{" "}
            <WordBadge>optimal temperature</WordBadge> and humidity levels
            throughout your indoor garden - providing{" "}
            <WordBadge>higher yields</WordBadge> and healthier plants with more
            uniform growth!
          </p>
        </InfoBlock>
        <InfoBlock
          title={
            <>
              Grow Tent <TitleBadge>Kits</TitleBadge>
            </>
          }
        >
          <p>
            If you are looking to <WordBadge>grow your own food</WordBadge>{" "}
            indoors, <WordBadge>Boki-Grow.com</WordBadge> has everything you
            need with <WordBadge>grow tent kits</WordBadge> to create an indoor
            garden. With Growtent grow tent sets, it is easy to keep your plants{" "}
            <WordBadge>healthy and thriving</WordBadge> in the comfort of your
            own home. With a <WordBadge>complete grow set</WordBadge> that
            includes ventilation units, fans and grow light accessories, what
            you get is a <WordBadge>professionally-maintained</WordBadge> grow
            environment for your plants all year round. All the necessary
            components from <WordBadge>grow lights, fans</WordBadge> and even a
            timer are included in this grow tent set to help reach{" "}
            <WordBadge>maximum growing potential</WordBadge>. Create an indoor
            garden today and make sure that it remains under the perfect
            conditions for <WordBadge>optimal yield</WordBadge> with grow tent
            kits from Boki-Grow.com.
          </p>
        </InfoBlock>
        <InfoBlock
          title={
            <>
              <TitleBadge>Extraction</TitleBadge> & Ventilation
            </>
          }
        >
          <p>
            Extraction & Ventilation is an <WordBadge>essential part</WordBadge>{" "}
            of indoor growing and there is a{" "}
            <WordBadge>wide range of products</WordBadge> to choose from
            depending on the size, type and location of your grow space.{" "}
            <WordBadge>Extractor fans</WordBadge> are must-haves in order to
            continuously remove odors, carbon dioxide (CO2) and contaminants,
            while also <WordBadge>controlling temperature</WordBadge>. Extractor
            fan kits come with all the necessary components such as{" "}
            <WordBadge>carbon filters</WordBadge>, air hoses, fancontrollers,
            humidifiers, dehumidifiers and <WordBadge>heating mats</WordBadge>{" "}
            to set up an effective system. Additionally,{" "}
            <WordBadge>powerful fans</WordBadge> can be used in conjunction with
            heating mats or heaters for further temperature control. With the
            right Extraction & Ventilation setup you&apos;ll be sure to achieve
            a <WordBadge>healthier and more productive</WordBadge> grow space.
          </p>
        </InfoBlock>
        <InfoBlock
          title={
            <>
              <TitleBadge>Nutrients</TitleBadge>
            </>
          }
        >
          <p>
            Plant nutrients are <WordBadge>essential components</WordBadge> of
            healthy growth and development.{" "}
            <WordBadge>Plant nutrition</WordBadge> is an important aspect of
            gardening that is sometimes overlooked, but can have tremendous
            benefits for achieving{" "}
            <WordBadge>robust, thriving plants</WordBadge>. Plant nutrients
            provide plant roots with necessary building blocks for growing{" "}
            <WordBadge>strong and healthy</WordBadge>. Plant roots can absorb{" "}
            <WordBadge>macronutrients</WordBadge> such as nitrogen, potassium,
            phosphorus, calcium and magnesium from the soil. They also require{" "}
            <WordBadge>micronutrients</WordBadge> such as iron, zinc, manganese
            and other trace elements in smaller amounts to remain{" "}
            <WordBadge>balanced and healthy</WordBadge>. Unlocking the benefits
            of providing the right balance of plant nutrient will aid in
            sustaining plant health and promoting growth. When utilized
            correctly, plant nutrients may{" "}
            <WordBadge>boost root development</WordBadge>, enhance blooming
            capabilities and increase seed production - ultimately resulting in
            higher quality flowers or vegetables with a better flavor profile!
          </p>
        </InfoBlock>
        <InfoBlock
          title={
            <>
              Grow <TitleBadge>Supplies</TitleBadge>
            </>
          }
        >
          <p>
            Growing supplies are <WordBadge>essential for gardeners</WordBadge>{" "}
            and farmers. Ensuring the right soil <WordBadge>pH or EC</WordBadge>{" "}
            (measured using PH & EC Meters) for{" "}
            <WordBadge>optimal growth</WordBadge> and ensuring that plants are
            able to access appropriate amounts of water are both vital elements
            of successful crop growth. To this end, watering methods such as{" "}
            <WordBadge>Method Seven</WordBadge> ensure accurate watering, while{" "}
            <WordBadge>pots and grow tables</WordBadge> provide the best
            settings for different types of crops.{" "}
            <WordBadge>Grow trays</WordBadge> permit efficient drainage and use
            of water, while <WordBadge>timers</WordBadge> allow gardeners to
            control specific steps in the growing cycle such as germination,
            which can sometimes be accelerated using{" "}
            <WordBadge>propagators</WordBadge>. Finally,{" "}
            <WordBadge>scissors & tools</WordBadge> help keep plants healthy and
            tidy by trimming dead leaves, meaning larger yields with a positive
            effect on the environment due to less wastage of water and other
            resources during the growing cycle.
          </p>
        </InfoBlock>
      </div>
    </section>
  );
}
export default GrowInfoSection;
