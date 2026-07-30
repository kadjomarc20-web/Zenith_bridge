import { Link } from 'react-router-dom';

// src/components/PlatCard.jsx

// On passe "plat" en paramètre (c'est une prop)
export default function ProduitCard({ produit }) {
  return (
    <Link to={`/produit/${produit.categorie}/${produit.sousCategorie}/detail/${produit.id}`} className="block">
      <div className="bg-white border border-slate-100 rounded-2xl 
      overflow-hidden shadow-sm hover:shadow-md transition-all 
      duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex flex-col
      dark:bg-black dark:text-white">
        <img 
          src={produit.image} 
          alt={produit.nom} 
          className="w-full h-90 object-cover rounded-2xl shadow-lg"
        />
        <div className="p-5 flex flex-col flex-1 justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">{produit.nom}</h3>
            {/* <p className="text-sm text-slate-600 line-clamp-3 dark:text-gray-300">{produit.description}</p> */}
          </div>
          <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-50 dark:border-gray-700">
            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Populaire
            </span>
            {/* <span className="text-xs bg-red-100 text-red-800 font-semibold px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              épuisé
            </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
}