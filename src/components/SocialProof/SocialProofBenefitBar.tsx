"use client";

import { socialProofBenefits } from "@/data/socialProof";

export function SocialProofBenefitBar() {
  return (
    <div className="rounded-[20px] border border-border/70 bg-white px-4 py-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {socialProofBenefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.id}
              className="relative flex items-center gap-3 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              {index > 0 && (
                <div
                  className="absolute -left-px top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border/80 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-yellow/12">
                <Icon
                  className="size-[18px] text-primary-yellow"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-bold leading-tight text-dark-navy">
                  {benefit.title}
                </p>
                <p className="mt-0.5 text-[12px] font-medium leading-snug text-text-gray">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
