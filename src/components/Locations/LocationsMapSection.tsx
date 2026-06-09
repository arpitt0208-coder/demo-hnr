"use client";

import { motion } from "framer-motion";
import {
  Map,
  MapControls,
  MapFitBounds,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/UI/mapcn-marker-popup";
import {
  Bike,
  ChevronRight,
  Compass,
  Headphones,
  MapPin,
  Shield,
  Tag,
} from "lucide-react";
import { useState } from "react";

type PlaceStatus = "available" | "coming";

type Place = {
  id: number;
  name: string;
  label: string;
  category: string;
  status: PlaceStatus;
  rating: number;
  reviewLabel: string;
  hours: string;
  bikesLabel?: string;
  image: string;
  lng: number;
  lat: number;
};

/** Mainland India — tight crop to keep neighboring countries out of view */
const INDIA_BOUNDS: [[number, number], [number, number]] = [
  [69.0, 8.0],
  [96.5, 35.8],
];

const INDIA_FIT_PADDING = {
  top: 48,
  bottom: 48,
  left: 36,
  right: 36,
} as const;

const places: Place[] = [
  {
    id: 1,
    name: "Manali",
    label: "Available",
    category: "Himachal Pradesh",
    status: "available",
    rating: 4.9,
    reviewLabel: "2,840",
    hours: "24/7 pickup support",
    bikesLabel: "55+ Bikes",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=200&fit=crop",
    lng: 77.1892,
    lat: 32.2396,
  },
  {
    id: 2,
    name: "Kullu",
    label: "Available",
    category: "Himachal Pradesh",
    status: "available",
    rating: 4.8,
    reviewLabel: "1,920",
    hours: "6:00 AM - 10:00 PM",
    bikesLabel: "40+ Bikes",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    lng: 77.1089,
    lat: 31.9578,
  },
  {
    id: 3,
    name: "Bhuntar",
    label: "Available",
    category: "Himachal Pradesh",
    status: "available",
    rating: 4.7,
    reviewLabel: "1,105",
    hours: "6:00 AM - 9:00 PM",
    bikesLabel: "30+ Bikes",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop",
    lng: 77.1485,
    lat: 31.8761,
  },
  {
    id: 4,
    name: "Delhi",
    label: "Coming Soon",
    category: "Delhi",
    status: "coming",
    rating: 4.6,
    reviewLabel: "—",
    hours: "Launching soon",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop",
    lng: 77.209,
    lat: 28.6139,
  },
  {
    id: 5,
    name: "Chandigarh",
    label: "Coming Soon",
    category: "Chandigarh",
    status: "coming",
    rating: 4.6,
    reviewLabel: "—",
    hours: "Launching soon",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=200&fit=crop",
    lng: 76.7794,
    lat: 30.7333,
  },
];

const featureHighlights = [
  { icon: Bike, label: "Well-Maintained Bikes" },
  { icon: Shield, label: "Trusted & Safe Trips" },
  { icon: Headphones, label: "24/7 Rider Support" },
  { icon: Tag, label: "Best Price Guarantee" },
];

function PinMarker({ isActive, status }: { isActive: boolean; status: PlaceStatus }) {
  const isAvailable = status === "available";
  const fill = isAvailable ? "#efbe3d" : "#E11D48";

  return (
    <div className="relative flex flex-col items-center">
      {isAvailable && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 size-10 rounded-full bg-primary-yellow/35"
            style={{
              animation: "marker-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite",
              transform: "translate(-50%, -60%)",
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 size-14 rounded-full bg-primary-yellow/20"
            style={{
              animation: "marker-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s",
              transform: "translate(-50%, -60%)",
            }}
          />
        </>
      )}

      {isActive && isAvailable && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 size-16 rounded-full bg-primary-yellow/30 blur-[1px]"
          style={{
            animation: "marker-glow 1.8s ease-in-out infinite",
            transform: "translate(-50%, -60%)",
          }}
        />
      )}

      <svg
        width={isActive ? 32 : 28}
        height={isActive ? 40 : 36}
        viewBox="0 0 28 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={[
          "relative drop-shadow-md transition-all duration-300",
          isActive ? "scale-110" : "hover:scale-105",
        ].join(" ")}
        aria-hidden="true"
      >
        <path
          d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z"
          fill={fill}
          stroke="#ffffff"
          strokeWidth="2"
        />
        <circle cx="14" cy="14" r="5" fill="#ffffff" />
      </svg>
    </div>
  );
}

