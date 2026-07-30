import { useParams, useNavigate } from 'react-router-dom';
import ProduitCard from '../components/ProduitCard';
import { produits, categories } from '../data/produits';

function Produit() {
  const { categorie, souscategorie } = useParams();
  const navigate = useNavigate();

  const catActive = categorie || 'tous';
  const sousCatActive = souscategorie || 'tous';

  const listCategories = categories || [];
  const listProduits = produits || [];

  // Trouver la catégorie active dans les données
  const categorieActuelle = listCategories.find((c) => c.id === catActive);

  // 1. Navigation des catégories principales
  const handleCategoryChange = (catId) => {
    if (catId === 'tous') {
      navigate('/produit');
    } else {
      navigate(`/produit/${catId}`);
    }
  };

  // 2. Navigation des sous-catégories
  const handleSubCategoryChange = (subCatId) => {
    if (subCatId === 'tous') {
      navigate(`/produit/${catActive}`);
    } else {
      navigate(`/produit/${catActive}/${subCatId}`);
    }
  };

  // 3. Logique de filtrage robuste
  const produitsFiltres = listProduits.filter((p) => {
    const matchCat = catActive === 'tous' || p.categorie === catActive;
    
    // Si la sous-catégorie active est 'tous', on accepte tous les produits de la catégorie.
    // Sinon, on vérifie la correspondance exacte.
    const matchSousCat =
      sousCatActive === 'tous' || p.sousCategorie === sousCatActive;

    return matchCat && matchSousCat;
  });

  return (
    <div className="space-y-10 py-6 px-4 sm:px-6 max-w-7xl mx-auto dark:bg-black dark:text-white">
      
      {/* En-tête */}
      <section className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
          Notre Catalogue
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Découvrez notre sélection exclusive importée directement pour vous.
        </p>
      </section>

      {/* Filtres des Catégories Principales */}
      <div className="flex flex-wrap justify-center gap-2">
        {listCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              catActive === cat.id
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.nom}
          </button>
        ))}
      </div>

      {/* Filtres des Sous-Catégories */}
      {categorieActuelle?.sousCategories && categorieActuelle.sousCategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
          {categorieActuelle.sousCategories.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handleSubCategoryChange(sc.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                sousCatActive === sc.id
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {sc.nom}
            </button>
          ))}
        </div>
      )}

      {/* Grille des Produits */}
      <section>
        {produitsFiltres.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {produitsFiltres.map((p) => (
              <div key={p.id} className="h-full">
                <ProduitCard produit={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-2">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Aucun produit ne correspond à cette sélection.
            </p>
            <button
              onClick={() => handleCategoryChange('tous')}
              className="text-sm text-blue-500 underline hover:text-blue-600 dark:text-blue-400 cursor-pointer"
            >
              Voir tous les produits
            </button>
          </div>
        )}
      </section>

    </div>
  );
}

export default Produit;