import React from "react";
import { Mail } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { Link, useRouter } from "../lib/router";
import { profile } from "../data/resume";

const nav = [
  { href: "/", label: "简历" },
  { href: "/projects", label: "项目档案" },
];

export default function SiteHeader() {
  const { pathname } = useRouter();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-30 border-b border-[#14140f]/12 bg-[#fbfaf7]/92 backdrop-blur print:hidden">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2.5 rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f4e3d]">
          <span className="font-serif-cn text-base font-semibold tracking-tight text-[#14140f]">
            {profile.name}
          </span>
          <span className="hidden font-mono-num text-[10px] uppercase tracking-[0.18em] text-[#14140f]/45 sm:inline">
            agent engineer
          </span>
        </Link>

        <nav aria-label="主导航" className="flex items-center gap-1">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                aria-current={active ? "page" : undefined}
                render={({ ref, ...props }) => <Link ref={ref} {...props} href={item.href} />}
                className={[
                  "rounded-[4px] px-3 text-[13px] font-normal",
                  active
                    ? "bg-[#14140f]/6 text-[#14140f]"
                    : "text-[#14140f]/60 hover:bg-[#14140f]/4 hover:text-[#14140f]",
                ].join(" ")}
              >
                {item.label}
              </Button>
            );
          })}

          <Tooltip content={`写信给 ${profile.email}`} delay={400}>
            <Button
              size="sm"
              render={({ ref, ...props }) => <a ref={ref} {...props} href={`mailto:${profile.email}`} />}
            >
              <Mail size={13} aria-hidden="true" />
              联系我
            </Button>
          </Tooltip>
        </nav>
      </div>
    </header>
  );
}
