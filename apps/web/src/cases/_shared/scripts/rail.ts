import { clamp, rafThrottle, reducedMotion, type Cleanup } from './motion';

// Chapter rail (right edge), reading progress bar (top) and ArrowLeft / ArrowRight chapter jumps.
// Port of Atlas `src/scripts/cinematic/rail.ts`; the only change is the returned cleanup.

const IGNORE_KEYS_IN =
  'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="slider"], [role="tablist"], [role="menu"], [popover]';

export function initChapterRail(): Cleanup {
  const rail = document.querySelector<HTMLElement>('[data-cine-rail]');
  const progress = document.querySelector<HTMLElement>('[data-cine-progress]');
  const links = rail ? Array.from(rail.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) : [];
  const chapters = links
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter((el): el is HTMLElement => el !== null);

  let current = -1;
  let percent = -1;

  const currentIndex = () => {
    const line = window.innerHeight * 0.35;
    let index = 0;
    chapters.forEach((chapter, i) => {
      if (chapter.getBoundingClientRect().top <= line) index = i;
    });
    return index;
  };

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0;
    if (progress) {
      progress.style.setProperty('--cine-progress', ratio.toFixed(4));
      const nextPercent = Math.round(ratio * 100);
      if (nextPercent !== percent) {
        percent = nextPercent;
        progress.setAttribute('aria-valuenow', String(percent));
      }
    }
    if (!chapters.length) return;
    const index = currentIndex();
    if (index === current) return;
    current = index;
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const onScroll = rafThrottle(update);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    // The shortcut exists only while the rail is on screen (wide viewports); otherwise arrows keep their native job.
    if (!rail || getComputedStyle(rail).display === 'none') return;
    const target = event.target as Element | null;
    if (target instanceof Element && target.closest(IGNORE_KEYS_IN)) return;

    event.preventDefault();
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const next = chapters[clamp(currentIndex() + step, 0, chapters.length - 1)];
    if (!next) return;
    next.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    // Move focus along so keyboard and screen-reader users continue reading from the new chapter.
    if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '-1');
    next.focus({ preventScroll: true });
  };
  if (chapters.length) document.addEventListener('keydown', onKeyDown);

  return () => {
    onScroll.cancel();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    document.removeEventListener('keydown', onKeyDown);
  };
}
