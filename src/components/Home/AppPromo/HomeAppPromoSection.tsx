"use client";

import Image from "next/image";
import { Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appText, manali } from "@/assets/images";
import {
  appFeatures,
  appStatCards,
  type AppStatCard,
} from "@/data/appPromo";
import { CountUpText } from "@/components/UI/count-up";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { smoothEase } from "@/lib/motion";
import { HomeAppDownloadBadges } from "./HomeAppDownloadBadges";
import { HomeAppPhoneMockup } from "./HomeAppPhoneMockup";

function AppStatCardItem({ card }: { card: AppStatCard }) {
  const Icon = card.icon;

  return (
    <article className="flex min-w-0 flex-1 items-start gap-3 rounded-[18px] border border-[#E8ECF0] bg-white px-4 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-yellow/15">
        <Icon className="size-[18px] text-primary-yellow" strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[22px] font-extrabold leading-none text-dark-navy">
          <CountUpText value={card.value} />
        </p>
        <p className="mt-1 text-[13px] font-bold text-dark-navy">{card.label}</p>
        <p className="mt-0.5 text-[11px] font-medium leading-snug text-[#475569]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

export function HomeAppPromoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="app"
      className="relative w-full scroll-mt-24 overflow-hidden bg-[#FAFAFA] px-4 py-14 sm:px-6 sm:py-16 md:py-20"
      aria-label="Download the Hire N Ride app"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="blur">
          <div className="overflow-hidden rounded-[28px] border border-[#E8ECF0] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
            <div className="grid items-center lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-primary-yellow/50 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                  <Smartphone
                    className="icon-float size-3.5 shrink-0 text-primary-yellow"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow">
                    MOBILE APP
                  </span>
                </div>

                <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[34px] md:text-[40px]">
                  <span className="block">Hire N Ride</span>
                  <span className="mt-1 flex flex-wrap items-center gap-2">
                    Bike Rental
                    <Image
                      src={appText}
                      alt="App"
                      width={400}
                      height={244}
                      className="h-[34px] w-auto sm:h-[42px] md:h-[48px]"
                    />
                  </span>
                </h2>

                <p className="mt-4 max-w-[420px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
                  Download and start your adventure today.
                </p>

                <div className="order-3 mt-8 lg:order-none lg:mt-8">
                  <StaggerReveal className="flex flex-col gap-3" stagger={0.08}>
                    {appFeatures.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <StaggerItem key={feature.title} variant="fade-up">
                          <motion.article
                            className="group flex items-center gap-3.5 rounded-[16px] border border-[#E8ECF0] bg-[#FAFAFA] px-4 py-3.5 transition-all duration-300 hover:border-primary-yellow/35 hover:bg-white hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                            whileHover={
                              reduceMotion ? undefined : { y: -2, transition: { duration: 0.3, ease: smoothEase } }
                            }
                          >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-yellow transition-transform duration-300 group-hover:scale-105">
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
                              <p className="mt-0.5 text-[12px] font-medium text-[#475569]">
                                {feature.subtitle}
                              </p>
                            </div>
                          </motion.article>
                        </StaggerItem>
                      );
                    })}
                  </StaggerReveal>
                </div>

                <div className="order-4 mt-6 grid gap-3 sm:grid-cols-2 lg:order-none">
                  {appStatCards.map((card) => (
                    <AppStatCardItem key={card.label} card={card} />
                  ))}
                </div>

                <div className="order-5 mt-6 lg:order-none">
                  <HomeAppDownloadBadges />
                </div>
              </div>

              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#FDFBF7] px-6 py-10 sm:min-h-[380px] sm:px-8 lg:min-h-full lg:px-10 lg:py-12">
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <Image
                    src={manali}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/82 to-[#FDFBF7]/55 lg:bg-gradient-to-l lg:from-[#FDFBF7] lg:via-[#FDFBF7]/88 lg:to-[#FDFBF7]/35" />
                </div>

                <div className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
                  <HomeAppPhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
