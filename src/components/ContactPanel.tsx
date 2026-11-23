import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@heroui/react";
import { profile } from "../data/resume";

export default function ContactPanel() {
  return (
    <div className="rounded-[4px] bg-[#1f4e3d] px-6 py-8 text-[#f3f1ea] sm:px-9 sm:py-10">
      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-7">
        <div className="max-w-md">
          <p className="font-mono-num text-[10px] uppercase tracking-[0.2em] text-[#f3f1ea]/50">
            Open to work · {profile.openTo}
          </p>
          <h3 className="mt-3 font-serif-cn text-2xl font-semibold leading-snug tracking-tight sm:text-[26px]">
            有在跑不通的 Agent？我们聊聊。
          </h3>
          <p className="mt-3 text-[13.5px] leading-6 text-[#f3f1ea]/75">
            {profile.availability.find((item) => item.label === "到岗时间")?.value}到岗，
            接受 {profile.locationNote.replace(/^.*·\s*/, "")}。邮件通常当天回；想先看系统怎么搭的，直接翻项目页。
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <Button
            as="a"
            href={`mailto:${profile.email}`}
            radius="sm"
            startContent={<Mail size={15} aria-hidden="true" />}
            className="rounded-[4px] bg-[#f3f1ea] px-5 text-sm font-medium text-[#1f4e3d] hover:bg-white data-[hover=true]:bg-white"
          >
            {profile.email}
          </Button>
          <Button
            as="a"
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
            radius="sm"
            variant="bordered"
            endContent={<ArrowUpRight size={14} aria-hidden="true" />}
            className="rounded-[4px] border-[#f3f1ea]/35 px-5 text-sm text-[#f3f1ea]/90 hover:border-[#f3f1ea] hover:text-[#f3f1ea]"
          >
            {profile.github}
          </Button>
          <p className="font-mono-num mt-1 text-center text-[11px] tracking-[0.08em] text-[#f3f1ea]/50">
            微信 {profile.wechat}
          </p>
        </div>
      </div>
    </div>
  );
}
