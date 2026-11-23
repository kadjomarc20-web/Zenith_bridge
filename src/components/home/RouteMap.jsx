// src/components/home/RouteMap.jsx
// Animation signature, pilotée par le scroll (section épinglée) :
//  1. la route Chine → Abidjan se dessine et l'avion la suit (DrawSVG + MotionPath) ;
//  2. l'avion atterrit, la vue zoome sur l'Afrique de l'Ouest (tween du viewBox) ;
//  3. des courbes en pointillés partent d'Abidjan vers les pays voisins.
import { useRef } from 'react';
import { gsap, useGSAP, MOTION, REDUCE } from '../../lib/gsap.js';
import { ABIDJAN, PAYS_VOISINS } from '../../data/reseauAfrique.js';
import CountryBranch from './CountryBranch.jsx';

const PLANE = 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z';
const ROUTE = 'M700,90 C560,-10 300,20 110,210';
const VUE_MONDE = '0 0 800 260';
const VUE_AFRIQUE = '-40 124 320 104';  // ordinateur : même proportion que la vue monde (800 / 260)
const VUE_AFRIQUE_MOBILE = '-48 72 262 218'; // mobile : cadre plus haut que large, la région paraît plus grande
const ABJ = { x: 110, y: 210 };       // Abidjan dans le repère SVG
const K = 9;                          // unités SVG par degré de longitude / latitude

// Coordonnées réelles → position sur la carte, relative à Abidjan (le nord est en haut).
const project = ({ lon, lat }) => ({ x: ABJ.x + (lon - ABIDJAN.lon) * K, y: ABJ.y - (lat - ABIDJAN.lat) * K });
// Arc légèrement bombé d'Abidjan vers une capitale.
const arc = (p) => {
  const mx = (ABJ.x + p.x) / 2, my = (ABJ.y + p.y) / 2;
  const dx = p.x - ABJ.x, dy = p.y - ABJ.y;
  return `M${ABJ.x},${ABJ.y} Q${mx + dy * 0.25},${my - Math.abs(dx) * 0.25} ${p.x},${p.y}`;
};
const BRANCHES = PAYS_VOISINS.map((c) => ({ ...c, pos: project(c), d: arc(project(c)) }));

export default function RouteMap() {
  const scope = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const follow = { path: '#zb-route', align: '#zb-route', alignOrigin: [0.5, 0.5], autoRotate: 45 };

    const build = (scrollTrigger, vue) => {
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger });
      tl.from('#zb-route', { drawSVG: '0%', duration: 2 })
        .to('[data-route-plane]', { motionPath: { ...follow, start: 0, end: 1 }, duration: 2 }, 0)
        .from('[data-step="0"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 0.2)
        .from('[data-step="1"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 1)
        // Atterrissage : l'avion et les grands libellés s'effacent, la vue zoome.
        .to(['[data-route-plane]', '[data-big-label]', '[data-bg-route]', '[data-china]'], { autoAlpha: 0, duration: 0.3 }, 2)
        .to('[data-map]', { attr: { viewBox: vue }, duration: 1.2, ease: 'power2.inOut' }, 2.1)
        // Pendant le zoom, la route et le point d'Abidjan s'affinent pour ne pas grossir à l'écran.
        .to('#zb-route', { attr: { 'stroke-width': 1.2 }, opacity: 0.45, duration: 1.2 }, 2.1)
        .to('[data-abj-dot]', { attr: { r: 4.5 }, duration: 1.2 }, 2.1)
        .to('[data-abj-halo]', { attr: { r: 6.5 }, duration: 1.2 }, 2.1)
        .from('[data-abidjan-label]', { autoAlpha: 0, duration: 0.3 }, 2.9)
        // Les courbes partent d'Abidjan une à une, puis chaque pays s'allume.
        .from('[data-branch-reveal]', { drawSVG: '0%', duration: 0.6, stagger: 0.3 }, 3.1)
        .from('[data-country]', { autoAlpha: 0, scale: 0, transformOrigin: '50% 50%', duration: 0.3, stagger: 0.3, ease: 'back.out(2)' }, 3.6)
        .from('[data-step="2"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 4.2);
      return tl;
    };

    // Les conditions sont combinées : animations acceptées ou non, et taille d'écran.
    mm.add({ motion: MOTION, reduce: REDUCE, mobile: '(max-width: 639px)' }, (ctx) => {
      const { motion, mobile } = ctx.conditions;
      const vue = mobile ? VUE_AFRIQUE_MOBILE : VUE_AFRIQUE;
      if (!motion) { build(undefined, vue).progress(1).pause(); return; } // état final direct
      gsap.to('[data-pulse]', { scale: 1.8, autoAlpha: 0, transformOrigin: '50% 50%', duration: 1.4, repeat: -1, ease: 'power1.out' });
      // pin : la section reste fixe pendant qu'on scrolle ; scrub : l'animation suit la molette.
      build({ trigger: scope.current, start: 'center center', end: '+=1400', pin: true, scrub: 1 }, vue);
    });
    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="max-w-5xl mx-auto px-4 space-y-6" aria-labelledby="route-title">
      <div className="text-center space-y-2">
        <h2 id="route-title" className="text-3xl font-bold text-slate-800 dark:text-white">De la Chine à toute l'Afrique de l'Ouest</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <svg data-map viewBox={VUE_MONDE} className="w-full h-[300px] sm:h-auto" role="img"
        aria-label={`Trajet des marchandises de la Chine vers Abidjan, puis livraison vers : ${PAYS_VOISINS.map((c) => c.pays).join(', ')}.`}>
        <path data-bg-route d={ROUTE} fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="3" strokeDasharray="6 8" />
        <path id="zb-route" d={ROUTE} fill="none" className="stroke-blue-500" strokeWidth="3" strokeLinecap="round" />

        {BRANCHES.map((b, i) => <CountryBranch key={b.pays} branch={b} index={i} />)}

        {[[700, 90, 'Chine'], [ABJ.x, ABJ.y, "Côte d'Ivoire"]].map(([x, y, label], i) => (
          <g key={label} data-china={i === 0 ? '' : undefined}>
            <circle data-pulse data-abj-halo={i === 1 ? '' : undefined} cx={x} cy={y} r="10" className="fill-blue-500/40" />
            <circle data-abj-dot={i === 1 ? '' : undefined} cx={x} cy={y} r="7" className="fill-blue-500" />
            <text data-big-label x={x} y={y + 32} textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[18px] font-bold">{label}</text>
          </g>
        ))}
        <text data-abidjan-label x={ABJ.x + 4} y={ABJ.y + 17} textAnchor="middle"
          className="fill-blue-700 dark:fill-blue-300 text-[10px] sm:text-[7px] font-extrabold">Abidjan</text>

        <g data-route-plane>
          <path d={PLANE} transform="scale(1.6)" className="fill-white stroke-blue-600 dark:fill-slate-900" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </svg>

      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ['1. Sourcing', 'Sélection et inspection en usine'],
          ['2. Transit', 'Aérien 7-10 j ou maritime 30-40 j'],
          ['3. Livraison', 'Abidjan et toute la sous-région'],
        ].map(([t, d], i) => (
          <li key={t} data-step={i} className="rounded-xl bg-blue-50 dark:bg-slate-900 p-4">
            <p className="font-bold text-blue-600 dark:text-blue-400">{t}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
