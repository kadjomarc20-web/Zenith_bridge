// src/components/vitrine/Vitrine.jsx
// Vitrine qui défile (coverflow) : fonctionne avec les photos actuelles du catalogue.
// Mobile : on glisse du doigt, une carte à la fois. Ordinateur : flèches, trackpad,
// clic sur une carte voisine pour la centrer, ou clavier ← →.
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCoverflow } from '../../hooks/useCoverflow.js';
import { gsap, useGSAP, MOTION } from '../../lib/gsap.js';
import ProduitSpotlight from './ProduitSpotlight.jsx';

const ficheUrl = (p) => `/produit/${p.categorie}/${p.sousCategorie}/detail/${p.id}`;

export default function Vitrine({ produits, labelFor }) {
  const scope = useRef(null);
  const scroller = useRef(null);
  const [active, setActive] = useState(0);
  const cf = useCoverflow(scroller, produits.length, setActive);

  // Entrée : les cartes montent en cascade.
  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      gsap.from('[data-cf-card]', { autoAlpha: 0, y: 40, stagger: 0.05, duration: 0.6 });
    });
  }, { scope });

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); cf.current.next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); cf.current.prev(); }
  };

  const produit = produits[active] ?? produits[0];
  const btn = 'hidden sm:flex absolute top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md hover:bg-white dark:bg-slate-800/90 dark:text-white cursor-pointer disabled:opacity-0 transition-opacity';

  return (
    <section ref={scope} aria-label="Vitrine des produits" className="space-y-6">
      <div className="relative">
        <div
          ref={scroller}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-roledescription="carrousel"
          aria-label="Produits. Flèches gauche et droite pour défiler."
          className="relative flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-blue-500 rounded-2xl"
        >
          {produits.map((p, i) => (
            <Link
              key={p.id}
              to={ficheUrl(p)}
              data-cf-card
              aria-current={i === active ? 'true' : undefined}
              aria-label={`${p.nom}, ${p.prix}`}
              onClick={(e) => { if (i !== active) { e.preventDefault(); cf.current.scrollTo(i); } }}
              className="shrink-0 snap-center w-[64vw] max-w-[320px] sm:w-[300px]"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl will-change-transform dark:bg-slate-900">
                <img src={p.image} alt="" loading={i < 4 ? 'eager' : 'lazy'} decoding="async" draggable="false"
                  className="aspect-[4/5] w-full object-cover" />
              </div>
            </Link>
          ))}
        </div>
        <button type="button" onClick={() => cf.current.prev()} disabled={active === 0} aria-label="Produit précédent" className={`${btn} left-2`}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" onClick={() => cf.current.next()} disabled={active === produits.length - 1} aria-label="Produit suivant" className={`${btn} right-2`}>
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <ProduitSpotlight produit={produit} url={ficheUrl(produit)} label={labelFor(produit)} align="center" />
      <p className="text-center text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
        {active + 1} / {produits.length}
      </p>
    </section>
  );
}
