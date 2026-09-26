import './ScrollProgress.css';

/** Port of Atlas `cinematic/ScrollProgress.astro`. Driven by `scripts/rail.ts` (`--cine-progress`). */
export function ScrollProgress({ label }: { label: string }) {
  return (
    <div
      className="cine-progress"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      data-cine-progress=""
    >
      <span className="cine-progress__bar" />
    </div>
  );
}
