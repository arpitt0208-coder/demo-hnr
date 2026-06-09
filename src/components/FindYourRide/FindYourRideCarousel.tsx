"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef } from "react";
import { findYourRideBikes } from "@/data/findYourRide";
import { FindYourRideCard } from "./FindYourRideCard";

const CARD_STEP = 220;

export function FindYourRideCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -CARD_STEP : CARD_STEP,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative mt-10 flex w-full items-center justify-center lg:mt-12">
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#F1F5F9] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.12)] sm:-left-2 sm:size-10 lg:-left-4"
        aria-label="Scroll bikes left"
      >
        <ChevronLeft
          className="size-4 text-dark-navy sm:size-[18px]"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </button>

      <div
        ref={scrollRef}
        className="flex w-full max-w-[1120px] gap-3 overflow-x-auto scroll-smooth px-9 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {findYourRideBikes.map((bike) => (
          <FindYourRideCard key={bike.id} bike={bike} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#F1F5F9] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.12)] sm:-right-2 sm:size-10 lg:-right-4"
        aria-label="Scroll bikes right"
      >
        <ChevronRight
          className="size-4 text-dark-navy sm:size-[18px]"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
