// Les icônes SVG des services sont tracées au trait (stroke) :
// DrawSVG les "dessine" quand la carte apparaît (voir pages/Service.jsx).
export default function ServiceCard({ service }) {
  return (
    <article data-service-card
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true">
            {service.icon}
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 uppercase tracking-wider">
            {service.badge}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.titre}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </article>
  );
}
