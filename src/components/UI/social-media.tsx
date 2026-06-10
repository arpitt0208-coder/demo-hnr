import React from "react";
import { cn } from "@/lib/utils";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  color: string;
  svgUrl?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export interface SocialTooltipProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => {
    const baseIconStyles =
      "relative flex items-center justify-center w-12 h-12 shrink-0 overflow-hidden rounded-full bg-background transition-all duration-300 ease-in-out group-hover:shadow-lg";
    const baseImageStyles =
      "relative z-10 h-full w-full object-contain";
    const baseFilledStyles =
      "absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full";
    const baseTooltipStyles =
      "pointer-events-none absolute bottom-[-40px] left-1/2 z-20 -translate-x-1/2 rounded-md px-2.5 py-1.5 text-sm whitespace-nowrap text-white opacity-0 invisible transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-[-50px] group-hover:opacity-100";

    return (
      <ul
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
        {...props}
      >
        {items.map((item, index) => {
          const usesBrandIcon = Boolean(item.Icon);

          return (
            <li key={index} className="relative group">
              <a
                href={item.href}
                aria-label={item.ariaLabel}
                className={cn(
                  baseIconStyles,
                  usesBrandIcon && "bg-transparent p-0",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {!usesBrandIcon && (
                  <div
                    className={cn(baseFilledStyles)}
                    style={{ backgroundColor: item.color }}
                  />
                )}
                {item.Icon ? (
                  <item.Icon className="h-full w-full" />
                ) : (
                  <img
                    src={item.svgUrl}
                    alt={item.ariaLabel}
                    className={cn(baseImageStyles)}
                  />
                )}
              </a>
              <div
                className={cn(baseTooltipStyles)}
                style={{ backgroundColor: item.color }}
              >
                {item.tooltip}
              </div>
            </li>
          );
        })}
      </ul>
    );
  },
);

SocialTooltip.displayName = "SocialTooltip";

export { SocialTooltip };
