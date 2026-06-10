"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

type FAQItemData = {
  question: string;
  answer: string;
};

type FAQItemProps = FAQItemData & {
  className?: string;
};

export function FAQItem({ question, answer, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-colors",
        isOpen
          ? "border-primary-yellow/40 bg-[#FFF8E7]"
          : "border-[#EEF2F6] bg-[#FFFBF0]",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-3 p-3.5 text-left sm:gap-4 sm:p-4"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-lg font-semibold transition-colors text-dark-navy",
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 shrink-0 transition-colors",
              isOpen ? "text-primary-yellow" : "text-dark-navy",
            )}
            aria-hidden="true"
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="pb-1 text-text-gray">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
