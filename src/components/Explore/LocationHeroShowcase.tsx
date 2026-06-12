"use client";

import { motion } from "framer-motion";
import type { Bike } from "@/data/bikes";
import { HomeBikeCard } from "@/components/Home/BikeCard/HomeBikeCard";
import { cn } from "@/lib/cn";

type LocationHeroShowcaseProps = {
  bikes: Bike[];
  variant?: "default" | "immersive";
};

export function LocationHeroShowcase({
  bikes,
  variant = "default",
}: LocationHeroShowcaseProps) {
  const isImmersive = variant === "immersive";

  return (
    <div className="w-full min-w-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative mx-auto flex w-full max-w-[680px] items-center justify-center xl:max-w-[700px]",
          isImmersive
            ? "h-[300px] min-[400px]:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[min(560px,100%)] lg:min-h-[500px]"
            : "h-[300px] min-[400px]:h-[340px] sm:h-[400px] md:h-[460px] lg:h-[min(620px,100%)] lg:min-h-[580px]",
        )}
      >
        {isImmersive && (
          <div
            className="pointer-events-none absolute inset-x-[8%] top-[12%] z-0 h-[55%] rounded-[50%] bg-primary-yellow/15 blur-3xl"
            aria-hidden="true"
          />
        )}

        <svg
          className={cn(
            "pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block",
            isImmersive ? "text-primary-yellow/35" : "text-primary-yellow/50",
          )}
          viewBox="0 0 400 520"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M40 40 C120 80, 200 120, 320 100 S 360 280, 280 360 S 120 420, 60 480"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative h-full w-full max-w-[640px] overflow-visible">
          {bikes.map((bike) => (
            <HomeBikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </motion.div>

      <div className="mt-5 w-full lg:hidden">
        <p
          className={cn(
            "mb-3 text-center text-[11px] font-bold tracking-[0.14em]",
            isImmersive ? "text-white/70" : "text-[#475569]",
          )}
        >
          BIKES IN THIS LOCATION
        </p>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {bikes.map((bike) => (
            <HomeBikeCard key={`mobile-${bike.id}`} bike={bike} variant="grid" />
          ))}
        </div>
      </div>
    </div>
  );
}
