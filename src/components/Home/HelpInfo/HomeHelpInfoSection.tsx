"use client";

import { helpBadgeIcon } from "@/data/helpInfo";
import { HomeHelpInfoCards } from "./HomeHelpInfoCards";
import { HeadingSparkle } from "@/components/UI/HeadingSparkle";
import { HomeHelpInfoIllustration } from "./HomeHelpInfoIllustration";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";

export function HomeHelpInfoSection() {
  const BadgeIcon = helpBadgeIcon;

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
      aria-label="FAQ"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="overflow-hidden rounded-[28px] border border-[#E8ECF0] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
            <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
              <StaggerReveal className="flex flex-col" stagger={0.12}>
                <StaggerItem variant="slide-left">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary-yellow">
                      <BadgeIcon
                        className="icon-pulse-soft size-3 text-dark-navy"
                        strokeWidth={2.4}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-dark-navy">
                      HELP &amp; INFORMATION
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem variant="slide-left">
                  <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[34px] md:text-[40px] xl:text-[44px]">
                    We&apos;re Here to{" "}
                    <span className="relative inline-block text-primary-yellow">
                      Help
                      <HeadingSparkle />
                    </span>
                  </h2>
                </StaggerItem>

                <StaggerItem variant="slide-left">
                  <p className="mt-4 max-w-[420px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
                    Find quick answers to common questions and important
                    information.
                  </p>
                </StaggerItem>

                <StaggerItem variant="scale">
                  <HomeHelpInfoIllustration />
                </StaggerItem>
              </StaggerReveal>

              <StaggerReveal className="flex flex-col gap-4" stagger={0.14}>
                <HomeHelpInfoCards />
              </StaggerReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
