import { cx } from './cx';

/** Port of Atlas `cinematic/SampleDataNote.astro` (styles in cinematic.css). */
export function SampleDataNote({ text, className }: { text: string; className?: string }) {
  return <p className={cx('cine-note', className)}>{text}</p>;
}
