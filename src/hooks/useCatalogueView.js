// src/hooks/useCatalogueView.js
// Mode d'affichage du catalogue ("vitrine" ou "grille"), mémorisé dans le navigateur.
// Par défaut : vitrine sur mobile, grille sur ordinateur.
import { useState } from 'react';

const KEY = 'catalogue-vue';

function initialView() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'vitrine' || saved === 'grille') return saved;
  } catch { /* localStorage indisponible */ }
  return window.matchMedia('(max-width: 767px)').matches ? 'vitrine' : 'grille';
}

export function useCatalogueView() {
  const [view, setView] = useState(initialView);
  const choose = (v) => {
    setView(v);
    try { localStorage.setItem(KEY, v); } catch { /* ignoré */ }
  };
  return [view, choose];
}
