// src/components/home/CountryBranch.jsx
// Une liaison Abidjan → pays voisin : contour du pays, courbe en pointillés, point lumineux et nom.
// DrawSVG ne peut pas "dessiner" un trait déjà pointillé (il utilise lui-même les pointillés) :
// on dessine donc un trait plein dans un MASQUE, qui révèle progressivement la courbe pointillée.
import { CONTOURS } from '../../data/carteGeo.js';

export default function CountryBranch({ branch, index }) {
  const { pays, contour, pos, d, label } = branch;
  const maskId = `zb-branch-${index}`;

  return (
    <g>
      <path data-outline={index} d={CONTOURS[contour]} className="fill-amber-400/20 stroke-amber-500"
        strokeWidth="0.35" strokeLinejoin="round" />

      <mask id={maskId} maskUnits="userSpaceOnUse" x="-100" y="-100" width="1000" height="460">
        <path data-branch-reveal={index} d={d} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </mask>
      <path d={d} fill="none" mask={`url(#${maskId})`} className="stroke-amber-600"
        strokeWidth="0.45" strokeDasharray="1.4 1.1" strokeLinecap="round" />

      <g data-country={index}>
        <circle data-pulse cx={pos.x} cy={pos.y} r="1.8" className="fill-amber-400/40" />
        <circle cx={pos.x} cy={pos.y} r="1" className="fill-amber-500 stroke-white dark:stroke-slate-900" strokeWidth="0.25" />
        <text x={pos.x + label.dx} y={pos.y + label.dy} textAnchor={label.anchor}
          className="fill-slate-800 dark:fill-slate-100 text-[3.3px] font-bold">
          {pays}
        </text>
      </g>
    </g>
  );
}
