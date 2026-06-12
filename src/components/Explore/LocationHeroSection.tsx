"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { Bike } from "@/data/bikes";
import type { ExploreLocationHero } from "@/data/exploreLocations";
import { LocationHeroLeft } from "./LocationHeroLeft";
import { LocationHeroShowcase } from "./LocationHeroShowcase";

type LocationHeroSectionProps = {
  hero: ExploreLocationHero;
  showcaseBikes: Bike[];
  locationName: string;
  backgroundImage: StaticImageData;
};

export function LocationHeroSection({
  hero,
  showcaseBikes,
  locationName,
  backgroundImage,
}: LocationHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[min(100vh,920px)] overflow-hidden sm:min-h-[min(92vh,880px)] lg:min-h-[min(88vh,820px)]"
      aria-label={`Rent a bike in ${locationName}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[68%_center] lg:object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 max-lg:via-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent lg:from-black/40" />
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-col justify-end px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:px-10 md:pb-12 lg:px-16 lg:pb-14 lg:pt-32 xl:px-20 xl:pb-16">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
            <div className="relative z-20 w-full min-w-0 self-end justify-self-start lg:max-w-[600px] xl:max-w-[640px]">
              <LocationHeroLeft hero={hero} />
            </div>

            <div className="relative z-10 hidden w-full min-w-0 items-end justify-center overflow-visible lg:flex lg:min-h-[520px] xl:min-h-[560px]">
              <LocationHeroShowcase bikes={showcaseBikes} variant="immersive" />
            </div>
          </div>

          <div className="mt-6 lg:hidden">
            <LocationHeroShowcase bikes={showcaseBikes} variant="immersive" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
