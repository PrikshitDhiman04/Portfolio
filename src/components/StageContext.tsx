"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Stage = "closed" | "name" | "settled";

const StageContext = createContext<Stage>("closed");
export const useStage = () => useContext(StageContext);

// how long after the light starts opening before the name rises
const NAME_HOLD_MS = 2200;

export function StageProvider({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setSettled(true), NAME_HOLD_MS);
    return () => clearTimeout(t);
  }, [open]);

  const stage: Stage = !open ? "closed" : settled ? "settled" : "name";
  return (
    <StageContext.Provider value={stage}>{children}</StageContext.Provider>
  );
}
