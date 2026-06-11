"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Copy,
  Heart,
  Headphones,
  Share2,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { vehiclePromoImage } from "@/data/vehicles";
import ShinyButton from "@/components/UI/shiny-button";
import { cn } from "@/lib/cn";

type VehicleBookingSidebarProps = {
  vehicle: Vehicle;
};

function formatPrice(price: number) {
  return price.toLocaleString("en-IN");
}

const trustItems = [
  { icon: ShieldCheck, label: "Free Cancellation" },
  { icon: BadgeCheck, label: "Verified Host" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Wallet, label: "No Hidden Charges" },
] as const;

export function VehicleBookingSidebar({ vehicle }: VehicleBookingSidebarProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="rounded-2xl border border-[#E8ECF0] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-6">
        <p className="text-[13px] font-semibold text-[#64748B]">Daily Price</p>
        <p className="mt-1 text-[32px] font-extrabold leading-none tracking-tight text-dark-navy sm:text-[36px]">
          ₹ {formatPrice(vehicle.price)}
          <span className="text-[16px] font-medium text-[#64748B]"> / day</span>
        </p>

        <div className="mt-4 rounded-xl border border-primary-yellow/30 bg-[#FFFBF0] px-4 py-3">
          <p className="text-[12px] font-semibold leading-snug text-dark-navy sm:text-[13px]">
            {vehicle.availability}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <ShinyButton className="group flex h-12 w-full items-center justify-center gap-2 text-[14px] font-bold">
            Book Now
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ShinyButton>

          <Link
            href="/explore"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)]"
          >
            Explore More Bikes
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 flex items-start gap-2 text-[12px] font-medium leading-snug text-[#64748B]">
          <Clock className="mt-0.5 size-3.5 shrink-0 text-primary-yellow" aria-hidden="true" />
          {vehicle.availabilityNote}
        </p>

        <ul className="mt-5 space-y-3 border-t border-[#EEF2F6] pt-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-[13px] font-medium text-[#475569]">
              <Icon
                className="size-4 shrink-0 text-primary-yellow"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              {label}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsSaved((value) => !value)}
          className="mt-5 flex w-full items-center gap-2 text-[13px] font-semibold text-dark-navy transition-opacity hover:opacity-80"
        >
          <Heart
            className={cn(
              "size-4",
              isSaved && "fill-primary-yellow text-primary-yellow",
            )}
            strokeWidth={2.25}
            aria-hidden="true"
          />
          Save this bike
        </button>

        <div className="mt-4">
          <p className="flex items-center gap-2 text-[13px] font-semibold text-dark-navy">
            <Share2 className="size-4 text-primary-yellow" strokeWidth={2.25} aria-hidden="true" />
            Share this bike
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[
              { label: "WhatsApp", letter: "W" },
              { label: "Facebook", letter: "F" },
              { label: "Share", letter: "S", icon: Share2 },
              { label: copied ? "Copied" : "Copy Link", letter: "C", icon: Copy },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                onClick={item.label === "Copy Link" || item.label === "Copied" ? handleCopyLink : undefined}
                className="flex aspect-square flex-col items-center justify-center rounded-xl border border-[#E8ECF0] bg-[#F9FAFB] text-[10px] font-bold text-[#64748B] transition-colors hover:border-primary-yellow/40 hover:text-dark-navy"
              >
                {item.icon ? (
                  <item.icon className="size-4" strokeWidth={2.25} aria-hidden="true" />
                ) : (
                  <span className="text-[12px] font-extrabold">{item.letter}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={vehiclePromoImage}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 360px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[18px] font-extrabold leading-tight text-white sm:text-[20px]">
              {vehicle.promoTitle}
            </p>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-dark-navy transition-opacity hover:opacity-90"
            >
              {vehicle.promoCta}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
