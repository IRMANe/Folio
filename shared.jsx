/* Shared content: translations + project thumbs */

const I18N = {
  fr: {
    navWork: 'Mes projets',
    navAbout: 'À propos',
    navContact: 'Me contacter',
    name: 'Irmane',
    role: 'UX/UI Designer',
    location: 'Paris, FR',
    bio: "J'ai toujours trouvé les apps intuitives. Jusqu'au jour où j'ai compris que ça se concevait. Aujourd'hui, je suis UX/UI Designer basé à Paris, je pars du vrai problème : j'audite, je recherche, je conçois des parcours fluides. Des expériences où l'utilisateur comprend immédiatement quoi faire.",
    bioShort: "Je conçois des expériences de bout en bout, avec autant de soin que si c'était pour moi.",
    bioAside: "Derrière chaque interface, il y a une vraie personne.",
    ctaPrimary: 'Travaillons ensemble',
    ctaSecondary: 'Découvrir mes projets',
    selectedWork: 'Projets sélectionnés',
    aboutLabel: 'À propos',
    indexLabel: 'Index',
    available: 'Disponible',
    availableLong: 'Disponible pour de nouveaux projets · Mai 2026',
    footerCredit: 'Conçu et développé par Irmane',
    footerColophon: 'Colophon',
    footerSay: 'Dire bonjour',
    indexCol: 'Réf.',
    projectCol: 'Projet',
    yearCol: 'Année',
    roleCol: 'Discipline',
    statusCol: 'Statut',
    statusLive: 'En ligne',
    statusCase: 'Étude',
    viewCase: 'Voir le projet',
    backToTop: 'Retour en haut',
    elsewhere: 'Ailleurs',
    nowPlaying: 'En ce moment',
    nowPlayingItem: 'Design System chez une scale-up fintech',
    based: 'Basé à',
    portfolioYr: 'Portfolio · 2026',
    section: { '01': 'Intro', '02': 'Travaux', '03': 'Contact' },
    projects: [
      { id:'playmobil', title:'Playmobil', desc:'Repositionnement UX & Design System', tags:['UX Research','Design System','Strategy','Accessibility'], year:'2024', role:'Lead UX · Design System', status:'live', length:'12 sem.' },
      { id:'hairly',    title:'Hairly',    desc:'Une marketplace mobile pour la réservation de coiffure à domicile', tags:['UX Research','Product Design','User Journey'], year:'2025', role:'Product Design', status:'case', length:'8 sem.' },
      { id:'kenya',     title:'Kenya Airways', desc:"Réaligner une app avec l'âme d'une marque", tags:['Mobile UX','User Research','Accessibility','Recommandations'], year:'2026', role:'Mobile UX · Brand', status:'case', length:'6 sem.' },
    ],
  },
  en: {
    navWork: 'Selected work',
    navAbout: 'About',
    navContact: 'Get in touch',
    name: 'Irmane',
    role: 'UX/UI Designer',
    location: 'Paris, FR',
    bio: "I always found apps intuitive. Until the day I understood that it was designed that way. Today I'm a UX/UI Designer based in Paris. I start from the real problem: I audit, I research, I design seamless user journeys. Experiences where users immediately know what to do.",
    bioShort: "End-to-end product design, crafted with the same care I'd give my own.",
    bioAside: "Behind every interface, there's a real person.",
    ctaPrimary: 'Let\u2019s work together',
    ctaSecondary: 'See my work',
    selectedWork: 'Selected work',
    aboutLabel: 'About',
    indexLabel: 'Index',
    available: 'Available',
    availableLong: 'Available for new projects · May 2026',
    footerCredit: 'Designed and built by Irmane',
    footerColophon: 'Colophon',
    footerSay: 'Say hello',
    indexCol: 'No.',
    projectCol: 'Project',
    yearCol: 'Year',
    roleCol: 'Discipline',
    statusCol: 'Status',
    statusLive: 'Live',
    statusCase: 'Study',
    viewCase: 'View case',
    backToTop: 'Back to top',
    elsewhere: 'Elsewhere',
    nowPlaying: 'Currently',
    nowPlayingItem: 'Design system at a fintech scale-up',
    based: 'Based in',
    portfolioYr: 'Portfolio · 2026',
    section: { '01': 'Intro', '02': 'Work', '03': 'Contact' },
    projects: [
      { id:'playmobil', title:'Playmobil', desc:'UX repositioning & design system', tags:['UX Research','Design System','Strategy','Accessibility'], year:'2024', role:'Lead UX · Design System', status:'live', length:'12 wks' },
      { id:'hairly',    title:'Hairly',    desc:'A mobile marketplace for home hairstyling appointments', tags:['UX Research','Product Design','User Journey'], year:'2025', role:'Product Design', status:'case', length:'8 wks' },
      { id:'kenya',     title:'Kenya Airways', desc:"Realigning an app with a brand\u2019s soul", tags:['Mobile UX','User Research','Accessibility','Recommendations'], year:'2026', role:'Mobile UX · Brand', status:'case', length:'6 wks' },
    ],
  },
};

