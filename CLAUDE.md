# Portfolio — instructions projet

## Génération de PNG à partir de HTML (toujours @2x)
Quand tu génères une image PNG à partir d'un fichier HTML, applique **toujours** l'option @2x pour garantir une haute qualité :

1. Multiplie la `width` et la `height` de la `.card` par 2 dans le CSS.
2. Ajoute `transform: scale(0.5)` et `transform-origin: top left` sur la `.card`.
3. Génère le PNG avec `wkhtmltoimage --zoom 2`.

Exemple pour une carte de 935 × 477px :

```css
.card {
  width: 1870px;
  height: 954px;
  transform: scale(0.5);
  transform-origin: top left;
}
```

```bash
wkhtmltoimage --width 1870 --zoom 2 fichier.html fichier.png
```

L'image finale doit toujours être nette et lisible à sa taille d'affichage cible.
