"use client";

import { motion } from "framer-motion";
import type { Bike } from "@/data/bikes";
import { HomeBikeCard } from "@/components/Home/BikeCard/HomeBikeCard";
import { cn } from "@/lib/cn";

type LocationHeroShowcaseProps = {
  bikes: Bike[];
  variant?: "default" | "immersive";
};

const IMMERSIVE_STAGGER = ["mb-0", "mb-8", "mb-14", "mb-5"] as const;

export function LocationHeroShowcase({
  bikes,
  variant = "default",
}: LocationHeroShowcaseProps) {
  const isImmersive = variant === "immersive";
  const desktopBikes = bikes.slice(0, 4);

  return (
    <div className="w-full min-w-0">
      {isImmersive ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-[820px] lg:block"
        >
          <div
            className="pointer-events-none absolute inset-x-[8%] bottom-[12%] z-0 h-[50%] rounded-[50%] bg-primary-yellow/12 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-end justify-center gap-3 xl:gap-4">
            {desktopBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.35 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "w-[172px] shrink-0 xl:w-[188px]",
                  IMMERSIVE_STAGGER[index] ?? "mb-3",
                )}
              >
                <HomeBikeCard bike={bike} variant="showcase" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[300px] w-full max-w-[680px] items-center justify-center min-[400px]:h-[340px] sm:h-[400px] md:h-[460px] lg:h-[min(620px,100%)] lg:min-h-[580px] xl:max-w-[700px]"
        >
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full text-primary-yellow/50 lg:block"
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
      )}

      <div className={cn("mt-5 w-full", isImmersive && "lg:hidden")}>
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
            <HomeBikeCard
              key={`mobile-${bike.id}`}
              bike={bike}
              variant="showcase"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
