import React from "react";
import { experiences } from "../data/resume";

export default function ExperienceTimeline() {
  return (
    <ol className="space-y-8">
      {experiences.map((job, index) => (
        <li
          key={job.company}
          className="grid gap-x-8 gap-y-3 border-t border-[#14140f]/12 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[168px_1fr] print:break-inside-avoid"
        >
          <div>
            <p className="font-mono-num text-[11.5px] tracking-[0.06em] text-[#1f4e3d]">{job.period}</p>
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#14140f]/40">
              {job.location}
            </p>
            <p className="font-mono-num mt-4 text-[10px] text-[#14140f]/25">
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>

          <div>
            <h3 className="font-serif-cn text-[17px] font-semibold tracking-tight text-[#14140f]">
              {job.company}
            </h3>
            <p className="mt-0.5 text-[13px] text-[#1f4e3d]">{job.role}</p>
            <p className="mt-2 text-[13.5px] leading-6 text-[#14140f]/70">{job.summary}</p>

            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[13.5px] leading-6 text-[#14140f]/80">
                  <span aria-hidden="true" className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#1f4e3d]/60" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-[3px] bg-[#1f4e3d]/7 px-2 py-[3px] font-mono-num text-[11px] text-[#1f4e3d]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
