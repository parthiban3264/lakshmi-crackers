
const popularCrackers = [
  {
    name: "Royal Flower Pot",
    offer: "Save 25%",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sky Burst",
    offer: "New",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Golden Sparklers",
    offer: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1508779544523-d5b7a1f2f0b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Festival Combo",
    offer: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kids Delight",
    offer: "Low Noise",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mini Fountain",
    offer: "Limited",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Diwali Fizz",
    offer: "Offer",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Premium Rocket",
    offer: "Popular",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c4691f4d5a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Family Pack",
    offer: "Bundle",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Night Spark",
    offer: "Fresh",
    image:
      "https://images.unsplash.com/photo-1529154691717-3306083d869e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function PopularCrackers() {
  return (
    <section
      id="list"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* ================= HEADER ================= */}
      <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-orange-600 sm:text-xs">
            Our Collection
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:mt-3 sm:text-3xl lg:text-4xl">
            Popular Crackers
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
            Celebrate Diwali with our most-loved festive picks.
          </p>
        </div>

        {/* Desktop button */}
        <a
          href="#offers"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-orange-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-100 sm:inline-flex"
        >
          View all
          <span className="text-sm">→</span>
        </a>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {popularCrackers.map((cracker) => (
          <article
            key={cracker.name}
            className="group relative overflow-hidden rounded-2xl bg-stone-100 shadow-[0_8px_30px_rgba(120,53,15,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(120,53,15,0.16)] sm:rounded-[1.4rem]"
          >
            {/* ================= IMAGE ================= */}
            <div className="relative aspect-[4/4.6] overflow-hidden">
              <img
                src={cracker.image}
                alt={cracker.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overall subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              {/* ================= BOTTOM BLACK GRADIENT ================= */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0
                  h-1/2
                  bg-gradient-to-t
                  from-black/85
                  via-black/45
                  to-transparent
                "
              />

              {/* ================= OFFER BADGE ================= */}
              <span
                className="
                  absolute left-2.5 top-2.5 z-10
                  rounded-full
                  border border-white/50
                  bg-white/95
                  px-2.5 py-1.5
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-[#b45309]
                  shadow-lg
                  backdrop-blur-md
                  sm:left-3 sm:top-3
                  sm:px-3 sm:py-1.5
                  sm:text-[9px]
                "
              >
                {cracker.offer}
              </span>

              {/* ================= PRODUCT NAME ================= */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4">
                <h3
                  className="
                    text-sm
                    font-black
                    leading-tight
                    tracking-tight
                    text-white
                    drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
                    sm:text-base
                  "
                >
                  {cracker.name}
                </h3>

                {/* Small decorative line */}
                <div className="mt-2 h-0.5 w-7 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ================= MOBILE BUTTON ================= */}
      <div className="mt-7 flex justify-center sm:hidden">
        <a
          href="#offers"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-orange-200
            bg-orange-50
            px-6 py-3
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-orange-700
            transition-all
            duration-300
            hover:bg-orange-100
          "
        >
          View all crackers
          <span className="text-sm">→</span>
        </a>
      </div>
    </section>
  );
}

