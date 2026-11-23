// src/components/home/RouteMap.jsx
// Animation signature, pilotée par le scroll (section épinglée) :
//  1. le contour de la Chine se dessine ;
//  2. la route Canton → Abidjan se trace et l'avion la suit (DrawSVG + MotionPath) ;
//  3. atterrissage : la caméra zoome sur l'Afrique de l'Ouest (tween du viewBox)
//     et le contour de la Côte d'Ivoire se dessine ;
//  4. des courbes en pointillés partent d'Abidjan et chaque pays voisin se dessine.
import { useRef } from 'react';
import { gsap, useGSAP, MOTION, REDUCE } from '../../lib/gsap.js';
import { CONTOURS } from '../../data/carteGeo.js';
import { PAYS_VOISINS } from '../../data/reseauAfrique.js';
import { ABJ, CANTON, ROUTE, BRANCHES, VUE_MONDE, VUE_AFRIQUE, VUE_AFRIQUE_MOBILE } from '../../lib/carte.js';
import CountryBranch from './CountryBranch.jsx';

const PLANE = 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z';
const STEPS = [['1. Sourcing', 'Sélection et inspection en usine'], ['2. Transit', 'Aérien 7-10 j ou maritime 30-40 j'], ['3. Livraison', 'Abidjan et toute la sous-région']];
const bigLabel = 'fill-slate-700 dark:fill-slate-200 text-[30px] sm:text-[18px] font-bold';

