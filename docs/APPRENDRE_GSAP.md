# Apprendre GSAP avec Zenith Bridge

Ce guide t'explique **pas à pas** comment fonctionne le motion design du site.
Chaque notion est illustrée par un fichier **réel** du projet : ouvre-le à côté
de ce guide pendant ta lecture.

> Ordre de lecture conseillé : chapitres 1 → 4 (les bases), puis 5 → 10
> (une notion par chapitre). Le chapitre 11 liste les pièges classiques.

---

## 1. GSAP, c'est quoi ?

**GSAP** (GreenSock Animation Platform) est une bibliothèque JavaScript qui
anime n'importe quelle propriété : position, opacité, couleur, tracé SVG,
et même une simple variable JavaScript.

Pourquoi GSAP plutôt que des animations CSS ?

| Besoin | CSS | GSAP |
|---|---|---|
| Animation simple au survol | ✅ suffisant | ✅ |
| Enchaîner 5 animations dans un ordre précis | ❌ calculs de `delay` à la main | ✅ timeline |
| Lier une animation au scroll | ❌ | ✅ ScrollTrigger |
| Mettre en pause, rembobiner, accélérer | ❌ | ✅ |
| Faire suivre un chemin à un avion | ❌ | ✅ MotionPath |

Depuis 2025, **GSAP et tous ses plugins sont gratuits**, y compris pour un
usage commercial.

Installation (déjà faite dans le projet) :

```bash
npm install gsap @gsap/react
```

---

## 2. Les 4 méthodes de base

```js
gsap.to('.boite',     { x: 200, duration: 1 });   // de l'état ACTUEL → vers x: 200
gsap.from('.boite',   { x: 200, duration: 1 });   // depuis x: 200 → vers l'état actuel
gsap.fromTo('.boite', { x: 0 }, { x: 200 });      // départ ET arrivée imposés
gsap.set('.boite',    { x: 200 });                // téléportation immédiate (durée 0)
```

Le résultat d'un `gsap.to()` s'appelle un **tween** : une animation entre deux états.

### Les propriétés à connaître

| Propriété | Effet | Exemple dans le projet |
|---|---|---|
| `x`, `y` | déplacement en pixels | `y: 40` dans `useReveal.js` |
| `xPercent`, `yPercent` | déplacement en % de la taille de l'élément | marquee : `xPercent: -50` |
| `scale`, `rotation` | taille, rotation (en degrés) | bouton CTA du hero |
| `autoAlpha` | `opacity` **+** `visibility` | partout |
| `clipPath` | découpe visible de l'élément | dévoilement de l'image du hero |
| `duration` | durée en secondes | `0.8` par défaut (voir `lib/gsap.js`) |
| `delay` | attente avant de démarrer | formulaire de contact |
| `ease` | courbe d'accélération | voir ci-dessous |
| `stagger` | décalage entre plusieurs éléments | apparition « en cascade » |
| `repeat`, `yoyo` | répétition, aller-retour | avion de la page 404 |

**Pourquoi `autoAlpha` plutôt que `opacity` ?** Avec `opacity: 0`, l'élément
reste cliquable et lisible par un lecteur d'écran alors qu'il est invisible.
`autoAlpha: 0` ajoute `visibility: hidden` : l'élément est réellement masqué.

### Les easings (courbes d'accélération)

L'easing donne la « personnalité » d'un mouvement :

- `power3.out` : démarre vite et freine en douceur. C'est le défaut du projet, naturel.
- `power4.inOut` : accélère puis freine. Idéal pour un panneau qui s'ouvre (menu mobile).
- `back.out(2)` : dépasse légèrement puis revient, effet « pop » (bouton du hero).
- `elastic.out(1, 0.3)` : rebondit comme un ressort (secousse du formulaire en erreur).
- `sine.inOut` : très doux, parfait pour les boucles infinies (avion du logo).
- `none` : vitesse constante. **Obligatoire avec le scrub** (voir chapitre 6).

