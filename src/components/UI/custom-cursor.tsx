"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 28, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 28, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setVisible(true);
    document.body.classList.add("custom-cursor-active");

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      setHovering(
        Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]",
          ),
        ),
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      >
        <motion.div
          animate={{
            width: hovering ? 48 : 10,
            height: hovering ? 48 : 10,
            marginLeft: hovering ? -24 : -5,
            marginTop: hovering ? -24 : -5,
            opacity: hovering ? 0.7 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.5 }}
          className="rounded-full border border-primary-yellow/50 bg-primary-yellow/15 shadow-[0_0_16px_rgba(247,203,70,0.25)]"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden size-1 rounded-full bg-primary-yellow lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden="true"
      />
    </>
  );
}
