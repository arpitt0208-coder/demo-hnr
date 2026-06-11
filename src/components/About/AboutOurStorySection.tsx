"use client";

import { motion } from "framer-motion";
import backBg from "@/assets/images/back.png";
import {
  aboutStoryCards,
  aboutStoryIntro,
  aboutStoryVideo,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

export function AboutOurStorySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-16 xl:px-20"
      aria-label="Our story"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(52%,520px)] bg-top bg-no-repeat bg-[length:100%_auto] opacity-35"
        style={{ backgroundImage: `url(${backBg.src})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="h-px w-10 bg-primary-yellow sm:w-14"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.18em] text-primary-yellow sm:text-[11px]">
              OUR STORY
            </span>
            <span
              className="h-px w-10 bg-primary-yellow sm:w-14"
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-5 text-[24px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[28px] sm:text-[34px] md:text-[40px]">
            Empowering You To{" "}
            <span className="text-primary-yellow">Explore</span> More
          </h2>

          <p className="mt-4 max-w-[760px] text-[14px] font-medium leading-[1.8] text-[#475569] sm:text-[15px]">
            {aboutStoryIntro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {aboutStoryCards.map((card, index) => {
            const CardIcon = card.icon;

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col rounded-[24px] border border-[#E8ECF0] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:p-7"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FFFBF0] sm:size-12">
                    <CardIcon
                      className="size-5 text-primary-yellow sm:size-[22px]"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-left text-[17px] font-extrabold text-dark-navy sm:text-[18px]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-4 flex-1 text-left text-[13px] font-medium leading-[1.75] text-[#64748B] sm:text-[14px]">
                  {card.description}
                </p>

                <div className="mt-6 border-t border-[#EEF2F6] pt-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {card.highlights.map((highlight, highlightIndex) => {
                      const Icon = highlight.icon;

                      return (
                        <div
                          key={highlight.id}
                          className={cn(
                            "flex flex-col items-start gap-2 sm:items-center sm:text-center",
                            highlightIndex > 0 &&
                              "sm:border-l sm:border-[#EEF2F6]",
                          )}
                        >
                          <Icon
                            className="size-4 text-[#64748B]"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <p className="text-[12px] font-bold leading-snug text-dark-navy sm:text-[13px]">
                              {highlight.title}
                            </p>
                            <p className="mt-0.5 text-[11px] font-medium leading-snug text-[#94A3B8]">
                              {highlight.subtitle}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 mt-6 w-full sm:mb-10 sm:mt-8 md:mb-20"
        >
          <video
            src={aboutStoryVideo.src}
            poster={aboutStoryVideo.poster.src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="aspect-video h-full max-h-96 w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
