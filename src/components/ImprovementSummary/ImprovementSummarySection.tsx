"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Check, ClipboardCopy, ListChecks } from "lucide-react";
import {
  improvementSummaryText,
  improvementSummaryTitle,
} from "@/data/improvementSummary";

export function ImprovementSummarySection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const text = `${improvementSummaryTitle}\n\n${improvementSummaryText}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  }, []);

  return (
    <motion.section
      id="improvement-summary"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full px-4 py-14 sm:px-6 sm:py-16"
      aria-label="Improvement summary"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E8ECF0] bg-[#FAFBFC] shadow-[0_8px_40px_rgba(15,23,42,0.06)]">
          <div className="border-b border-[#E8ECF0] bg-white px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-yellow/50 bg-[#FFFBF0] px-4 py-2">
                  <ListChecks
                    className="size-3.5 shrink-0 text-primary-yellow"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow">
                    IMPROVEMENT ROADMAP
                  </span>
                </div>

                <h2 className="mt-4 text-[24px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[30px] md:text-[34px]">
                  Copy the Full{" "}
                  <span className="text-primary-yellow">Rating Summary</span>
                </h2>

                <p className="mt-2 max-w-[640px] text-[14px] font-medium leading-[1.7] text-text-gray sm:text-[15px]">
                  Everything you need to raise the page from 7.5 to 9 — priorities,
                  quick wins, and target scores. Click copy and paste anywhere.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-dark-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-dark-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow"
              >
                {copied ? (
                  <>
                    <Check className="size-4" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <ClipboardCopy className="size-4" aria-hidden="true" />
                    Copy all summary
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="px-5 py-5 sm:px-8 sm:py-6">
            <pre
              className="max-h-[420px] overflow-auto rounded-2xl border border-[#E8ECF0] bg-white p-4 text-[12px] leading-[1.7] text-dark-navy/85 sm:p-5 sm:text-[13px]"
              aria-label="Improvement summary content"
            >
              {improvementSummaryText}
            </pre>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
