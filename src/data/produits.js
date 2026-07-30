export const produits = [
  // --- VÊTEMENTS ---
  {
    id: 1,
    nom: "T-shirt full white",
    description: "T-shirt 100% coton de qualité supérieure avec une coupe classique et confortable.",
    prix: "5 000 FCFA",
    image: "/image/teeshirt_full_wh.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 2,
    nom: "T-shirt full black",
    description: "Un basique noir intemporel et résistant, idéal pour un style streetwear élégant.",
    prix: "5 000 FCFA",
    image: "/image/teeshirt_full_blk.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 3,
    nom: "T-shirt full pink",
    description: "Un t-shirt rose tendance au tissu respirant, parfait pour une touche de couleur moderne.",
    prix: "5 500 FCFA",
    image: "/image/teeshirt_full_pink.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 4,
    nom: "T-shirt full blue",
    description: "T-shirt bleu de haute qualité, léger et très agréable à porter au quotidien.",
    prix: "5 000 FCFA",
    image: "/image/teeshirt_full_blue.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 5,
    nom: "T-shirt full red",
    description: "Modèle rouge éclatant conçu avec une finition durable pour éviter le délavage.",
    prix: "5 500 FCFA",
    image: "/image/teeshirt_full_red.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 6,
    nom: "T-shirt full purple",
    description: "T-shirt violet original au style minimaliste, importé pour une tenue unique.",
    prix: "5 500 FCFA",
    image: "/image/teeshirt_full_purple.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 7,
    nom: "T-shirt full gray",
    description: "Un modèle gris polyvalent et doux, facile à assortir avec tous vos vêtements.",
    prix: "5 000 FCFA",
    image: "/image/teeshirt_full_gray.jpg",
    categorie: "vetement",
    sousCategorie: "tshirt"
  },
  {
    id: 8,
    nom: "Polo Classique Bleu Marine",
    description: "Polo en piqué de coton respirant avec col structuré.",
    prix: "8 500 FCFA",
    image: "/image/polo_blue_marine.webp",
    categorie: "vetement",
    sousCategorie: "polo"
  },
  {
    id: 9,
    nom: "Jean Slim Noir",
    description: "Jean stretch confortable, coupe ajustée moderne.",
    prix: "12 000 FCFA",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },

  // --- COSTUMES ---
  {
    id: 10,
    nom: "Costume 3 Pièces Bleu Nuit",
    description: "Ensemble veste, gilet et pantalon coupe italienne élégante.",
    prix: "65 000 FCFA",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    categorie: "costume",
    sousCategorie: "business"
  },
  {
    id: 11,
    nom: "Smoking Noir Prestige",
    description: "Smoking col châle en satin, parfait pour les cérémonies et galas.",
    prix: "85 000 FCFA",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
    categorie: "costume",
    sousCategorie: "smoking"
  },

  // --- PARFUMS ---
  {
    id: 12,
    nom: "Parfum Royal Oud 100ml",
    description: "Fragrance intense aux notes boisées et ambrées de longue tenue.",
    prix: "35 000 FCFA",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    categorie: "parfum",
    sousCategorie: "oriental"
  },
  {
    id: 13,
    nom: "Eau de Parfum Homme Sport",
    description: "Senteur fraîche, dynamique et épicée idéale pour le quotidien.",
    prix: "25 000 FCFA",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80",
    categorie: "parfum",
    sousCategorie: "homme"
  },

  // --- SKINCARE ---
  {
    id: 14,
    nom: "Sérum Éclat Vitamine C",
    description: "Formule concentrée pour illuminer le teint et réduire les taches.",
    prix: "15 000 FCFA",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
    categorie: "skincare",
    sousCategorie: "sérum"
  },

  // --- TÉLÉPHONES ---
  {
    id: 15,
    nom: "iPhone 15 Pro 256GB",
    description: "Smartphone Apple haut de gamme, neuf sous scellé avec garantie.",
    prix: "750 000 FCFA",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    categorie: "ac",
    sousCategorie: "iphone"
  },
  {
    id: 16,
    nom: "Écouteurs Sans Fil Pro",
    description: "Réduction de bruit active et autonomie de 24h avec boîtier.",
    prix: "18 000 FCFA",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    categorie: "accessoire",
    sousCategorie: "audio"
  },

  // --- SACS ---
  {
    id: 17,
    nom: "Sac à Main Cuir Marron",
    description: "Sac élégant en cuir véritable avec bandoulière amovible.",
    prix: "22 000 FCFA",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    categorie: "sac",
    sousCategorie: "main"
  },

  // --- CHAUSSURES ---
  {
    id: 18,
    nom: "Sneakers Urban White",
    description: "Baskets blanches au design moderne, légères et très confortables.",
    prix: "20 000 FCFA",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    categorie: "chaussure",
    sousCategorie: "sneakers"
  },
  {
    id: 19,
    nom: "Mocassin Cuir Premium",
    description: "Chaussure de ville en cuir véritable avec finition à la main.",
    prix: "28 000 FCFA",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80",
    categorie: "chaussure",
    sousCategorie: "ville"
  },
  {
    id: 20,
    nom: "iPhone 16 256GB",
    description: "Smartphone Apple haut de gamme, neuf sous scellé avec garantie.",
    prix: "6à0 000 FCFA",
    image: "/image/iphone_16.jpg",
    categorie: "telephone",
    sousCategorie: "iphone"
  },
  {
    id: 21,
    nom: "iPhone 17 256GB",
    description: "Smartphone Apple haut de gamme, neuf sous scellé avec garantie.",
    prix: "600 000 FCFA",
    image: "/image/iphone_17.webp",
    categorie: "telephone",
    sousCategorie: "iphone"
  },
  {
    id: 22,
    nom: "baggy cargot fumé",
    description: "Très beau pantalon pour des outfits.",
    prix: "20 000FCFA",
    image: "/image/baggy_cargot_jean_fumee.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 23,
    nom: "baggy cargot jean",
    description: "Très beau pantalon pour des outfits.",
    prix: "20 000 FCFA",
    image: "/image/baggy_cargot_jean.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 24,
    nom: "baggy jean blue",
    description: "Très beau pantalon pour des outfits.",
    prix: "600 000 FCFA",
    image: "/image/baggy_jean_blue.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 25,
    nom: "baggy jean fumé",
    description: "Très beau pantalon pour des outfits.",
    prix: "600 000 FCFA",
    image: "/image/baggy_jean_fumee.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 26,
    nom: "baggy jogging black",
    description: "Très beau pantalon pour des outfits.",
    prix: "600 000 FCFA",
    image: "/image/baggy_jogging_blk.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 27,
    nom: "baggy jogging gray",
    description: "Très beau pantalon pour des outfits.",
    prix: "600 000 FCFA",
    image: "/image/baggy_jogging.jpg",
    categorie: "vetement",
    sousCategorie: "pantalon"
  },
  {
    id: 28,
    nom: "sweatshirt full black",
    description: "Sweatshirt black pour toutes les occasions.",
    prix: "600 000 FCFA",
    image: "/image/sweatshirt_full_blk.jpg",
    categorie: "vetement",
    sousCategorie: "pull"
  },
  {
    id: 29,
    nom: "sweatshirt full white",
    description: "Sweatshirt white pour toutes les occasions.",
    prix: "600 000 FCFA",
    image: "/image/sweatshirt_full_wh.jpg",
    categorie: "vetement",
    sousCategorie: "pull"
  },
  {
    id: 30,
    nom: "sweatshirt full gray",
    description: "Sweatshirt gray pour toutes les occasions.",
    prix: "600 000 FCFA",
    image: "/image/sweatshirt_full_gray.png",
    categorie: "vetement",
    sousCategorie: "pull"
  },
];

