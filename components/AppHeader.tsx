
"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", icon: "⌂", href: "#home" },
  { label: "About", icon: "✦", href: "#about" },
  { label: "List", icon: "☰", href: "#list" },
  { label: "Contact", icon: "✆", href: "#contact" },
  { label: "Latest Offers", icon: "⚡", href: "#offers" },
];

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-200/60 bg-[#fffaf2]/90 backdrop-blur-xl">

      {/* ================================================= */}
      {/* MAIN HEADER */}
      {/* ================================================= */}

      <div className="mx-auto w-full max-w-7xl px-2 py-2.5 sm:px-4 sm:py-3 lg:px-6 lg:py-4">

        <div
          className="
            flex w-full items-center justify-between
            rounded-2xl
            border border-orange-200/80
            bg-white/90
            px-3 py-2.5
            shadow-[0_10px_30px_rgba(120,53,15,0.07)]
            sm:rounded-full
            sm:px-4 sm:py-2.5
            lg:px-5
          "
        >

          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <a
            href="#home"
            className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          >
            {/* Logo Icon */}
            <div
              className="
                flex shrink-0 items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-orange-400
                via-amber-400
                to-red-400
                shadow-md
                shadow-orange-200/70
                h-9 w-9
                text-base
                sm:h-10 sm:w-10
                sm:text-lg
              "
            >
              🎇
            </div>

            {/* Brand */}
            <div className="min-w-0 leading-none">
              <span
                className="
                  block truncate
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-[#b45309]
                  sm:text-sm
                  sm:tracking-[0.18em]
                "
              >
                Lakshmi Agency
              </span>

              <span
                className="
                  mt-1 block
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-stone-500
                  sm:text-[9px]
                  sm:tracking-[0.28em]
                "
              >
                Sivakasi
              </span>
            </div>
          </a>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav className="hidden lg:flex items-center rounded-full bg-orange-50/80 p-1.5 shadow-inner shadow-orange-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  whitespace-nowrap
                  rounded-full
                  px-3 py-2
                  text-xs
                  font-semibold
                  text-stone-700
                  transition-all
                  duration-200
                  hover:bg-white
                  hover:text-orange-700
                  xl:px-4
                  xl:text-sm
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ================================================= */}
          {/* RIGHT ACTIONS */}
          {/* ================================================= */}

          <div className="flex shrink-0 items-center gap-2">

            {/* Desktop Order Button */}
            <a
              href="#contact"
              className="
                hidden
                rounded-full
                bg-[#b45309]
                px-4 py-2
                text-xs
                font-bold
                text-white
                shadow-md
                shadow-orange-200/70
                transition
                hover:bg-[#933d08]
                xl:inline-flex
                xl:px-5
                xl:py-2.5
                xl:text-sm
              "
            >
              Order Now
            </a>

            {/* Mobile / Tablet Menu */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="
                flex
                h-9 w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-orange-200
                bg-orange-50
                text-base
                text-orange-700
                shadow-sm
                transition-all
                duration-200
                hover:bg-orange-100
                active:scale-95
                sm:h-10 sm:w-10
                sm:text-lg
                lg:hidden
              "
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE / TABLET MENU */}
      {/* ================================================= */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-out
          lg:hidden
          ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-2 pb-3 sm:px-4 sm:pb-4">

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              rounded-2xl
              border
              border-orange-200
              bg-white/95
              p-2.5
              shadow-[0_15px_40px_rgba(120,53,15,0.12)]
              sm:rounded-3xl
              sm:p-3
            "
          >

            {/* Mobile Navigation */}
            <nav className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    flex
                    min-h-11
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-orange-100
                    bg-orange-50/70
                    px-3
                    py-2.5
                    text-sm
                    font-semibold
                    text-stone-700
                    transition-all
                    duration-200
                    hover:border-orange-200
                    hover:bg-orange-100
                    hover:text-orange-700
                    active:scale-[0.98]
                    sm:min-h-12
                    sm:rounded-2xl
                    sm:px-4
                  "
                >
                  <span
                    className="
                      flex
                      h-8 w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-sm
                      text-orange-700
                      shadow-sm
                      shadow-orange-100
                      sm:h-9 sm:w-9
                    "
                  >
                    {item.icon}
                  </span>

                  <span className="truncate">
                    {item.label}
                  </span>

                  <span className="ml-auto text-orange-300">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile Order Button */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mt-2.5
                flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#b45309]
                px-4
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-md
                shadow-orange-200/60
                transition
                hover:bg-[#933d08]
                active:scale-[0.98]
                sm:mt-3
                sm:min-h-12
                sm:rounded-2xl
              "
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
