import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

function crawlerText(path, text, origin) {
  if (path.endsWith("sitemap.xml")) {
    text = text.replaceAll("{{SITE_PAGES}}", "<url><loc>{{SITE_ORIGIN}}/</loc></url>");
  }
  return origin ? text.replaceAll("{{SITE_ORIGIN}}", new URL(origin).origin) : text;
}

export default defineConfig({
  appType: "spa",
  base: "./",
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [tailwindcss(), {
    name: "studio-preview-inspection",
    apply: "serve",
    configureServer(server) {
      if (!existsSync(".studio/inspect.js")) return;
      server.middlewares.use("/__studio-devtools.js", (_req, res) => {
        res.setHeader("Content-Type", "application/javascript");
        res.end(readFileSync(".studio/devtools.js"));
      });
      server.middlewares.use("/__studio-inspect.js", (_req, res) => {
        res.setHeader("Content-Type", "application/javascript");
        res.end(readFileSync(".studio/inspect.js"));
      });
    },
    transformIndexHtml() {
      if (!existsSync(".studio/inspect.js")) return;
      return [{ tag: "script", attrs: { src: "/__studio-inspect.js", defer: true }, injectTo: "head" }];
    },
  }, {
    name: "studio-crawler-origin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || "").split("?")[0];
        if (!["/robots.txt", "/sitemap.xml"].includes(path) || !existsSync("public" + path)) return next();
        const origin = process.env.SITE_ORIGIN || ("http://" + req.headers.host);
        res.setHeader("Content-Type", path.endsWith(".xml") ? "application/xml" : "text/plain");
        res.end(crawlerText(path, readFileSync("public" + path, "utf8"), origin));
      });
    },
    writeBundle() {
      for (const path of ["dist/robots.txt", "dist/sitemap.xml"]) {
        if (existsSync(path)) writeFileSync(path, crawlerText(path, readFileSync(path, "utf8"), process.env.SITE_ORIGIN));
      }
    },
  }],
});
