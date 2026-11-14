"use client";
import type { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { isLit, type Phase } from "@/components/lightPhase";
import Greeting from "@/components/greetings";

const ZS = [
  { size: "text-xl", delay: 0 },
  { size: "text-2xl", delay: 1 },
  { size: "text-4xl", delay: 2 },
];

type Props = {
  phase: Phase;
  setPhase: Dispatch<SetStateAction<Phase>>;
};

export default function Avatar({ phase, setPhase }: Props) {
  const isUp = isLit(phase);
  const isSleeping = phase === "dropping" || phase === "waiting";

  return (
    <div className="pointer-events-none fixed bottom-0 right-[14vw] z-10">
      {/* Zzz */}
      <AnimatePresence>
        {isSleeping && (
          <motion.div
            key="zzz"
            className="absolute bottom-[8vh] left-1/2"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {ZS.map((z, i) => (
              <motion.span
                key={i}
                className={`absolute font-bold text-[#ffd27a] ${z.size}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0.8, 0],
                  x: [0, 16],
                  y: [0, -150],
                  scale: [0.6, 1.4],
                }}
                transition={{
                  duration: 3,
                  delay: z.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Z
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* greeting bubble */}
      <AnimatePresence>
        {phase === "greeting" && (
          <Greeting key="greeting" onDone={() => setPhase("done")} />
        )}
      </AnimatePresence>

      {/* avatar */}
      <motion.div
        initial={{ y: "100%", filter: "brightness(0.2)" }}
        animate={
          isUp
            ? { y: 0, filter: "brightness(1)" }
            : { y: "100%", filter: "brightness(0.2)" }
        }
        transition={{
          y: { duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
          filter: { duration: 1.6, delay: 0.8 },
        }}
        onAnimationComplete={() =>
          setPhase((p) => (p === "on" ? "greeting" : p))
        }
      >
        <Image
          src="/avatar.svg"
          alt="My avatar"
          width={400}
          height={400}
          className="h-[34vh] w-auto"
          priority
        />
      </motion.div>
    </div>
  );
}
