"use client";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { useStage } from "@/components/StageContext";
import { FileText, FolderGit2, Send, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CARDS: {
  tag: string;
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    tag: "01",
    title: "Projects",
    desc: "Things I've built and shipped.",
    href: "/projects",
    icon: FolderGit2,
  },
  {
    tag: "02",
    title: "Resume",
    desc: "The one-page version of me.",
    href: "/resume",
    icon: FileText,
  },
  {
    tag: "03",
    title: "Connect",
    desc: "Say hello, or let's build something.",
    href: "/connect",
    icon: Send,
  },
];
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const stage = useStage();
  const shown = stage !== "closed";
  const settled = stage === "settled";

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center gap-12 px-6 pt-24 pb-16">
      <motion.div
        layout="position"
        transition={{ layout: { duration: 0.9, ease: EASE } }}
        className="text-center"
      >
        <motion.h1
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
          initial={{ opacity: 0, filter: "blur(14px)", y: 16, scale: 1 }}
          animate={{
            opacity: shown ? 1 : 0,
            filter: shown ? "blur(0px)" : "blur(14px)",
            y: shown ? 0 : 16,
            scale: settled ? 1.1 : 1,
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.5 },
            filter: { duration: 0.9, delay: 0.5 },
            y: { duration: 0.9, delay: 0.5, ease: EASE },
            scale: { duration: 0.9, ease: EASE },
          }}
        >
          Prikshit Dhiman
        </motion.h1>

        <motion.p
          className="mt-3 font-mono text-sm text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: shown ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Software Engineer
        </motion.p>
      </motion.div>

      {settled && (
        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          className="grid w-full max-w-4xl gap-4 sm:grid-cols-3"
        >
          {CARDS.map((c) => (
            <motion.li key={c.title} variants={item}>
              <Link
                href={c.href}
                className="group block h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card-hover"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <c.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-muted">{c.tag}</span>
                </div>
                <h2 className="mt-8 text-xl font-medium">{c.title}</h2>
                <p className="mt-1 text-sm text-muted">{c.desc}</p>
                <span className="mt-6 inline-block text-sm text-accent transition-transform group-hover:translate-x-1">
                  Open →
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
}
