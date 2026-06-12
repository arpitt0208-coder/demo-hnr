import logoSvg from "@/assets/images/logo.svg";
import logoWhiteSvg from "@/assets/images/logo-white.svg";
import { cn } from "@/lib/cn";

/** Native SVG viewBox dimensions — matches hirenride.com/newlogo.svg */
const LOGO_WIDTH = 121;
const LOGO_HEIGHT = 32;

const sizeStyles = {
  header: "h-8 w-[121px]",
  footer: "h-10 w-[152px] sm:h-12 sm:w-[182px]",
} as const;

type BrandLogoProps = {
  variant?: "dark" | "white";
  size?: keyof typeof sizeStyles;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "dark",
  size = "header",
  priority = false,
  className,
}: BrandLogoProps) {
  const src = variant === "white" ? logoWhiteSvg : logoSvg;

  return (
    // Plain <img> keeps SVG vector — next/image can rasterize small SVGs.
    <img
      src={src.src}
      alt="Hire n Ride — Your travel partner"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "block max-w-none shrink-0 object-contain object-left",
        sizeStyles[size],
        className,
      )}
    />
  );
}
