"use client";

import { motion } from "framer-motion";
import {
  Bike,
  CircleCheck,
  Clock,
  Compass,
  Globe,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type PlaceStatus = "available" | "coming";
type FilterOption = "all" | "available" | "coming";

type Place = {
  id: number;
  name: string;
  category: string;
  status: PlaceStatus;
  bikesLabel?: string;
  image: string;
};

const places: Place[] = [
  {
    id: 1,
    name: "Manali",
    category: "Himachal Pradesh",
    status: "available",
    bikesLabel: "55+ Bikes",
    image:
      "https://images.unsplash.com/photo-1666955479256-92b430bfa23b?w=400&h=260&fit=crop",
  },
  {
    id: 2,
    name: "Kullu",
    category: "Himachal Pradesh",
    status: "available",
    bikesLabel: "40+ Bikes",
    image:
      "https://images.unsplash.com/photo-1621340978972-1e3717f1eef6?w=400&h=260&fit=crop",
  },
  {
    id: 3,
    name: "Bhuntar",
    category: "Himachal Pradesh",
    status: "available",
    bikesLabel: "30+ Bikes",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=260&fit=crop",
  },
  {
    id: 4,
    name: "Delhi",
    category: "Delhi",
    status: "coming",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=260&fit=crop",
  },
  {
    id: 5,
    name: "Chandigarh",
    category: "Chandigarh",
    status: "coming",
    image:
      "https://images.unsplash.com/photo-1716131985076-07350de31afd?w=400&h=260&fit=crop",
  },
  {
    id: 6,
    name: "Jaipur",
    category: "Jaipur",
    status: "coming",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=260&fit=crop",
  },
];

const filterOptions: {
  id: FilterOption;
  label: string;
  icon: typeof Globe;
  iconClass?: string;
}[] = [
    { id: "all", label: "All Locations", icon: Globe },
    {
      id: "available",
      label: "Available Now",
      icon: MapPin,
      iconClass: "fill-primary-yellow text-primary-yellow",
    },
    {
      id: "coming",
      label: "Coming Soon",
      icon: MapPin,
      iconClass: "fill-[#E11D48] text-[#E11D48]",
    },
  ];

function LocationCard({ place }: { place: Place }) {
  const isAvailable = place.status === "available";

  return (
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_32px_rgba(15,23,42,0.1)]">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={place.image}
          alt={`${place.name}, ${place.category}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <MapPin
            size={16}
            strokeWidth={2}
            className={cn(
              "shrink-0",
            )}
            aria-hidden="true"
          />
          <h3 className="min-w-0 flex-1 truncate text-[16px] font-extrabold leading-tight text-[#0f172a] sm:text-[17px]">
            {place.name}
          </h3>
          {isAvailable && place.bikesLabel && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-yellow/15 px-3 py-1 text-[11px] font-bold text-primary-yellow">
              <Bike className="size-3.5 shrink-0" aria-hidden="true" />
              {place.bikesLabel}
            </span>
          )}
          {!isAvailable && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E11D48]/10 px-3 py-1 text-[11px] font-bold text-[#E11D48]">
              <Clock className="size-3.5 shrink-0" aria-hidden="true" />
              Coming Soon
            </span>
          )}
        </div>

        {place.category !== place.name && (
          <p className="mt-1 pl-6 text-[13px] font-semibold text-[#64748b]">
            {place.category}
          </p>
        )}
      </div>
    </article>
  );
}

function LocationGrid({ items }: { items: Place[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {items.map((place) => (
        <LocationCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export function LocationsMapSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const availablePlaces = places.filter((p) => p.status === "available");
  const comingPlaces = places.filter((p) => p.status === "coming");

  const showAvailable = activeFilter === "all" || activeFilter === "available";
  const showComing = activeFilter === "all" || activeFilter === "coming";

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-x-clip px-4 py-8 sm:px-6 sm:py-10"
      aria-label="Locations"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-yellow/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-primary-yellow">
            <Compass className="size-3.5 shrink-0" aria-hidden="true" />
            OUR LOCATIONS
          </span>

          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#0f172a] sm:mt-5 sm:text-[36px] md:text-[42px]">
            We&apos;re Where You Need Us
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-semibold leading-[1.75] text-[#0f172a] sm:mt-4 sm:text-[15px]">
            Explore the places we currently serve and the new locations
            we&apos;re bringing our service to soon.
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[640px] items-center justify-center gap-1 rounded-2xl border border-border/60 bg-white p-1.5 shadow-sm sm:mt-10 sm:gap-2 sm:p-2">
          {filterOptions.map(({ id, label, icon: Icon }) => {
            const isActive = activeFilter === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                className={[
                  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-[12px] font-bold transition-colors sm:gap-2 sm:px-4 sm:py-3 sm:text-[13px]",
                  isActive
                    ? "bg-primary-yellow/15 text-primary-yellow"
                    : "text-[#0f172a] hover:bg-[#FAFAFA]",
                ].join(" ")}
              >
                <Icon
                  className={cn(
                    "shrink-0",
                  )}
                  aria-hidden="true"
                />
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-10 sm:mt-10">
          {showAvailable && (
            <div>
              {activeFilter === "all" && (
                <h2 className="mb-5 flex items-center gap-2 text-[20px] font-extrabold text-[#0f172a] sm:mb-6 sm:text-[22px]">
                  <CircleCheck
                    className="size-5 shrink-0 text-primary-yellow"
                    aria-hidden="true"
                  />
                  Available Now
                </h2>
              )}
              <LocationGrid items={availablePlaces} />
            </div>
          )}

          {showComing && (
            <div>
              {activeFilter === "all" && (
                <h2 className="mb-5 flex items-center gap-2 text-[20px] font-extrabold text-[#0f172a] sm:mb-6 sm:text-[22px]">
                  <Clock
                    className="size-5 shrink-0 text-[#E11D48]"
                    aria-hidden="true"
                  />
                  Coming Soon
                </h2>
              )}
              <LocationGrid items={comingPlaces} />
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border/60 bg-white px-5 py-4 shadow-sm sm:mt-10 sm:px-6 sm:py-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-yellow/15 sm:size-11">
            <Rocket
              className="size-5 text-primary-yellow sm:size-[22px]"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-[14px] font-extrabold text-[#0f172a] sm:text-[15px]">
              More locations on the way!
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold text-[#0f172a]">
              <Sparkles className="size-3.5 shrink-0" aria-hidden="true" />
              We&apos;re expanding to serve you better.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
