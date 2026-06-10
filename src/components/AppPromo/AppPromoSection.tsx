"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { appText } from "@/assets/images";
import {
  appFeatures,
  appStatCards,
  appTrustItems,
} from "@/data/appPromo";
import { AppDownloadBadges } from "./AppDownloadBadges";
import { AppPhoneMockup } from "./AppPhoneMockup";

const ROAD_BG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1100&fit=crop";

export function AppPromoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
      aria-label="Download the Hire N Ride app"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#E8ECF0] bg-[#FDFBF7]">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] sm:inset-y-0 sm:left-auto sm:h-auto sm:w-[50%] lg:w-[58%]"
            aria-hidden="true"
          >
            <Image
              src={ROAD_BG}
              alt=""
              fill
              sizes="(max-width: 1024px) 0px, 740px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/20 via-[#FDFBF7]/90 to-[#FDFBF7] sm:bg-gradient-to-r sm:from-[#FDFBF7] sm:via-[#FDFBF7]/88 sm:to-[#FDFBF7]/15" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-yellow/70 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                  <Smartphone
                    className="size-3.5 shrink-0 text-primary-yellow"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-dark-navy">
                    AVAILABLE NOW
                  </span>
                </div>

                <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[34px] md:text-[40px] xl:text-[44px]">
                  <span className="block">Hire N Ride</span>
                  <span className="block">Bike Rental</span>
                  <span className="mt-1 inline-block">
                    <Image
                      src={appText}
                      alt="App"
                      width={400}
                      height={244}
                      className="h-[36px] w-auto mix-blend-screen sm:h-[44px] md:h-[50px] xl:h-[54px]"
                    />
                  </span>
                </h2>

                <p className="mt-4 max-w-[380px] text-[14px] font-medium leading-[1.75] text-text-gray sm:text-[15px]">
                  Download and start your adventure today.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {appFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <article
                        key={feature.title}
                        className="flex items-center gap-3.5 rounded-[16px] border border-[#F1F5F9] bg-white px-4 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-yellow">
                          <Icon
                            className="size-5 text-dark-navy"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[14px] font-bold leading-tight text-dark-navy">
                            {feature.title}
                          </p>
                          <p className="mt-0.5 text-[12px] font-medium text-text-gray">
                            {feature.subtitle}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <AppDownloadBadges />
                </div>
              </div>

              <div className="hidden flex-col justify-center gap-4 lg:col-span-3 lg:flex">
                {appStatCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.label}
                      className="rounded-[18px] border border-[#F1F5F9] bg-white px-4 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-yellow/15">
                          <Icon
                            className="size-[18px] text-primary-yellow"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[22px] font-extrabold leading-none text-dark-navy">
                            {card.value}
                          </p>
                          <p className="mt-1 text-[13px] font-bold text-dark-navy">
                            {card.label}
                          </p>
                          <p className="mt-0.5 text-[11px] font-medium leading-snug text-text-gray">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="flex justify-center lg:col-span-4 lg:justify-end">
                <AppPhoneMockup />
              </div>

              <div className="flex flex-col gap-3 lg:hidden">
                {appStatCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.label}
                      className="rounded-[18px] border border-[#F1F5F9] bg-white px-4 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-yellow/15">
                          <Icon
                            className="size-[18px] text-primary-yellow"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[22px] font-extrabold leading-none text-dark-navy">
                            {card.value}
                          </p>
                          <p className="mt-1 text-[13px] font-bold text-dark-navy">
                            {card.label}
                          </p>
                          <p className="mt-0.5 text-[11px] font-medium leading-snug text-text-gray">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-[#E8ECF0] pt-6 sm:mt-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                {appTrustItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative flex items-center gap-3 sm:justify-center sm:px-5"
                    >
                      {index > 0 && (
                        <div
                          className="absolute -left-px top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#E8ECF0] sm:block"
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-yellow/12">
                        <Icon
                          className="size-[18px] text-primary-yellow"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[14px] font-bold leading-tight text-dark-navy">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[12px] font-medium leading-snug text-text-gray">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
