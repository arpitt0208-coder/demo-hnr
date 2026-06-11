"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { blogHeroOverlay } from "@/data/blogPage";

export function BlogHeroOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[220px] rounded-[12px] border border-white/10 bg-[#1A2B3C]/80 px-3.5 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.25)] backdrop-blur-md sm:max-w-[230px] sm:px-4 sm:py-3"
    >
      <div className="flex items-center gap-2.5">
        <div className="relative size-9 shrink-0 overflow-hidden rounded-full border-2 border-white/20">
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
            <MapPin
              className="size-3 shrink-0"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            {blogHeroOverlay.location}
          </p>
          <p className="mt-1 text-[12px] font-bold leading-snug text-white sm:text-[13px]">
            {blogHeroOverlay.quote}
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-[#94A3B8] sm:text-[11px]">
            {blogHeroOverlay.subtext}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
