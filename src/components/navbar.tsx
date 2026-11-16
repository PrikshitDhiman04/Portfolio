"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useStage } from "@/components/StageContext";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Connect", href: "/connect" },
];

function BulbIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5 overflow-visible drop-shadow-[0_0_5px_rgba(255,190,90,0.9)] transition-[filter] dark:drop-shadow-none"
    >
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        className="fill-amber-300 stroke-amber-600 transition-colors dark:fill-transparent dark:stroke-muted"
      />
      <path d="M9 18h6" className="stroke-amber-600 dark:stroke-muted" />
      <path d="M10 22h4" className="stroke-amber-600 dark:stroke-muted" />
    </svg>
  );
}

export default function Navbar() {
  const stage = useStage();
  const { resolvedTheme, setTheme } = useTheme();
  const shown = stage === "settled";

  return (
    <motion.header
      inert={!shown}
      className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md"
      initial={{ y: -72, opacity: 0 }}
      animate={shown ? { y: 0, opacity: 1 } : { y: -72, opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <nav className="flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="font-semibold tracking-tight">
          Prikshit
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-2 hidden items-center gap-5 text-sm text-muted sm:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle light and dark theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="grid size-9 place-items-center rounded-full transition-colors hover:bg-card-hover"
          >
            <BulbIcon />
          </button>

          <HoverCard.Root openDelay={120} closeDelay={80}>
            <HoverCard.Trigger asChild>
              <Link
                href="/about"
                className="group flex flex-col items-center gap-0.5 rounded-lg px-1 py-1"
              >
                <span className="block size-9 overflow-hidden rounded-full border border-border bg-card transition-transform group-hover:scale-105">
                  <Image
                    src="/avatar.svg"
                    alt=""
                    width={72}
                    height={72}
                    className="size-full object-cover object-top"
                  />
                </span>
                <span className="text-[10px] font-medium uppercase leading-none tracking-wider text-muted transition-colors group-hover:text-foreground">
                  About
                </span>
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                side="bottom"
                align="end"
                sideOffset={10}
                className="z-50 w-64 rounded-xl border border-border bg-background p-4 text-foreground shadow-xl data-[state=open]:animate-[pop-in_0.18s_ease-out]"
              >
                <p className="font-medium">Hi, I&apos;m Prikshit.</p>
                <p className="mt-1 text-sm text-muted">
                  Software engineer. I build full-stack web apps with React,
                  Node and MongoDB, and I care about tests and speed.
                </p>
                <p className="mt-3 text-sm text-accent">Read more →</p>
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </nav>
    </motion.header>
  );
}