/* — Top-bar control bits, shared shape but each variant styles its container — */
function NavToggles({ lang, setLang, theme, setTheme, ink, hover }) {
  const btn = {
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    height:32, padding:'0 10px', borderRadius:999,
    border:`1px solid ${hover || 'var(--line-strong)'}`,
    background:'transparent', color:ink || 'var(--ink)',
    fontSize:12, letterSpacing:0.4, fontWeight:500,
    transition:'background .2s, border-color .2s',
  };
  return (
    <div style={{ display:'flex', gap:8, alignItems:'center' }}>
      <button type="button" onClick={()=>setLang(lang==='fr'?'en':'fr')} aria-label="Changer de langue"
        style={{ display:'inline-flex', alignItems:'center', borderRadius:999, border:`1px solid ${hover || 'var(--line-strong)'}`, padding:2, height:32, background:'transparent', cursor:'pointer' }}>
        {['fr','en'].map(l => (
          <span key={l} style={{
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            height:26, padding:'0 10px', borderRadius:999, fontSize:11, letterSpacing:0.5, fontWeight:600,
            background: lang===l ? 'var(--ink)' : 'transparent',
            color: lang===l ? 'var(--paper)' : 'var(--ink-muted)',
            textTransform:'uppercase', transition:'all .18s',
          }}>{l}</span>
        ))}
      </button>
      <button onClick={()=>setTheme(theme==='light'?'dark':'light')} style={btn} aria-label="Toggle theme">
        {theme === 'light' ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        )}
      </button>
    </div>
  );
}

/* — Responsive nav: inline links on desktop, burger dropdown on tablet & mobile.
   `items` = [{ href, label, active }]. `linkClass` is the per-page link style
   (pm-link, kn-link, …). Visual layout on desktop is identical to the old inline
   <nav>; below 900px the links move into a tap-to-open panel (see tokens.css). */
function ResponsiveNav({ items, linkClass, lang, setLang, theme, setTheme, gap = 30 }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return undefined;
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('keydown', onKey); };
  }, [open]);

  const renderLink = (it, i, extra) => (
    <a key={i} className={linkClass} href={it.href}
       style={it.active ? { color: 'var(--accent)' } : undefined}
       onClick={extra ? () => setOpen(false) : undefined}>
      {it.label}
    </a>
  );

  return (
    <nav className="rnav" style={{ display: 'flex', alignItems: 'center', gap, fontSize: 13.5 }}>
      <div className="rnav-links" style={{ display: 'flex', alignItems: 'center', gap }}>
        {items.map((it, i) => renderLink(it, i, false))}
      </div>
      <NavToggles lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <button type="button" className="rnav-burger" aria-label="Menu" aria-expanded={open}
        onClick={() => setOpen(o => !o)}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        )}
      </button>
      {open && (
        <div className="rnav-panel">
          {items.map((it, i) => renderLink(it, i, true))}
        </div>
      )}
    </nav>
  );
}

/* — Typographic project thumbnails (approximations of the screenshot covers) — */

