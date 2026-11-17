import { PATHS, VIEWBOX } from "@/components/SignaturePath";

export default function SignatureName({ play }: { play: boolean }) {
  return (
    <svg
      viewBox={VIEWBOX}
      aria-hidden
      data-play={play}
      className="signature h-10 w-auto text-black sm:h-14 lg:h-16 dark:text-white"
    >
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinejoin="round"
      >
        {PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
