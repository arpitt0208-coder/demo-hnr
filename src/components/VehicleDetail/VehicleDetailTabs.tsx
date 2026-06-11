"use client";

import { useState } from "react";
import {
  Droplets,
  FileText,
  HelpCircle,
  MessageSquare,
  Star,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { FAQItem } from "@/components/UI/faq-tabs";
import { cn } from "@/lib/cn";
import {
  getFeatureIconStyle,
  getSpecIconStyle,
} from "./vehicle-detail-icons";

type VehicleDetailTabsProps = {
  vehicle: Vehicle;
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "specifications", label: "Specifications" },
  { id: "features", label: "Features" },
  { id: "requirements", label: "Requirements" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function SpecificationsGrid({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="grid grid-cols-2 gap-2 min-[400px]:grid-cols-3 sm:grid-cols-4 sm:gap-2.5 md:grid-cols-5 lg:grid-cols-7">
      {vehicle.specifications.map((spec) => {
        const { Icon, bg, color } = getSpecIconStyle(spec.label);
        return (
          <div
            key={spec.label}
            className="flex flex-col items-center rounded-lg border border-[#EEF2F6] bg-white px-2 py-2.5 text-center sm:rounded-xl sm:px-2.5 sm:py-3"
          >
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full sm:size-9",
                bg,
              )}
            >
              <Icon
                className={cn("size-3.5 sm:size-4", color)}
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#94A3B8] sm:text-[10px]">
              {spec.label}
            </p>
            <p className="mt-0.5 line-clamp-2 text-[10px] font-bold leading-snug text-dark-navy sm:text-[11px]">
              {spec.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ReviewsGrid({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {vehicle.reviews.map((review) => (
        <article
          key={`${review.name}-${review.date}`}
          className="rounded-xl border border-[#EEF2F6] bg-white p-4 shadow-[0_2px_14px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[14px] font-bold text-dark-navy">{review.name}</p>
              <p className="text-[12px] font-medium text-[#94A3B8]">{review.date}</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFFBF0] px-2.5 py-1 text-[12px] font-bold text-dark-navy">
              <Star
                className="size-3.5 fill-primary-yellow text-primary-yellow"
                aria-hidden="true"
              />
              {review.rating.toFixed(1)}
            </span>
          </div>
          <p className="mt-3 text-[13px] font-medium leading-[1.7] text-[#475569]">
            {review.text}
          </p>
        </article>
      ))}
    </div>
  );
}

export function VehicleDetailTabs({ vehicle }: VehicleDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [showFullAbout, setShowFullAbout] = useState(false);

  const aboutPreview =
    vehicle.aboutText.length > 220 && !showFullAbout
      ? `${vehicle.aboutText.slice(0, 220).trim()}…`
      : vehicle.aboutText;

  return (
    <section className="mt-8 border-t border-[#EEF2F6] pt-6 sm:mt-10 sm:pt-8">
      <div className="flex gap-0.5 overflow-x-auto border-b border-[#EEF2F6] pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "shrink-0 border-b-2 px-3 py-2.5 text-[13px] font-semibold transition-colors sm:px-4 sm:py-3 sm:text-[14px]",
              activeTab === tab.id
                ? "border-primary-yellow text-dark-navy"
                : "border-transparent text-[#64748B] hover:text-dark-navy",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-7">
        {activeTab === "overview" && (
          <div className="space-y-6 sm:space-y-7">
            <div>
              <h3 className="text-[17px] font-extrabold text-dark-navy sm:text-[19px]">
                About this bike
              </h3>
              <p className="mt-2.5 text-[13px] font-medium leading-[1.7] text-[#475569] sm:text-[14px]">
                {aboutPreview}
              </p>
              {vehicle.aboutText.length > 220 && (
                <button
                  type="button"
                  onClick={() => setShowFullAbout((value) => !value)}
                  className="mt-2 text-[12px] font-bold text-primary-yellow transition-opacity hover:opacity-80 sm:text-[13px]"
                >
                  {showFullAbout ? "Show less" : "Show more"}
                </button>
              )}
            </div>

            <div>
              <h3 className="text-[17px] font-extrabold text-dark-navy sm:text-[19px]">
                Specifications
              </h3>
              <div className="mt-3.5 sm:mt-4">
                <SpecificationsGrid vehicle={vehicle} />
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-[#EEF2F6] bg-white p-4 sm:rounded-2xl sm:p-5">
                <h3 className="text-[15px] font-extrabold text-dark-navy sm:text-[17px]">
                  Key Features
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-1 sm:gap-2.5">
                  {vehicle.features.map((feature, index) => {
                    const { Icon, bg, color } = getFeatureIconStyle(index);
                    return (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 rounded-lg border border-[#EEF2F6] bg-[#F9FAFB] px-2.5 py-2 text-[12px] font-medium text-[#475569] sm:text-[13px]"
                      >
                        <span
                          className={cn(
                            "flex size-7 shrink-0 items-center justify-center rounded-full",
                            bg,
                          )}
                        >
                          <Icon
                            className={cn("size-3.5", color)}
                            strokeWidth={2.25}
                            aria-hidden="true"
                          />
                        </span>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-xl border border-[#EEF2F6] bg-white p-4 sm:rounded-2xl sm:p-5">
                <h3 className="text-[15px] font-extrabold text-dark-navy sm:text-[17px]">
                  Requirements to Rent
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:gap-3">
                  {vehicle.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-2 text-[12px] font-medium text-[#475569] sm:text-[13px]"
                    >
                      <FileText
                        className="mt-0.5 size-3.5 shrink-0 text-[#94A3B8] sm:size-4"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-[17px] font-extrabold text-dark-navy sm:text-[19px]">
                <MessageSquare
                  className="size-4 text-primary-yellow sm:size-5"
                  aria-hidden="true"
                />
                What riders are saying
              </h3>
              <div className="mt-3.5 sm:mt-4">
                <ReviewsGrid vehicle={vehicle} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "specifications" && <SpecificationsGrid vehicle={vehicle} />}

        {activeTab === "features" && (
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3">
            {vehicle.features.map((feature, index) => {
              const { Icon, bg, color } = getFeatureIconStyle(index);
              return (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 rounded-xl border border-[#EEF2F6] bg-white px-3 py-2.5 sm:px-3.5 sm:py-3"
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full",
                      bg,
                    )}
                  >
                    <Icon
                      className={cn("size-3.5 sm:size-4", color)}
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[12px] font-medium text-[#475569] sm:text-[13px]">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "requirements" && (
          <div className="space-y-3">
            {vehicle.requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-start gap-2.5 rounded-xl border border-[#EEF2F6] bg-[#F9FAFB] px-4 py-3"
              >
                <Droplets
                  className="mt-0.5 size-4 shrink-0 text-[#94A3B8]"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                <span className="text-[13px] font-medium text-[#475569]">{requirement}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
              What riders are saying
            </h3>
            <div className="mt-5">
              <ReviewsGrid vehicle={vehicle} />
            </div>
          </div>
        )}

        {activeTab === "faqs" && (
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
              <HelpCircle className="size-5 text-primary-yellow" aria-hidden="true" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {vehicle.faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
