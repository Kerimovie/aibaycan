import { reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { createScope, loopWhileVisible, pulse, snapshotFrame } from './motion';

// Offline-first POS loop: online → the connection drops → waiters keep tapping and actions pile up in the
// sync queue → the connection returns → the queue drains, entry by entry, and empties.
// Port of Atlas `src/scripts/cases/foodost/pos.ts`; cleanup restores the server-rendered offline frame.

type Net = 'online' | 'offline' | 'syncing';
type EntryState = 'queued' | 'syncing' | 'synced';

function setup(root: HTMLElement): Cleanup {
  const list = root.querySelector<HTMLElement>('[data-fd-queue]');
  const card = list?.parentElement;
  const count = root.querySelector<HTMLElement>('[data-fd-queue-count]');
  const netLabel = root.querySelector<HTMLElement>('[data-fd-net-label]');
  const netPill = root.querySelector<HTMLElement>('[data-fd-net]');
  if (!list || !card || !count || !netLabel || !netPill) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(root));

  const entries = Array.from(list.children).filter((el): el is HTMLElement => el instanceof HTMLElement);
  const tiles = Array.from(root.querySelectorAll<HTMLElement>('[data-fd-tile]:not([data-sold-out])'));
  const netLabels: Record<Net, string> = {
    online: root.dataset.netOnline ?? '',
    offline: root.dataset.netOffline ?? '',
    syncing: root.dataset.netSyncing ?? '',
  };
  const stateLabels: Record<EntryState, string> = {
    queued: root.dataset.stateQueued ?? '',
    syncing: root.dataset.stateSyncing ?? '',
    synced: root.dataset.stateSynced ?? '',
  };

  const setNet = (net: Net) => {
    root.dataset.net = net;
    netLabel.textContent = netLabels[net];
    pulse(netPill, 1.08);
  };
  const setEntry = (entry: HTMLElement, state: EntryState) => {
    entry.dataset.state = state;
    const label = entry.querySelector('[data-fd-state]');
    if (label) label.textContent = stateLabels[state];
  };
  const updateCount = () => {
    const pending = entries.filter((entry) => !entry.hidden && entry.dataset.state !== 'synced').length;
    count.textContent = String(pending);
    count.toggleAttribute('data-zero', pending === 0);
    card.toggleAttribute('data-empty', entries.every((entry) => entry.hidden));
  };
  const tap = (tile: HTMLElement | undefined) => {
    if (!tile) return;
    tile.setAttribute('data-tap', '');
    pulse(tile, 0.95);
    scope.timeout(() => tile.removeAttribute('data-tap'), 450);
  };
  const add = (index: number) => {
    const entry = entries[index];
    if (!entry) return;
    setEntry(entry, 'queued');
    entry.hidden = false;
    entry.animate(
      [
        { opacity: 0, transform: 'translateX(14px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      { duration: 380, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
    );
    tap(tiles[(index * 2 + 1) % tiles.length]);
    updateCount();
  };
  const sync = (index: number) => {
    const entry = entries[index];
    if (!entry) return;
    setEntry(entry, 'syncing');
    scope.timeout(() => {
      setEntry(entry, 'synced');
      updateCount();
    }, 380);
  };
  const clear = () => {
    for (const entry of entries) {
      entry
        .animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320 })
        .finished.then(() => {
          if (!scope.alive) return;
          entry.hidden = true;
          updateCount();
        })
        .catch(() => {});
    }
  };

  setNet('online');
  entries.forEach((entry) => {
    entry.hidden = true;
    setEntry(entry, 'queued');
  });
  updateCount();

  scope.add(
    loopWhileVisible(root, [
      [1600, () => setNet('offline')],
      [900, () => add(0)],
      [1100, () => add(1)],
      [1100, () => add(2)],
      [1100, () => add(3)],
      [1800, () => setNet('syncing')],
      [700, () => sync(0)],
      [450, () => sync(1)],
      [450, () => sync(2)],
      [450, () => sync(3)],
      [900, () => setNet('online')],
      [1600, clear],
    ]),
  );
  return scope.dispose;
}

export function initPos(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-pos]'), setup);
  return () => cleanups.forEach((fn) => fn());
}
