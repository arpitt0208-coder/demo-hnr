"use client";

import { motion } from "framer-motion";
import { contactValueItems } from "@/data/contact";
import { cn } from "@/lib/cn";

export function ContactValueBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 pb-12 pt-2 sm:px-6 sm:pb-14 lg:px-16 xl:px-20"
      aria-label="Why riders trust us"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="rounded-[24px] bg-[#FAF7F2] px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {contactValueItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative flex flex-col items-center text-center sm:items-start sm:text-left",
                    index > 0 &&
                      "lg:before:absolute lg:before:-left-3 lg:before:top-1/2 lg:before:h-12 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#E8E0D4]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full",
                      item.iconBgClassName,
                    )}
                  >
                    <Icon
                      className={cn("size-5", item.iconClassName)}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold leading-tight text-dark-navy sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
