import Image from 'next/image';
import { cx } from '../_shared/cx';
import men from './assets/category-men.webp';
import unisex from './assets/category-unisex.webp';
import women from './assets/category-women.webp';
import storefront from './assets/storefront.webp';
import type { MolecionCopy } from './i18n';
import './ShopFront.css';

const tiles = [men, women, unisex];

/**
 * Port of Atlas `cases/molecion/ShopFront.astro`.
 * The client's own storefront imagery, framed on the paper surface: the opening screen the shop leads with and
 * its three category tiles. These are the brand's real assets, not sample data, so the caption says so.
 * Atlas `astro:assets` `<Image widths=…>` → `next/image` with the same `sizes` (Next picks the widths).
 */
export function ShopFront({ t, className }: { t: MolecionCopy; className?: string }) {
  const shot = t.product.shot;
  return (
    <figure className={cx('mo-shot', className)}>
      <div className="mo-shot__frame">
        <Image
          src={storefront}
          alt={shot.alt}
          sizes="(min-width: 1440px) 1216px, (min-width: 1024px) 88vw, (min-width: 768px) 92vw, 94vw"
          loading="lazy"
          decoding="async"
          className="mo-shot__img"
        />
      </div>

      <ul className="mo-shot__cats">
        {shot.categories.map((category, index) => (
          <li key={category.label} className="mo-shot__cat">
            <Image
              src={tiles[index] ?? men}
              alt={category.alt}
              sizes="(min-width: 1440px) 400px, (min-width: 768px) 30vw, 94vw"
              loading="lazy"
              decoding="async"
              className="mo-shot__img"
            />
            <span className="mo-shot__catlabel">{category.label}</span>
          </li>
        ))}
      </ul>

      <figcaption className="mo-shot__cap">{shot.caption}</figcaption>
    </figure>
  );
}
