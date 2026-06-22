"use client";

import { useReducedMotion } from "framer-motion";
import { homeReviews } from "@/data/homeReviews";
import { cn } from "@/lib/cn";
import { ReviewCard } from "./ReviewCard";

const MARQUEE_DURATION = "52s";

export function HomeReviewsCarousel() {
  const reduceMotion = useReducedMotion();
  const duplicatedReviews = [...homeReviews, ...homeReviews];
  const reviews = reduceMotion ? homeReviews : duplicatedReviews;

  return (
    <div
      className={cn(
        "relative w-full",
        reduceMotion
          ? "overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          : "reviews-marquee-fade overflow-hidden",
      )}
      aria-label="Customer reviews carousel"
      aria-live="off"
    >
      <div
        className={cn(
          "flex gap-4 py-2 sm:gap-5",
          !reduceMotion && "reviews-marquee-track",
        )}
        style={
          !reduceMotion
            ? ({ "--reviews-marquee-duration": MARQUEE_DURATION } as React.CSSProperties)
            : undefined
        }
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}
