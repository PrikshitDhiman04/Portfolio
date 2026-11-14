export type Phase =
  | "dropping"
  | "waiting"
  | "flickering"
  | "on"
  | "greeting"
  | "done";

export const isLit = (p: Phase) =>
  p === "on" || p === "greeting" || p === "done";

export const FLICKER = [0, 1, 0.2, 0.9, 0, 1, 0.4, 1];
export const FLICKER_TRANSITION = { duration: 0.6, delay: 0.15 };
