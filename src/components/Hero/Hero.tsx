"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroBg } from "@/assets/images";
import { TrustBar } from "@/components/TrustBar/TrustBar";
import { HeroLeft } from "./HeroLeft";
import { HeroShowcase } from "./HeroShowcase";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-clip px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 md:px-12 md:pt-32 lg:px-20 lg:pb-12 lg:pt-36"
      aria-label="Hero section"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="relative grid items-start gap-8 pb-4 sm:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-6">
          <div className="relative z-20 w-full self-start justify-self-start lg:max-w-[560px] xl:max-w-[580px]">
            <HeroLeft />
          </div>

          <div className="relative z-10 flex w-full min-w-0 items-start justify-center lg:min-h-[600px]">
            <HeroShowcase />
          </div>
        </div>

        <TrustBar />
      </div>
    </motion.section>
  );
}
