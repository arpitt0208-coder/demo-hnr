"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export type ImageTileItem = {
  src: string;
  alt: string;
};

interface ImageRevealProps {
  images: ImageTileItem[];
  className?: string;
}

type TileConfig = {
  rotate: number;
  x: number;
  y: number;
  hoverRotate: number;
  hoverX: number;
  hoverY: number;
  zIndex: number;
  origin: string;
};

const TILE_CONFIGS: TileConfig[] = [
  {
    rotate: -14,
    x: -320,
    y: 18,
    hoverRotate: -10,
    hoverX: -330,
    hoverY: 8,
    zIndex: 50,
    origin: "bottom right",
  },
  {
    rotate: -7,
    x: -160,
    y: 10,
    hoverRotate: -4,
    hoverX: -170,
    hoverY: 2,
    zIndex: 40,
    origin: "bottom right",
  },
  {
    rotate: 3,
    x: 0,
    y: 0,
    hoverRotate: 0,
    hoverX: 0,
    hoverY: -12,
    zIndex: 30,
    origin: "bottom center",
  },
  {
    rotate: 7,
    x: 160,
    y: 14,
    hoverRotate: 4,
    hoverX: 170,
    hoverY: 6,
    zIndex: 20,
    origin: "bottom left",
  },
  {
    rotate: 14,
    x: 320,
    y: 22,
    hoverRotate: 10,
    hoverX: 330,
    hoverY: 12,
    zIndex: 10,
    origin: "bottom left",
  },
];

function buildTileVariants(config: TileConfig): Variants {
  return {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: config.rotate,
      x: config.x,
      y: config.y,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      rotate: config.hoverRotate,
      x: config.hoverX,
      y: config.hoverY,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };
}

export default function ImageReveal({ images, className }: ImageRevealProps) {
  const tileImages = images.slice(0, 5);
  const [spread, setSpread] = useState(1);

  useEffect(() => {
    const updateSpread = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSpread(0.34);
      } else if (width < 768) {
        setSpread(0.55);
      } else if (width < 1024) {
        setSpread(0.78);
      } else {
        setSpread(1);
      }
    };

    updateSpread();
    window.addEventListener("resize", updateSpread);
    return () => window.removeEventListener("resize", updateSpread);
  }, []);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={`relative mx-auto my-12 flex h-[280px] w-full max-w-[340px] items-center justify-center sm:h-[320px] sm:max-w-[520px] md:h-[380px] md:max-w-[760px] lg:h-[420px] lg:max-w-[980px] ${className ?? ""}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {tileImages.map((image, index) => {
        const config = TILE_CONFIGS[index];
        if (!config) {
          return null;
        }

        return (
          <motion.div
            key={`${image.src}-${index}`}
            className="absolute h-52 w-52 overflow-hidden rounded-2xl shadow-xl sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80"
            variants={buildTileVariants({
              ...config,
              x: config.x * spread,
              y: config.y * spread,
              hoverX: config.hoverX * spread,
              hoverY: config.hoverY * spread,
            })}
            whileHover="hover"
            animate="animate"
            style={{ zIndex: config.zIndex, transformOrigin: config.origin }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