function LocationDetailCard({ place }: { place: Place }) {
  const isAvailable = place.status === "available";

  return (
    <motion.article
      key={place.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full overflow-hidden rounded-[18px] border border-border/60 bg-gradient-to-br from-white via-white to-[#FFFBEB]/40 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:p-7"
    >
      <span
        className={[
          "inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.08em] uppercase",
          isAvailable
            ? "bg-primary-yellow/15 text-primary-yellow"
            : "bg-[#E11D48]/10 text-[#E11D48]",
        ].join(" ")}
      >
        {isAvailable ? "Available Now" : "Coming Soon"}
      </span>

      <div className="mt-4 flex flex-col gap-4 min-[400px]:flex-row">
        <div className="mx-auto h-[108px] w-[108px] shrink-0 overflow-hidden rounded-[14px] border border-border/50 min-[400px]:mx-0 sm:h-[116px] sm:w-[116px]">
          <img
            src={place.image}
            alt={`${place.name}, ${place.category}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start gap-3">
            <div
              className={[
                "flex size-11 shrink-0 items-center justify-center rounded-xl",
                isAvailable ? "bg-primary-yellow/15" : "bg-[#E11D48]/10",
              ].join(" ")}
            >
              <MapPin
                className={[
                  "size-5",
                  isAvailable
                    ? "fill-primary-yellow text-primary-yellow"
                    : "fill-[#E11D48] text-[#E11D48]",
                ].join(" ")}
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[20px] font-extrabold leading-tight text-[#0f172a] sm:text-[22px]">
                {place.name}
              </h3>
              <p className="mt-1 text-[14px] font-semibold text-[#64748B]">
                {place.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled={!isAvailable}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-primary-yellow px-5 py-3.5 text-[14px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-all hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            Explore {place.name}
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function LocationsMapSection() {
  const [selectedId, setSelectedId] = useState(places[0].id);
  const selectedPlace = places.find((p) => p.id === selectedId) ?? places[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-x-clip px-4 py-8 sm:px-6 sm:py-10"
      aria-label="Interactive locations map"
    >
      <div className="mx-auto max-w-[1520px]">
        <div className="overflow-hidden rounded-[24px] border border-border/60 bg-white ring-1 ring-black/[0.03]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,640px)_1fr] lg:items-stretch xl:grid-cols-[minmax(0,680px)_1fr]">
            {/* Left panel */}
            <div className="flex flex-col justify-center border-b border-border/60 bg-[#FAFAFA]/50 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10 xl:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-yellow/30 bg-primary-yellow/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-primary-yellow">
                <Compass className="size-3.5" aria-hidden="true" />
                EXPLORE THE HIMALAYAS
              </div>

              <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] text-[#0f172a] sm:text-[32px] md:text-[38px] xl:text-[42px]">
                Our{" "}
                <span className="text-primary-yellow">Locations</span>
              </h2>

              <p className="mt-4 max-w-[480px] text-[14px] font-semibold leading-[1.75] text-[#4B5563] sm:text-[15px]">
                Explore the Himalayas with our premium bike rentals. Only
                available locations are highlighted.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {featureHighlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-white px-2 py-3 text-center shadow-sm"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary-yellow/10">
                      <Icon
                        className="size-4 text-primary-yellow"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[10px] font-bold leading-tight text-[#64748B]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 w-full">
                <LocationDetailCard place={selectedPlace} />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 shadow-sm">
                  <span className="relative inline-flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-yellow/60" />
                    <span className="relative inline-block size-3 rounded-full border-2 border-white bg-primary-yellow shadow-sm" />
                  </span>
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    Available Now
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 shadow-sm">
                  <span className="inline-block size-3 rounded-full border-2 border-white bg-[#E11D48] shadow-sm" />
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Right panel — map */}
            <div className="relative h-[320px] overflow-hidden bg-white min-[400px]:h-[380px] sm:h-[440px] md:h-[500px] lg:h-full lg:min-h-[720px] [&_.maplibregl-canvas]:bg-white [&_.maplibregl-ctrl-attrib]:hidden">
              <Map
                className="absolute inset-0 h-full w-full"
                theme="light"
                bounds={INDIA_BOUNDS}
                fitBoundsOptions={{
                  padding: INDIA_FIT_PADDING,
                  duration: 0,
                }}
                maxZoom={10}
                attributionControl={false}
              >
                <MapFitBounds
                  bounds={INDIA_BOUNDS}
                  padding={INDIA_FIT_PADDING}
                  lockMinZoom
                  hideCountryLabels
                />
                <MapControls position="bottom-right" showZoom />
                {places.map((place) => {
                  const isActive = place.id === selectedId;

                  return (
                    <MapMarker
                      key={place.id}
                      longitude={place.lng}
                      latitude={place.lat}
                      onClick={() => setSelectedId(place.id)}
                    >
                      <MarkerContent>
                        <PinMarker isActive={isActive} status={place.status} />
                        <MarkerLabel
                          position="bottom"
                          className={[
                            "rounded-md bg-white/90 px-1.5 py-0.5 text-[11px] font-bold shadow-sm backdrop-blur-sm",
                            isActive
                              ? "text-[#0f172a]"
                              : place.status === "coming"
                                ? "text-[#E11D48]"
                                : "text-[#64748B]",
                          ].join(" ")}
                        >
                          {place.name}
                        </MarkerLabel>
                      </MarkerContent>
                    </MapMarker>
                  );
                })}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
