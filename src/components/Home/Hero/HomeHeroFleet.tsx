"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomeBikeCard } from "@/components/Home/BikeCard/HomeBikeCard";
import { featuredBikes } from "@/data/bikes";
import { smoothEase } from "@/lib/motion";

export function HomeHeroFleet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.25, ease: smoothEase }}
      className="relative z-20 mx-auto w-full max-w-[1080px]"
    >
      <div className="mb-4 flex items-end justify-between gap-4 px-1">
        <div>
          <p className="text-[11px] font-bold tracking-[0.14em] text-[#94A3B8]">
            FEATURED FLEET
          </p>
          <h2 className="mt-1 text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
            Top picks for mountain roads
          </h2>
        </div>
        <Link
          href="/explore"
          className="hidden shrink-0 items-center gap-1.5 text-[12px] font-bold text-primary-yellow transition-colors hover:text-[#E5A800] sm:inline-flex"
          data-cursor-hover
        >
          View all
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 scrollbar-none sm:gap-4">
        {featuredBikes.map((bike, index) => (
          <motion.div
            key={bike.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.35 + index * 0.08, duration: 0.7, ease: smoothEase }}
            className="w-[min(72vw,220px)] shrink-0 sm:w-[200px] lg:w-[220px]"
          >
            <HomeBikeCard bike={bike} variant="showcase" />
          </motion.div>
        ))}
      </div>

      <Link
        href="/explore"
        className="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-bold text-primary-yellow sm:hidden"
        data-cursor-hover
      >
        View all bikes
        <ArrowRight className="size-3.5" />
      </Link>
    </motion.div>
  );
}
