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
  /*Les ordinateurs !!! */
  {
  id: 31,
  nom: "HP Elite Dragonfly 13.3",
  description: "Idéal pour le travail ou les loisirs, l'ordinateur portable reconditionné HP Elite Dragonfly 13.3\" FHD est équipé d'un processeur Intel Core i7-8565U à 1,8 GHz, de 16 Go de mémoire et de Windows 11 Professionnel préinstallé. Stockez vos photos, musiques, films et bien plus encore sur le SSD de 512 Go. Webcam incluse. L'ordinateur portable idéal pour tous vos besoins informatiques. Rapide et fiable. Intel Core i7-8565U 1,8 GHz, 16 Go DDR4 SDRAM optimisés pour le multitâche, SSD de 512 Go pour un démarrage rapide et des performances fluides. Microsoft Windows 11 Pro (64 bits) pour une productivité sans faille. Graphiques intégrés Intel UHD Graphics 620 pour un visuel amélioré. Wi-Fi 802.11a/b/g. Pas de lecteur optique (DVD/CD). Connectique : (2) USB 3.1, USB Type-C, HDMI, RJ-45, prise combo casque/micro. Garantie 1 ans.",
  prix: "350 000 FCFA",
  image: "/image/hp_elite_dragonfly.jpg",
  categorie: "informatique",
  sousCategorie: "laptop"
},
{
  id: 32,
  nom: "HP EliteBook 840 G6 14\"",
  description: "L'HP EliteBook 840 G6 est un ordinateur portable professionnel sorti en 2018, équipé d'un processeur Intel Core i5 cadencé à 1,6 GHz. Ce modèle de 14 pouces offre une combinaison équilibrée de performances et de mobilité, idéal pour les tâches de travail quotidiennes et un usage professionnel. Caractéristiques principales : Écran 14 pouces, processeur Intel Core i5 à 1,6 GHz, châssis robuste conçu pour le monde des affaires, connectivité professionnelle standard et options sans fil. Pour qui ? L'HP EliteBook 840 G6 est idéal pour les professionnels et les étudiants qui ont besoin d'un ordinateur portable fiable pour les applications de bureau, la navigation web et le multitâche.",
  prix: "250 000 FCFA",
  image: "/image/hp_elitebook_840_g6.jpg",
  categorie: "informatique",
  sousCategorie: "laptop"
},
{
  id: 33,
  nom: "HP EliteBook 845 G8 14\"",
  description: "HP EliteBook 845 G8 performant équipé d'un processeur AMD Ryzen 5 Pro 5650U à 2,3 GHz, 16 Go de RAM et un SSD NVMe de 512 Go. Écran de 14 pouces mat Full HD (1920x1080). Livré avec Windows 11 Pro préinstallé et son adaptateur secteur. Connectique : 2x USB 3.1, 2x USB-C, HDMI, prise combo casque/micro, Bluetooth, LAN Ethernet. Webcam, microphone et haut-parleurs intégrés. État Grade B (Très bon état fonctionnel, bon état esthétique avec légères traces d'utilisation).",
  prix: "350 000 FCFA",
  image: "/image/hp_elitebook_845_g8.jpg",
  categorie: "informatique",
  sousCategorie: "laptop"
},
{
  id: 34,
  nom: "Lenovo ThinkBook 16 Gen 9",
  description: "Découvrez le portable Lenovo ThinkBook 16, avec ses performances Intel®, son grand écran de 16 pouces et son pavé numérique intégré, idéal pour la gestion financière, la saisie de données et les statistiques.",
  prix: "450 000 FCFA",
  image: "/image/lenovo_thinkbook_19.jpg",
  categorie: "informatique",
  sousCategorie: "laptop"
},
{
  id: 35,
  nom: "Lenovo ThinkBook 14 Gen 7 IML 14\"",
  description: "Conçu pour les entreprises, le Lenovo ThinkBook 14 Gen 7 IML embarque un processeur Intel Core Ultra 5-125U, 8 Go de RAM DDR5-5600 et un SSD de 512 Go. Écran de 14 pouces WUXGA (1920×1200) antireflet pour un confort visuel optimal. Équipé d'une carte graphique Intel Arc, d'une finition Arctic Grey soignée et d'une garantie de 1 an. Idéal pour traiter efficacement les charges de travail professionnelles.",
  prix: "420 000 FCFA",
  image: "/image/lenovo_thinkbook_14_gen7.jpg",
  categorie: "informatique",
  sousCategorie: "laptop"
},
{
    id: 36,
    nom: "ASUS ROG Strix G16 (2023)",
    description: "Équipé d'un processeur Intel Core i7-13650HX, 16 Go de RAM DDR5 et d'une carte graphique NVIDIA GeForce RTX 4060 8 Go. Écran 16 pouces FHD+ à 165 Hz pour un gameplay ultra-fluide. Refroidissement avancé ROG Intelligent Cooling et clavier rétroéclairé RGB par touche.",
    prix: "950 000 FCFA",
    image: "/image/asus_rog_strix_g16.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 37,
    nom: "MSI Katana 15 B12VFK",
    description: "Inspiré des lames de dragons, le MSI Katana 15 embarque un processeur Intel Core i7-12650H, 16 Go de RAM, un SSD de 512 Go et la puissant carte NVIDIA GeForce RTX 4060 8 Go. Écran 15.6 pouces Full HD 144 Hz IPS pour une réactivité optimale.",
    prix: "800 000 FCFA",
    image: "/image/msi_katana_15.jpg",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 38,
    nom: "Lenovo Legion Pro 5 16IRX8",
    description: "Le PC portable gaming référence. Processeur Intel Core i7-13700HX, 32 Go de RAM DDR5, SSD NVMe 1 To et carte graphique NVIDIA GeForce RTX 4070 8 Go. Écran d'exception 16 pouces WQXGA (2560x1600) 240 Hz compatible G-Sync.",
    prix: "1 250 000 FCFA",
    image: "/image/lenovo_legion_pro_5.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 39,
    nom: "Acer Predator Helios 16",
    description: "Conçu pour les performances extrêmes : processeur Intel Core i9-13900HX, 32 Go RAM DDR5, SSD 1 To et NVIDIA GeForce RTX 4080 12 Go. Écran 16 pouces WQXGA à 240 Hz pour une expérience de jeu haut de gamme.",
    prix: "1 650 000 FCFA",
    image: "/image/acer_predator_helios_16.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 40,
    nom: "Dell Alienware m16 R2",
    description: "Design iconique et finitions haut de gamme avec le processeur Intel Core Ultra 7 155H, 16 Go de RAM, SSD 1 To et carte NVIDIA GeForce RTX 4060. Écran 16 pouces QHD+ 240 Hz et clavier mécanique rétroéclairé AlienFX.",
    prix: "1 400 000 FCFA",
    image: "/image/dell_alienware_m16.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 41,
    nom: "Razer Blade 15 Advanced Edition",
    description: "Ultra-compact et performant en châssis aluminium CNC. Processeur Intel Core i7-12800H, 16 Go RAM, SSD 1 To et carte NVIDIA GeForce RTX 3070 Ti. Écran 15.6 pouces QHD 240 Hz avec couverture couleur DCI-P3 100%.",
    prix: "1 350 000 FCFA",
    image: "/image/razer_blade_15.jpg",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 42,
    nom: "HP Omen 16 (2023)",
    description: "PC gamer polyvalent intégrant un processeur AMD Ryzen 7 7840HS, 16 Go RAM DDR5, SSD 1 To et carte NVIDIA GeForce RTX 4060. Écran 16.1 pouces QHD 165 Hz et système de refroidissement Omen Tempest Cooling.",
    prix: "900 000 FCFA",
    image: "/image/hp_omen_16.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 43,
    nom: "Gigabyte AORUS 15 BSF",
    description: "Conçu pour les gamers et créateurs : processeur Intel Core i7-13700H, 16 Go DDR5, SSD NVMe 1 To et carte NVIDIA GeForce RTX 4070 8 Go. Écran 15.6 pouces QHD 165 Hz calibré en usine.",
    prix: "1 100 000 FCFA",
    image: "/image/gigabyte_aorus_15.jpg",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 44,
    nom: "ASUS TUF Gaming A15",
    description: "Robuste et au rapport performance/prix imbattable : processeur AMD Ryzen 7 7735HS, 16 Go RAM, SSD 512 Go et carte NVIDIA GeForce RTX 4050 6 Go. Écran 15.6 pouces FHD 144 Hz certifié norme militaire MIL-STD-810H.",
    prix: "650 000 FCFA",
    image: "/image/asus_tuf_a15.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  {
    id: 45,
    nom: "MSI Cyborg 15 A13VF",
    description: "Design translucide cyberpunk unique. Processeur Intel Core i5-13420H, 16 Go RAM DDR5, SSD 512 Go et carte NVIDIA GeForce RTX 4060. Écran 15.6 pouces Full HD 144 Hz et poids léger de 1.98 kg.",
    prix: "720 000 FCFA",
    image: "/image/msi_cyborg_15.webp",
    categorie: "informatique",
    sousCategorie: "laptop"
  },
  /*Console*/
  {
    id: 46,
    nom: "PlayStation 5 Standard (Slim)",
    description: "La dernière console de Sony offre des graphismes 4K jusqu'à 120 FPS, un SSD ultra-rapide de 1 To pour des chargements quasi instantanés et la manette DualSense avec retours haptiques et gâchettes adaptatives. Modèle équipé d'un lecteur de disque Blu-ray Ultra HD.",
    prix: "450 000 FCFA",
    image: "/image/ps5_slim.jpg",
    categorie: "gaming",
    sousCategorie: "console"
  },
  {
    id: 47,
    nom: "PlayStation 5 Pro",
    description: "La déclinaison ultra-puissante de la PS5. Elle intègre un GPU nettement plus performant, le suréchantillonnage PSSR par IA pour une fluidité optimale en 4K/60fps, du Ray Tracing avancé et un SSD haute capacité de 2 To. Conçue pour les joueurs les plus exigeants.",
    prix: "775 000 FCFA",
    image: "/image/ps5_pro.jpg",
    categorie: "gaming",
    sousCategorie: "ps"
  },
  {
    id: 48,
    nom: "PlayStation 4 Slim (500 Go / 1 To)",
    description: "Compacte et économe en énergie, la PS4 Slim permet de profiter du vaste catalogue de jeux PlayStation 4 en Full HD 1080p. Livrée avec une manette DualShock 4.",
    prix: "200 000 FCFA",
    image: "/image/ps4_slim.jpg",
    categorie: "gaming",
    sousCategorie: "ps"
  },
  {
    id: 49,
    nom: "PlayStation 4 Pro (1 To)",
    description: "Version optimisée de la PS4 proposant un rendu 4K dynamique, des taux de rafraîchissement améliorés et un traitement graphique renforcé pour les téléviseurs compatibles.",
    prix: "270 000 FCFA",
    image: "/image/ps4_pro.jpg",
    categorie: "gaming",
    sousCategorie: "ps"
  },
  {
    id: 50,
    nom: "PlayStation 3 Super Slim",
    description: "Version ultime de la mythique PS3. Un catalogue incontournable de classiques du jeu vidéo, lecteur Blu-ray vidéo intégré et disque dur interne pour vos sauvegardes et jeux dématérialisés.",
    prix: "125 000 FCFA",
    image: "/image/ps3_super_slim.jpg",
    categorie: "gaming",
    sousCategorie: "ps"
  },
  {
    id: 51,
    nom: "Xbox Series X (1 To)",
    description: "La console Microsoft la plus puissante avec 12 TFLOPS de puissance brute. Définition 4K native jusqu'à 120 FPS, architecture Xbox Velocity avec SSD NVMe de 1 To et rétrocompatibilité complète avec quatre générations de jeux Xbox.",
    prix: "485 000 FCFA",
    image: "/image/xbox_series_x.jpg",
    categorie: "gaming",
    sousCategorie: "xbox"
  },
  {
    id: 52,
    nom: "Xbox Series S (512 Go)",
    description: "Console 100 % numérique au design ultra-compact. Profitez des jeux de nouvelle génération en 1440p jusqu'à 120 FPS grâce au SSD NVMe haute vitesse et à l'accès au Xbox Game Pass.",
    prix: "260 000 FCFA",
    image: "/image/xbox_series_s.jpg",
    categorie: "gaming",
    sousCategorie: "xbox"
  },
  {
    id: 53,
    nom: "Xbox One S (1 To)",
    description: "Console élégante avec lecteur Blu-ray Ultra HD 4K, streaming vidéo 4K et technologie HDR pour des couleurs plus riches. Compatible avec tout le catalogue de jeux Xbox One.",
    prix: "175 000 FCFA",
    image: "/image/xbox_one_s.jpg",
    categorie: "gaming",
    sousCategorie: "xbox"
  },
  {
    id: 54,
    nom: "Xbox One X (1 To)",
    description: "La console la plus puissante de la génération précédente avec 6 TFLOPS de puissance, conçue pour faire tourner les jeux Xbox One en vraie résolution 4K native.",
    prix: "230 000 FCFA",
    image: "/image/xbox_one_x.webp",
    categorie: "gaming",
    sousCategorie: "xbox"
  },
  /*Electromenager*/
  {
    id: 55,
    nom: "Mixeur",
    description: "Appareil électromenager pour vous permettre de mixeur vos legumes ou fruits",
    prix: "20 000 FCFA",
    image: "/image/mixeur.jpg",
    categorie: "electromenager",
    sousCategorie: "mixeur"
  },
  {
    id: 56,
    nom: "Mixeur",
    description: "Appareil électromenager pour vous permettre de mixeur vos legumes ou fruits",
    prix: "20 000 FCFA",
    image: "/image/mixeur_2.jpg",
    categorie: "electromenager",
    sousCategorie: "mixeur"
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
  },
  { 
    id: 'gaming', 
    nom: 'consoles',
    sousCategories: [
      { id: 'tous', nom: 'Toutes les consoles' },
      { id: 'xbox', nom: 'Xbox' },
      { id: 'ps', nom: 'Play Station' },
      { id: 'nitendo', nom: 'nitendo' },
    ]
  },
  { 
    id: 'informatique', 
    nom: 'Informatique',
    sousCategories: [
      { id: 'tous', nom: 'Tous les pc' },
      { id: 'laptop', nom: 'laptop' },
      { id: 'pc_gamer', nom: 'gamer' },
    ]
  },
  { 
    id: 'electromenager', 
    nom: 'Electromenager',
    sousCategories: [
      { id: 'tous', nom: 'Tous les appareils' },
      { id: 'mixeur', nom: 'mixeur' },
      { id: 'pc_gamer', nom: 'gamer' },
    ]
  }
];