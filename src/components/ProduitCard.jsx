import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTilt } from '../hooks/useTilt.js';

export default function ProduitCard({ produit }) {
  const card = useRef(null);
  useTilt(card); // inclinaison 3D au survol (désactivée sur mobile et en mouvement réduit)

  return (
    <Link to={`/produit/${produit.categorie}/${produit.sousCategorie}/detail/${produit.id}`} className="block h-full">
      <div ref={card} className="h-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col dark:bg-black dark:text-white dark:border-gray-800 will-change-transform">
        <img src={produit.image} alt={produit.nom} loading="lazy" decoding="async"
          className="w-full h-90 object-cover rounded-2xl shadow-lg" />
        <div className="p-5 flex flex-col flex-1 justify-between gap-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white">{produit.nom}</h3>
          <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-50 dark:border-gray-700">
            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Populaire
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
