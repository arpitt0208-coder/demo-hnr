"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Handshake,
  Headphones,
  Mountain,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import {
  aboutWhyChooseCards,
  aboutWhyChooseIntro,
  type AboutWhyChooseCard,
} from "@/data/aboutPage";
import { cn } from "@/lib/cn";

const BULLET_ICONS: LucideIcon[] = [
  ClipboardCheck,
  ShieldCheck,
  Handshake,
  Headphones,
];

function WhyChooseHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <Mountain
        className="size-7 text-primary-yellow sm:size-8"
        strokeWidth={2}
        aria-hidden="true"
      />

      <h2 className="mt-2.5 max-w-[760px] text-[22px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px]">
        Why Travelers{" "}
        <span className="text-primary-yellow">Choose Hire N Ride</span> Again And
        Again
      </h2>

      <p className="mt-2.5 max-w-[620px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]">
        {aboutWhyChooseIntro}
      </p>
    </div>
  );
}

function WhyChooseFeatureItem({
  label,
  icon: Icon,
  color,
  showDivider,
}: {
  label: string;
  icon: LucideIcon;
  color: string;
  showDivider: boolean;
}) {
  return (
    <li
      className={cn(
        "flex flex-1 flex-col items-center px-1.5 text-center min-[480px]:px-2 sm:px-2.5",
        showDivider && "min-[480px]:border-l min-[480px]:border-[#E5E7EB]",
      )}
    >
      <span
        className="flex size-8 items-center justify-center rounded-full sm:size-9"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon
          className="size-4"
          style={{ color }}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
      <p className="mt-1.5 text-[10px] font-bold leading-snug text-dark-navy min-[400px]:text-[10.5px] sm:mt-2 sm:text-[11px]">
        {label}
      </p>
    </li>
  );
}

function WhyChooseFeatureRow({
  bullets,
  color,
}: {
  bullets: string[];
  color: string;
}) {
  return (
    <ul className="grid grid-cols-2 gap-x-2 gap-y-3 border-t border-[#EEF2F6] px-3.5 py-3 min-[480px]:flex min-[480px]:items-start min-[480px]:gap-0 min-[480px]:px-4 min-[480px]:py-3.5 sm:px-5">
      {bullets.map((bullet, index) => (
        <WhyChooseFeatureItem
          key={bullet}
          label={bullet}
          icon={BULLET_ICONS[index % BULLET_ICONS.length]}
          color={color}
          showDivider={index > 0}
        />
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
  const Icon = card.icon;
  const isReversed = card.side === "right";

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
        "overflow-hidden rounded-[18px] border border-[#E8ECF0] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] sm:rounded-[20px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center min-[480px]:flex-row min-[480px]:items-stretch",
          isReversed && "min-[480px]:flex-row-reverse",
        )}
      >
        <div
          className={cn(
            "flex w-full shrink-0 items-center justify-center px-3.5 py-3.5 min-[480px]:w-[36%] min-[480px]:self-stretch min-[480px]:px-4 min-[480px]:py-4 sm:w-[34%]",
            card.iconBgClassName,
          )}
        >
          <div className="relative h-[148px] w-[112px] shrink-0 overflow-hidden rounded-xl shadow-[0_4px_14px_rgba(15,23,42,0.08)] sm:h-[164px] sm:w-[124px]">
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 112px, 124px"
            />
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col justify-center px-3.5 pb-3.5 min-[480px]:px-4 min-[480px]:py-4 sm:pr-5">
          <div className="flex items-center gap-2.5">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-lg sm:size-9"
              style={{ backgroundColor: `${card.color}18` }}
            >
              <Icon
                className="size-4 sm:size-[18px]"
                style={{ color: card.color }}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0">
              <h3 className="text-left text-[16px] font-extrabold leading-tight tracking-tight text-dark-navy sm:text-[17px]">
                {card.title}
              </h3>
              <span
                className="mt-1.5 block h-[3px] w-8 rounded-full"
                style={{ backgroundColor: card.color }}
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="mt-2.5 text-left text-[11px] font-medium leading-[1.65] text-[#4B5563] sm:mt-3 sm:text-[12px]">
            {card.description}
          </p>
        </div>
      </div>

      <WhyChooseFeatureRow bullets={card.bullets} color={card.color} />
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
        className="flex size-9 items-center justify-center rounded-full border-2 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
        style={{ borderColor: card.color }}
      >
        <Icon
          className="size-4"
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
    <div className="relative grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] items-center gap-2.5 xl:gap-4">
      <div
        className={cn(
          !isLeft && "hidden lg:block",
          isLeft && "flex justify-end",
        )}
      >
        {isLeft ? (
          <WhyChooseCard
            card={card}
            index={index}
            className="w-full max-w-[620px]"
          />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>

      <TimelineNode card={card} align={card.side} />

      <div
        className={cn(
          isLeft && "hidden lg:block",
          !isLeft && "flex justify-start",
        )}
      >
        {!isLeft ? (
          <WhyChooseCard
            card={card}
            index={index}
            className="w-full max-w-[620px]"
          />
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

        <div className="mx-auto mt-7 max-w-[620px] space-y-4 sm:mt-8 sm:space-y-5 lg:hidden">
          {aboutWhyChooseCards.map((card, index) => (
            <WhyChooseCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <div className="relative mt-7 hidden sm:mt-8 lg:block">
          <div
            className="pointer-events-none absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-[#E2E8F0]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 xl:gap-7">
            {aboutWhyChooseCards.map((card, index) => (
              <WhyChooseTimelineRow key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
