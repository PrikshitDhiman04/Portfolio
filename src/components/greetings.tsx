"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// import { playSound } from "@/lib/sounds";

const LINES = [
  "*yawn* ...Finally. I was getting bored in the dark.",
  "Welcome aboard!",
];

export default function Greeting({ onDone }: { onDone: () => void }) {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);


  useEffect(() => {
    const text = LINES[line];

    if (chars < text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 35);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (line < LINES.length - 1) {
        setLine((l) => l + 1);
        setChars(0);
      } else {
        onDone();
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [line, chars, onDone]);

  return (
    <motion.div
      className="relative w-[min(13rem,58vw)] shrink-0 origin-bottom rounded-2xl bg-[#f3e3c0] px-4 py-3 text-xs font-medium text-[#2a1a0d] shadow-[0_0_30px_rgba(255,170,60,0.35)] sm:text-sm"
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <p className="relative">
        {/* invisible full line reserves the final size */}
        <span className="invisible">{LINES[line]}</span>
        <span className="absolute inset-0">
          {LINES[line].slice(0, chars)}
          <span className="animate-pulse">|</span>
        </span>
      </p>
      {/* tail pointing down at his head */}
      <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#f3e3c0]" />
    </motion.div>
  );
}
