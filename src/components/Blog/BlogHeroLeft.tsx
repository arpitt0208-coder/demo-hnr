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
      className={cn(
        "relative flex w-full flex-col items-start text-left",
        className,
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-primary-yellow sm:text-[11px]"
      >
        <Compass
          className="size-3.5 shrink-0"
          strokeWidth={2.25}
          aria-hidden="true"
        />
        {blogHeroBadge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 text-[24px] font-extrabold leading-[1.1] tracking-tight text-dark-navy min-[400px]:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px]"
      >
        <span className="block">{blogHeroTitle.line1}</span>
        <span className="block text-primary-yellow">
          {blogHeroTitle.highlight}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-3 max-w-[480px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]"
      >
        {blogHeroDescription}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mt-4"
      >
        <Link
          href={ctaHref}
          className="group inline-flex h-9 items-center justify-center gap-2 rounded-[14px] bg-primary-yellow px-6 text-[13px] font-bold text-dark-navy shadow-[0_4px_16px_rgba(239,190,61,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_22px_rgba(239,190,61,0.45)] active:scale-[0.98] sm:h-10 sm:px-7 sm:text-[14px]"
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
        className="-mx-4 mt-5 flex gap-2.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {blogHeroCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="flex min-w-[165px] shrink-0 items-center gap-2.5 rounded-[12px] border border-[#E8ECF0] bg-white/95 px-3 py-2.5 shadow-[0_4px_18px_rgba(15,23,42,0.06)] backdrop-blur-sm min-[480px]:min-w-0 sm:px-3.5 sm:py-3"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFFBF0]">
                <Icon
                  className="size-3.5 text-primary-yellow"
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
