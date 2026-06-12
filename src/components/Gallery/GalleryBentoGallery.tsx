"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Images } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  GalleryModal,
  type MediaItemType,
} from "@/components/Gallery/GalleryModal";

export type { MediaItemType };

const INITIAL_VISIBLE_COUNT = 5;

const galleryViewMoreButtonClassName = cn(
  "group inline-flex items-center justify-center gap-2.5 rounded-[20px]",
  "border border-primary-yellow/50 bg-gradient-to-b from-primary-yellow/15 via-[#FFFBF0] to-white",
  "px-7 py-3 text-sm font-bold tracking-wide text-dark-navy",
  "shadow-[0_6px_24px_rgba(239,190,61,0.22)]",
  "transition-[transform,box-shadow,border-color,background-color] duration-300",
  "hover:-translate-y-0.5 hover:border-primary-yellow hover:from-primary-yellow/25 hover:shadow-[0_10px_36px_rgba(239,190,61,0.38)]",
  "active:translate-y-0",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2",
);

const galleryViewLessButtonClassName = cn(
  "inline-flex items-center justify-center gap-2 rounded-[20px]",
  "border border-[#E8ECF0] bg-white px-7 py-3 text-sm font-semibold text-dark-navy",
  "shadow-[0_4px_16px_rgba(15,23,42,0.06)]",
  "transition-[transform,box-shadow,border-color] duration-300",
  "hover:-translate-y-0.5 hover:border-primary-yellow/40 hover:shadow-[0_8px_24px_rgba(239,190,61,0.14)]",
  "active:translate-y-0",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2",
);

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
      className={`${className} cursor-pointer object-cover`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  );
};

interface BentoMediaGridProps {
  gridItems: MediaItemType[];
  allItems: MediaItemType[];
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
  setItems: React.Dispatch<React.SetStateAction<MediaItemType[]>>;
  onSelectItem: (item: MediaItemType) => void;
  galleryKey: string;
}

function BentoMediaGrid({
  gridItems,
  allItems,
  isDragging,
  setIsDragging,
  setItems,
  onSelectItem,
  galleryKey,
}: BentoMediaGridProps) {
  return (
    <motion.div
      className="grid auto-rows-[minmax(160px,45vw)] grid-cols-1 gap-3 sm:auto-rows-[60px] sm:grid-cols-3 md:grid-cols-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {gridItems.map((item, visibleIndex) => {
        const index = allItems.findIndex((entry) => entry.id === item.id);

        return (
          <motion.div
            key={`${galleryKey}-${item.id}`}
            className={`relative cursor-move overflow-hidden rounded-xl ${item.span}`}
            onClick={() => !isDragging && onSelectItem(item)}
            variants={{
              hidden: { y: 50, scale: 0.9, opacity: 0 },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  delay: visibleIndex * 0.05,
                },
              },
            }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_e, info) => {
              setIsDragging(false);
              const moveDistance = info.offset.x + info.offset.y;
              if (Math.abs(moveDistance) > 50) {
                const newItems = [...allItems];
                const draggedItem = newItems[index];
                const targetIndex =
                  moveDistance > 0
                    ? Math.min(index + 1, allItems.length - 1)
                    : Math.max(index - 1, 0);
                newItems.splice(index, 1);
                newItems.splice(targetIndex, 0, draggedItem);
                setItems(newItems);
              }
            }}
          >
            <MediaItem
              item={item}
              className="absolute inset-0 h-full w-full"
              onClick={() => !isDragging && onSelectItem(item)}
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <h3 className="relative line-clamp-1 text-xs font-medium text-white sm:text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="relative mt-0.5 line-clamp-2 text-[10px] text-white/70 sm:text-xs md:text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

interface GalleryBentoGalleryProps {
  mediaItems: MediaItemType[];
  title: string;
  description: string;
  galleryKey: string;
}

const GalleryBentoGallery: React.FC<GalleryBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
  galleryKey,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(mediaItems);
    setIsExpanded(false);
    setSelectedItem(null);
  }, [mediaItems]);

  const visibleItems = isExpanded
    ? items
    : items.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreItems = items.length > INITIAL_VISIBLE_COUNT;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <motion.h2
          className="text-[24px] font-extrabold leading-[1.15] tracking-tight text-dark-navy sm:text-[28px] md:text-[32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-3 text-sm leading-relaxed text-[#475569] sm:mt-4 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      <BentoMediaGrid
        gridItems={visibleItems}
        allItems={items}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        setItems={setItems}
        onSelectItem={setSelectedItem}
        galleryKey={galleryKey}
      />

      {hasMoreItems && !isExpanded ? (
        <motion.div
          className="mt-6 flex justify-center sm:mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className={galleryViewMoreButtonClassName}
          >
            <Images
              className="size-4 text-primary-yellow transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            View More Photos
            <ChevronDown
              className="size-4 text-primary-yellow transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      ) : null}

      {hasMoreItems && isExpanded ? (
        <motion.div
          className="mt-6 flex justify-center sm:mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className={galleryViewLessButtonClassName}
          >
            <ChevronUp className="size-4 text-[#64748B]" aria-hidden="true" />
            View Less Photos
          </button>
        </motion.div>
      ) : null}

      {selectedItem ? (
        <GalleryModal
          selectedItem={selectedItem}
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          setSelectedItem={setSelectedItem}
          mediaItems={items}
        />
      ) : null}
    </div>
  );
};

export default GalleryBentoGallery;