function ThumbPlaymobil({ accent }) {
  return (
    <div style={{ position:'relative', background:'#5BAEE5', width:'100%', height:'100%', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'7%', left:'7%', color:'rgba(255,255,255,0.92)', fontSize:11, lineHeight:1.45, fontFamily:'Manrope', fontWeight:500, letterSpacing:0.1 }}>
        Vers une nouvelle expérience<br/>
        <span style={{ opacity:0.7 }}>Design System</span>
      </div>
      <div style={{ position:'absolute', left:0, right:0, top:'52%', textAlign:'left', paddingLeft:'7%', color:'#fff', fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, fontSize:'min(58px, 14%)', letterSpacing:-1.5, transform:'translateY(-50%)', lineHeight:0.95 }}>
        Playmobil
      </div>
      {/* Figure */}
      <div style={{ position:'absolute', right:'10%', top:'18%', width:'24%', aspectRatio:'1/2' }}>
        <div style={{ position:'absolute', top:'0%', left:'14%', width:'72%', height:'24%', background:'#E96B5F', borderRadius:'40% 40% 6% 6%' }}/>
        <div style={{ position:'absolute', top:'20%', left:'24%', width:'52%', height:'28%', background:'#F4C39E', borderRadius:'50%' }}/>
        <div style={{ position:'absolute', top:'44%', left:'10%', width:'80%', height:'34%', background:'#4F77B0', borderRadius:'14% 14% 6% 6%' }}/>
        <div style={{ position:'absolute', top:'78%', left:'22%', width:'56%', height:'20%', background:'#2E3E60', borderRadius:'6%' }}/>
      </div>
      <div style={{ position:'absolute', bottom:'5%', left:'7%', color:'rgba(255,255,255,0.78)', fontSize:9, letterSpacing:0.4, fontFamily:'Manrope' }}>
        Irmane Mze Ali · Corentin Painchaud · Ketura Toure
      </div>
    </div>
  );
}

function ThumbHairly() {
  return (
    <div style={{ position:'relative', background:'#EEEAE0', width:'100%', height:'100%', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:'min(72px, 17%)', lineHeight:0.92, letterSpacing:-2.5, color:'#0F2A1B', fontWeight:600, textAlign:'left' }}>
        <div>hair<span style={{ color:'#A4B8A8', fontFamily:'"Newsreader", serif', fontStyle:'italic', fontWeight:400 }}>·</span></div>
        <div style={{ display:'flex', alignItems:'baseline', gap:6 }}>
          <span style={{ color:'#9FB8A6', fontFamily:'"Newsreader", serif', fontStyle:'italic', fontWeight:400 }}>~</span>
          <span style={{ color:'#9CAB9D' }}>ly</span>
        </div>
      </div>
    </div>
  );
}

function ThumbKenya() {
  // Plain cream backdrop only — the recreated logo behind the cover has been
  // removed so the user's real dropped logo shows on a clean background.
  return (
    <div style={{ position:'relative', background:'#F4ECDF', width:'100%', height:'100%', overflow:'hidden' }}></div>
  );
}

const THUMBS = { playmobil: ThumbPlaymobil, hairly: ThumbHairly, kenya: ThumbKenya };

/* — Project cover with editable image overlay.
   In agent/editor mode: image-slot's empty drop UI is visible above the stylized
   thumb. In production (no omelette writeFile), the empty UI is hidden and the
   stylized thumb shows through cleanly. When the user drops an image, it covers
   the stylized fallback. */
/* — Project cover: shows the real cover image (with its text alt from media.js)
   on a neutral background. The old hand-drawn decorative fallback behind the
   image has been removed — accessibility is handled by the image's alt text. */
function ProjectCoverWithSlot({ id }) {
  return (
    <div className="pj-cover-wrap" style={{ position:'relative', width:'100%', height:'100%', background:'var(--paper-2)' }}>
      <image-slot id={`cover-${id}`} locked placeholder="" shape="rect"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', background:'transparent', display:'block' }}>
      </image-slot>
    </div>
  );
}

/* — Image lightbox: click any filled <image-slot> to view it enlarged in a modal.
   Mount <ImageLightbox/> once near the root of a page. It listens for clicks on
   filled, locked image-slots (shadow-DOM events retarget to the host element),
   reads the rendered <img> source and shows it full-size on a dimmed backdrop. */
