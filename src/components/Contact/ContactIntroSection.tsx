"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import Image from "next/image";
import { contact as contactImage } from "@/assets/images";
import { contactIntroText } from "@/data/contact";

export function ContactIntroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-visible px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
      aria-label="Contact introduction"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div
          className="pointer-events-none absolute right-0 top-1/2 z-0 hidden h-[min(28vw,200px)] w-[min(52vw,480px)] -translate-y-1/2 sm:block lg:h-[min(24vw,260px)] lg:w-[min(48vw,560px)]"
          aria-hidden="true"
        >
          <Image
            src={contactImage}
            alt=""
            fill
            sizes="(max-width: 1024px) 52vw, 560px"
            className="object-contain object-right mix-blend-screen"
          />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8 sm:pr-[min(48vw,440px)] lg:gap-12 lg:pr-[min(44vw,520px)]">
          <div className="flex size-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#FFF0D4] sm:size-[80px] lg:size-[88px]">
            <Headphones
              className="size-8 text-dark-navy sm:size-9"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <p className="max-w-[780px] flex-1 text-[14px] font-medium leading-[1.8] text-[#475569] sm:text-[15px] lg:text-[16px] lg:leading-[1.75]">
            {contactIntroText}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
