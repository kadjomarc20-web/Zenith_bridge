import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import Hero from '../components/home/Hero.jsx';
import Stats from '../components/home/Stats.jsx';
import RouteMap from '../components/home/RouteMap.jsx';
import Testimonials from '../components/home/Testimonials.jsx';

// La page ne fait qu'assembler des sections : chacune gère sa propre animation.
export default function Home() {
  const scope = useRef(null);
  useReveal(scope);

  return (
    <div ref={scope} className="space-y-16 py-6 dark:bg-black dark:text-white">
      <Hero />
      <Stats />

      <section data-reveal className="max-w-3xl mx-auto text-center space-y-4 px-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Notre Histoire</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        <p className="text-slate-600 leading-relaxed dark:text-slate-300">
          Fondé sur une passion pour l'excellence et l'innovation, <strong>Zenith Bridge</strong> est né de la volonté de
          faciliter le commerce international. Nous connectons les marchés mondiaux avec précision et fiabilité, en
          garantissant des solutions logistiques fluides et adaptées à vos besoins.
        </p>
      </section>

      <RouteMap />
      <Testimonials />
    </div>
  );
}
