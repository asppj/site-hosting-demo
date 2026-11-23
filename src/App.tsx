import React from "react";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { RouterProvider, useRouter } from "./lib/router";

function Routes() {
  const { pathname } = useRouter();

  if (pathname === "/projects") {
    return (
      <SiteLayout>
        <ProjectsPage />
      </SiteLayout>
    );
  }

  const detail = pathname.match(/^\/projects\/([^/]+)$/);
  if (detail) {
    return (
      <SiteLayout>
        <ProjectDetailPage slug={decodeURIComponent(detail[1])} />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
