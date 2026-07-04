# 📁 Dossier `images/` (+ `videos/`) — guide d'utilisation

Tous les médias du portfolio sont des **fichiers statiques** rangés ici,
organisés **par projet**. Pas d'upload dynamique (impossible sur GitHub Pages
sans serveur) : pour changer une image, on remplace le fichier ou on modifie son
chemin dans `media.js`.

> ⚠️ **Noms web-safe** — les dossiers et fichiers sont en **minuscules, sans
> espaces ni accents**. GitHub Pages est servi sur un système Linux
> sensible à la casse : un dossier « Kenya Airways » (avec espace + majuscules)
> casse les URLs. Garde toujours des noms du type `kenya/`, `cover-kenya.webp`.

## Structure réelle

```
images/
├── README.md                  ← ce fichier
├── about/
│   └── about-portrait.webp        portrait « À propos »
├── kenya/                          projet Kenya Airways
│   ├── cover-kenya.webp                couverture (galerie)
│   ├── kn-mapping.webp                 positionnement concurrentiel
│   ├── kn-persona-0.webp               persona Nancy (Toulouse)
│   ├── kn-persona-1.webp               persona Daniel (Londres)
│   ├── kn-journey-0.webp               parcours · retard de vol
│   ├── kn-journey-1.webp               parcours · annulation
│   ├── kn-journey-2.webp               parcours · problème de bagage
│   ├── screen-alerte.webp              écran · vol retardé
│   ├── screen-rebooking.webp           écran · vols alternatifs
│   ├── screen-assistance.webp          écran · assistant / chat
│   ├── screen-confirmation.webp        écran · vol confirmé
│   ├── screen-help.webp                écran · centre d'assistance
│   └── screen-notifications.webp       écran · notification d'annulation
├── playmobil/                      projet Playmobil
│   ├── cover-playmobil.webp            couverture (galerie)
│   ├── pm-persona-img.webp             persona Cyrien Dufay
│   ├── pm-design-hero.webp             maquette app (« app-mockup »)
│   ├── pm-design-desktop.webp          maquette desktop (« website-laptop »)
│   └── pm-ds-card-0.webp … pm-ds-card-3.webp   cartes du design system
├── hairly/                         projet Hairly
│   ├── cover.jpg                       couverture + poster des vidéos
│   ├── hr-persona-0.webp               persona Amina
│   └── hr-persona-1.webp               persona Ryane
└── …

videos/                              (à la racine du projet, à côté de images/)
└── hairly/                         vidéos de démo Hairly (webm + mp4)
    ├── onboarding.webm / .mp4
    ├── reservation-prerequis.webm / .mp4
    └── reservation-analyse-cheveux.webm / .mp4
```

## Le registre central : `media.js` (à la racine)

`media.js` associe à chaque emplacement (`id`) son **chemin** (`src`), son
**titre/description** (galerie) et son **texte alternatif** (`alt`,
accessibilité + SEO). C'est le **seul endroit** à modifier pour la plupart des
changements d'images.

Les **vidéos Hairly** ne passent pas par `media.js` : ce sont des balises
`<video>` natives définies dans `hairly-case.jsx` (autoplay, muted, loop,
playsinline, `poster="images/hairly/cover.jpg"`, source `.webm` prioritaire puis
`.mp4` en repli). Les **écrans Kenya** (recommandations + parcours) sont
référencés directement dans `kenya-case.jsx` (tableaux `recos` et `flow`).

---

## ➕ Modifier ou ajouter un média

### Remplacer une image existante (le plus simple)
Dépose le nouveau fichier dans le bon sous-dossier **en gardant le même nom**
(ex : `images/kenya/kn-persona-0.webp`). Rien d'autre à faire.
Pour un **nom différent**, change le `src` de la ligne correspondante dans
`media.js`.

### Ajouter un projet à la galerie
1. Crée `images/<mon-projet>/` avec au moins la couverture.
2. `media.js → GALLERY` : décommente le bloc `MODÈLE` et complète
   `id`, `src`, `title`, `desc`, `alt`.
3. `shared.jsx → projects` : ajoute le projet avec le **même `id`**.

### Ajouter / changer une vidéo Hairly
Dépose `videos/hairly/<nom>.webm` **et** `<nom>.mp4`, puis ajoute/édite l'entrée
correspondante dans le tableau des vidéos de `hairly-case.jsx`.

---

## 🗜️ Bonnes pratiques (performance)

- **Format image** : privilégie le **`.webp`** (≈ 5–10× plus léger qu'un PNG).
- **Dimensions** : ~1600 px max sur le grand côté suffit pour le web (retina inclus).
- **Responsive** : laisse le CSS gérer la taille — les médias sont affichés en
  `width:100%` / `height:auto`, jamais en taille fixe en pixels.
- **Vidéos** : fournis toujours `.webm` (léger, prioritaire) **et** `.mp4`
  (compatibilité). Pour alléger : ré-encode hors navigateur (ex : `ffmpeg -crf 30`).

## 🔤 Texte alternatif (`alt`)

Chaque image porte un `alt` court, factuel et descriptif (défini dans `media.js`) :
lu par les lecteurs d'écran et indexé par Google.
