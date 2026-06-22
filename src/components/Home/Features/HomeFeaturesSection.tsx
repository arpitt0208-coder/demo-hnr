"use client";

import { Mountain } from "lucide-react";
import backBg from "@/assets/images/back.png";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { CommunityCard } from "./CommunityCard";
import { FeaturesSupportCard } from "./FeaturesSupportCard";
import { InsuredRidesCard } from "./InsuredRidesCard";
import { KycCard } from "./KycCard";
import { PricingCard } from "./PricingCard";
import { RideDetailsCard } from "./RideDetailsCard";

export function HomeFeaturesSection() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
      aria-label="Why choose Hire N Ride"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-top bg-no-repeat bg-[length:100%_auto] opacity-50"
        style={{ backgroundImage: `url(${backBg.src})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="fade" className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-yellow/70 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <Mountain
              className="icon-float size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow">
              THE DIFFERENCE
            </span>
          </div>

          <h2 className="mt-5 text-[24px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[28px] sm:text-[34px] md:text-[40px] xl:text-[46px]">
            Why Choose{" "}
            <span className="text-primary-yellow">Hire N Ride</span>
          </h2>

          <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            We&apos;re more than a bike rental. We&apos;re your trusted riding
            partner. From maintained rides to local guides, we make sure your
            journey is safe, smooth, and unforgettable.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-8 flex flex-col gap-4 lg:mt-10" stagger={0.1}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <StaggerItem variant="slide-left">
              <RideDetailsCard />
            </StaggerItem>
            <StaggerItem variant="slide-right">
              <InsuredRidesCard />
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StaggerItem variant="rotate-in">
              <FeaturesSupportCard />
            </StaggerItem>
            <StaggerItem variant="clip-up">
              <PricingCard />
            </StaggerItem>
            <StaggerItem variant="rotate-in">
              <KycCard />
            </StaggerItem>
            <StaggerItem variant="clip-up">
              <CommunityCard />
            </StaggerItem>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
