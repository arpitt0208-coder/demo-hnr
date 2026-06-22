"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Globe, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { cn } from "@/lib/cn";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: <Globe className="size-4 text-[#2997ff] sm:size-[18px]" aria-hidden="true" />,
    phone: <Phone className="size-4 text-[#2997ff] sm:size-[18px]" aria-hidden="true" />,
    address: <MapPin className="size-4 text-[#2997ff] sm:size-[18px]" aria-hidden="true" />,
  };

  return <div className="mt-0.5 shrink-0">{icons[type]}</div>;
};

export interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: smoothEase },
  },
};

const ctaRevealVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const imageRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: smoothEase, delay: 0.2 },
  },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      contactInfo,
    },
    ref,
  ) => {
    const reduceMotion = useReducedMotion();
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: imageRef,
      offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 1.02]);
    const isInternalLink = callToAction.href.startsWith("/");
    const CtaTag = isInternalLink ? Link : "a";
    const ctaProps = isInternalLink
      ? { href: callToAction.href }
      : { href: callToAction.href };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col items-center overflow-x-clip bg-transparent text-center text-white",
          className,
        )}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.12, margin: "0px" }}
        variants={containerVariants}
      >
        {logo && (
          <span className="sr-only">
            <img src={logo.url} alt={logo.alt} />
            {logo.text}
          </span>
        )}

        <div className="flex w-full max-w-[920px] flex-col items-center px-4 pt-2 sm:px-6 sm:pt-3 md:pt-4">
          {slogan && (
            <motion.p
              className="text-xs font-normal tracking-normal text-white"
              variants={textRevealVariants}
            >
              {slogan}
            </motion.p>
          )}

          <motion.h1
            className="mt-1.5 text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:mt-2 sm:text-[2.75rem] md:text-[3rem]"
            variants={textRevealVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-2.5 max-w-[32rem] text-[0.9375rem] font-normal leading-[1.5] text-[#a1a1a6] sm:mt-3 sm:text-base"
            variants={textRevealVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div className="mt-5 sm:mt-6" variants={ctaRevealVariants}>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <CtaTag
                {...ctaProps}
                className="hero-cta-shimmer group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary-yellow px-[1.375rem] py-[0.4375rem] text-[0.9375rem] font-semibold leading-none text-dark-navy transition-colors hover:bg-[#f5c84a]"
                data-cursor-hover
              >
                <span className="relative z-10">{callToAction.text}</span>
                <span
                  className="hero-cta-shimmer__shine pointer-events-none absolute inset-0 z-20"
                  aria-hidden="true"
                />
              </CtaTag>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={imageRef}
          className="relative mt-6 w-full sm:mt-8 md:mt-9"
          variants={imageRevealVariants}
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black to-transparent sm:h-24" />
          <div className="mx-auto flex w-full max-w-[min(100%,960px)] items-end justify-center px-4 sm:px-6">
            <motion.div
              className="relative flex h-[min(52vw,300px)] w-full items-end justify-center sm:h-[min(46vw,380px)] md:h-[min(42vw,440px)]"
              style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
            >
              <img
                src={backgroundImage}
                alt="Royal Enfield Himalayan motorcycle"
                className="h-auto max-h-full w-auto max-w-[min(100%,900px)] object-contain object-bottom"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.footer
          className="sr-only w-full border-t border-white/10 px-4 py-5 sm:px-6 sm:py-6"
          variants={textRevealVariants}
        >
          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-3">
            <div className="flex min-w-0 items-start gap-2.5">
              <InfoIcon type="website" />
              <span className="min-w-0 break-words text-xs leading-snug text-[#a1a1a6]">
                {contactInfo.website}
              </span>
            </div>
            <div className="flex min-w-0 items-start gap-2.5">
              <InfoIcon type="phone" />
              <span className="min-w-0 break-words text-xs leading-snug text-[#a1a1a6]">
                {contactInfo.phone}
              </span>
            </div>
            <div className="flex min-w-0 items-start gap-2.5 sm:col-span-2 lg:col-span-1">
              <InfoIcon type="address" />
              <span className="min-w-0 break-words text-xs leading-snug text-[#a1a1a6]">
                {contactInfo.address}
              </span>
            </div>
          </div>
        </motion.footer>
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
