"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { faqsec } from "@/assets/images";
import { smoothEase } from "@/lib/motion";

export function HomeHelpInfoIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-[20px] sm:mt-8 sm:h-[280px] md:h-[320px] lg:mt-12 lg:h-[360px]">
      <motion.div
        className="illustration-float relative h-full w-full"
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <Image
          src={faqsec}
          alt="Help and support illustration with search, FAQ, live support, and booking help"
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-contain object-left-bottom"
        />
      </motion.div>
    </div>
  );
}
