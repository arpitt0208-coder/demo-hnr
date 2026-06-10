"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";
import { cn } from "@/lib/cn";

interface CopyButtonProps {
  value: string;
  className?: string;
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-lg text-[#94A3B8] transition-colors hover:bg-white/80 hover:text-dark-navy",
        className,
      )}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="size-4 text-[#22C55E]" strokeWidth={2.25} aria-hidden="true" />
      ) : (
        <Copy className="size-4" strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