export default function RouteMap() {
  const scope = useRef(null);

  useGSAP(() => {
    const follow = { path: '#zb-route', align: '#zb-route', alignOrigin: [0.5, 0.5], autoRotate: 45 };
    const build = (scrollTrigger, vue) => {
      // L'avion attend, invisible, posé sur Canton jusqu'au décollage.
      gsap.set('[data-route-plane]', { motionPath: { ...follow, start: 0, end: 0 } });
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger });
      tl.from('[data-chine]', { drawSVG: '0%', duration: 0.8 })
        .from('[data-chine]', { fillOpacity: 0, duration: 0.4 }, 0.5)
        .from('[data-step="0"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 0.3)
        .from('#zb-route', { drawSVG: '0%', duration: 2 }, 0.8)
        .from('[data-route-plane]', { autoAlpha: 0, duration: 0.15 }, 0.8)
        .to('[data-route-plane]', { motionPath: { ...follow, start: 0, end: 1 }, duration: 2 }, 0.8)
        .from('[data-step="1"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 1.6)
        // Atterrissage : l'avion et les grands libellés s'effacent, la caméra zoome.
        .to(['[data-route-plane]', '[data-big-label]', '[data-canton]'], { autoAlpha: 0, duration: 0.3 }, 2.8)
        .to('[data-map]', { attr: { viewBox: vue }, duration: 1.2, ease: 'power2.inOut' }, 2.9)
        // Pendant le zoom, traits et point d'Abidjan s'affinent pour ne pas grossir à l'écran.
        .to('#zb-route', { attr: { 'stroke-width': 0.4 }, opacity: 0.4, duration: 1.2 }, 2.9)
        .to('[data-abj-dot]', { attr: { r: 1.2 }, duration: 1.2 }, 2.9)
        .to('[data-abj-halo]', { attr: { r: 2 }, duration: 1.2 }, 2.9)
        .from('[data-civ]', { drawSVG: '0%', duration: 0.6 }, 3.6)
        .from('[data-civ]', { fillOpacity: 0, duration: 0.3 }, 4)
        .from('[data-abidjan-label]', { autoAlpha: 0, duration: 0.3 }, 3.9);
      // Chaque liaison : la courbe part d'Abidjan, puis le pays se dessine et s'allume.
      BRANCHES.forEach((b, i) => {
        const t = 4.3 + i * 0.4;
        tl.from(`[data-branch-reveal="${i}"]`, { drawSVG: '0%', duration: 0.5 }, t)
          .from(`[data-outline="${i}"]`, { drawSVG: '0%', duration: 0.5 }, t + 0.35)
          .from(`[data-outline="${i}"]`, { fillOpacity: 0, duration: 0.3 }, t + 0.7)
          .from(`[data-country="${i}"]`, { autoAlpha: 0, scale: 0, transformOrigin: '50% 50%', duration: 0.3, ease: 'back.out(2)' }, t + 0.45);
      });
      tl.from('[data-step="2"]', { autoAlpha: 0, y: 20, duration: 0.4 }, 5.6);
      return tl;
    };

    // Conditions combinées : animations acceptées ou non, et taille d'écran.
    const mm = gsap.matchMedia();
    mm.add({ motion: MOTION, reduce: REDUCE, mobile: '(max-width: 639px)' }, ({ conditions }) => {
      const vue = conditions.mobile ? VUE_AFRIQUE_MOBILE : VUE_AFRIQUE;
      if (!conditions.motion) { build(undefined, vue).progress(1).pause(); return; } // état final direct
      gsap.to('[data-pulse]', { scale: 1.8, autoAlpha: 0, transformOrigin: '50% 50%', duration: 1.4, repeat: -1, ease: 'power1.out' });
      // pin : la section reste fixe pendant qu'on défile ; scrub : l'animation suit la molette.
      build({ trigger: scope.current, start: 'center center', end: '+=1600', pin: true, scrub: 1 }, vue);
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
        aria-label={`Carte : trajet des marchandises de la Chine vers Abidjan, puis livraison vers ${PAYS_VOISINS.map((c) => c.pays).join(', ')}.`}>
        {/* Fond : l'Afrique de l'Ouest en gris clair, pour situer la Côte d'Ivoire dès le départ */}
        {['coteIvoire', ...PAYS_VOISINS.map((c) => c.contour)].map((key) => (
          <path key={key} d={CONTOURS[key]} className="fill-slate-100 stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="0.3" />
        ))}
        <path data-chine d={CONTOURS.chine} className="fill-blue-500/10 stroke-blue-500" strokeWidth="1.2" strokeLinejoin="round" />
        <path data-civ d={CONTOURS.coteIvoire} className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="0.5" strokeLinejoin="round" />

        <path id="zb-route" d={ROUTE} fill="none" className="stroke-blue-500" strokeWidth="2.5" strokeLinecap="round" />
        {BRANCHES.map((b, i) => <CountryBranch key={b.pays} branch={b} index={i} />)}

        <g data-canton>
          <circle data-pulse cx={CANTON.x} cy={CANTON.y} r="8" className="fill-blue-500/40" />
          <circle cx={CANTON.x} cy={CANTON.y} r="5" className="fill-blue-500" />
        </g>
        <text data-big-label x="566" y="110" textAnchor="middle" className={bigLabel}>Chine</text>
        <circle data-pulse data-abj-halo cx={ABJ.x} cy={ABJ.y} r="8" className="fill-blue-500/40" />
        <circle data-abj-dot cx={ABJ.x} cy={ABJ.y} r="5" className="fill-blue-600" />
        <text data-big-label x={ABJ.x + 12} y={ABJ.y - 12} className={bigLabel}>Côte d'Ivoire</text>
        <text data-abidjan-label x={ABJ.x} y={ABJ.y + 4.2} textAnchor="middle"
          className="fill-blue-700 dark:fill-blue-300 text-[3.3px] font-extrabold">Abidjan</text>

        <g data-route-plane>
          <path d={PLANE} transform="scale(1.4)" className="fill-white stroke-blue-600 dark:fill-slate-900" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </svg>

      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {STEPS.map(([t, d], i) => (
          <li key={t} data-step={i} className="rounded-xl bg-blue-50 dark:bg-slate-900 p-4">
            <p className="font-bold text-blue-600 dark:text-blue-400">{t}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
