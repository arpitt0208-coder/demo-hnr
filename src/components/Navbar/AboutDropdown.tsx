"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Link2 } from "lucide-react";
import Image from "next/image";
import { aboutCards, aboutQuickLinks } from "@/data/about";

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

function AboutRouteIllustration() {
  return (
    <svg
      viewBox="0 0 260 120"
      fill="none"
      className="mt-6 w-full"
      aria-hidden="true"
    >
      <path
        d="M8 92 C 50 88, 72 70, 98 58 S 148 42, 188 36 S 228 28, 248 18"
        stroke="#efbe3d"
        strokeWidth="2"
        strokeDasharray="4 8"
        strokeLinecap="round"
      />
      <ellipse cx="130" cy="98" rx="118" ry="18" fill="#E8D5B5" opacity="0.55" />
      <path
        d="M20 88 Q 80 72 140 78 T 240 68"
        fill="#D4A574"
        opacity="0.35"
      />
      <circle cx="72" cy="76" r="14" fill="#efbe3d" opacity="0.25" />
      <g transform="translate(58, 62)">
        <circle cx="14" cy="14" r="10" fill="#1E293B" />
        <path
          d="M6 22 L14 10 L22 22 Z"
          fill="#efbe3d"
          transform="translate(0, -4)"
        />
        <rect x="8" y="20" width="12" height="6" rx="2" fill="#475569" />
      </g>
      <g transform="translate(218, 8)">
        <path
          d="M12 24 C12 13.5 20.5 5 31 5 C41.5 5 50 13.5 50 24 C50 38 31 52 31 52 C31 52 12 38 12 24 Z"
          fill="#efbe3d"
        />
        <circle cx="31" cy="24" r="8" fill="white" />
        <circle cx="31" cy="24" r="4" fill="#efbe3d" />
      </g>
    </svg>
  );
}

export function AboutDropdown() {
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white px-6 pb-8 pt-5 md:px-8 lg:px-10">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-yellow/70 bg-[#FFFBF0] px-3.5 py-1.5">
            <span
              className="size-2 shrink-0 rounded-full bg-primary-yellow"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.14em] text-primary-yellow">
              ABOUT US
            </span>
          </div>

          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.12] tracking-tight text-[#0F172A] sm:text-[32px]">
            Know the Story Behind{" "}
            <span className="text-primary-yellow">Hire n Ride</span>
          </h2>

          <p className="mt-3 max-w-[640px] text-[13px] font-medium leading-[1.75] text-[#64748B] sm:text-[14px]">
            Born from a passion for exploration, Hire n Ride makes every journey
            effortless with reliable bikes, trusted service, and unforgettable
            road trip experiences.
          </p>

          <motion.div
            variants={gridVariants}
            initial={false}
            animate="visible"
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.id}
                  href={card.href}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="group/card flex flex-col overflow-hidden rounded-[18px] border border-[#E8ECF0] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-primary-yellow/35 hover:shadow-[0_12px_32px_rgba(239,190,61,0.12)]"
                >
                  <div className="relative h-[148px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-5 pt-7">
                    <span className="absolute -top-5 left-5 flex size-10 items-center justify-center rounded-full border-2 border-primary-yellow bg-white shadow-[0_2px_10px_rgba(239,190,61,0.25)] transition-transform duration-300 group-hover/card:scale-105">
                      <Icon
                        className="size-[18px] text-primary-yellow"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="text-[15px] font-extrabold leading-snug text-[#0F172A]">
                      {card.title}
                    </h3>

                    <p className="mt-2 flex-1 text-[12px] font-medium leading-[1.7] text-[#64748B] sm:text-[13px]">
                      {card.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary-yellow transition-colors group-hover/card:text-[#d9ad35] sm:text-[13px]">
                      {card.cta}
                      <ArrowRight
                        className="size-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.aside
          variants={sidebarVariants}
          initial={false}
          animate="visible"
          className="flex w-full shrink-0 flex-col rounded-[20px] border border-[#E8ECF0] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] xl:w-[300px]"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_10px_rgba(239,190,61,0.3)]">
              <Link2
                className="size-[18px] text-dark-navy"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-[15px] font-extrabold text-[#0F172A]">
              Quick Links
            </h3>
          </div>

          <div
            className="mt-3 h-[3px] w-12 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <ul className="mt-1">
            {aboutQuickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li
                  key={link.label}
                  className="border-b border-[#F1F5F9] last:border-b-0"
                >
                  <a
                    href={link.href}
                    className="group/link flex items-center justify-between rounded-lg py-3.5 transition-colors hover:bg-[#FFFBF0]/80"
                  >
                    <span className="flex min-w-0 items-center gap-3 pl-1">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFFBF0] transition-colors group-hover/link:bg-primary-yellow/15">
                        <Icon
                          className="size-4 text-primary-yellow"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="truncate text-[13px] font-medium text-[#475569] transition-colors group-hover/link:text-[#0F172A]">
                        {link.label}
                      </span>
                    </span>
                    <ChevronRight
                      className="size-4 shrink-0 text-[#CBD5E1] transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <AboutRouteIllustration />
        </motion.aside>
      </div>
    </div>
  );
}
