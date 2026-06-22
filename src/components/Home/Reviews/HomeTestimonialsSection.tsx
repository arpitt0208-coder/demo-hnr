"use client";

import { MessageSquareQuote } from "lucide-react";
import { homeReviews } from "@/data/homeReviews";
import { ScrollReveal } from "@/components/UI/scroll-reveal";
import { HomeReviewsCarousel } from "./HomeReviewsCarousel";

export function HomeTestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full scroll-mt-24 overflow-x-clip bg-[#FAFAFA] py-14 sm:py-16 md:py-20"
      aria-label="Testimonials"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-0 size-[420px] rounded-full bg-primary-yellow/8 blur-[100px]" />
        <div className="absolute -bottom-32 left-0 size-[360px] rounded-full bg-[#FF6B35]/6 blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <ScrollReveal variant="blur" className="flex flex-col items-center text-center">
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
