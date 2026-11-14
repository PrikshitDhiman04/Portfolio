"use client";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FLICKER,
  FLICKER_TRANSITION,
  type Phase,
} from "@/components/lightPhase";
import { playSound, unlockSound } from "@/lib/sounds";


type Props = {
  phase: Phase;
  setPhase: Dispatch<SetStateAction<Phase>>;
};
const SWING = Array.from({ length: 80 }, (_, i) => {
  const t = i / 79; // 0 → 1 over the whole animation
  return 3 * Math.exp(-2 * t) * Math.sin(t * Math.PI * 2 * 3) * (1 - t);
});

export default function Bulb({ phase, setPhase }: Props) {
  const handleClick = () => {
    if (phase !== "waiting") return;
    playSound("bulb");
    
    setPhase("flickering");
  };

  return (
    <motion.div
      onAnimationComplete={() =>
        setPhase((p) => (p === "dropping" ? "waiting" : p))
      }
      className="flex flex-col items-center origin-top"
      initial={{ y: "-100%", rotate: 0 }}
      animate={{ y: 0, rotate: SWING }}
      transition={{
        y: { duration: 2.1, ease: [0.4, 0, 0.2, 1] },
        rotate: { duration: 3, ease: "linear" },
      }}
    >
      <motion.div
        className="flex flex-col items-center origin-top"
        animate={{ rotate: phase === "flickering" ? [0, 2.5, -1.5, 0] : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* wire */}
        <div className="h-[calc(190px+8vh)] w-1.5 border-x border-[#8d94a0]/60" />

        {/* bulb */}
        <svg
          onClick={handleClick}
          viewBox="100 187 180 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-(--bulb-w) -mt-px origin-top overflow-visible transition-all duration-300 ${
            phase === "waiting"
              ? "cursor-pointer hover:scale-105 hover:filter-[drop-shadow(0_0_14px_rgba(255,190,90,0.55))]"
              : ""
          }`}
        >
          <AnimatePresence>
            {phase === "waiting" && (
              <motion.p
                key="hint"
                className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#ffd27a]/70 sm:text-xs"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, duration: 0.8 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <span className="animate-pulse">switch me on</span>
              </motion.p>
            )}
          </AnimatePresence>

          <g id="Frame">
            <path
              id="Socket / Strain relief"
              opacity="0.55"
              d="M187 187.8H193L197 205.8H183L187 187.8Z"
              fill="#343944"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9299A5"
            />
            <path
              id="Socket / Brass housing"
              opacity="0.92"
              d="M174 203.8H206C208.667 203.8 210 206.133 210 210.8V219.8C215.333 223.133 218 227.133 218 231.8V256.8C218 261.467 215.667 263.8 211 263.8H169C164.333 263.8 162 261.467 162 256.8V231.8C162 227.133 164.667 223.133 170 219.8V210.8C170 206.133 171.333 203.8 174 203.8Z"
              fill="url(#paint0_linear_5_2)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#C3AB80"
            />
            <path
              id="Socket / Edge glint"
              opacity="0.55"
              d="M169 232.8V256.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#F0DBB0"
            />
            <path
              id="Socket / Lower lip"
              d="M162 258.8C162 262.133 163.667 263.8 167 263.8H213C216.333 263.8 218 262.133 218 258.8H162Z"
              fill="#776046"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#C7AD80"
            />
            <path
              id="Glass / Envelope"
              opacity="0.51"
              d="M177 263.8C168.716 263.8 162 270.516 162 278.8V283.8C162 302.8 147 312.8 135 331.8C126 345.8 122 360.8 122 376.8C122 415.8 151 443.8 190 443.8C229 443.8 258 415.8 258 376.8C258 360.8 254 345.8 245 331.8C233 312.8 218 302.8 218 283.8V278.8C218 270.516 211.284 263.8 203 263.8H177Z"
              fill="url(#paint1_linear_5_2)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#A8B7CA"
            />
            <path
              id="Socket / Lower seam"
              d="M163 252.8H217"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#4E3D2D"
            />
            <path
              id="Socket / Upper seam"
              d="M163 229.8H217"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E4CEA1"
            />
            <path
              id="Socket / Machined bands"
              d="M163 237.8L217 233.8M163 245.8L217 241.8M163 253.8L217 249.8"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#66513A"
            />
            <path
              id="Glass / Neck reflection"
              opacity="0.45"
              d="M171 270.8V287.8"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E2ECF8"
            />
            <path
              id="Filament / Tungsten loop"
              opacity="0.59"
              d="M180 274.8V305.8C180 316.8 165 322.8 165 345.8V362.8C165 374.8 179 374.8 179 362.8C179 353.8 173 354.8 173 363.8C173 374.8 193 374.8 193 362.8C193 353.8 187 354.8 187 363.8C187 374.8 207 374.8 207 362.8C207 353.8 201 354.8 201 363.8C201 374.8 215 374.8 215 362.8V345.8C215 322.8 200 316.8 200 305.8V274.8"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#838D9D"
            />
            <motion.g
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  phase === "flickering" ? FLICKER : phase === "on" ? 1 : 0,
              }}
              transition={FLICKER_TRANSITION}
              onAnimationComplete={() =>
                setPhase((p) => (p === "flickering" ? "on" : p))
              }
              style={{ filter: "drop-shadow(0 0 8px rgba(255,170,50,0.9))" }}
            >
              {/* bright glass */}
              <path
                d="M177 263.8C168.716 263.8 162 270.516 162 278.8V283.8C162 302.8 147 312.8 135 331.8C126 345.8 122 360.8 122 376.8C122 415.8 151 443.8 190 443.8C229 443.8 258 415.8 258 376.8C258 360.8 254 345.8 245 331.8C233 312.8 218 302.8 218 283.8V278.8C218 270.516 211.284 263.8 203 263.8H177Z"
                fill="#FFB84D"
                fillOpacity="0.25"
                stroke="#FFD27A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* bright filament */}
              <path
                d="M180 274.8V305.8C180 316.8 165 322.8 165 345.8V362.8C165 374.8 179 374.8 179 362.8C179 353.8 173 354.8 173 363.8C173 374.8 193 374.8 193 362.8C193 353.8 187 354.8 187 363.8C187 374.8 207 374.8 207 362.8C207 353.8 201 354.8 201 363.8C201 374.8 215 374.8 215 362.8V345.8C215 322.8 200 316.8 200 305.8V274.8"
                stroke="#FFD27A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>

            <path
              id="Cord / Top cap"
              d="M187 0.799988H193"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#A5ADB9"
            />
            <path
              id="Glass / Long reflection"
              opacity="0.55"
              d="M147 339.8C138 350.8 135 363.8 135 376.8C135 383.8 136 388.8 138 393.8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E2ECF8"
            />
            <path
              id="Glass / Short reflection"
              opacity="0.28"
              d="M244 361.8C246 369.133 246 376.467 244 383.8"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CFDFF4"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5_2"
              x1="190"
              y1="203.8"
              x2="190"
              y2="263.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B4531" />
              <stop offset="0.22" stopColor="#A58A5D" />
              <stop offset="0.42" stopColor="#D8C39A" />
              <stop offset="0.58" stopColor="#A68B60" />
              <stop offset="1" stopColor="#58442F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5_2"
              x1="190"
              y1="263.8"
              x2="190"
              y2="443.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D7E6FA" stopOpacity="0.1" />
              <stop offset="0.32" stopColor="#93A7C4" stopOpacity="0.025" />
              <stop offset="0.72" stopColor="#93A7C4" stopOpacity="0.015" />
              <stop offset="1" stopColor="#D7E6FA" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
