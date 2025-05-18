// components/GrowInfoSection.tsx
import TitleBadge from "../SPAN/TitleBadge";
import WordBadge from "../SPAN/WordBadge";
import HomePageBlogSection from "../HOME/HomePageBlogSection";
import InfoBlock from "../SPAN/InfoBlock";
import OurBrandsSection from "../HOME/OurBrandsSection";

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
            Growshops are a great way for gardeners and growers to obtain the
            necessary supplies to cultivate their plants. Boki-Grow.com is an
            excellent example of a professional growshop which provides quality
            grow supplies at competitive prices. Boki-Grow.com offers
            fertilizer, nutrients, lights, tents, and other components needed
            for indoor gardening, as well as outdoor gardening solutions like
            hydroponics systems, pumps and filters. Not only can you buy the{" "}
            fully assembled systems from Boki-Grow.com but you can also find all
            the replacement parts you&apos;d need in order to keep your growing
            system in top condition. Boki-Grow.com’s offerings go beyond just
            providing quality items, they give their customers access to experts
            who can provide advice on how to best care for their garden or trust
            Boki-Grow.com to set up a complete customized system for them based
            on their individual needs and requirements!
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
            Led grow lights offer gardeners the chance to produce healthier,
            larger plants and bigger yields regardless of season or climate.
            Whether you’re cultivating an indoor garden, a hydroponics system,
            or simply don’t have enough natural light, led grow lights from
            Boki-Grow.com can take your garden to the next level. All led grow
            lights are specifically designed for photosynthesis and come with{" "}
            adjustable time settings, ensuring stability and precision
            throughout your plant’s cycle. Used in conjunction with natural
            natural UV light sources such as sunlight, led lights provide a more
            efficient supplement than traditional bulbs while keeping energy
            consumption low. Add led grow lights to your garden today and unlock
            the power of artificial lighting!
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
            Grow tents offer a great way to create an ideal indoor garden
            environment all year long. Regardless of the size, shape or needs of
            your growing project, you&apos;ll find a large variety of grow tents
            for any space and budget in the market. Growtents come in numerous
            sizes, from small 2ft X 2ft Grow Tents perfect for propagation to
            larger 8ft X 4ft Grow Tents that are suitable for full scale
            projects; with Grow Tent brands like Homebox Ambient Grow Tents,
            Homelab Grow Tents and Grow Boxes or Mammoth Grow Tents to choose
            from. Clients looking for something sturdier have options such as
            Spider Farmer Grow Tents, Mars Hydro Grow Tents or Gorilla Grow
            tents. Whatever grow tent you choose, it will help maintain optimal
            temperature and humidity levels throughout your indoor garden -
            providing higher yields and healthier plants with more uniform
            growth!
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
            If you are looking to grow your own food indoors, Boki-Grow.com has
            everything you need with grow tent kits to create an indoor garden.
            With Growtent grow tent sets, it is easy to keep your plants healthy
            and thriving in the comfort of your own home. With a complete grow
            set that includes ventilation units, fans and grow light
            accessories, what you get is a professionally-maintained grow
            environment for your plants all year round. All the necessary
            components from grow lights, fans and even a timer are included in
            this grow tent set to help reach maximum growing potential. Create
            an indoor garden today and make sure that it remains under the
            perfect conditions for optimal yield with grow tent kits from
            Boki-Grow.com.
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
            Extraction & Ventilation is an essential part of indoor growing and
            there is a wide range of products to choose from depending on the
            size, type and location of your grow space. Extractor fans are
            must-haves in order to continuously remove odors, carbon dioxide
            (CO2) and contaminants, while also controlling temperature.
            Extractor fan kits come with all the necessary components such as{" "}
            carbon filters, air hoses, fancontrollers, humidifiers,
            dehumidifiers and heating mats to set up an effective system.
            Additionally, powerful fans can be used in conjunction with heating
            mats or heaters for further temperature control. With the right
            Extraction & Ventilation setup you&apos;ll be sure to achieve a
            healthier and more productive grow space.
          </p>
        </InfoBlock>
        <OurBrandsSection />
        <InfoBlock
          title={
            <>
              <TitleBadge>Nutrients</TitleBadge>
            </>
          }
        >
          <p>
            Plant nutrients are essential components of healthy growth and
            development. Plant nutrition is an important aspect of gardening
            that is sometimes overlooked, but can have tremendous benefits for
            achieving robust, thriving plants. Plant nutrients provide plant
            roots with necessary building blocks for growing strong and healthy.
            Plant roots can absorb macronutrients such as nitrogen, potassium,
            phosphorus, calcium and magnesium from the soil. They also require{" "}
            micronutrients such as iron, zinc, manganese and other trace
            elements in smaller amounts to remain balanced and healthy.
            Unlocking the benefits of providing the right balance of plant
            nutrient will aid in sustaining plant health and promoting growth.
            When utilized correctly, plant nutrients may boost root development,
            enhance blooming capabilities and increase seed production -
            ultimately resulting in higher quality flowers or vegetables with a
            better flavor profile!
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
            Growing supplies are essential for gardeners and farmers. Ensuring
            the right soil pH or EC (measured using PH & EC Meters) for optimal
            growth and ensuring that plants are able to access appropriate
            amounts of water are both vital elements of successful crop growth.
            To this end, watering methods such as Method Seven ensure accurate
            watering, while pots and grow tables provide the best settings for
            different types of crops. Grow trays permit efficient drainage and
            use of water, while timers allow gardeners to control specific steps
            in the growing cycle such as germination, which can sometimes be
            accelerated using propagators. Finally, scissors & tools help keep
            plants healthy and tidy by trimming dead leaves, meaning larger
            yields with a positive effect on the environment due to less wastage
            of water and other resources during the growing cycle.
          </p>
        </InfoBlock>
      </div>
    </section>
  );
}
export default GrowInfoSection;
