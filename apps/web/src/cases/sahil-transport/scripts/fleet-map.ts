import { createCleanup, listen, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';
import { MAP_H, MAP_W, pointAt, project, roads, trackOf, truckDistance, zones } from './geo';

// Hero map of the Sahil Transport case: trucks drive the Absheron roads as comets, waiting zones pulse and GPS pings
// ripple out. The base map is SVG (complete without JS); this canvas only adds motion on top. Paused off screen and in
// background tabs, DPR capped at 2, never started with reduced motion.
// Port of Atlas `src/scripts/cases/sahil-transport/fleet-map.ts`; the only change is that setup returns a cleanup
// (rAF, observers, listeners, idle/load callbacks) that also restores the server-rendered frame (`data-st-live`).

function setup(root: HTMLElement): Cleanup {
  const canvas = root.querySelector<HTMLCanvasElement>('canvas[data-st-fleet]');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return () => {};

  const css = getComputedStyle(root);
  const color = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;
  const green = color('--cine-green', '#38d996');
  const accent = color('--cine-accent', '#ff8a1f');
  const head = color('--cine-white', '#f3eee2');

  const tracks = roads.map(trackOf);
  const waitingZones = zones.filter((zone) => zone.waiting).map((zone) => ({ at: project(zone.at), r: zone.r }));

  let width = 0;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let running = false;
  let onScreen = false;
  let frame = 0;
  const start = performance.now();

  const layout = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    // Same fit as the SVG (xMidYMid meet).
    scale = Math.min(w / MAP_W, h / MAP_H);
    offsetX = (w - MAP_W * scale) / 2;
    offsetY = (h - MAP_H * scale) / 2;
    width = w;
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * offsetX, dpr * offsetY);
    return true;
  };

  const draw = (now: number) => {
    const t = (now - start) / 1000;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Waiting zones: a slow ring expanding from the geofence edge.
    waitingZones.forEach((zone, i) => {
      const k = (((t * 0.45 + i * 0.33) % 1) + 1) % 1;
      ctx.beginPath();
      ctx.arc(zone.at[0], zone.at[1], zone.r + k * 16, 0, Math.PI * 2);
      ctx.strokeStyle = accent;
      ctx.globalAlpha = (1 - k) * 0.55;
      ctx.lineWidth = 1.4 / scale;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;

    // Moving trucks as comets.
    tracks.forEach((track, ri) => {
      for (let i = 0; i < track.trucks; i++) {
        const raw = truckDistance(track, ri, i, t);
        const d = ((raw % track.total) + track.total) % track.total;
        const back = i % 2 ? 1 : -1;
        // Keep the tail on the same lap (no streak across the map) and fade in/out at the road ends.
        const tail = Math.min(track.total, Math.max(0, d + back * 30));
        const fade = Math.min(1, d / 24, (track.total - d) / 24);
        const [hx, hy] = pointAt(track, d);
        const [tx, ty] = pointAt(track, tail);
        ctx.globalAlpha = fade;
        const gradient = ctx.createLinearGradient(tx, ty, hx, hy);
        gradient.addColorStop(0, 'rgba(56, 217, 150, 0)');
        gradient.addColorStop(1, green);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();

        // GPS ping: every few seconds a ring leaves the truck.
        const ping = (t * 0.5 + ri * 0.21 + i * 0.37) % 1;
        if (ping < 0.35) {
          ctx.beginPath();
          ctx.arc(hx, hy, 5 + (ping / 0.35) * 12, 0, Math.PI * 2);
          ctx.strokeStyle = green;
          ctx.globalAlpha = (1 - ping / 0.35) * 0.45 * fade;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = fade;
        }

        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, Math.PI * 2);
        ctx.fillStyle = head;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(hx, hy, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = green;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    });
  };

  const loop = (now: number) => {
    frame = 0;
    if (!running) return;
    draw(now);
    frame = requestAnimationFrame(loop);
  };

  const sync = () => {
    const shouldRun = onScreen && document.visibilityState === 'visible' && width > 0;
    if (shouldRun && !running) {
      running = true;
      // A frame still pending from before a pause simply continues the loop (no second chain).
      if (!frame) frame = requestAnimationFrame(loop);
    } else if (!shouldRun) {
      running = false;
    }
  };

  if (!layout()) return () => {};
  const cleanup = createCleanup();
  root.toggleAttribute('data-st-live', true);
  draw(performance.now());

  let resizeTimer = 0;
  const resize = new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (layout()) draw(performance.now());
      sync();
    }, 120);
  });
  resize.observe(canvas);

  cleanup.add(
    watchVisibility(canvas, (visible) => {
      onScreen = visible;
      sync();
    }),
  );
  cleanup.add(listen(document, 'visibilitychange', sync));
  cleanup.add(() => {
    resize.disconnect();
    window.clearTimeout(resizeTimer);
    running = false;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    // Back to the server-rendered frame: SVG trucks, empty canvas.
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    root.removeAttribute('data-st-live');
  });
  return cleanup.run;
}

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function initFleetMaps(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  let disposed = false;
  // The hero canvas is the page's heaviest script; the SVG base map is already painted, so the first seconds
  // belong to the text and the LCP. Start drawing when the browser is idle (or shortly after load).
  const start = () => {
    if (disposed) return;
    document.querySelectorAll<HTMLElement>('[data-st-console]').forEach((root) => cleanup.add(setup(root)));
  };
  const win = window as IdleWindow;
  let idleHandle = 0;
  let timer = 0;
  const queue = () => {
    if (win.requestIdleCallback) idleHandle = win.requestIdleCallback(start, { timeout: 1500 });
    else timer = window.setTimeout(start, 400);
  };
  if (document.readyState === 'complete') queue();
  else cleanup.add(listen(window, 'load', queue, { once: true }));

  return () => {
    disposed = true;
    if (idleHandle) win.cancelIdleCallback?.(idleHandle);
    window.clearTimeout(timer);
    cleanup.run();
  };
}
