"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  aboutHeroBadge,
  aboutHeroDescription,
  aboutHeroFeatures,
  aboutHeroTitle,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

interface AboutHeroLeftProps {
  ctaHref?: string;
  className?: string;
}

export function AboutHeroLeft({
  ctaHref = "/explore",
  className,
}: AboutHeroLeftProps) {
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
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#94A3B8] shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:text-[11px]"
      >
        <span
          className="size-2 shrink-0 rounded-full bg-primary-yellow"
          aria-hidden="true"
        />
        {aboutHeroBadge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]"
      >
        <span className="block text-primary-yellow">{aboutHeroTitle.highlight}</span>
        <span className="block">{aboutHeroTitle.line2}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-[480px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]"
      >
        {aboutHeroDescription}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-6"
      >
        <Link
          href={ctaHref}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-8 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)]"
        >
          Explore bikes
          <ArrowRight
            className="size-4 text-primary-yellow transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-5 flex flex-wrap gap-2.5"
      >
        {aboutHeroFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <span
              key={feature.id}
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm"
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full",
                  feature.iconBgClassName,
                )}
              >
                <Icon
                  className={cn("size-3.5", feature.iconClassName)}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
              <span className="text-[12px] font-semibold text-[#475569] sm:text-[13px]">
                {feature.label}
              </span>
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
