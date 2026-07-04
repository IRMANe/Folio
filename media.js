/* ============================================================================
   media.js — REGISTRE CENTRAL DE TOUTES LES IMAGES DU SITE
   ----------------------------------------------------------------------------
   Hébergement statique (GitHub Pages) : aucune image n'est uploadée à chaud.
   Chaque image est un fichier réel rangé dans  /images/<projet>/  et déclaré
   ici. Pour changer une image : remplace le fichier (même nom) OU change le
   chemin `src` ci-dessous. Tout se charge en lazy-loading (voir image-slot.js).

   📁 STRUCTURE DES DOSSIERS
      images/
        kenya/        → projet Kenya Airways  (couverture, persona, écrans…)
        playmobil/    → projet Playmobil
        hairly/       → projet Hairly         (+ vidéos .mp4 de démo)
        about/        → portrait de la page « À propos »
      (chaque nouveau projet = un nouveau sous-dossier images/<projet>/)

   👉 Guide complet d'ajout d'un projet : voir  images/README.md
   ============================================================================ */


/* ════════════════════════════════════════════════════════════════════════════
   1) GALERIE DE PROJETS  (cartes des pages « Accueil » et « Mes projets »)

   ▶▶▶  POUR AJOUTER UN NOUVEAU PROJET À LA GALERIE  ◀◀◀
   1. Crée le dossier  images/<mon-projet>/  et dépose-y l'image de couverture
      (ex :  images/mon-projet/cover-mon-projet.webp  — .webp de préférence).
   2. Décommente le MODÈLE en bas de cette liste et complète les champs.
   3. Le texte bilingue (titre, description, tags, année) se règle dans le
      tableau `projects` du fichier  shared.jsx  — garde le même `id`.
   ════════════════════════════════════════════════════════════════════════════ */
const GALLERY = [
  {
    id:    'playmobil',                                   // identifiant (= id dans shared.jsx)
    src:   'images/playmobil/cover-playmobil.webp',       // chemin de l'image de couverture
    title: 'Playmobil',                                   // titre court
    desc:  'Repositionnement UX & Design System',         // description courte
    alt:   'Couverture du projet Playmobil — repositionnement UX et design system', // texte alternatif (accessibilité + SEO)
  },
  {
    id:    'hairly',
    src:   'images/hairly/cover.jpg',
    title: 'Hairly',
    desc:  'Marketplace mobile de coiffure à domicile',
    alt:   'Couverture du projet Hairly — marketplace mobile de réservation de coiffure à domicile',
  },
  {
    id:    'kenya',
    src:   'images/kenya/cover-kenya.webp',
    title: 'Kenya Airways',
    desc:  "Réaligner une app avec l'âme d'une marque",
    alt:   "Couverture du projet Kenya Airways — refonte de l'expérience mobile",
  },

  /* ▼▼▼  MODÈLE — pour ajouter un projet, décommente ce bloc et complète-le  ▼▼▼
  {
    id:    'mon-projet',
    src:   'images/mon-projet/cover-mon-projet.webp',
    title: 'Mon projet',
    desc:  'Une description courte du projet',
    alt:   "Texte alternatif décrivant l'image de couverture",
  },
  ▲▲▲  ───────────────────────────────────────────────────────────────────  ▲▲▲ */
];


/* ════════════════════════════════════════════════════════════════════════════
   2) IMAGES INTERNES DES ÉTUDES DE CAS  (regroupées par projet)
   Clé = identifiant de l'emplacement (id) utilisé dans le HTML ; valeur =
   { src: chemin du fichier, alt: texte alternatif }. Pour remplacer une image,
   ajuste son `src`.

   ⚠️ Les captures d'écran « scénario » de Kenya (recommandations + parcours)
   sont définies directement dans  kenya-case.jsx  (tableaux `recos` et `flow`,
   avec leur légende) et pointent vers  images/kenya/screen-*.webp.
   ════════════════════════════════════════════════════════════════════════════ */
const MEDIA = {

  /* ── Kenya Airways ──────────────────────────────────────────────────────── */
  'kn-mapping':   { src: 'images/kenya/kn-mapping.webp',   alt: 'Cartographie de positionnement concurrentiel de Kenya Airways' },
  'kn-persona-0': { src: 'images/kenya/kn-persona-0.webp', alt: 'Persona Kenya Airways — Nancy' },
  'kn-persona-1': { src: 'images/kenya/kn-persona-1.webp', alt: 'Persona Kenya Airways — Daniel' },
  'kn-journey-0': { src: 'images/kenya/kn-journey-0.webp', alt: 'User journey Kenya Airways — retard de vol' },
  'kn-journey-1': { src: 'images/kenya/kn-journey-1.webp', alt: 'User journey Kenya Airways — annulation' },
  'kn-journey-2': { src: 'images/kenya/kn-journey-2.webp', alt: 'User journey Kenya Airways — problème de bagages' },

  /* ── Playmobil ──────────────────────────────────────────────────────────── */
  'pm-persona-img':    { src: 'images/playmobil/pm-persona-img.webp',    alt: 'Persona du projet Playmobil' },
  'pm-ds-card-0':      { src: 'images/playmobil/pm-ds-card-0.webp',      alt: 'Composant du design system Playmobil (1)' },
  'pm-ds-card-1':      { src: 'images/playmobil/pm-ds-card-1.webp',      alt: 'Composant du design system Playmobil (2)' },
  'pm-ds-card-2':      { src: 'images/playmobil/pm-ds-card-2.webp',      alt: 'Composant du design system Playmobil (3)' },
  'pm-ds-card-3':      { src: 'images/playmobil/pm-ds-card-3.webp',      alt: 'Composant du design system Playmobil (4)' },
  'pm-design-hero':    { src: 'images/playmobil/pm-design-hero.webp',    alt: "Maquette de l'accueil de l'application Playmobil" },
  'pm-design-desktop': { src: 'images/playmobil/pm-design-desktop.webp', alt: 'Maquette desktop du projet Playmobil' },

  /* ── Hairly ─────────────────────────────────────────────────────────────── */
  'hr-persona-0': { src: 'images/hairly/hr-persona-0.webp', alt: 'Persona Hairly — Amina' },
  'hr-persona-1': { src: 'images/hairly/hr-persona-1.webp', alt: 'Persona Hairly — Ryane' },
  /* Les vidéos de démo Hairly sont des balises <video> natives (webm + mp4)
     définies dans hairly-case.jsx ; voir videos/hairly/. */

  /* ── À propos ───────────────────────────────────────────────────────────── */
  'about-portrait': { src: 'images/about/profil.webp', alt: "Portrait d'Irmane, UX/UI Designer" },
};

/* Les couvertures de la GALERIE sont injectées dans MEDIA pour que les cartes
   (id « cover-<projet> ») retrouvent automatiquement leur image. Ne pas modifier. */
GALLERY.forEach((p) => { MEDIA['cover-' + p.id] = { src: p.src, alt: p.alt }; });

window.GALLERY = GALLERY;
window.MEDIA = MEDIA;
