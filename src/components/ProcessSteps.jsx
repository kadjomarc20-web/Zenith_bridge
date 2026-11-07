// src/components/ProcessSteps.jsx
// Section "épinglée" (pin) : elle reste fixe pendant qu'on scrolle,
// et la ligne de progression se remplit étape par étape (scrub).
import { useRef } from 'react';
import { gsap, useGSAP, MOTION } from '../lib/gsap.js';

const STEPS = [
  ['Sourcing', 'Nous trouvons et vérifions le bon fournisseur.'],
  ['Importation', 'Formalités douanières et conformité prises en charge.'],
  ['Transit', 'Fret aérien ou maritime, suivi de bout en bout.'],
  ['Livraison', 'Réception à Abidjan et livraison porte-à-porte.'],
];

export default function ProcessSteps() {
  const scope = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    // Pin uniquement sur grand écran : sur mobile, le scroll reste naturel.
    mm.add(`${MOTION} and (min-width: 768px)`, () => {
      const steps = gsap.utils.toArray('[data-process-step]');
      const tl = gsap.timeline({
        scrollTrigger: { trigger: scope.current, start: 'center center', end: '+=900', pin: true, scrub: 0.5 },
      });
      tl.from('[data-process-bar]', { scaleX: 0, transformOrigin: 'left center', ease: 'none', duration: steps.length });
      steps.forEach((step, i) => {
        tl.from(step, { autoAlpha: 0.25, y: 20, duration: 0.6 }, i)
          .from(step.querySelector('[data-dot]'), { scale: 0, ease: 'back.out(3)', duration: 0.4 }, i);
      });
    });
    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="py-10" aria-labelledby="process-title">
      <h2 id="process-title" className="text-center text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-10">
        Votre commande, étape par étape
      </h2>
      <div className="relative">
        <div className="hidden md:block absolute top-3 left-[12.5%] right-[12.5%] h-1 bg-slate-200 dark:bg-slate-800 rounded-full">
          <div data-process-bar className="h-full w-full bg-blue-500 rounded-full" />
        </div>
        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map(([title, text], i) => (
            <li key={title} data-process-step className="text-center space-y-2">
              <span data-dot className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-bold text-slate-800 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
