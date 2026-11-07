export default function Temoignage({ temoim }) {
  return (
    <figure className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <blockquote className="text-slate-600 dark:text-slate-300 italic mb-4">“{temoim.temoignage}”</blockquote>
      <figcaption>
        <p className="font-bold text-slate-900 dark:text-white">{temoim.nom}</p>
        <p className="text-sm text-blue-500 font-medium">{temoim.job}</p>
      </figcaption>
    </figure>
  );
}
