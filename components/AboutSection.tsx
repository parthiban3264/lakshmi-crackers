
export default function AboutSection() {
  const highlights = [
    {
      number: "01",
      title: "Sivakasi Collection",
      description:
        "A wide selection of popular fireworks sourced from the Sivakasi region, known for its long-standing fireworks manufacturing industry.",
    },
    {
      number: "02",
      title: "Retail & Bulk Orders",
      description:
        "Whether you are shopping for your family or planning a larger celebration, we offer options for both retail purchases and bulk requirements.",
    },
    {
      number: "03",
      title: "Quality-Focused Selection",
      description:
        "Our collection is selected with attention to product quality, presentation, variety, and a memorable festive experience.",
    },
    {
      number: "04",
      title: "Wide Product Variety",
      description:
        "Explore flower pots, sparklers, rockets, aerial crackers, sound crackers, gift boxes, family packs, and festive combo collections.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1d120b] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-orange-300 sm:text-[10px]">
                About Lakshmi Agency
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your festive shopping destination for
              <span className="text-orange-400"> Sivakasi crackers.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-orange-50/70 sm:text-base">
              Lakshmi Agency brings together a curated collection of
              fireworks and festive cracker packs for families, celebrations,
              functions, and bulk requirements.
            </p>

            {/* Location */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-orange-400/20 bg-white/[0.04] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15">
                📍
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-400">
                  Based in
                </p>

                <p className="mt-0.5 text-sm font-bold text-orange-50">
                  Sivakasi, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <p className="text-sm leading-7 text-orange-50/75 sm:text-base sm:leading-8">
              Sivakasi has a long-standing association with India&apos;s
              fireworks industry. Our goal is to make festive shopping
              convenient by bringing different types of crackers and
              celebration packs together in one collection.
            </p>

            <p className="mt-5 text-sm leading-7 text-orange-50/75 sm:text-base sm:leading-8">
              From everyday family purchases to larger festive requirements,
              customers can explore different price ranges, product styles,
              and combination packs according to their celebration needs.
            </p>

            <p className="mt-5 text-sm leading-7 text-orange-50/75 sm:text-base sm:leading-8">
              We focus on offering a varied collection, clear product
              information, festive offers, and a simple ordering experience
              for customers looking to celebrate Diwali and other special
              occasions.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent sm:my-14" />

        {/* ================================================= */}
        {/* HIGHLIGHTS */}
        {/* ================================================= */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="
                group
                rounded-[1.5rem]
                border border-orange-400/15
                bg-white/[0.045]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-400/30
                hover:bg-white/[0.07]
              "
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.15em] text-orange-400">
                  {item.number}
                </span>

                <span className="text-orange-400/30 transition group-hover:text-orange-400/70">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-black text-orange-50">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-6 text-orange-50/55 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM STATS */}
        {/* ================================================= */}
        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-orange-400/15 bg-orange-500/[0.06] sm:grid-cols-4">

          <div className="border-b border-r border-orange-400/10 p-4 text-center sm:border-b-0 sm:p-5">
            <p className="text-xl font-black text-orange-300 sm:text-2xl">
              Sivakasi
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-orange-50/40">
              Fireworks Hub
            </p>
          </div>

          <div className="border-b border-orange-400/10 p-4 text-center sm:border-b-0 sm:border-r sm:p-5">
            <p className="text-xl font-black text-orange-300 sm:text-2xl">
              Retail
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-orange-50/40">
              Family Orders
            </p>
          </div>

          <div className="border-r border-orange-400/10 p-4 text-center sm:p-5">
            <p className="text-xl font-black text-orange-300 sm:text-2xl">
              Bulk
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-orange-50/40">
              Celebration Orders
            </p>
          </div>

          <div className="p-4 text-center sm:p-5">
            <p className="text-xl font-black text-orange-300 sm:text-2xl">
              Variety
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-orange-50/40">
              Festive Collection
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
