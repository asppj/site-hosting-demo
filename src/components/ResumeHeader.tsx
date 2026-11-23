import React from "react";
import { Mail, Phone, MapPin, Github, Printer } from "lucide-react";
import { profile } from "../data/resume";
import { Link } from "../lib/router";

function MastheadRule() {
  return <div className="h-px w-full bg-[#14140f]/15" aria-hidden="true" />;
}

export default function ResumeHeader() {
  return (
    <header className="border-b border-[#14140f]/15 pb-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 font-mono-num text-[11px] uppercase tracking-[0.18em] text-[#14140f]/55">
        <span>Curriculum Vitae</span>
        <span>{profile.location} · 可远程</span>
      </div>

      <h1 className="mt-6 font-serif-cn text-4xl leading-none font-semibold tracking-tight text-[#14140f] sm:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-serif-cn text-xl text-[#1f4e3d] sm:text-2xl">{profile.title}</span>
        <span className="text-sm text-[#14140f]/55">{profile.focus}</span>
      </p>

      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#14140f]/75">
        {profile.tagline}
      </p>

      <MastheadRule />

      <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-mono-num text-2xl font-medium tracking-tight text-[#1f4e3d] sm:text-3xl">
              {stat.value}
            </dt>
            <dd className="mt-1 text-xs leading-5 text-[#14140f]/60">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <MastheadRule />

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-[#14140f]/70">
        <a className="inline-flex items-center gap-1.5 hover:text-[#1f4e3d]" href={`mailto:${profile.email}`}>
          <Mail size={14} aria-hidden="true" />
          {profile.email}
        </a>
        <a className="inline-flex items-center gap-1.5 hover:text-[#1f4e3d]" href={`tel:${profile.phone.replace(/-/g, "")}`}>
          <Phone size={14} aria-hidden="true" />
          <span className="font-mono-num">{profile.phone}</span>
        </a>
        <a
          className="inline-flex items-center gap-1.5 hover:text-[#1f4e3d]"
          href={`https://${profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={14} aria-hidden="true" />
          {profile.github}
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} aria-hidden="true" />
          {profile.location}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 print:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-[4px] bg-[#1f4e3d] px-4 py-2 text-sm font-medium text-[#fbfaf7] transition-colors hover:bg-[#163a2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4e3d]"
        >
          查看项目细节
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-[4px] border border-[#14140f]/20 px-4 py-2 text-sm font-medium text-[#14140f]/80 transition-colors hover:border-[#1f4e3d] hover:text-[#1f4e3d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4e3d]"
        >
          <Printer size={15} aria-hidden="true" />
          打印 / 存为 PDF
        </button>
      </div>
    </header>
  );
}
