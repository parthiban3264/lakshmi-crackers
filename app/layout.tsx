import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AppHeader from "@/components/AppHeader";
import DiwaliFlowerpot from "@/components/DiwaliFlowerpot";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshmi Agency Sivakasi | Crackers & Diwali Offers",
  description:
    "Lakshmi Agency Sivakasi offers premium fireworks, festive crackers, family packs, and latest Diwali deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fffaf2] text-stone-900">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="w-full">
          {/* ================= DESKTOP ================= */}
          <div className="hidden w-full items-center lg:flex">
            {/* LEFT FLOWERPOT */}
            <div className="shrink-0">
              <DiwaliFlowerpot scale={0.15} active={true} />
            </div>

            {/* APP HEADER */}
            <div className="min-w-0 flex-1">
              <AppHeader />
            </div>

            {/* RIGHT FLOWERPOT */}
            <div className="shrink-0">
              <DiwaliFlowerpot scale={0.15} active={true} />
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex w-full items-center lg:hidden">
            {/* LEFT FLOWERPOT */}
            <div className="flex w-8 shrink-0 items-center justify-center overflow-visible">
              <div className="origin-center scale-[0.35]">
                <DiwaliFlowerpot scale={0.15} active={true} />
              </div>
            </div>

            {/* APP HEADER */}
            <div className="min-w-0 flex-1">
              <AppHeader />
            </div>

            {/* RIGHT FLOWERPOT */}
            <div className="flex w-8 shrink-0 items-center justify-center overflow-visible">
              <div className="origin-center scale-[0.35]">
                <DiwaliFlowerpot scale={0.15} active={true} />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <main className="min-w-0 w-full flex-1">{children}</main>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <Footer />
      </body>
    </html>
  );
}
