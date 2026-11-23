// src/data/reseauAfrique.js
// Pays livrés depuis Abidjan, affichés sur la carte animée de l'accueil (RouteMap).
// lon / lat : coordonnées réelles de la capitale (placement du point lumineux).
// contour   : clé du tracé dans data/carteGeo.js (généré par scripts/build_geo.py).
// label     : position du nom par rapport au point (dx, dy en unités SVG, anchor = alignement).
export const DEPART = { ville: 'Canton', lon: 113.26, lat: 23.13 }; // Guangzhou, plateforme du sourcing
export const ABIDJAN = { ville: 'Abidjan', lon: -4.03, lat: 5.36 };

export const PAYS_VOISINS = [
  { pays: 'Ghana', contour: 'ghana', lon: -0.19, lat: 5.6, label: { dx: 2.2, dy: 1.1, anchor: 'start' } },
  { pays: 'Burkina Faso', contour: 'burkina', lon: -1.52, lat: 12.37, label: { dx: 0, dy: -2.4, anchor: 'middle' } },
  { pays: 'Mali', contour: 'mali', lon: -8.0, lat: 12.64, label: { dx: -2.2, dy: 1.1, anchor: 'end' } },
  { pays: 'Guinée', contour: 'guinee', lon: -13.71, lat: 9.51, label: { dx: 2.2, dy: 1.1, anchor: 'start' } },
  { pays: 'Liberia', contour: 'liberia', lon: -10.8, lat: 6.3, label: { dx: -2.2, dy: 1.1, anchor: 'end' } },
];
