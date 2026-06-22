"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { scrollRevealViewport, smoothEase } from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealVariant =
  | "fade-up"
  | "blur"
  | "scale"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "clip-up"
  | "rotate-in";

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  "clip-up": {
    hidden: { opacity: 0, y: 32, clipPath: "inset(100% 0 0 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, y: 20, rotate: -2, scale: 0.97 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
};

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  viewportMargin?: string;
}

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 0.95,
  once = scrollRevealViewport.once,
  amount = scrollRevealViewport.amount,
  viewportMargin = scrollRevealViewport.margin,
  ...props
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once, amount, margin: viewportMargin }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: smoothEase }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  once?: boolean;
  viewportMargin?: string;
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  amount = scrollRevealViewport.amount,
  once = scrollRevealViewport.once,
  viewportMargin = scrollRevealViewport.margin,
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once, margin: viewportMargin, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants[variant]}
      transition={{ duration: 0.85, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
