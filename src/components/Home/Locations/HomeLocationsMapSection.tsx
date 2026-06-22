"use client";

import { Compass } from "lucide-react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { bhuntar, kasol, manali } from "@/assets/images";
import { DestinationCard } from "@/components/UI/card";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { locationExplorePath } from "@/lib/location-routes";

type Place = {
  id: number;
  name: string;
  slug: string;
  category: string;
  bikesLabel: string;
  image: StaticImageData;
};

const places: Place[] = [
  {
    id: 1,
    name: "Manali",
    slug: "manali",
    category: "Himachal Pradesh",
    bikesLabel: "55+ Bikes",
    image: manali,
  },
  {
    id: 2,
    name: "Kasol",
    slug: "kasol",
    category: "Himachal Pradesh",
    bikesLabel: "40+ Bikes",
    image: kasol,
  },
  {
    id: 3,
    name: "Bhuntar",
    slug: "bhuntar",
    category: "Himachal Pradesh",
    bikesLabel: "30+ Bikes",
    image: bhuntar,
  },
];

function LocationCard({ place }: { place: Place }) {
  return (
    <StaggerItem variant="rotate-in">
      <Link
        href={locationExplorePath(place.slug)}
        className="group block aspect-[3/4] w-[188px] shrink-0 no-underline text-inherit sm:w-[200px] md:w-[212px]"
        aria-label={`Explore bikes in ${place.name}`}
      >
        <DestinationCard
          variant="location"
          imageUrl={place.image.src}
          category={place.category}
          title={place.name}
          description={`${place.category} · ${place.bikesLabel}`}
          className="h-full w-full"
        />
      </Link>
    </StaggerItem>
  );
}

export function HomeLocationsMapSection() {
  return (
    <section
      id="locations"
      className="relative w-full scroll-mt-24 overflow-x-clip bg-black pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-[4.5rem]"
      aria-label="Popular destinations"
    >
      <div className="relative z-10 w-full px-4 sm:px-6">
        <ScrollReveal
          variant="blur"
          className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-primary-yellow backdrop-blur-sm">
            <Compass className="compass-drift size-3.5 shrink-0" aria-hidden="true" />
            OUR LOCATIONS
          </span>

          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-[36px] md:text-[42px]">
            We&apos;re Where You Need Us
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-white/85 sm:mt-4 sm:text-[15px]">
            Explore the places we currently serve across the Himalayas.
          </p>
        </ScrollReveal>

        <StaggerReveal
          className="mt-10 flex flex-wrap items-stretch justify-center gap-3 sm:mt-12 sm:gap-4"
          stagger={0.1}
        >
          {places.map((place) => (
            <LocationCard key={place.id} place={place} />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
