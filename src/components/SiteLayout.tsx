import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#fbfaf7] text-[#14140f]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 pb-20 pt-10 sm:px-8 sm:pt-14">{children}</main>
      <SiteFooter />
    </div>
  );
}
