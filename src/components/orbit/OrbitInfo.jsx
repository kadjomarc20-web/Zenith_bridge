// src/components/orbit/OrbitInfo.jsx
// Infos de la paire au premier plan. Le texte change avec une petite animation.
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsappIcon from '../social/meta.jsx';
import { whatsappLink } from '../../config/contact.js';
import { gsap, useGSAP, MOTION } from '../../lib/gsap.js';

export default function OrbitInfo({ produit, url }) {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      gsap.fromTo('[data-info-line]', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.5, overwrite: true });
    });
  }, { scope, dependencies: [produit.id] });

  return (
    <div ref={scope} className="space-y-3">
      <p data-info-line className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Sneakers</p>
      <h3 data-info-line className="text-3xl md:text-4xl font-extrabold uppercase leading-tight text-slate-900 dark:text-white">
        {produit.nom}
      </h3>
      <p data-info-line className="text-lg font-semibold text-slate-600 dark:text-slate-300">{produit.prix}</p>
      <div data-info-line className="flex flex-wrap gap-3 pt-1">
        <Link to={url} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors">
          Voir le produit <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <a href={whatsappLink(`Bonjour ! Je suis intéressé(e) par les "${produit.nom}" (${produit.prix}). Quelles pointures sont disponibles ?`)}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
          <WhatsappIcon className="w-4 h-4" /> Commander
        </a>
      </div>
    </div>
  );
}
