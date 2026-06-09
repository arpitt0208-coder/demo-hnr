"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { kyc } from "@/assets/images";
import { FeatureCardHeader } from "./FeatureCardHeader";
import { FeatureCardShell } from "./FeatureCardShell";

function KycTopDotGrid() {
  return (
    <div
      className="pointer-events-none absolute right-4 top-2 z-10 grid gap-[5px] opacity-45 sm:right-5"
      style={{
        gridTemplateColumns: "repeat(5, 4px)",
        gridTemplateRows: "repeat(3, 4px)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="size-1 rounded-full bg-[#A78BFA]" />
      ))}
    </div>
  );
}

export function KycCard() {
  return (
    <FeatureCardShell
      className="font-neurial bg-white"
      illustration={
        <>
          <KycTopDotGrid />
          <Image
            src={kyc}
            alt=""
            fill
            sizes="(max-width: 640px) 70vw, 300px"
            className="object-contain object-bottom px-2"
            aria-hidden="true"
          />
        </>
      }
    >
      <FeatureCardHeader
        compact
        icon={Calendar}
        title="Instant Booking & KYC"
        iconClassName="text-yellow-500"
        iconBgClassName="rounded-[14px] bg-[#ffffff]"
        accentClassName="bg-[#FFFCF7]"
      />

      <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#333333] sm:text-[13px]">
        Verify and ride in minutes, not hours. Secure, digital onboarding from
        anywhere.
      </p>
    </FeatureCardShell>
  );
}
