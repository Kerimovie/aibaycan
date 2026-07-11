'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * İşlərimiz (case-study) səhifəsinə xas effektlər:
 *  - sağ tərəfdəki "cinematic project rail" (aktiv fəsil + layihə adı + progress)
 *  - cinema-reel üçün yüngül 3D pointer tilt
 * Qalan effektlər (reveal, scroll-progress, kursor, count-up) SiteEffects-dədir.
 */
export function CaseStudyEffects() {
  const railRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLElement>(null);
  const chapterRef = useRef<HTMLSpanElement>(null);
  const projectRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rail = railRef.current;
    const caseStudies = [...document.querySelectorAll<HTMLElement>('.case-study[data-chapter]')];
    const cleanups: Array<() => void> = [];

    // Aktiv layihə fəsil rail-i
    if (rail && caseStudies.length && 'IntersectionObserver' in window) {
      const chapterObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;

          const section = visible.target as HTMLElement;
          const index = caseStudies.indexOf(section);
          rail.classList.add('visible');
          if (chapterRef.current) chapterRef.current.textContent = section.dataset.chapter ?? '';
          if (projectRef.current) projectRef.current.textContent = section.dataset.project ?? '';
          if (progressRef.current) progressRef.current.style.transform = `translateY(${index * 100}%)`;
        },
        { threshold: [0.18, 0.35, 0.55], rootMargin: '-18% 0px -35% 0px' },
      );
      caseStudies.forEach((section) => chapterObserver.observe(section));
      cleanups.push(() => chapterObserver.disconnect());

      const hero = document.querySelector('.case-hero');
      if (hero) {
        const heroObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) rail.classList.remove('visible');
          },
          { threshold: 0.18 },
        );
        heroObserver.observe(hero);
        cleanups.push(() => heroObserver.disconnect());
      }
    }

    // Cinema-reel üçün yüngül pointer depth
    const reel = document.querySelector<HTMLElement>('.cinema-reel');
    if (reel && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
      const onMove = (event: PointerEvent) => {
        const rect = reel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        reel.style.transform = `rotateY(${x * 4 - 2}deg) rotateX(${y * -3 + 0.5}deg) translateY(-3px)`;
      };
      const onLeave = () => {
        reel.style.transform = '';
      };
      reel.addEventListener('pointermove', onMove, { passive: true });
      reel.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        reel.removeEventListener('pointermove', onMove);
        reel.removeEventListener('pointerleave', onLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <aside ref={railRef} className="cinematic-project-rail" aria-hidden>
      <span className="rail-line">
        <i ref={progressRef} />
      </span>
      <span ref={chapterRef} className="rail-chapter">
        01
      </span>
      <span ref={projectRef} className="rail-project">
        Etehsil.az
      </span>
    </aside>
  );
}
