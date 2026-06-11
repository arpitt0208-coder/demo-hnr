"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { blogHeroImage, blogHeroOverlay } from "@/data/blogPage";

export function BlogHeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[640px] lg:max-w-none"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px] lg:aspect-[4/3.2] lg:rounded-[28px]">
        <Image
          src={blogHeroImage}
          alt="Scenic mountain road through the Himalayas at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 90vw, 580px"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:from-white/90 lg:via-white/20 lg:to-transparent"
          aria-hidden="true"
        />

        <div className="absolute bottom-4 right-4 z-10 max-w-[220px] rounded-[14px] border border-white/10 bg-[#1A2B3C]/80 px-4 py-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.25)] backdrop-blur-md sm:bottom-6 sm:right-6 sm:max-w-[240px] sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-white/20 sm:size-11">
              <Image
                src={blogHeroOverlay.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div className="min-w-0">
              <p className="flex items-center gap-1 text-[9px] font-bold tracking-[0.12em] text-primary-yellow sm:text-[10px]">
                <MapPin className="size-3 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                {blogHeroOverlay.location}
              </p>
              <p className="mt-1 text-[12px] font-bold leading-snug text-white sm:text-[13px]">
                &ldquo;{blogHeroOverlay.quote}&rdquo;
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-[#94A3B8] sm:text-[11px]">
                {blogHeroOverlay.subtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
