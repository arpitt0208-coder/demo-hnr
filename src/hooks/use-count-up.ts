"use client";

import { useEffect, useRef, useState } from "react";

function parseNumericValue(value: string): { num: number; prefix: string; suffix: string } | null {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)(\+|%|K|M)?$/);
  if (!match) return null;
  return { prefix: "", num: parseFloat(match[1]), suffix: match[2] ?? "" };
}

export function useCountUp(
  value: string,
  enabled: boolean,
  duration = 1800,
) {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDisplay(value);
      return;
    }

    const parsed = parseNumericValue(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }

    const { prefix, num, suffix } = parsed;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);
      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, enabled, duration]);

  return display;
}
