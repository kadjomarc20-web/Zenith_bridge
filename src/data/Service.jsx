export const services = [
  {
    id: 'sourcing',
    titre: 'Sourcing de produits',
    description: 'Recherche et sélection des meilleurs fournisseurs certifiés à l\'international pour vous garantir un rapport qualité/prix imbattable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    badge: 'Recherche & Qualité'
  },
  {
    id: 'importation',
    titre: 'Importation de marchandise',
    description: 'Prise en charge complète des formalités douanières et logistiques pour importer vos produits en toute conformité.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    badge: 'Logistique'
  },
  {
    id: 'transit',
    titre: 'Transit international',
    description: 'Gestion des expéditions maritimes, aériennes et terrestres avec suivi en temps réel de votre fret.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0L17 9.586V7.5A2.5 2.5 0 0014.5 5H11m-8 6h18" />
      </svg>
    ),
    badge: 'Fret'
  },
  {
    id: 'livraison',
    titre: 'Livraison porte-à-porte',
    description: 'Acheminement sécurisé de vos colis depuis les entrepôts fournisseurs jusqu’à votre adresse finale.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    badge: 'Livraison Directe'
  },
  {
    id: 'conseil',
    titre: 'Conseils & Accompagnement',
    description: 'Orientation stratégique et mise à jour sur les réglementations douanières et les opportunités du marché.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    badge: 'Expertise'
  },
  {
    id: 'ventes',
    titre: 'Achats en gros & en détail',
    description: 'Solutions adaptées aux commerçants et aux particuliers avec une grande flexibilité sur les quantités.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    badge: 'Flexibilité'
  },
];