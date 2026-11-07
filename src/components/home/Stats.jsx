// src/components/home/Stats.jsx
// Compteurs animés : GSAP anime un nombre puis on l'écrit dans le DOM.
import { useRef } from 'react';
import { produits, categories } from '../../data/produits.js';
import { gsap, useGSAP, MOTION } from '../../lib/gsap.js';

// Chiffres réels, calculés depuis le catalogue ou tirés des infos du site.
const STATS = [
  { value: produits.length, suffix: '+', label: 'produits au catalogue' },
  { value: categories.length - 1, label: 'catégories' },
  { value: 10, prefix: '7-', label: 'jours en fret aérien' },
  { value: 100, suffix: '%', label: 'produits inspectés avant envoi' },
];

export default function Stats() {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { n: 0 };
        el.textContent = '0'; // part de 0 (sans JS, la vraie valeur reste affichée)
        gsap.to(obj, {
          n: target, duration: 1.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => { el.textContent = Math.round(obj.n); },
        });
      });
    });
  }, { scope });

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {STATS.map((s) => (
        <div key={s.label} data-reveal className="rounded-2xl bg-blue-50 dark:bg-slate-900 p-6 text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
            {s.prefix}<span data-count={s.value}>{s.value}</span>{s.suffix}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
