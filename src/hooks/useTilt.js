// src/hooks/useTilt.js
// Inclinaison 3D d'une carte qui suit la souris.
import { gsap, useGSAP, MOTION } from '../lib/gsap.js';

export function useTilt(ref, maxDeg = 8) {
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(`${MOTION} and (hover: hover)`, () => {
      gsap.set(el, { transformPerspective: 800 });
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power2' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power2' });
      const sc = gsap.quickTo(el, 'scale', { duration: 0.5, ease: 'power2' });
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5 → 0.5
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * maxDeg * 2);
        rx(-py * maxDeg * 2);
        sc(1.03);
      };
      const onLeave = () => { rx(0); ry(0); sc(1); };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      };
    });
    return () => mm.revert();
  }, { dependencies: [maxDeg] });
}
