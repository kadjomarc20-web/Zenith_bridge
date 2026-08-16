import React from 'react';

function Temoignage({ temoim, index }) {
  return (
    <div
      className="reveal-item group relative bg-white dark:bg-slate-900 
      border border-slate-200 dark:border-slate-800 rounded-2xl p-6 
      shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 
      flex flex-col justify-between h-full"
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <p className="text-slate-600 dark:text-slate-300 italic mb-4">
        "{temoim.temoignage}"
      </p>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">
          {temoim.nom}
        </h4>
        <p className="text-sm text-blue-500 font-medium">
          {temoim.job}
        </p>
      </div>
    </div>
  );
}

export default Temoignage;