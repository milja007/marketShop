// components/GrowInfoSection.tsx (Full updated component)

// TitleBadge component (as defined above)
const TitleBadge = ({
  children,
  fromColor = "from-green-500",
  toColor = "to-emerald-600",
}: {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
}) => {
  return (
    <span
      className={`inline-block bg-gradient-to-r ${fromColor} ${toColor} text-white px-3 py-1 rounded-lg shadow-md mx-1 align-middle`}
    >
      {children}
    </span>
  );
};

// WordBadge component for paragraphs (as defined above)
const WordBadge = ({
  children,
  bgColorClass,
}: {
  children: React.ReactNode;
  bgColorClass: string;
}) => (
  <span
    className={`${bgColorClass} text-white px-2 py-0.5 rounded-md shadow-sm mx-0.5 font-medium align-baseline`}
  >
    {children}
  </span>
);

export function GrowInfoSection() {
  const InfoBlock = ({
    title,
    children,
  }: {
    title: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:text-3xl leading-tight">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  );

  // Palette of background colors for WordBadges in paragraphs.
  // Ensure these are dark/vibrant enough for white text to have good contrast.
  const badgeColors = [
    "bg-sky-600",
    "bg-emerald-600",
    "bg-amber-600",
    "bg-rose-600",
    "bg-violet-600",
    "bg-lime-600",
    "bg-cyan-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-fuchsia-600",
    "bg-orange-600",
    "bg-indigo-600",
    "bg-red-600",
    "bg-blue-700",
    "bg-purple-600",
    "bg-green-700",
  ];
  // Helper to get colors, cycling through the palette
  let colorIndex = 0;
  const getNextColor = () => {
    const color = badgeColors[colorIndex % badgeColors.length];
    colorIndex++;
    return color;
  };

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <InfoBlock
          title={
            <>
              Growshop{" "}
              <TitleBadge fromColor="from-sky-500" toColor="to-blue-600">
                Online
              </TitleBadge>
            </>
          }
        >
          <p>
            Growshops are a{" "}
            <WordBadge bgColorClass={getNextColor()}>great way</WordBadge> for
            gardeners and growers to obtain the{" "}
            <WordBadge bgColorClass={getNextColor()}>
              necessary supplies
            </WordBadge>{" "}
            to cultivate their plants.{" "}
            <WordBadge bgColorClass={getNextColor()}>Boki-Grow.com</WordBadge>{" "}
            is an excellent example of a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              professional growshop
            </WordBadge>{" "}
            which provides quality grow supplies at competitive prices.
            Boki-Grow.com offers fertilizer, nutrients, lights, tents, and other
            components needed for{" "}
            <WordBadge bgColorClass={getNextColor()}>
              indoor gardening
            </WordBadge>
            , as well as outdoor gardening solutions like hydroponics systems,
            pumps and filters. Not only can you buy the{" "}
            <WordBadge bgColorClass={getNextColor()}>
              fully assembled systems
            </WordBadge>{" "}
            from Boki-Grow.com but you can also find all the{" "}
            <WordBadge bgColorClass={getNextColor()}>
              replacement parts
            </WordBadge>{" "}
            you&apos;d need in order to keep your growing system in top
            condition. Boki-Grow.com’s offerings go beyond just providing
            quality items, they give their customers access to{" "}
            <WordBadge bgColorClass={getNextColor()}>experts</WordBadge> who can
            provide advice on how to best care for their garden or trust
            Boki-Grow.com to set up a complete{" "}
            <WordBadge bgColorClass={getNextColor()}>
              customized system
            </WordBadge>{" "}
            for them based on their individual needs and requirements!
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              <TitleBadge fromColor="from-rose-500" toColor="to-pink-600">
                LED
              </TitleBadge>{" "}
              Grow Lights
            </>
          }
        >
          <p>
            Led grow lights offer gardeners the chance to produce{" "}
            <WordBadge bgColorClass={getNextColor()}>
              healthier, larger plants
            </WordBadge>{" "}
            and{" "}
            <WordBadge bgColorClass={getNextColor()}>bigger yields</WordBadge>{" "}
            regardless of season or climate. Whether you’re cultivating an
            indoor garden, a hydroponics system, or simply don’t have enough
            natural light, led grow lights from{" "}
            <WordBadge bgColorClass={getNextColor()}>Boki-Grow.com</WordBadge>{" "}
            can take your garden to the next level. All led grow lights are
            specifically designed for{" "}
            <WordBadge bgColorClass={getNextColor()}>photosynthesis</WordBadge>{" "}
            and come with{" "}
            <WordBadge bgColorClass={getNextColor()}>
              adjustable time settings
            </WordBadge>
            , ensuring stability and precision throughout your plant’s cycle.
            Used in conjunction with natural natural UV light sources such as
            sunlight, led lights provide a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              more efficient supplement
            </WordBadge>{" "}
            than traditional bulbs while keeping{" "}
            <WordBadge bgColorClass={getNextColor()}>
              energy consumption low
            </WordBadge>
            . Add led grow lights to your garden today and{" "}
            <WordBadge bgColorClass={getNextColor()}>
              unlock the power
            </WordBadge>{" "}
            of artificial lighting!
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              Grow{" "}
              <TitleBadge fromColor="from-amber-500" toColor="to-orange-600">
                Tents
              </TitleBadge>
            </>
          }
        >
          <p>
            Grow tents offer a great way to create an{" "}
            <WordBadge bgColorClass={getNextColor()}>
              ideal indoor garden
            </WordBadge>{" "}
            environment all year long. Regardless of the size, shape or needs of
            your growing project, you&apos;ll find a{" "}
            <WordBadge bgColorClass={getNextColor()}>large variety</WordBadge>{" "}
            of grow tents for any space and budget in the market. Growtents come
            in numerous sizes, from small 2ft X 2ft Grow Tents perfect for{" "}
            <WordBadge bgColorClass={getNextColor()}>propagation</WordBadge> to
            larger 8ft X 4ft Grow Tents that are suitable for{" "}
            <WordBadge bgColorClass={getNextColor()}>
              full scale projects
            </WordBadge>
            ; with Grow Tent brands like Homebox Ambient Grow Tents, Homelab
            Grow Tents and Grow Boxes or{" "}
            <WordBadge bgColorClass={getNextColor()}>
              Mammoth Grow Tents
            </WordBadge>{" "}
            to choose from. Clients looking for something sturdier have options
            such as Spider Farmer Grow Tents, Mars Hydro Grow Tents or{" "}
            <WordBadge bgColorClass={getNextColor()}>
              Gorilla Grow tents
            </WordBadge>
            . Whatever grow tent you choose, it will help maintain{" "}
            <WordBadge bgColorClass={getNextColor()}>
              optimal temperature
            </WordBadge>{" "}
            and humidity levels throughout your indoor garden - providing{" "}
            <WordBadge bgColorClass={getNextColor()}>higher yields</WordBadge>{" "}
            and healthier plants with more uniform growth!
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              Grow Tent{" "}
              <TitleBadge fromColor="from-lime-500" toColor="to-green-600">
                Kits
              </TitleBadge>
            </>
          }
        >
          <p>
            If you are looking to{" "}
            <WordBadge bgColorClass={getNextColor()}>
              grow your own food
            </WordBadge>{" "}
            indoors,{" "}
            <WordBadge bgColorClass={getNextColor()}>Boki-Grow.com</WordBadge>{" "}
            has everything you need with{" "}
            <WordBadge bgColorClass={getNextColor()}>grow tent kits</WordBadge>{" "}
            to create an indoor garden. With Growtent grow tent sets, it is easy
            to keep your plants{" "}
            <WordBadge bgColorClass={getNextColor()}>
              healthy and thriving
            </WordBadge>{" "}
            in the comfort of your own home. With a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              complete grow set
            </WordBadge>{" "}
            that includes ventilation units, fans and grow light accessories,
            what you get is a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              professionally-maintained
            </WordBadge>{" "}
            grow environment for your plants all year round. All the necessary
            components from{" "}
            <WordBadge bgColorClass={getNextColor()}>
              grow lights, fans
            </WordBadge>{" "}
            and even a timer are included in this grow tent set to help reach{" "}
            <WordBadge bgColorClass={getNextColor()}>
              maximum growing potential
            </WordBadge>
            . Create an indoor garden today and make sure that it remains under
            the perfect conditions for{" "}
            <WordBadge bgColorClass={getNextColor()}>optimal yield</WordBadge>{" "}
            with grow tent kits from Boki-Grow.com.
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              <TitleBadge fromColor="from-violet-500" toColor="to-purple-600">
                Extraction
              </TitleBadge>{" "}
              & Ventilation
            </>
          }
        >
          <p>
            Extraction & Ventilation is an{" "}
            <WordBadge bgColorClass={getNextColor()}>essential part</WordBadge>{" "}
            of indoor growing and there is a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              wide range of products
            </WordBadge>{" "}
            to choose from depending on the size, type and location of your grow
            space.{" "}
            <WordBadge bgColorClass={getNextColor()}>Extractor fans</WordBadge>{" "}
            are must-haves in order to continuously remove odors, carbon dioxide
            (CO2) and contaminants, while also{" "}
            <WordBadge bgColorClass={getNextColor()}>
              controlling temperature
            </WordBadge>
            . Extractor fan kits come with all the necessary components such as{" "}
            <WordBadge bgColorClass={getNextColor()}>carbon filters</WordBadge>,
            air hoses, fancontrollers, humidifiers, dehumidifiers and{" "}
            <WordBadge bgColorClass={getNextColor()}>heating mats</WordBadge> to
            set up an effective system. Additionally,{" "}
            <WordBadge bgColorClass={getNextColor()}>powerful fans</WordBadge>{" "}
            can be used in conjunction with heating mats or heaters for further
            temperature control. With the right Extraction & Ventilation setup
            you&apos;ll be sure to achieve a{" "}
            <WordBadge bgColorClass={getNextColor()}>
              healthier and more productive
            </WordBadge>{" "}
            grow space.
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              <TitleBadge fromColor="from-teal-500" toColor="to-cyan-600">
                Nutrients
              </TitleBadge>
            </>
          }
        >
          <p>
            Plant nutrients are{" "}
            <WordBadge bgColorClass={getNextColor()}>
              essential components
            </WordBadge>{" "}
            of healthy growth and development.{" "}
            <WordBadge bgColorClass={getNextColor()}>Plant nutrition</WordBadge>{" "}
            is an important aspect of gardening that is sometimes overlooked,
            but can have tremendous benefits for achieving{" "}
            <WordBadge bgColorClass={getNextColor()}>
              robust, thriving plants
            </WordBadge>
            . Plant nutrients provide plant roots with necessary building blocks
            for growing{" "}
            <WordBadge bgColorClass={getNextColor()}>
              strong and healthy
            </WordBadge>
            . Plant roots can absorb{" "}
            <WordBadge bgColorClass={getNextColor()}>macronutrients</WordBadge>{" "}
            such as nitrogen, potassium, phosphorus, calcium and magnesium from
            the soil. They also require{" "}
            <WordBadge bgColorClass={getNextColor()}>micronutrients</WordBadge>{" "}
            such as iron, zinc, manganese and other trace elements in smaller
            amounts to remain{" "}
            <WordBadge bgColorClass={getNextColor()}>
              balanced and healthy
            </WordBadge>
            . Unlocking the benefits of providing the right balance of plant
            nutrient will aid in sustaining plant health and promoting growth.
            When utilized correctly, plant nutrients may{" "}
            <WordBadge bgColorClass={getNextColor()}>
              boost root development
            </WordBadge>
            , enhance blooming capabilities and increase seed production -
            ultimately resulting in higher quality flowers or vegetables with a
            better flavor profile!
          </p>
        </InfoBlock>

        <InfoBlock
          title={
            <>
              Grow{" "}
              <TitleBadge fromColor="from-red-500" toColor="to-rose-600">
                Supplies
              </TitleBadge>
            </>
          }
        >
          <p>
            Growing supplies are{" "}
            <WordBadge bgColorClass={getNextColor()}>
              essential for gardeners
            </WordBadge>{" "}
            and farmers. Ensuring the right soil{" "}
            <WordBadge bgColorClass={getNextColor()}>pH or EC</WordBadge>{" "}
            (measured using PH & EC Meters) for{" "}
            <WordBadge bgColorClass={getNextColor()}>optimal growth</WordBadge>{" "}
            and ensuring that plants are able to access appropriate amounts of
            water are both vital elements of successful crop growth. To this
            end, watering methods such as{" "}
            <WordBadge bgColorClass={getNextColor()}>Method Seven</WordBadge>{" "}
            ensure accurate watering, while{" "}
            <WordBadge bgColorClass={getNextColor()}>
              pots and grow tables
            </WordBadge>{" "}
            provide the best settings for different types of crops.{" "}
            <WordBadge bgColorClass={getNextColor()}>Grow trays</WordBadge>{" "}
            permit efficient drainage and use of water, while{" "}
            <WordBadge bgColorClass={getNextColor()}>timers</WordBadge> allow
            gardeners to control specific steps in the growing cycle such as
            germination, which can sometimes be accelerated using{" "}
            <WordBadge bgColorClass={getNextColor()}>propagators</WordBadge>.
            Finally,{" "}
            <WordBadge bgColorClass={getNextColor()}>
              scissors & tools
            </WordBadge>{" "}
            help keep plants healthy and tidy by trimming dead leaves, meaning
            larger yields with a positive effect on the environment due to less
            wastage of water and other resources during the growing cycle.
          </p>
        </InfoBlock>
      </div>
    </section>
  );
}
