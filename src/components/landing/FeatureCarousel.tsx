"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LandingIcon } from "@/components/icons/LandingIcon";
import type { SolutionFeature } from "./SolutionPage";

export function FeatureCarousel({ features }: { features: SolutionFeature[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 20;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="reveal mt-12">
      {/* Controls Top */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-gray-500">
          Slide through all {features.length} features
        </p>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4"
      >
        {features.map((feature, index) => (
          <article
            key={feature.title}
            data-card
            className="group relative flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-full border border-gray-200/80 bg-white transition-all duration-500 ease-out hover:-translate-y-2 sm:w-[58%] lg:w-[calc((100%-3rem)*0.4)]"
          >
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={feature.image}
                alt={`Sellers Login ${feature.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/45 via-transparent to-transparent" />

              {feature.badge ? (
                <span className="absolute right-4 top-4 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                  {feature.badge}
                </span>
              ) : null}

              <span className="absolute -bottom-6 left-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-purple-700 shadow-lg ring-1 ring-gray-100">
                <LandingIcon name={feature.icon} size={24} />
              </span>
              <span className="absolute bottom-4 right-5 text-3xl font-black tabular-nums text-white/85 drop-shadow">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col px-7 pb-8 pt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-950">{feature.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{feature.text}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Controls Bottom */}
      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          aria-label="Previous features"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-900"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={!canNext}
          aria-label="Next features"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300 bg-purple-200 text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:bg-purple-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
