import React from "react";
import { HeroUIProvider as Provider, ToastProvider } from "@heroui/react";
import { useLocation, useNavigate } from "../lib/router";

export default function HeroUIProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  return (
    <Provider navigate={(href: string) => navigate(href)} router={{ pathname, search, hash }}>
      <ToastProvider>{children}</ToastProvider>
    </Provider>
  );
}
