const cache: Record<string, HTMLAudioElement> = {};

function getAudio(name: string) {
  if (typeof window === "undefined") return null; // no Audio on the server
  if (!cache[name]) {
    const a = new Audio(`/sounds/${name}.mp3`);
    a.preload = "auto";
    cache[name] = a;
  }
  return cache[name];
}

export function playSound(name: string, volume = 1) {
  const a = getAudio(name);
  if (!a) return;
  a.muted = false; // new: never play while muted
  a.volume = volume;
  a.currentTime = 0;
  a.play().catch((e) => console.warn("sound failed:", name, e));
}

// iPhones only allow sounds that start from a tap,
// so "warm up" a later sound during the tap itself
export function unlockSound(name: string) {
  const a = getAudio(name);
  if (!a) return;
  a.muted = true;
  a.play()
    .then(() => {
      a.pause();
      a.currentTime = 0;
      a.muted = false;
    })
    .catch(() => {
      a.muted = false;
    });
}
