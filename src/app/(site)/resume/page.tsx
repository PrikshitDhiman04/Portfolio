import PageShell from "@/components/pageshell";
import ResumeActions from "@/components/ResumeActions";
import { RESUME } from "@/lib/resume";

export const metadata = { title: "Resume" };

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
        <span className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
      {points.map((p) => (
        <li
          key={p}
          className="relative pl-4 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-accent"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

const card = "rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6";

export default function ResumePage() {
  return (
    <PageShell
      eyebrow="02 · Resume"
      title="Resume"
      intro={`${RESUME.role} · ${RESUME.location}`}
    >
      <ResumeActions />

      <div className="mt-14 space-y-14">
        <Section title="Summary">
          <p className="max-w-3xl leading-relaxed text-foreground/85">
            {RESUME.summary}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {RESUME.stats.map((s) => (
              <li key={s.label} className={card}>
                <p className="text-3xl font-semibold tracking-tight text-accent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Technical skills">
          <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            {RESUME.skills.map((g) => (
              <div
                key={g.label}
                className="grid gap-2 p-4 sm:grid-cols-[11rem_1fr] sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium">{g.label}</dt>
                <dd>
                  <Chips items={g.items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          {RESUME.experience.map((e) => (
            <article key={e.title} className={card}>
              <header className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">
                  {e.title} <span className="text-muted">· {e.org}</span>
                </h3>
                <p className="font-mono text-xs text-muted">{e.date}</p>
              </header>
              <Bullets points={e.points} />
            </article>
          ))}
        </Section>

        <Section title="Projects">
          <div className="space-y-4">
            {RESUME.projects.map((p) => (
              <article key={p.title} className={card}>
                <header className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-medium">{p.title}</h3>
                  {p.badge && (
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      {p.badge}
                    </span>
                  )}
                </header>
                <div className="mb-4">
                  <Chips items={p.tech} />
                </div>
                <Bullets points={p.points} />
              </article>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            {RESUME.education.map((e) => (
              <li
                key={e.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 p-4 sm:px-6"
              >
                <div>
                  <h3 className="font-medium">{e.title}</h3>
                  <p className="text-sm text-muted">
                    {e.org} · {e.detail}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted">{e.date}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Achievements & interests">
          <div className={card}>
            <Bullets points={RESUME.achievements} />
          </div>
        </Section>
      </div>
    </PageShell>
  );
}
