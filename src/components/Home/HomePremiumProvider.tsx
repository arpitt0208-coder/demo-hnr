"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useId,
  type ReactNode,
} from "react";

gsap.registerPlugin(ScrollTrigger);

const HomeAnimationScopeContext = createContext("");

/** Unique per home-page mount — resets Framer Motion scroll animations on each visit. */
export function useHomeAnimationScope() {
  return useContext(HomeAnimationScopeContext);
}

interface HomePremiumProviderProps {
  children: ReactNode;
}

export function HomePremiumProvider({ children }: HomePremiumProviderProps) {
  const animationScope = useId();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    lenis.scrollTo(0, { immediate: true, force: true });

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      window.clearTimeout(refreshTimer);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <HomeAnimationScopeContext.Provider value={animationScope}>
      <Fragment key={animationScope}>{children}</Fragment>
    </HomeAnimationScopeContext.Provider>
  );
}
