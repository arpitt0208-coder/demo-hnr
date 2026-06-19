"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { textJourney } from "@/assets/images";
import { findYourRideGalleryItems } from "@/data/findYourRide";
import { Gallery4 } from "@/components/UI/gallery4";
import { HeadingSparkle } from "@/components/UI/HeadingSparkle";
import { ScrollReveal } from "@/components/UI/scroll-reveal";

export function HomeFindYourRideSection() {
  return (
    <section
      id="fleet"
      className="relative w-full scroll-mt-24 overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
      aria-label="Find your perfect ride"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(247,203,70,0.05),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="blur" className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white px-4 py-2 shadow-sm">
            <ShieldCheck
              className="size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.08em] text-dark-navy">
              Premium Safety
            </span>
          </div>

          <h2 className="mt-4 text-[26px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[30px] sm:text-[38px] md:text-[46px] xl:text-[52px]">
            <span className="block">
              Find Your Perfect{" "}
              <span className="relative inline-block">
                Ride
                <HeadingSparkle className="-right-5 sm:-right-6" />
              </span>
            </span>
            <span className="mt-1 block">
              For The{" "}
              <Image
                src={textJourney}
                alt="Journey Ahead"
                width={600}
                height={149}
                className="inline-block h-[42px] w-auto align-baseline mix-blend-screen sm:h-[50px] md:h-[58px] xl:h-[64px]"
              />
            </span>
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            Pick a category to see what we offer—then jump straight into
            available models.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15}>
          <Gallery4
            items={findYourRideGalleryItems}
            className="mt-6 lg:mt-8"
            compact
            variant="fleet"
            showDots={false}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
