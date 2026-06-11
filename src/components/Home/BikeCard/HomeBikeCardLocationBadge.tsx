import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

type LocationBadgeProps = {
  label: string;
  href: string;
  size?: "xs" | "sm";
  className?: string;
};

export function HomeBikeCardLocationBadge({
  label,
  href,
  size = "sm",
  className,
}: LocationBadgeProps) {
  return (
    <Link
      href={href}
      onClick={(event) => event.stopPropagation()}
      className={cn(
        "inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-primary-yellow/30 bg-primary-yellow/10 font-bold text-[#475569] transition-colors hover:border-primary-yellow/50 hover:bg-primary-yellow/20 hover:text-dark-navy",
        size === "xs"
          ? "px-2 py-0.5 text-[9px] min-[400px]:text-[10px]"
          : "px-2.5 py-1 text-[10px] lg:text-[11px]",
        className,
      )}
      aria-label={`Explore bikes in ${label}`}
    >
      <MapPin
        className={cn(
          "shrink-0 text-primary-yellow",
          size === "xs" ? "size-2.5 min-[400px]:size-3" : "size-3",
        )}
        strokeWidth={2.25}
        aria-hidden="true"
      />
      <span className="truncate">{label}</span>
    </Link>
  );
}
