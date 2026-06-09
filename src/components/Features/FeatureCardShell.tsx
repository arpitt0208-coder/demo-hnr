import { cn } from "@/lib/cn";

type FeatureCardShellProps = {
  children: React.ReactNode;
  illustration: React.ReactNode;
  className?: string;
  contentClassName?: string;
  illustrationClassName?: string;
};

export function FeatureCardShell({
  children,
  illustration,
  className,
  contentClassName,
  illustrationClassName,
}: FeatureCardShellProps) {
  return (
    <article
      className={cn(
        "relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:min-h-[380px]",
        className
      )}
    >
      <div className={cn("relative z-10 shrink-0 p-5 pb-3 sm:p-6", contentClassName)}>
        {children}
      </div>

      <div
        className={cn(
          "relative mt-auto h-[140px] w-full shrink-0 overflow-hidden sm:h-[165px]",
          illustrationClassName
        )}
      >
        {illustration}
      </div>
    </article>
  );
}
