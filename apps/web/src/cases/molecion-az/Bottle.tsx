import { cx } from '../_shared/cx';
import './Bottle.css';

const geometry = {
  tall: {
    body: 'M22 34h20a6 6 0 0 1 6 6v40a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6Z',
    gloss: 'M21 38h3v44h-3z',
    label: { x: 22, y: 52, w: 20, h: 16 },
  },
  squat: {
    body: 'M18 42h28a8 8 0 0 1 8 8v30a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6V50a8 8 0 0 1 8-8Z',
    gloss: 'M16 47h3.5v38H16z',
    label: { x: 17, y: 57, w: 26, h: 15 },
  },
  tester: {
    body: 'M24 36h16a4 4 0 0 1 4 4v42a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4Z',
    gloss: 'M23 40h2.5v40H23z',
    label: { x: 24, y: 54, w: 16, h: 13 },
  },
};

/**
 * Port of Atlas `cases/molecion/Bottle.astro`.
 * A flacon drawn by hand — our own outline, never a photograph and never a render of a real bottle.
 * Glass is suggested with flat overlays rather than gradients, so the mark needs no `<defs>` and no unique id,
 * and it survives at 54 px inside the handset as well as at 96 px on a desktop tile.
 * Decorative: the scene around it owns the accessible label.
 * `tall` a 90/100 ml flacon · `squat` a 75 ml parfum · `tester` a plain cylinder with a collar.
 */
export function Bottle({ shape = 'tall', className }: { shape?: 'tall' | 'squat' | 'tester'; className?: string }) {
  const { body, gloss, label } = geometry[shape];
  return (
    <svg className={cx('mo-bottle', className)} viewBox="0 0 64 96" fill="none" aria-hidden="true">
      {/* The flacon stands on a soft ellipse rather than floating on the tile. */}
      <ellipse className="mo-bottle__shadow" cx="32" cy="88" rx="19" ry="3.2"></ellipse>

      {/* Glass: a filled body, a bright edge and one vertical highlight down the left shoulder. */}
      <path className="mo-bottle__glass" d={body}></path>
      <path className="mo-bottle__edge" d={body}></path>
      <path className="mo-bottle__gloss" d={gloss}></path>

      {/* The engraved label plate: a plane of the glass with two hairlines cut into it. */}
      <rect className="mo-bottle__plate" x={label.x} y={label.y} width={label.w} height={label.h} rx="2"></rect>
      <path className="mo-bottle__rule" d={`M${label.x + 3} ${label.y + 6}h${label.w - 6}`}></path>
      <path className="mo-bottle__rule" d={`M${label.x + 3} ${label.y + 10}h${Math.round((label.w - 6) * 0.6)}`}></path>

      {shape === 'tester' ? (
        <>
          <path className="mo-bottle__neck" d="M27 23h10v13h-10z" />
          <rect className="mo-bottle__collar" x="25.5" y="21" width="13" height="2.5" rx="1.25" />
          <rect className="mo-bottle__cap" x="26" y="13" width="12" height="8" rx="1.5" />
          <path className="mo-bottle__dash" d="M20 74h24" />
        </>
      ) : (
        <>
          <path className="mo-bottle__neck" d="M28 24h8v10h-8z" />
          <rect className="mo-bottle__collar" x="26" y="22" width="12" height="2.5" rx="1.25" />
          <rect className="mo-bottle__cap" x="24" y="9" width="16" height="13" rx="3" />
          <path className="mo-bottle__capline" d="M24 15.5h16" />
        </>
      )}
    </svg>
  );
}
