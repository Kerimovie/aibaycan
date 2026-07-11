'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Homepage "cinematic" v2 effektləri (orijinal dizayn brifindən):
 * sticky header, scroll-reveal, cursor-glow, parallax, scroll-progress,
 * project badge/spotlight, magnetic buttons, count-up. reduced-motion-a hörmət.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer:fine)').matches;
    const cleanups: Array<() => void> = [];

    // Sticky header
    const header = document.getElementById('siteHeader');
    const onHeaderScroll = () => header?.classList.toggle('scrolled', window.scrollY > 18);
    onHeaderScroll();
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onHeaderScroll));

    // Scroll progress
    const progress = document.getElementById('scrollProgress');
    const onProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progress) progress.style.transform = `scaleX(${Math.min(Math.max(p, 0), 1)})`;
    };
    onProgress();
    window.addEventListener('scroll', onProgress, { passive: true });
    window.addEventListener('resize', onProgress);
    cleanups.push(() => window.removeEventListener('scroll', onProgress));
    cleanups.push(() => window.removeEventListener('resize', onProgress));

    // Reveal on scroll
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'));
    if (!reduceMotion && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries, o) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              o.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px' },
      );
      revealItems.forEach((el) => obs.observe(el));
      cleanups.push(() => obs.disconnect());
    } else {
      revealItems.forEach((el) => el.classList.add('is-visible'));
    }

    // Project badge (Canlı məhsul / Demo ilə) + number + spotlight
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
    cards.forEach((card, i) => {
      if (!card.querySelector('.project-meta-top')) {
        const meta = document.createElement('div');
        meta.className = 'project-meta-top';
        const isDemo = i === cards.length - 1;
        const status = document.createElement('span');
        status.className = 'project-live-badge' + (isDemo ? ' demo' : '');
        status.textContent = isDemo ? 'Demo ilə' : 'Canlı məhsul';
        const num = document.createElement('span');
        num.className = 'project-number';
        num.textContent = String(i + 1).padStart(2, '0');
        meta.append(status, num);
        card.prepend(meta);
      }
      if (!reduceMotion && finePointer) {
        const onCardMove = (ev: PointerEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--spot-x', `${ev.clientX - r.left}px`);
          card.style.setProperty('--spot-y', `${ev.clientY - r.top}px`);
        };
        card.addEventListener('pointermove', onCardMove, { passive: true });
        cleanups.push(() => card.removeEventListener('pointermove', onCardMove));
      }
    });

    // Cursor glow + parallax + magnetic buttons
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    const buttons = Array.from(document.querySelectorAll<HTMLElement>('.button-primary, .button-secondary'));
    if (!reduceMotion && finePointer) {
      const onMove = (ev: PointerEvent) => {
        document.documentElement.style.setProperty('--mouse-x', `${ev.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${ev.clientY}px`);
        const x = ev.clientX / window.innerWidth - 0.5;
        const y = ev.clientY / window.innerHeight - 0.5;
        parallaxItems.forEach((item) => {
          const s = Number(item.dataset.parallax || 0.03);
          item.style.transform = `translate3d(${x * s * 900}px, ${y * s * 700}px, 0)`;
        });
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => window.removeEventListener('pointermove', onMove));

      buttons.forEach((btn) => {
        const onBtnMove = (ev: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const x = ev.clientX - r.left - r.width / 2;
          const y = ev.clientY - r.top - r.height / 2;
          btn.style.transform = `translate3d(${x * 0.06}px, ${y * 0.08 - 2}px, 0)`;
        };
        const onBtnLeave = () => {
          btn.style.transform = '';
        };
        btn.addEventListener('pointermove', onBtnMove, { passive: true });
        btn.addEventListener('pointerleave', onBtnLeave);
        cleanups.push(() => {
          btn.removeEventListener('pointermove', onBtnMove);
          btn.removeEventListener('pointerleave', onBtnLeave);
        });
      });
    }

    // Count-up stats
    const counts = Array.from(document.querySelectorAll<HTMLElement>('.count-up'));
    if (reduceMotion || !('IntersectionObserver' in window)) {
      counts.forEach((it) => (it.textContent = it.dataset.count ?? ''));
    } else {
      const co = new IntersectionObserver(
        (entries, o) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const item = entry.target as HTMLElement;
            const target = Number(item.dataset.count);
            const startAt = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - startAt) / 1200, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              item.textContent = String(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(step);
              else item.textContent = String(target);
            };
            requestAnimationFrame(step);
            o.unobserve(item);
          }
        },
        { threshold: 0.45 },
      );
      counts.forEach((it) => co.observe(it));
      cleanups.push(() => co.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <div id="scrollProgress" className="scroll-progress" aria-hidden />
      <div className="noise" aria-hidden />
      <div className="cursor-glow" aria-hidden />
    </>
  );
}
