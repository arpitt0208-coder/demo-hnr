"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { bikeImages, podium } from "@/assets/images";
import { smoothEase } from "@/lib/motion";

const Hero3DShowcase = dynamic(
  () => import("./Hero3DShowcase").then((mod) => mod.Hero3DShowcase),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="size-14 animate-pulse rounded-full border-2 border-primary-yellow/30 border-t-primary-yellow" />
      </div>
    ),
  },
);

const ORBIT_BIKES = [
  { src: bikeImages.scram, label: "Scram 411", delay: 0, position: "top-[8%] left-[4%] sm:left-[8%]" },
  { src: bikeImages.meteor, label: "Meteor 350", delay: 0.15, position: "top-[12%] right-[4%] sm:right-[8%]" },
  { src: bikeImages.hunter, label: "Hunter 350", delay: 0.3, position: "bottom-[18%] left-[6%] sm:left-[10%]" },
] as const;

export function HomeHeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
      className="relative mx-auto w-full max-w-[960px]"
    >
      {/* Stage backdrop */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[16/10]">
        {/* Concentric rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          {[1, 0.78, 0.56].map((scale, i) => (
            <motion.div
              key={scale}
              initial={{ opacity: 0, scale: scale * 0.9 }}
              animate={{ opacity: 1, scale }}
              transition={{ delay: 0.5 + i * 0.12, duration: 1, ease: smoothEase }}
              className="absolute rounded-full border border-dashed border-primary-yellow/20"
              style={{ width: `${scale * 100}%`, aspectRatio: "1" }}
            />
          ))}
        </div>

        {/* Spotlight */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,203,70,0.22),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />

        {/* Ground shadow */}
        <div
          className="pointer-events-none absolute bottom-[12%] left-1/2 h-8 w-[55%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(15,23,42,0.12),transparent_70%)] blur-md sm:bottom-[14%] sm:h-10"
          aria-hidden="true"
        />

        {/* 3D Bike center stage */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: smoothEase }}
          className="absolute inset-x-[8%] bottom-[8%] top-[5%] sm:inset-x-[12%]"
        >
          <Hero3DShowcase
            bikeImage={bikeImages.himalayan}
            podiumImage={podium}
            className="h-full w-full"
          />
        </motion.div>

        {/* Orbiting mini bikes — desktop */}
        {ORBIT_BIKES.map((bike) => (
          <motion.div
            key={bike.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + bike.delay, duration: 0.7, ease: smoothEase }}
            className={`absolute ${bike.position} z-20 hidden lg:block`}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + bike.delay * 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-[0_12px_32px_rgba(15,23,42,0.1)] backdrop-blur-md"
            >
              <div className="relative h-14 w-20">
                <Image
                  src={bike.src}
                  alt={bike.label}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <span className="px-2 pb-1.5 text-[10px] font-bold text-[#64748B]">
                {bike.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Stage label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: smoothEase }}
          className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 sm:bottom-4"
        >
          <div className="rounded-full border border-[#E8ECF0] bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <p className="text-[10px] font-bold tracking-[0.14em] text-[#94A3B8] sm:text-[11px]">
              ROYAL ENFIELD · HIMALAYAN 450
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