Tu peux tester tous les easings sur la page officielle « Ease Visualizer » de GSAP.

---

## 3. Le fichier central : `src/lib/gsap.js`

```js
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Flip, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: 'power3.out', duration: 0.8 });
```

- Les plugins doivent être **enregistrés une seule fois**. C'est pour ça qu'on
  importe toujours `gsap` depuis `lib/gsap.js` et jamais directement depuis `'gsap'`.
- `gsap.defaults()` évite de répéter `ease` et `duration` dans chaque animation.
- Ce fichier exporte aussi deux requêtes média, `MOTION` et `REDUCE` (chapitre 4).

---

## 4. GSAP + React : le hook `useGSAP`

### Le problème

React peut monter, démonter puis remonter un composant ; en développement,
le `StrictMode` le fait même exprès, deux fois. Si tu crées une animation dans un
`useEffect` sans la nettoyer, elle tourne encore sur un élément qui n'existe
plus : bugs et fuites de mémoire.

### La solution

```jsx
const scope = useRef(null);

useGSAP(() => {
  gsap.from('[data-hero-cta]', { scale: 0.6 });
}, { scope });          // ← limite les sélecteurs à l'intérieur de ce composant

return <section ref={scope}>…</section>;
```

`useGSAP` fait trois choses pour toi :

1. il s'exécute **avant l'affichage** (comme `useLayoutEffect`), donc pas de « flash » ;
2. il **annule automatiquement** toutes les animations et tous les ScrollTrigger
   créés à l'intérieur quand le composant disparaît ;
3. avec `scope`, le sélecteur `'[data-hero-cta]'` ne cherche que **dans** la
   section, pas dans toute la page.

Pour rejouer une animation quand une valeur change, ajoute `dependencies` :

```js
useGSAP(() => { … }, { dependencies: [pageKey] });   // voir Layout.jsx
```

### Pourquoi des attributs `data-*` ?

On cible les éléments avec `data-reveal`, `data-hero-title`… plutôt qu'avec des
classes Tailwind. Ainsi, modifier le style ne casse jamais une animation, et en
lisant le JSX tu vois tout de suite **ce qui bouge**.

### Respecter les utilisateurs : `gsap.matchMedia()`

Certaines personnes activent « réduire les animations » sur leur téléphone ou
leur ordinateur (mal des transports, épilepsie, fatigue visuelle). On respecte ce choix :

```js
const mm = gsap.matchMedia();
mm.add(MOTION, () => {
  // animations SEULEMENT si l'utilisateur les accepte
});
mm.add(REDUCE, () => {
  // version sans mouvement (ex. l'avion posé directement à l'arrivée)
});
return () => mm.revert();   // nettoyage
```

On combine aussi des conditions : `${MOTION} and (hover: hover)` désactive
l'effet 3D des cartes sur mobile (pas de souris) dans `useTilt.js`.

---

## 5. Les timelines : orchestrer une séquence

📁 `src/components/home/Hero.jsx`

Une **timeline** est une suite d'animations placées sur une ligne du temps.

```js
const tl = gsap.timeline();
tl.from(title.chars, { yPercent: 120, stagger: 0.04 })      // 1. les lettres
  .from(text.lines,  { yPercent: 100 }, '-=0.5')             // 2. 0,5 s AVANT la fin de 1
  .from('[data-hero-cta]', { scale: 0.6 }, '-=0.4')          // 3. chevauche 2
  .from('[data-hero-img]', { clipPath: 'inset(100% 0 0 0)' }, 0.2); // 4. à 0,2 s du début
```

Le **3e paramètre** (la position) est la clé :

| Position | Signification |
|---|---|
| *(rien)* | après l'animation précédente |
| `'-=0.5'` | 0,5 s avant la fin de la précédente (chevauchement) |
| `'+=0.2'` | 0,2 s après la fin de la précédente (pause) |
| `0.2` | à 0,2 s exactement depuis le début de la timeline |
| `'<'` | en même temps que le début de la précédente |

