"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const offerBanners = [
  {
    image: "/banner-1.png",
    title: "Mega Diwali Sale",
    subtitle: "Up to 40% OFF",
  },
  {
    image: "/banner-2.png",
    title: "Family Combo Packs",
    subtitle: "Starting ₹999",
  },
  {
    image: "/banner-3.png",
    title: "Premium Gift Boxes",
    subtitle: "Free Delivery",
  },
];

export default function OfferBanners() {
  const [selectedBanner, setSelectedBanner] = useState<
    (typeof offerBanners)[number] | null
  >(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  // ==========================================
  // AUTO HORIZONTAL SCROLL
  // ==========================================

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current += speed;

        /*
         * Half of the content is the original banners.
         * Once we reach half, reset to 0.
         */
        const resetPoint = slider.scrollWidth / 2;

        if (positionRef.current >= resetPoint) {
          positionRef.current = 0;
        }

        slider.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // ==========================================
  // ESC CLOSE
  // ==========================================

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedBanner(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ==========================================
  // LOCK BODY SCROLL
  // ==========================================

  useEffect(() => {
    if (selectedBanner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBanner]);

  // Duplicate for seamless loop
  const banners = [...offerBanners, ...offerBanners];

  return (
    <>
      <section
        id="offers"
        className="w-full overflow-hidden bg-gradient-to-b from-orange-50/60 to-white py-12 sm:py-14 md:py-16"
      >
        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600 sm:text-sm">
                Special Offers
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
                Festival Deals
              </h2>

              <p className="mt-2 max-w-xl text-sm text-stone-600 sm:text-base">
                Discover our special Diwali offers and festive cracker
                collections.
              </p>
            </div>

            <span className="text-xs font-medium text-stone-500 sm:text-sm">
              Tap any banner to view
            </span>
          </div>
        </div>

        {/* ==========================================
            SLIDER VIEWPORT
        ========================================== */}

        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          onTouchStart={() => {
            isPausedRef.current = true;
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              isPausedRef.current = false;
            }, 1000);
          }}
        >
          {/* LEFT FADE */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-orange-50/80 to-transparent sm:w-20 lg:w-28" />

          {/* RIGHT FADE */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-white to-transparent sm:w-20 lg:w-28" />

          {/* ==========================================
              MOVING TRACK
          ========================================== */}

          <div
            ref={sliderRef}
            className="flex w-max gap-4 px-4 sm:gap-5 sm:px-6 lg:gap-6"
          >
            {banners.map((item, index) => (
              <button
                key={`${item.image}-${index}`}
                type="button"
                onClick={() => setSelectedBanner(item)}
                className="
                  group
                  relative
                  h-[180px]
                  w-[300px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-orange-200
                  bg-stone-100
                  text-left
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-4
                  focus:ring-orange-300/50

                  sm:h-[230px]
                  sm:w-[430px]
                  sm:rounded-3xl

                  md:h-[270px]
                  md:w-[520px]

                  lg:h-[320px]
                  lg:w-[650px]

                  xl:h-[350px]
                  xl:w-[700px]
                "
              >
                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 640px) 300px,
                    (max-width: 768px) 430px,
                    (max-width: 1024px) 520px,
                    700px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">
                  <span className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider sm:text-xs">
                    Limited Offer
                  </span>

                  <h3 className="mt-2 text-xl font-black sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-base font-bold text-yellow-300 sm:text-lg md:text-xl">
                    {item.subtitle}
                  </p>

                  <span className="mt-3 inline-flex text-xs font-bold text-white/90 sm:text-sm">
                    Click to view →
                  </span>
                </div>

                {/* GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-yellow-400/20
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-yellow-400/40
                  "
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FULLSCREEN IMAGE
      ========================================== */}

      {selectedBanner && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-3
            backdrop-blur-sm
            sm:p-6
          "
          onClick={() => setSelectedBanner(null)}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedBanner(null)}
            aria-label="Close banner"
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-2xl
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/25
              sm:right-6
              sm:top-6
            "
          >
            ×
          </button>

          {/* IMAGE */}

          <div
            className="
              relative
              h-[80vh]
              w-full
              max-w-6xl
              overflow-hidden
              rounded-xl
              sm:h-[85vh]
              sm:rounded-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedBanner.image}
              alt={selectedBanner.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}