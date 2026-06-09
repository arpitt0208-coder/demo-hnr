import Image from "next/image";

export function MountainIllustration() {
  return (
    <div
      className="pointer-events-none absolute -right-4 bottom-[2%] h-[40%] w-[48%] opacity-[0.35] md:bottom-[4%] md:h-[44%] md:w-[44%]"
      aria-hidden="true"
    >
      <Image
        src="/assets/mountains.png"
        alt=""
        fill
        className="object-contain object-bottom"
        sizes="(max-width: 768px) 50vw, 600px"
      />
    </div>
  );
}
