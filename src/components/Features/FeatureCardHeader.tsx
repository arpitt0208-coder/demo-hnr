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
          "flex size-10 items-center justify-center rounded-full bg-[#FFF3E0]",
          compact ? "mb-4" : "mb-5",
          iconBgClassName
        )}
      >
        <Icon
          className={cn("size-5 text-primary-yellow", iconClassName)}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <h3
        className={cn(
          "font-extrabold leading-[1.2] tracking-tight text-black",
          large
            ? "text-[24px] sm:text-[28px]"
            : compact
              ? "text-[17px] leading-[1.28] sm:text-[18px]"
              : "text-[20px] sm:text-[22px]",
          titleClassName
        )}
      >
        {title}
      </h3>

      <div
        className={cn(
          "mt-2.5 h-[3px] w-10 rounded-full bg-primary-yellow",
          accentClassName
        )}
        aria-hidden="true"
      />
    </div>
  );
}
