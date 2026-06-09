import Image from "next/image";
import { textSparkle } from "@/assets/images";
import { cn } from "@/lib/cn";

type HeadingSparkleProps = {
  className?: string;
};

export function HeadingSparkle({ className }: HeadingSparkleProps) {
  return (
    <Image
      src={textSparkle}
      alt=""
      width={24}
      height={16}
      className={cn(
        "pointer-events-none absolute -right-4 -top-1 h-4 w-5 mix-blend-screen sm:-right-5 sm:h-5 sm:w-6",
        className
      )}
      aria-hidden="true"
    />
  );
}
