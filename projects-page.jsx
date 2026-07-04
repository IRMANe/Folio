/* Mes projets — overview / index page.
   Same UI vocabulary as the case studies. */

function ProjectsPage({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const t = I18N[lang];
  useContentVersion();

  let L = lang === 'fr' ? {
    title: 'Mes projets',
    intro: "Une sélection de mes travaux récents en UX design, où chaque projet reflète une attention particulière portée aux besoins des utilisateurs.",
  } : {
    title: 'My projects',
    intro: "A selection of my recent UX work, each project reflecting particular attention to user needs.",
  };
  L = applyContentOverrides('projets', lang, L);

  // Project cards — descriptions kept short for the grid view
  const cards = lang === 'fr' ? [
    { id:'playmobil', title:'Playmobil', desc:'Repositionnement UX & Design System', tags:['Navigation','Design System','UX Research','Accessibility','Strategy'], href:'playmobil/' },
    { id:'hairly', title:'Hairly', desc:'Une marketplace mobile pour la réservation de coiffure à domicile', tags:['UX Research','Product design','User Journey','Mobile'], href:'hairly/' },
    { id:'kenya', title:'Kenya Airways', desc:"Application de suivi émotionnel avec une approche empathique et respectueuse de la vie privée.", tags:['Mobile UX','User Research','Accessibility'], href:'kenya/' },
  ] : [
    { id:'playmobil', title:'Playmobil', desc:'UX repositioning & design system', tags:['Navigation','Design System','UX Research','Accessibility','Strategy'], href:'playmobil/' },
    { id:'hairly', title:'Hairly', desc:'A mobile marketplace for home hairstyling appointments', tags:['UX Research','Product design','User Journey','Mobile'], href:'hairly/' },
    { id:'kenya', title:'Kenya Airways', desc:"Empathy-led travel companion app with strong privacy focus.", tags:['Mobile UX','User Research','Accessibility'], href:'kenya/' },
  ];

  return (
    <div className="pj-root" data-theme={theme} style={{
      width:'100%', minHeight:'100vh',
      background:'var(--paper)', color:'var(--ink)',
      fontFamily:'"Albert Sans","Manrope",system-ui,sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition:'background .3s,color .3s', position:'relative'
    }}>
      <style>{`
        .pj-root { font-feature-settings: "ss01","cv11"; }
        .pj-display { font-family:'Bricolage Grotesque', system-ui, sans-serif; font-weight:500; font-variation-settings:"wdth" 100, "opsz" 96; letter-spacing:-0.035em; line-height:0.9; }
        .pj-mono { font-family:'JetBrains Mono', monospace; font-size:11.5px; letter-spacing:0.4px; text-transform:uppercase; color:var(--ink-muted); font-weight:500; }
        .pj-pill { display:inline-flex; align-items:center; height:26px; padding:0 12px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:11.5px; font-weight:500; letter-spacing:.2px; }
        .pj-link { transition:color .2s; }
        .pj-link:hover { color: var(--accent); }
        .pj-card { background:var(--paper-2); border:1px solid var(--line); border-radius:18px; overflow:hidden; transition:transform .3s, box-shadow .3s, border-color .3s; container-type: inline-size; }
        .pj-card:hover { transform:translateY(-4px); box-shadow:0 24px 50px -22px rgba(15,42,27,.18); border-color: var(--line-strong); }
        .pj-card:hover .pj-card-title { color: var(--accent); }
        .pj-card-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size:30px; letter-spacing:-.6px; color: var(--accent); transition: color .25s; }
        .pj-card-desc { font-size:16px; line-height:1.55; color: var(--ink-2); text-wrap: pretty; }

        /* editorial split rows */
        .pj-row { display:grid; grid-template-columns: 1fr 1fr; gap:48px; align-items:center; padding:48px 0; border-bottom: 1px solid var(--line); }
        .pj-row:first-of-type { border-top: 1px solid var(--line); }
        .pj-row .pj-row-media { aspect-ratio: 4/3; overflow:hidden; border-radius:14px; position:relative; }
        .pj-row.reverse .pj-row-media { order:2; }
        .pj-row-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size:56px; letter-spacing:-.025em; line-height:1; color:var(--ink); transition: color .25s; }
        .pj-row:hover .pj-row-title { color: var(--accent); }
        .pj-row-arrow { display:inline-flex; align-items:center; gap:8px; margin-top:22px; font-size:13.5px; color:var(--ink-muted); transition: gap .25s, color .25s; }
        .pj-row:hover .pj-row-arrow { gap:14px; color: var(--accent); }

        /* index list rows */
        .pj-idx-row { display:grid; grid-template-columns: 60px 1.5fr 90px 1.3fr 60px; gap:24px; align-items:center; padding:26px 12px; border-bottom:1px solid var(--line); transition: background .25s; position:relative; }
        .pj-idx-row:first-of-type { border-top:1px solid var(--line); }
        .pj-idx-row:hover { background: var(--paper-2); }
        .pj-idx-row:hover .pj-idx-title { color: var(--accent); }
        .pj-idx-row .pj-idx-arrow { opacity:0; transform: translateX(-6px); transition: all .25s; }
        .pj-idx-row:hover .pj-idx-arrow { opacity:1; transform: translateX(0); }
        .pj-idx-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size:30px; letter-spacing:-.02em; line-height:1; transition: color .25s; }

        /* layout switcher */
        .pj-switch { display:inline-flex; padding:3px; border-radius:999px; background:var(--paper-2); border:1px solid var(--line); gap:2px; }
        .pj-switch button { padding:7px 14px; border-radius:999px; font-size:12px; font-weight:600; letter-spacing:.3px; color:var(--ink-muted); transition: all .18s; }
        .pj-switch button[aria-pressed="true"] { background:var(--ink); color:var(--paper); }

        /* ───────── Responsive ───────── */
        @media (max-width: 1024px) {
          .pj-root > header > div, .pj-root > main, .pj-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
          .pj-row-title { font-size:44px; }
          .pj-idx-row { grid-template-columns:56px 1.6fr 80px 60px; }
          .pj-idx-row > :nth-child(4) { display:none; }
        }
        @media (max-width: 680px) {
          .pj-root > header > div { padding:14px 20px !important; }
          .pj-root > main { padding:48px 20px 64px !important; }
          .pj-root > footer > div { padding:18px 20px !important; }
          .pj-root > header nav { gap:16px !important; font-size:12.5px !important; }
          .pj-row { grid-template-columns:1fr !important; gap:20px !important; padding:32px 0 !important; }
          .pj-row.reverse .pj-row-media { order:0 !important; }
          .pj-row-title { font-size:38px; }
          .pj-idx-row { grid-template-columns:1fr auto !important; gap:8px 14px !important; padding:20px 4px !important; }
          .pj-idx-row > :nth-child(1) { grid-row:1; }
          .pj-idx-row > :nth-child(2) { grid-column:1 / -1; grid-row:2; }
          .pj-idx-row > :nth-child(3) { justify-self:end; }
          .pj-idx-row > :nth-child(4), .pj-idx-row > :nth-child(5) { display:none; }
        }
        @media (max-width: 400px) {
          .pj-root > header .pj-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ borderBottom:'1px solid var(--line)', position:'sticky', top:0, zIndex:10, background:'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter:'blur(8px)' }}>
        <div style={{ padding:'18px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <a href="./" style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, fontSize:21, letterSpacing:-0.6 }}>I<span style={{ color:'var(--accent)' }}>.</span>UX</a>
            <span className="pj-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="pj-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork, active: true },
              { href: 'apropos/', label: t.navAbout },
              { href: 'contact/', label: t.navContact },
            ]} />
        </div>
      </header>

      <main style={{ padding:'72px 48px 96px' }}>

        {/* Title block */}
        <h1 className="pj-display" style={{ fontSize:'clamp(42px, 9vw, 72px)', color:'var(--accent-soft-ink)' }}>{L.title}</h1>
        <p style={{ fontSize:18, lineHeight:1.55, color:'var(--ink-2)', marginTop:22, maxWidth:760, textWrap:'pretty' }}>{L.intro}</p>

        {/* Editorial rows */}
        <div style={{ marginTop:48 }}>
          <EditorialLayout cards={cards} lang={lang} />
        </div>

      </main>

      {/* — FOOTER — */}
      <footer style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ padding:'22px 48px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span className="pj-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>
      <BackToTopFab />
    </div>
  );
}

Object.assign(window, { ProjectsPage });

/* ─── Layout variants ─────────────────────────────────────────────────── */

function GridLayout({ cards }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
      {cards.map(c => (
        <a key={c.id} href={c.href} className="pj-card" style={{ display:'flex', flexDirection:'column' }}>
          <div style={{ aspectRatio:'1/1', overflow:'hidden', position:'relative' }}>
            <ProjectCoverWithSlot id={c.id}>
              <ProjectHero id={c.id} />
            </ProjectCoverWithSlot>
          </div>
          <div style={{ padding:'24px 24px 28px', display:'flex', flexDirection:'column', gap:18, flex:1 }}>
            <div className="pj-card-title">{c.title}</div>
            <p className="pj-card-desc">{c.desc}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:'auto', paddingTop:6 }}>
              {c.tags.map(tag => <span key={tag} className="pj-pill">{tag}</span>)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function EditorialLayout({ cards, lang }) {
  const viewLabel = lang === 'fr' ? 'Voir le projet' : 'View case';
  return (
    <div>
      {cards.map((c, i) => (
        <a key={c.id} href={c.href} className={`pj-row ${i % 2 === 1 ? 'reverse' : ''}`} style={{ display:'grid' }}>
          <div className="pj-row-media">
            <ProjectCoverWithSlot id={c.id}>
              <ProjectHero id={c.id} />
            </ProjectCoverWithSlot>
          </div>
          <div>
            <div className="pj-mono" style={{ marginBottom:14 }}>№ {String(i + 1).padStart(3,'0')}</div>
            <h3 className="pj-row-title">{c.title}<span style={{ color:'var(--accent)' }}>.</span></h3>
            <p className="pj-card-desc" style={{ marginTop:18, maxWidth:480 }}>{c.desc}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:20 }}>
              {c.tags.slice(0,4).map(tag => <span key={tag} className="pj-pill">{tag}</span>)}
            </div>
            <span className="pj-row-arrow">
              {viewLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

function IndexLayout({ cards, lang }) {
  const [hovered, setHovered] = React.useState(null);
  const C = { idx: lang === 'fr' ? 'Réf.' : 'No.', project: lang === 'fr' ? 'Projet' : 'Project',
              year: lang === 'fr' ? 'Année' : 'Year', tags: lang === 'fr' ? 'Discipline' : 'Discipline' };
  // each project knows its year via I18N projects metadata
  const years = { playmobil: '2024', hairly: '2025', kenya: '2026' };
  return (
    <div style={{ position:'relative' }}>
      {/* header row */}
      <div style={{ display:'grid', gridTemplateColumns:'60px 1.5fr 90px 1.3fr 60px', gap:24, padding:'14px 12px', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)' }}>
        <span className="pj-mono">{C.idx}</span>
        <span className="pj-mono">{C.project}</span>
        <span className="pj-mono">{C.year}</span>
        <span className="pj-mono">{C.tags}</span>
        <span />
      </div>

      {cards.map((c, i) => (
        <a key={c.id} href={c.href} className="pj-idx-row"
          onMouseEnter={()=>setHovered(c.id)}
          onMouseLeave={()=>setHovered(h => h === c.id ? null : h)}>
          <span className="pj-mono" style={{ color:'var(--ink)', fontSize:13 }}>№ {String(i+1).padStart(3,'0')}</span>
          <div>
            <div className="pj-idx-title">{c.title}</div>
            <div style={{ marginTop:6, fontSize:14, lineHeight:1.45, color:'var(--ink-muted)', maxWidth:380, textWrap:'pretty' }}>{c.desc}</div>
          </div>
          <span style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:22, fontWeight:400, letterSpacing:-.5, color:'var(--ink-2)' }}>{years[c.id]}</span>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {c.tags.slice(0,3).map(tag => <span key={tag} className="pj-pill" style={{ height:22, fontSize:10.5 }}>{tag}</span>)}
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end' }}>
            <span className="pj-idx-arrow" style={{ display:'inline-flex', width:32, height:32, borderRadius:999, background:'var(--accent)', color:'#fff', alignItems:'center', justifyContent:'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </div>
        </a>
      ))}

      {/* Floating thumb preview */}
      <div style={{
        position:'absolute', top:70, right:20, width:240, aspectRatio:'4/5',
        transform: hovered ? 'translate(0,0) rotate(-2deg)' : 'translate(20px,-10px) rotate(-2deg)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity .25s, transform .35s cubic-bezier(.2,.7,.2,1)',
        borderRadius:14, overflow:'hidden', boxShadow:'0 30px 60px -20px rgba(15,42,27,.35)',
        pointerEvents:'none', zIndex:5, border:'8px solid var(--paper)'
      }}>
        {hovered && <ProjectCoverWithSlot id={hovered}><ProjectHero id={hovered} /></ProjectCoverWithSlot>}
      </div>
    </div>
  );
}

Object.assign(window, { GridLayout, EditorialLayout, IndexLayout });

/* — Per-project hero cards, sized for the grid (~ 1:1 card). */
function ProjectHero({ id }) {
  if (id === 'playmobil') return <PJPlaymobilHero/>;
  if (id === 'hairly') return <PJHairlyHero/>;
  if (id === 'kenya') return <PJKenyaHero/>;
  return null;
}

function PJPlaymobilHero() {
  return (
    <div style={{ width:'100%', height:'100%', background:'#3F8FE8', position:'relative' }}>
      {/* eyebrow */}
      <div style={{ position:'absolute', top:'7%', left:'7%', color:'rgba(255,255,255,.94)', fontFamily:'"Albert Sans", sans-serif', fontSize:'3.6cqi', fontWeight:600, lineHeight:1.45 }}>
        Vers une nouvelle expérience<br/>
        <span style={{ opacity:.72, fontWeight:400 }}>Design System</span>
      </div>
      {/* huge title centred */}
      <div style={{ position:'absolute', left:'7%', right:'7%', top:'50%', transform:'translateY(-30%)', display:'flex' }}>
        <span style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, color:'#fff', fontSize:'13.5cqi', letterSpacing:'-0.045em', lineHeight:0.95 }}>Playmobil</span>
      </div>
      {/* character placeholder right */}
      <div style={{ position:'absolute', right:'8%', top:'18%', width:'18%', aspectRatio:'1/2' }}>
        <div style={{ position:'absolute', top:'0%', left:'14%', width:'72%', height:'24%', background:'#E96B5F', borderRadius:'40% 40% 6% 6%' }}/>
        <div style={{ position:'absolute', top:'20%', left:'24%', width:'52%', height:'28%', background:'#F4C39E', borderRadius:'50%' }}/>
        <div style={{ position:'absolute', top:'44%', left:'10%', width:'80%', height:'34%', background:'#4F77B0', borderRadius:'14% 14% 6% 6%' }}/>
        <div style={{ position:'absolute', top:'78%', left:'22%', width:'56%', height:'20%', background:'#2E3E60', borderRadius:'6%' }}/>
      </div>
      {/* hydrant */}
      <div style={{ position:'absolute', right:'5%', bottom:'24%', width:'9%', aspectRatio:'1/1.4', background:'#D63F2F', borderRadius:'18% 18% 24% 24%' }}/>
      {/* credits */}
      <div style={{ position:'absolute', left:'7%', right:'7%', bottom:'6%', color:'rgba(255,255,255,.85)', fontFamily:'"Albert Sans", sans-serif', fontSize:'2.9cqi', letterSpacing:0.2 }}>
        Irmane Mze Ali · Corentin Painchaud · Ketura Toure
      </div>
    </div>
  );
}

function PJHairlyHero() {
  return (
    <div style={{ width:'100%', height:'100%', background:'#EEEAE0', position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, color:'#0F2A1B', letterSpacing:'-0.05em', lineHeight:0.88, fontSize:'25cqi' }}>
        <div style={{ display:'flex', alignItems:'baseline' }}>
          <span>hai</span>
          <span style={{ position:'relative' }}>
            r
            <span style={{ position:'absolute', right:'-0.32em', top:'15%', color:'var(--accent)', fontSize:'0.7em' }}>·</span>
          </span>
        </div>
        <div style={{ display:'flex', alignItems:'baseline', gap:'0.1em' }}>
          <span style={{ color:'var(--accent)', fontFamily:'"Newsreader", serif', fontStyle:'italic', fontWeight:400, fontSize:'0.85em' }}>~</span>
          <span style={{ color:'#9CAB9D' }}>ly</span>
        </div>
      </div>
    </div>
  );
}

function PJKenyaHero() {
  return (
    <div style={{ width:'100%', height:'100%', background:'#F4ECDF', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', padding:'8%' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'4%' }}>
        <div style={{ width:'24%', aspectRatio:'1/1', borderRadius:'50%', background:'#E5523C', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Newsreader", serif', fontStyle:'italic', fontWeight:600, fontSize:'20cqi', lineHeight:1, paddingBottom:'2%' }}>K</div>
        <div>
          <div style={{ fontFamily:'"Newsreader", serif', fontStyle:'italic', color:'#E5523C', fontSize:'15cqi', fontWeight:600, letterSpacing:'-0.01em', lineHeight:1 }}>Kenya<br/>Airways</div>
          <div style={{ fontFamily:'"Newsreader", serif', fontStyle:'italic', color:'#4B463C', fontSize:'5cqi', marginTop:'4%', letterSpacing:0.2 }}>The Pride of Africa</div>
        </div>
      </div>
    </div>
  );
}
