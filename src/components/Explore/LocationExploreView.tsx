"use client";

import { motion } from "framer-motion";
import { Bike, MapPin } from "lucide-react";
import Image from "next/image";
import type { BrowseVehicle } from "@/data/vehicles";
import type { ExploreLocation } from "@/data/exploreLocations";
import { heroBg } from "@/assets/images";
import { BrowseVehiclesSection } from "./BrowseVehiclesSection";

type LocationExploreViewProps = {
  location: ExploreLocation;
  vehicles: BrowseVehicle[];
};

export function LocationExploreView({
  location,
  vehicles,
}: LocationExploreViewProps) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-x-clip px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-14 lg:pt-32 xl:px-20 xl:pt-36"
        aria-label={`Explore bikes in ${location.name}`}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1320px]">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-col items-start text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#475569] shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:text-[11px]">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-primary-yellow"
                  aria-hidden="true"
                />
                LOCATION EXPLORE
              </span>

              <h1 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px]">
                <span className="block">Ride in</span>
                <span className="block text-primary-yellow">{location.name}</span>
              </h1>

              <p className="mt-2 flex items-center gap-1.5 text-[13px] font-semibold text-[#64748B] sm:text-[14px]">
                <MapPin
                  className="size-4 shrink-0 text-primary-yellow"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                {location.region}
              </p>

              <p className="mt-4 max-w-[520px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]">
                {location.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {location.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-[#E8EDF3] px-4 py-2 text-[12px] font-semibold text-[#475569] sm:text-[13px]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.1)] sm:rounded-[32px] lg:rounded-[36px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={location.image}
                    alt={`${location.name}, ${location.region}`}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 88vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/55 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-4 py-2 text-[12px] font-bold text-dark-navy shadow-[0_8px_24px_rgba(15,23,42,0.1)] sm:text-[13px]">
                    <Bike
                      className="size-4 text-primary-yellow"
                      aria-hidden="true"
                    />
                    {location.bikesLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section
        id="bike-models"
        className="scroll-mt-24 bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
        aria-label={`Available vehicles in ${location.name}`}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="text-center">
            <h2 className="text-[28px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[32px]">
              Bikes Available in {location.name}
            </h2>
            <p className="mx-auto mt-3 max-w-[640px] text-[15px] font-medium leading-[1.7] text-[#64748B]">
              Browse well-maintained rentals ready for pickup and rides around{" "}
              {location.name}.
            </p>
          </div>

          <BrowseVehiclesSection vehicles={vehicles} lockLocationFilter />
        </div>
      </section>
    </>
  );
}
