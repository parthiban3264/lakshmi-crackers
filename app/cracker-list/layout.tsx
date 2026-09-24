import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sivakasi Crackers | 2026 Catalogue",
  description: "Browse our Sivakasi crackers catalogue and contact us on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
