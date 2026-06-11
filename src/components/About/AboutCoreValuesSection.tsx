"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { corebg } from "@/assets/images";
import { aboutCoreValues, aboutCoreValuesIntro } from "@/data/aboutPage";
import { cn } from "@/lib/cn";

function ValueNumberBadge({
  number,
  color,
}: {
  number: string;
  color: string;
}) {
  return (
    <span
      className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tracking-tight text-white shadow-[0_2px_10px_rgba(15,23,42,0.18)] sm:size-9 sm:text-[12px]"
      style={{ backgroundColor: color }}
    >
      {number}
    </span>
  );
}

function ValueConnector({ color }: { color: string }) {
  return (
    <span
      className="block h-5 w-px shrink-0 sm:h-6 lg:h-7"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

function ValueIcon({
  icon: Icon,
  color,
  glowColor,
}: Pick<(typeof aboutCoreValues)[number], "icon" | "color" | "glowColor">) {
  return (
    <div className="relative flex size-[72px] items-center justify-center sm:size-20">
      <span
        className="absolute inset-1 rounded-full blur-2xl"
        style={{ backgroundColor: glowColor }}
        aria-hidden="true"
      />
      <span
        className="relative flex size-12 items-center justify-center rounded-full sm:size-[52px]"
        style={{ backgroundColor: color }}
      >
        <Icon className="size-5 text-white sm:size-[22px]" strokeWidth={2} aria-hidden="true" />
      </span>
    </div>
  );
}

function CoreValuesHeader({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <h2 className="text-[26px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[32px] md:text-[36px] lg:text-[38px]">
        Our Core <span className="text-primary-yellow">Values</span>
      </h2>
      <p className="mt-3 max-w-[600px] text-[13px] font-medium leading-[1.75] text-[#64748B] sm:text-[14px]">
        {aboutCoreValuesIntro}
      </p>
    </div>
  );
}

function CoreValueCard({
  value,
  index,
  className,
  style,
}: {
  value: (typeof aboutCoreValues)[number];
  index: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "mx-auto flex w-full max-w-[240px] flex-col items-center text-center",
        className,
      )}
      style={style}
    >
      <ValueNumberBadge number={value.number} color={value.color} />

      <ValueConnector color={value.color} />

      <ValueIcon icon={value.icon} color={value.color} glowColor={value.glowColor} />

      <h3 className="mt-5 text-[15px] font-extrabold leading-snug text-dark-navy sm:text-[16px]">
        {value.title}
      </h3>

      <p className="mt-2 max-w-[270px] text-[12px] font-medium leading-[1.75] text-[#64748B] sm:max-w-[280px] sm:text-[13px]">
        {value.description}
      </p>
    </motion.article>
  );
}

export function AboutCoreValuesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden bg-[#FAF8F4]"
      aria-label="Our core values"
    >
      <div className="pointer-events-none absolute inset-0 min-h-full" aria-hidden="true">
        <Image
          src={corebg}
          alt=""
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto hidden w-full px-10 pb-10 xl:px-16 lg:block">
        <CoreValuesHeader className="shrink-0 pt-12 xl:pt-16" />

        <div className="relative mx-[220px] mt-[180px] min-h-[380px] w-full">
          {aboutCoreValues.map((value, index) => (
            <CoreValueCard
              key={value.id}
              value={value}
              index={index}
              className="absolute"
              style={{
                top: value.desktopPosition.top,
                left: value.desktopPosition.left,
                right: value.desktopPosition.right,
                opacity: 1,
                transform: "none",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-12 lg:hidden">
        <CoreValuesHeader />

        <div className="mx-auto mt-10 grid max-w-[640px] grid-cols-1 gap-10 sm:mt-12 sm:max-w-none sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12">
          {aboutCoreValues.map((value, index) => (
            <CoreValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
