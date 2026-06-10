"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { adventure } from "@/assets/images";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/UI/Badge";
import ShinyButton from "@/components/UI/shiny-button";

export function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-start text-left"
    >
      <Badge className="border-primary-yellow/80 bg-primary-yellow/10">
        BEST SERVICES
      </Badge>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]"
      >
        <span className="block">Premium Himalayan</span>
        <span className="block">Bike Rentals</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-2 flex flex-wrap items-end gap-x-3"
      >
        <span className="relative -mb-0.5 block h-12 w-[134px] shrink-0 sm:h-[58px] sm:w-[163px] md:h-16 md:w-[180px] lg:h-[76px] lg:w-[213px]">
          <Image
            src={adventure}
            alt="Adventure"
            fill
            priority
            sizes="(max-width: 640px) 134px, (max-width: 1024px) 180px, 213px"
            className="object-contain object-left-bottom"
          />
        </span>
        {/* mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[46px] md:text-[50px] lg:text-[55px] */}
        <span className="mb-1 text-[22px] font-extrabold leading-none text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px]">
          Ready &amp; Reliable
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-5 max-w-[440px] text-[14px] font-medium leading-[1.75] text-[#475569] lg:text-[15px]"
      >
        Stop dreaming, start riding with Hire N Ride. You get a fully maintained
        bike, transparent pricing, and 24/7 local support. Your epic mountain
        adventure starts with one click. Book your ride now.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6"
      >
        <ShinyButton className="group inline-flex items-center gap-2 text-[14px] font-bold">
          Explore bikes
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </ShinyButton>
      </motion.div>
    </motion.div>
  );
}
