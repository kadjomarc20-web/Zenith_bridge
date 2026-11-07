import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane } from 'lucide-react';
import { gsap, useGSAP, MOTION } from '../lib/gsap.js';

export default function NotFound() {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      // L'avion "se perd" : il flotte en boucle (yoyo = aller-retour).
      gsap.to('[data-plane]', { y: -14, rotation: -8, duration: 1.6, ease: 'sine.inOut', repeat: -1, yoyo: true });
      gsap.from('[data-nf]', { autoAlpha: 0, y: 30, stagger: 0.12 });
    });
  }, { scope });

  return (
    <section ref={scope} className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <Plane data-plane className="text-blue-500" size={64} aria-hidden="true" />
      <h1 data-nf className="text-6xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
      <p data-nf className="text-slate-600 dark:text-slate-300 max-w-md">
        Ce colis s'est perdu en route… La page demandée n'existe pas.
      </p>
      <Link data-nf to="/" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
        <ArrowLeft size={18} /> Retour à l'accueil
      </Link>
    </section>
  );
}
