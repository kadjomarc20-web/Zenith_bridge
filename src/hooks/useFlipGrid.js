// src/hooks/useFlipGrid.js
// Technique FLIP (First, Last, Invert, Play) appliquée à une grille React.
//  1. capture() : AVANT que React ne change la liste, on photographie
//     la position de chaque carte (Flip.getState).
//  2. React re-rend la grille avec le nouveau filtre.
//  3. Après le rendu, Flip.from() fait glisser chaque carte de son ancienne
//     position vers la nouvelle, et fait apparaître les nouvelles cartes.
import { useRef } from 'react';
import { gsap, Flip, useGSAP, REDUCE } from '../lib/gsap.js';

export function useFlipGrid(scopeRef, deps) {
  const state = useRef(null);

  const capture = () => {
    state.current = Flip.getState(scopeRef.current?.querySelectorAll('[data-flip-id]'));
  };

  useGSAP(() => {
    const cards = scopeRef.current?.querySelectorAll('[data-flip-id]');
    if (!cards?.length || window.matchMedia(REDUCE).matches) return;

    if (state.current) {
      Flip.from(state.current, {
        targets: cards,
        duration: 0.6,
        ease: 'power2.inOut',
        stagger: 0.02,
        onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.03 }),
      });
      state.current = null;
    } else {
      // Pas de "photo" (1er affichage, bouton Précédent du navigateur) : simple cascade.
      gsap.from(cards, { autoAlpha: 0, y: 30, stagger: 0.04, duration: 0.5, clearProps: 'all' });
    }
  }, { scope: scopeRef, dependencies: deps });

  return capture;
}
