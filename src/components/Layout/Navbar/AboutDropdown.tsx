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

export function AboutDropdown() {
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white px-5 pb-5 pt-4 md:px-7 lg:px-9">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start">
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

          <h2 className="mt-2.5 text-[26px] font-extrabold leading-[1.12] tracking-tight text-[#0F172A] sm:text-[30px]">
            Know the Story Behind{" "}
            <span className="text-primary-yellow">Hire n Ride</span>
          </h2>

          <p className="mt-2 max-w-[640px] text-[13px] font-medium leading-[1.65] text-[#64748B] sm:text-[14px]">
            Born from a passion for exploration, Hire n Ride makes every journey
            effortless with reliable bikes, trusted service, and unforgettable
            road trip experiences.
          </p>

          <motion.div
            variants={gridVariants}
            initial={false}
            animate="visible"
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.id}
                  href={card.href}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="group/card flex flex-col overflow-hidden rounded-[16px] border border-[#E8ECF0] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-primary-yellow/35 hover:shadow-[0_12px_32px_rgba(239,190,61,0.12)]"
                >
                  <div className="relative h-[180px] w-full overflow-hidden sm:h-[200px]">
                    <Image
                      src={card.image}
                      alt=""
                      width={640}
                      height={400}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-5 pt-8 sm:px-6 sm:pb-6">
                    <span className="absolute -top-5 left-5 flex size-10 items-center justify-center rounded-full border-2 border-primary-yellow bg-white shadow-[0_2px_10px_rgba(239,190,61,0.25)] transition-transform duration-300 group-hover/card:scale-105 sm:left-6">
                      <Icon
                        className="size-[17px] text-primary-yellow"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="text-left text-[14px] font-extrabold leading-snug text-[#0F172A] sm:text-[15px]">
                      {card.title}
                    </h3>

                    <div
                      className="mt-2.5 h-[3px] w-10 rounded-full bg-primary-yellow"
                      aria-hidden="true"
                    />

                    <p className="mt-3 flex-1 text-left text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
                      {card.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-left text-[12px] font-bold text-primary-yellow transition-colors group-hover/card:text-[#d9ad35] sm:text-[13px]">
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
          className="flex w-full shrink-0 flex-col rounded-[20px] border border-[#E8ECF0] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] xl:w-[280px]"
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
                    className="group/link flex items-center justify-between rounded-lg py-3 transition-colors hover:bg-[#FFFBF0]/80"
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
        </motion.aside>
      </div>
    </div>
  );
}
