"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bike, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { bhuntar, kasol, manali } from "@/assets/images";
import { locationExplorePath } from "@/lib/location-routes";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { TiltCard } from "@/components/UI/tilt-card";
import { smoothEase } from "@/lib/motion";

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

function LocationCard({
  place,
  index,
  reduceMotion,
}: {
  place: Place;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <StaggerItem variant="blur">
      <TiltCard className="overflow-hidden rounded-2xl glass-card shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-shadow duration-700 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
        <motion.article
          whileHover={
            reduceMotion
              ? undefined
              : { y: -5, transition: { duration: 0.5, ease: smoothEase } }
          }
          className="group h-full"
        >
          <Link
            href={locationExplorePath(place.slug)}
            className="block no-underline text-inherit"
            aria-label={`Explore bikes in ${place.name}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={place.image}
                alt={`${place.name}, ${place.category}`}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 + 0.3, duration: 0.7, ease: smoothEase },
                      }
                }
                viewport={{ once: true }}
                className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-primary-yellow shadow-sm backdrop-blur-sm sm:px-3 sm:text-[11px]"
              >
                <Bike className="size-3.5 shrink-0" aria-hidden="true" />
                {place.bikesLabel}
              </motion.span>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-primary-yellow transition-transform duration-500 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h3 className="min-w-0 flex-1 text-[16px] font-extrabold leading-tight text-[#0f172a] transition-colors duration-500 group-hover:text-primary-yellow sm:text-[17px]">
                  {place.name}
                </h3>
              </div>

              {place.category !== place.name && (
                <p className="mt-1 pl-6 text-[13px] font-semibold text-[#64748b]">
                  {place.category}
                </p>
              )}
            </div>
          </Link>
        </motion.article>
      </TiltCard>
    </StaggerItem>
  );
}

export function HomeLocationsMapSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="locations"
      className="scroll-mt-24 overflow-x-clip px-4 py-12 sm:px-6 sm:py-14"
      aria-label="Locations"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal variant="blur" className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-yellow/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-primary-yellow">
            <Compass className="size-3.5 shrink-0" aria-hidden="true" />
            OUR LOCATIONS
          </span>

          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#0f172a] sm:mt-5 sm:text-[36px] md:text-[42px]">
            We&apos;re Where You Need Us
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:mt-4 sm:text-[15px]">
            Explore the places we currently serve across the Himalayas.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6" stagger={0.1}>
          {places.map((place, index) => (
            <LocationCard
              key={place.id}
              place={place}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
