"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroBg } from "@/assets/images";
import { ContactHeroLeft } from "./ContactHeroLeft";
import { ContactHeroShowcase } from "./ContactHeroShowcase";

interface ContactHeroSectionProps {
  ctaHref?: string;
}

export function ContactHeroSection({ ctaHref }: ContactHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-clip px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-14 lg:pt-32 xl:px-20 xl:pt-36"
      aria-label="Contact hero"
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
        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
          <div className="relative z-20 w-full min-w-0 self-center justify-self-start lg:max-w-[680px] xl:max-w-[720px]">
            <ContactHeroLeft ctaHref={ctaHref} />
          </div>

          <div className="relative z-10 flex w-full min-w-0 items-center justify-center overflow-x-clip">
            <ContactHeroShowcase />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
