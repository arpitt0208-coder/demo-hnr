"use client";

import { useCallback, useRef } from "react";
import type { CSSProperties } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const styleRef = useRef<CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  const onMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * maxTilt;
      const rotateX = -y * maxTilt;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      el.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
    },
    [maxTilt],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    el.style.transition = "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);

  return { ref, style: styleRef.current, onMouseMove, onMouseLeave };
}
