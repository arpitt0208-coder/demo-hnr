import Image from "next/image";
import type { StaticImageData } from "next/image";
import { appStoreIcon, googlePlayIcon } from "@/assets/images";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/appStoreLinks";
import { cn } from "@/lib/cn";

type StoreButtonVariant = "default" | "footer";

const badgeBaseClassName =
  "inline-flex items-center rounded-[10px] transition-opacity hover:opacity-90";

const badgeSizeClassName: Record<StoreButtonVariant, string> = {
  default: "h-[52px] w-[172px] gap-2.5 px-3",
  footer: "h-[44px] w-[148px] gap-2 px-2.5",
};

const badgeVariantClassName: Record<StoreButtonVariant, string> = {
  default: "bg-black",
  footer: "border border-white/15 bg-[#111111]",
};

const iconBoxClassName: Record<StoreButtonVariant, string> = {
  default: "h-[34px] w-[30px]",
  footer: "h-[26px] w-[24px]",
};

const topLineVariantClassName: Record<StoreButtonVariant, string> = {
  default: "text-[10px] text-white/90",
  footer: "text-[9px] text-white/75",
};

const bottomLineVariantClassName: Record<StoreButtonVariant, string> = {
  default: "text-[17px] text-white",
  footer: "text-[14px] text-white",
};

type StoreBadgeProps = {
  href?: string;
  ariaLabel: string;
  icon: StaticImageData | string;
  iconWidth: number;
  iconHeight: number;
  topLine: string;
  bottomLine: string;
  variant?: StoreButtonVariant;
};

function StoreBadge({
  href,
  ariaLabel,
  icon,
  iconWidth,
  iconHeight,
  topLine,
  bottomLine,
  variant = "default",
}: StoreBadgeProps) {
  const isFooter = variant === "footer";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        badgeBaseClassName,
        badgeSizeClassName[variant],
        badgeVariantClassName[variant]
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          iconBoxClassName[variant]
        )}
      >
        <Image
          src={icon}
          alt=""
          width={iconWidth}
          height={iconHeight}
          quality={100}
          unoptimized
          className="max-h-full max-w-full object-contain object-center"
          aria-hidden="true"
        />
      </span>

      <span
        className={cn(
          "flex min-w-0 flex-col justify-center whitespace-nowrap",
          isFooter ? "gap-[2px]" : "gap-[3px]"
        )}
      >
        <span
          className={cn("font-normal leading-none", topLineVariantClassName[variant])}
        >
          {topLine}
        </span>
        <span
          className={cn(
            "font-semibold leading-none tracking-[-0.02em]",
            bottomLineVariantClassName[variant]
          )}
        >
          {bottomLine}
        </span>
      </span>
    </a>
  );
}

type StoreButtonProps = {
  href?: string;
  variant?: StoreButtonVariant;
};

function AppStoreButton({
  href = APP_STORE_URL,
  variant = "default",
}: StoreButtonProps) {
  return (
    <StoreBadge
      href={href}
      variant={variant}
      ariaLabel="Download on the App Store"
      icon={appStoreIcon}
      iconWidth={28}
      iconHeight={28}
      topLine="Download on the"
      bottomLine="App Store"
    />
  );
}

function GooglePlayButton({
  href = GOOGLE_PLAY_URL,
  variant = "default",
}: StoreButtonProps) {
  return (
    <StoreBadge
      href={href}
      variant={variant}
      ariaLabel="Get it on Google Play"
      icon={googlePlayIcon}
      iconWidth={26}
      iconHeight={30}
      topLine="GET IT ON"
      bottomLine="Google Play"
    />
  );
}

type AppStoreButtonStackProps = {
  className?: string;
  variant?: StoreButtonVariant;
  direction?: "row" | "column";
};

export function AppStoreButtonStack({
  className = "",
  variant = "default",
  direction = "column",
}: AppStoreButtonStackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row"
          ? "flex-row flex-wrap items-center gap-3"
          : "flex-col gap-2.5",
        variant === "footer" && direction === "column" && "gap-2",
        className
      )}
    >
      <AppStoreButton variant={variant} />
      <GooglePlayButton variant={variant} />
    </div>
  );
}
