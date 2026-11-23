import React from "react";
import { method } from "../data/resume";

export default function MethodSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[4px] border border-[#14140f]/12 bg-[#14140f]/12 sm:grid-cols-2 lg:grid-cols-4">
      {method.map((item) => (
        <li key={item.step} className="bg-white px-5 py-5 print:break-inside-avoid">
          <span className="font-mono-num text-[11px] tracking-[0.18em] text-[#1f4e3d]">{item.step}</span>
          <h3 className="mt-2.5 font-serif-cn text-[15px] font-semibold text-[#14140f]">{item.title}</h3>
          <p className="mt-2 text-[12.5px] leading-6 text-[#14140f]/60">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
