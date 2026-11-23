import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type RouterValue = { pathname: string; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue>({ pathname: "/", navigate: () => {} });

const normalize = (path: string) => {
  const cleaned = path.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
};

/** Resolve a site-relative href into pathname + hash, or null when it is not internal. */
export function resolveHref(href: string): { pathname: string; hash: string } | null {
  if (typeof window === "undefined") return null;
  if (!href.startsWith("/")) return null;
  const url = new URL(href, window.location.origin);
  return { pathname: normalize(url.pathname), hash: url.hash };
}

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace(/^#/, "");
  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0 });
  }, 60);
}

export function RouterProvider({ children }: React.PropsWithChildren) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window === "undefined" ? "/" : normalize(window.location.pathname),
  );

  const navigate = useCallback((to: string) => {
    const target = resolveHref(to);
    const nextPath = target ? target.pathname : normalize(window.location.pathname);
    const hash = target ? target.hash : "";
    const samePath = nextPath === normalize(window.location.pathname);

    if (!samePath) {
      window.history.pushState({}, "", nextPath + hash);
      setPathname(nextPath);
    } else if (hash) {
      window.history.replaceState({}, "", nextPath + hash);
    }

    if (hash) scrollToHash(hash);
    else if (samePath) window.scrollTo({ top: 0, behavior: "smooth" });
    else window.scrollTo({ top: 0 });
  }, []);

  /**
   * Single document-level delegate for internal anchors. This keeps routing
   * working even when HeroUI renders the anchor itself (Button as={Link}), when
   * a component passes its own onPress, or when a raw <a href="/..."> is used.
   */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!anchor) return;
      if (anchor.getAttribute("target") === "_blank") return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const target = resolveHref(href);
      if (!target) return;
      event.preventDefault();
      navigate(href);
    };

    const onPopState = () => {
      setPathname(normalize(window.location.pathname));
      scrollToHash(window.location.hash);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, [navigate]);

  const value = useMemo<RouterValue>(() => ({ pathname, navigate }), [pathname, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Anchor used as HeroUI's `as` slot. It forwards props (href, onPress, data-*)
 * and lets the document-level delegate handle navigation, so it never swallows
 * a press handler that HeroUI needs.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, ...rest },
  ref,
) {
  return <a ref={ref} href={href} {...rest} />;
});
