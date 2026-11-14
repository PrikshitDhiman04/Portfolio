"use client";
import {
  useState,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
} from "react";
import { motion } from "motion/react";
import Bulb from "@/components/bulb";
import { Phase, FLICKER, FLICKER_TRANSITION } from "@/components/lightPhase";
import Avatar from "@/components/Avatar";

const PhaseBulb = Bulb as ComponentType<{
  phase: Phase;
  setPhase: Dispatch<SetStateAction<Phase>>;
}>;

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("dropping");
  

  return (
    <main className="min-h-screen flex justify-center items-start bg-[#050505] text-white shadow-[inset_0_0_250px_rgba(255,150,50,0.27)]">
      {/* top bar */}
      <div className="fixed top-0 left-0 z-20 h-[8vh] w-full border-b-2 border-[#3d2615] bg-[linear-gradient(#2e1c0f,#1a0f07)] shadow-[0_8px_30px_rgba(0,0,0,0.8)]" />
      {/* room light: reacts to the bulb */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 shadow-[inset_0_0_300px_rgba(255,170,60,0.5)] bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,170,60,0.16),transparent_65%)]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "flickering" ? FLICKER : phase === "on" ? 1 : 0,
        }}
        transition={FLICKER_TRANSITION}
      />
      <PhaseBulb phase={phase} setPhase={setPhase} />
      <Avatar phase={phase} setPhase={setPhase} />;{/* bottom bar */}
      <div className="fixed bottom-0 left-0 z-20 h-[8vh] w-full border-t-2 border-[#3d2615] bg-[linear-gradient(#1a0f07,#2e1c0f)] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]" />
    </main>
  );
}
