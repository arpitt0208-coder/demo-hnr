"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { textJourney } from "@/assets/images";
import { findYourRideGalleryItems } from "@/data/findYourRide";
import { Gallery4 } from "../UI/gallery4";
import { HeadingSparkle } from "../UI/HeadingSparkle";

export function FindYourRideSection() {
  return (
    <motion.section
      id="fleet"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full scroll-mt-24 overflow-hidden px-4 py-10 sm:px-6 sm:py-12"
      aria-label="Find your perfect ride"
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
              Premium Safety
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[42px] md:text-[50px] xl:text-[56px]">
            <span className="block">
              Find Your Perfect{" "}
              <span className="relative inline-block">
                Ride
                <HeadingSparkle className="-right-5 sm:-right-6" />
              </span>
            </span>
            <span className="mt-1 block">
              For The{" "}
              <Image
                src={textJourney}
                alt="Journey Ahead"
                width={600}
                height={149}
                className="inline-block h-[42px] w-auto align-baseline mix-blend-screen sm:h-[50px] md:h-[58px] xl:h-[64px]"
              />
            </span>
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            Pick a category to see what we offer—then jump straight into
            available models.
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
