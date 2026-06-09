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
        "relative flex h-full min-h-[248px] flex-col overflow-hidden rounded-[20px] border border-[#EEF2F6] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(15,23,42,0.08)] sm:min-h-[268px]",
        className
      )}
    >
      <div
        className={cn(
          "relative z-10 flex shrink-0 flex-col p-4 pb-2 sm:p-5 sm:pb-2.5",
          contentClassName
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "relative mt-auto h-[108px] w-full shrink-0 overflow-hidden sm:h-[120px]",
          illustrationClassName
        )}
      >
        {illustration}
      </div>
    </article>
  );
}
