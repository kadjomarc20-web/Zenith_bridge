# Fonctionnalités du site Zenith Bridge

Ce document décrit **ce que fait le site**, page par page, **où se trouve le
code** de chaque fonctionnalité, et ce qui a été corrigé côté sécurité et qualité.

Pour comprendre *comment* les animations sont codées, lis `docs/APPRENDRE_GSAP.md`.

---

## 1. Vue d'ensemble

| Élément | Technologie |
|---|---|
| Interface | React 19 + Vite 8 |
| Style | Tailwind CSS 4 (mode sombre via la classe `.dark`) |
| Navigation | React Router 7 |
| Animations | GSAP 3 + `@gsap/react` |
| Formulaire | Formspree (aucun serveur à gérer) |
| Notifications | react-hot-toast |

Commandes utiles :

```bash
npm install        # installer les dépendances
npm run dev        # lancer le site en local
npm run lint       # vérifier la qualité du code
npm run build      # générer la version de production (dossier dist/)
```

### Organisation des dossiers

```
src/
├── config/contact.js        ← téléphone, WhatsApp, e-mail, Formspree (UN seul endroit)
├── lib/gsap.js              ← configuration centrale de GSAP
├── hooks/                   ← logique réutilisable (animations)
│   ├── useReveal.js         ← apparition au scroll
│   ├── useFlipGrid.js       ← réorganisation animée du catalogue
│   ├── useTilt.js           ← inclinaison 3D des cartes
│   └── useMagnetic.js       ← bouton « aimanté »
├── components/
│   ├── home/                ← sections de l'accueil (Hero, Stats, RouteMap, Testimonials)
│   ├── catalogue/           ← filtres du catalogue
│   ├── contact/             ← infos, formulaire, coche de succès
│   └── …                    ← Navbar, MobileMenu, Footer, cartes
├── pages/                   ← une page = un assemblage de composants
├── data/                    ← produits, services, témoignages, menu
└── services/ContactService.js ← envoi du formulaire
```

**Règle suivie :** les pages assemblent, les composants affichent, les hooks
contiennent la logique, les services parlent à l'extérieur.

---

## 2. Fonctionnalités communes à toutes les pages

### Barre de navigation — `components/Navbar.jsx`
- **Entrée animée** du logo au chargement, et l'avion du logo flotte en douceur.
- **Masquage intelligent** : la barre se cache quand on descend et réapparaît
  dès qu'on remonte, pour laisser plus de place au contenu.
- **Bouton thème clair / sombre** : le choix est mémorisé dans le navigateur.
- Le lien de la page active est signalé aux lecteurs d'écran (`aria-current`).

### Menu mobile — `components/MobileMenu.jsx`
- Le panneau s'ouvre en se dévoilant de haut en bas, puis les liens arrivent un par un.
- À la fermeture, l'animation **se rembobine**.
- **Accessibilité** : `aria-expanded`, fermeture avec la touche **Échap**, le
  scroll de la page est bloqué tant que le menu est ouvert, et les liens
  invisibles ne sont pas atteignables au clavier.

