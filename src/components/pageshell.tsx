import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  center?: boolean;
  children?: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  intro,
  center = false,
  children,
}: Props) {
  return (
    <main
      className={`mx-auto min-h-dvh max-w-5xl animate-[fade-up_0.6s_ease-out_both] px-4 pb-24 pt-28 sm:px-6 ${
        center ? "text-center" : ""
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className={`mt-3 max-w-xl text-muted ${center ? "mx-auto" : ""}`}>
        {intro}
      </p>

      <div className="mt-12">
        {children ?? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted">
            Content coming soon.
          </div>
        )}
      </div>
    </main>
  );
}
