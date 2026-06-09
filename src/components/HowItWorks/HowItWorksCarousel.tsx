"use client";

import { motion, type PanInfo } from "framer-motion";
import { Pause, Play } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { howItWorksSlides } from "@/data/howItWorks";
import { HowItWorksCard } from "./HowItWorksCard";

const AUTOPLAY_MS = 5000;
const SWIPE_OFFSET = 60;
const SWIPE_VELOCITY = 400;
const SLIDE_W_MAX = 720;
const SLIDE_GAP = 24;

function getSlideWidth(containerWidth: number): number {
  if (containerWidth <= 0) return SLIDE_W_MAX;
  const horizontalPadding = containerWidth < 640 ? 16 : 24;
  return Math.min(SLIDE_W_MAX, Math.max(280, containerWidth - horizontalPadding));
}

function getCarouselHeight(slideWidth: number, isActive: boolean): number {
  if (slideWidth < 520) return isActive ? 360 : 320;
  if (slideWidth < 640) return isActive ? 320 : 280;
  return isActive ? 320 : 280;
}
const SLIDE_COUNT = howItWorksSlides.length;
const TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
const NO_TRANSITION = { duration: 0 };

const TRACK_SLIDES = [
  howItWorksSlides[SLIDE_COUNT - 1],
  ...howItWorksSlides,
  howItWorksSlides[0],
];

const CLONE_START = 0;
const CLONE_END = SLIDE_COUNT + 1;
const START_INDEX = 1;

function getTrackOffset(
  index: number,
  containerWidth: number,
  slideWidth: number
): number {
  const slideCenter = index * (slideWidth + SLIDE_GAP) + slideWidth / 2;
  return containerWidth / 2 - slideCenter;
}

function getDotIndex(trackIndex: number): number {
  if (trackIndex === CLONE_START) return SLIDE_COUNT - 1;
  if (trackIndex === CLONE_END) return 0;
  return trackIndex - 1;
}

export function HowItWorksCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackIndexRef = useRef(START_INDEX);
  const isLockedRef = useRef(false);

  const [containerWidth, setContainerWidth] = useState(0);
  const [trackIndex, setTrackIndex] = useState(START_INDEX);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [instant, setInstant] = useState(false);

  const isReady = containerWidth > 0;
  const slideWidth = getSlideWidth(containerWidth);
  const carouselHeight = getCarouselHeight(slideWidth, true);
  const dotIndex = getDotIndex(trackIndex);
  const transition = instant ? NO_TRANSITION : TRANSITION;

  const setTrackIndexSafe = useCallback((next: number | ((prev: number) => number)) => {
    setTrackIndex((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      trackIndexRef.current = value;
      return value;
    });
  }, []);

  const resetInstant = useCallback(() => {
    requestAnimationFrame(() => setInstant(false));
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isLockedRef.current) return;
      isLockedRef.current = true;
      setTrackIndexSafe(index + 1);
      setProgress(0);
    },
    [setTrackIndexSafe]
  );

  const goNext = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    setTrackIndexSafe((prev) => prev + 1);
    setProgress(0);
  }, [setTrackIndexSafe]);

  const goPrev = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    setTrackIndexSafe((prev) => prev - 1);
    setProgress(0);
  }, [setTrackIndexSafe]);

  const handlePanStart = useCallback(() => {
    window.getSelection()?.removeAllRanges();
  }, []);

  const handlePanEnd = useCallback(
    (_event: PointerEvent, info: PanInfo) => {
      const { offset, velocity } = info;
      window.getSelection()?.removeAllRanges();

      if (offset.x <= -SWIPE_OFFSET || velocity.x <= -SWIPE_VELOCITY) {
        goNext();
        return;
      }

      if (offset.x >= SWIPE_OFFSET || velocity.x >= SWIPE_VELOCITY) {
        goPrev();
      }
    },
    [goNext, goPrev]
  );

  const handleSlideTransitionEnd = useCallback(() => {
    const current = trackIndexRef.current;

    if (current === CLONE_END) {
      setInstant(true);
      setTrackIndexSafe(START_INDEX);
      resetInstant();
      requestAnimationFrame(() => {
        isLockedRef.current = false;
      });
      return;
    }

    if (current === CLONE_START) {
      setInstant(true);
      setTrackIndexSafe(SLIDE_COUNT);
      resetInstant();
      requestAnimationFrame(() => {
        isLockedRef.current = false;
      });
      return;
    }

    isLockedRef.current = false;
  }, [resetInstant, setTrackIndexSafe]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const start = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(elapsed / AUTOPLAY_MS, 1));

      if (elapsed < AUTOPLAY_MS) {
        frameId = requestAnimationFrame(animate);
      } else {
        goNext();
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [trackIndex, isPaused, goNext]);

  const trackX = isReady
    ? getTrackOffset(trackIndex, containerWidth, slideWidth)
    : 0;

  return (
    <div className="font-neurial flex flex-col items-center bg-white px-4 sm:px-6">
      <motion.div
        ref={containerRef}
        className="relative w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
        style={{ height: carouselHeight, touchAction: "none" }}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
      >
        <motion.div
          className="absolute top-1/2 left-0 flex items-center will-change-transform"
          style={{ gap: SLIDE_GAP, opacity: isReady ? 1 : 0 }}
          initial={false}
          animate={{ x: trackX, y: "-50%" }}
          transition={transition}
          onAnimationComplete={handleSlideTransitionEnd}
        >
          {TRACK_SLIDES.map((slide, index) => {
            const isActive = index === trackIndex;

            return (
              <motion.div
                key={`${slide.id}-track-${index}`}
                className="shrink-0 select-none"
                style={{ width: slideWidth }}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.72,
                }}
                transition={transition}
              >
                <HowItWorksCard
                  slide={slide}
                  isActive={isActive}
                  instant={instant}
                  slideWidth={slideWidth}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="mt-5 flex items-center gap-3 sm:mt-6">
        <div className="flex items-center gap-2.5">
          {howItWorksSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={[
                "rounded-full transition-all duration-300",
                index === dotIndex
                  ? "size-2 bg-primary-yellow"
                  : "size-2 border border-[#CBD5E1] bg-white",
              ].join(" ")}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === dotIndex ? "true" : undefined}
            />
          ))}
        </div>

        <div className="h-[3px] w-[132px] overflow-hidden rounded-full bg-[#E2E8F0]">
          <div
            className="h-full rounded-full bg-primary-yellow"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="flex size-9 items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-white shadow-sm transition-colors hover:bg-[#FAFAFA]"
          aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
        >
          {isPaused ? (
            <Play className="size-3.5 fill-[#0f172a] text-[#0f172a]" aria-hidden="true" />
          ) : (
            <Pause className="size-3.5 fill-[#0f172a] text-[#0f172a]" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
