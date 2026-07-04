/* Variant 2 — Asymmetric Warm
   Direction: magazine / portrait. Newsreader (humanist serif) + Geist sans.
   The name bleeds beyond the column. Bio sits in a narrow indented block.
   Project cards stair-step down the page on a 12-col grid with varied widths,
   so the reading flow is diagonal rather than rigid 3-up. */

function VariantAsymmetric({ accent, accentSoft, accentInk }) {
  const [lang, setLang] = React.useState('fr');
  const [theme, setTheme] = React.useState('light');
  const t = I18N[lang];

  return (
    <div className="as-root" data-theme={theme} style={{
      width:'100%', minHeight:'100%',
      background:'var(--paper)', color:'var(--ink)',
      fontFamily:'"Geist", "Manrope", system-ui, sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition:'background .3s, color .3s',
      position:'relative', overflow:'hidden',
    }}>
      <style>{`
        .as-root { letter-spacing: -0.005em; }
        .as-display { font-family: 'Newsreader', 'Instrument Serif', serif; font-weight: 380; }
        .as-italic { font-family: 'Newsreader', serif; font-style: italic; font-weight: 380; }
        .as-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.5px; text-transform: uppercase; color: var(--ink-muted); font-weight: 500; }
        .as-grid12 { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 22px; row-gap: 22px; }
        .as-card { background: var(--card); border-radius: 22px; overflow: hidden; transition: transform .4s cubic-bezier(.2,.7,.2,1); border: 1px solid var(--line); }
        .as-card:hover { transform: translateY(-6px); }
        .as-card .as-card-thumb { transition: transform .8s cubic-bezier(.2,.7,.2,1); }
        .as-card:hover .as-card-thumb { transform: scale(1.04); }
        .as-pill { display:inline-flex; align-items:center; height:24px; padding:0 10px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:11px; font-weight:500; }
        .as-rule { height:1px; background: var(--line); width:100%; }
        .as-cta { display:inline-flex; align-items:center; gap:10px; height:52px; padding:0 22px; border-radius:14px; font-size:14px; font-weight:500; transition: all .25s; }
        .as-cta:hover { transform: translateY(-1px); }
        .as-link { position: relative; transition: color .2s; }
        .as-link:hover { color: var(--accent); }
        .as-quote-mark { font-family: 'Newsreader', serif; font-style: italic; font-weight: 380; color: var(--accent); }
      `}</style>

      {/* faint grid */}
      <div aria-hidden style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'linear-gradient(var(--line) 1px, transparent 1px)', backgroundSize:'1px 88px', opacity:.5, zIndex:0 }}/>

      <div style={{ position:'relative', zIndex:1 }}>
      {/* — TOP NAV — */}
      <header style={{ borderBottom:'1px solid var(--line)' }}>
        <div style={{ padding:'20px 56px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:30, height:30, borderRadius:999, background:'var(--ink)', color:'var(--paper)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'"Newsreader", serif', fontStyle:'italic', fontSize:16, fontWeight:500 }}>i</div>
            <span style={{ fontSize:13.5, fontWeight:500, letterSpacing:0.2 }}>I<span style={{ color:'var(--accent)' }}>.</span>UX</span>
            <span style={{ width:1, height:14, background:'var(--line-strong)' }}/>
            <span className="as-mono">{t.portfolioYr}</span>
          </div>
          <ResponsiveNav linkClass="as-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: '#work', label: t.navWork },
              { href: '#about', label: t.navAbout },
              { href: '#contact', label: t.navContact },
            ]} />
        </div>
      </header>

      {/* — HERO — */}
      <section style={{ padding:'68px 56px 88px', position:'relative' }}>
        <div className="as-grid12" style={{ alignItems:'start' }}>
          {/* Left column — markers + bio */}
          <div style={{ gridColumn:'1 / span 4' }}>
            <div className="as-mono" style={{ marginBottom:18 }}>{`// 01 · Hello`}</div>
            <p style={{ fontSize:17, lineHeight:1.55, color:'var(--ink-2)', textWrap:'pretty', maxWidth:380 }}>
              <span className="as-quote-mark" style={{ fontSize:34, lineHeight:0, position:'relative', top:8, marginRight:2 }}>“</span>
              {t.bio}
            </p>
            <div style={{ display:'flex', gap:10, marginTop:30, flexWrap:'wrap' }}>
              <a href="#contact" className="as-cta" style={{ background:'var(--ink)', color:'var(--paper)' }}>
                {t.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#work" className="as-cta" style={{ border:'1px solid var(--line-strong)' }}>{t.ctaSecondary}</a>
            </div>
          </div>

          {/* Right column — oversized name */}
          <div style={{ gridColumn:'5 / span 8', position:'relative' }}>
            <div style={{ position:'absolute', top:-12, right:0, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4 }}>
              <span className="as-mono">{t.based} {t.location} · 48.8566°N</span>
              <span className="as-mono">{t.role}</span>
            </div>
            <h1 className="as-display" style={{ fontSize:300, lineHeight:0.88, letterSpacing:-10, marginTop:24, color:'var(--ink)' }}>
              Ir<span className="as-italic" style={{ color:'var(--accent)' }}>ma</span><br/>ne.
            </h1>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:18, gap:24 }}>
              <span className="as-italic" style={{ fontSize:24, color:'var(--ink-2)', maxWidth:380, lineHeight:1.3 }}>
                {t.bioAside}
              </span>
              <span style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:12.5, color:'var(--ink-muted)' }}>
                <span style={{ position:'relative', width:8, height:8, borderRadius:999, background:'var(--accent)' }}>
                  <span style={{ position:'absolute', inset:-4, borderRadius:999, border:'1.5px solid var(--accent)', opacity:.5, animation:'asPulse 2s ease-out infinite' }}/>
                </span>
                {t.availableLong}
              </span>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes asPulse { 0% { transform: scale(.6); opacity:.6 } 100% { transform: scale(1.7); opacity:0 } }`}</style>

      {/* — WORK — staggered grid — */}
      <section id="work" style={{ padding:'10px 56px 80px' }}>
        <div className="as-rule"/>
        <div style={{ padding:'40px 0 36px' }} className="as-grid12">
          <div style={{ gridColumn:'1 / span 6' }}>
            <div className="as-mono">{`// 02 · ${t.selectedWork}`}</div>
            <h2 className="as-display" style={{ fontSize:64, lineHeight:1, letterSpacing:-2, marginTop:10 }}>
              Trois <span className="as-italic" style={{ color:'var(--accent)' }}>histoires</span>, <br/>un seul fil.
            </h2>
          </div>
          <div style={{ gridColumn:'8 / span 5', paddingTop:14 }}>
            <p style={{ fontSize:15, lineHeight:1.55, color:'var(--ink-muted)', maxWidth:420 }}>
              {lang === 'fr'
                ? "Chaque projet est une rencontre, entre un problème réel, une équipe, et une marque. Voici trois cas dont je suis fier·e."
                : "Each project is an encounter, between a real problem, a team, and a brand. Here are three I'm proud of."}
            </p>
          </div>
        </div>

        {/* Stair-step layout */}
        <div className="as-grid12">
          {/* Card 1 — big left */}
          {(() => { const p = t.projects[0]; const Thumb = THUMBS[p.id]; return (
            <article className="as-card" style={{ gridColumn:'1 / span 7' }}>
              <div style={{ aspectRatio:'16/10', position:'relative', overflow:'hidden' }}>
                <div className="as-card-thumb" style={{ width:'100%', height:'100%' }}><Thumb/></div>
                <div style={{ position:'absolute', top:18, left:18, display:'flex', alignItems:'center', gap:8, color:'#fff' }}>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10.5, letterSpacing:1, background:'rgba(15,42,27,.6)', backdropFilter:'blur(4px)', padding:'5px 9px', borderRadius:999 }}>01 / 03</span>
                </div>
              </div>
              <div style={{ padding:'24px 26px 28px', display:'grid', gridTemplateColumns:'1fr auto', gap:30, alignItems:'end' }}>
                <div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:8 }}>
                    <h3 className="as-display" style={{ fontSize:36, letterSpacing:-1, lineHeight:1 }}>{p.title}</h3>
                    <span className="as-mono">{p.year} · {p.length}</span>
                  </div>
                  <p style={{ fontSize:15.5, lineHeight:1.5, color:'var(--ink-muted)', marginBottom:14, maxWidth:440, textWrap:'pretty' }}>{p.desc}</p>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                    {p.tags.map(tag => <span key={tag} className="as-pill">{tag}</span>)}
                  </div>
                </div>
                <a href="#" className="as-link as-italic" style={{ fontSize:18, color:'var(--accent)', whiteSpace:'nowrap', display:'inline-flex', alignItems:'center', gap:6 }}>
                  {t.viewCase} →
                </a>
              </div>
            </article>
          ); })()}

          {/* Card 2 — narrow right, lower */}
          {(() => { const p = t.projects[1]; const Thumb = THUMBS[p.id]; return (
            <article className="as-card" style={{ gridColumn:'8 / span 5', marginTop:60 }}>
              <div style={{ aspectRatio:'5/4', position:'relative', overflow:'hidden' }}>
                <div className="as-card-thumb" style={{ width:'100%', height:'100%' }}><Thumb/></div>
                <div style={{ position:'absolute', top:18, left:18 }}>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10.5, letterSpacing:1, background:'rgba(15,42,27,.08)', padding:'5px 9px', borderRadius:999, color:'#0F2A1B' }}>02 / 03</span>
                </div>
              </div>
              <div style={{ padding:'22px 24px 26px' }}>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:6 }}>
                  <h3 className="as-display" style={{ fontSize:30, letterSpacing:-0.8, lineHeight:1 }}>{p.title}</h3>
                  <span className="as-mono">{p.year}</span>
                </div>
                <p style={{ fontSize:14, lineHeight:1.5, color:'var(--ink-muted)', marginBottom:14, textWrap:'pretty' }}>{p.desc}</p>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:14 }}>
                  {p.tags.map(tag => <span key={tag} className="as-pill">{tag}</span>)}
                </div>
                <a href="#" className="as-link as-italic" style={{ fontSize:15, color:'var(--accent)', display:'inline-flex', alignItems:'center', gap:6 }}>
                  {t.viewCase} →
                </a>
              </div>
            </article>
          ); })()}

          {/* Card 3 — wide low-right, indented */}
          {(() => { const p = t.projects[2]; const Thumb = THUMBS[p.id]; return (
            <article className="as-card" style={{ gridColumn:'4 / span 9', marginTop:-30 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr' }}>
                <div style={{ aspectRatio:'5/4', position:'relative', overflow:'hidden' }}>
                  <div className="as-card-thumb" style={{ width:'100%', height:'100%' }}><Thumb/></div>
                  <div style={{ position:'absolute', top:18, left:18 }}>
                    <span style={{ fontFamily:'JetBrains Mono', fontSize:10.5, letterSpacing:1, background:'rgba(15,42,27,.08)', padding:'5px 9px', borderRadius:999, color:'#0F2A1B' }}>03 / 03</span>
                  </div>
                </div>
                <div style={{ padding:'30px 30px 30px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <div>
                    <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:10 }}>
                      <h3 className="as-display" style={{ fontSize:38, letterSpacing:-1, lineHeight:1 }}>{p.title}</h3>
                      <span className="as-mono">{p.year}</span>
                    </div>
                    <p style={{ fontSize:15.5, lineHeight:1.55, color:'var(--ink-muted)', marginBottom:18, textWrap:'pretty' }}>{p.desc}</p>
                    <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                      {p.tags.map(tag => <span key={tag} className="as-pill">{tag}</span>)}
                    </div>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:24 }}>
                    <span className="as-mono">{p.role}</span>
                    <a href="#" className="as-link as-italic" style={{ fontSize:16, color:'var(--accent)' }}>
                      {t.viewCase} →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ); })()}
        </div>
      </section>

      {/* — CONTACT STRIP — */}
      <section id="contact" style={{ padding:'40px 56px 80px' }}>
        <div className="as-rule"/>
        <div className="as-grid12" style={{ alignItems:'end', paddingTop:48 }}>
          <div style={{ gridColumn:'1 / span 7' }}>
            <div className="as-mono" style={{ marginBottom:14 }}>{`// 03 · ${t.section['03']}`}</div>
            <h2 className="as-display" style={{ fontSize:88, lineHeight:0.95, letterSpacing:-3 }}>
              {lang === 'fr' ? <>On <span className="as-italic" style={{ color:'var(--accent)' }}>se parle</span>&nbsp;?</> : <>Shall we <span className="as-italic" style={{ color:'var(--accent)' }}>chat</span>?</>}
            </h2>
          </div>
          <div style={{ gridColumn:'9 / span 4', paddingBottom:10 }}>
            <a href="mailto:hi@irmane.studio" className="as-link" style={{ fontSize:22, fontWeight:500, display:'inline-flex', alignItems:'center', gap:10 }}>
              hi@irmane.studio →
            </a>
            <div style={{ display:'flex', gap:18, marginTop:14, fontSize:13.5, color:'var(--ink-muted)' }}>
              <a className="as-link" href="#">LinkedIn</a>
              <a className="as-link" href="#">Read.cv</a>
              <a className="as-link" href="#">Dribbble</a>
            </div>
          </div>
        </div>
      </section>

      {/* — FOOTER — */}
      <footer style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ padding:'22px 56px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span className="as-mono">© Irmane · MMXXVI</span>
          <span className="as-mono">{t.footerCredit}</span>
          <a href="#" className="as-link" style={{ fontSize:12.5, color:'var(--ink-muted)' }}>{t.backToTop} ↑</a>
        </div>
      </footer>
      </div>
    </div>
  );
}

Object.assign(window, { VariantAsymmetric });
