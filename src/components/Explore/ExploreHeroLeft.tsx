"use client";

import { motion } from "framer-motion";
import { exploreHeroTags } from "@/data/hero";
import { cn } from "@/lib/cn";

interface ExploreHeroLeftProps {
  className?: string;
}

export function ExploreHeroLeft({ className }: ExploreHeroLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex w-full flex-col items-start text-left", className)}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#475569] shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:text-[11px]"
      >
        <span
          className="size-1.5 shrink-0 rounded-full bg-primary-yellow"
          aria-hidden="true"
        />
        INNER PAGE HIGHLIGHT
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]"
      >
        <span className="block">Discover Our Complete</span>
        <span className="block">Collection Of</span>
        <span className="block text-primary-yellow">Premium Bikes &amp; Scooters</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-[480px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]"
      >
        Each vehicle is well-maintained, insured, and ready for your next
        adventure.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-5 flex flex-wrap gap-2.5"
      >
        {exploreHeroTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#E8EDF3] px-4 py-2 text-[12px] font-semibold text-[#475569] sm:text-[13px]"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
