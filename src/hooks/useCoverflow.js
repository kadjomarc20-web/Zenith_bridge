// src/hooks/useCoverflow.js
// Vitrine "coverflow" sur un défilement horizontal NATIF (scroll-snap) :
// le navigateur gère le geste (doigt, trackpad, clavier) et l'aimantation ;
// ce hook ne fait que calculer l'effet de profondeur pendant le défilement.
//   - carte au centre : taille normale, opaque ;
//   - cartes éloignées : plus petites, plus pâles, tournées en 3D (ordinateur).
import { useEffect, useRef } from 'react';
import { REDUCE } from '../lib/gsap.js';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export function useCoverflow(scrollerRef, count, onActiveChange) {
  const api = useRef({ scrollTo() {}, next() {}, prev() {} });
  const cb = useRef(onActiveChange);
  useEffect(() => { cb.current = onActiveChange; });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !count) return;
    const cards = [...el.querySelectorAll('[data-cf-card]')];
    const reduce = window.matchMedia(REDUCE).matches;
    const tiltQuery = window.matchMedia('(min-width: 768px) and (hover: hover)');
    let raf = 0;
    let active = -1;

    // Marges latérales : la 1re et la dernière carte peuvent venir au centre.
    const pad = () => {
      const side = Math.max(0, (el.clientWidth - cards[0].offsetWidth) / 2);
      el.style.paddingInline = `${side}px`;
    };

    const update = () => {
      raf = 0;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        // d = distance au centre, en nombre de cartes (0 = au centre)
        const d = (card.offsetLeft + card.offsetWidth / 2 - mid) / card.offsetWidth;
        if (Math.abs(d) < bestDist) { bestDist = Math.abs(d); best = i; }
        if (reduce) return;
        const a = Math.min(Math.abs(d), 2);
        const rot = tiltQuery.matches ? clamp(-d * 28, -40, 40) : 0;
        const inner = card.firstElementChild; // on transforme l'intérieur, pas l'élément aimanté
        inner.style.transform = `perspective(1000px) rotateY(${rot}deg) scale(${1 - a * 0.13})`;
        inner.style.opacity = String(1 - a * 0.35);
      });
      if (best !== active) { active = best; cb.current?.(best); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { pad(); onScroll(); };

    const scrollTo = (i) => {
      const card = cards[clamp(i, 0, cards.length - 1)];
      el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    };
    api.current = { scrollTo, next: () => scrollTo(active + 1), prev: () => scrollTo(active - 1) };

    pad();
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [scrollerRef, count]);

  return api;
}
