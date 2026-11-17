import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Button } from "@/components/arc/button/button";
import appCss from "../styles.css?url";
function NotFoundComponent() {
  return (
    <main className="status-page">
      <div className="status-card">
        <p className="status-code">404</p>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="status-home-link">Go home</Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <main className="status-page">
      <div className="status-card">
        <h1>This page didn’t load</h1>
        <p>Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="status-actions">
          <Button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Link to="/" className="status-home-link">Go home</Link>
        </div>
      </div>
    </main>
  );
}

const SITE_URL = "https://cv-2.soycelikihsan.workers.dev";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ihsan Soycelik",
  jobTitle: "Product Designer",
  url: SITE_URL,
  email: "mailto:contact@soycelik.com",
  telephone: "+905353944444",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  sameAs: ["https://linkedin.com/in/isoycelik"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Ihsan Soycelik | Product Designer" },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Ihsan Soycelik" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "oklch(97.8% 0.008 85)" },
      { property: "og:site_name", content: "Ihsan Soycelik" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_US" },
      { "script:ld+json": personJsonLd },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Inter:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'){t='light'}document.documentElement.dataset.theme=t;if(t==='dark'){document.documentElement.classList.add('dark')}document.documentElement.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m){m.setAttribute('content',t==='dark'?'oklch(18% 0.009 135)':'oklch(97.8% 0.008 85)')}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
