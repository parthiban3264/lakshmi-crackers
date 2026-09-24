import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import OfferBanners from "../components/OfferBanners";
import PopularCrackers from "../components/PopularCrackers";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf2] text-stone-900">
      <main id="home">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          className="
            relative
            isolate
            min-h-[680px]
            overflow-hidden

            sm:min-h-[700px]

            lg:min-h-[720px]
          "
        >

          {/* =================================================
              BACKGROUND VIDEO
          ================================================== */}

          <video
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center

              sm:object-center
              lg:object-center
            "
            src="/video/diwali-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#1d120b]/75
              via-[#1d120b]/55
              to-[#1d120b]/80

              sm:bg-gradient-to-r
              sm:from-[#1d120b]/85
              sm:via-[#1d120b]/55
              sm:to-[#1d120b]/30
            "
          />

          {/* Extra mobile bottom protection */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-[#1d120b]/70
              to-transparent

              sm:hidden
            "
          />


          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="relative z-10 flex min-h-[680px] items-center sm:min-h-[700px] lg:min-h-[720px]">

            <div
              className="
                mx-auto
                flex
                w-full
                max-w-7xl
                flex-col
                justify-center

                px-4
                py-16

                sm:px-6
                sm:py-20

                lg:px-8
                lg:py-24
              "
            >

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="max-w-2xl">

                {/* Badge */}
                <p
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    rounded-full
                    border
                    border-orange-300/50
                    bg-orange-100/15

                    px-3
                    py-1.5

                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-orange-100

                    sm:px-4
                    sm:py-2
                    sm:text-xs
                    sm:tracking-[0.22em]
                  "
                >
                  Traditional Fireworks • Since 2005
                </p>


                {/* Heading */}
                <h1
                  className="
                    mt-5
                    max-w-2xl
                    text-[2.15rem]
                    font-black
                    leading-[1.08]
                    tracking-tight
                    text-white

                    sm:mt-6
                    sm:text-5xl
                    sm:leading-[1.08]

                    lg:text-6xl
                    lg:leading-[1.05]
                  "
                >
                  Celebrate every moment with bright, joyful crackers.
                </h1>


                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-6
                    text-orange-50/85

                    sm:mt-6
                    sm:text-base
                    sm:leading-7

                    lg:text-lg
                    lg:leading-8
                  "
                >
                  Lakshmi Agency brings Sivakasi fireworks, festive family
                  packs, and a wide collection of crackers for every
                  celebration.
                </p>


                {/* =================================================
                    BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-7
                    flex
                    w-full
                    flex-col
                    gap-3

                    sm:mt-8
                    sm:w-auto
                    sm:flex-row
                    sm:flex-wrap
                  "
                >

                  <a
                    href="#offers"
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f59e0b]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-orange-900/30
                      transition
                      hover:bg-[#d97706]

                      sm:w-auto
                    "
                  >
                    Explore Offers
                  </a>

                  <a
                    href="#list"
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-white/10
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      backdrop-blur-sm
                      transition
                      hover:bg-white/20

                      sm:w-auto
                    "
                  >
                    View Catalog
                  </a>

                </div>


                {/* =================================================
                    STATS
                ================================================== */}

                <div
                  className="
                    mt-8
                    grid
                    w-full
                    max-w-md
                    grid-cols-3
                    gap-2

                    sm:mt-10
                    sm:gap-3
                  "
                >

                  {[
                    ["500+", "Products"],
                    ["24/7", "Support"],
                    ["4.9★", "Ratings"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="
                        min-w-0
                        rounded-xl
                        border
                        border-white/15
                        bg-white/10
                        px-2
                        py-3
                        text-center
                        backdrop-blur-sm

                        sm:rounded-2xl
                        sm:p-4
                      "
                    >

                      <p
                        className="
                          text-base
                          font-black
                          text-white

                          sm:text-xl
                          md:text-2xl
                        "
                      >
                        {value}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-orange-100/80

                          sm:text-[10px]
                          sm:tracking-[0.18em]
                        "
                      >
                        {label}
                      </p>

                    </div>
                  ))}

                </div>

              </div>


              {/* =================================================
                  DESKTOP SPECIAL CARD
              ================================================== */}

              <div className="mt-10 hidden justify-end lg:flex">

                <div
                  className="
                    w-full
                    max-w-md
                    rounded-[2rem]
                    border
                    border-orange-200/30
                    bg-white/10
                    p-6
                    shadow-2xl
                    shadow-orange-950/20
                    backdrop-blur-md
                  "
                >

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-100/80">
                    Today&apos;s Special
                  </p>

                  <h2 className="mt-4 text-3xl font-black text-white">
                    Festival Fireworks Box
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-orange-50">
                    {[
                      "Royal flower pots",
                      "Colorful sparklers",
                      "Festive assortment",
                      "Delivery options available",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#fbbf24]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      bg-[#fff7ed]
                      px-4
                      py-3
                      text-stone-900
                    "
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                      From
                    </span>

                    <span className="text-2xl font-black text-[#b45309]">
                      ₹1,999
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </section>


        {/* =====================================================
            POPULAR CRACKERS
        ====================================================== */}

        <PopularCrackers />


        {/* =====================================================
            ABOUT
        ====================================================== */}

        <AboutSection />


        {/* =====================================================
            OFFERS
        ====================================================== */}

        <OfferBanners />


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <ContactSection />

      </main>
    </div>
  );
}