### Transition entre les pages — `components/Layout.jsx`
- Chaque nouvelle page entre en fondu avec un léger glissement, et on revient en haut.
- Changer de filtre dans le catalogue **ne déclenche pas** cette transition
  (c'est Flip qui anime la grille).

### Page 404 — `pages/NotFound.jsx`
- Toute adresse inconnue affiche « Ce colis s'est perdu en route… » avec un
  avion qui flotte, et un bouton de retour à l'accueil.
- Avant, une adresse inconnue affichait une page vide.

### Accessibilité des animations
Si l'utilisateur a activé **« réduire les animations »** sur son appareil :
toutes les animations sont désactivées, le contenu s'affiche directement,
l'avion de la carte est posé à l'arrivée et les témoignages s'affichent en grille.

---

## 3. Page d'accueil — `pages/Home.jsx`

| Section | Fichier | Ce qui se passe |
|---|---|---|
| **Hero** | `components/home/Hero.jsx` | Le titre apparaît **lettre par lettre**, le texte ligne par ligne, le bouton « Nous contacter » fait un petit « pop », l'image se dévoile de bas en haut puis bouge légèrement au scroll (parallax). |
| **Chiffres clés** | `components/home/Stats.jsx` | 4 compteurs qui défilent de 0 à leur valeur. Le nombre de produits et de catégories est **calculé automatiquement** depuis le catalogue. |
| **Notre histoire** | `pages/Home.jsx` | Apparition en douceur au scroll. |
| **De la Chine à Abidjan** ⭐ | `components/home/RouteMap.jsx` | **L'animation signature.** Une ligne se dessine de la Chine vers la Côte d'Ivoire **au rythme du scroll**, un avion la suit en s'orientant selon la courbe, et les 3 étapes (Sourcing, Transit, Livraison) apparaissent au fur et à mesure. Si on remonte, l'avion recule. |
| **Témoignages** | `components/home/Testimonials.jsx` | Bandeau qui **défile en continu**. Il ralentit jusqu'à s'arrêter quand on passe la souris dessus, pour laisser le temps de lire. |

L'image du hero a été convertie en **WebP** : **1,9 Mo → 80 Ko**, soit un
chargement environ 24 fois plus léger.

---

## 4. Catalogue — `pages/Produit.jsx`

- **Filtres** par catégorie et sous-catégorie (`components/catalogue/CategoryFilters.jsx`).
  L'URL change (`/produit/vetement/tshirt`), on peut donc partager un lien filtré.
- **Réorganisation animée (Flip)** (`hooks/useFlipGrid.js`) : quand on change de
  filtre, les cartes **glissent** vers leur nouvelle place et les nouvelles
  apparaissent en fondu, au lieu d'un saut brutal.
- **Cartes produits** (`components/ProduitCard.jsx`) : légère **inclinaison 3D**
  qui suit la souris (ordinateur uniquement) et images chargées **au moment où
  elles deviennent visibles** (`loading="lazy"`), ce qui accélère la page.
- Le nombre de produits affichés est annoncé aux lecteurs d'écran.

## 5. Fiche produit — `pages/ProduitDetail.jsx`

- L'image entre avec un **zoom arrière**, les informations glissent depuis la droite.
- Le bouton **« Commander sur WhatsApp »** pulse 2 fois pour attirer l'œil,
  puis devient **aimanté** : il suit légèrement le curseur.
- Le message WhatsApp est **pré-rempli avec le nom du produit**.

## 6. Services — `pages/Service.jsx`

- Les 6 cartes apparaissent en cascade, et **leurs icônes se dessinent trait par trait**.
- **Nouvelle section « Votre commande, étape par étape »** (`components/ProcessSteps.jsx`) :
  sur ordinateur, la section **reste fixe** pendant qu'on scrolle et une barre
  de progression relie les 4 étapes (Sourcing → Importation → Transit → Livraison).
  Sur mobile, le scroll reste normal.
- Le bouton **« Demander un devis »** est aimanté et ouvre WhatsApp avec un message pré-rempli.

## 7. Contact — `pages/Contact.jsx`

- Les champs du formulaire arrivent un par un.
- **Envoi réussi** : notification verte + **coche verte dessinée** (`components/contact/SuccessCheck.jsx`).
- **Erreur** (réseau ou champ invalide) : le formulaire **tremble** et un message
  propose de passer par WhatsApp.
- **Validation** : longueurs minimales et maximales sur chaque champ, et e-mail
  nettoyé (espaces retirés, minuscules) avant l'envoi.
- **Anti-spam** : un champ invisible (`_gotcha`) piège les robots. S'il est
  rempli, le message n'est pas envoyé, et Formspree le rejette aussi de son côté.
- L'envoi est **abandonné au bout de 10 secondes** si le réseau ne répond pas,
  au lieu de tourner indéfiniment.

---

## 8. Modifier les informations de contact

Tout est dans **`src/config/contact.js`** :

```js
export const CONTACT = {
  phoneDisplay: '+225 01 40 09 78 85',
  phoneHref: 'tel:+2250140097885',
  whatsappNumber: '8615710052793',     // sans + ni espaces
  whatsappDisplay: '+86 157 1005 2793',
  email: 'zenithbridge@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/xbdnkajp',
};
```

Avant, le site contenait **3 numéros WhatsApp différents** répartis dans
3 fichiers. Il n'y en a plus qu'un : modifie-le ici et tout le site suit.
⚠️ Vérifie que `8615710052793` est bien le bon numéro : l'ancien
`2250101030363` (code non utilisé) a été supprimé.

---

## 9. Sécurité et qualité : ce qui a été corrigé

| Problème | Correction |
|---|---|
| 2 failles **élevées** dans les dépendances (`vite`, `source-map-js`) | `npm audit fix` : Vite 8.3.6 |
| Fonction (inutilisée) qui aurait stocké nom, e-mail et message **en clair** dans le navigateur | Supprimée |
| 3 numéros WhatsApp incohérents | Un seul fichier `config/contact.js` |
| Formulaire sans protection anti-spam ni limites de taille | Honeypot `_gotcha`, `minLength` et `maxLength`, liste blanche des champs envoyés |
| Formulaire avec un objet par défaut inexistant (« Réservation de table ») | Liste d'objets adaptée à l'activité |
| `<a>` placé dans un `<button>` (HTML invalide) | Un vrai lien stylé en bouton |
| Pas de page 404 | `pages/NotFound.jsx` |
| `lang="en"` et titre `zenith_bridge_app` | `lang="fr"`, vrai titre et meta description (SEO) |
| Lecture de `localStorage` qui plantait en navigation privée | Protégée par `try/catch` |
| Contenu masqué en CSS en attendant le JavaScript | État de départ posé par GSAP : sans JS, tout reste visible |
| 8 erreurs ESLint | 0 erreur |
| Labels de formulaire non reliés aux champs | `htmlFor` / `id` + `autoComplete` |

### Ce qu'il reste à faire de ton côté

1. **Activer la protection anti-spam dans le tableau de bord Formspree**
   (reCAPTCHA ou équivalent), en complément du honeypot.
2. **Ajouter des en-têtes de sécurité chez ton hébergeur.** Ils ne se règlent pas
   dans le code React. Exemple pour **Netlify**, dans un fichier `public/_headers` :

   ```
   /*
     X-Frame-Options: DENY
     X-Content-Type-Options: nosniff
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: camera=(), microphone=(), geolocation=()
     Content-Security-Policy: default-src 'self'; img-src 'self' https://images.unsplash.com data:; connect-src 'self' https://formspree.io; style-src 'self' 'unsafe-inline'; script-src 'self'; frame-ancestors 'none'
   ```

   Sur **Vercel**, la même chose se met dans `vercel.json` (clé `headers`).
   Dis-moi ton hébergeur et je l'ajoute.
3. **Redirection SPA** : sur Netlify, ajoute `public/_redirects` avec la ligne
   `/* /index.html 200`. Sinon, recharger `/produit/vetement` peut donner une
   erreur 404 de l'hébergeur.
4. **4 failles « modérées »** restent dans **ESLint**, un outil de développement
   qui n'est pas envoyé aux visiteurs. Les corriger obligerait à revenir à ESLint 9 ;
   il vaut mieux attendre une mise à jour d'ESLint 10.
5. Certaines images du catalogue viennent d'Unsplash (site externe). Pour plus de
   fiabilité, télécharge-les dans `public/image/`.
6. Les autres images de `public/image/` (6 Mo) gagneraient aussi à passer en WebP.

---

## 10. Poids ajouté par GSAP

GSAP et ses plugins représentent quelques dizaines de Ko compressés, chargés
une seule fois et mis en cache. Toutes les animations utilisent uniquement
`transform` et `opacity`, les deux propriétés que le navigateur anime le plus
facilement : l'affichage reste fluide, même sur un téléphone d'entrée de gamme.
