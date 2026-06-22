import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Heart } from "lucide-react";
import { cn } from "@/lib/cn";

const cardVariants = cva(
  "group relative grid h-full w-full transform-gpu overflow-hidden transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "rounded-xl border shadow-sm",
        location: "rounded-2xl border-0 shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface DestinationCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {
  imageUrl: string;
  category: string;
  title: string;
  description?: string;
  onLike?: () => void;
  isLiked?: boolean;
  badge?: React.ReactNode;
  compact?: boolean;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      category,
      title,
      description,
      onLike,
      isLiked = false,
      badge,
      compact = false,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const isLocation = variant === "location";

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x800/2d3748/ffffff?text=Image+Not+Found";
          }}
        />

        <div
          className={cn(
            "absolute inset-0",
            isLocation
              ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              : "bg-gradient-to-t from-black/70 via-black/30 to-transparent",
          )}
        />

        {badge && !isLocation ? (
          <div className={cn("absolute z-20", compact ? "top-3 left-3" : "top-4 left-4")}>
            {badge}
          </div>
        ) : null}

        {onLike ? (
          <button
            type="button"
            aria-label={isLiked ? "Unlike destination" : "Like destination"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onLike();
            }}
            className={cn(
              "absolute top-4 right-4 z-20 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            <Heart
              className={cn(
                "h-6 w-6 text-white transition-all",
                isLiked && "fill-red-500 text-red-500",
              )}
            />
          </button>
        ) : null}

        {isLocation ? (
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-left text-white sm:p-5">
            <h2 className="text-base font-bold leading-tight tracking-tight sm:text-lg">
              {title}
            </h2>
            {(description ?? category) && (
              <p className="mt-1 text-[11px] leading-snug text-white/90 sm:text-xs">
                {description ?? category}
              </p>
            )}
          </div>
        ) : (
          <div
            className={cn(
              "relative z-10 flex h-full flex-col justify-end text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2",
              compact ? "p-4 sm:p-5" : "p-6",
            )}
          >
            <p
              className={cn(
                "font-medium tracking-wider text-gray-200 uppercase",
                compact ? "text-[11px] sm:text-xs" : "text-sm",
              )}
            >
              - {category} -
            </p>
            <h2
              className={cn(
                "mt-1 leading-tight font-bold tracking-tight text-white",
                compact ? "text-xl sm:text-2xl" : "text-3xl md:text-4xl",
              )}
            >
              {title}
            </h2>
          </div>
        )}
      </div>
    );
  },
);

DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
