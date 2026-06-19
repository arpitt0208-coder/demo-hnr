"use client";

import Link from "next/link";
import { CountUpText } from "@/components/UI/count-up";
import { locationExplorePath } from "@/lib/location-routes";
import { smoothEase } from "@/lib/motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const LOCATIONS = [
  { label: "Manali", slug: "manali" },
  { label: "Kasol", slug: "kasol" },
  { label: "Kullu", slug: "kullu" },
  { label: "Leh", slug: "leh-ladakh" },
] as const;

const cardReveal = (delay: number) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.85, delay, ease: smoothEase },
});

export function HomeHeroBento() {
  return (
    <div className="relative z-30 mx-auto w-full max-w-[1080px] px-1">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <motion.div
          {...cardReveal(0.85)}
          className="group relative overflow-hidden rounded-[22px] border border-[#E8ECF0] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:rounded-[26px] sm:p-5"
        >
          <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary-yellow/15 blur-2xl transition-transform duration-700 group-hover:scale-125" />
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary-yellow/15">
              <Zap className="size-5 text-primary-yellow" strokeWidth={2} />
            </div>
            <p className="mt-3 text-[13px] font-extrabold text-dark-navy sm:text-[14px]">
              Book in 2 minutes
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-[#64748B]">
              Pick a bike, choose dates, ride — no paperwork hassle.
            </p>
            <Link
              href="/explore"
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary-yellow transition-colors hover:text-[#E5A800]"
              data-cursor-hover
            >
              Start booking
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          {...cardReveal(0.95)}
          className="rounded-[22px] border border-[#E8ECF0] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:rounded-[26px] sm:p-5"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#0F172A]/5">
            <ShieldCheck className="size-5 text-dark-navy" strokeWidth={2} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[20px] font-extrabold leading-none text-dark-navy">
                <CountUpText value="10K+" />
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                Riders
              </p>
            </div>
            <div>
              <p className="text-[20px] font-extrabold leading-none text-dark-navy">
                <CountUpText value="500+" />
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                Bikes
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...cardReveal(1.05)}
          className="rounded-[22px] border border-[#E8ECF0] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:rounded-[26px] sm:p-5"
        >
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary-yellow/15">
              <Star className="size-5 fill-primary-yellow text-primary-yellow" />
            </div>
            <div>
              <p className="text-[22px] font-extrabold leading-none text-dark-navy">
                <CountUpText value="4.9" />
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                Rider rating
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-[#64748B]">
            Loved by adventurers across Manali, Kasol & beyond.
          </p>
        </motion.div>

        <motion.div
          {...cardReveal(1.15)}
          className="rounded-[22px] border border-[#E8ECF0] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:rounded-[26px] sm:p-5"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <MapPin className="size-5 text-emerald-600" strokeWidth={2} />
          </div>
          <p className="mt-3 text-[13px] font-extrabold text-dark-navy sm:text-[14px]">
            Pick your base camp
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={locationExplorePath(loc.slug)}
                className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#475569] transition-all hover:bg-primary-yellow/20 hover:text-dark-navy"
                data-cursor-hover
              >
                {loc.label}
              </Link>
            ))}
          </div>
          <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
            <Clock className="size-3" />
            Bikes available today
          </p>
        </motion.div>
      </div>
    </div>
  );
}
