"use client";

import type { BrowseVehicle } from "@/data/vehicles";
import type { ExploreLocation } from "@/data/exploreLocations";
import { getLocationShowcaseBikes } from "@/lib/location-showcase";
import { BrowseVehiclesSection } from "./BrowseVehiclesSection";
import { LocationHeroSection } from "./LocationHeroSection";

type LocationExploreViewProps = {
  location: ExploreLocation;
  vehicles: BrowseVehicle[];
};

export function LocationExploreView({
  location,
  vehicles,
}: LocationExploreViewProps) {
  const showcaseBikes = getLocationShowcaseBikes(
    location.slug,
    location.vehicleLocationSlugs,
    vehicles,
  );

  return (
    <>
      <LocationHeroSection
        hero={location.hero}
        showcaseBikes={showcaseBikes}
        locationName={location.name}
      />

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
