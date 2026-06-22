"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  socialProofCards,
  type SocialProofCard,
} from "@/data/socialProof";
import { CircularTestimonials } from "@/components/UI/circular-testimonials";
import { ScrollReveal } from "@/components/UI/scroll-reveal";

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
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-x-clip bg-black px-4 py-14 sm:px-6 sm:py-16 md:py-20"
      aria-label="Social proof"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: bgY, scale: bgScale }}
        >
          <Image
            src={MOUNTAIN_BG}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <ScrollReveal variant="fade-up" className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <ShieldCheck
              className="icon-pulse-soft size-3.5 shrink-0 text-primary-yellow"
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
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={0.15} className="mt-8 flex justify-center overflow-x-clip sm:mt-10 lg:mt-12">
          <div className="relative flex w-full max-w-[1456px] items-center justify-center overflow-x-clip">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
