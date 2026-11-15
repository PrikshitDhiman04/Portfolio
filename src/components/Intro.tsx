"use client";
import { useEffect, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import Bulb from "@/components/bulb";
import Avatar from "@/components/Avatar";
import {
  FLICKER,
  FLICKER_TRANSITION,
  isLit,
  type Phase,
} from "@/components/lightPhase";
import { StageProvider } from "@/components/StageContext";

export default function Intro({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("dropping");
  const [fast, setFast] = useState(false); // true after "skip"
  const isOpen = phase === "open";
  const showSkip = !isOpen && phase !== "done";
  const lightsOpening = phase === "done" || phase === "open";


  const radius = useMotionValue(-150);
  const mask = useMotionTemplate`radial-gradient(circle at 50% 38%, transparent ${radius}px, black calc(${radius}px + 150px))`;

  // open the room: normal speed, or quick if skipped
  useEffect(() => {
    if (phase !== "done") return;
    const controls = animate(
      radius,
      Math.hypot(window.innerWidth, window.innerHeight),
      {
        duration: fast ? 0.7 : 1.6,
        ease: [0.4, 0, 0.2, 1],
        onComplete: () => setPhase("open"),
      },
    );
    return () => controls.stop();
  }, [phase, radius, fast]);

  // no scrolling behind the dark room
  useEffect(() => {
    document.body.style.overflow = isOpen ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const skip = () => {
    setFast(true);
    setPhase("done"); // lights the bulb, then the room opens
  };

  return (
    <>
      <div inert={!isOpen}>
        <StageProvider open={lightsOpening}>{children}</StageProvider>
        {children}
      </div>

      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-[#050505] text-white shadow-[inset_0_0_250px_rgba(255,150,50,0.27)]"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        >
          <div className="fixed top-0 left-0 z-20 h-(--bar-h) w-full border-b-2 border-[#3d2615] bg-[linear-gradient(#2e1c0f,#1a0f07)] shadow-[0_8px_30px_rgba(0,0,0,0.8)]" />

          <motion.div
            className="pointer-events-none fixed inset-0 z-0 shadow-[inset_0_0_300px_rgba(255,170,60,0.5)] bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,170,60,0.16),transparent_65%)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "flickering" ? FLICKER : isLit(phase) ? 1 : 0,
            }}
            transition={FLICKER_TRANSITION}
          />

          <Bulb phase={phase} setPhase={setPhase} />
          <Avatar phase={phase} setPhase={setPhase} />

          <div className="fixed bottom-0 left-0 z-20 h-(--bar-h) w-full border-t-2 border-[#3d2615] bg-[linear-gradient(#1a0f07,#2e1c0f)] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]" />
        </motion.div>
      )}

      {/* skip button: outside the masked room, above everything */}
      {showSkip && (
        <motion.button
          type="button"
          onClick={skip}
          className="fixed right-4 top-[calc(var(--bar-h)+0.75rem)] z-60 rounded-full border border-[#ffd27a]/30 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#ffd27a]/70 transition-colors hover:border-[#ffd27a]/70 hover:text-[#ffd27a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd27a] sm:right-6 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Skip intro →
        </motion.button>
      )}
    </>
  );
}
