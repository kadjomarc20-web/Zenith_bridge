// src/lib/carte.js
// Géométrie de la carte animée : projection lon/lat → SVG et tracé des arcs.
import { PROJECTION } from '../data/carteGeo.js';
import { ABIDJAN, DEPART, PAYS_VOISINS } from '../data/reseauAfrique.js';

const { lon0, lat0, k } = PROJECTION;
// Même projection que les contours : les points tombent exactement sur les bonnes villes.
export const project = ({ lon, lat }) => ({ x: (lon - lon0) * k, y: (lat0 - lat) * k });

export const ABJ = project(ABIDJAN);
export const CANTON = project(DEPART);

// Vol Canton → Abidjan : grand arc vers le nord.
export const ROUTE = `M${CANTON.x},${CANTON.y} C480,-20 200,60 ${ABJ.x},${ABJ.y}`;

// Arc légèrement bombé d'Abidjan vers une capitale voisine.
const arc = (p) => {
  const mx = (ABJ.x + p.x) / 2, my = (ABJ.y + p.y) / 2;
  const dx = p.x - ABJ.x, dy = p.y - ABJ.y;
  return `M${ABJ.x},${ABJ.y} Q${mx + dy * 0.25},${my - Math.abs(dx) * 0.25} ${p.x},${p.y}`;
};
export const BRANCHES = PAYS_VOISINS.map((c) => ({ ...c, pos: project(c), d: arc(project(c)) }));

// Cadres de la caméra (viewBox) : monde, puis zoom sur l'Afrique de l'Ouest.
export const VUE_MONDE = '0 0 800 260';
export const VUE_AFRIQUE = '-45 184 209 68';       // ordinateur : même proportion que la vue monde
export const VUE_AFRIQUE_MOBILE = '12 176 92 80';  // mobile (svg de 300 px de haut)
