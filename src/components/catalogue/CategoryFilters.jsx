// src/components/catalogue/CategoryFilters.jsx
// Boutons de filtres (catégories + sous-catégories). Purement visuel :
// la page parente décide quoi faire au clic.
export default function CategoryFilters({ categories, catActive, sousCatActive, onCategory, onSubCategory }) {
  const current = categories.find((c) => c.id === catActive);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Catégories">
        {categories.map((cat) => (
          <button key={cat.id} type="button" onClick={() => onCategory(cat.id)} aria-pressed={catActive === cat.id}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              catActive === cat.id
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}>
            {cat.nom}
          </button>
        ))}
      </div>

      {current?.sousCategories?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800" role="group" aria-label="Sous-catégories">
          {current.sousCategories.map((sc) => (
            <button key={sc.id} type="button" onClick={() => onSubCategory(sc.id)} aria-pressed={sousCatActive === sc.id}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                sousCatActive === sc.id
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}>
              {sc.nom}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
