"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Copy,
  Heart,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { vehiclePromoImage } from "@/data/vehicles";
import { DownloadAppModal } from "@/components/UI/DownloadAppModal";
import ShinyButton from "@/components/UI/shiny-button";
import { FacebookIcon } from "@/components/UI/social-icons";
import { cn } from "@/lib/cn";
import { getTrustIconStyle } from "./vehicle-detail-icons";

type VehicleBookingSidebarProps = {
  vehicle: Vehicle;
  variant?: "default" | "compact";
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

const shareButtonBase =
  "flex h-8 w-full min-w-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2 text-[11px] font-medium leading-none text-neutral-700 whitespace-nowrap transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 sm:text-xs";

const shareIconClass = "size-3 shrink-0 sm:size-3.5";

export function VehicleBookingSidebar({
  vehicle,
  variant = "default",
}: VehicleBookingSidebarProps) {
  const isCompact = variant === "compact";
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    const url = shareUrl || window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: vehicle.shortTitle,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // User dismissed the share sheet or the action was blocked.
    }
  };

  return (
    <aside className={cn("space-y-4", isCompact && "lg:sticky lg:top-28")}>
      <div
        className={cn(
          "rounded-xl border border-[#E8ECF0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:rounded-2xl",
          isCompact ? "p-4 sm:p-5" : "p-5 sm:p-6",
        )}
      >
        <p className="text-[12px] font-semibold text-[#64748B] sm:text-[13px]">
          Daily Price
        </p>
        <p
          className={cn(
            "mt-0.5 font-extrabold leading-none tracking-tight text-dark-navy",
            isCompact
              ? "text-[28px] sm:text-[30px]"
              : "text-[32px] sm:text-[36px]",
          )}
        >
          ₹ {formatPrice(vehicle.price)}
          <span className="text-[14px] font-medium text-[#64748B] sm:text-[15px]">
            {" "}
            / day
          </span>
        </p>

        <div className="mt-3 rounded-lg border border-primary-yellow/30 bg-[#FFFBF0] px-3 py-2.5 sm:mt-3.5 sm:rounded-xl sm:px-3.5 sm:py-3">
          <p className="text-[11px] font-semibold leading-snug text-dark-navy sm:text-[12px]">
            {vehicle.availability}
          </p>
        </div>

        <div className="mt-3 space-y-2.5 sm:mt-3.5">
          <ShinyButton
            onClick={() => setIsDownloadModalOpen(true)}
            className={cn(
              "group flex w-full items-center justify-center gap-2 text-[13px] font-bold sm:text-[14px]",
              isCompact ? "h-11" : "h-12",
            )}
          >
            Book Now
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ShinyButton>

          <Link
            href="/explore"
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)] sm:text-[14px]",
              isCompact ? "h-11" : "h-12",
            )}
          >
            Explore More Bikes
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-3 flex items-start gap-2 text-[11px] font-medium leading-snug text-[#64748B] sm:text-[12px]">
          <Clock
            className="mt-0.5 size-3.5 shrink-0 text-primary-yellow"
            aria-hidden="true"
          />
          {vehicle.availabilityNote}
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 border-t border-[#EEF2F6] pt-4">
          {trustItems.map(({ icon: Icon, label }) => {
            const { color } = getTrustIconStyle(label);
            return (
              <li
                key={label}
                className="flex min-w-0 items-center gap-1.5 text-[11px] font-medium text-[#475569] sm:gap-2 sm:text-[12px]"
              >
                <Icon
                  className={cn("size-3.5 shrink-0", color)}
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                <span className="truncate">{label}</span>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsSaved((value) => !value)}
          className="mt-4 flex w-full items-center gap-2 text-[12px] font-semibold text-dark-navy transition-opacity hover:opacity-80 sm:text-[13px]"
        >
          <Heart
            className={cn(
              "size-3.5 sm:size-4",
              isSaved && "fill-primary-yellow text-primary-yellow",
            )}
            strokeWidth={2.25}
            aria-hidden="true"
          />
          Save this bike
        </button>

        <div className="mt-3 rounded-xl border border-neutral-200 p-2.5 sm:p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold leading-none text-neutral-900 sm:text-xs">
              Share this bike
            </p>
            <p
              className={cn(
                "shrink-0 text-[11px] font-medium leading-none transition-colors sm:text-xs",
                copied ? "text-emerald-600" : "text-neutral-400",
              )}
            >
              {copied ? "Link copied" : "Tap to share"}
            </p>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2 [&>*]:min-h-8 [&>*]:w-full">
            <a
              href={
                shareUrl
                  ? `https://wa.me/?text=${encodeURIComponent(shareUrl)}`
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                shareButtonBase,
                "hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:ring-emerald-300",
              )}
            >
              <MessageCircle className={shareIconClass} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={
                shareUrl
                  ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                shareButtonBase,
                "hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus-visible:ring-sky-300",
              )}
            >
              <FacebookIcon className={shareIconClass} />
              Facebook
            </a>
            <button
              type="button"
              title="Share from your device"
              onClick={handleNativeShare}
              className={cn(
                shareButtonBase,
                "hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 focus-visible:ring-neutral-300",
              )}
            >
              <MessageCircle className={shareIconClass} aria-hidden="true" />
              Share
            </button>
            <button
              type="button"
              onClick={handleCopyLink}
              className={cn(
                shareButtonBase,
                "hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 focus-visible:ring-neutral-300",
              )}
            >
              <Copy className={shareIconClass} aria-hidden="true" />
              Copy URL
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <div
          className={cn(
            "relative w-full",
            isCompact ? "aspect-[16/11] max-h-[180px]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={vehiclePromoImage}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 340px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="text-[16px] font-extrabold leading-tight text-white sm:text-[18px]">
              {vehicle.promoTitle}
            </p>
            <Link
              href="/explore"
              className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold text-dark-navy transition-opacity hover:opacity-90 sm:mt-3 sm:px-4 sm:py-2 sm:text-[12px]"
            >
              {vehicle.promoCta}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </aside>
  );
}
