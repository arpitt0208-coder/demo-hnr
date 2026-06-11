"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import {
  socialProofCards,
  type SocialProofCard,
} from "@/data/socialProof";
import { CircularTestimonials } from "@/components/UI/circular-testimonials";

function getCardTitle(card: SocialProofCard): string {
  if (card.title) return card.title;
  return `${card.titleBefore ?? ""}${card.titleHighlight ?? ""}${card.titleAfter ?? ""}`;
}

const MOUNTAIN_BG = "/assets/social-proof/mountain-bg.png";

const testimonials = socialProofCards.map((card) => ({
  quote: card.description,
  name: getCardTitle(card),
  titleBefore: card.titleBefore,
  titleHighlight: card.titleHighlight,
  titleAfter: card.titleAfter,
  designation: "",
  src: card.image.src,
}));

export function HomeSocialProofSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-x-clip bg-black px-4 py-12 sm:px-6 sm:py-14 md:py-16"
      aria-label="Social proof"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={MOUNTAIN_BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <ShieldCheck
              className="size-3.5 shrink-0 text-primary-yellow"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.16em] text-white">
              SOCIAL PROOF
            </span>
          </div>

          <h2 className="mt-5 text-[24px] font-extrabold leading-[1.08] tracking-tight text-white min-[400px]:text-[28px] sm:text-[34px] md:text-[40px] xl:text-[46px]">
            Trusted By{" "}
            <span className="relative inline-block text-primary-yellow">
              Thousands
            </span>
          </h2>

          <p className="mt-4 max-w-[560px] text-[14px] font-medium leading-[1.75] text-white/85 sm:text-[15px]">
            You need a great bike at a fair price—we make that simple. Book with
            confidence, ride with peace of mind, and join riders who keep coming
            back.
          </p>
        </div>

        <div className="mt-8 flex justify-center overflow-hidden sm:mt-10 lg:mt-12">
          <div className="relative flex w-full max-w-[1456px] items-center justify-center overflow-hidden">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay
              colors={{
                name: "#f8fafc",
                nameHighlight: "#efbe3d",
                designation: "#94a3b8",
                testimony: "#cbd5e1",
                arrowBackground: "#ffffff",
                arrowForeground: "#0f172a",
                arrowHoverBackground: "#efbe3d",
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
