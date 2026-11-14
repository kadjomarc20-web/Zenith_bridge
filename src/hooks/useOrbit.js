// src/hooks/useOrbit.js
// Carrousel en orbite : les éléments [data-orbit-item] tournent sur une ellipse.
//
// Principe : une seule valeur, "r" (la rotation, en nombre d'éléments), pilote tout.
//   - glisser fait varier r (Draggable sur un "proxy" invisible) ;
//   - en lâchant, InertiaPlugin prolonge l'élan puis s'aimante sur l'élément le plus proche ;
//   - render() place chaque élément selon son angle : devant = grand et net,
//     derrière = petit, transparent et flou.
import { useEffect, useRef } from 'react';
import { gsap, Draggable, ScrollTrigger, useGSAP, REDUCE } from '../lib/gsap.js';

const TAU = Math.PI * 2;
const mod = (n, m) => ((n % m) + m) % m;

export function useOrbit(stageRef, count, callbacks) {
  const api = useRef({ next() {}, prev() {}, goTo() {} });
  // Les callbacks changent à chaque rendu : on garde toujours la dernière version.
  const cb = useRef(callbacks);
  useEffect(() => { cb.current = callbacks; });

  useGSAP((context, contextSafe) => {
    const stage = stageRef.current;
    const items = gsap.utils.toArray('[data-orbit-item]', stage);
    if (!stage || !items.length) return;
    const reduce = window.matchMedia(REDUCE).matches;
    const proxy = document.createElement('div'); // élément invisible que l'on "glisse"
    let rx = 0, ry = 0, ppi = 1, active = -1;

    const rotation = () => -gsap.getProperty(proxy, 'x') / ppi;

    const render = () => {
      const r = rotation();
      items.forEach((el, i) => {
        const angle = ((i - r) / count) * TAU;
        const depth = (Math.cos(angle) + 1) / 2; // 1 = devant, 0 = derrière
        gsap.set(el, {
          x: Math.sin(angle) * rx,
          y: (depth - 0.5) * 2 * ry, // devant = plus bas, derrière = plus haut
          scale: 0.45 + 0.55 * depth,
          zIndex: Math.round(depth * 100),
          opacity: 0.25 + 0.75 * depth,
          filter: reduce ? 'none' : `blur(${((1 - depth) * 3).toFixed(1)}px)`,
        });
      });
      const now = mod(Math.round(r), count);
      if (now !== active) { active = now; cb.current.onActiveChange?.(now); }
    };

    const measure = () => {
      const w = stage.clientWidth;
      const r = ppi > 1 ? rotation() : 0;
      rx = Math.min(w * 0.42, 440);
      ry = Math.min(stage.clientHeight * 0.12, 48);
      ppi = Math.max(110, w / 4); // pixels à glisser pour avancer d'une paire
      gsap.set(proxy, { x: -r * ppi });
      render();
    };

    // Tourner vers une paire par le chemin le plus court.
    const rotateBy = contextSafe((delta) => {
      const target = Math.round(rotation()) + delta;
      gsap.to(proxy, { x: -target * ppi, duration: reduce ? 0 : 0.8, ease: 'power3.inOut', onUpdate: render, overwrite: true });
    });
    const goTo = (i) => {
      let delta = mod(i - mod(Math.round(rotation()), count), count);
      if (delta > count / 2) delta -= count;
      rotateBy(delta);
    };
    api.current = { next: () => rotateBy(1), prev: () => rotateBy(-1), goTo };

    gsap.set(items, { xPercent: -50, yPercent: -50, left: '50%', top: '50%' });
    measure();

    const [drag] = Draggable.create(proxy, {
      type: 'x',
      trigger: stage,
      inertia: !reduce,
      cursor: 'grab',
      activeCursor: 'grabbing',
      snap: (v) => Math.round(v / ppi) * ppi, // s'aimante sur la paire la plus proche
      onPress: () => gsap.killTweensOf(proxy),
      onDrag: render,
      onThrowUpdate: render,
      // Sans inertie (mouvement réduit), on s'aimante nous-mêmes au relâchement.
      onRelease() { if (reduce) rotateBy(0); },
      onClick(e) {
        const el = e.target.closest?.('[data-orbit-item]');
        if (!el) return;
        const i = Number(el.dataset.index);
        if (i === active) cb.current.onSelect?.(i); // paire de devant → fiche produit
        else goTo(i);
      },
    });

    const ro = new ResizeObserver(measure);
    ro.observe(stage);

    if (!reduce) {
      // Entrée : les paires apparaissent et le carrousel fait un demi-tour.
      gsap.set(proxy, { x: (count / 2) * ppi });
      render();
      gsap.set('[data-orbit-img]', { autoAlpha: 0, scale: 0.6 });
      ScrollTrigger.create({
        trigger: stage,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to('[data-orbit-img]', { autoAlpha: 1, scale: 1, stagger: 0.06, duration: 0.6 });
          gsap.to(proxy, { x: 0, duration: 1.8, ease: 'expo.out', onUpdate: render });
        },
      });
      // Les paires flottent doucement (sur l'image, pour ne pas gêner render()).
      gsap.to('[data-orbit-img]', { y: -10, duration: 1.8, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.25, from: 'random' } });
    }

    return () => { ro.disconnect(); drag.kill(); };
  }, { scope: stageRef, dependencies: [count] });

  return api;
}
