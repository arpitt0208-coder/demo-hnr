"use client";

import React from "react";
import Link from "next/link";
import { Globe, MapPin, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: <Globe className="size-4 text-primary sm:size-[18px]" aria-hidden="true" />,
    phone: <Phone className="size-4 text-primary sm:size-[18px]" aria-hidden="true" />,
    address: <MapPin className="size-4 text-primary sm:size-[18px]" aria-hidden="true" />,
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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
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
    const isInternalLink = callToAction.href.startsWith("/");
    const CtaTag = isInternalLink ? Link : "a";
    const ctaProps = isInternalLink
      ? { href: callToAction.href }
      : { href: callToAction.href };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-left text-foreground md:flex-row md:items-stretch",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Content column */}
        <div className="flex w-full min-w-0 flex-col justify-center gap-6 py-6 sm:gap-7 sm:py-7 md:w-[58%] md:gap-8 md:py-8 lg:w-[60%] lg:py-9">
          {logo && (
            <motion.header className="w-full" variants={itemVariants}>
              <div className="flex flex-col items-start gap-2.5">
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain object-left sm:h-11 md:h-12"
                />
                {logo.text && (
                  <p className="sr-only">{logo.text}</p>
                )}
                {slogan && (
                  <p className="text-[11px] font-bold tracking-[0.14em] text-muted-foreground sm:text-xs">
                    {slogan}
                  </p>
                )}
              </div>
            </motion.header>
          )}

          <motion.main
            className="flex w-full min-w-0 flex-col items-start"
            variants={containerVariants}
          >
            <motion.h1
              className="w-full text-left text-[1.75rem] font-bold leading-[1.12] tracking-tight text-foreground min-[400px]:text-[2rem] sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.div
              className="my-4 h-1 w-16 bg-primary sm:my-5"
              variants={itemVariants}
              aria-hidden="true"
            />
            <motion.p
              className="mb-5 max-w-[34rem] text-left text-sm leading-[1.75] text-muted-foreground sm:text-[15px]"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div className="w-full text-left" variants={itemVariants}>
              <CtaTag
                {...ctaProps}
                className="inline-block text-sm font-bold tracking-[0.18em] text-primary transition-colors hover:text-primary/80 sm:text-base"
                data-cursor-hover
              >
                {callToAction.text}
              </CtaTag>
            </motion.div>
          </motion.main>

          <motion.footer className="w-full border-t border-border/60 pt-5 sm:pt-6" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-3">
              <div className="flex min-w-0 items-start gap-2.5">
                <InfoIcon type="website" />
                <span className="min-w-0 break-words text-xs leading-snug text-muted-foreground">
                  {contactInfo.website}
                </span>
              </div>
              <div className="flex min-w-0 items-start gap-2.5">
                <InfoIcon type="phone" />
                <span className="min-w-0 break-words text-xs leading-snug text-muted-foreground">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex min-w-0 items-start gap-2.5 sm:col-span-2 lg:col-span-1">
                <InfoIcon type="address" />
                <span className="min-w-0 break-words text-xs leading-snug text-muted-foreground">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Image column */}
        <motion.div
          className="min-h-[200px] w-full shrink-0 bg-cover bg-center sm:min-h-[220px] md:min-h-0 md:w-[42%] md:self-stretch lg:w-[40%]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          animate={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 1.2, ease: "circOut" }}
          role="img"
          aria-label="Himalayan mountain landscape"
        />
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
