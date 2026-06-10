"use client";

import { useId, useMemo } from "react";
import { Filter, LayoutGrid, MapPin, X } from "lucide-react";
import { Label } from "@/components/UI/label";
import { SelectNative } from "@/components/UI/select-native";
import { cn } from "@/lib/cn";

export type VehicleFilters = {
  category: string;
  location: string;
};

type BrowseVehiclesFilterProps = {
  filters: VehicleFilters;
  onFiltersChange: (filters: VehicleFilters) => void;
  locationCounts: Record<string, number>;
};

const categoryOptions = [
  { value: "all", label: "All categories" },
  { value: "bikes", label: "Bikes" },
  { value: "scooters", label: "Scooters" },
  { value: "adventure", label: "Adventure" },
] as const;

const locationLabels: Record<string, string> = {
  bhuntar: "Bhuntar",
  manali: "Manali",
  kullu: "Kullu",
  kasol: "Kasol",
  "leh-ladakh": "Leh Ladakh",
};

function formatLocationLabel(value: string, count: number) {
  if (value === "all") {
    return "All locations";
  }

  const name = locationLabels[value] ?? value;
  return `${name} — ${count} vehicle${count === 1 ? "" : "s"}`;
}

function formatCategoryLabel(value: string) {
  return categoryOptions.find((option) => option.value === value)?.label ?? value;
}

export function BrowseVehiclesFilter({
  filters,
  onFiltersChange,
  locationCounts,
}: BrowseVehiclesFilterProps) {
  const categoryId = useId();
  const locationId = useId();

  const { category, location } = filters;
  const hasActiveFilters = category !== "all" || location !== "all";

  const locationOptions = useMemo(() => {
    const totalCount = Object.values(locationCounts).reduce(
      (sum, count) => sum + count,
      0,
    );

    return [
      { value: "all", label: formatLocationLabel("all", totalCount) },
      ...Object.entries(locationLabels)
        .filter(([value]) => (locationCounts[value] ?? 0) > 0)
        .map(([value]) => ({
          value,
          label: formatLocationLabel(value, locationCounts[value] ?? 0),
        })),
    ];
  }, [locationCounts]);

  const clearAllFilters = () => {
    onFiltersChange({ category: "all", location: "all" });
  };

  const clearLocation = () => {
    onFiltersChange({ ...filters, location: "all" });
  };

  const selectClassName =
    "h-11 rounded-xl bg-white text-[14px] font-medium text-dark-navy shadow-none focus-visible:ring-primary-yellow/20";

  return (
    <div className="mt-8 rounded-2xl border border-[#E8ECF0] bg-white p-5 shadow-[0_2px_14px_rgba(15,23,42,0.04)] sm:p-6">
      <div className="flex items-center gap-2">
        <Filter
          className="size-4 shrink-0 text-primary-yellow"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <h3 className="text-[16px] font-bold text-dark-navy">
          Filter by category &amp; location
        </h3>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="space-y-2">
          <Label
            htmlFor={categoryId}
            className="text-[13px] font-medium text-[#64748B]"
          >
            Category
          </Label>
          <SelectNative
            id={categoryId}
            value={category}
            onChange={(event) =>
              onFiltersChange({ ...filters, category: event.target.value })
            }
            className={cn(
              selectClassName,
              "border-[#1A1A1A] pe-10 ps-3.5",
            )}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectNative>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor={locationId}
            className="text-[13px] font-medium text-[#64748B]"
          >
            Location
          </Label>
          <div className="relative">
            <SelectNative
              id={locationId}
              value={location}
              onChange={(event) =>
                onFiltersChange({ ...filters, location: event.target.value })
              }
              className={cn(
                selectClassName,
                "border-[#E2E8F0] ps-3.5",
                location !== "all" ? "pe-[4.5rem]" : "pe-10",
              )}
            >
              {locationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectNative>
            {location !== "all" && (
              <div className="absolute end-9 top-1/2 z-10 flex -translate-y-1/2 items-center">
                <button
                  type="button"
                  aria-label="Clear location filter"
                  onClick={clearLocation}
                  className="flex size-7 items-center justify-center text-[#94A3B8] transition-colors hover:text-dark-navy"
                >
                  <X className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                </button>
                <span
                  className="mx-1 h-5 w-px bg-[#E2E8F0]"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex flex-col gap-3 rounded-xl bg-[#F5F6F8] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[13px] font-medium text-[#64748B]">
              Active filter:
            </span>

            {category !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] px-3 py-1.5 text-[12px] font-semibold text-white">
                <LayoutGrid className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
                {formatCategoryLabel(category)}
              </span>
            )}

            {location !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] px-3 py-1.5 text-[12px] font-semibold text-white">
                <MapPin className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
                <span>{locationLabels[location] ?? location}</span>
                <span className="font-medium text-white/60">
                  ({locationCounts[location] ?? 0} vehicle
                  {(locationCounts[location] ?? 0) === 1 ? "" : "s"})
                </span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={clearAllFilters}
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#64748B] shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-colors hover:text-dark-navy sm:self-auto"
          >
            <X className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
