// src/components/home/Testimonials.jsx
// Bandeau de témoignages qui défile en boucle (marquee), pause au survol.
import { useRef } from 'react';
import { temoignagesData } from '../../data/temoignages.js';
import Temoignage from '../TemoignageCard.jsx';
import { gsap, useGSAP, MOTION } from '../../lib/gsap.js';

export default function Testimonials() {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      // La liste est affichée 2 fois : en glissant de -50 %, la 2e copie
      // prend exactement la place de la 1re → boucle invisible.
      const loop = gsap.to('[data-track]', { xPercent: -50, ease: 'none', duration: 35, repeat: -1 });
      const track = scope.current.querySelector('[data-track]');
      const slow = () => gsap.to(loop, { timeScale: 0, duration: 0.5 });
      const fast = () => gsap.to(loop, { timeScale: 1, duration: 0.5 });
      track.addEventListener('pointerenter', slow);
      track.addEventListener('pointerleave', fast);
      return () => {
        track.removeEventListener('pointerenter', slow);
        track.removeEventListener('pointerleave', fast);
      };
    });
  }, { scope });

  return (
    <section ref={scope} className="space-y-8 px-4 sm:p-5">
      <div data-reveal className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Ce que disent nos clients</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        <p className="max-w-xl mx-auto text-base text-slate-600 dark:text-slate-300">
          Découvrez les retours d'expérience de nos partenaires et clients qui nous font confiance pour leurs importations.
        </p>
      </div>

      <div className="overflow-hidden mask-x-from-90% motion-reduce:mask-none">
        <ul data-track className="flex w-max gap-6 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {[...temoignagesData, ...temoignagesData].map((t, i) => (
            <li key={`${t.id}-${i}`} aria-hidden={i >= temoignagesData.length}
              className={`w-80 shrink-0 ${i >= temoignagesData.length ? 'motion-reduce:hidden' : ''}`}>
              <Temoignage temoim={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
