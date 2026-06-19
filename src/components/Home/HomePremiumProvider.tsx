"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "@/components/UI/custom-cursor";

gsap.registerPlugin(ScrollTrigger);

interface HomePremiumProviderProps {
  children: ReactNode;
}

export function HomePremiumProvider({ children }: HomePremiumProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    lenis.on("scroll", ScrollTrigger.update);

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
