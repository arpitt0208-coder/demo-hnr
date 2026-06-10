"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/UI/social-icons";
import { footerContact } from "@/data/footer";
import { cn } from "@/lib/cn";

const WHATSAPP_URL = "https://wa.me/916283047569?text=Hi";

const floatingButtonClassName = cn(
  "flex size-12 items-center justify-center rounded-full",
  "border border-[#E8ECF0] bg-white",
  "shadow-[0_4px_20px_rgba(15,23,42,0.18)]",
  "transition-[border-color,box-shadow] duration-300",
  "hover:border-primary-yellow/40 hover:shadow-[0_8px_28px_rgba(239,190,61,0.25)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2"
);

const easeOut = [0.22, 1, 0.36, 1] as const;
const floatEase = "easeInOut" as const;

function contactButtonMotion(index: number) {
  const entranceDelay = 0.5 + index * 0.14;

  return {
    initial: { opacity: 0, x: 24, scale: 0.88 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      y: [0, -5, 0],
    },
    transition: {
      opacity: { duration: 0.5, delay: entranceDelay, ease: easeOut },
      x: { duration: 0.5, delay: entranceDelay, ease: easeOut },
      scale: { duration: 0.5, delay: entranceDelay, ease: easeOut },
      y: {
        duration: 2.8,
        repeat: Infinity,
        ease: floatEase,
        delay: entranceDelay + 0.7 + index * 0.9,
      },
    },
    whileHover: { scale: 1.06 },
    whileTap: { scale: 0.94 },
  };
}

export function WhatsAppContactButton() {
  const reduceMotion = useReducedMotion();
  const phoneHref = `tel:${footerContact.phone.replace(/\s/g, "")}`;

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-6 z-50 flex flex-col gap-3 sm:right-5 sm:bottom-8"
      aria-label="Contact options"
    >
      <motion.a
        href={phoneHref}
        aria-label="Call us"
        className={cn(floatingButtonClassName, "pointer-events-auto")}
        {...(reduceMotion ? {} : contactButtonMotion(0))}
      >
        <Phone
          className="size-5 text-primary-yellow"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </motion.a>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(floatingButtonClassName, "pointer-events-auto")}
        {...(reduceMotion ? {} : contactButtonMotion(1))}
      >
        <WhatsAppIcon className="size-6 text-[#25D366]" aria-hidden="true" />
      </motion.a>
    </div>
  );
}
