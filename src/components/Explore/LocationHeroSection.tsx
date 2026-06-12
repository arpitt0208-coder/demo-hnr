"use client";

import { motion } from "framer-motion";
import type { Bike } from "@/data/bikes";
import type { ExploreLocationHero } from "@/data/exploreLocations";
import { EtherealShadow } from "@/components/UI/etheral-shadow";
import { LocationHeroLeft } from "./LocationHeroLeft";
import { LocationHeroShowcase } from "./LocationHeroShowcase";

type LocationHeroSectionProps = {
  hero: ExploreLocationHero;
  showcaseBikes: Bike[];
  locationName: string;
};

export function LocationHeroSection({
  hero,
  showcaseBikes,
  locationName,
}: LocationHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-clip px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-20 xl:pt-36"
      aria-label={`Rent a bike in ${locationName}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <EtherealShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
          className="h-full w-full"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="relative grid items-start gap-6 pb-4 sm:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-6">
          <div className="relative z-20 w-full min-w-0 self-start justify-self-start lg:max-w-[560px] xl:max-w-[580px]">
            <LocationHeroLeft hero={hero} />
          </div>

          <div className="relative z-10 flex w-full min-w-0 items-start justify-center overflow-x-clip lg:min-h-[600px]">
            <LocationHeroShowcase bikes={showcaseBikes} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
