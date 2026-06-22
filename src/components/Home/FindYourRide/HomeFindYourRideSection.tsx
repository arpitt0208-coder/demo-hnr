"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { textJourney } from "@/assets/images";
import { findYourRideGalleryItems } from "@/data/findYourRide";
import { HeadingSparkle } from "@/components/UI/HeadingSparkle";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { FindYourRideCard } from "./FindYourRideCard";

export function HomeFindYourRideSection() {
  return (
    <section
      id="fleet"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16"
      aria-label="Find your perfect ride"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="slide-right" className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white px-4 py-2 shadow-sm">
            <ShieldCheck
              className="icon-pulse-soft size-3.5 shrink-0 text-primary-yellow"
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
                className="mx-1 inline-block h-[42px] w-auto align-middle sm:h-[50px] md:h-[58px] xl:h-[64px]"
              />
            </span>
          </h2>

          <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            Pick a category to see what we offer—then jump straight into
            available models.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={0.12} className="mt-6 lg:mt-8">
          <StaggerReveal
            className="grid grid-cols-1 items-stretch gap-6 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            stagger={0.1}
          >
            {findYourRideGalleryItems.map((item, index) => (
              <StaggerItem
                key={item.id}
                variant={index % 2 === 0 ? "slide-left" : "slide-right"}
                className="h-full"
              >
                <FindYourRideCard item={item} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
