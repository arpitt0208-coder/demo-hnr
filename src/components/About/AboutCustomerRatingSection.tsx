"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  aboutCustomerRating,
  type AboutCustomerRatingStat,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${aboutCustomerRating.score} out of ${aboutCustomerRating.maxScore} stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className="size-5 fill-primary-yellow text-primary-yellow"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function RatingSummary({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center px-6 py-8 text-left sm:px-8 lg:px-9 lg:py-10",
        className,
      )}
    >
      <StarRating />

      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <span className="text-[34px] font-extrabold leading-none tracking-tight text-primary-yellow sm:text-[36px]">
          {aboutCustomerRating.score}/{aboutCustomerRating.maxScore}
        </span>
        <h2 className="text-[20px] font-extrabold leading-tight tracking-tight text-dark-navy sm:text-[22px]">
          {aboutCustomerRating.title}
        </h2>
      </div>

      <p className="mt-2.5 max-w-[300px] text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
        {aboutCustomerRating.description}
      </p>
    </div>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: AboutCustomerRatingStat;
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center text-center"
    >
      <span className="relative flex size-11 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(239,190,61,0.14)] ring-1 ring-primary-yellow/20 sm:size-12">
        <Icon
          className={cn(
            "size-5 text-primary-yellow",
            stat.id === "satisfaction-rate" && "fill-primary-yellow",
          )}
          strokeWidth={stat.id === "satisfaction-rate" ? 1.5 : 1.75}
          aria-hidden="true"
        />
      </span>

      <p className="mt-3 text-[22px] font-extrabold leading-none tracking-tight text-dark-navy sm:text-[24px]">
        {stat.value}
      </p>
      <p className="mt-1.5 text-[11px] font-medium leading-snug text-[#64748B] sm:text-[12px]">
        {stat.label}
      </p>
    </motion.div>
  );
}

function StatsGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 place-items-center gap-4 px-4 py-8 sm:gap-6 sm:px-8 lg:gap-8 lg:px-8 lg:py-10",
        className,
      )}
    >
      {aboutCustomerRating.stats.map((stat, index) => (
        <StatItem key={stat.id} stat={stat} index={index} />
      ))}
    </div>
  );
}

function ScenicImage() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px] lg:h-auto lg:min-h-full">
      <Image
        src={aboutCustomerRating.image}
        alt={aboutCustomerRating.imageAlt}
        fill
        priority={false}
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 420px"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-t from-[#F8FAFC]/20 via-transparent to-[#F8FAFC]/70",
          "lg:bg-gradient-to-r lg:from-[#F8FAFC] lg:from-0% lg:via-[#F8FAFC]/45 lg:via-28% lg:to-transparent",
        )}
      />
    </div>
  );
}

export function AboutCustomerRatingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 xl:px-16"
      aria-label="Customer rating and satisfaction"
    >
      <div className="relative mx-auto w-full max-w-[1320px]">
        <article className="relative overflow-hidden rounded-[16px] border border-[#E8ECF0] bg-[#F8FAFC] shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:rounded-[18px] lg:rounded-[20px]">
          <div className="flex flex-col lg:grid lg:min-h-[220px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:items-stretch">
            <RatingSummary className="border-b border-[#E8ECF0] lg:border-b-0 lg:border-r" />

            <StatsGrid className="border-b border-[#E8ECF0] lg:border-b-0" />

            <ScenicImage />
          </div>
        </article>
      </div>
    </motion.section>
  );
}
