import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type FeatureCardHeaderProps = {
  icon: LucideIcon;
  title: React.ReactNode;
  iconClassName?: string;
  iconBgClassName?: string;
  accentClassName?: string;
  titleClassName?: string;
  large?: boolean;
  compact?: boolean;
};

export function FeatureCardHeader({
  icon: Icon,
  title,
  iconClassName,
  iconBgClassName,
  accentClassName,
  titleClassName,
  large = false,
  compact = false,
}: FeatureCardHeaderProps) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-[#FFF3E0]",
          compact ? "mb-2.5 size-8" : "mb-4 size-10",
          iconBgClassName
        )}
      >
        <Icon
          className={cn(
            compact ? "size-4" : "size-5",
            "text-primary-yellow",
            iconClassName
          )}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <h3
        className={cn(
          "font-extrabold leading-[1.22] tracking-tight text-dark-navy",
          large
            ? "text-[22px] sm:text-[26px]"
            : compact
              ? "text-[15px] leading-[1.3] sm:text-[16px]"
              : "text-[18px] sm:text-[20px]",
          titleClassName
        )}
      >
        {title}
      </h3>

      <div
        className={cn(
          "rounded-full bg-primary-yellow",
          compact ? "mt-2 h-[2.5px] w-8" : "mt-2.5 h-[3px] w-10",
          accentClassName
        )}
        aria-hidden="true"
      />
    </div>
  );
}
