"use client";

import { motion } from "framer-motion";
import { ChevronRight, Link2 } from "lucide-react";
import Image from "next/image";
import { fleetBikes, fleetQuickLinks } from "@/data/fleet";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
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

export function FleetDropdown() {
  return (
    <div className="px-6 pb-8 pt-5 md:px-8 lg:px-10">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <motion.div
          variants={gridVariants}
          initial={false}
          animate="visible"
          className="grid min-w-0 flex-1 grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {fleetBikes.map((bike) => (
            <motion.a
              key={bike.id}
              href="#fleet"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="group/card flex flex-col rounded-[16px] border border-[#E8ECF0] bg-white p-4 shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-primary-yellow/35 hover:shadow-[0_12px_32px_rgba(239,190,61,0.12)]"
            >
              <div className="relative mb-3 h-[84px] w-full sm:mb-4 sm:h-[92px]">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.06]"
                  sizes="(max-width: 640px) 40vw, 180px"
                />
              </div>

              <div className="mt-auto flex items-center justify-between gap-2">
                <p className="text-[12px] font-semibold leading-tight text-[#1E293B] transition-colors group-hover/card:text-[#0F172A] sm:text-[13px]">
                  {bike.name}
                </p>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_8px_rgba(239,190,61,0.35)] transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_4px_14px_rgba(239,190,61,0.45)]">
                  <ChevronRight
                    className="size-3.5 text-dark-navy transition-transform duration-300 group-hover/card:translate-x-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.aside
          variants={sidebarVariants}
          initial={false}
          animate="visible"
          className="w-full shrink-0 rounded-[20px] border border-[#E8ECF0] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] xl:w-[300px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_10px_rgba(239,190,61,0.3)]">
              <Link2
                className="size-[18px] text-dark-navy"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-[13px] font-extrabold tracking-[0.1em] text-[#0F172A]">
              QUICK LINKS
            </h3>
          </div>

          <div
            className="mt-3 h-[3px] w-12 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <ul className="mt-1 max-h-[340px] overflow-y-auto pr-1">
            {fleetQuickLinks.map((link) => (
              <li key={link} className="border-b border-[#F1F5F9] last:border-b-0">
                <a
                  href="#fleet"
                  className="group/link flex items-center justify-between rounded-lg py-3.5 transition-colors hover:bg-[#FFFBF0]/80"
                >
                  <span className="flex min-w-0 items-center gap-2.5 pl-1">
                    <span
                      className="size-[6px] shrink-0 rounded-full bg-primary-yellow transition-transform duration-300 group-hover/link:scale-125"
                      aria-hidden="true"
                    />
                    <span className="truncate text-[13px] font-medium text-[#475569] transition-colors group-hover/link:text-[#0F172A]">
                      {link}
                    </span>
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-[#CBD5E1] transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-primary-yellow"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </div>
  );
}