// Liste des catégories disponibles pour les filtres
export const categories = [
  { 
    id: 'tous', 
    nom: 'Tous les produits' 
  },
  { 
    id: 'vetement', 
    nom: 'Vêtements',
    sousCategories: [
      { id: 'tous', nom: 'Tous les vêtements' },
      { id: 'tshirt', nom: 'T-Shirts' },
      { id: 'polo', nom: 'Polos' },
      { id: 'pull', nom: 'pullover & sweatshrit' },
      { id: 'chemise', nom: 'Chemises' },
      { id: 'pantalon', nom: 'Pantalons & Jeans' },
      { id: 'ensemble', nom: 'Ensembles & Sweats' }
    ]
  },
  { 
    id: 'costume', 
    nom: 'Costumes',
    sousCategories: [
      { id: 'tous', nom: 'Tous les costumes' },
      { id: 'business', nom: 'Costumes 2/3 Pièces' },
      { id: 'smoking', nom: 'Smokings & Mariage' },
      { id: 'veste', nom: 'Blazers & Vestes' }
    ]
  },
  { 
    id: 'parfum', 
    nom: 'Parfums',
    sousCategories: [
      { id: 'tous', nom: 'Tous les parfums' },
      { id: 'homme', nom: 'Parfums Homme' },
      { id: 'femme', nom: 'Parfums Femme' },
      { id: 'oriental', nom: 'Parfums Orientaux / Oud' }
    ]
  },
  { 
    id: 'skincare', 
    nom: 'Soins & Skincare',
    sousCategories: [
      { id: 'tous', nom: 'Tous les soins' },
      { id: 'visage', nom: 'Soins Visage' },
      { id: 'corps', nom: 'Soins Corps & Hydratation' },
      { id: 'sérum', nom: 'Sérums & Anti-taches' }
    ]
  },
  { 
    id: 'telephone', 
    nom: 'Téléphones',
    sousCategories: [
      { id: 'tous', nom: 'Tous les téléphones' },
      { id: 'iphone', nom: 'iPhone (Apple)' },
      { id: 'samsung', nom: 'Samsung' },
    ]
  },
  { 
  id: 'accessoire', 
  nom: 'Accessoires & High-Tech',
  sousCategories: [
    { id: 'tous', nom: 'Tous les accessoires' },
    { id: 'audio', nom: 'Écouteurs & Casques' },
    { id: 'chargeur', nom: 'Chargeurs & Câbles' },
    { id: 'coque', nom: 'Coques & Verres trempés' },
    { id: 'montre', nom: 'Montres & Bracelets connectés' },
    { id: 'support', nom: 'Supports & Accessoires Auto' }
  ]
},
  { 
    id: 'sac', 
    nom: 'Sacs',
    sousCategories: [
      { id: 'tous', nom: 'Tous les sacs' },
      { id: 'main', nom: 'Sacs à main' },
      { id: 'dos', nom: 'Sacs à dos' },
      { id: 'voyage', nom: 'Valises & Sacs de voyage' },
      { id: 'pochette', nom: 'Pochettes & Bananes' }
    ]
  },
  { 
    id: 'chaussure', 
    nom: 'Chaussures',
    sousCategories: [
      { id: 'tous', nom: 'Toutes les chaussures' },
      { id: 'sneakers', nom: 'Baskets / Sneakers' },
      { id: 'ville', nom: 'Mocassins & Chaussures de ville' },
      { id: 'talons', nom: 'Talons & Escarpins' },
      { id: 'claquette', nom: 'Claquettes & Sandales' }
    ]
  }
];