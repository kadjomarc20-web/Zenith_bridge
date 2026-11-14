// src/components/catalogue/CategoryFilters.jsx
// Boutons de filtres (catégories + sous-catégories). Purement visuel :
// la page parente décide quoi faire au clic.
// Mobile : une seule ligne qui défile horizontalement. À partir de sm : boutons sur plusieurs lignes.
import { useEffect, useRef } from 'react';

const ROW = 'flex gap-2 overflow-x-auto -mx-4 px-4 py-1 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden '
  + 'sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible';

export default function CategoryFilters({ categories, catActive, sousCatActive, onCategory, onSubCategory }) {
  const current = categories.find((c) => c.id === catActive);
  const rows = useRef(null);

  // Sur mobile, on fait défiler les lignes pour que les boutons actifs restent visibles.
  useEffect(() => {
    rows.current?.querySelectorAll('[aria-pressed="true"]').forEach((b) =>
      b.scrollIntoView({ block: 'nearest', inline: 'center' }));
  }, [catActive, sousCatActive]);

  return (
    <div ref={rows} className="space-y-2">
      <div className={ROW} role="group" aria-label="Catégories">
        {categories.map((cat) => (
          <button key={cat.id} type="button" onClick={() => onCategory(cat.id)} aria-pressed={catActive === cat.id}
            className={`shrink-0 snap-start whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              catActive === cat.id
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}>
            {cat.nom}
          </button>
        ))}
      </div>

      {current?.sousCategories?.length > 0 && (
        <div className={`${ROW} pt-2 border-t border-slate-200 dark:border-slate-800`} role="group" aria-label="Sous-catégories">
          {current.sousCategories.map((sc) => (
            <button key={sc.id} type="button" onClick={() => onSubCategory(sc.id)} aria-pressed={sousCatActive === sc.id}
              className={`shrink-0 snap-start whitespace-nowrap px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                sousCatActive === sc.id
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}>
              {sc.nom}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