Une timeline se pilote comme un lecteur vidéo : `play()`, `pause()`,
`reverse()`, `timeScale(2)` (vitesse x2). 📁 `src/components/MobileMenu.jsx`
construit la timeline **une fois**, en pause, puis la joue à l'ouverture
et la **rembobine** (`reverse`) à la fermeture.

---

## 6. ScrollTrigger : animer au scroll

### a) Déclencher une animation quand un élément apparaît

📁 `src/hooks/useReveal.js`

```js
ScrollTrigger.batch(items, {
  start: 'top 88%',           // quand le HAUT de l'élément atteint 88 % de l'écran
  once: true,                 // une seule fois
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.12 }),
});
```

`batch` regroupe les éléments qui entrent **en même temps** dans l'écran pour
les animer en cascade. C'est plus performant qu'un ScrollTrigger par élément.

Lis `start: 'top 88%'` ainsi : « **haut de l'élément** » rencontre « **88 % de
la hauteur de l'écran** ».

### b) Scrub : l'animation suit la molette

📁 `src/components/home/RouteMap.jsx`

```js
scrollTrigger: { trigger: scope.current, start: 'top 75%', end: 'bottom 45%', scrub: 1 }
```

Avec `scrub`, la progression de l'animation **est** la progression du scroll :
tu remontes, l'avion recule. `scrub: 1` ajoute 1 seconde de lissage.
Utilise `ease: 'none'` pour que le mouvement suive exactement le doigt.

### c) Pin : épingler une section

📁 `src/components/ProcessSteps.jsx`

```js
scrollTrigger: { trigger: scope.current, start: 'center center', end: '+=900', pin: true, scrub: 0.5 }
```

La section **reste fixe** pendant 900 px de scroll, le temps que la ligne de
progression se remplisse. On ne l'active que sur grand écran (`min-width: 768px`).

### d) Lire la direction du scroll

📁 `src/components/Navbar.jsx`

```js
ScrollTrigger.create({
  onUpdate: (self) => (self.direction === 1 ? hide.play() : hide.reverse()),
});
```

`self.direction` vaut `1` quand on descend et `-1` quand on remonte. La barre se
cache quand on descend et réapparaît quand on remonte.

> 💡 Pour déboguer, ajoute `markers: true` dans un `scrollTrigger` : des repères
> `start` et `end` s'affichent sur la page. Pense à les retirer ensuite.

---

## 7. SplitText : animer lettre par lettre

📁 `src/components/home/Hero.jsx`

```js
const title = SplitText.create('[data-hero-title]', { type: 'chars' });
const text  = SplitText.create('[data-hero-text]',  { type: 'lines', mask: 'lines' });
```

SplitText découpe le texte en `<div>` : `title.chars` (lettres), `.words` (mots)
ou `.lines` (lignes). L'option `mask: 'lines'` place chaque ligne dans un cadre
qui masque ce qui dépasse : le texte semble **sortir de nulle part**.
`useGSAP` remet automatiquement le texte d'origine quand le composant disparaît.

---

## 8. DrawSVG et MotionPath : dessiner et suivre un chemin

📁 `src/components/home/RouteMap.jsx`, `src/pages/Service.jsx`, `src/components/contact/SuccessCheck.jsx`

**DrawSVG** anime le tracé d'un SVG, comme si on le dessinait au stylo :

```js
gsap.from('#zb-route', { drawSVG: '0%' });        // la ligne se dessine de 0 à 100 %
```

Il ne marche que sur les éléments **tracés au trait** (`stroke`). C'est le cas
des icônes des services, de la route et de la coche de succès.

**MotionPath** fait suivre un chemin SVG à un élément :

```js
gsap.to('[data-route-plane]', {
  motionPath: {
    path: '#zb-route',          // le chemin à suivre
    align: '#zb-route',         // se caler sur ses coordonnées
    alignOrigin: [0.5, 0.5],    // le CENTRE de l'avion suit la ligne
    autoRotate: 45,             // s'oriente selon la pente (+45° car l'icône pointe en diagonale)
  },
});
```

