import type { ReactNode } from 'react';
import type { AccentPreset, RailItem } from '../types';
import { ChapterRail } from './ChapterRail';
import { CinematicEffects } from './CinematicEffects';
import { cx } from './cx';
import { caseFontVariables } from './fonts';
import { ScrollProgress } from './ScrollProgress';
import './styles/cinematic.css';
import './styles/aibaycan-theme.css';

export interface CinematicPageProps {
  /** Chapters shown on the right-edge rail (ids must exist on the page). Omit to hide the rail. */
  rail?: RailItem[];
  railLabel?: string;
  /** Accessible name of the top reading-progress bar. Omit to hide the bar. */
  progressLabel?: string;
  /** Accent preset (cinematic.css); default is orange. */
  accent?: AccentPreset;
  className?: string;
  children?: ReactNode;
}

/**
 * Port of Atlas `cinematic/CinematicPage.astro`: the `.cine` root (kit tokens, fonts, accent), progress bar,
 * content, rail, and the kit's client scripts.
 */
export function CinematicPage({ rail, railLabel = 'Chapters', progressLabel, accent, className, children }: CinematicPageProps) {
  return (
    <div className={cx('cine', caseFontVariables, className)} data-accent={accent}>
      {progressLabel && <ScrollProgress label={progressLabel} />}
      {children}
      {/* After the content: the rail is fixed-position, so keyboard users reach the page before the rail links. */}
      {rail && rail.length > 0 && <ChapterRail items={rail} label={railLabel} />}
      <CinematicEffects />
    </div>
  );
}
