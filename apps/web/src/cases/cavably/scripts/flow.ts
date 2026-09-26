import { createCleanup, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';
import { cancelAnimations, snapshotAttributes } from './restore';

// Flow builder: the simulator plays one sample message at a time. A pulse travels along the canvas edges, each node
// lights up as it runs and its step ticks in the simulator. Without JS the first run is shown complete.
// Port of Atlas `src/scripts/cases/cavably/flow.ts`; cleanup stops the timers and restores the first run's frame.

interface Run {
  nodes: string[];
  edges: number[];
  branch: number;
}

const STEP_MS = 900;
const HOLD_MS = 2200;

function isRuns(value: unknown): value is Run[] {
  return Array.isArray(value);
}

function setup(root: HTMLElement): Cleanup {
  let runs: Run[];
  try {
    const parsed: unknown = JSON.parse(root.dataset.runs ?? '[]');
    if (!isRuns(parsed)) return () => {};
    runs = parsed;
  } catch {
    return () => {};
  }
  if (!runs.length) return () => {};

  const q = <T extends Element>(selector: string) => Array.from(root.querySelectorAll<T>(selector));
  const nodes = q<HTMLElement>('[data-node]');
  const edges = q<SVGGElement>('[data-edge]');
  const branches = q<HTMLElement>('[data-branch]');
  const panels = q<HTMLElement>('[data-run]');
  const restoreFrame = snapshotAttributes(root, ['data-lit', 'data-done', 'data-active']);

  let timers: number[] = [];
  let runIndex = 0;
  let playing = false;

  const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
  const clearAll = () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers = [];
  };
  const reset = () => {
    [...nodes, ...edges, ...branches].forEach((el) => el.removeAttribute('data-lit'));
    q<HTMLElement>('[data-run] li').forEach((li) => li.removeAttribute('data-done'));
  };

  const play = () => {
    const run = runs[runIndex];
    if (!run) return;
    const panel = panels[runIndex];
    reset();
    panels.forEach((p, i) => p.toggleAttribute('data-active', i === runIndex));
    const steps = panel ? Array.from(panel.querySelectorAll<HTMLElement>('li')) : [];

    run.nodes.forEach((id, k) => {
      const at = 400 + k * STEP_MS;
      if (k > 0) {
        const edge = edges[run.edges[k - 1] ?? -1];
        later(() => {
          edge?.setAttribute('data-lit', '');
          if (k === 2) branches[run.branch]?.setAttribute('data-lit', '');
          edge
            ?.querySelector('.cav-flow__pulse')
            ?.animate([{ strokeDashoffset: 10 }, { strokeDashoffset: -100 }], { duration: STEP_MS * 0.8, easing: 'ease-in-out' });
        }, at - STEP_MS * 0.85);
      }
      later(() => {
        const node = nodes.find((n) => n.dataset.node === id);
        node?.setAttribute('data-lit', '');
        node?.animate([{ scale: '0.96' }, { scale: '1' }], { duration: 300, easing: 'ease-out' });
        steps[k]?.setAttribute('data-done', '');
      }, at);
    });

    later(
      () => {
        runIndex = (runIndex + 1) % runs.length;
        play();
      },
      400 + run.nodes.length * STEP_MS + HOLD_MS,
    );
  };

  let onScreen = false;
  const sync = () => {
    const run = onScreen && document.visibilityState === 'visible';
    if (run && !playing) {
      playing = true;
      play();
    } else if (!run && playing) {
      playing = false;
      clearAll();
    }
  };
  const unwatch = watchVisibility(root, (visible) => {
    onScreen = visible;
    sync();
  });
  document.addEventListener('visibilitychange', sync);

  return () => {
    unwatch();
    document.removeEventListener('visibilitychange', sync);
    clearAll();
    cancelAnimations([root], true);
    restoreFrame();
  };
}

export function initFlowBuilder(): Cleanup {
  const cleanup = createCleanup();
  if (reducedMotion()) return cleanup.run;
  document.querySelectorAll<HTMLElement>('[data-cav-flow]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
