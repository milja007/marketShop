// components/GrowInfoSection.tsx (Full updated component)

// TitleBadge component (as defined above)
const TitleBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg shadow-md mx-1 align-middle">
      {children}
    </span>
  );
};

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
        {/* `leading-tight` or `leading-normal` on h2 can help if badge affects line height too much */}
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  );

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <InfoBlock
          title={
            <>
              Growshop <TitleBadge>Online</TitleBadge>
            </>
          }
        >
          <p>
            Growshops are a great way for gardeners and growers to obtain the
            necessary supplies to cultivate their plants.{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              Grow-dutch.com
            </span>{" "}
            is an excellent example of a professional growshop which provides{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              quality grow supplies
            </span>{" "}
            at{" "}
            <span className="font-semibold text-lime-600 dark:text-lime-400">
              competitive prices
            </span>
            . Grow-dutch.com offers fertilizer, nutrients, lights, tents, and
            other components needed for{" "}
            <span className="font-semibold text-rose-600 dark:text-rose-400">
              indoor gardening
            </span>
            , as well as outdoor gardening solutions like hydroponics systems,
            pumps and filters. Not only can you buy the fully assembled systems
            from Grow-dutch.com but you can also find all the{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              replacement parts
            </span>{" "}
            you&apos;d need...
            {/* ... rest of the paragraph with varied colorful spans ... */}
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
            <span className="font-semibold text-green-500 dark:text-green-400">
              healthier, larger plants
            </span>{" "}
            and{" "}
            <span className="font-semibold text-yellow-500 dark:text-yellow-400">
              bigger yields
            </span>{" "}
            regardless of season or climate. Whether you’re cultivating an
            indoor garden, a hydroponics system, or simply don’t have enough
            natural light, led grow lights from{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">
              Grow-dutch.com
            </span>{" "}
            can take your garden to the next level...
            {/* ... rest of the paragraph with varied colorful spans ... */}
          </p>
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
            <span className="font-semibold text-emerald-500 dark:text-emerald-400">
              ideal indoor garden environment
            </span>{" "}
            all year long... with Grow Tent brands like{" "}
            <span className="font-semibold text-violet-500 dark:text-violet-400">
              Homebox Ambient
            </span>
            ,{" "}
            <span className="font-semibold text-lime-500 dark:text-lime-400">
              Homelab
            </span>{" "}
            and{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              Mammoth Grow Tents
            </span>{" "}
            to choose from...
            {/* ... rest of the paragraph with varied colorful spans ... */}
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
            If you are looking to grow your own food indoors,{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              Grow-dutch.com
            </span>{" "}
            has everything you need with{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              grow tent kits
            </span>{" "}
            to create an indoor garden. With{" "}
            <span className="font-semibold text-sky-600 dark:text-sky-400">
              Growtent grow tent sets
            </span>
            , it is easy to keep your plants{" "}
            <span className="font-semibold text-rose-600 dark:text-rose-400">
              healthy and thriving
            </span>
            ...
            {/* ... Add more colorful spans as desired ... */}
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
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Extraction & Ventilation
            </span>{" "}
            is an{" "}
            <span className="font-semibold text-lime-600 dark:text-lime-400">
              essential part
            </span>{" "}
            of indoor growing... Extractor fan kits come with all the necessary
            components such as{" "}
            <span className="font-semibold text-rose-500 dark:text-rose-400">
              carbon filters
            </span>
            ,{" "}
            <span className="font-semibold text-cyan-500 dark:text-cyan-400">
              air hoses
            </span>
            ,{" "}
            <span className="font-semibold text-violet-500 dark:text-violet-400">
              fan controllers
            </span>
            ...
            {/* ... Add more colorful spans as desired ... */}
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
            Plant{" "}
            <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              nutrients
            </span>{" "}
            are{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              essential components
            </span>{" "}
            of healthy growth... Plant roots can absorb{" "}
            <span className="font-semibold text-emerald-500 dark:text-emerald-400">
              macronutrients
            </span>{" "}
            such as nitrogen, potassium, phosphorus...
            {/* ... Add more colorful spans as desired ... */}
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
            <span className="font-semibold text-orange-600 dark:text-orange-400">
              Growing supplies
            </span>{" "}
            are{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              essential for gardeners
            </span>
            ... Ensuring the right soil{" "}
            <span className="font-semibold text-lime-500 dark:text-lime-400">
              pH or EC
            </span>{" "}
            (measured using PH & EC Meters)...
            {/* ... Add more colorful spans as desired ... */}
          </p>
        </InfoBlock>
      </div>
    </section>
  );
}
