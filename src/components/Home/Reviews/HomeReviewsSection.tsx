"use client";

import { MessageSquareQuote, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { homeReviews, reviewStats } from "@/data/homeReviews";
import { CountUpText } from "@/components/UI/count-up";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { smoothEase } from "@/lib/motion";
import { HomeReviewsCarousel } from "./HomeReviewsCarousel";

const statItems = [
  {
    id: "rating",
    value: reviewStats.averageRating.toFixed(1),
    label: "Average Rating",
    icon: Star,
    animate: false,
  },
  {
    id: "reviews",
    value: reviewStats.totalReviews,
    label: "Happy Riders",
    icon: null,
    animate: false,
  },
  {
    id: "recommend",
    value: `${reviewStats.recommendPercent}%`,
    label: "Would Recommend",
    icon: null,
    animate: true,
  },
] as const;

export function HomeReviewsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="relative w-full scroll-mt-24 overflow-x-clip bg-[#FAFAFA] py-14 sm:py-16 md:py-20"
      aria-label="Customer reviews"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-0 size-[420px] rounded-full bg-primary-yellow/8 blur-[100px]" />
        <div className="absolute -bottom-32 left-0 size-[360px] rounded-full bg-[#FF6B35]/6 blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <ScrollReveal variant="clip-up" className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-yellow/50 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <MessageSquareQuote
              className="icon-float size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow">
              RIDER REVIEWS
            </span>
          </div>

          <h2 className="mt-5 text-[24px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[28px] sm:text-[34px] md:text-[40px] xl:text-[46px]">
            Loved by{" "}
            <span className="relative inline-block text-primary-yellow">
              Real Riders
            </span>
          </h2>

          <p className="mt-4 max-w-[580px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            Honest stories from travelers who explored the Himalayas with us.
            Every review comes from a verified booking—no fluff, just real rides.
          </p>
        </ScrollReveal>

        <StaggerReveal
          className="mx-auto mt-8 flex max-w-[640px] flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
          stagger={0.12}
        >
          {statItems.map((stat) => (
            <StaggerItem key={stat.id} variant="scale">
              <motion.div
                className="flex min-w-[140px] flex-col items-center rounded-2xl border border-[#E8ECF0] bg-white px-5 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:min-w-[160px] sm:px-6 sm:py-5"
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
                transition={{ duration: 0.35, ease: smoothEase }}
              >
                <div className="flex items-center gap-1.5">
                  {stat.icon ? (
                    <stat.icon
                      className="icon-pulse-soft size-4 fill-primary-yellow text-primary-yellow"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="text-[22px] font-extrabold tracking-tight text-dark-navy sm:text-[26px]">
                    {stat.animate ? (
                      <CountUpText value={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </span>
                </div>
                <span className="mt-1 text-[11px] font-semibold tracking-wide text-[#94A3B8] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal variant="slide-left" delay={0.1} className="mt-10 sm:mt-12">
          <HomeReviewsCarousel />
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.2} className="mt-6 text-center sm:mt-8">
          <p className="text-[12px] font-medium text-[#94A3B8]">
            Showing {homeReviews.length} featured reviews from verified riders
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
