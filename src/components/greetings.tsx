"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
      className="absolute top-[6vh] right-full mr-3 w-56 rounded-2xl bg-[#f3e3c0] px-4 py-3 text-sm font-medium text-[#2a1a0d] shadow-[0_0_30px_rgba(255,170,60,0.35)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {LINES[line].slice(0, chars)}
      <span className="animate-pulse">|</span>
      {/* tail pointing at him */}
      <div className="absolute -right-1.5 top-5 h-3 w-3 rotate-45 bg-[#f3e3c0]" />
    </motion.div>
  );
}
