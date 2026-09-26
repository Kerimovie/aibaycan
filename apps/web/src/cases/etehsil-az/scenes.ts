import {
  createCleanup,
  rafThrottle,
  reducedMotion,
  visibleInterval,
  watchVisibility,
  type Cleanup,
} from '../_shared/scripts/motion';

// Scene sequencer of the eTəhsil case page. Port of Atlas `src/scripts/cases/etehsil/scenes.ts`; the only change is
// that every setup returns a cleanup (timers, observers, listeners) and cleanup restores the server-rendered frame.
//
// A scene is `[data-et-scene]` with `data-et-phases` (how many phases) and `data-et-tempo` (milliseconds per phase,
// space separated; the last value repeats). Parts inside it carry `data-et-at="k"` (on from phase k) and/or
// `data-et-until="k"` (on before phase k); the script toggles `data-et-on` on them and mirrors the phase in
// `data-et-phase`, and CSS decides what that looks like. A running scene also gets `data-et-live`.
//
// The server renders every scene in its LAST phase, so the markup is complete without JavaScript and stays that way
// under `prefers-reduced-motion`. Scenes only run while on screen and while the tab is visible.
//
// `data-et-drive="steps"`: from `lg` up, the phase follows the reader instead of a timer. Elements
// `[data-et-step="k"]` in the same chapter set phase k once their top passes the middle of the viewport.

interface Part {
  el: HTMLElement;
  at: number;
  until: number;
}

function setupScene(el: HTMLElement): Cleanup {
  const count = Number(el.dataset.etPhases) || 1;
  const tempo = (el.dataset.etTempo ?? '1600').split(/\s+/).map(Number);
  const parts: Part[] = Array.from(el.querySelectorAll<HTMLElement>('[data-et-at], [data-et-until]')).map((part) => ({
    el: part,
    at: part.dataset.etAt ? Number(part.dataset.etAt) : 0,
    until: part.dataset.etUntil ? Number(part.dataset.etUntil) : Infinity,
  }));

  let phase = count - 1;
  const apply = (next: number) => {
    phase = next;
    el.dataset.etPhase = String(next);
    for (const part of parts) part.el.toggleAttribute('data-et-on', next >= part.at && next < part.until);
  };

  // ---- Timer drive ----
  let timer = 0;
  let onScreen = false;
  let started = false;
  const stop = () => {
    window.clearTimeout(timer);
    timer = 0;
  };
  const schedule = () => {
    stop();
    const delay = tempo[Math.min(phase, tempo.length - 1)] ?? 1600;
    timer = window.setTimeout(() => {
      apply((phase + 1) % count);
      schedule();
    }, delay);
  };
  const syncTimer = () => {
    const run = onScreen && document.visibilityState === 'visible' && mode === 'time';
    if (run && !timer) {
      if (!started) {
        started = true;
        el.setAttribute('data-et-live', '');
        apply(0);
      }
      schedule();
    } else if (!run) stop();
  };

  // ---- Steps drive (lg and up) ----
  const section = el.closest('section');
  const steps = section ? Array.from(section.querySelectorAll<HTMLElement>('[data-et-step]')) : [];
  const firstStep = Number(steps[0]?.dataset.etStep ?? 0);
  const wide = window.matchMedia('(min-width: 1024px)');
  let mode: 'time' | 'steps' = el.dataset.etDrive === 'steps' && steps.length && wide.matches ? 'steps' : 'time';
  let stopStepWatch: Cleanup | undefined;

  // The phase is the last step whose top has passed the middle of the viewport, so jumps (rail clicks) land right too.
  const readSteps = () => {
    const line = window.innerHeight * 0.55;
    let next = firstStep;
    for (const step of steps) if (step.getBoundingClientRect().top < line) next = Number(step.dataset.etStep);
    if (next !== phase) apply(next);
  };
  const onScroll = rafThrottle(readSteps);
  const startSteps = () => {
    started = true;
    el.setAttribute('data-et-live', '');
    apply(firstStep);
    let listening = false;
    const unwatch = watchVisibility(
      section ?? el,
      (visible) => {
        if (visible && !listening) {
          readSteps();
          window.addEventListener('scroll', onScroll, { passive: true });
          listening = true;
        } else if (!visible && listening) {
          window.removeEventListener('scroll', onScroll);
          listening = false;
        }
      },
      '100px 0px',
    );
    stopStepWatch = () => {
      unwatch();
      onScroll.cancel();
      window.removeEventListener('scroll', onScroll);
    };
  };
  const stopSteps = () => {
    stopStepWatch?.();
    stopStepWatch = undefined;
  };

  if (mode === 'steps') startSteps();
  const onWideChange = () => {
    const next = wide.matches ? 'steps' : 'time';
    if (next === mode) return;
    mode = next;
    if (mode === 'steps') {
      stop();
      startSteps();
    } else {
      stopSteps();
      syncTimer();
    }
  };
  const drivenBySteps = el.dataset.etDrive === 'steps' && steps.length > 0;
  if (drivenBySteps) wide.addEventListener('change', onWideChange);

  const unwatchScene = watchVisibility(el, (visible) => {
    onScreen = visible;
    syncTimer();
  });
  document.addEventListener('visibilitychange', syncTimer);

  return () => {
    stop();
    stopSteps();
    unwatchScene();
    document.removeEventListener('visibilitychange', syncTimer);
    if (drivenBySteps) wide.removeEventListener('change', onWideChange);
    // Back to the server-rendered last frame.
    apply(count - 1);
    el.removeAttribute('data-et-live');
  };
}

/** Exam countdown: `[data-et-countdown]` holds `mm:ss` text and ticks down while visible; its ring reads `--et-left`. */
function setupCountdown(el: HTMLElement): Cleanup {
  const text = el.querySelector<HTMLElement>('[data-et-clock]');
  if (!text) return () => {};
  const initial = text.textContent ?? '0:0';
  const [m = 0, s = 0] = initial.split(':').map(Number);
  const start = m * 60 + s;
  const total = Number(el.dataset.etCountdown) || start;
  let left = start;
  const paint = () => {
    text.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    el.style.setProperty('--et-left', (left / total).toFixed(4));
  };
  const stop = visibleInterval(
    el,
    () => {
      left = left > start - 300 ? left - 1 : start;
      paint();
    },
    1000,
  );
  return () => {
    stop();
    text.textContent = initial;
    el.style.removeProperty('--et-left');
  };
}

export function initEtehsilScenes(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-et-scene]').forEach((el) => cleanup.add(setupScene(el)));
  document.querySelectorAll<HTMLElement>('[data-et-countdown]').forEach((el) => cleanup.add(setupCountdown(el)));
  return cleanup.run;
}
