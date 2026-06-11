"use client";

import { useMemo, useState } from "react";
import {
  BrowseVehiclesFilter,
  type VehicleFilters,
} from "@/components/Explore/BrowseVehiclesFilter";
import { VehicleCard, type BrowseVehicle } from "@/app/explore/VehicleCard";

type BrowseVehiclesSectionProps = {
  vehicles: BrowseVehicle[];
  initialLocation?: string;
  lockLocationFilter?: boolean;
};

export function BrowseVehiclesSection({
  vehicles,
  initialLocation = "all",
  lockLocationFilter = false,
}: BrowseVehiclesSectionProps) {
  const [filters, setFilters] = useState<VehicleFilters>({
    category: "all",
    location: initialLocation,
  });

  const locationCounts = useMemo(() => {
    return vehicles.reduce<Record<string, number>>((counts, vehicle) => {
      counts[vehicle.location] = (counts[vehicle.location] ?? 0) + 1;
      return counts;
    }, {});
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesCategory =
        filters.category === "all" || vehicle.category === filters.category;
      const matchesLocation =
        lockLocationFilter ||
        filters.location === "all" ||
        vehicle.location === filters.location;

      return matchesCategory && matchesLocation;
    });
  }, [filters.category, filters.location, lockLocationFilter, vehicles]);

  return (
    <>
      <BrowseVehiclesFilter
        filters={filters}
        onFiltersChange={setFilters}
        locationCounts={locationCounts}
        hideLocationFilter={lockLocationFilter}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}
