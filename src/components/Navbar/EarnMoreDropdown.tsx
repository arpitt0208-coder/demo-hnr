"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, ChevronRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { referralCards } from "@/data/earnMore";
import { cn } from "@/lib/cn";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.36, ease: EASE, delay: 0.08 },
  },
};

export function EarnMoreDropdown() {
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white px-5 pb-4 pt-4 md:px-7 lg:px-9">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-stretch">
        <motion.div
          variants={gridVariants}
          initial={false}
          animate="visible"
          className="grid min-w-0 flex-1 grid-cols-1 gap-2.5 sm:grid-cols-3"
        >
          {referralCards.map((card) => {
            const Icon = card.icon;
            const BadgeIcon = card.badge?.icon;

            return (
              <motion.a
                key={card.id}
                href={card.href}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.22 } }}
                className="group/card flex flex-col overflow-hidden rounded-[12px] border border-[#E8ECF0] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
              >
                <div className="relative h-[88px] overflow-hidden sm:h-[94px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]",
                      card.imagePosition
                    )}
                    sizes="(max-width: 640px) 100vw, 180px"
                  />

                  {card.badge && BadgeIcon && (
                    <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-primary-yellow px-2 py-0.5 text-[7px] font-extrabold tracking-[0.06em] text-dark-navy shadow-[0_2px_8px_rgba(239,190,61,0.4)]">
                      <BadgeIcon className="size-2.5" aria-hidden="true" />
                      {card.badge.label}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <Icon
                      className="size-3 text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`${playfair.className} truncate text-[13px] font-semibold leading-tight text-white sm:text-[14px]`}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-[9px] font-medium leading-snug text-white/80 sm:text-[10px]">
                      {card.description}
                    </p>
                  </div>

                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover/card:scale-105">
                    <ArrowRight
                      className="size-2.5 text-dark-navy"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.aside
          variants={sidebarVariants}
          initial={false}
          animate="visible"
          className="flex w-full shrink-0 flex-col rounded-[16px] border border-[#E8ECF0] bg-white p-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] xl:w-[300px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_10px_rgba(239,190,61,0.3)]">
              <Award
                className="size-[18px] text-dark-navy"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-[15px] font-extrabold leading-snug text-[#0F172A]">
              <span className="text-primary-yellow">Earn More</span> with
              Referrals
            </h3>
          </div>

          <div
            className="mt-3 h-[3px] w-12 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <p className="mt-3 text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
            Unlock extra value by referring trusted travel partners. It&apos;s
            simple, rewarding, and built for our community.
          </p>

          <div
            className="my-4 border-t border-dashed border-[#E2E8F0]"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-2">
            {referralCards.map((card) => {
              const Icon = card.icon;

              return (
                <li key={card.id}>
                  <a
                    href={card.href}
                    className="group/link flex items-center gap-2.5 rounded-[12px] border border-[#E8ECF0] bg-white p-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-300 hover:border-primary-yellow/35 hover:shadow-[0_8px_24px_rgba(239,190,61,0.1)]"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFFBF0] transition-colors group-hover/link:bg-primary-yellow/15">
                      <Icon
                        className="size-4 text-primary-yellow"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[12px] font-extrabold text-[#0F172A]">
                        {card.title}
                      </span>
                      <span className="mt-0.5 block line-clamp-2 text-[10px] font-medium leading-snug text-[#64748B]">
                        {card.description}
                      </span>
                    </span>

                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-primary-yellow/70 bg-white transition-all duration-300 group-hover/link:border-primary-yellow group-hover/link:bg-primary-yellow/5">
                      <ChevronRight
                        className="size-3.5 text-primary-yellow transition-transform duration-300 group-hover/link:translate-x-0.5"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.aside>
      </div>
    </div>
  );
}
