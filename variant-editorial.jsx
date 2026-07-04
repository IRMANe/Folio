/* Variant 1 — Refined Editorial
   Direction: classic editorial elevation of the original. Instrument Serif
   italic for warmth, Manrope for body, a 12-col rhythm with one "indented"
   bio paragraph. Cards keep the original 3-up grid but with index numbers,
   year, role meta, hairline borders, and a hover-arrow. */

function VariantEditorial({ accent, accentSoft, accentInk }) {
  const [lang, setLang] = React.useState('fr');
  const [theme, setTheme] = React.useState('light');
  const t = I18N[lang];

  return (
    <div className="ed-root" data-theme={theme} style={{
      width:'100%', minHeight:'100%',
      background:'var(--paper)', color:'var(--ink)',
      fontFamily:'Manrope, system-ui, sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition:'background .3s, color .3s',
    }}>
      <style>{`
        .ed-root { font-feature-settings: "ss01","cv11"; }
        .ed-serif { font-family: 'Instrument Serif', 'Newsreader', serif; font-weight: 400; letter-spacing: -0.01em; }
        .ed-italic { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .ed-eyebrow { font-family: Manrope, sans-serif; font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; font-weight: 600; color: var(--ink-muted); }
        .ed-card { background: var(--card); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s, border-color .35s; }
        .ed-card:hover { transform: translateY(-4px); border-color: var(--line-strong); box-shadow: 0 24px 60px -28px rgba(15,42,27,.22); }
        .ed-card:hover .ed-card-arrow { transform: translate(2px,-2px); background: var(--accent); color: #fff; }
        .ed-pill { display:inline-flex; align-items:center; height:26px; padding:0 10px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:11.5px; font-weight:500; letter-spacing:0.1px; }
        .ed-rule { height:1px; background: var(--line); width: 100%; }
        .ed-link { position: relative; }
        .ed-link::after { content:''; position:absolute; left:0; right:0; bottom:-3px; height:1px; background: currentColor; transform: scaleX(0); transform-origin:left; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
        .ed-link:hover::after { transform: scaleX(1); }
        .ed-cta { display:inline-flex; align-items:center; gap:10px; height:54px; padding:0 22px; border-radius:999px; font-size:14.5px; font-weight:600; letter-spacing:0.1px; transition: transform .2s, background .2s, color .2s; }
        .ed-cta:hover { transform: translateY(-1px); }
        .ed-dot { width:8px; height:8px; border-radius:999px; background: var(--accent); }
        .ed-dot.pulse::before { content:''; position:absolute; inset:-4px; border-radius:999px; border: 1.5px solid var(--accent); opacity:.45; animation: edPulse 2s ease-out infinite; }
        @keyframes edPulse { 0% { transform: scale(.6); opacity:.6 } 100% { transform: scale(1.6); opacity: 0 } }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ position:'sticky', top:0, zIndex:10, background:'color-mix(in oklab, var(--paper) 88%, transparent)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'18px 60px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'baseline', gap:14 }}>
            <span style={{ fontFamily:'"Instrument Serif", serif', fontStyle:'italic', fontSize:24, lineHeight:1 }}>I<span style={{ color:'var(--accent)', fontStyle:'normal' }}>.</span>UX</span>
          </div>
          <ResponsiveNav linkClass="ed-link" gap={34} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: '#work', label: t.navWork },
              { href: '#about', label: t.navAbout },
              { href: '#contact', label: t.navContact },
            ]} />
        </div>
      </header>

      {/* — HERO — */}
      <section style={{ maxWidth:1180, margin:'0 auto', padding:'110px 60px 64px', position:'relative' }}>
        {/* meta strip top */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:64 }}>
          <span className="ed-eyebrow">{t.portfolioYr} · 01 · {t.section[`01`] ?? t.section['01']}</span>
          <span style={{ position:'relative', display:'inline-flex', alignItems:'center', gap:10, fontSize:12.5, color:'var(--ink-muted)' }}>
            <span className="ed-dot pulse" style={{ position:'relative' }}/>
            {t.availableLong}
          </span>
        </div>

        {/* Headline grid */}
        <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', alignItems:'end', gap:24 }}>
          <h1 className="ed-serif" style={{ fontSize:240, lineHeight:0.88, letterSpacing:-6, fontWeight:400 }}>
            Ir<span className="ed-italic">m</span>ane.
          </h1>
          <div style={{ paddingBottom:24, textAlign:'right' }}>
            <span className="ed-eyebrow" style={{ display:'block' }}>{t.based} {t.location}</span>
            <span className="ed-italic" style={{ fontSize:22, color:'var(--ink-2)' }}>UX/UI Designer ·&nbsp;2018–2026</span>
          </div>
        </div>

        {/* Bio + CTAs */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, marginTop:64, alignItems:'start' }}>
          <div>
            <div className="ed-eyebrow" style={{ marginBottom:14 }}>{t.aboutLabel} · 001</div>
            <p style={{ fontSize:20, lineHeight:1.55, color:'var(--ink-2)', textWrap:'pretty', maxWidth:520 }}>
              {t.bio}
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:24, alignItems:'flex-start' }}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:8 }}>
              <span className="ed-eyebrow">{t.nowPlaying}</span>
              <span className="ed-italic" style={{ fontSize:22, color:'var(--ink-2)', lineHeight:1.3 }}>{t.nowPlayingItem}</span>
            </div>
            <div style={{ display:'flex', gap:10, marginTop:16 }}>
              <a className="ed-cta" href="#contact" style={{ background:'var(--accent)', color:'#fff' }}>
                {t.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a className="ed-cta" href="#work" style={{ border:'1px solid var(--line-strong)', color:'var(--ink)' }}>
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* — WORK — */}
      <section id="work" style={{ maxWidth:1180, margin:'0 auto', padding:'40px 60px 80px' }}>
        <div className="ed-rule"/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', padding:'40px 0 30px' }}>
          <div>
            <div className="ed-eyebrow" style={{ marginBottom:10 }}>02 · {t.section['02']} · {t.indexLabel}</div>
            <h2 className="ed-serif" style={{ fontSize:64, letterSpacing:-1.5, lineHeight:1 }}>
              <span className="ed-italic">{t.selectedWork}</span>
            </h2>
          </div>
          <div style={{ display:'flex', gap:18, alignItems:'center', fontSize:12, color:'var(--ink-muted)', letterSpacing:0.8 }}>
            <span>2024 · 2026</span>
            <span style={{ width:22, height:1, background:'var(--line-strong)' }}/>
            <span>03 {t.projectCol}</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:22 }}>
          {t.projects.map((p, i) => {
            const Thumb = THUMBS[p.id];
            return (
              <article key={p.id} className="ed-card">
                <div style={{ aspectRatio:'4/5', position:'relative' }}>
                  <Thumb/>
                  <div style={{ position:'absolute', top:14, left:14, display:'inline-flex', alignItems:'center', gap:6, background:'rgba(255,255,255,0.85)', backdropFilter:'blur(6px)', borderRadius:999, padding:'4px 10px', fontSize:10.5, letterSpacing:0.6, color:'#0F2A1B', fontWeight:600 }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                </div>
                <div style={{ padding:'22px 22px 24px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8 }}>
                    <h3 className="ed-serif" style={{ fontSize:30, lineHeight:1, letterSpacing:-0.6 }}>{p.title}</h3>
                    <span style={{ fontSize:12, color:'var(--ink-muted)', fontVariantNumeric:'tabular-nums' }}>{p.year}</span>
                  </div>
                  <p style={{ fontSize:14, lineHeight:1.5, color:'var(--ink-muted)', minHeight:42, marginBottom:18, textWrap:'pretty' }}>
                    {p.desc}
                  </p>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:12 }}>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {p.tags.map(tag => <span key={tag} className="ed-pill">{tag}</span>)}
                    </div>
                    <span className="ed-card-arrow" style={{ flex:'0 0 auto', width:36, height:36, borderRadius:999, border:'1px solid var(--line-strong)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--ink)', transition:'all .25s' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* — ABOUT TEASE — */}
      <section id="about" style={{ maxWidth:1180, margin:'0 auto', padding:'40px 60px 100px' }}>
        <div className="ed-rule"/>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, padding:'56px 0 0' }}>
          <div>
            <div className="ed-eyebrow">03 · {t.section['03']}</div>
            <h2 className="ed-serif" style={{ fontSize:52, lineHeight:1, marginTop:14 }}><span className="ed-italic">{t.bioAside}</span></h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:30, fontSize:13.5, color:'var(--ink-muted)', lineHeight:1.55, paddingTop:8 }}>
            <div>
              <div className="ed-eyebrow" style={{ marginBottom:8 }}>{t.elsewhere}</div>
              <a className="ed-link" href="#">Read.cv</a><br/>
              <a className="ed-link" href="#">LinkedIn</a><br/>
              <a className="ed-link" href="#">Are.na</a>
            </div>
            <div>
              <div className="ed-eyebrow" style={{ marginBottom:8 }}>{t.footerColophon}</div>
              Instrument Serif<br/>
              Manrope<br/>
              <span style={{ color:'var(--ink-faint)' }}>v.2026.05</span>
            </div>
            <div>
              <div className="ed-eyebrow" style={{ marginBottom:8 }}>{t.footerSay}</div>
              <a className="ed-link" href="mailto:hi@irmane.studio" style={{ color:'var(--ink)' }}>hi@irmane.studio</a><br/>
              <span>+33 6 12 34 56 78</span>
            </div>
          </div>
        </div>
      </section>

      {/* — FOOTER — */}
      <footer style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'26px 60px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'var(--ink-muted)', letterSpacing:0.3 }}>
          <span>© {t.footerCredit} · 2026</span>
          <a className="ed-link" href="#">{t.backToTop} ↑</a>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { VariantEditorial });
