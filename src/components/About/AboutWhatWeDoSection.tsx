"use client";

import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import Image from "next/image";
import {
  aboutServiceCards,
  aboutWhatWeDoImages,
  aboutWhatWeDoIntro,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

export function AboutWhatWeDoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-12 xl:px-16"
      aria-label="What we do"
    >
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <Mountain
            className="size-7 text-primary-yellow sm:size-8"
            strokeWidth={2}
            aria-hidden="true"
          />

          <h2 className="mt-2.5 text-[22px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px]">
            What We Do
          </h2>

          <p className="mt-2.5 max-w-[580px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]">
            {aboutWhatWeDoIntro}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-7 lg:grid-cols-2 lg:items-stretch lg:gap-6 xl:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-[14px] border border-[#E8ECF0] bg-white p-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] sm:p-4 md:p-5"
          >
            {aboutServiceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className={cn(
                    "flex gap-3 sm:gap-3.5",
                    index > 0 && "mt-3.5 border-t border-[#EEF2F6] pt-3.5 sm:mt-4 sm:pt-4",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full sm:size-11",
                      card.iconBgClassName,
                    )}
                  >
                    <Icon
                      className={cn("size-4 sm:size-[18px]", card.iconClassName)}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-left text-[14px] font-extrabold leading-snug text-dark-navy sm:text-[15px]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-left text-[12px] font-medium leading-[1.6] text-[#64748B] sm:text-[13px]">
                      {card.description}
                    </p>

                    <ul className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1 min-[480px]:grid-cols-2">
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-1.5 text-left text-[11px] font-medium text-dark-navy sm:text-[12px]"
                        >
                          <span
                            className="mt-[6px] size-1.5 shrink-0 rounded-full bg-primary-yellow"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.article>

          <div className="grid h-full min-h-[280px] grid-cols-2 grid-rows-2 gap-2 sm:min-h-[320px] sm:gap-3 lg:min-h-0">
            {aboutWhatWeDoImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative min-h-0 overflow-hidden rounded-[12px] shadow-[0_6px_20px_rgba(15,23,42,0.07)] sm:rounded-[14px]",
                  image.id === "group-ride" ? "col-span-2 row-span-1" : "row-span-1",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
