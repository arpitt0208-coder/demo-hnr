"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomeHowItWorksCarousel } from "./HomeHowItWorksCarousel";

function SectionDotGrid() {
  return (
    <div
      className="pointer-events-none absolute bottom-[8%] left-[3%] grid gap-[6px] opacity-60"
      style={{
        gridTemplateColumns: "repeat(4, 3px)",
        gridTemplateRows: "repeat(3, 3px)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="size-[3px] rounded-full bg-text-gray/25" />
      ))}
    </div>
  );
}

export function HomeHowItWorksSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col overflow-x-clip px-4 py-8 sm:px-6 sm:py-10"
      aria-label="How it works"
    >
      <SectionDotGrid />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="flex flex-col gap-5 sm:gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#0f172a] sm:text-[32px] md:text-[38px] xl:text-[42px]">
              Rent.{" "}
              <span className="text-primary-yellow">Ride.</span> Go.
            </h2>
            <p className="mt-3 max-w-[480px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
              From scooters to adventure bikes—transparent pricing and pickup
              when you&apos;re ready.
            </p>
          </div>

          <Link href="/explore" className="block w-full sm:w-fit">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary-yellow px-7 py-3 text-[14px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)] sm:w-fit"
              aria-label="Explore"
            >
              Explore
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </motion.span>
          </Link>
        </div>

      </div>

      <div className="relative mt-2 w-full sm:mt-0">
        <HomeHowItWorksCarousel />
      </div>
    </motion.section>
  );
}