Ces deux tweens sont placés à la **même position** (`0`) dans la timeline :
la ligne se dessine pendant que l'avion avance dessus.

---

## 9. Flip : réorganiser une grille en douceur

📁 `src/hooks/useFlipGrid.js` et `src/pages/Produit.jsx`

FLIP veut dire **F**irst, **L**ast, **I**nvert, **P**lay :

1. **First** : `Flip.getState()` photographie la position de chaque carte ;
2. React change la liste (nouveau filtre) : c'est le **Last** ;
3. **Invert + Play** : `Flip.from(state)` replace chaque carte à son ancienne
   position, puis l'anime vers la nouvelle.

```js
const go = (url) => { capture(); navigate(url); };  // photo AVANT le changement
```

Chaque carte porte `data-flip-id={p.id}` : c'est ce qui permet à Flip de
reconnaître « la même carte » avant et après le filtrage. Les nouvelles cartes
passent par `onEnter` (fondu + zoom).

---

## 10. quickTo : suivre la souris sans ralentir

📁 `src/hooks/useTilt.js` et `src/hooks/useMagnetic.js`

Créer un `gsap.to()` à chaque mouvement de souris (60 fois par seconde) est
coûteux. `quickTo` crée **une** fonction réutilisable :

```js
const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
el.addEventListener('pointermove', (e) => xTo(calculDuDecalage(e)));
```

C'est la base de l'inclinaison 3D des cartes produits et du bouton « aimanté ».

**Animer un nombre** (📁 `src/components/home/Stats.jsx`) : GSAP peut animer
n'importe quel objet JavaScript, pas seulement le DOM.

```js
const obj = { n: 0 };
gsap.to(obj, { n: 76, onUpdate: () => (el.textContent = Math.round(obj.n)) });
```

---

## 11. Pièges classiques (et comment ils sont évités ici)

| Piège | Conséquence | Solution dans le projet |
|---|---|---|
| Masquer le contenu en CSS (`opacity: 0`) en attendant le JS | Site vide si le JS plante ou est lent | L'état de départ est posé **par GSAP** (`gsap.set`) |
| Ne pas nettoyer les animations | Fuites, animations fantômes | `useGSAP` + `mm.revert()` |
| `transition-all` en CSS sur un élément animé par GSAP | Les deux se battent, rendu flou ou à moitié transparent | `transition-colors` / `transition-shadow` seulement |
| Animer `width`, `top`, `left` | Saccades (le navigateur recalcule la mise en page) | On anime **uniquement** `transform` (`x`, `y`, `scale`) et `opacity` |
| Ignorer « réduire les animations » | Inconfort, voire malaise pour certains | `gsap.matchMedia()` partout |
| Transition de page à chaque changement d'URL | Le catalogue « clignote » à chaque filtre | `pageKey` dans `Layout.jsx` |
| Oublier `ScrollTrigger.refresh()` après un changement de mise en page | Déclencheurs décalés | Appelé à la fin de la transition de page |

---

## 12. Exercices pour progresser

1. **Facile** : dans `NotFound.jsx`, change l'easing de l'avion en
   `'elastic.inOut'` et observe la différence.
2. **Facile** : ajoute `markers: true` dans le `scrollTrigger` de `RouteMap.jsx`
   et regarde où se trouvent `start` et `end`.
3. **Moyen** : dans `Hero.jsx`, remplace `type: 'chars'` par `type: 'words'` et
   ajuste le `stagger`.
4. **Moyen** : ajoute l'attribut `data-reveal` sur le footer pour qu'il apparaisse au scroll.
5. **Avancé** : dans `RouteMap.jsx`, ajoute un 3e point « Dubaï » en escale et
   fais passer la route par ce point (modifie la constante `ROUTE`).

Documentation officielle : <https://gsap.com/docs/v3/>
