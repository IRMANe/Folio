/* tweaks-app.jsx — wraps the homepage (VariantIndex) with an expressive Tweaks panel.
   Three controls that reshape the whole feel of the editorial index, rather than
   nudging one property:
     • Palette  — swaps the accent trio (mood / energy of every highlight)
     • Display  — swaps the headline typeface (the entire type-led personality)
     • Ambiance — flips the cream canvas to a deep night-green reading mode
   Palette is threaded as props (VariantIndex already accepts an accent trio); the
   other two toggle <body> classes that a static stylesheet (below) reacts to, so
   we never reach inside VariantIndex's own state. */

const ACCENT_PALETTES = {
  Olive:      ['#6E8E3A', '#DAEACD', '#355C1E'],
  Terracotta: ['#C0613C', '#F1DACE', '#7A3119'],
  Cobalt:     ['#3B6FB0', '#D3DEF1', '#23477A'],
  Plum:       ['#8A5AA0', '#E7D9EF', '#4E2D62'],
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#6E8E3A", "#DAEACD", "#355C1E"],
  "display": "grotesque",
  "ambiance": "cream"
}/*EDITMODE-END*/;

// Inject the static rules the body-class tweaks react to (once).
(function injectTweakStyle() {
  if (document.getElementById('ix-tweak-style')) return;
  const s = document.createElement('style');
  s.id = 'ix-tweak-style';
  s.textContent = `
    /* — Display typeface swaps (whole headline personality) — */
    body.ixt-display-serif .ix-display,
    body.ixt-display-serif .ix-rowtitle {
      font-family: 'Instrument Serif', 'Newsreader', Georgia, serif !important;
      font-weight: 400 !important;
      letter-spacing: -0.01em !important;
    }
    body.ixt-display-mono .ix-display,
    body.ixt-display-mono .ix-rowtitle {
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
      font-weight: 500 !important;
      letter-spacing: -0.04em !important;
    }
    body.ixt-display-mono .ix-display { line-height: 0.98 !important; }

    /* — Ambiance: deep night-green reading mode — */
    body.ixt-dark .ix-root {
      background: #0E1C14 !important;
      color: #EFE9DA !important;
      --paper: #0E1C14 !important;
      --paper-2: #152922 !important;
      --ink: #EFE9DA !important;
      --ink-2: #DED7C5 !important;
      --ink-muted: #9DAFA1 !important;
      --ink-faint: #6A7A6F !important;
      --line: rgba(239,233,218,0.13) !important;
      --line-strong: rgba(239,233,218,0.24) !important;
      --card: #182B22 !important;
      --card-2: #1F3A2C !important;
    }
  `;
  document.head.appendChild(s);
})();

function paletteName(arr) {
  for (const [name, pal] of Object.entries(ACCENT_PALETTES)) {
    if (pal[0].toLowerCase() === (arr && arr[0] || '').toLowerCase()) return name;
  }
  return 'Olive';
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pal = Array.isArray(t.palette) ? t.palette : ACCENT_PALETTES.Olive;

  React.useEffect(() => {
    const b = document.body.classList;
    b.toggle('ixt-display-serif', t.display === 'serif');
    b.toggle('ixt-display-mono', t.display === 'mono');
    b.toggle('ixt-dark', t.ambiance === 'dark');
  }, [t.display, t.ambiance]);

  return (
    <React.Fragment>
      <VariantIndex accent={pal[0]} accentSoft={pal[1]} accentInk={pal[2]} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Couleur" />
        <TweakColor
          label="Palette d'accent"
          value={pal}
          options={Object.values(ACCENT_PALETTES)}
          onChange={(v) => setTweak('palette', v)}
        />

        <TweakSection label="Typographie" />
        <TweakRadio
          label="Affichage"
          value={t.display}
          options={['grotesque', 'serif', 'mono']}
          onChange={(v) => setTweak('display', v)}
        />

        <TweakSection label="Ambiance" />
        <TweakRadio
          label="Canevas"
          value={t.ambiance}
          options={['cream', 'dark']}
          onChange={(v) => setTweak('ambiance', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TweaksApp />);
