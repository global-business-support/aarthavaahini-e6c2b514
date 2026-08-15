import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/hooks/useAuth";
import { SplashScreen } from "@/components/site/SplashScreen";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { name: "description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { name: "author", content: "Aarthvaahini" },
      { property: "og:title", content: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { property: "og:description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aarthvaahini" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { name: "twitter:description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#17357e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aarthvaahini",
          alternateName: "Aarthvaahini Financial Services",
          url: "https://aarthvaahini.com",
          logo: "https://aarthvaahini.com/logo.jpg",
          image: "https://aarthvaahini.com/logo.jpg",
          description: "Loans, Insurance, Mutual Funds & Wealth Management advisory in India.",
          areaServed: "IN",
          sameAs: [
            "https://www.aarthvaahini.com",
            "https://aarthavaahini.lovable.app",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Aarthvaahini",
          url: "https://aarthvaahini.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://aarthvaahini.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "text/javascript",
        children: `(function(){
  var d = new Date();
  if (d.getMonth() === 7 && d.getDate() === 15) {
    document.documentElement.classList.add('independence-day');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#FF671F');
  }
})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
      <AuthProvider>
        <SplashScreen />
        <Outlet />
        <Toaster richColors position="top-center" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
