import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button, Card } from "@heroui/react";
import { Link } from "../lib/router";
import { projects, profile } from "../data/resume";
import { usePageMeta } from "../lib/usePageMeta";

export default function ProjectsPage() {
  usePageMeta(
    "项目档案 · 林知远 · Agent 开发工程师",
    "四个 Agent 项目的完整档案：多智能体客服协同、观测与回放平台、统一工具网关、开源调试工具。含架构、决策与踩坑记录。",
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="border-b border-[#14140f]/15 pb-9">
        <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono-num text-[11px] uppercase tracking-[0.18em] text-[#14140f]/50">
          <span>Project Archive · {projects.length} entries</span>
          <span>{profile.name}</span>
        </div>

        <h1 className="mt-5 font-serif-cn text-3xl leading-tight font-semibold tracking-tight text-[#14140f] sm:text-5xl">
          写过的 Agent 系统，和它们坏掉的样子
        </h1>
        <p className="mt-4 max-w-2xl text-[14.5px] leading-7 text-[#14140f]/70">
          每个项目都按同一套结构展开：为什么做、怎么拆、关键取舍、以及真正踩过的坑。
          坑那一段通常比架构图更能说明一个工程师调过多少遍系统。
        </p>

        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <Button
            as={Link}
            href="/"
            radius="sm"
            variant="bordered"
            startContent={<span aria-hidden="true">←</span>}
            className="rounded-[4px] border-[#14140f]/20 px-4 text-[13px] font-medium text-[#14140f]/80 hover:border-[#1f4e3d] hover:text-[#1f4e3d]"
          >
            返回简历
          </Button>
        </div>
      </header>

      <ol className="space-y-6">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Card className="rounded-[4px] border border-[#14140f]/12 bg-white p-0 shadow-none">
              <div className="p-5 sm:p-7">
                <div className="flex items-baseline justify-between gap-4 font-mono-num text-[11px] tracking-[0.16em] text-[#14140f]/45">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{project.period}</span>
                </div>

                <h2 className="mt-3 font-serif-cn text-xl font-semibold tracking-tight text-[#14140f] sm:text-2xl">
                  {project.name}
                </h2>
                <p className="mt-1.5 text-[13.5px] leading-6 text-[#14140f]/65">{project.subtitle}</p>

                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#14140f]/10 pt-4 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="font-mono-num text-lg font-medium tracking-tight text-[#1f4e3d]">
                        {metric.value}
                      </dt>
                      <dd className="mt-0.5 text-[11.5px] leading-5 text-[#14140f]/55">{metric.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-[3px] border border-[#14140f]/12 px-2 py-0.5 font-mono-num text-[11px] text-[#14140f]/60"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    as={Link}
                    href={`/projects/${project.slug}`}
                    size="sm"
                    variant="light"
                    radius="sm"
                    endContent={<ArrowRight size={14} aria-hidden="true" />}
                    className="px-0 text-[13px] font-medium text-[#1f4e3d] data-[hover=true]:bg-transparent data-[hover=true]:underline"
                  >
                    看完整档案
                  </Button>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <div className="rounded-[4px] border border-[#1f4e3d]/25 bg-[#1f4e3d]/5 p-6">
        <p className="font-serif-cn text-lg font-semibold text-[#14140f]">想聊更细的部分？</p>
        <p className="mt-2 max-w-xl text-[13.5px] leading-6 text-[#14140f]/70">
          可以现场挑一个项目，我按失败案例讲：现象、定位过程、改了什么、最后加的那条断言。
        </p>
        <Button
          as="a"
          href={`mailto:${profile.email}`}
          radius="sm"
          startContent={<ArrowUpRight size={14} aria-hidden="true" />}
          className="mt-4 rounded-[4px] bg-[#1f4e3d] px-4 text-[13px] font-medium text-[#fbfaf7] hover:bg-[#163a2d] data-[hover=true]:bg-[#163a2d]"
        >
          {profile.email}
        </Button>
      </div>
    </div>
  );
}
