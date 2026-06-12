"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/cn";

export interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
}

const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    const video = videoRef.current;
    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    const video = videoRef.current;

    const handleVideoPlay = async () => {
      if (!video || !isInView || !mounted) return;

      try {
        if (video.readyState >= 3) {
          setIsBuffering(false);
          await video.play();
        } else {
          setIsBuffering(true);
          await new Promise<void>((resolve) => {
            video.oncanplay = () => resolve();
          });
          if (mounted) {
            setIsBuffering(false);
            await video.play();
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      void handleVideoPlay();
    } else if (video) {
      video.pause();
    }

    return () => {
      mounted = false;
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, [isInView]);

  if (item.type === "video") {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: "opacity 0.2s",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.url}
      alt={item.title}
      className={cn("h-full w-full cursor-pointer object-cover", className)}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  );
};

interface GalleryModalProps {
  selectedItem: MediaItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItemType | null) => void;
  mediaItems: MediaItemType[];
}

export const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const currentIndex = mediaItems.findIndex((item) => item.id === selectedItem.id);

  const requestClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const goToPrevious = useCallback(() => {
    const prevIndex =
      currentIndex <= 0 ? mediaItems.length - 1 : currentIndex - 1;
    setSelectedItem(mediaItems[prevIndex]);
  }, [currentIndex, mediaItems, setSelectedItem]);

  const goToNext = useCallback(() => {
    const nextIndex =
      currentIndex >= mediaItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(mediaItems[nextIndex]);
  }, [currentIndex, mediaItems, setSelectedItem]);

  const goToPreviousRef = useRef(goToPrevious);
  const goToNextRef = useRef(goToNext);
  const requestCloseRef = useRef(requestClose);

  useEffect(() => {
    goToPreviousRef.current = goToPrevious;
    goToNextRef.current = goToNext;
    requestCloseRef.current = requestClose;
  }, [goToPrevious, goToNext, requestClose]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const preventBackgroundScroll = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("wheel", preventBackgroundScroll, {
      passive: false,
    });
    document.addEventListener("touchmove", preventBackgroundScroll, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", preventBackgroundScroll);
      document.removeEventListener("touchmove", preventBackgroundScroll);
    };
  }, []);

  const handleExitComplete = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        onClose();
      });
    });
  }, [onClose]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goToPreviousRef.current();
      if (event.key === "ArrowRight") goToNextRef.current();
      if (event.key === "Escape") requestCloseRef.current();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isOpen || !isMounted) return null;

  return createPortal(
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible ? (
        <motion.div
          key="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[300] overscroll-none"
        >
          <div
            className="absolute inset-0 bg-[#0F172A]/85"
            onClick={requestClose}
            aria-hidden="true"
          />

          <motion.button
            type="button"
            aria-label="Close preview"
            className="absolute right-4 top-4 z-[301] flex size-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-sm hover:bg-white sm:right-6 sm:top-6 sm:size-11"
            onClick={requestClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="size-5 sm:size-6" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
          >
            <div className="pointer-events-auto relative w-full max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  className="relative aspect-[16/9] h-auto max-h-[70vh] w-full overflow-hidden rounded-lg bg-[#3A3F47] shadow-2xl"
                  initial={{ y: 20, scale: 0.97 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5,
                    },
                  }}
                  exit={{
                    y: 20,
                    scale: 0.97,
                    transition: { duration: 0.15 },
                  }}
                  onClick={requestClose}
                >
                  <MediaItem
                    item={selectedItem}
                    className="object-contain p-3 sm:p-5 md:p-6"
                    onClick={requestClose}
                  />
                  <div className="pointer-events-none absolute left-0 top-0 z-10 p-3 sm:p-4 md:p-5">
                    <h3 className="text-base font-semibold text-white sm:text-lg md:text-xl">
                      {selectedItem.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/75 sm:mt-1 sm:text-sm">
                      {selectedItem.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {mediaItems.length > 1 ? (
                <>
                  <motion.button
                    type="button"
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:-left-14 md:size-11"
                    onClick={(event) => {
                      event.stopPropagation();
                      goToPrevious();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="size-5 sm:size-6" />
                  </motion.button>
                  <motion.button
                    type="button"
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:-right-14 md:size-11"
                    onClick={(event) => {
                      event.stopPropagation();
                      goToNext();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="size-5 sm:size-6" />
                  </motion.button>
                </>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            initial={false}
            animate={{ x: dockPosition.x, y: dockPosition.y }}
            onDragEnd={(_, info) => {
              setDockPosition((prev) => ({
                x: prev.x + info.offset.x,
                y: prev.y + info.offset.y,
              }));
            }}
            className="absolute bottom-4 left-1/2 z-[302] -translate-x-1/2 touch-none"
          >
            <motion.div className="relative cursor-grab rounded-xl border border-blue-400/30 bg-sky-400/20 shadow-lg backdrop-blur-xl active:cursor-grabbing">
              <div className="flex items-center -space-x-2 px-3 py-2">
                {mediaItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    style={{
                      zIndex:
                        selectedItem.id === item.id
                          ? 30
                          : mediaItems.length - index,
                    }}
                    className={`relative group h-8 w-8 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg sm:h-9 sm:w-9 md:h-10 md:w-10 hover:z-20 ${
                      selectedItem.id === item.id
                        ? "shadow-lg ring-2 ring-white/70"
                        : "hover:ring-2 hover:ring-white/30"
                    }`}
                    initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                    animate={{
                      scale: selectedItem.id === item.id ? 1.2 : 1,
                      rotate:
                        selectedItem.id === item.id
                          ? 0
                          : index % 2 === 0
                            ? -15
                            : 15,
                      y: selectedItem.id === item.id ? -8 : 0,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 0,
                      y: -10,
                      transition: { type: "spring", stiffness: 400, damping: 25 },
                    }}
                  >
                    <MediaItem
                      item={item}
                      className="h-full w-full"
                      onClick={() => setSelectedItem(item)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                    {selectedItem.id === item.id ? (
                      <motion.div
                        className="absolute -inset-2 bg-white/20 blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};
