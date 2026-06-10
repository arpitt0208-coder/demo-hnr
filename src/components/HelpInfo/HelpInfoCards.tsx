"use client";

import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { FAQItem } from "@/components/UI/faq-tabs";
import {
  helpContactPanel,
  helpDisclaimerContent,
  helpDisclaimerPanel,
  helpFaqItems,
  helpFaqPanel,
} from "@/data/helpInfo";

function PanelIcon({ icon: Icon }: { icon: typeof helpFaqPanel.icon }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4]">
      <Icon className="size-5 text-dark-navy" strokeWidth={1.8} aria-hidden="true" />
    </div>
  );
}

function ExpandablePanelContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        marginTop: isOpen ? 20 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="space-y-3 border-t border-[#EEF2F6] pt-5">{children}</div>
    </motion.div>
  );
}

function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={[
        "flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
        isOpen
          ? "bg-primary-yellow text-dark-navy"
          : "border border-[#E8ECF0] bg-white text-dark-navy",
      ].join(" ")}
      aria-hidden="true"
    >
      {isOpen ? (
        <Minus className="size-4" strokeWidth={2.25} />
      ) : (
        <Plus className="size-4" strokeWidth={2.25} />
      )}
    </span>
  );
}

function ToggleButton({
  isOpen,
  onClick,
  label,
}: {
  isOpen: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
        isOpen
          ? "bg-primary-yellow text-dark-navy"
          : "border border-[#E8ECF0] bg-white text-dark-navy",
      ].join(" ")}
      aria-label={label}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <Minus className="size-4" strokeWidth={2.25} aria-hidden="true" />
      ) : (
        <Plus className="size-4" strokeWidth={2.25} aria-hidden="true" />
      )}
    </button>
  );
}

export function HelpInfoCards() {
  const [faqOpen, setFaqOpen] = useState(true);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const FaqIcon = helpFaqPanel.icon;
  const DisclaimerIcon = helpDisclaimerPanel.icon;
  const ContactIcon = helpContactPanel.icon;

  return (
    <div className="flex flex-col gap-4">
      <article className="rounded-[20px] border border-[#F1F5F9] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex items-start gap-4">
          <PanelIcon icon={FaqIcon} />
          <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
            <div>
              <h3 className="text-[16px] font-bold leading-tight text-dark-navy sm:text-[17px]">
                {helpFaqPanel.title}
              </h3>
              <p className="mt-1 text-[12px] font-medium leading-[1.6] text-[#475569] sm:text-[13px]">
                {helpFaqPanel.description}
              </p>
            </div>
            <ToggleButton
              isOpen={faqOpen}
              onClick={() => setFaqOpen((prev) => !prev)}
              label={faqOpen ? "Collapse FAQ section" : "Expand FAQ section"}
            />
          </div>
        </div>

        <ExpandablePanelContent isOpen={faqOpen}>
          {helpFaqItems.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              className="rounded-2xl shadow-none [&_button_span:first-child]:text-[13px] [&_button_span:first-child]:sm:text-[14px] [&_p]:text-[12px] [&_p]:leading-[1.7] [&_p]:sm:text-[13px]"
            />
          ))}
        </ExpandablePanelContent>
      </article>

      <article className="rounded-[20px] border border-[#F1F5F9] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-6">
        <button
          type="button"
          onClick={() => setDisclaimerOpen((prev) => !prev)}
          aria-expanded={disclaimerOpen}
          aria-label={
            disclaimerOpen
              ? "Collapse disclaimer section"
              : "Expand disclaimer section"
          }
          className="flex w-full cursor-pointer items-start gap-4 text-left transition-opacity hover:opacity-90"
        >
          <PanelIcon icon={DisclaimerIcon} />
          <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
            <div>
              <h3 className="text-[16px] font-bold leading-tight text-dark-navy sm:text-[17px]">
                {helpDisclaimerPanel.title}
              </h3>
              <p className="mt-1 text-[12px] font-medium leading-[1.6] text-[#475569] sm:text-[13px]">
                {helpDisclaimerPanel.description}
              </p>
            </div>
            <ToggleIcon isOpen={disclaimerOpen} />
          </div>
        </button>

        <ExpandablePanelContent isOpen={disclaimerOpen}>
          <p className="text-[12px] font-medium leading-[1.75] text-[#475569] sm:text-[13px]">
            {helpDisclaimerContent}
          </p>
        </ExpandablePanelContent>
      </article>

      <article className="rounded-[20px] border border-[#F1F5F9] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <PanelIcon icon={ContactIcon} />
            <div>
              <h3 className="text-[16px] font-bold leading-tight text-dark-navy sm:text-[17px]">
                {helpContactPanel.title}
              </h3>
              <p className="mt-1 text-[12px] font-medium leading-[1.6] text-[#475569] sm:text-[13px]">
                {helpContactPanel.description}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-yellow px-6 py-3 text-[13px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)] sm:w-auto sm:shrink-0"
          >
            {helpContactPanel.cta}
            <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
}
