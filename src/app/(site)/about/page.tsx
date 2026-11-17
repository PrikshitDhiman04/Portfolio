import Image from "next/image";
import {
  Brain,
  Code,
  Crown,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import PageShell from "@/components/pageshell";
import TechStack from "@/components/TechStack";

export const metadata = { title: "About" };

const FACTS: { icon: LucideIcon; text: string }[] = [
  { icon: Code, text: "Full Stack Developer." },
  {
    icon: Rocket,
    text: "Building applications using the MERN stack and Next.js.",
  },
  {
    icon: Brain,
    text: "Practicing Data Structures & Algorithms to strengthen my problem-solving skills.",
  },
  {
    icon: Search,
    text: "Always curious about how things work under the hood.",
  },
  {
    icon: Crown,
    text: "Chess enthusiast who enjoys strategy, competition, and thinking ahead.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About me"
      intro="A little about who I am and what I build."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
        {/* story */}
        <div className="space-y-5 leading-relaxed text-foreground/85">
          <p className="text-lg text-foreground">
            Hey, I&apos;m <strong>Prikshit Dhiman</strong>, a Computer Science
            Engineering student and Full Stack Developer with a strong interest
            in backend development.
          </p>
          <p>
            My journey started with backend development, where I developed an
            interest in building REST APIs, designing authentication systems,
            managing databases, and understanding how applications work behind
            the scenes. Over time, I started exploring frontend development with
            React and Next.js to understand the complete picture of web
            development.
          </p>
          <p>
            I enjoy turning ideas into functional applications and learning by
            building real-world projects. From developing backend systems with
            Node.js, Express, and MongoDB to creating interactive interfaces
            with React, I&apos;m constantly experimenting with new technologies
            and improving my development skills.
          </p>

          <h2 className="pt-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            A little more about me
          </h2>
          <ul className="space-y-3">
            {FACTS.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-accent/10 text-accent">
                  <f.icon className="size-4" strokeWidth={1.75} />
                </span>
                <span className="pt-1">{f.text}</span>
              </li>
            ))}
          </ul>

          <p>
            I&apos;m currently focused on improving my engineering fundamentals,
            building meaningful projects, and growing into a developer who can
            build, understand, and deliver complete software solutions.
          </p>
          <blockquote className="border-l-2 border-accent pl-4 text-foreground">
            I believe the best way to learn is to build, break things, debug,
            and build again.
          </blockquote>
        </div>

        {/* avatar card */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="mx-auto h-56 overflow-hidden rounded-xl bg-accent/10">
              <Image
                src="/avatar.svg"
                alt="Illustration of Prikshit"
                width={400}
                height={400}
                className="size-full object-contain object-bottom"
              />
            </div>
            <p className="mt-4 font-medium">Prikshit Dhiman</p>
            <p className="text-sm text-muted">Software Engineer</p>
          </div>
        </aside>
      </div>

      {/* tech stack */}
      <h2 className="mt-20 text-2xl font-semibold tracking-tight">
        Tech stack
      </h2>
      <p className="mt-2 mb-6 max-w-xl text-muted">
        The tools I reach for when I build.
      </p>
      <TechStack />
    </PageShell>
  );
}
