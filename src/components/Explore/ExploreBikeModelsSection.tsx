"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { findYourRideGalleryItems } from "@/data/findYourRide";
import { Gallery4 } from "@/components/UI/gallery4";

export function ExploreBikeModelsSection() {
  return (
    <motion.section
      id="bike-models"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full scroll-mt-24 overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
      aria-label="Explore bike models"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white px-4 py-2">
            <ShieldCheck
              className="size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.08em] text-dark-navy">
              Our Fleet
            </span>
          </div>

          <h2 className="mt-4 text-[26px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[30px] sm:text-[38px] md:text-[46px] xl:text-[52px]">
            Explore Bike Models
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            Browse our full range of well-maintained bikes—ready for city rides,
            mountain trails, and everything in between.
          </p>
        </div>

        <Gallery4
          items={findYourRideGalleryItems}
          className="mt-6 lg:mt-8"
          compact
          variant="fleet"
          showDots={false}
        />
      </div>
    </motion.section>
  );
}
