"use client";

import Image from "next/image";
import { Smartphone, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appText, manali } from "@/assets/images";
import {
  appFeatures,
  appStatCards,
  appTrustBadges,
  type AppStatCard,
} from "@/data/appPromo";
import { CountUpText } from "@/components/UI/count-up";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { smoothEase } from "@/lib/motion";
import { HomeAppDownloadBadges } from "./HomeAppDownloadBadges";
import { HomeAppPhoneMockup } from "./HomeAppPhoneMockup";

const cardSurface =
  "rounded-2xl border border-[#EEF2F6] bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.07)] backdrop-blur-sm";

function FloatingStatCard({ card }: { card: AppStatCard }) {
  const Icon = card.icon;

  return (
    <article className={`${cardSurface} px-4 py-3.5 sm:px-5 sm:py-4`}>
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-yellow/15">
          <Icon className="size-5 text-primary-yellow" strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-extrabold leading-tight text-dark-navy sm:text-[15px]">
            <span className="text-primary-yellow">
              <CountUpText value={card.value} />
            </span>{" "}
            {card.label}
          </p>
          <p className="mt-0.5 text-[11px] font-medium leading-snug text-[#64748B] sm:text-xs">
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function TrustBadgeItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-3.5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-yellow/60 bg-white shadow-[0_2px_10px_rgba(239,190,61,0.12)]">
        <Icon className="size-[18px] text-primary-yellow" strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-bold leading-tight text-dark-navy sm:text-sm">{title}</p>
        <p className="mt-0.5 text-[11px] font-medium leading-snug text-[#64748B] sm:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HomeAppPromoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="app"
      className="relative w-full scroll-mt-24 overflow-hidden bg-[#FDFBF7]"
      aria-label="Download the Hire N Ride app"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] sm:inset-y-0 sm:left-auto sm:h-auto sm:w-[52%] lg:w-[58%]"
        aria-hidden="true"
      >
        <Image
          src={manali}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-[62%_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/20 via-[#FDFBF7]/90 to-[#FDFBF7] sm:bg-gradient-to-r sm:from-[#FDFBF7] sm:via-[#FDFBF7]/88 sm:to-[#FDFBF7]/15" />
      </div>

      <div className="relative z-[2] w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="flex flex-col">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-primary-yellow/70 bg-[#FFFBF0] px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                  <Smartphone
                    className="icon-float size-3.5 shrink-0 text-primary-yellow"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-dark-navy">
                    AVAILABLE NOW
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[34px] md:text-[40px] xl:text-[44px]">
                  <span className="block">Hire N Ride</span>
                  <span className="mt-1 flex flex-wrap items-center gap-2">
                    Bike Rental
                    <Image
                      src={appText}
                      alt="App"
                      width={400}
                      height={244}
                      className="h-[36px] w-auto sm:h-[44px] md:h-[50px] xl:h-[54px]"
                    />
                  </span>
                </h2>

                <p className="mt-3 max-w-[400px] text-[14px] font-medium leading-[1.7] text-[#475569] sm:text-[15px]">
                  Download and start your adventure today.
                </p>
              </ScrollReveal>

              <div className="mt-5">
                <StaggerReveal className="flex max-w-[480px] flex-col gap-2.5" stagger={0.08}>
                    {appFeatures.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <StaggerItem key={feature.title} variant="fade-up">
                          <motion.article
                            className={`group flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 ${cardSurface}`}
                            whileHover={
                              reduceMotion
                                ? undefined
                                : { y: -2, transition: { duration: 0.3, ease: smoothEase } }
                            }
                          >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-yellow">
                              <Icon
                                className="size-5 text-dark-navy"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[14px] font-bold leading-tight text-dark-navy sm:text-[15px]">
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

              <div className="mt-5">
                <HomeAppDownloadBadges />
              </div>
            </div>

            <ScrollReveal variant="scale" delay={0.1} className="flex w-full flex-col items-center lg:items-end">
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] xl:max-w-[780px]">
                  <div className="absolute left-[-160px] top-[8%] z-10 hidden w-[300px] xl:block">
                    <FloatingStatCard card={appStatCards[0]} />
                  </div>

                  <div className="absolute right-[-160px] bottom-[10%] z-10 hidden w-[300px] xl:block">
                    <FloatingStatCard card={appStatCards[1]} />
                  </div>

                  <div className="relative z-[1] mx-auto w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px]">
                    <HomeAppPhoneMockup />
                  </div>
                </div>

                <div className="mt-5 grid w-full max-w-md grid-cols-1 gap-2.5 sm:grid-cols-2 xl:hidden">
                  {appStatCards.map((card) => (
                    <FloatingStatCard key={card.label} card={card} />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="fade-up" delay={0.15} className="mt-8 border-t border-[#E8ECF0]/80 pt-7 sm:mt-10 sm:pt-8 lg:mt-12 lg:pt-10">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-8">
                {appTrustBadges.map((badge) => (
                  <TrustBadgeItem
                    key={badge.title}
                    icon={badge.icon}
                    title={badge.title}
                    description={badge.description}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
      </div>
    </section>
  );
}
