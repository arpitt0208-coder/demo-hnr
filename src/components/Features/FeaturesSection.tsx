"use client";

import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import backBg from "@/assets/images/back.png";
import { CommunityCard } from "./CommunityCard";
import { FeaturesSupportCard } from "./FeaturesSupportCard";
import { InsuredRidesCard } from "./InsuredRidesCard";
import { KycCard } from "./KycCard";
import { PricingCard } from "./PricingCard";
import { RideDetailsCard } from "./RideDetailsCard";

export function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
      aria-label="What makes us different"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-top bg-no-repeat bg-[length:100%_auto] opacity-50"
        style={{ backgroundImage: `url(${backBg.src})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-yellow/70 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <Mountain
              className="size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow">
              THE DIFFERENCE
            </span>
          </div>

          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[36px] md:text-[42px] xl:text-[46px]">
            Here&apos;s What{" "}
            <span className="text-primary-yellow">Makes Us Different</span>
          </h2>

          <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
            We&apos;re more than a bike rental. We&apos;re your trusted riding
            partner. From maintained rides to local guides, we make sure your
            journey is safe, smooth, and unforgettable.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <RideDetailsCard />
            <InsuredRidesCard />
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <FeaturesSupportCard />
            <PricingCard />
            <KycCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
