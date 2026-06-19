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
