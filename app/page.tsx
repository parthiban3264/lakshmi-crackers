import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import OfferBanners from "../components/OfferBanners";
import PopularCrackers from "../components/PopularCrackers";

const navItems = ["Home", "About", "List", "Contact", "Latest Offers"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf2] text-stone-900">
      <main id="home">
        <section className="relative isolate overflow-hidden">
          <video
            className="h-[520px] w-full object-cover sm:h-[620px] lg:h-[720px]"
            src="/video/diwali-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d120b]/85 via-[#1d120b]/55 to-[#1d120b]/30" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
              <div className="max-w-xl">
                <p className="mb-4 inline-flex rounded-full border border-orange-300/60 bg-orange-100/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-100">
                  Traditional Fireworks • Since 2005
                </p>
                <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Celebrate every moment with bright, safe, and joyful crackers.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-orange-50/85 sm:text-lg">
                  Lakshmi Agency brings premium Sivakasi fireworks, festive family packs, and trusted quality for every celebration.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#offers"
                    className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition hover:bg-[#d97706]"
                  >
                    Explore Offers
                  </a>
                  <a
                    href="#list"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    View Catalog
                  </a>
                </div>

                <div className="mt-10 grid max-w-md grid-cols-3 gap-3 text-left">
                  {[
                    ["500+", "Products"],
                    ["24/7", "Support"],
                    ["4.9★", "Ratings"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xl font-black text-white sm:text-2xl">{value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-100/80">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden items-end justify-end lg:flex">
                <div className="w-full max-w-md rounded-[2rem] border border-orange-200/30 bg-white/10 p-6 shadow-2xl shadow-orange-950/20 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-100/80">
                    Today’s Special
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-white">Festival Fireworks Box</h2>
                  <ul className="mt-5 space-y-3 text-sm text-orange-50">
                    {[
                      "Royal flower pots",
                      "Colorful sparklers",
                      "Family-safe assortment",
                      "Free delivery in city",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#fff7ed] px-4 py-3 text-stone-900">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                      From
                    </span>
                    <span className="text-2xl font-black text-[#b45309]">₹1,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PopularCrackers />

        <AboutSection />

        <OfferBanners />

        <ContactSection />
      </main>
    </div>
  );
}