 "use client";

import { useMemo, useState } from "react";

type Product = {
  no: number;
  name: string;
  unit: string;
  rate: number;
  offer?: number;
  category: string;
};

const products: Product[] = [
  // Single Sound Crackers
  { no: 1, name: "2 ¾ KuruvI", unit: "1 Pkt", rate: 40, offer: 8, category: "Single Sound Crackers" },
  { no: 2, name: "3 ½ Lakshmi", unit: "1 Pkt", rate: 80, offer: 16, category: "Single Sound Crackers" },
  { no: 3, name: "4” Lakshmi", unit: "1 Pkt", rate: 100, offer: 20, category: "Single Sound Crackers" },
  { no: 4, name: "4” Gold Lakshmi (12 Ply)", unit: "1 Pkt", rate: 160, offer: 32, category: "Single Sound Crackers" },
  { no: 5, name: "5” Deluxe Lakshmi", unit: "1 Pkt", rate: 250, offer: 50, category: "Single Sound Crackers" },

  // Flower Pots
  { no: 6, name: "Flower Pots Big", unit: "1 Box", rate: 325, offer: 65, category: "Flower Pots" },
  { no: 7, name: "Flower Pots Special", unit: "1 Box", rate: 475, offer: 95, category: "Flower Pots" },
  { no: 8, name: "Flower Pots Deluxe", unit: "1 Box", rate: 950, offer: 190, category: "Flower Pots" },
  { no: 9, name: "Colour Koti", unit: "1 Box", rate: 1050, offer: 210, category: "Flower Pots" },
  { no: 10, name: "Mini Tri Color Fountain", unit: "1 Box", rate: 1150, offer: 230, category: "Flower Pots" },

  // Ground Chakkar
  { no: 11, name: "Ground Chakkar Big (10 Pcs)", unit: "1 Box", rate: 225, offer: 45, category: "Ground Chakkar" },
  { no: 12, name: "Ground Chakkar Big (25 Pcs)", unit: "1 Box", rate: 450, offer: 90, category: "Ground Chakkar" },
  { no: 13, name: "Ground Chakkar Special", unit: "1 Box", rate: 500, offer: 100, category: "Ground Chakkar" },
  { no: 14, name: "Wire Chakkar", unit: "1 Box", rate: 900, offer: 180, category: "Ground Chakkar" },
  { no: 15, name: "4 * 4 Wheel", unit: "1 Box", rate: 950, offer: 190, category: "Ground Chakkar" },

  // Twinkling Star
  { no: 16, name: "1 ½ Twinkling Star", unit: "1 Box", rate: 150, offer: 30, category: "Twinkling Star" },
  { no: 17, name: "4” Twinkling Star", unit: "1 Box", rate: 375, offer: 75, category: "Twinkling Star" },

  // Bombs
  { no: 18, name: "Atom Bomb", unit: "1 Box", rate: 300, offer: 60, category: "Bombs" },
  { no: 19, name: "Hydro Bomb", unit: "1 Box", rate: 450, offer: 90, category: "Bombs" },
  { no: 20, name: "King of King", unit: "1 Box", rate: 500, offer: 100, category: "Bombs" },
  { no: 21, name: "Classic Bomb", unit: "1 Box", rate: 600, offer: 120, category: "Bombs" },

  // Paper Bombs
  { no: 22, name: "Adiyal Small ¼ Kg", unit: "1 Pc", rate: 250, offer: 55, category: "Paper Bombs" },
  { no: 23, name: "Adiyal ½ Kg", unit: "1 Pc", rate: 500, offer: 105, category: "Paper Bombs" },

  // Rockets
  { no: 24, name: "Baby Rocket", unit: "1 Box", rate: 275, offer: 50, category: "Rockets" },
  { no: 25, name: "Rocket Bomb", unit: "1 Box", rate: 400, offer: 80, category: "Rockets" },
  { no: 26, name: "Musical Rocket", unit: "1 Box", rate: 950, offer: 190, category: "Rockets" },

  // Loose Crackers
  { no: 27, name: "Red Bijili (50 Pcs)", unit: "1 Pkt", rate: 100, offer: 20, category: "Loose Crackers" },
  { no: 28, name: "Red Bijili (100 Pcs)", unit: "1 Pkt", rate: 200, offer: 40, category: "Loose Crackers" },

  // Peacock
  { no: 29, name: "Magic Peacock", unit: "1 Pc", rate: 1000, offer: 200, category: "Peacock Varieties Fountain" },
  { no: 30, name: "Bada Peacock", unit: "1 Pc", rate: 2250, offer: 450, category: "Peacock Varieties Fountain" },

  // Grand Super Fountain
  { no: 31, name: "Pogo", unit: "1 Pc", rate: 225, offer: 45, category: "Grand Super Fountain" },
  { no: 32, name: "Angry Bird", unit: "1 Pc", rate: 425, offer: 85, category: "Grand Super Fountain" },
  { no: 33, name: "Disco Shower", unit: "1 Box", rate: 700, offer: 140, category: "Grand Super Fountain" },
  { no: 34, name: "Golden Rain", unit: "1 Box", rate: 750, offer: 150, category: "Grand Super Fountain" },
  { no: 35, name: "Water Queen", unit: "1 Box", rate: 1250, offer: 250, category: "Grand Super Fountain" },
  { no: 36, name: "Siren", unit: "1 Box", rate: 800, offer: 160, category: "Grand Super Fountain" },
  { no: 37, name: "Color Fountain (2 Pcs)", unit: "1 Box", rate: 1100, offer: 220, category: "Grand Super Fountain" },

  // Novelties
  { no: 38, name: "Zee Boom Baa", unit: "1 Box", rate: 75, offer: 15, category: "Novelties Crackers" },
  { no: 39, name: "Magic Pops", unit: "1 Box", rate: 75, offer: 15, category: "Novelties Crackers" },
  { no: 40, name: "Colour Electric Stone", unit: "1 Box", rate: 75, offer: 15, category: "Novelties Crackers" },
  { no: 41, name: "Helicopter", unit: "1 Box", rate: 600, offer: 120, category: "Novelties Crackers" },
  { no: 42, name: "Butterfly", unit: "1 Box", rate: 600, offer: 120, category: "Novelties Crackers" },
  { no: 43, name: "Disco Wheel", unit: "1 Box", rate: 650, offer: 130, category: "Novelties Crackers" },
  { no: 44, name: "Photo Flash", unit: "1 Box", rate: 450, offer: 90, category: "Novelties Crackers" },

  // Kids
  { no: 45, name: "Selfie Stick", unit: "1 Box", rate: 400, offer: 80, category: "Kids Varieties" },
  { no: 46, name: "Money Bank", unit: "1 Pc", rate: 350, offer: 70, category: "Kids Varieties" },
  { no: 47, name: "Ultra Pencil", unit: "1 Box", rate: 500, offer: 100, category: "Kids Varieties" },
  { no: 48, name: "Popcorn / Water Fall Pencil", unit: "1 Box", rate: 1050, offer: 210, category: "Kids Varieties" },
  { no: 49, name: "Emu Egg", unit: "1 Box", rate: 1100, offer: 220, category: "Kids Varieties" },
  { no: 50, name: "Vel", unit: "1 Pc", rate: 750, offer: 150, category: "Kids Varieties" },
  { no: 51, name: "Bat", unit: "1 Pc", rate: 1000, offer: 200, category: "Kids Varieties" },
  { no: 52, name: "Icone", unit: "1 Box", rate: 1500, offer: 300, category: "Kids Varieties" },
  { no: 53, name: "Kulfi", unit: "1 Box", rate: 1750, offer: 350, category: "Kids Varieties" },
  { no: 54, name: "Cylinder Bomb", unit: "1 Pc", rate: 1000, offer: 200, category: "Kids Varieties" },
  { no: 55, name: "Sword", unit: "1 Pc", rate: 1000, offer: 200, category: "Kids Varieties" },
  { no: 56, name: "Old Is Gold", unit: "1 Box", rate: 900, offer: 180, category: "Kids Varieties" },
  { no: 57, name: "Shinchan", unit: "1 Box", rate: 600, offer: 120, category: "Kids Varieties" },
  { no: 58, name: "Snake Serpent Big", unit: "1 Box", rate: 150, offer: 30, category: "Kids Varieties" },
  { no: 59, name: "Ring Cap", unit: "1 Pc", rate: 50, offer: 10, category: "Kids Varieties" },
  { no: 60, name: "Colour Matches", unit: "1 Box", rate: 125, offer: 25, category: "Kids Varieties" },

  // Sparklers
  { no: 61, name: "7CM Electric Sparklers", unit: "1 Box", rate: 50, offer: 10, category: "Sparklers" },
  { no: 62, name: "7CM Colour Sparklers", unit: "1 Box", rate: 60, offer: 12, category: "Sparklers" },
  { no: 63, name: "7CM Green Sparklers", unit: "1 Box", rate: 65, offer: 13, category: "Sparklers" },
  { no: 64, name: "10CM Electric Sparklers", unit: "1 Box", rate: 75, offer: 18, category: "Sparklers" },
  { no: 65, name: "10CM Colour Sparklers", unit: "1 Box", rate: 100, offer: 20, category: "Sparklers" },
  { no: 66, name: "10CM Green Sparklers", unit: "1 Box", rate: 125, offer: 25, category: "Sparklers" },
  { no: 67, name: "12CM Electric Sparklers", unit: "1 Box", rate: 145, offer: 29, category: "Sparklers" },
  { no: 68, name: "12CM Colour Sparklers", unit: "1 Box", rate: 155, offer: 31, category: "Sparklers" },
  { no: 69, name: "15CM Electric Sparklers", unit: "1 Box", rate: 220, offer: 44, category: "Sparklers" },
  { no: 70, name: "15CM Colour Sparklers", unit: "1 Box", rate: 240, offer: 48, category: "Sparklers" },
  { no: 71, name: "15CM Green Sparklers", unit: "1 Box", rate: 250, offer: 50, category: "Sparklers" },
  { no: 72, name: "30CM Electric Sparklers", unit: "1 Box", rate: 225, offer: 45, category: "Sparklers" },
  { no: 73, name: "30CM Colour Sparklers", unit: "1 Box", rate: 240, offer: 48, category: "Sparklers" },
  { no: 74, name: "30CM Green Sparklers", unit: "1 Box", rate: 250, offer: 50, category: "Sparklers" },
  { no: 75, name: "50CM Electric Sparklers", unit: "1 Box", rate: 900, offer: 180, category: "Sparklers" },
  { no: 76, name: "50CM Colour Sparklers", unit: "1 Box", rate: 950, offer: 190, category: "Sparklers" },
  { no: 77, name: "Umbrella Sparklers", unit: "1 Box", rate: 1100, offer: 220, category: "Sparklers" },

  // Garland
  { no: 78, name: "100 Wala", unit: "1 Box", rate: 250, offer: 50, category: "Garland" },
  { no: 79, name: "200 Wala", unit: "1 Box", rate: 500, offer: 100, category: "Garland" },
  { no: 80, name: "1K", unit: "1 Box", rate: 1000, offer: 200, category: "Garland" },
  { no: 81, name: "2K", unit: "1 Box", rate: 2000, offer: 400, category: "Garland" },
  { no: 82, name: "5K", unit: "1 Box", rate: 5000, offer: 1000, category: "Garland" },
  { no: 83, name: "10K", unit: "1 Box", rate: 10000, offer: 2000, category: "Garland" },

  // Aerial Fancy Shots
  { no: 84, name: "1 ¼ Chotta Fancy", unit: "1 Pc", rate: 250, offer: 50, category: "Aerial Fancy Shots" },
  { no: 85, name: "2” Fancy", unit: "1 Pc", rate: 550, offer: 110, category: "Aerial Fancy Shots" },
  { no: 86, name: "3” Jelly Fancy", unit: "1 Pc", rate: 1500, offer: 300, category: "Aerial Fancy Shots" },
  { no: 87, name: "3 ½” Silver Fancy", unit: "1 Pc", rate: 1750, offer: 350, category: "Aerial Fancy Shots" },
  { no: 88, name: "3 ½” Digital Star / Nayagra Falls", unit: "1 Pc", rate: 2000, offer: 400, category: "Aerial Fancy Shots" },
  { no: 89, name: "4” Double Ball", unit: "1 Pc", rate: 3000, offer: 600, category: "Aerial Fancy Shots" },
  { no: 90, name: "Aerial Mega Fancy", unit: "1 Box", rate: 5500, offer: 1100, category: "Aerial Fancy Shots" },

  // Multiple Aerial Shots
  { no: 91, name: "7 Shot", unit: "1 Box", rate: 500, offer: 110, category: "Multiple Aerial Shots" },
  { no: 92, name: "15 Shot Multicolour", unit: "1 Pc", rate: 1750, offer: 350, category: "Multiple Aerial Shots" },
  { no: 93, name: "25 Shot Rider", unit: "1 Pc", rate: 1500, offer: 300, category: "Multiple Aerial Shots" },
  { no: 94, name: "30 Shot Multicolour", unit: "1 Pc", rate: 2400, offer: 480, category: "Multiple Aerial Shots" },
  { no: 95, name: "60 Shot Multicolour", unit: "1 Pc", rate: 4750, offer: 950, category: "Multiple Aerial Shots" },
  { no: 96, name: "120 Shot Multicolour", unit: "1 Pc", rate: 10000, offer: 2000, category: "Multiple Aerial Shots" },
  { no: 97, name: "240 Shot Multicolour", unit: "1 Pc", rate: 18500, offer: 3700, category: "Multiple Aerial Shots" },

  // Gift Boxes
  { no: 98, name: "21 Items", unit: "1 Box", rate: 420, category: "Gift Boxes" },
  { no: 99, name: "25 Items", unit: "1 Box", rate: 500, category: "Gift Boxes" },
  { no: 100, name: "40 Items", unit: "1 Box", rate: 800, category: "Gift Boxes" },
  { no: 101, name: "50 Items", unit: "1 Box", rate: 1000, category: "Gift Boxes" },

  // Combo
  { no: 102, name: "1500 Combo Pack", unit: "1 Box", rate: 1500, category: "Combo Pack" },
  { no: 103, name: "3000 Combo Pack", unit: "1 Box", rate: 3000, category: "Combo Pack" },
];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const whatsappNumber = "918675718487";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const categoryMatch = category === "All" || p.category === category;
      const queryMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        String(p.no).includes(q);
      return categoryMatch && queryMatch;
    });
  }, [query, category]);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I would like to enquire about your crackers and prices."
  )}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09080d] text-white">
      {/* Ambient festive background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="firework fw-one">✦</div>
        <div className="firework fw-two">✦</div>
        <div className="firework fw-three">✦</div>
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <header className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-5 py-12 shadow-2xl sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,.20),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-amber-300">
              Sivakasi Crackers • 2026
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Light Up Your{" "}
              <span className="gold-text">Celebration</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
              Explore our crackers collection with special discounted rates.
              Browse by category or search for a product instantly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="glass-pill">
                <span className="text-amber-300">80%</span> discount
              </div>
              <div className="glass-pill">Wholesale & Retail</div>
              <div className="glass-pill">Home Delivery Available</div>
            </div>
          </div>
        </header>

        <div className="sticky top-3 z-30 mt-5 rounded-2xl border border-white/10 bg-black/60 p-3 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
                ⌕
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search crackers..."
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] pl-11 pr-4 text-sm outline-none transition placeholder:text-white/30 focus:border-amber-400/50 focus:bg-white/[0.09]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[62%]">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`category-chip whitespace-nowrap ${
                    category === item ? "category-active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
              Crackers catalogue
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              {category === "All" ? "All Products" : category}
            </h2>
          </div>
          <p className="text-right text-xs text-white/45">
            {filtered.length} products
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-20 text-center">
            <div className="text-5xl">🔎</div>
            <h3 className="mt-4 text-xl font-bold">No crackers found</h3>
            <p className="mt-2 text-sm text-white/45">
              Try another product name or category.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, index) => (
              <article
                key={product.no}
                className="product-card group"
                style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="number-badge">#{product.no}</span>
                  {product.offer ? (
                    <span className="discount-badge">
                      {Math.round((1 - product.offer / product.rate) * 100)}% OFF
                    </span>
                  ) : (
                    <span className="net-badge">NET RATE</span>
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300/65">
                    {product.category}
                  </p>
                  <h3 className="mt-2 min-h-[3.5rem] text-lg font-bold leading-6 text-white transition group-hover:text-amber-200">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-white/8 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">
                      {product.unit}
                    </p>
                    <p className="mt-1 text-sm text-white/40 line-through">
                      ₹{product.rate.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-amber-300/55">
                      {product.offer ? "Offer price" : "Price"}
                    </p>
                    <p className="mt-0.5 text-2xl font-black text-amber-300">
                      ₹{(product.offer ?? product.rate).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <a
                  href={`${whatsappUrl}&product=${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex h-10 items-center justify-center rounded-xl bg-white/[0.06] text-xs font-bold text-white/75 transition hover:bg-amber-400 hover:text-black"
                >
                  Enquire on WhatsApp
                </a>
              </article>
            ))}
          </div>
        )}

        <footer className="mt-16 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Terms & Conditions
          </p>
          <div className="mx-auto mt-4 max-w-3xl space-y-2 text-xs leading-5 text-white/45">
            <p>• Products once sold will not be exchanged or returned.</p>
            <p>• If a particular product is unavailable, it may be replaced with a product of the same function.</p>
            <p>• Minimum order value: ₹2,000. Transport charges extra.</p>
            <p>• Last date of booking: 31/10/2026.</p>
            <p>• Google Pay / Phone Pay: 8675718487 / 8012772734.</p>
          </div>
        </footer>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
        className="whatsapp-float"
      >
        <span className="whatsapp-ring" />
        <span className="text-2xl">◉</span>
        <span className="hidden sm:block">WhatsApp</span>
      </a>
    </main>
  );
}
