"use client";
import type { IconType } from "react-icons";
import { motion, type Variants } from "motion/react";
import { FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

// no color = the logo follows the theme text color (for black/white logos)
type Tech = { name: string; icon: IconType; color?: string };

const GROUPS: { title: string; items: Tech[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#0F80CC" },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const chip: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function TechStack() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {GROUPS.map((g) => (
        <section
          key={g.title}
          className="rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {g.title}
          </h3>
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {g.items.map((t) => (
              <motion.li
                key={t.name}
                variants={chip}
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm transition-transform hover:-translate-y-0.5 hover:border-accent/50"
              >
                <t.icon
                  className="size-5 shrink-0"
                  style={t.color ? { color: t.color } : undefined}
                  aria-hidden
                />
                {t.name}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      ))}
    </div>
  );
}
