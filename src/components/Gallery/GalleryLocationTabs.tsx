"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Church,
  Droplets,
  Landmark,
  Mountain,
  MountainSnow,
  Snowflake,
  Trees,
  Wind,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { GalleryLocationSection } from "@/data/galleryLocations";
import { cn } from "@/lib/cn";

type GalleryLocationTabsProps = {
  sections: GalleryLocationSection[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

const LOCATION_ICONS: Record<string, LucideIcon> = {
  manali: Mountain,
  "kullu-valley": Trees,
  "leh-ladakh": Landmark,
  "rohtang-pass": Snowflake,
  "sissu-valley": Droplets,
  "solang-valley": MountainSnow,
  "spiti-valley": Landmark,
  mohali: Building2,
  "bir-billing": Wind,
  dharamshala: Church,
};

function LocationTabIcon({
  slug,
  isActive,
}: {
  slug: string;
  isActive: boolean;
}) {
  const Icon = LOCATION_ICONS[slug] ?? Mountain;

  return (
    <Icon
      className={cn(
        "shrink-0 transition-all duration-200",
        isActive
          ? "size-5 fill-primary-yellow text-primary-yellow sm:size-[22px]"
          : "size-6 text-[#717171] sm:size-7",
      )}
      strokeWidth={isActive ? 2.25 : 1.5}
      aria-hidden="true"
    />
  );
}

export function GalleryLocationTabs({
  sections,
  activeSlug,
  onSelect,
}: GalleryLocationTabsProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    tabRefs.current[activeSlug]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeSlug]);

  return (
    <div
      role="tablist"
      aria-label="Gallery locations"
      className="border-b border-[#EBEBEB] bg-white"
    >
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max lg:min-w-0 lg:w-full">
          {sections.map((section, index) => {
            const isActive = section.slug === activeSlug;
            const isFirst = index === 0;
            const isLast = index === sections.length - 1;

            return (
              <button
                key={section.id}
                ref={(node) => {
                  tabRefs.current[section.slug] = node;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`gallery-panel-${section.slug}`}
                id={`gallery-tab-${section.slug}`}
                onClick={() => onSelect(section.slug)}
                className={cn(
                  "relative flex shrink-0 flex-col items-center justify-center text-center transition-all duration-200",
                  isActive
                    ? "z-[1] gap-1 bg-[#FFFBF0] px-4 py-2.5 shadow-[inset_0_-2px_0_0_#efbe3d] sm:gap-1.5 sm:px-5 sm:py-3 lg:min-w-0 lg:flex-1 lg:px-4 xl:px-5"
                    : "min-w-[92px] gap-1.5 px-3 py-3.5 hover:bg-[#FAFAFA] sm:min-w-[100px] sm:gap-2 sm:px-4 sm:py-4 lg:min-w-0 lg:flex-1 lg:px-3 xl:px-4",
                  !isLast && "border-r border-[#EBEBEB]",
                  isFirst && isActive && "rounded-tl-2xl",
                  isLast && isActive && "rounded-tr-2xl",
                )}
              >
                <LocationTabIcon slug={section.slug} isActive={isActive} />

                <span
                  className={cn(
                    "flex w-full items-center justify-center leading-[1.2] tracking-tight",
                    isActive
                      ? "min-h-[1.75rem] text-[11px] font-semibold text-primary-yellow sm:min-h-[1.875rem] sm:text-xs"
                      : "min-h-[2rem] text-[11px] font-medium text-[#717171] sm:min-h-[2.25rem] sm:text-xs",
                  )}
                >
                  <span className="whitespace-nowrap px-0.5 lg:whitespace-normal lg:line-clamp-2">
                    {section.name}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
