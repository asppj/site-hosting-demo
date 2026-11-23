import React from "react";
import { ArrowLeft, ArrowRight, ChevronRight, TriangleAlert } from "lucide-react";
import { Link } from "../lib/router";
import { projects, profile } from "../data/resume";
import { usePageMeta } from "../lib/usePageMeta";

function SubHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono-num text-[11px] tracking-[0.2em] text-[#1f4e3d]">{index}</span>
      <h2 className="font-serif-cn text-lg font-semibold tracking-tight text-[#14140f] sm:text-xl">{title}</h2>
    </div>
  );
}

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  usePageMeta(
    project ? `${project.name} · 项目档案 · ${profile.name}` : `项目未找到 · ${profile.name}`,
    project ? `${project.name}：${project.subtitle}。${project.background}` : "未找到对应的项目档案。",
  );

  if (!project) {
    return (
      <div className="py-16 text-center">
        <p className="font-mono-num text-[11px] uppercase tracking-[0.2em] text-[#14140f]/45">404</p>
        <h1 className="mt-3 font-serif-cn text-3xl font-semibold text-[#14140f]">这份档案不存在</h1>
        <p className="mt-3 text-sm text-[#14140f]/60">链接可能已经变过，所有项目都在项目档案里。</p>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-[4px] bg-[#1f4e3d] px-4 py-2 text-[13px] font-medium text-[#fbfaf7] hover:bg-[#163a2d]"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          返回项目档案
        </Link>
      </div>
    );
  }

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="space-y-11 sm:space-y-14">
      <header className="border-b border-[#14140f]/15 pb-9">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono-num text-[11px] uppercase tracking-[0.16em] text-[#14140f]/50 transition-colors hover:text-[#1f4e3d] print:hidden"
        >
          <ArrowLeft size={13} aria-hidden="true" />
          项目档案
        </Link>

        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3 font-mono-num text-[11px] uppercase tracking-[0.18em] text-[#14140f]/45">
          <span>Case {String(index + 1).padStart(2, "0")}</span>
          <span>{project.period}</span>
        </div>

        <h1 className="mt-3 font-serif-cn text-3xl leading-tight font-semibold tracking-tight text-[#14140f] sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#1f4e3d]">{project.subtitle}</p>

        <dl className="mt-6 grid gap-x-8 gap-y-4 border-t border-[#14140f]/10 pt-5 sm:grid-cols-3">
          <div>
            <dt className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/45">
              我的角色
            </dt>
            <dd className="mt-1 text-[13.5px] text-[#14140f]/80">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/45">
              时间
            </dt>
            <dd className="mt-1 font-mono-num text-[13.5px] text-[#14140f]/80">{project.period}</dd>
          </div>
          <div>
            <dt className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/45">
              技术栈
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-[3px] border border-[#14140f]/12 px-1.5 py-0.5 font-mono-num text-[11px] text-[#14140f]/60"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <section>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[#14140f]/12 py-6 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-mono-num text-xl font-medium tracking-tight text-[#1f4e3d] sm:text-2xl">
                {metric.value}
              </dt>
              <dd className="mt-1 text-[11.5px] leading-5 text-[#14140f]/55">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <SubHeading index="01" title="背景与问题" />
        <p className="max-w-3xl text-[14.5px] leading-7 text-[#14140f]/75">{project.background}</p>
      </section>

      <section className="space-y-4">
        <SubHeading index="02" title="我做了什么" />
        <ol className="divide-y divide-[#14140f]/10 border-y border-[#14140f]/10">
          {project.approach.map((item, i) => (
            <li key={item} className="flex gap-4 py-3.5">
              <span className="mt-0.5 font-mono-num text-[11px] tracking-[0.14em] text-[#1f4e3d]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[14px] leading-7 text-[#14140f]/80">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <SubHeading index="03" title="系统结构" />
        <div className="space-y-3">
          {project.architecture.map((lane) => (
            <div
              key={lane.lane}
              className="rounded-[4px] border border-[#14140f]/12 bg-white/60 p-4 sm:p-5"
            >
              <p className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/45">
                {lane.lane}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-2">
                {lane.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-[3px] border border-[#1f4e3d]/25 bg-[#1f4e3d]/6 px-2.5 py-1 text-[12.5px] text-[#14140f]/80">
                      {step}
                    </span>
                    {i < lane.steps.length - 1 ? (
                      <ChevronRight size={13} className="text-[#14140f]/30" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
              {lane.note ? (
                <p className="mt-2 text-[12px] text-[#14140f]/50">{lane.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SubHeading index="04" title="关键取舍" />
        <div className="grid gap-4 sm:grid-cols-3">
          {project.decisions.map((item) => (
            <div key={item.title} className="rounded-[4px] border border-[#14140f]/12 bg-white p-4">
              <h3 className="font-serif-cn text-[15px] font-semibold leading-snug text-[#14140f]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-[#14140f]/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SubHeading index="05" title="踩过的坑" />
        <ul className="divide-y divide-[#14140f]/10 border-y border-[#14140f]/10">
          {project.pitfalls.map((item) => (
            <li key={item.title} className="flex gap-3 py-4">
              <TriangleAlert size={15} className="mt-1 shrink-0 text-[#8a4b1f]" aria-hidden="true" />
              <div>
                <p className="text-[14px] font-medium text-[#14140f]">{item.title}</p>
                <p className="mt-1 text-[13px] leading-6 text-[#14140f]/70">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <nav className="flex flex-col gap-3 border-t border-[#14140f]/15 pt-6 sm:flex-row sm:items-stretch sm:justify-between print:hidden">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex-1 rounded-[4px] border border-[#14140f]/12 p-4 transition-colors hover:border-[#1f4e3d]"
          >
            <span className="inline-flex items-center gap-1.5 font-mono-num text-[10px] uppercase tracking-[0.16em] text-[#14140f]/45">
              <ArrowLeft size={12} aria-hidden="true" /> 上一个
            </span>
            <span className="mt-1 block font-serif-cn text-[15px] font-semibold text-[#14140f] group-hover:text-[#1f4e3d]">
              {prev.name}
            </span>
          </Link>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex-1 rounded-[4px] border border-[#14140f]/12 p-4 text-left transition-colors hover:border-[#1f4e3d] sm:text-right"
          >
            <span className="inline-flex items-center gap-1.5 font-mono-num text-[10px] uppercase tracking-[0.16em] text-[#14140f]/45 sm:flex-row-reverse">
              下一个 <ArrowRight size={12} aria-hidden="true" />
            </span>
            <span className="mt-1 block font-serif-cn text-[15px] font-semibold text-[#14140f] group-hover:text-[#1f4e3d]">
              {next.name}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
