// src/hooks/useReveal.js
// Remplace l'ancien useScrollReveal (IntersectionObserver + classes CSS).
// Tout élément portant l'attribut data-reveal apparaît au scroll,
// par petits groupes (ScrollTrigger.batch) pour un effet "en cascade".
import { gsap, ScrollTrigger, useGSAP, MOTION } from '../lib/gsap.js';

export function useReveal(scopeRef) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        const items = gsap.utils.toArray('[data-reveal]');
        // État de départ posé par JS : sans JS, le contenu reste visible.
        gsap.set(items, { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.12, overwrite: true }),
        });
      });
      return () => mm.revert();
    },
    { scope: scopeRef }
  );
}
