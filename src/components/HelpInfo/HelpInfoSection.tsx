"use client";

import { motion } from "framer-motion";
import { helpBadgeIcon } from "@/data/helpInfo";
import { HelpInfoCards } from "./HelpInfoCards";
import { HeadingSparkle } from "../UI/HeadingSparkle";
import { HelpInfoIllustration } from "./HelpInfoIllustration";

export function HelpInfoSection() {
  const BadgeIcon = helpBadgeIcon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
      aria-label="Help and information"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E8ECF0] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary-yellow">
                  <BadgeIcon
                    className="size-3 text-dark-navy"
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[10px] font-bold tracking-[0.16em] text-dark-navy">
                  HELP &amp; INFORMATION
                </span>
              </div>

              <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[34px] md:text-[40px] xl:text-[44px]">
                We&apos;re Here to{" "}
                <span className="relative inline-block text-primary-yellow">
                  Help
                  <HeadingSparkle />
                </span>
              </h2>

              <p className="mt-4 max-w-[420px] text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
                Find quick answers to common questions and important
                information.
              </p>

              <HelpInfoIllustration />
            </div>

            <HelpInfoCards />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
