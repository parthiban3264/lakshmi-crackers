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
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[#fffaf2] text-stone-900">

        {/* ================= HEADER AREA ================= */}
        <div className="relative flex w-full items-center justify-center">

          {/* Left decoration - desktop/tablet */}
          <div className="hidden shrink-0 items-center justify-center lg:flex">
            <DiwaliFlowerpot
              scale={0.11}
              active={true}
            />
          </div>

          {/* Header */}
          <div className="min-w-0 flex-1">
            <AppHeader />
          </div>

          {/* Right decoration - desktop/tablet */}
          <div className="hidden shrink-0 items-center justify-center lg:flex">
            <DiwaliFlowerpot
              scale={0.12}
              active={true}
            />
          </div>

        </div>

        {/* Mobile decorative flowerpots */}
        <div className="pointer-events-none absolute left-0 top-1/2 z-40 hidden -translate-y-1/2 sm:block lg:hidden">
          <div className="scale-[0.65] origin-left">
            <DiwaliFlowerpot
              scale={0.12}
              active={true}
            />
          </div>
        </div>

        <main className="min-w-0 flex-1">
          {children}
          </main>
         <Footer/>
      </body>
     
    </html>
  );
}