function ImageLightbox() {
  const [src, setSrc] = React.useState(null);

  React.useEffect(() => {
    const onClick = (e) => {
      const el = e.target;
      // Plain images that opt into zoom (e.g. embedded mockups)
      if (el && el.tagName === 'IMG' && el.hasAttribute('data-zoom')) {
        if (el.closest('a')) return;
        const url = el.currentSrc || el.src;
        if (url) { e.preventDefault(); setSrc(url); }
        return;
      }
      if (!el || el.tagName !== 'IMAGE-SLOT') return;
      if (!el.hasAttribute('data-filled')) return;
      // Covers are not zoomable — they're decorative hero/card images.
      if (el.id && el.id.indexOf('cover-') === 0) return;
      // Explicit opt-out (e.g. persona photos).
      if (el.hasAttribute('data-no-zoom')) return;
      // Skip slots inside a link (e.g. project cover cards) — they navigate, not zoom.
      if (el.closest('a')) return;
      const img = el.shadowRoot && el.shadowRoot.querySelector('img');
      const url = img && (img.currentSrc || img.src);
      if (url) { e.preventDefault(); setSrc(url); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  React.useEffect(() => {
    if (!src) return;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const onKey = (e) => { if (e.key === 'Escape') setSrc(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [src]);

  if (!src) return null;
  return (
    <div
      onClick={()=>setSrc(null)}
      style={{
        position:'fixed', inset:0, zIndex:9999,
        background:'rgba(8,10,14,0.86)', backdropFilter:'blur(6px)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:'5vh 5vw', cursor:'zoom-out',
        animation:'lbFade .18s ease',
      }}
    >
      <style>{`@keyframes lbFade{from{opacity:0}to{opacity:1}}`}</style>
      <button
        onClick={(e)=>{ e.stopPropagation(); setSrc(null); }}
        aria-label="Fermer"
        style={{
          position:'fixed', top:24, right:28, width:44, height:44, borderRadius:999, zIndex:10000,
          border:'1px solid rgba(255,255,255,0.25)', background:'rgba(255,255,255,0.08)',
          color:'#fff', fontSize:20, lineHeight:1, cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}
      >×</button>
      <img
        src={src}
        onClick={(e)=>e.stopPropagation()}
        style={{
          maxWidth:'100%', maxHeight:'100%', objectFit:'contain',
          transform:'scale(1.2)', transformOrigin:'center',
          borderRadius:12, boxShadow:'0 24px 80px rgba(0,0,0,0.5)', cursor:'default',
        }}
      />
    </div>
  );
}

Object.assign(window, { I18N, THUMBS, NavToggles, ResponsiveNav, ThumbPlaymobil, ThumbHairly, ThumbKenya, ProjectCoverWithSlot, ImageLightbox });

/* — Discreet scroll progress bar: a thin line fixed at the very top of the page
   that fills left→right as the reader scrolls through the case. */
function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <div aria-hidden="true" style={{
      position:'fixed', top:0, left:0, right:0, height:2, zIndex:50,
      background:'transparent', pointerEvents:'none',
    }}>
      <div style={{
        height:'100%', width:`${p * 100}%`,
        background:'var(--accent)', opacity:0.55,
        transition:'width .08s linear',
      }}/>
    </div>
  );
}

Object.assign(window, { ScrollProgress });

/* — Floating "back to top" button. Sits at the bottom-right of the viewport,
   outside the footer, and fades in once the reader has scrolled down. Replaces
   the inline footer link so the footer stays clean and simple on small screens.
   Mount <BackToTopFab/> once near the page root. */
function BackToTopFab() {
  const [show, setShow] = React.useState(false);
  const t = (window.I18N && window.I18N[(document.documentElement.lang === 'en') ? 'en' : 'fr']) || {};
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`fab-top${show ? ' is-visible' : ''}`}
      aria-label={t.backToTop || 'Retour en haut'}
      title={t.backToTop || 'Retour en haut'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  );
}

Object.assign(window, { BackToTopFab });
