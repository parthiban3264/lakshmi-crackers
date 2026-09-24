import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppHeader from "../components/AppHeader";
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
        
          <div className = "flex flex-row items-center justify-center">
            <div className="flex items-center justify-center overflow-visible">
            <DiwaliFlowerpot
              scale={0.13}
              active= {true}
              
            />
          </div>
          
          <AppHeader />

          <div className="flex items-center justify-center overflow-visible">
            <DiwaliFlowerpot
              scale={0.13}
              active= {true}
            />
          </div>
          </div>
          {children}
      </body>
    </html>
  );
}