"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ReadMoreButtonBaseProps {
  children?: string;
  className?: string;
}

type ReadMoreButtonProps = ReadMoreButtonBaseProps &
  (
    | ({ asSpan?: false } & ComponentProps<typeof Link>)
    | { asSpan: true }
  );

export function ReadMoreButton(props: ReadMoreButtonProps) {
  const { children = "Read More", className } = props;

  const content = (
    <>
      <span
        className={cn(
          "spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-[14px]",
          "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#efbe3d_360deg)]",
          "before:rotate-[-90deg] before:animate-rotate",
          "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
        )}
      />
      <span
        className={cn(
          "backdrop absolute inset-px rounded-[13px] bg-dark-navy transition-colors duration-200",
          "group-hover:bg-primary-yellow group-hover/card:bg-primary-yellow",
        )}
      />
      <span
        className={cn(
          "z-10 flex h-9 items-center justify-center gap-1.5 text-[12px] font-bold sm:h-10 sm:text-[13px]",
          "text-white transition-colors duration-200 group-hover:text-dark-navy group-hover/card:text-dark-navy",
        )}
      >
        {children}
        <ChevronRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover/card:translate-x-0.5"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </span>
    </>
  );

  const sharedClassName = cn(
    "group relative grid w-full overflow-hidden rounded-[14px] px-5 py-1.5 transition-all duration-200",
    "shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
    "group-hover/card:scale-[1.02] group-hover/card:shadow-lg",
    className,
  );

  if (props.asSpan) {
    return (
      <span className={sharedClassName} aria-hidden="true">
        {content}
      </span>
    );
  }

  const { asSpan: _, ...linkProps } = props;

  return (
    <Link className={sharedClassName} {...linkProps}>
      {content}
    </Link>
  );
}
