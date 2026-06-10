"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bike, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { bhuntar, kasolBig, manali } from "@/assets/images";

type Place = {
  id: number;
  name: string;
  category: string;
  bikesLabel: string;
  image: StaticImageData;
};

const places: Place[] = [
  {
    id: 1,
    name: "Manali",
    category: "Himachal Pradesh",
    bikesLabel: "55+ Bikes",
    image: manali,
  },
  {
    id: 2,
    name: "Kasol",
    category: "Himachal Pradesh",
    bikesLabel: "40+ Bikes",
    image: kasolBig,
  },
  {
    id: 3,
    name: "Bhuntar",
    category: "Himachal Pradesh",
    bikesLabel: "30+ Bikes",
    image: bhuntar,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(6px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.14,
      duration: 0.7,
      ease: easeOut,
    },
  }),
};

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
    <motion.article
      custom={index}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              transition: { duration: 0.3, ease: easeOut },
            }
      }
      className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={place.image}
          alt={`${place.name}, ${place.category}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, x: 12 }}
          whileInView={
            reduceMotion
              ? undefined
              : { opacity: 1, x: 0, transition: { delay: index * 0.14 + 0.35, duration: 0.5 } }
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
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.14 + 0.4, duration: 0.45, ease: easeOut },
                  }
            }
            viewport={{ once: true }}
          >
            <MapPin
              size={16}
              strokeWidth={2}
              className="shrink-0 text-primary-yellow transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </motion.span>
          <h3 className="min-w-0 flex-1 text-[16px] font-extrabold leading-tight text-[#0f172a] transition-colors duration-300 group-hover:text-primary-yellow sm:text-[17px]">
            {place.name}
          </h3>
        </div>

        {place.category !== place.name && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.14 + 0.48, duration: 0.5, ease: easeOut },
                  }
            }
            viewport={{ once: true }}
            className="mt-1 pl-6 text-[13px] font-semibold text-[#64748b]"
          >
            {place.category}
          </motion.p>
        )}
      </div>
    </motion.article>
  );
}

export function LocationsMapSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="locations"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="scroll-mt-24 overflow-x-clip px-4 py-8 sm:px-6 sm:py-10"
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

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:mt-4 sm:text-[15px]">
            Explore the places we currently serve across the Himalayas.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {places.map((place, index) => (
            <LocationCard
              key={place.id}
              place={place}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
