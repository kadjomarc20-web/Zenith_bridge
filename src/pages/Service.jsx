import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../data/Service'
import ServiceCard from '../components/ServiceCard'

// Configuration des 6 services


function Service() {
  useScrollReveal();

  return (
    <div className="reveal-init space-y-12 py-10 px-4 sm:px-6 max-w-7xl mx-auto dark:bg-black dark:text-white">
      
      {/* 1. Section En-tête */}
      <section className="text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Nos Solutions Logistiques
        </span>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white sm:text-5xl">
          Ce que nous faisons pour vous
        </h2>
        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Un accompagnement de A à Z pour simplifier vos opérations d'importation, de transit et d'approvisionnement.
        </p>
      </section>

      {/* 2. Grille des Services */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
            <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
            />
        ))}
        </section>

      {/* 3. Section Appel à l'action (CTA) */}
      <section className="reveal-item bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Vous avez un projet d'importation en tête ?
        </h3>
        <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
            Contactez nos équipes dès aujourd'hui pour obtenir une cotation personnalisée.
        </p>
        <div>
            <button className="px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transform transition-all duration-500 ease-in-out hover:scale-108 cursor-pointer">
                <a href="https://wa.me/8615710052793" target="_blank" rel="noopener noreferrer" className=" transition flex items-center gap-1">
                    Demander un devis
                </a>
            </button>
        </div>
    </section>

    </div>
  );
}

export default Service;