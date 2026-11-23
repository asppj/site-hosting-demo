import React from "react";
import { BookOpen, Github, Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { Card } from "@heroui/react";
import { profile } from "../data/resume";

const basics = [
  { label: "现居城市", value: `
${profile.location} · 可远程` },
  { label: "从业年限", value: "4 年研发，3 年专注 Agent" },
  { label: "学历", value: profile.educationShort },
  { label: "语言能力", value: profile.languages },
  { label: "求职状态", value: profile.openTo },
  { label: "目标岗位", value: profile.targetRole },
];

const channels = [
  { icon: Mail, label: "邮箱", value: profile.email, href: `mailto:${profile.email}`, mono: false },
  {
    icon: Phone,
    label: "手机",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/-/g, "")}`,
    mono: true,
  },
  { icon: Github, label: "GitHub", value: profile.github, href: `https://${profile.github}`, mono: false },
  { icon: Globe, label: "个人站点", value: profile.website, href: `https://${profile.website}`, mono: false },
  { icon: BookOpen, label: "技术博客", value: profile.blog, href: `https://${profile.blog}`, mono: false },
  { icon: MessageCircle, label: "微信", value: profile.wechat, href: null, mono: true },
];

export default function ProfileFacts() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
      <Card className="rounded-[4px] border border-[#14140f]/12 bg-white p-0 shadow-none">
        <div className="border-b border-[#14140f]/10 px-5 py-3.5 sm:px-6">
          <p className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#1f4e3d]">
            Basic info
          </p>
          <h3 className="mt-1 font-serif-cn text-[17px] font-semibold text-[#14140f]">基本资料</h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-4 px-5 py-5 sm:grid-cols-2 sm:px-6">
          {basics.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] tracking-[0.08em] text-[#14140f]/45">{item.label}</dt>
              <dd className="mt-1 whitespace-pre-line text-[13.5px] leading-6 text-[#14140f]/85">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>

      <Card className="rounded-[4px] border border-[#14140f]/12 bg-white p-0 shadow-none">
        <div className="border-b border-[#14140f]/10 px-5 py-3.5 sm:px-6">
          <p className="font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#1f4e3d]">
            Contact
          </p>
          <h3 className="mt-1 font-serif-cn text-[17px] font-semibold text-[#14140f]">联系方式</h3>
        </div>
        <ul className="divide-y divide-[#14140f]/8">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <Icon size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-[#14140f]/40" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] tracking-[0.08em] text-[#14140f]/45">{channel.label}</span>
                  <span
                    className={[
                      "truncate text-[13.5px] text-[#14140f]/85",
                      channel.mono ? "font-mono-num" : "",
                    ].join(" ")}
                  >
                    {channel.value}
                  </span>
                </span>
              </>
            );

            return (
              <li key={channel.label}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-[#1f4e3d]/4 sm:px-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-3 px-5 py-3 sm:px-6">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}
