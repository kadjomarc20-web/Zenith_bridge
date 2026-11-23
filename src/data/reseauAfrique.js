// src/data/reseauAfrique.js
// Pays livrés depuis Abidjan, affichés sur la carte animée de l'accueil (RouteMap).
// lon / lat : coordonnées réelles de la capitale (servent à placer les points).
// label : position du nom par rapport au point (dx, dy en unités SVG, anchor = alignement).
// Pour ajouter un pays : ajoute une ligne, la carte calcule sa position toute seule.
export const ABIDJAN = { ville: 'Abidjan', lon: -4.03, lat: 5.36 };

export const PAYS_VOISINS = [
  { pays: 'Ghana', ville: 'Accra', lon: -0.19, lat: 5.6, label: { dx: 9, dy: 4, anchor: 'start' } },
  { pays: 'Burkina Faso', ville: 'Ouagadougou', lon: -1.52, lat: 12.37, label: { dx: 9, dy: 4, anchor: 'start' } },
  { pays: 'Mali', ville: 'Bamako', lon: -8.0, lat: 12.64, label: { dx: -9, dy: 4, anchor: 'end' } },
  { pays: 'Guinée', ville: 'Conakry', lon: -13.71, lat: 9.51, label: { dx: -9, dy: 4, anchor: 'end' } },
  { pays: 'Liberia', ville: 'Monrovia', lon: -10.8, lat: 6.3, label: { dx: -9, dy: 12, anchor: 'end' } },
];
