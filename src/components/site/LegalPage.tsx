import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageProps {
  tag: string;
  title: string;
  subtitle: ReactNode;
  updated: string;
  intro?: ReactNode;
  sections: LegalSection[];
  closing?: ReactNode;
}

export function LegalPage({
  tag,
  title,
  subtitle,
  updated,
  intro,
  sections,
  closing,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16 sm:py-24">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {tag}
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>

          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
            Last Updated: {updated}
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {intro && (
            <div className="rounded-3xl border border-border/50 bg-card p-6 text-sm leading-7 text-muted-foreground shadow-soft sm:p-8 sm:text-base">
              {intro}
            </div>
          )}

          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-border/50 bg-card p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {section.heading}
              </h2>

              <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2 pl-5">
                    {section.bullets.map((bullet, index) => (
                      <li key={index} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {closing}
        </div>
      </main>

      <Footer />
    </div>
  );
}
