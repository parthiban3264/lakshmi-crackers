import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DiwaliFlowerpot from "../components/DiwaliFlowerpot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = ["Home", "About", "List", "Contact", "Latest Offers"];

export const metadata: Metadata = {
  title: "Lakshmi Agency Sivakasi | Crackers & Diwali Offers",
  description:
    "Lakshmi Agency Sivakasi offers premium fireworks, festive crackers, family packs, and latest Diwali deals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffaf2] text-stone-900">
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-orange-200/80 bg-[#fffaf2]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden md:block">
                  <DiwaliFlowerpot scale={0.13} active className="drop-shadow-[0_10px_15px_rgba(245,158,11,0.25)]" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-black uppercase tracking-[0.12em] text-[#b45309] sm:text-lg">
                    Lakshmiagency
                  </span>
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-[10px]">
                    Sivakasi
                  </span>
                </div>
              </div>

              <nav className="hidden items-center justify-center gap-1 rounded-full border border-orange-200 bg-white/80 px-2 py-2 shadow-sm md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Home"
                        ? "#home"
                        : item === "About"
                          ? "#about"
                          : item === "List"
                            ? "#list"
                            : item === "Contact"
                              ? "#contact"
                              : "#offers"
                    }
                    className="rounded-full px-3 py-2 text-xs font-semibold text-stone-700 transition hover:bg-orange-50 hover:text-orange-700 lg:text-sm"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="#contact"
                  className="hidden rounded-full bg-[#b45309] px-4 py-2 text-[11px] font-bold text-white shadow-md shadow-orange-200 transition hover:bg-[#933d08] sm:inline-flex"
                >
                  Order Now
                </a>
                <div className="hidden sm:block">
                  <DiwaliFlowerpot scale={0.12} active className="drop-shadow-[0_10px_15px_rgba(239,68,68,0.18)]" />
                </div>
              </div>
            </div>

            <nav className="border-t border-orange-100 bg-white/80 md:hidden">
              <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-3 py-3 text-xs font-semibold text-stone-700">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Home"
                        ? "#home"
                        : item === "About"
                          ? "#about"
                          : item === "List"
                            ? "#list"
                            : item === "Contact"
                              ? "#contact"
                              : "#offers"
                    }
                    className="whitespace-nowrap rounded-full border border-orange-200 bg-orange-50 px-3 py-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
