"use client";

import Link from "next/link";
import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type GlowButtonBaseProps = {
  label?: string;
  className?: string;
  showIcon?: boolean;
};

type GlowButtonAsButton = GlowButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type GlowButtonAsLink = GlowButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

export type GlowButtonProps = GlowButtonAsButton | GlowButtonAsLink;

export const GlowButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlowButtonProps>(
  ({ label = "Generate", className, showIcon = true, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      setIsClicked(true);
      window.setTimeout(() => setIsClicked(false), 200);

      if ("onClick" in props && typeof props.onClick === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (props.onClick as (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void)(event);
      }
    };

    const content = (
      <span className="flex items-center justify-center gap-1.5">
        {label}
        {showIcon ? <Sparkles size={16} className="ml-0.5" aria-hidden="true" /> : null}
      </span>
    );

    const sharedClassName = cn("glow-btn", className);
    const clickedState = isClicked ? "clicked" : undefined;

    if ("href" in props && props.href) {
      const { href, onClick: _onClick, ...linkProps } = props;

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          aria-label={label}
          className={sharedClassName}
          onClick={handleClick}
          data-state={clickedState}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    const { type = "button", ...buttonProps } = props as GlowButtonAsButton;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        aria-label={label}
        className={sharedClassName}
        onClick={handleClick}
        data-state={clickedState}
        {...buttonProps}
      >
        {content}
      </button>
    );
  },
);

GlowButton.displayName = "GlowButton";
