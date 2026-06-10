"use client";

import { motion } from "framer-motion";
import { Link2, Mountain, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  featuredLocations,
  locationQuickLinkIcon,
  locationQuickLinks,
} from "@/data/locations";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.36, ease: EASE, delay: 0.08 },
  },
};

function QuickLinksMountainArt() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="pointer-events-none absolute top-2 right-2 h-16 w-24 opacity-[0.18]"
      aria-hidden="true"
    >
      <path
        d="M0 70 L28 38 L48 58 L72 28 L96 52 L120 34 L120 80 L0 80 Z"
        fill="none"
        stroke="#C4A574"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 70 L38 48 L58 62"
        fill="none"
        stroke="#C4A574"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BottomRoadArt() {
  return (
    <svg
      viewBox="0 0 200 60"
      className="pointer-events-none h-12 w-40 opacity-[0.2] sm:h-14 sm:w-48"
      aria-hidden="true"
    >
      <path
        d="M0 45 Q50 20 100 35 T200 25"
        fill="none"
        stroke="#C4A574"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <circle cx="165" cy="28" r="8" fill="none" stroke="#C4A574" strokeWidth="1.5" />
      <path
        d="M158 28 L172 28 M165 21 L165 35"
        stroke="#C4A574"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M130 18 L132 28 L128 28 Z M145 14 L147 24 L143 24 Z M155 10 L157 20 L153 20 Z"
        fill="#C4A574"
        opacity="0.7"
      />
    </svg>
  );
}

export function LocationsDropdown() {
  const DefaultLinkIcon = locationQuickLinkIcon;

  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white px-5 pb-4 pt-4 md:px-7 lg:px-9">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-stretch">
        <motion.div
          variants={gridVariants}
          initial={false}
          animate="visible"
          className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {featuredLocations.map((location) => {
            const HighlightIcon = location.highlight?.icon;
            const hasFeatureRow = Boolean(location.features?.length);

            return (
              <motion.a
                key={location.id}
                href={location.href}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group/card relative flex min-h-[300px] overflow-hidden rounded-[18px] sm:min-h-[320px]"
              >
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 280px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                {location.isTopPick && (
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-primary-yellow px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-dark-navy shadow-[0_2px_10px_rgba(239,190,61,0.45)]">
                    <Sparkles className="size-3" aria-hidden="true" />
                    TOP PICK
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-4">
                  <div>
                    <h3
                      className="text-[22px] font-semibold leading-tight text-white sm:text-[24px]"
                    >
                      {location.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-white/90">
                      <DefaultLinkIcon
                        className="size-3 shrink-0 fill-primary-yellow text-primary-yellow"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {location.region}
                    </p>
                  </div>

                  {location.highlight && HighlightIcon && (
                    <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-[11px]">
                      <HighlightIcon
                        className="size-3.5 shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span className="truncate">{location.highlight.label}</span>
                    </span>
                  )}

                  {hasFeatureRow && (
                    <div className="flex gap-1.5">
                      {location.features!.map((feature) => {
                        const FeatureIcon = feature.icon;

                        return (
                          <span
                            key={feature.label}
                            title={feature.label}
                            className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-black/45 px-1.5 py-2 text-center backdrop-blur-sm"
                          >
                            <FeatureIcon
                              className="size-3.5 shrink-0 text-white"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <span className="line-clamp-2 text-[8px] font-semibold leading-tight text-white/95 sm:text-[9px]">
                              {feature.label}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.aside
          variants={sidebarVariants}
          initial={false}
          animate="visible"
          className="relative flex w-full shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#E8ECF0] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] xl:w-[300px]"
        >
          <QuickLinksMountainArt />

          <div className="relative flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_10px_rgba(239,190,61,0.3)]">
              <Link2
                className="size-[18px] text-dark-navy"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-[15px] font-extrabold text-[#0F172A]">
              Quick Links
            </h3>
          </div>

          <div
            className="mt-3 h-[3px] w-12 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1">
            {locationQuickLinks.map((link) => {
              const Icon = link.icon ?? DefaultLinkIcon;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group/link flex items-center gap-2 rounded-lg py-2 pr-1 transition-colors hover:bg-[#FFFBF0]/80"
                  >
                    <Icon
                      className="size-3.5 shrink-0 text-primary-yellow"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                    <span className="truncate text-[12px] font-medium text-[#475569] transition-colors group-hover/link:text-[#0F172A]">
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.aside>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#F1F5F9] pt-4">
        <p className="flex min-w-0 items-center gap-2 text-[12px] font-medium text-[#64748B] sm:text-[13px]">
          <Mountain
            className="size-4 shrink-0 text-primary-yellow"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          <span>
            Explore handpicked destinations with{" "}
            <span className="font-extrabold text-primary-yellow">
              Hire N Ride
            </span>{" "}
            bike rentals.
          </span>
        </p>
        <BottomRoadArt />
      </div>
    </div>
  );
}
