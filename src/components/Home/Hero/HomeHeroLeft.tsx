"use client";

import Link from "next/link";
import { MagneticButton } from "@/components/UI/magnetic-button";
import ShinyButton from "@/components/UI/shiny-button";
import { SplitText } from "@/components/UI/split-text";
import { smoothEase } from "@/lib/motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Royal Enfield",
  "Fully Insured",
  "24/7 Support",
  "No Hidden Fees",
  "Mountain Ready",
  "Instant Booking",
] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: smoothEase },
});

export function HomeHeroLeft() {
  return (
    <div className="relative z-20 flex w-full flex-col items-center text-center">
      <motion.div
        {...fadeUp(0.05)}
        className="inline-flex items-center gap-2 rounded-full border border-primary-yellow/30 bg-white/80 px-4 py-2 shadow-[0_4px_20px_rgba(239,190,61,0.12)] backdrop-blur-sm"
      >
        <Sparkles className="size-3.5 text-primary-yellow" aria-hidden="true" />
        <span className="text-[11px] font-bold tracking-[0.12em] text-dark-navy sm:text-[12px]">
          HIMALAYA&apos;S TRUSTED BIKE RENTAL
        </span>
      </motion.div>

      <h1 className="mt-6 max-w-[900px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.035em] text-dark-navy min-[400px]:text-[42px] sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[76px]">
        <span className="block">
          <SplitText delay={0.15}>Your next</SplitText>
        </span>
        <span className="relative mt-1 block">
          <span className="bg-gradient-to-r from-[#0F172A] via-[#334155] to-[#0F172A] bg-clip-text text-transparent">
            <SplitText delay={0.32}>epic ride</SplitText>
          </span>
          <span className="relative mx-2 inline-block bg-gradient-to-r from-[#E5A800] via-primary-yellow to-[#FF8C42] bg-clip-text text-transparent">
            <SplitText delay={0.48}>awaits</SplitText>
          </span>
        </span>
      </h1>

      <motion.p
        {...fadeUp(0.65)}
        className="mt-5 max-w-[560px] text-[15px] font-medium leading-[1.8] text-[#475569] sm:text-[16px] md:text-[17px]"
      >
        Premium Royal Enfields, crystal-clear pricing, and mountain-local support —
        everything you need to conquer Himalayan roads.
      </motion.p>

      <motion.div
        {...fadeUp(0.8)}
        className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
      >
        <MagneticButton>
          <Link href="/explore" className="inline-flex" data-cursor-hover>
            <ShinyButton className="group relative inline-flex items-center gap-2.5 overflow-hidden px-7 py-3.5 text-[14px] font-bold sm:px-8 sm:text-[15px]">
              <span className="relative z-10">Book your ride</span>
              <ArrowRight
                className="relative z-10 size-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </ShinyButton>
          </Link>
        </MagneticButton>

        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2.5 rounded-full border border-[#E2E8F0] bg-white/90 px-6 py-3.5 text-[14px] font-bold text-dark-navy shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-primary-yellow/40 hover:shadow-[0_8px_28px_rgba(239,190,61,0.14)] sm:text-[15px]"
          data-cursor-hover
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-[#0F172A] text-white transition-transform duration-300 group-hover:scale-110">
            <Play className="size-3.5 fill-white pl-0.5" aria-hidden="true" />
          </span>
          See adventures
        </Link>
      </motion.div>

      {/* Marquee ticker */}
      <motion.div
        {...fadeUp(0.95)}
        className="relative mt-10 w-full overflow-hidden"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAFBFC] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAFBFC] to-transparent sm:w-24" />
        <motion.div
          className="flex w-max gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-2 text-[12px] font-bold tracking-[0.1em] text-[#94A3B8] sm:text-[13px]"
            >
              <span className="size-1.5 rounded-full bg-primary-yellow" />
              {item.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
