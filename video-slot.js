/**
 * <video-slot> — affichage de vidéo STATIQUE (version production).
 *
 * ⚠️ Comme <image-slot>, l'upload a été retiré (hébergement statique). Les
 * vidéos sont des fichiers réels du dossier /images/, déclarés dans  media.js
 * (window.MEDIA). La vidéo joue en muet, en boucle, en autoplay, sans contrôles
 * — exactement comme la version d'origine.
 *
 * Attributs lus :
 *   id          → clé recherchée dans window.MEDIA pour trouver { src, alt }
 *   src         → chemin de repli si l'id n'est pas dans window.MEDIA
 *   shape       'rect' | 'rounded' | 'circle' | 'pill'   (défaut 'rounded')
 *   radius      rayon des coins en px pour 'rounded'      (défaut 12)
 *   fit         object-fit: cover | contain | fill         (défaut 'cover')
 */

(() => {
  const stylesheet =
    ':host{display:inline-block;position:relative;vertical-align:top;width:240px;height:160px}' +
    '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
    '.frame video{position:absolute;inset:0;width:100%;height:100%;display:none;' +
    '  background:#000;-webkit-user-drag:none}';

  class VideoSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'fit', 'src', 'id'];
    }

    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>' + stylesheet + '</style>' +
        '<div class="frame" part="frame">' +
        '  <video part="video" muted loop autoplay playsinline preload="metadata" style="display:none"></video>' +
        '</div>';
      this._frame = root.querySelector('.frame');
      this._video = root.querySelector('video');
    }

    connectedCallback() { this._render(); }
    attributeChangedCallback() { if (this.shadowRoot) this._render(); }

    _resolve() {
      const id = this.id;
      const m = (window.MEDIA && id && window.MEDIA[id]) || null;
      return (m && m.src) || this.getAttribute('src') || '';
    }

    _render() {
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';
      else if (shape === 'pill') radius = '9999px';
      else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = radius;
      this._video.style.objectFit = this.getAttribute('fit') || 'cover';

      const src = this._resolve();
      if (src) {
        if (this._video.getAttribute('src') !== src) {
          this._video.setAttribute('src', src);
          this._video.muted = true;
          const p = this._video.play();
          if (p && p.catch) p.catch(() => {});
        }
        this._video.style.display = 'block';
        this.setAttribute('data-filled', '');
      } else {
        this._video.style.display = 'none';
        this._video.removeAttribute('src');
        this.removeAttribute('data-filled');
      }
    }
  }

  if (!customElements.get('video-slot')) {
    customElements.define('video-slot', VideoSlot);
  }
})();
