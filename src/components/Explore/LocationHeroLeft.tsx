"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Tag, Zap } from "lucide-react";
import Link from "next/link";
import type { ExploreLocationHero } from "@/data/exploreLocations";
import { cn } from "@/lib/cn";

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
        className="inline-flex items-center gap-2 rounded-full bg-primary-yellow px-4 py-2 text-[10px] font-extrabold tracking-[0.14em] text-white shadow-[0_4px_16px_rgba(239,190,61,0.35)] sm:text-[11px]"
      >
        <MapPin className="size-3 shrink-0" strokeWidth={2.5} aria-hidden="true" />
        {hero.badge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]"
      >
        <span className="block text-primary-yellow">{hero.titleHighlight}</span>
        <span className="mt-1 block text-dark-navy">
          <span className="mr-2 inline-block h-1 w-6 translate-y-[-0.35em] rounded-full bg-primary-yellow align-middle sm:w-8" />
          {hero.titleRest}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-[480px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]"
      >
        {hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"
      >
        {heroFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <span
              key={feature.label}
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-dark-navy sm:text-[13px]"
            >
              <Icon
                className="size-4 shrink-0 text-primary-yellow"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              {feature.label}
            </span>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-5 w-full max-w-[480px] rounded-2xl border border-border/70 bg-white/90 px-4 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:px-5"
      >
        <p className="flex items-start gap-2.5 text-[13px] font-semibold leading-[1.6] text-[#475569] sm:text-[14px]">
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
        className="mt-6"
      >
        <Link
          href={ctaHref}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-dark-navy px-8 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)]"
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
