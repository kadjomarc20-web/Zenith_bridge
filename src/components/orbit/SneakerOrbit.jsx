// src/components/orbit/SneakerOrbit.jsx
// ⚠ EN RÉSERVE : n'est plus affiché sur le site (choix du propriétaire).
// Prêt à être réutilisé avec des photos détourées (voir docs/FONCTIONNALITES.md).
// Section "Sneakers du moment" : les paires tournent en orbite.
// Glisser (souris ou doigt), flèches, ou clavier ← → pour tourner ;
// clic sur la paire de devant (ou "Voir le produit") pour ouvrir sa fiche.
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';
import { vitrineSneakers } from '../../data/vitrineSneakers.js';
import { useOrbit } from '../../hooks/useOrbit.js';
import ProduitSpotlight from '../vitrine/ProduitSpotlight.jsx';

const ficheUrl = (p) => `/produit/${p.categorie}/${p.sousCategorie}/detail/${p.id}`;

export default function SneakerOrbit() {
  const stage = useRef(null);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const items = vitrineSneakers;

  const orbit = useOrbit(stage, items.length, {
    onActiveChange: setActive,
    onSelect: (i) => navigate(ficheUrl(items[i])),
  });

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); orbit.current.next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); orbit.current.prev(); }
    if (e.key === 'Enter') navigate(ficheUrl(items[active]));
  };

  if (!items.length) return null;
  const produit = items[active];
  const btn = 'flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-md hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors cursor-pointer';

  return (
    <section aria-labelledby="orbit-title" className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-slate-100 to-white dark:from-slate-900 dark:to-black p-6 md:p-10">
        <h2 id="orbit-title" className="sr-only">Sneakers du moment</h2>

        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          <div className="relative z-20">
            <ProduitSpotlight produit={produit} url={ficheUrl(produit)} label="Sneakers" />
          </div>

          <div
            ref={stage}
            tabIndex={0}
            onKeyDown={onKeyDown}
            role="region"
            aria-roledescription="carrousel"
            aria-label="Sneakers du moment. Flèches gauche et droite pour tourner, Entrée pour ouvrir la fiche."
            className="relative isolate h-[300px] md:h-[440px] touch-pan-y select-none rounded-2xl focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            {items.map((p, i) => (
              <div key={p.id} data-orbit-item data-index={i} className="absolute w-[54%] max-w-[280px] md:w-[34%]">
                <img data-orbit-img src={p.detoure} alt="" draggable="false" loading="lazy" decoding="async"
                  className="pointer-events-none w-full h-auto drop-shadow-xl" />
                <div aria-hidden="true" className="mx-auto mt-1 h-2.5 w-2/3 rounded-full bg-slate-900/10 blur-md dark:bg-black/50" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-center gap-4">
          <button type="button" onClick={() => orbit.current.prev()} aria-label="Paire précédente" className={btn}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <p className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Hand size={14} aria-hidden="true" /> Glisse pour faire tourner
          </p>
          <button type="button" onClick={() => orbit.current.next()} aria-label="Paire suivante" className={btn}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <p className="sr-only" aria-live="polite">{produit.nom}, {produit.prix}, paire {active + 1} sur {items.length}</p>
      </div>
    </section>
  );
}
