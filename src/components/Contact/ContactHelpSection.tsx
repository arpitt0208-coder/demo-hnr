"use client";

import { motion } from "framer-motion";
import { Headphones, Mail, Phone } from "lucide-react";
import {
  contactHelpItems,
  contactHelpPanelIcon,
  contactSupportDetails,
  contactSupportPanel,
} from "@/data/contact";
import { cn } from "@/lib/cn";
import { CopyButton } from "./CopyButton";

const supportDetailIcons = {
  mail: Mail,
  phone: Phone,
} as const;

export function ContactHelpSection() {
  const HelpIcon = contactHelpPanelIcon;

  return (
    <section
      className="bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
      aria-label="Contact help and support"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border border-[#F1F5F9] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#FFFBF0]">
                <HelpIcon
                  className="size-5 text-primary-yellow"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
              <h2 className="text-[20px] font-extrabold leading-tight text-dark-navy sm:text-[22px]">
                How can we help you?
              </h2>
            </div>

            <ul className="mt-6 divide-y divide-[#F1F5F9]">
              {contactHelpItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-full",
                        item.iconBgClassName,
                      )}
                    >
                      <Icon
                        className={cn("size-5", item.iconClassName)}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-[15px] font-bold leading-tight text-dark-navy sm:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] font-medium leading-[1.65] text-[#64748B] sm:text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-[24px] border border-[#F1F5F9] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                <Headphones
                  className="size-5 text-[#3B82F6]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h2 className="text-[20px] font-extrabold leading-tight text-dark-navy sm:text-[22px]">
                  {contactSupportPanel.title}
                </h2>
                <div
                  className="mt-2 h-[3px] w-10 rounded-full bg-[#3B82F6]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <p className="mt-5 text-[13px] font-medium leading-[1.7] text-[#64748B] sm:text-[14px]">
              {contactSupportPanel.description}
            </p>

            <div className="mt-6 space-y-3">
              {contactSupportDetails.map((detail) => {
                const Icon = supportDetailIcons[detail.icon];

                return (
                  <div
                    key={detail.id}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4",
                      detail.bgClassName,
                    )}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/80">
                      <Icon
                        className={cn("size-5", detail.iconClassName)}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94A3B8] sm:text-[12px]">
                        {detail.label}
                      </p>
                      <p className="mt-0.5 truncate text-[14px] font-bold text-dark-navy sm:text-[15px]">
                        {detail.value}
                      </p>
                    </div>
                    {detail.copyable ? (
                      <CopyButton value={detail.value} />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
