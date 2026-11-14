// src/data/vitrineSneakers.js
// Sneakers mises en avant dans le carrousel en orbite (accueil).
// Chaque entrée renvoie vers un produit du catalogue (même id) et ajoute
// une image DÉTOURÉE (fond transparent) indispensable à l'effet "flottant".
// Pour ajouter une paire : détoure sa photo, place-la dans public/image/detoure/
// puis ajoute une ligne ici.
import { produits } from './produits.js';

const VITRINE = [
  { id: 18, image: '/image/detoure/af1_wh.webp' },
  { id: 62, image: '/image/detoure/puma_xl_red.webp' },
  { id: 72, image: '/image/detoure/adidas_campus_green_white.webp' },
  { id: 75, image: '/image/detoure/oasis_bl_wh.webp' },
  { id: 19, image: '/image/detoure/af1_blk.webp' },
  { id: 66, image: '/image/detoure/vans_knu_blk_wh_red.webp' },
  { id: 76, image: '/image/detoure/new_balance_350_wh.webp' },
  { id: 69, image: '/image/detoure/adidas_campus_blk_white.webp' },
];

// On complète avec les infos du catalogue (nom, prix, catégorie) : une seule source de vérité.
export const vitrineSneakers = VITRINE
  .map((v) => {
    const p = produits.find((x) => x.id === v.id);
    return p ? { ...p, detoure: v.image } : null;
  })
  .filter(Boolean);
