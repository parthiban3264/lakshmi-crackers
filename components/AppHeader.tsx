"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", icon: "⌂" },
  { label: "About", icon: "✦" },
  { label: "List", icon: "☰" },
  { label: "Contact", icon: "✆" },
  { label: "Latest Offers", icon: "⚡" },
];

function getHref(item: string) {
  if (item === "Home") return "#home";
  if (item === "About") return "#about";
  if (item === "List") return "#list";
  if (item === "Contact") return "#contact";
  return "#offers";
}

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-200/70 bg-[#fffaf2]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 lg:px-8">
        <div className="rounded-full border border-orange-200/80 bg-white/85 shadow-[0_12px_30px_rgba(120,53,15,0.08)] ring-1 ring-orange-50/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-3 py-2.5 sm:px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-amber-400 to-red-400 text-lg shadow-lg shadow-orange-200/80">
                🎇
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b45309] sm:text-sm">
                  Lakshmiagency
                </span>
                <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-[9px]">
                  Sivakasi
                </span>
              </div>
            </div>

            <nav className="hidden items-center justify-center gap-1 rounded-full bg-orange-50/80 p-1.5 shadow-inner shadow-orange-100 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={getHref(item.label)}
                  className="rounded-full px-3 py-2 text-[11px] font-semibold text-stone-700 transition hover:bg-white hover:text-orange-700 lg:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#contact"
                className="hidden rounded-full bg-[#b45309] px-4 py-2 text-[14px] font-bold text-white shadow-md shadow-orange-200/80 transition hover:bg-[#933d08] sm:inline-flex"
              >
                Order Now
              </a>

              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-xl text-orange-700 shadow-sm shadow-orange-100 transition hover:bg-orange-100 lg:hidden"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="px-3 pb-3 lg:hidden">
          <div className="rounded-[1.5rem] border border-orange-200 bg-white/95 p-3 shadow-[0_18px_40px_rgba(120,53,15,0.12)]">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={getHref(item.label)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50 px-3 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-orange-200 hover:bg-orange-100 hover:text-orange-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base shadow-sm shadow-orange-100">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}