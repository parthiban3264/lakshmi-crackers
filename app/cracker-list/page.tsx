"use client";

import { useState, useMemo } from "react";

interface CrackerItem {
  id: number;
  name: string;
  category: string;
  unit: string;
  originalPrice: number;
  discountedPrice: number;
}

const CRACKER_DATA: CrackerItem[] = [
  // SINGLE SOUND CRACKERS
  { id: 1, name: "2 ¾ KURUVI", category: "Single Sound Crackers", unit: "1 Pkt", originalPrice: 40, discountedPrice: 8 },
  { id: 2, name: "3 ½ LAKSHMI", category: "Single Sound Crackers", unit: "1 Pkt", originalPrice: 80, discountedPrice: 16 },
  { id: 3, name: "4\" LAKSHMI", category: "Single Sound Crackers", unit: "1 Pkt", originalPrice: 100, discountedPrice: 20 },
  { id: 4, name: "4\" GOLD LAKSHMI (12 Ply)", category: "Single Sound Crackers", unit: "1 Pkt", originalPrice: 160, discountedPrice: 32 },
  { id: 5, name: "5\" DELUXE LAKSHMI", category: "Single Sound Crackers", unit: "1 Pkt", originalPrice: 250, discountedPrice: 50 },

  // FLOWER POTS
  { id: 6, name: "FLOWER POTS BIG", category: "Flower Pots", unit: "1 Box", originalPrice: 325, discountedPrice: 65 },
  { id: 7, name: "FLOWER POTS SPECIAL", category: "Flower Pots", unit: "1 Box", originalPrice: 475, discountedPrice: 95 },
  { id: 8, name: "FLOWER POTS DELUXE", category: "Flower Pots", unit: "1 Box", originalPrice: 950, discountedPrice: 190 },
  { id: 9, name: "COLOUR KOTI", category: "Flower Pots", unit: "1 Box", originalPrice: 1050, discountedPrice: 210 },
  { id: 10, name: "MINI TRI COLOR FOUNTAIN", category: "Flower Pots", unit: "1 Box", originalPrice: 1150, discountedPrice: 230 },

  // GROUND CHAKKAR
  { id: 11, name: "GROUND CHAKKAR BIG (10Pcs)", category: "Ground Chakkar", unit: "1 Box", originalPrice: 225, discountedPrice: 45 },
  { id: 12, name: "GROUND CHAKKAR BIG (25Pcs)", category: "Ground Chakkar", unit: "1 Box", originalPrice: 450, discountedPrice: 90 },
  { id: 13, name: "GROUND CHAKKAR SPECIAL", category: "Ground Chakkar", unit: "1 Box", originalPrice: 500, discountedPrice: 100 },
  { id: 14, name: "WIRE CHAKKAR", category: "Ground Chakkar", unit: "1 Box", originalPrice: 900, discountedPrice: 180 },
  { id: 15, name: "4 * 4 WHEEL", category: "Ground Chakkar", unit: "1 Box", originalPrice: 950, discountedPrice: 190 },

  // TWINKLING STAR
  { id: 16, name: "1 ½ TWINKLING STAR", category: "Twinkling Star", unit: "1 Box", originalPrice: 150, discountedPrice: 30 },
  { id: 17, name: "4\" TWINKLING STAR", category: "Twinkling Star", unit: "1 Box", originalPrice: 375, discountedPrice: 75 },

  // BOMBS
  { id: 18, name: "ATOM BOMB", category: "Bombs", unit: "1 Box", originalPrice: 300, discountedPrice: 60 },
  { id: 19, name: "HYDRO BOMB", category: "Bombs", unit: "1 Box", originalPrice: 450, discountedPrice: 90 },
  { id: 20, name: "KING OF KING", category: "Bombs", unit: "1 Box", originalPrice: 500, discountedPrice: 100 },
  { id: 21, name: "CLASSIC BOMB", category: "Bombs", unit: "1 Box", originalPrice: 600, discountedPrice: 120 },

  // PAPER BOMBS
  { id: 22, name: "ADIYAL SMALL ¼ KG", category: "Paper Bombs", unit: "1 PC", originalPrice: 250, discountedPrice: 55 },
  { id: 23, name: "ADIYAL ½ KG", category: "Paper Bombs", unit: "1 PC", originalPrice: 500, discountedPrice: 105 },

  // ROCKETS
  { id: 24, name: "BABY ROCKET", category: "Rockets", unit: "1 Box", originalPrice: 275, discountedPrice: 50 },
  { id: 25, name: "ROCKET BOMB", category: "Rockets", unit: "1 Box", originalPrice: 400, discountedPrice: 80 },
  { id: 26, name: "MUSICAL ROCKET", category: "Rockets", unit: "1 Box", originalPrice: 950, discountedPrice: 190 },

  // LOOSE CRACKERS
  { id: 27, name: "RED BIJILI (50 Pcs)", category: "Loose Crackers", unit: "1 Pkt", originalPrice: 100, discountedPrice: 20 },
  { id: 28, name: "RED BIJILI (100 Pcs)", category: "Loose Crackers", unit: "1 Pkt", originalPrice: 200, discountedPrice: 40 },

  // PEACOCK VARIETIES FOUNTAIN
  { id: 29, name: "MAGIC PEACOCK", category: "Peacock Varieties", unit: "1 Pc", originalPrice: 1000, discountedPrice: 200 },
  { id: 30, name: "BADA PEACOCK", category: "Peacock Varieties", unit: "1 Pc", originalPrice: 2250, discountedPrice: 450 },

  // GRAND SUPER FOUNTAIN
  { id: 31, name: "POGO", category: "Fountains", unit: "1 PC", originalPrice: 225, discountedPrice: 45 },
  { id: 32, name: "ANGRY BIRD", category: "Fountains", unit: "1 PC", originalPrice: 425, discountedPrice: 85 },
  { id: 33, name: "DISCO SHOWER", category: "Fountains", unit: "1 Box", originalPrice: 700, discountedPrice: 140 },
  { id: 34, name: "GOLDEN RAIN", category: "Fountains", unit: "1 Box", originalPrice: 750, discountedPrice: 150 },
  { id: 35, name: "WATER QUEEN", category: "Fountains", unit: "1 Box", originalPrice: 1250, discountedPrice: 250 },
  { id: 36, name: "SIREN", category: "Fountains", unit: "1 Box", originalPrice: 800, discountedPrice: 160 },
  { id: 37, name: "COLOR FOUNTAIN (2PCS)", category: "Fountains", unit: "1 Box", originalPrice: 1100, discountedPrice: 220 },

  // NOVELTIES CRACKERS
  { id: 38, name: "ZEE BOOM BAA", category: "Novelties", unit: "1 Box", originalPrice: 75, discountedPrice: 15 },
  { id: 39, name: "MAGIC POPS", category: "Novelties", unit: "1 Box", originalPrice: 75, discountedPrice: 15 },
  { id: 40, name: "COLOUR ELECTRIC STONE", category: "Novelties", unit: "1 Box", originalPrice: 75, discountedPrice: 15 },
  { id: 41, name: "HELICOPTER", category: "Novelties", unit: "1 Box", originalPrice: 600, discountedPrice: 120 },
  { id: 42, name: "BUTTERFLY", category: "Novelties", unit: "1 Box", originalPrice: 600, discountedPrice: 120 },
  { id: 43, name: "DISCO WHEEL", category: "Novelties", unit: "1 Box", originalPrice: 650, discountedPrice: 130 },
  { id: 44, name: "PHOTO FLASH", category: "Novelties", unit: "1 Box", originalPrice: 450, discountedPrice: 90 },

  // KIDS VARIETIES
  { id: 45, name: "SELFIE STICK", category: "Kids Varieties", unit: "1 Box", originalPrice: 400, discountedPrice: 80 },
  { id: 46, name: "MONEY BANK", category: "Kids Varieties", unit: "1 PC", originalPrice: 350, discountedPrice: 70 },
  { id: 47, name: "ULTRA PENCIL", category: "Kids Varieties", unit: "1 Box", originalPrice: 500, discountedPrice: 100 },
  { id: 48, name: "POPCORN / WATER FALL PENCIL", category: "Kids Varieties", unit: "1 Box", originalPrice: 1050, discountedPrice: 210 },
  { id: 49, name: "EMU EGG", category: "Kids Varieties", unit: "1 Box", originalPrice: 1100, discountedPrice: 220 },
  { id: 50, name: "VEL", category: "Kids Varieties", unit: "1 Pc", originalPrice: 750, discountedPrice: 150 },
  { id: 51, name: "BAT", category: "Kids Varieties", unit: "1 Pc", originalPrice: 1000, discountedPrice: 200 },
  { id: 52, name: "ICONE", category: "Kids Varieties", unit: "1 Box", originalPrice: 1500, discountedPrice: 300 },
  { id: 53, name: "KULFI", category: "Kids Varieties", unit: "1 Box", originalPrice: 1750, discountedPrice: 350 },
  { id: 54, name: "CYLINDER BOMB", category: "Kids Varieties", unit: "1 Pc", originalPrice: 1000, discountedPrice: 200 },
  { id: 55, name: "SWORD", category: "Kids Varieties", unit: "1 Pc", originalPrice: 1000, discountedPrice: 200 },
  { id: 56, name: "OLD IS GOLD", category: "Kids Varieties", unit: "1 Box", originalPrice: 900, discountedPrice: 180 },
  { id: 57, name: "SHINCHAN", category: "Kids Varieties", unit: "1 Box", originalPrice: 600, discountedPrice: 120 },
  { id: 58, name: "SNAKE SERPENT BIG", category: "Kids Varieties", unit: "1 Box", originalPrice: 150, discountedPrice: 30 },
  { id: 59, name: "RING CAP", category: "Kids Varieties", unit: "1 PC", originalPrice: 50, discountedPrice: 10 },
  { id: 60, name: "COLOUR MATCHES", category: "Kids Varieties", unit: "1 Box", originalPrice: 125, discountedPrice: 25 },

  // SPARKLERS
  { id: 61, name: "7CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 50, discountedPrice: 10 },
  { id: 62, name: "7CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 60, discountedPrice: 12 },
  { id: 63, name: "7CM GREEN SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 65, discountedPrice: 13 },
  { id: 64, name: "10CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 75, discountedPrice: 18 },
  { id: 65, name: "10CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 100, discountedPrice: 20 },
  { id: 66, name: "10CM GREEN SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 125, discountedPrice: 25 },
  { id: 67, name: "12CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 145, discountedPrice: 29 },
  { id: 68, name: "12CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 155, discountedPrice: 31 },
  { id: 69, name: "15CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 220, discountedPrice: 44 },
  { id: 70, name: "15CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 240, discountedPrice: 48 },
  { id: 71, name: "15CM GREEN SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 250, discountedPrice: 50 },
  { id: 72, name: "30CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 225, discountedPrice: 45 },
  { id: 73, name: "30CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 240, discountedPrice: 48 },
  { id: 74, name: "30CM GREEN SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 250, discountedPrice: 50 },
  { id: 75, name: "50CM ELECTRIC SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 900, discountedPrice: 180 },
  { id: 76, name: "50CM COLOUR SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 950, discountedPrice: 190 },
  { id: 77, name: "UMBERLLA SPARKLERS", category: "Sparklers", unit: "1 Box", originalPrice: 1100, discountedPrice: 220 },

  // GARLAND (WALA)
  { id: 78, name: "100 WALA", category: "Garland", unit: "1 Box", originalPrice: 250, discountedPrice: 50 },
  { id: 79, name: "200 WALA", category: "Garland", unit: "1 Box", originalPrice: 500, discountedPrice: 100 },
  { id: 80, name: "1K WALA", category: "Garland", unit: "1 Box", originalPrice: 1000, discountedPrice: 200 },
  { id: 81, name: "2K WALA", category: "Garland", unit: "1 Box", originalPrice: 2000, discountedPrice: 400 },
  { id: 82, name: "5K WALA", category: "Garland", unit: "1 Box", originalPrice: 5000, discountedPrice: 1000 },
  { id: 83, name: "10K WALA", category: "Garland", unit: "1 Box", originalPrice: 10000, discountedPrice: 2000 },

  // AERIAL FANCY SHOTS
  { id: 84, name: "1 ¼ CHOTTA FANCY", category: "Aerial Shots", unit: "1 Pc", originalPrice: 250, discountedPrice: 50 },
  { id: 85, name: "2\" FANCY", category: "Aerial Shots", unit: "1 Pc", originalPrice: 550, discountedPrice: 110 },
  { id: 86, name: "3\" JELLY FANCY", category: "Aerial Shots", unit: "1 Pc", originalPrice: 1500, discountedPrice: 300 },
  { id: 87, name: "3 ½\" SILVER FANCY", category: "Aerial Shots", unit: "1 Pc", originalPrice: 1750, discountedPrice: 350 },
  { id: 88, name: "3 ½\" DIGITAL STAR / NAYAGRA FALLS", category: "Aerial Shots", unit: "1 Pc", originalPrice: 2000, discountedPrice: 400 },
  { id: 89, name: "4\" DOUBLE BALL", category: "Aerial Shots", unit: "1 Pc", originalPrice: 3000, discountedPrice: 600 },
  { id: 90, name: "AERIAL MEGA FANCY", category: "Aerial Shots", unit: "1 Box", originalPrice: 5500, discountedPrice: 1100 },

  // MULTIPLE AERIAL SHOTS (SOUND & COLOURFUL)
  { id: 91, name: "7 SHOT", category: "Multiple Aerial Shots", unit: "1 Box", originalPrice: 500, discountedPrice: 110 },
  { id: 92, name: "15 SHOT MULTICOLOUR", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 1750, discountedPrice: 350 },
  { id: 93, name: "25 SHOT RIDER", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 1500, discountedPrice: 300 },
  { id: 94, name: "30 SHOT MULTICOLOUR", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 2400, discountedPrice: 480 },
  { id: 95, name: "60 SHOT MULTICOLOUR", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 4750, discountedPrice: 950 },
  { id: 96, name: "120 SHOT MULTICOLOUR", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 10000, discountedPrice: 2000 },
  { id: 97, name: "240 SHOT MULTICOLOUR", category: "Multiple Aerial Shots", unit: "1 Pc", originalPrice: 18500, discountedPrice: 3700 },

  // GIFT BOXES (NET RATE)
  { id: 98, name: "21 ITEMS GIFT BOX", category: "Gift Boxes", unit: "1 Box", originalPrice: 420, discountedPrice: 420 },
  { id: 99, name: "25 ITEMS GIFT BOX", category: "Gift Boxes", unit: "1 Box", originalPrice: 500, discountedPrice: 500 },
  { id: 100, name: "40 ITEMS GIFT BOX", category: "Gift Boxes", unit: "1 Box", originalPrice: 800, discountedPrice: 800 },
  { id: 101, name: "50 ITEMS GIFT BOX", category: "Gift Boxes", unit: "1 Box", originalPrice: 1000, discountedPrice: 1000 },

  // COMBO PACK (NET RATE)
  { id: 102, name: "1500 COMBO PACK", category: "Combo Packs", unit: "1 Box", originalPrice: 1500, discountedPrice: 1500 },
  { id: 103, name: "3000 COMBO PACK", category: "Combo Packs", unit: "1 Box", originalPrice: 3000, discountedPrice: 3000 },
];

const CATEGORIES = [
  "All",
  "Single Sound Crackers",
  "Flower Pots",
  "Ground Chakkar",
  "Twinkling Star",
  "Bombs",
  "Paper Bombs",
  "Rockets",
  "Loose Crackers",
  "Peacock Varieties",
  "Fountains",
  "Novelties",
  "Kids Varieties",
  "Sparklers",
  "Garland",
  "Aerial Shots",
  "Multiple Aerial Shots",
  "Gift Boxes",
  "Combo Packs",
];

export default function CrackerListPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const filteredItems = useMemo(() => {
    return CRACKER_DATA.filter((item) => {
      const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, search]);

  const { totalItems, totalPrice, totalSavings } = useMemo(() => {
    let itemsCount = 0;
    let price = 0;
    let savings = 0;

    Object.entries(quantities).forEach(([idStr, qty]) => {
      const item = CRACKER_DATA.find((p) => p.id === Number(idStr));
      if (item && qty > 0) {
        itemsCount += qty;
        price += item.discountedPrice * qty;
        savings += (item.originalPrice - item.discountedPrice) * qty;
      }
    });

    return { totalItems: itemsCount, totalPrice: price, totalSavings: savings };
  }, [quantities]);

  const generateWhatsAppUrl = () => {
    const phoneNumber = "918056903264";
    let message = `*✨ DIWALI CRACKER ORDER REQUEST - LAKSHMI AGENCY ✨*\n\n`;

    const selectedList = Object.entries(quantities)
      .map(([idStr, qty]) => {
        const item = CRACKER_DATA.find((p) => p.id === Number(idStr));
        if (item && qty > 0) {
          return `• ${item.name} (${item.unit}) x ${qty} = ₹${item.discountedPrice * qty}`;
        }
        return null;
      })
      .filter(Boolean);

    if (selectedList.length > 0) {
      message += `*Selected Items:*\n${selectedList.join("\n")}\n\n`;
      message += `*Total Items:* ${totalItems}\n`;
      message += `*Estimated Amount:* ₹${totalPrice}\n\n`;
    } else {
      message += `Hello Lakshmi Agency, I would like to place an enquiry for crackers.\n\n`;
    }

    message += `Please confirm availability and transport details. Thank you!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] text-stone-900 selection:bg-orange-200">
      {/* Top Festive Brand Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff2e0] via-[#fffaf2] to-[#fffaf2] px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/80 bg-orange-100/70 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">
              Sivakasi Direct Crackers • Up to 80% Discount
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-5xl">
            Lakshmi Agency Fireworks
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-stone-600 sm:text-base">
            Original Sivakasi crackers with mega 80% festival discount. Select your favorite items, view live totals, and order directly on WhatsApp!
          </p>

          {/* Quick Highlights Bar */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-orange-200 bg-white/90 p-3 shadow-sm">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Discount</span>
              <span className="text-xl font-black text-stone-900">Up to 80% OFF</span>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-white/90 p-3 shadow-sm">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Door Delivery</span>
              <span className="text-xl font-black text-stone-900">Chennai & TN</span>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-white/90 p-3 shadow-sm">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Min. Order</span>
              <span className="text-xl font-black text-stone-900">₹2,000</span>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-white/90 p-3 shadow-sm">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Orders & GPay</span>
              <span className="text-base sm:text-lg font-black text-[#b45309]">8675718487</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 pb-32">
        {/* Controls: Search and Categories */}
        <div className="sticky top-3 z-30 mb-6 space-y-3 rounded-2xl border border-orange-200/90 bg-[#fffaf2]/95 p-3 shadow-md backdrop-blur-md">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Box */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search crackers (e.g. Flower Pots, Sparklers, 240 Shot)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-orange-200 bg-white px-5 py-2.5 pl-11 text-sm font-medium text-stone-800 placeholder-stone-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              <span className="absolute left-4 top-2.5 text-orange-500">🔍</span>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-2.5 text-xs font-bold text-stone-400 hover:text-stone-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Summary Pill */}
            {totalItems > 0 && (
              <div className="flex items-center gap-3 self-end sm:self-center bg-orange-100 border border-orange-200 px-4 py-2 rounded-full">
                <span className="text-xs font-bold text-stone-700">
                  {totalItems} items selected
                </span>
                <span className="text-sm font-black text-[#b45309]">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 transition ${
                  selectedCategory === cat
                    ? "bg-[#b45309] text-white shadow-sm"
                    : "border border-orange-200 bg-white text-stone-600 hover:bg-orange-50 hover:text-orange-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crackers Table / Grid */}
        <div className="overflow-hidden rounded-2xl border border-orange-200/90 bg-white shadow-[0_10px_30px_rgba(180,83,9,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-stone-700">
              <thead className="border-b border-orange-200 bg-orange-50/70 text-xs font-bold uppercase tracking-wider text-orange-900">
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-center sm:w-14">#</th>
                  <th scope="col" className="px-4 py-3.5">Product Name</th>
                  <th scope="col" className="px-3 py-3.5 text-center sm:w-24">Unit</th>
                  <th scope="col" className="px-3 py-3.5 text-right sm:w-28">Original MRP</th>
                  <th scope="col" className="px-3 py-3.5 text-right sm:w-32">
                    <span className="text-orange-700 font-extrabold">80% Rate</span>
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-center sm:w-36">Add to Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-stone-400">
                      No crackers found matching &quot;{search}&quot;. Try a different term.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => {
                    const qty = quantities[item.id] || 0;
                    return (
                      <tr
                        key={item.id}
                        className={`transition hover:bg-orange-50/40 ${
                          qty > 0 ? "bg-orange-50/30" : ""
                        }`}
                      >
                        {/* ID */}
                        <td className="px-3 py-3 text-center text-xs font-bold text-stone-400">
                          {item.id}
                        </td>

                        {/* Name & Category */}
                        <td className="px-4 py-3">
                          <div className="font-bold text-stone-900">{item.name}</div>
                          <div className="text-[11px] font-semibold text-orange-600/80">
                            {item.category}
                          </div>
                        </td>

                        {/* Unit */}
                        <td className="px-3 py-3 text-center text-xs font-semibold text-stone-600">
                          <span className="inline-block rounded-md bg-stone-100 px-2 py-0.5">
                            {item.unit}
                          </span>
                        </td>

                        {/* Original MRP */}
                        <td className="px-3 py-3 text-right font-medium text-stone-400 line-through">
                          ₹{item.originalPrice}
                        </td>

                        {/* Discounted Price */}
                        <td className="px-3 py-3 text-right">
                          <span className="text-base font-black text-[#b45309]">
                            ₹{item.discountedPrice}
                          </span>
                        </td>

                        {/* Quantity Controls */}
                        <td className="px-4 py-3 text-center">
                          {qty === 0 ? (
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800 transition hover:bg-[#b45309] hover:text-white"
                            >
                              + Add
                            </button>
                          ) : (
                            <div className="inline-flex items-center gap-1 rounded-full border border-orange-300 bg-white p-0.5 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-6 w-6 rounded-full bg-orange-100 text-xs font-black text-orange-900 hover:bg-orange-200"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-7 text-center text-xs font-black text-stone-900">
                                {qty}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-6 w-6 rounded-full bg-[#b45309] text-xs font-black text-white hover:bg-[#933d08]"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms & Important Information Card */}
        <div className="mt-8 rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
            <span>📋</span> Terms and Conditions
          </h2>
          <ul className="mt-3 grid gap-2 text-xs sm:text-sm text-stone-600 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Products once sold will not be exchanged or returned.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Minimum order value is <strong>₹2,000</strong>. Transport charges extra.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Last date of booking is <strong>31/10/2026</strong> due to rain & transport rush.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Google Pay / PhonePe: <strong>8675718487 / 8012772734</strong>.
            </li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <span className="text-orange-500 font-bold">•</span>
              Address: 4/444 D Ayyanar Colony, Near ARD Mahal, Sivakasi.
            </li>
          </ul>
        </div>
      </main>

      {/* Floating WhatsApp Order Button */}
      <aside aria-label="Order actions" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        {totalItems > 0 && (
          <div className="rounded-2xl border border-orange-200 bg-white px-4 py-2 shadow-xl backdrop-blur-md animate-bounce">
            <p className="text-xs font-bold text-stone-600">
              Total: <span className="font-black text-[#b45309]">₹{totalPrice.toLocaleString("en-IN")}</span>
              {totalSavings > 0 && (
                <span className="ml-1.5 text-[10px] text-emerald-600 font-extrabold">
                  (Saved ₹{totalSavings.toLocaleString("en-IN")})
                </span>
              )}
            </p>
          </div>
        )}

        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3.5 text-white shadow-[0_12px_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:shadow-[0_15px_35px_rgba(16,185,129,0.5)] focus:ring-4 focus:ring-green-300"
        >
          {/* WhatsApp SVG Icon */}
          <div className="relative">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </div>
          <div className="text-left">
            <span className="block text-xs font-semibold uppercase tracking-wider text-green-100">
              {totalItems > 0 ? "Order on WhatsApp" : "Quick Order"}
            </span>
            <span className="block text-sm font-black leading-none">
              WhatsApp Us
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}