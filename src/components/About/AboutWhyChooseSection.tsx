"use client";

import { motion } from "framer-motion";
import { Check, Mountain } from "lucide-react";
import Image from "next/image";
import {
  aboutWhyChooseCards,
  aboutWhyChooseIntro,
  type AboutWhyChooseCard,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

function WhyChooseHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <Mountain
        className="size-7 text-primary-yellow sm:size-8"
        strokeWidth={2}
        aria-hidden="true"
      />

      <h2 className="mt-2.5 max-w-[760px] text-[22px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px]">
        Why Travelers Choose Hire N Ride Again And Again
      </h2>

      <p className="mt-2.5 max-w-[620px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]">
        {aboutWhyChooseIntro}
      </p>
    </div>
  );
}

function WhyChooseBulletList({
  bullets,
  color,
}: {
  bullets: string[];
  color: string;
}) {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 min-[420px]:grid-cols-2 sm:mt-3.5">
      {bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex items-start gap-2 text-left text-[11px] font-medium leading-snug text-dark-navy sm:text-[12px]"
        >
          <span
            className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: `${color}22`, color }}
            aria-hidden="true"
          >
            <Check className="size-2.5" strokeWidth={3} />
          </span>
          {bullet}
        </li>
      ))}
    </ul>
  );
}

function WhyChooseCard({
  card,
  index,
  className,
}: {
  card: AboutWhyChooseCard;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "overflow-hidden rounded-[18px] border border-[#E8ECF0] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)] sm:rounded-[20px]",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex min-h-[140px] items-center justify-center bg-[#FAFBFC] p-4 sm:min-h-0 sm:w-[38%] sm:p-5">
          <Image
            src={card.image}
            alt={card.imageAlt}
            className="relative z-10 h-auto max-h-[120px] w-auto max-w-[85%] object-contain sm:max-h-[132px]"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5 sm:pl-4">
          <h3
            className="text-left text-[15px] font-extrabold leading-snug sm:text-[16px]"
            style={{ color: card.color }}
          >
            {card.title}
          </h3>

          <p className="mt-2 text-left text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
            {card.description}
          </p>

          <WhyChooseBulletList bullets={card.bullets} color={card.color} />
        </div>
      </div>
    </motion.article>
  );
}

function TimelineNode({
  card,
  align,
}: {
  card: AboutWhyChooseCard;
  align: "left" | "right";
}) {
  const Icon = card.icon;

  return (
    <div className="relative z-10 flex items-center justify-center px-1">
      <span
        className={cn(
          "absolute top-1/2 hidden h-px -translate-y-1/2 lg:block",
          align === "left"
            ? "right-[calc(50%+22px)] left-0"
            : "left-[calc(50%+22px)] right-0",
        )}
        style={{ backgroundColor: card.color }}
        aria-hidden="true"
      />

      <span
        className="flex size-10 items-center justify-center rounded-full border-2 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.08)] sm:size-11"
        style={{ borderColor: card.color }}
      >
        <Icon
          className="size-4 sm:size-[18px]"
          style={{ color: card.color }}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

function WhyChooseTimelineRow({
  card,
  index,
}: {
  card: AboutWhyChooseCard;
  index: number;
}) {
  const isLeft = card.side === "left";

  return (
    <div className="relative grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-3 xl:gap-5">
      <div className={cn(!isLeft && "hidden lg:block")}>
        {isLeft ? (
          <WhyChooseCard card={card} index={index} />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>

      <TimelineNode card={card} align={card.side} />

      <div className={cn(isLeft && "hidden lg:block")}>
        {!isLeft ? (
          <WhyChooseCard card={card} index={index} />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

export function AboutWhyChooseSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 xl:px-16"
      aria-label="Why travelers choose Hire N Ride"
    >
      <div className="relative mx-auto w-full max-w-[1120px]">
        <WhyChooseHeader />

        <div className="mt-8 space-y-5 sm:mt-9 lg:hidden">
          {aboutWhyChooseCards.map((card, index) => (
            <WhyChooseCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <div className="relative mt-8 hidden sm:mt-9 lg:block">
          <div
            className="pointer-events-none absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-[#E2E8F0]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 xl:gap-10">
            {aboutWhyChooseCards.map((card, index) => (
              <WhyChooseTimelineRow key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
