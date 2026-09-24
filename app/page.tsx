const navItems = ["Home", "About", "List", "Contact", "Latest Offers"];

const categories = [
  { title: "Family Packs", text: "Curated festive combinations for joyful celebrations." },
  { title: "Sparkling Fountains", text: "High-impact visuals with safe and vibrant flame effects." },
  { title: "Kids Crackers", text: "Colorful and playful options for a cheerful family gathering." },
];

const offers = [
  { name: "Diwali Deluxe Combo", price: "₹1,299", tag: "Best Seller" },
  { name: "Festival Family Box", price: "₹2,499", tag: "Limited Time" },
  { name: "Sparkler Special Pack", price: "₹699", tag: "New Arrival" },
];

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

        <section id="list" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">Our Collection</p>
            <h2 className="mt-3 text-3xl font-black text-stone-900 sm:text-4xl">
              Crackers for every celebration
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_18px_45px_rgba(120,53,15,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(120,53,15,0.12)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 text-2xl">
                  {index === 0 ? "🎆" : index === 1 ? "✨" : "🎇"}
                </div>
                <h3 className="text-xl font-black text-stone-900">{category.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{category.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#1d120b] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-300">About us</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Trusted fireworks source from Sivakasi.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-orange-50/85">
              <p>
                We curate premium crackers designed for big family moments, temple festivals, and grand celebrations. Every collection is chosen for quality, brightness, and safe festive experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Safe, tested fireworks",
                  "Bulk order availability",
                  "Festive pricing offers",
                  "Fast local delivery",
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-orange-500/30 bg-white/5 px-4 py-3 font-semibold text-orange-50">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="offers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">Latest offers</p>
              <h2 className="mt-3 text-3xl font-black text-stone-900 sm:text-4xl">
                Best deals this festive season
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 transition hover:bg-orange-100">
              Request a quote
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.name} className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 shadow-[0_18px_45px_rgba(120,53,15,0.07)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#fef3c7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#92400e]">
                    {offer.tag}
                  </span>
                  <span className="text-2xl font-black text-[#b45309]">{offer.price}</span>
                </div>
                <h3 className="text-xl font-black text-stone-900">{offer.name}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Brighter, safer, and more festive with premium crackers for your entire family gathering.
                </p>
                <button className="mt-6 inline-flex rounded-full bg-stone-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-stone-700">
                  Grab Offer
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#fff7ed]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">Contact</p>
              <h2 className="mt-4 text-3xl font-black text-stone-900 sm:text-4xl">
                Plan your festive order with Lakshmi Agency.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
                Visit our Sivakasi store or call for customized bulk orders, family packs, and Diwali specials.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-[0_18px_45px_rgba(120,53,15,0.08)]">
              <div className="space-y-4 text-base text-stone-700">
                <p><span className="font-black text-stone-900">Phone:</span> +91 98765 43210</p>
                <p><span className="font-black text-stone-900">Address:</span> Lakshmi Agency, Sivakasi, Tamil Nadu</p>
                <p><span className="font-black text-stone-900">Hours:</span> 9:00 AM – 9:00 PM</p>
              </div>
              <a
                href="tel:+919876543210"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#b45309] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#933d08]"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
