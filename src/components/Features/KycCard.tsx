"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { kyc } from "@/assets/images";
import { FeatureCardHeader } from "./FeatureCardHeader";
import { FeatureCardShell } from "./FeatureCardShell";

function KycTopDotGrid() {
  return (
    <div
      className="pointer-events-none absolute right-3 top-1.5 z-10 grid gap-[4px] opacity-40 sm:right-4"
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
      className="bg-white"
      illustration={
        <>
          <KycTopDotGrid />
          <Image
            src={kyc}
            alt=""
            width={400}
            height={500}
            sizes="(max-width: 640px) 45vw, 220px"
            className="absolute bottom-0 left-1/2 h-full max-h-full w-auto -translate-x-1/2 object-contain object-bottom"
            aria-hidden="true"
          />
        </>
      }
    >
      <FeatureCardHeader
        compact
        icon={Calendar}
        title="Instant Booking & KYC"
      />

      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#555555] sm:text-[12px]">
        Verify and ride in minutes, not hours. Secure, digital onboarding from
        anywhere.
      </p>
    </FeatureCardShell>
  );
}
