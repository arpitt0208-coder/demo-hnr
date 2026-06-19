"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/UI/magnetic-button";
import { ScrollReveal } from "@/components/UI/scroll-reveal";
import { smoothEase } from "@/lib/motion";
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
    <section
      className="relative flex flex-col overflow-x-clip px-4 py-12 sm:px-6 sm:py-14"
      aria-label="How it works"
    >
      <SectionDotGrid />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <ScrollReveal
          variant="fade-up"
          className="flex flex-col gap-5 sm:gap-4 lg:flex-row lg:items-start lg:justify-between"
        >
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

          <MagneticButton>
            <Link href="/explore" className="block w-full sm:w-fit" data-cursor-hover>
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary-yellow px-7 py-3 text-[14px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-shadow duration-500 hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)] sm:w-fit"
                aria-label="Explore"
              >
                Explore
                <ArrowRight
                  className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.span>
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </div>

      <ScrollReveal variant="scale" delay={0.12} className="relative mt-4 w-full sm:mt-2">
        <HomeHowItWorksCarousel />
      </ScrollReveal>
    </section>
  );
}
