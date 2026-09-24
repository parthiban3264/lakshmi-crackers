
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fff7ed]"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-orange-200/80 bg-white shadow-[0_20px_60px_rgba(120,53,15,0.10)] sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">

              {/* Small label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />

                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-orange-700 sm:text-[10px]">
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-tight text-stone-900 sm:text-4xl md:text-[2.7rem] lg:text-5xl xl:text-[3.25rem]">
                Plan your
                <span className="text-[#b45309]"> festive celebration </span>
                with us.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">
                Looking for crackers for your family, function, or bulk
                celebration? Visit our store or get in touch with our team
                for festive orders and special requirements.
              </p>

              {/* Feature points */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

                {/* Feature 1 */}
                <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg">
                    🎆
                  </div>

                  <div>
                    <p className="text-xs font-black text-stone-900 sm:text-sm">
                      Festive Collection
                    </p>

                    <p className="mt-0.5 text-[11px] text-stone-500">
                      Family & celebration packs
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg">
                    📦
                  </div>

                  <div>
                    <p className="text-xs font-black text-stone-900 sm:text-sm">
                      Bulk Orders
                    </p>

                    <p className="mt-0.5 text-[11px] text-stone-500">
                      Custom order assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop location note */}
              <div className="mt-8 hidden items-center gap-3 border-t border-orange-100 pt-6 sm:flex">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  📍
                </div>

                <div>
                  <p className="text-xs font-black text-stone-900">
                    Visit our store
                  </p>

                  <p className="mt-0.5 text-xs text-stone-500">
                    Sivakasi, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT CONTACT CARD */}
            {/* ================================================= */}
            <div className="relative bg-[#2a160c] p-5 sm:p-7 md:p-8 lg:p-10">

              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl" />

              <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-6 lg:p-7">

                {/* Card heading */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">
                    Get in touch
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    We’re here to help.
                  </h3>
                </div>

                {/* Contact details */}
                <div className="mt-7 space-y-3">

                  {/* Phone */}
                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg shadow-lg shadow-orange-900/20">
                      ☎
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
                        Call us
                      </p>

                      <p className="mt-1 truncate text-sm font-bold text-white sm:text-base">
                        +91 98765 43210
                      </p>
                    </div>

                    <span className="ml-auto text-white/40 transition group-hover:translate-x-1 group-hover:text-orange-300">
                      →
                    </span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg shadow-lg shadow-orange-900/20">
                      📍
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
                        Store
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-white/90">
                        Lakshmi Agency
                        <br />
                        Sivakasi, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg shadow-lg shadow-orange-900/20">
                      ◷
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
                        Store Hours
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        9:00 AM – 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call button */}
                <a
                  href="tel:+919876543210"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-950/20 transition-all duration-300 hover:bg-orange-400 hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Call Now</span>
                  <span className="text-base">→</span>
                </a>

                {/* Small note */}
                <p className="mt-4 text-center text-[10px] leading-5 text-white/40">
                  For bulk orders and festive enquiries, please call us
                  during store hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile location */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
          <span className="text-sm">📍</span>

          <span className="text-xs font-medium text-stone-500">
            Sivakasi, Tamil Nadu
          </span>
        </div>
      </div>
    </section>
  );
}

