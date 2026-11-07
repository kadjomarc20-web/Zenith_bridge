// src/hooks/useMagnetic.js
// Effet "bouton aimanté" : l'élément suit légèrement le curseur.
import { gsap, useGSAP, MOTION } from '../lib/gsap.js';

export function useMagnetic(ref, strength = 0.3) {
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(`${MOTION} and (hover: hover)`, () => {
      // quickTo crée une fonction ultra-rapide qui réutilise la même animation.
      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => { xTo(0); yTo(0); };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      };
    });
    return () => mm.revert();
  }, { dependencies: [strength] });
}
