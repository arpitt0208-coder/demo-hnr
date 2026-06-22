"use client";

import { BadgeCheck, MapPin, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeReview } from "@/data/homeReviews";
import { cn } from "@/lib/cn";

const AVATAR_GRADIENTS = [
  "from-[#F7CB46] to-[#FF6B35]",
  "from-[#60A5FA] to-[#818CF8]",
  "from-[#34D399] to-[#2DD4BF]",
  "from-[#F472B6] to-[#FB7185]",
  "from-[#A78BFA] to-[#C084FC]",
  "from-[#FBBF24] to-[#F59E0B]",
  "from-[#38BDF8] to-[#0EA5E9]",
  "from-[#4ADE80] to-[#22C55E]",
] as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAvatarGradient(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
}

type ReviewCardProps = {
  review: HomeReview;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  const initials = getInitials(review.name);
  const gradient = getAvatarGradient(review.avatarSeed);

  return (
    <motion.article
      className={cn(
        "review-card group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#E8ECF0] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition-[box-shadow,transform,border-color] duration-500 ease-out sm:w-[360px] sm:rounded-[22px] sm:p-6",
        "hover:-translate-y-1.5 hover:border-primary-yellow/30 hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)]",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <Quote
        className="review-quote-deco pointer-events-none absolute top-4 right-5 size-10 text-primary-yellow"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="flex items-start gap-3.5">
        <div className="relative shrink-0">
          <div
            className={cn(
              "review-avatar-ring absolute -inset-0.5 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              gradient,
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br text-[13px] font-extrabold tracking-tight text-white shadow-[0_4px_14px_rgba(15,23,42,0.12)] sm:size-[52px] sm:text-sm",
              gradient,
            )}
            aria-hidden="true"
          >
            {initials}
          </div>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-[15px] font-bold tracking-tight text-dark-navy sm:text-base">
              {review.name}
            </p>
            <BadgeCheck
              className="size-4 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-label="Verified rider"
            />
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-[12px] font-medium text-[#94A3B8]">
            <MapPin className="size-3 shrink-0" aria-hidden="true" />
            <span className="truncate">{review.location}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(
                "review-star-pulse size-3.5 sm:size-4",
                index < review.rating
                  ? "fill-primary-yellow text-primary-yellow"
                  : "fill-[#E2E8F0] text-[#E2E8F0]",
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-[11px] font-semibold tracking-wide text-[#94A3B8] uppercase">
          {review.date}
        </span>
      </div>

      <p className="mt-4 text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mt-5 flex items-center border-t border-[#F1F5F9] pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFBF0] px-3 py-1.5 text-[11px] font-bold tracking-wide text-dark-navy">
          <span className="size-1.5 rounded-full bg-primary-yellow" aria-hidden="true" />
          {review.trip}
        </span>
      </div>
    </motion.article>
  );
}
