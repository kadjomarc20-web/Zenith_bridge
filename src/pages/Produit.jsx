import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProduitCard from '../components/ProduitCard';
import CategoryFilters from '../components/catalogue/CategoryFilters.jsx';
import { produits, categories } from '../data/produits';
import { useFlipGrid } from '../hooks/useFlipGrid.js';

export default function Produit() {
  const { categorie, souscategorie } = useParams();
  const navigate = useNavigate();
  const gridRef = useRef(null);

  const catActive = categorie || 'tous';
  const sousCatActive = souscategorie || 'tous';
  const capture = useFlipGrid(gridRef, [catActive, sousCatActive]);

  // On "photographie" la grille juste avant de changer d'URL (donc de filtre).
  const go = (url) => { capture(); navigate(url, { preventScrollReset: true }); };
  const handleCategory = (id) => go(id === 'tous' ? '/produit' : `/produit/${id}`);
  const handleSubCategory = (id) => go(id === 'tous' ? `/produit/${catActive}` : `/produit/${catActive}/${id}`);

  const produitsFiltres = produits.filter((p) =>
    (catActive === 'tous' || p.categorie === catActive) &&
    (sousCatActive === 'tous' || p.sousCategorie === sousCatActive)
  );

  return (
    <div className="space-y-10 py-6 px-4 sm:px-6 max-w-7xl mx-auto dark:bg-black dark:text-white">
      <section className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">Notre Catalogue</h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Découvrez notre sélection exclusive importée directement pour vous.
        </p>
      </section>

      <CategoryFilters categories={categories} catActive={catActive} sousCatActive={sousCatActive}
        onCategory={handleCategory} onSubCategory={handleSubCategory} />

      <section ref={gridRef} aria-live="polite">
        <p className="sr-only">{produitsFiltres.length} produit(s) affiché(s)</p>
        {produitsFiltres.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {produitsFiltres.map((p) => (
              <div key={p.id} data-flip-id={p.id} className="h-full">
                <ProduitCard produit={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-2">
            <p className="text-slate-500 dark:text-slate-400 text-lg">Aucun produit ne correspond à cette sélection.</p>
            <button type="button" onClick={() => handleCategory('tous')}
              className="text-sm text-blue-500 underline hover:text-blue-600 dark:text-blue-400 cursor-pointer">
              Voir tous les produits
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
