"use client";

import { useState } from "react";
import {
  Check,
  Cog,
  Droplets,
  FileText,
  Fuel,
  Gauge,
  HardHat,
  HelpCircle,
  MessageSquare,
  Palette,
  Settings2,
  Star,
  Users,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { FAQItem } from "@/components/UI/faq-tabs";
import { cn } from "@/lib/cn";

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

const specIcons = [Cog, Fuel, Gauge, Settings2, Users, HardHat, Palette] as const;

function SpecificationsGrid({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {vehicle.specifications.map((spec, index) => {
        const Icon = specIcons[index % specIcons.length];
        return (
          <div
            key={spec.label}
            className="flex flex-col items-center rounded-2xl border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-4 text-center"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
              <Icon
                className="size-5 text-primary-yellow"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
              {spec.label}
            </p>
            <p className="mt-1 text-[12px] font-extrabold leading-snug text-dark-navy sm:text-[13px]">
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
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {vehicle.reviews.map((review) => (
        <article
          key={`${review.name}-${review.date}`}
          className="rounded-2xl border border-[#EEF2F6] bg-white p-5 shadow-[0_2px_14px_rgba(15,23,42,0.04)]"
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
    <section className="mt-10 border-t border-[#EEF2F6] pt-8 sm:mt-12 sm:pt-10">
      <div className="flex gap-1 overflow-x-auto border-b border-[#EEF2F6] pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "shrink-0 border-b-2 px-3 py-3 text-[13px] font-semibold transition-colors sm:px-4 sm:text-[14px]",
              activeTab === tab.id
                ? "border-primary-yellow text-dark-navy"
                : "border-transparent text-[#64748B] hover:text-dark-navy",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h3 className="text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
                About this bike
              </h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.75] text-[#475569]">
                {aboutPreview}
              </p>
              {vehicle.aboutText.length > 220 && (
                <button
                  type="button"
                  onClick={() => setShowFullAbout((value) => !value)}
                  className="mt-2 text-[13px] font-bold text-primary-yellow transition-opacity hover:opacity-80"
                >
                  {showFullAbout ? "Show less" : "Show more"}
                </button>
              )}
            </div>

            <div>
              <h3 className="text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
                Specifications
              </h3>
              <div className="mt-5">
                <SpecificationsGrid vehicle={vehicle} />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#EEF2F6] bg-white p-5 sm:p-6">
                <h3 className="text-[16px] font-extrabold text-dark-navy sm:text-[18px]">
                  Key Features
                </h3>
                <ul className="mt-4 space-y-3">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] font-medium text-[#475569] sm:text-[14px]"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary-yellow"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#EEF2F6] bg-white p-5 sm:p-6">
                <h3 className="text-[16px] font-extrabold text-dark-navy sm:text-[18px]">
                  Requirements to Rent
                </h3>
                <ul className="mt-4 space-y-3">
                  {vehicle.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-2.5 text-[13px] font-medium text-[#475569] sm:text-[14px]"
                    >
                      <FileText
                        className="mt-0.5 size-4 shrink-0 text-[#94A3B8]"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <h3 className="flex items-center gap-2 text-[18px] font-extrabold text-dark-navy sm:text-[20px]">
                  <MessageSquare className="size-5 text-primary-yellow" aria-hidden="true" />
                  What riders are saying
                </h3>
                <div className="mt-5">
                  <ReviewsGrid vehicle={vehicle} />
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-extrabold text-dark-navy sm:text-[20px]">FAQs</h3>
                <div className="mt-4 space-y-3">
                  {vehicle.faqs.slice(0, 3).map((faq) => (
                    <FAQItem
                      key={`overview-${faq.question}`}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="space-y-6">
            <SpecificationsGrid vehicle={vehicle} />
            <div className="grid gap-4 sm:grid-cols-2">
              {vehicle.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between rounded-xl border border-[#EEF2F6] bg-[#F9FAFB] px-4 py-3"
                >
                  <span className="text-[13px] font-medium text-[#64748B]">{spec.label}</span>
                  <span className="text-[13px] font-bold text-dark-navy">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid gap-3 sm:grid-cols-2">
            {vehicle.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2.5 rounded-xl border border-[#EEF2F6] bg-[#F9FAFB] px-4 py-3"
              >
                <Check className="size-4 text-primary-yellow" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#475569]">{feature}</span>
              </div>
            ))}
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
