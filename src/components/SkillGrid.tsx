import React from "react";
import { Bug, Code2, Gauge, Layers, ShieldCheck, Workflow } from "lucide-react";
import { skillGroups, type SkillGroup } from "../data/resume";

const icons: Record<SkillGroup["icon"], React.ElementType> = {
  workflow: Workflow,
  layers: Layers,
  bug: Bug,
  gauge: Gauge,
  shield: ShieldCheck,
  code: Code2,
};

export default function SkillGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = icons[group.icon];
        return (
          <div
            key={group.title}
            className="rounded-[4px] border border-[#14140f]/12 bg-white px-5 py-5 print:break-inside-avoid"
          >
            <div className="flex items-center gap-2">
              <Icon size={15} aria-hidden="true" className="text-[#1f4e3d]" />
              <h3 className="font-serif-cn text-[15px] font-semibold text-[#14140f]">{group.title}</h3>
            </div>
            <p className="mt-1.5 text-[12.5px] leading-5 text-[#14140f]/55">{group.blurb}</p>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[3px] border border-[#14140f]/10 bg-[#fbfaf7] px-2 py-[3px] font-mono-num text-[11px] text-[#14140f]/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
