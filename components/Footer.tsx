const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "◎" },
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "WhatsApp", href: "https://wa.me/919876543210", icon: "✆" },
  { label: "Twitter", href: "https://x.com", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶" },
  { label: "Email", href: "mailto:lakshmiagency@gmail.com", icon: "✉" },
  { label: "Phone", href: "tel:+919876543210", icon: "☎" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-orange-200/80 bg-[#1d120b] text-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-orange-300/20 bg-gradient-to-br from-[#2a180d] via-[#1d120b] to-[#120d08] p-4 shadow-[0_18px_45px_rgba(120,53,15,0.2)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-amber-400 to-red-400 text-xl shadow-lg shadow-orange-900/30">
                🎇
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-[0.18em] text-[#fbbf24] sm:text-lg">
                  Lakshmi Agency
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-orange-200/75 sm:text-[10px]">
                  Sivakasi
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/40 bg-white/5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-500/20 hover:text-[#fbbf24]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-[1.3fr_0.7fr_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fbbf24]">
                Address
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-orange-100/80">
                4/44 D Ayyanar Colony, Near ARD Mahal, Sivakasi, Tamil Nadu
              </p>
              <a
                href="https://maps.google.com/?q=4%2F44%20D%20Ayyanar%20Colony%20Near%20ARD%20Mahal%20Sivakasi"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-orange-300/40 bg-[#fff7ed]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#fbbf24] transition hover:bg-[#fff7ed]/10"
              >
                Live Location
              </a>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fbbf24]">
                Quick Links
              </p>
              <ul className="mt-4 space-y-3 text-sm text-orange-100/80">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["List", "#list"],
                  ["Contact", "#contact"],
                  ["Latest Offers", "#offers"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fbbf24]">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-orange-100/80">
                <a href="tel:+919876543210" className="flex items-center gap-3 transition hover:text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-base text-[#fbbf24]">
                    ☎
                  </span>
                  +91 98765 43210
                </a>
                <a href="mailto:lakshmiagency@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-base text-[#fbbf24]">
                    ✉
                  </span>
                  lakshmiagency@gmail.com
                </a>
                <p className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-base text-[#fbbf24]">
                    ☎
                  </span>
                  Order / Booking
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs font-medium tracking-[0.12em] text-orange-100/70 sm:text-sm">
          © 2026 Lakshmi Agency • All rights reserved
        </div>
      </div>
    </footer>
  );
}
