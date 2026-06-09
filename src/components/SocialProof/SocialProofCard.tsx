"use client";

import type { SocialProofCard as SocialProofCardData } from "@/data/socialProof";

type SocialProofCardProps = {
  card: SocialProofCardData;
};

export function SocialProofCard({ card }: SocialProofCardProps) {
  const Icon = card.icon;

  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
      <div className="relative">
        <img
          src={card.image}
          alt=""
          className="h-[172px] w-full object-cover"
        />
        <div className="absolute -bottom-5 left-5 flex size-11 items-center justify-center rounded-full bg-dark-navy shadow-[0_4px_12px_rgba(15,23,42,0.2)]">
          <Icon
            className="size-5 text-primary-yellow"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-9">
        <h3 className="text-[17px] font-bold leading-snug text-dark-navy">
          {card.title ? (
            card.title
          ) : (
            <>
              {card.titleBefore}
              {card.titleHighlight && (
                <span className="text-primary-yellow">{card.titleHighlight}</span>
              )}
              {card.titleAfter}
            </>
          )}
        </h3>
        <p className="mt-2 text-[13px] font-medium leading-[1.65] text-text-gray">
          {card.description}
        </p>
      </div>
    </article>
  );
}
