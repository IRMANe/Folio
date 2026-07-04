/* App — Design canvas with the three variants + accent tweak. */

const ACCENT_PALETTES = [
  /* [accent, softBg, softInk]  */
  ['#6E8E3A', '#DAEACD', '#355C1E'], // Forest (original)
  ['#C66E4C', '#F4DECF', '#7A3A22'], // Terracotta
  ['#4A7A9B', '#D5E2EE', '#264866'], // Ocean
  ['#8B5C7A', '#ECDDE5', '#5A2E48'], // Plum
  ['#222222', '#E3DFD5', '#111111'], // Ink (mono)
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#6E8E3A", "#DAEACD", "#355C1E"]
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [accent, accentSoft, accentInk] = t.accent;
  const variantProps = { accent, accentSoft, accentInk };

  return (
    <React.Fragment>
      <DesignCanvas>
        <DCSection id="directions" title="Irmane · Portfolio — three directions"
                   subtitle="Same content, same cream + green palette. Different rhythm, type, and layout DNA. Each artboard has its own working FR / EN and light / dark toggles.">
          <DCArtboard id="01-editorial" label="01 — Refined editorial" width={1280} height={2000}>
            <VariantEditorial {...variantProps}/>
          </DCArtboard>
          <DCArtboard id="02-asymmetric" label="02 — Asymmetric warm" width={1280} height={2100}>
            <VariantAsymmetric {...variantProps}/>
          </DCArtboard>
          <DCArtboard id="03-index" label="03 — Index / archive" width={1280} height={1820}>
            <VariantIndex {...variantProps}/>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent"/>
        <TweakColor label="Palette" value={t.accent} options={ACCENT_PALETTES}
                    onChange={(v) => setTweak('accent', v)}/>
        <div style={{ fontSize:11, lineHeight:1.5, color:'rgba(255,255,255,.55)', marginTop:6 }}>
          Accent + soft pill colour. Applies to all three directions live. Light/dark and FR/EN are per-artboard (toggle in each artboard's nav).
        </div>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
