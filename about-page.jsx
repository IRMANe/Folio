/* À propos — about page.
   Same design vocabulary as the rest (tokens, type scale, nav, footer). */

function AboutPage({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const t = I18N[lang];
  useContentVersion();

  let L = lang === 'fr' ? {
    title: 'À propos',
    bio: "Depuis toujours, j'ai trouvé étonnant de pouvoir comprendre instinctivement comment fonctionne une application ou un logiciel, même la toute première fois que je l'utilise, sans mode d'emploi ni tutoriel. Je me demandais comment c'était possible.\n\nC'est en quittant les Comores pour poursuivre mes études en Malaisie que j'ai eu ma réponse. Dans un cours de Human Computer Interaction, j'ai compris qu'il existait des gens dont le travail était justement de réfléchir à comment rendre une application utile, compréhensible et utilisable pour tous. Ce jour-là, j'ai su que je voulais faire partie de ces gens.",
    beliefsTitle: 'Ce en quoi je crois',
    beliefs: [
      { title: "L'empathie avant tout", body: "Je crois que le bon design commence par l'écoute : la vraie, celle qui prend le temps de comprendre avant de proposer." },
      { title: "La simplicité est un luxe", body: "Je crois que la simplicité est le résultat d'un travail profond. Une interface claire n'est jamais un hasard." },
      { title: "Le design inclusif n'est pas une option", body: "Je crois que les meilleurs produits naissent quand on met vraiment l'humain au centre. Pas comme une valeur affichée, mais comme un réflexe à chaque choix de design." },
    ],
    toolsTitle: 'Mes outils',
    tools: ['Figma', 'Adobe Illustrator', 'Notion', 'Lovable', 'Miro'],
    toolsMore: "+ toujours en train d'apprendre",
    outsideTitle: 'En dehors du design',
    outside: ['Passionné de musique et du monde audio', 'Musculation'],
    cv: 'Télécharger mon CV',
    cvFr: 'CV (français)',
    cvEn: 'CV (anglais)',
    cta: 'Travaillons ensemble',
  } : {
    title: 'About',
    bio: "I've always found it surprising to be able to instinctively understand how an app or piece of software works, even the very first time I use it, with no manual or tutorial. I kept wondering how that was possible.\n\nIt was when I left Comoros to pursue my studies in Malaysia that I found my answer. In a Human-Computer Interaction class, I learned that there were people whose job was to think about how to make an application useful, understandable, and usable for everyone. That day, I knew I wanted to be one of them.",
    beliefsTitle: 'What I believe in',
    beliefs: [
      { title: 'Empathy first', body: "Good design begins with listening. The real kind, the kind that takes time to understand before proposing." },
      { title: 'Simplicity is a luxury', body: "Simplicity is the result of deep work. A clear interface is never an accident." },
      { title: "Inclusive design isn't optional", body: "The best products come from genuinely putting humans at the centre. Not as a stated value, but as a reflex behind every decision." },
    ],
    toolsTitle: 'My toolkit',
    tools: ['Figma', 'Adobe Illustrator', 'Notion', 'Lovable', 'Miro'],
    toolsMore: '+ always learning more',
    outsideTitle: 'Outside design',
    outside: ['Music and audio enthusiast', 'Strength training'],
    cv: 'Download my CV',
    cvFr: 'Resume (french)',
    cvEn: 'Resume (english)',
    cta: "Let's work together",
  };
  L = applyContentOverrides('apropos', lang, L);

  return (
    <div className="ab-root" data-theme={theme} style={{
      width: '100%', minHeight: '100vh',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Albert Sans","Manrope",system-ui,sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition: 'background .3s,color .3s', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      <style>{`
        .ab-root { font-feature-settings: "ss01","cv11"; }
        .ab-display { font-family:'Bricolage Grotesque', system-ui, sans-serif; font-weight:500; font-variation-settings:"wdth" 100, "opsz" 96; letter-spacing:-0.035em; line-height:0.95; }
        .ab-h2 { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size: 24px; letter-spacing:-0.015em; color: var(--ink); }
        .ab-mono { font-family:'JetBrains Mono', monospace; font-size:11.5px; letter-spacing:0.4px; text-transform:uppercase; color:var(--ink-muted); font-weight:500; }
        .ab-link { transition: color .2s; }
        .ab-link:hover { color: var(--accent); }

        /* belief card */
        .ab-card {
          border-radius: 16px;
          border: 1px solid var(--line);
          background: var(--paper);
          padding: 26px 28px;
          transition: background .25s, border-color .25s;
        }
        .ab-card:hover { background: var(--paper-2); border-color: var(--line-strong); }
        .ab-card-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size: 18px; letter-spacing:-0.01em; color: var(--ink); margin-bottom: 10px; }
        .ab-card-body { font-size: 15px; line-height: 1.6; color: var(--ink-2); text-wrap: pretty; }

        /* pill */
        .ab-pill {
          display: inline-flex; align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--accent-soft);
          color: var(--accent-soft-ink);
          font-size: 13.5px; font-weight: 500; letter-spacing: 0.1px;
          transition: transform .2s;
        }
        .ab-pill:hover { transform: translateY(-1px); }
        .ab-pill-more {
          background: transparent;
          color: var(--ink-muted);
          border: 1.5px dashed var(--line-strong);
        }
        .ab-pill-more:hover { transform: none; }

        /* outside list */
        .ab-li { display:flex; align-items:flex-start; gap: 14px; padding: 6px 0; }
        .ab-li-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-top: 9px; flex-shrink: 0; }
        .ab-li-text { font-size: 15.5px; line-height: 1.55; color: var(--ink-2); }

        /* buttons */
        .ab-btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; height:54px; padding:0 28px; border-radius:10px; font-size:15px; font-weight:600; letter-spacing:0.1px; transition: all .2s; }
        .ab-btn-outline { background: transparent; color: var(--ink); border: 1.5px solid var(--accent); }
        .ab-btn-outline:hover { background: color-mix(in oklab, var(--accent-soft) 60%, transparent); }
        .ab-btn-fill { background: var(--accent); color:#fff; }
        .ab-btn-fill:hover { transform: translateY(-1px); }

        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .ab-root > header > div, .ab-root > main, .ab-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
        }
        @media (max-width: 680px) {
          .ab-root > header > div { padding:14px 20px !important; }
          .ab-root > main { padding:56px 20px 72px !important; }
          .ab-root > footer > div { padding:18px 20px !important; }
          .ab-root > header nav { gap:16px !important; font-size:12.5px !important; }
          .ab-bio-row { flex-direction:column !important; gap:24px !important; }
          .ab-bio-row p { padding-top:0 !important; }
          .ab-btn { width:100%; }
        }
        @media (max-width: 400px) {
          .ab-root > header .ab-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ borderBottom:'1px solid var(--line)', position:'sticky', top:0, zIndex:10, background:'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter:'blur(8px)' }}>
        <div style={{ padding:'18px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <a href="./" style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, fontSize:21, letterSpacing:-0.6 }}>I<span style={{ color:'var(--accent)' }}>.</span>UX</a>
            <span className="ab-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="ab-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork },
              { href: 'apropos/', label: t.navAbout, active: true },
              { href: 'contact/', label: t.navContact },
            ]} />
        </div>
      </header>

      <main style={{ maxWidth: 880, width: '100%', margin: '0 auto', padding: '88px 48px 96px', flex: 1 }}>

        {/* Title */}
        <h1 className="ab-display" style={{ fontSize:'clamp(40px, 9vw, 58px)', color:'var(--accent-soft-ink)' }}>{L.title}</h1>

        {/* Avatar + bio */}
        <div className="ab-bio-row" style={{ marginTop: 56, display:'flex', alignItems:'flex-start', gap: 36 }}>
          <image-slot
            id="about-portrait"
            locked
            shape="circle"
            placeholder="Portrait"
            style={{ width: 140, height: 140, flexShrink: 0, borderRadius: '50%', background: 'var(--accent-soft)', overflow:'hidden' }}>
          </image-slot>
          <div style={{ display:'flex', flexDirection:'column', gap:16, fontSize:16, lineHeight:1.7, color:'var(--ink-2)', textWrap:'pretty', maxWidth: 600, paddingTop: 14 }}>
            <p style={{ margin:0 }}>
              {L.bio.split('\n\n').map((p, i, arr) => (
                <React.Fragment key={i}>{p}{i < arr.length - 1 && <><br/><br/></>}</React.Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* Beliefs */}
        <section style={{ marginTop: 80 }}>
          <h2 className="ab-h2">{L.beliefsTitle}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap: 18, marginTop: 28 }}>
            {L.beliefs.map((b, i) => (
              <article key={i} className="ab-card">
                <div className="ab-card-title">{b.title}</div>
                <p className="ab-card-body">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section style={{ marginTop: 72 }}>
          <h2 className="ab-h2">{L.toolsTitle}</h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap: 12, marginTop: 24 }}>
            {L.tools.map(tool => <span key={tool} className="ab-pill">{tool}</span>)}
            <span className="ab-pill ab-pill-more" aria-label={L.toolsMore} title={L.toolsMore}>···</span>
          </div>
        </section>

        {/* Outside */}
        <section style={{ marginTop: 64 }}>
          <h2 className="ab-h2">{L.outsideTitle}</h2>
          <ul style={{ listStyle:'none', marginTop: 18 }}>
            {L.outside.map(item => (
              <li key={item} className="ab-li">
                <span className="ab-li-dot" aria-hidden />
                <span className="ab-li-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTAs */}
        <div style={{ display:'flex', flexWrap:'wrap', gap: 14, marginTop: 56 }}>
          <a className="ab-btn ab-btn-outline" href="cv/CV_Irmane_UX_fr.pdf" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {L.cvFr}
          </a>
          <a className="ab-btn ab-btn-outline" href="cv/CV_Irmane_UX_en.pdf" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {L.cvEn}
          </a>
          <a className="ab-btn ab-btn-fill" href="contact/">{L.cta}</a>
        </div>

      </main>

      {/* — FOOTER — */}
      <footer style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ padding:'22px 48px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span className="ab-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>
      <BackToTopFab />
    </div>
  );
}

Object.assign(window, { AboutPage });
