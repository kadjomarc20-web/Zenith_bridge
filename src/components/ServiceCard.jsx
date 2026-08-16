import React from 'react';

function ServiceCard({ service, index = 0 }) {
  return (
    <div
      className="reveal-item group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div className="space-y-4">
        {/* En-tête de carte : Icône + Badge */}
        <div className="flex items-center justify-between">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 uppercase tracking-wider">
            {service.badge}
          </span>
        </div>

        {/* Titre & Description */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.titre}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Pied de carte / Lien d'action */}
      {/* <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
        <span>En savoir plus</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div> */}
    </div>
  );
}

export default ServiceCard;