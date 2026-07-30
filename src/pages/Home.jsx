import { Link } from 'react-router-dom';
import ProduitCard from '../components/ProduitCard';
import { produitsPhares } from '../data/produitsPhares';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { temoignagesData } from '../data/temoignages'; 
import Temoignage from '../components/TemoignageCard';

function Home() {
  useScrollReveal();

  return (
    <div className="space-y-16 py-6 dark:bg-black dark:text-white">
      
      {/* 1. SECTION HÉROS */}
      <section className="reveal-init flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 md:p-10 rounded-2xl dark:bg-slate-900 dark:text-white">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-400 leading-tight">
             <span className="text-blue-500">Zenith Bridge</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            "Fournisseur direct depuis la Chine : Découvrez une sélection exclusive de produits de qualité supérieure, livrés directement en Côte d'Ivoire au meilleur prix."
          </p>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-block text-center bg-blue-500 text-white px-6 py-3 w-full sm:w-auto rounded-xl font-semibold hover:bg-blue-700 transition shadow-md hover:cursor-pointer hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <img 
            src="ZenithBridge.png" 
            alt="Zenith Bridge - Importation & Logistique" 
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* 2. SECTION NOTRE HISTOIRE */}
      <section className="reveal-init max-w-3xl mx-auto text-center space-y-4 px-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Notre Histoire</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 leading-relaxed dark:text-slate-300">
          Fondé sur une passion pour l'excellence et l'innovation, <strong>Zenith Bridge</strong> est né de la volonté de faciliter le commerce international. Nous connectons les marchés mondiaux avec précision et fiabilité, en garantissant des solutions logistiques fluides et adaptées à vos besoins.
        </p>
      </section>

      {/* 3. SECTION TÉMOIGNAGES */}
      <section className="reveal-init space-y-8 px-4 sm:p-5">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="max-w-xl mx-auto text-base text-slate-600 dark:text-slate-300">
            Découvrez les retours d'expérience de nos partenaires et clients qui nous font confiance pour leurs importations.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {temoignagesData.map((t, index) => (
            <Temoignage key={t.id} temoim={t} index={index} />
          ))}
        </div>
        
      </section>

    </div>
  );
}

export default Home;