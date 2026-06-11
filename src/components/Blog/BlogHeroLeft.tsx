"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import {
  blogHeroBadge,
  blogHeroCategories,
  blogHeroCta,
  blogHeroDescription,
  blogHeroTitle,
} from "@/data/blogPage";
import { cn } from "@/lib/cn";

function TravelPathDecoration() {
  return (
    <svg
      className="pointer-events-none absolute -left-6 top-8 hidden h-[280px] w-[80px] opacity-40 lg:block xl:-left-10 xl:w-[100px]"
      viewBox="0 0 100 280"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 10 C30 60, 70 100, 50 150 C30 200, 60 240, 50 270"
        stroke="#EFBE3D"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="270" r="8" fill="#EFBE3D" />
      <path
        d="M50 262 L50 278 M44 268 L50 262 L56 268"
        stroke="#0F172A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BlogHeroLeftProps {
  ctaHref?: string;
  className?: string;
}

export function BlogHeroLeft({
  ctaHref = "#trending",
  className,
}: BlogHeroLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative flex w-full flex-col items-start text-left", className)}
    >
      <TravelPathDecoration />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-primary-yellow sm:text-[11px]"
      >
        <Compass className="size-3.5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
        {blogHeroBadge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]"
      >
        <span className="block">{blogHeroTitle.line1}</span>
        <span className="block text-primary-yellow">{blogHeroTitle.highlight}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-[520px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]"
      >
        {blogHeroDescription}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-6"
      >
        <Link
          href={ctaHref}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-yellow px-8 text-[14px] font-bold text-dark-navy shadow-[0_4px_16px_rgba(239,190,61,0.35)] transition-shadow hover:shadow-[0_6px_22px_rgba(239,190,61,0.45)]"
        >
          {blogHeroCta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="-mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {blogHeroCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="flex min-w-[200px] shrink-0 items-center gap-3 rounded-[14px] border border-[#E8ECF0] bg-white px-3.5 py-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] min-[480px]:min-w-0 sm:px-4 sm:py-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFFBF0] sm:size-10">
                <Icon
                  className="size-4 text-primary-yellow"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-bold leading-tight text-dark-navy sm:text-[13px]">
                  {category.title}
                </p>
                <p className="mt-0.5 text-[10px] font-medium leading-snug text-[#94A3B8] sm:text-[11px]">
                  {category.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
