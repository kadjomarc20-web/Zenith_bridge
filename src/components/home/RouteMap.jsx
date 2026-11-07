// src/components/home/RouteMap.jsx
// Animation signature : la route Chine → Côte d'Ivoire se dessine au scroll
// et un avion la suit. DrawSVG + MotionPath + ScrollTrigger (scrub).
import { useRef } from 'react';
import { gsap, useGSAP, MOTION, REDUCE } from '../../lib/gsap.js';

const PLANE = 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z';
const ROUTE = 'M700,90 C560,-10 300,20 110,210';

export default function RouteMap() {
  const scope = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const follow = { path: '#zb-route', align: '#zb-route', alignOrigin: [0.5, 0.5], autoRotate: 45 };

    mm.add(MOTION, () => {
      gsap.to('[data-pulse]', { scale: 1.8, autoAlpha: 0, transformOrigin: 'center', duration: 1.4, repeat: -1, ease: 'power1.out' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        // scrub : l'animation avance et recule AVEC la molette.
        scrollTrigger: { trigger: scope.current, start: 'top 75%', end: 'bottom 45%', scrub: 1 },
      });
      tl.from('#zb-route', { drawSVG: '0%' })
        .to('[data-route-plane]', { motionPath: { ...follow, start: 0, end: 1 } }, 0)
        .from('[data-step]', { autoAlpha: 0, y: 20, stagger: 0.3 }, 0.1);
    });

    // Sans animation : l'avion est posé directement à l'arrivée.
    mm.add(REDUCE, () => {
      gsap.set('[data-route-plane]', { motionPath: { ...follow, start: 1, end: 1 } });
    });
    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="max-w-5xl mx-auto px-4 space-y-6" aria-labelledby="route-title">
      <div className="text-center space-y-2">
        <h2 id="route-title" className="text-3xl font-bold text-slate-800 dark:text-white">De la Chine à Abidjan</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <svg viewBox="0 0 800 260" className="w-full h-auto" role="img"
        aria-label="Trajet des marchandises de la Chine vers la Côte d'Ivoire">
        <path d={ROUTE} fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="3" strokeDasharray="6 8" />
        <path id="zb-route" d={ROUTE} fill="none" className="stroke-blue-500" strokeWidth="3" strokeLinecap="round" />
        {[[700, 90, 'Chine'], [110, 210, "Côte d'Ivoire"]].map(([x, y, label]) => (
          <g key={label}>
            <circle data-pulse cx={x} cy={y} r="10" className="fill-blue-500/40" />
            <circle cx={x} cy={y} r="7" className="fill-blue-500" />
            <text x={x} y={y + 32} textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[18px] font-bold">{label}</text>
          </g>
        ))}
        <g data-route-plane>
          <path d={PLANE} transform="scale(1.6)" className="fill-white stroke-blue-600 dark:fill-slate-900" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </svg>

      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ['1. Sourcing', 'Sélection et inspection en usine'],
          ['2. Transit', 'Aérien 7-10 j ou maritime 30-40 j'],
          ['3. Livraison', 'Réception à Abidjan, porte-à-porte'],
        ].map(([t, d]) => (
          <li key={t} data-step className="rounded-xl bg-blue-50 dark:bg-slate-900 p-4">
            <p className="font-bold text-blue-600 dark:text-blue-400">{t}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
