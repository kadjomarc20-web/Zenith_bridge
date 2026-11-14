// src/components/catalogue/ViewToggle.jsx
// Interrupteur Vitrine / Grille du catalogue.
import { GalleryHorizontal, LayoutGrid } from 'lucide-react';

const OPTIONS = [
  { id: 'vitrine', label: 'Vitrine', Icon: GalleryHorizontal },
  { id: 'grille', label: 'Grille', Icon: LayoutGrid },
];

export default function ViewToggle({ value, onChange }) {
  return (
    <div role="group" aria-label="Affichage du catalogue"
      className="mx-auto flex w-fit gap-1 rounded-full bg-slate-100 p-1 dark:bg-slate-800">
      {OPTIONS.map(({ id, label, Icon }) => (
        <button key={id} type="button" onClick={() => onChange(id)} aria-pressed={value === id}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
            value === id
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
          }`}>
          <Icon size={16} aria-hidden="true" /> {label}
        </button>
      ))}
    </div>
  );
}
