import { createCleanup, reducedMotion, type Cleanup } from '../../_shared/scripts/motion';

// AI assistant chapter. Markup: each step holds its copy and its chat scene (readable without JS and on phones).
// From `lg`, with motion allowed, the scenes move into one sticky chat "stage"; the step crossing the middle of the
// viewport decides which scene is shown, and its bubbles arrive one by one.
// Port of Atlas `src/scripts/cases/cavably/ai-story.ts`; cleanup moves the scenes home and restores step 1 as active.

function setup(root: HTMLElement): Cleanup {
  const stage = root.querySelector<HTMLElement>('[data-cav-ai-stage]');
  const pipsRow = stage?.firstElementChild ?? null;
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-cav-ai-step]'));
  const scenes = Array.from(root.querySelectorAll<HTMLElement>('[data-cav-ai-scene]'));
  const pips = Array.from(root.querySelectorAll<HTMLElement>('[data-cav-ai-pip]'));
  if (!stage || !steps.length || steps.length !== scenes.length) return () => {};

  const homes = scenes.map((scene) => scene.parentElement);
  const wide = window.matchMedia('(min-width: 1024px)');
  let observer: IntersectionObserver | undefined;
  let active = 0;

  const activate = (index: number) => {
    if (index < 0) return;
    active = index;
    for (const group of [steps, scenes, pips]) group.forEach((el, i) => el.toggleAttribute('data-active', i === index));
  };

  const enter = () => {
    if (root.dataset.mode === 'stage') return;
    root.dataset.mode = 'stage';
    scenes.forEach((scene) => stage.insertBefore(scene, pipsRow));
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) activate(steps.indexOf(entry.target as HTMLElement));
      },
      { rootMargin: '-48% 0px -48% 0px' },
    );
    steps.forEach((step) => observer?.observe(step));
    activate(active);
  };

  const leave = () => {
    if (root.dataset.mode !== 'stage') return;
    delete root.dataset.mode;
    observer?.disconnect();
    observer = undefined;
    scenes.forEach((scene, i) => homes[i]?.append(scene));
  };

  const sync = () => (wide.matches ? enter() : leave());
  sync();
  wide.addEventListener('change', sync);

  return () => {
    wide.removeEventListener('change', sync);
    leave();
    activate(0);
  };
}

export function initAiStory(): Cleanup {
  const cleanup = createCleanup();
  if (reducedMotion() || !('IntersectionObserver' in window)) return cleanup.run;
  document.querySelectorAll<HTMLElement>('[data-cav-ai]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
