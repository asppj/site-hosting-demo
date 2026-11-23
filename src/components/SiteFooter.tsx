import React from "react";
import { Github, Mail, Phone } from "lucide-react";
import { Link } from "../lib/router";
import { profile } from "../data/resume";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#14140f]/12 bg-[#f4f2ec] print:hidden">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif-cn text-base font-semibold text-[#14140f]">
              {profile.name} · {profile.title}
            </p>
            <p className="mt-1.5 max-w-md text-[13px] leading-6 text-[#14140f]/60">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[13px] text-[#14140f]/70">
            <a className="inline-flex items-center gap-2 hover:text-[#1f4e3d]" href={`mailto:${profile.email}`}>
              <Mail size={13} aria-hidden="true" />
              {profile.email}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-[#1f4e3d]"
              href={`tel:${profile.phone.replace(/-/g, "")}`}
            >
              <Phone size={13} aria-hidden="true" />
              <span className="font-mono-num">{profile.phone}</span>
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-[#1f4e3d]"
              href={`https://${profile.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={13} aria-hidden="true" />
              {profile.github}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#14140f]/12 pt-5 font-mono-num text-[11px] uppercase tracking-[0.16em] text-[#14140f]/45">
          <span>Résumé · 2025</span>
          <span className="flex items-center gap-4">
            <Link href="/projects" className="hover:text-[#1f4e3d]">
              项目档案
            </Link>
            <span>可直接打印为 PDF</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
