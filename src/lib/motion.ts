/** Shared smooth easing — Apple-like deceleration */
export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const smoothTransition = {
  duration: 0.9,
  ease: smoothEase,
} as const;

export const smoothSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.8,
};

/** Lenis-friendly viewport — replays when scrolling back into view. */
export const scrollRevealViewport = {
  once: false,
  amount: 0.12,
  margin: "0px 0px -64px 0px",
} as const;
