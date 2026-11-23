// src/components/home/CountryBranch.jsx
// Une liaison Abidjan → pays voisin : courbe en pointillés + point lumineux + nom.
// DrawSVG ne peut pas "dessiner" un trait déjà pointillé (il utilise lui-même les pointillés) :
// on dessine donc un trait plein dans un MASQUE, qui révèle progressivement la courbe pointillée.
export default function CountryBranch({ branch, index }) {
  const { pays, pos, d, label } = branch;
  const maskId = `zb-branch-${index}`;

  return (
    <g>
      <mask id={maskId} maskUnits="userSpaceOnUse" x="-200" y="-200" width="1200" height="700">
        <path data-branch-reveal d={d} fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </mask>
      <path d={d} fill="none" mask={`url(#${maskId})`} className="stroke-amber-500"
        strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />

      <g data-country>
        <circle data-pulse cx={pos.x} cy={pos.y} r="5.5" className="fill-amber-400/40" />
        <circle cx={pos.x} cy={pos.y} r="3.2" className="fill-amber-500" />
        <text x={pos.x + label.dx} y={pos.y + label.dy} textAnchor={label.anchor}
          className="fill-slate-700 dark:fill-slate-200 text-[10px] sm:text-[7px] font-bold">
          {pays}
        </text>
      </g>
    </g>
  );
}
