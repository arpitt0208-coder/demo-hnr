"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { bikeImages } from "@/assets/images";

export function ContactHeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 px-6 pb-8 pt-10 shadow-[0_16px_48px_rgba(15,23,42,0.1)] backdrop-blur-sm sm:rounded-[32px] sm:px-8 sm:pb-10 sm:pt-12 lg:rounded-[36px] lg:px-10 lg:pb-12 lg:pt-14">
        <div
          className="pointer-events-none absolute left-1/2 top-[18%] h-[58%] w-[72%] -translate-x-1/2 rounded-[50%] bg-primary-yellow/25 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto aspect-[1.35/1] w-full max-w-[480px]">
          <Image
            src={bikeImages.hunter}
            alt="Adventure motorcycle ready for Himalayan rides"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 88vw, 480px"
          />
        </div>

        <div className="absolute bottom-8 left-6 z-20 sm:bottom-10 sm:left-8 lg:left-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-white px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.1)]">
            <Star
              className="size-4 fill-primary-yellow text-primary-yellow"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-dark-navy sm:text-[13px]">
              4.9/5 Rider Rating
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
