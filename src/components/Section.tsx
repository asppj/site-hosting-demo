import React from "react";

type SectionProps = {
  id?: string;
  index: string;
  title: string;
  kicker?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({ id, index, title, kicker, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-[#14140f]/12 py-11 first:pt-0 last:border-b-0 sm:py-14"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
        <span className="font-mono-num text-[11px] tracking-[0.2em] text-[#1f4e3d]">{index}</span>
        <h2 className="font-serif-cn text-[22px] font-semibold tracking-tight text-[#14140f] sm:text-2xl">
          {title}
        </h2>
        {kicker ? (
          <span className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/40">
            {kicker}
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#14140f]/60">{description}</p>
      ) : null}
      <div className="mt-7">{children}</div>
    </section>
  );
}
