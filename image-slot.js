/**
 * <image-slot> — affichage d'image STATIQUE (version production).
 *
 * ⚠️ La fonctionnalité d'upload (glisser-déposer, recadrage, sauvegarde) a été
 * retirée : ce site est hébergé sur un serveur statique (GitHub Pages) qui ne
 * peut pas enregistrer de fichiers. Les images sont maintenant des fichiers
 * réels du dossier /images/, déclarés dans  media.js  (window.MEDIA).
 *
 * Ce composant ne fait plus qu'afficher l'image — en lazy-loading — en gardant
 * exactement la même mise en page que la version d'origine. Pour changer une
 * image : voir  media.js.
 *
 * Attributs lus :
 *   id          → clé recherchée dans window.MEDIA pour trouver { src, alt }
 *   src         → chemin d'image de repli si l'id n'est pas dans window.MEDIA
 *   alt         → texte alternatif de repli
 *   shape       'rect' | 'rounded' | 'circle' | 'pill'   (défaut 'rounded')
 *   radius      rayon des coins en px pour 'rounded'      (défaut 12)
 *   mask        clip-path CSS arbitraire (prioritaire sur shape)
 *   fit         object-fit: cover | contain | fill         (défaut 'cover')
 *   position    object-position pour fit=contain|fill       (défaut '50% 50%')
 */

(() => {
  const stylesheet =
    ':host{display:inline-block;position:relative;vertical-align:top;width:240px;height:160px}' +
    '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
    '.frame img{position:absolute;inset:0;width:100%;height:100%;display:none;' +
    '  -webkit-user-drag:none;user-select:none}';

  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'src', 'alt', 'id'];
    }

    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>' + stylesheet + '</style>' +
        '<div class="frame" part="frame">' +
        '  <img part="image" alt="" draggable="false" loading="lazy" decoding="async" style="display:none">' +
        '</div>';
      this._frame = root.querySelector('.frame');
      this._img = root.querySelector('img');
    }

    connectedCallback() { this._render(); }
    attributeChangedCallback() { if (this.shadowRoot) this._render(); }

    _resolve() {
      const id = this.id;
      const m = (window.MEDIA && id && window.MEDIA[id]) || null;
      const src = (m && m.src) || this.getAttribute('src') || '';
      const alt = (m && m.alt) || this.getAttribute('alt') || '';
      return { src, alt };
    }

    _render() {
      // Forme / masque (identique à l'origine).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';
      else if (shape === 'pill') radius = '9999px';
      else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';

      // object-fit / object-position.
      const fit = this.getAttribute('fit') || 'cover';
      this._img.style.objectFit = fit;
      this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';

      const { src, alt } = this._resolve();
      if (src) {
        if (this._img.getAttribute('src') !== src) this._img.setAttribute('src', src);
        this._img.setAttribute('alt', alt);
        this._img.style.display = 'block';
        this.setAttribute('data-filled', '');
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this.removeAttribute('data-filled');
      }
    }
  }

  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
