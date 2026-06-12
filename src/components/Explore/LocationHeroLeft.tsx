"use client";

import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import { ArrowRight, MapPin, Shield, Tag, Zap } from "lucide-react";
import Link from "next/link";
import type { ExploreLocationHero } from "@/data/exploreLocations";
import { cn } from "@/lib/cn";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const heroFeatures = [
  { icon: Shield, label: "Trusted fleet" },
  { icon: MapPin, label: "Local support" },
  { icon: Zap, label: "Quick booking" },
] as const;

type LocationHeroLeftProps = {
  hero: ExploreLocationHero;
  ctaHref?: string;
  className?: string;
};

export function LocationHeroLeft({
  hero,
  ctaHref = "#bike-models",
  className,
}: LocationHeroLeftProps) {
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
        className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[11px]"
      >
        <MapPin
          className="size-3.5 shrink-0 text-primary-yellow"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        {hero.badge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 text-[34px] font-extrabold leading-[1.04] tracking-tight text-white min-[400px]:text-[38px] sm:mt-4 sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[64px]"
      >
        <span className="block">{hero.titleHighlight}</span>
        <span
          className={cn(
            caveat.className,
            "mt-1 block text-[26px] font-bold leading-[1.15] text-primary-yellow min-[400px]:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px]",
          )}
        >
          {hero.titleRest}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-[520px] text-[14px] font-medium leading-[1.8] text-white/85 sm:mt-5 lg:text-[15px]"
      >
        {hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-5 w-full max-w-[560px] sm:mt-6"
      >
        <div className="flex w-full flex-col gap-3 rounded-[20px] border border-white/10 bg-black/35 px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md min-[520px]:flex-row min-[520px]:items-stretch min-[520px]:gap-0 sm:rounded-[24px] sm:px-4 sm:py-3.5">
          {heroFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className={cn(
                  "relative flex flex-1 items-center gap-2.5 px-1 py-0.5 min-[520px]:gap-3 min-[520px]:px-3",
                  index > 0 &&
                    "min-[520px]:before:absolute min-[520px]:before:left-0 min-[520px]:before:top-1/2 min-[520px]:before:h-8 min-[520px]:before:w-px min-[520px]:before:-translate-y-1/2 min-[520px]:before:bg-white/15",
                )}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-yellow/15 sm:size-10">
                  <Icon
                    className="size-4 shrink-0 text-primary-yellow sm:size-[18px]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight text-white sm:text-[13px]">
                    {feature.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-4 w-full max-w-[520px] rounded-[18px] border border-white/10 bg-black/30 px-4 py-3.5 shadow-[0_6px_24px_rgba(0,0,0,0.2)] backdrop-blur-md sm:mt-5 sm:rounded-[20px] sm:px-5"
      >
        <p className="flex items-start gap-2.5 text-[13px] font-semibold leading-[1.65] text-white/90 sm:text-[14px]">
          <Tag
            className="mt-0.5 size-4 shrink-0 text-primary-yellow"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          {hero.pricingNote}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-5 sm:mt-6"
      >
        <Link
          href={ctaHref}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-yellow px-8 text-[14px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-all hover:bg-[#f5c84a] hover:shadow-[0_8px_28px_rgba(239,190,61,0.45)]"
        >
          Explore Bikes
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
