/* Variant 3 — Index / List
   Direction: confident, archive-feeling, type-led. Bricolage Grotesque (a
   variable display sans) + Albert Sans body. The hero is a single huge
   name + tight info table. "Selected work" reads as an INDEX — rows
   instead of cards. Hovering a row pops the project's thumbnail into a
   floating preview pinned to the right. */

function VariantIndex({ accent, accentSoft, accentInk }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => {window.setLangPref && window.setLangPref(l);setLangState(l);};
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => {window.setThemePref && window.setThemePref(val);setThemeState(val);};
  React.useEffect(() => {}, []);
  const [hovered, setHovered] = React.useState(null);
  const t = I18N[lang];
  useContentVersion();

  const rootRef = React.useRef(null);
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const progRef = React.useRef(null);

  // — Creative scroll: progress bar + scroll-linked reveal (no CSS transitions,
  //   no rAF — driven directly by scroll/resize events so it works even where
  //   the compositor is paused; a no-JS gate keeps content visible if JS fails) —
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('ix-anim');
    const els = Array.from(root.querySelectorAll('.ix-reveal'));
    if (reduce) els.forEach((el) => {el.style.opacity = '1';el.style.transform = 'none';});

    const apply = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // progress bar
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
      if (progRef.current) progRef.current.style.transform = `scaleX(${p})`;
      if (reduce) return;
      // scroll-linked reveal
      const start = vh * 0.94,end = vh * 0.62;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        let k = (start - r.top) / (start - end);
        k = Math.max(0, Math.min(1, k));
        const e = 1 - Math.pow(1 - k, 3); // easeOutCubic
        el.style.opacity = String(e);
        el.style.transform = `translateY(${(1 - e) * 30}px)`;
      }
    };
    apply();
    const t1 = setTimeout(apply, 50);
    const t2 = setTimeout(apply, 250);
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      clearTimeout(t1);clearTimeout(t2);
      window.removeEventListener('scroll', apply);
      window.removeEventListener('resize', apply);
    };
  }, []);

  // — Dot cursor: a dot + ring that follow the pointer (instant, event-driven so
  //   it tracks even without rAF). Ring grows over interactive targets. —
  React.useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = dotRef.current,ring = ringRef.current;
    if (!dot || !ring) return;
    const place = (x, y) => {
      const tf = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      dot.style.transform = tf;ring.style.transform = tf;
    };
    place(window.innerWidth / 2, window.innerHeight / 2);
    // Detect whether the cursor sits on a dark/green surface (e.g. the CTA),
    // so it can switch to a light-green tone for contrast.
    const onGreenOrDark = (node) => {
      let el = node;
      while (el && el.nodeType === 1) {
        const bg = getComputedStyle(el).backgroundColor;
        const m = bg && bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const p = m[1].split(',').map(Number);
          const a = p[3] === undefined ? 1 : p[3];
          if (a > 0.5) {
            const lum = (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255;
            return lum < 0.62; // dark ink + mid-green accent
          }
        }
        el = el.parentElement;
      }
      return false;
    };
    const move = (e) => {
      place(e.clientX, e.clientY);
      const hot = e.target.closest && e.target.closest('a, button, .ix-row, .ix-cta, [role="button"]');
      ring.dataset.hot = hot ? '1' : '';
      const light = onGreenOrDark(e.target);
      dot.dataset.light = light ? '1' : '';
      ring.dataset.light = light ? '1' : '';
      dot.style.opacity = '1';ring.style.opacity = '1';
    };
    const down = () => {ring.dataset.down = '1';};
    const up = () => {ring.dataset.down = '';};
    const leave = () => {dot.style.opacity = '0';ring.style.opacity = '0';};
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('mouseleave', leave);
    document.documentElement.classList.add('ix-has-dot');
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('mouseleave', leave);
      document.documentElement.classList.remove('ix-has-dot');
    };
  }, []);
  let L = {
    bio: t.bio,
    ctaPrimary: t.ctaPrimary,
    ctaSecondary: t.ctaSecondary,
    available: (() => {
      const now = new Date();
      const moisFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      const moisEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const m = lang === 'fr' ? moisFr[now.getMonth()] : moisEn[now.getMonth()];
      const y = now.getFullYear();
      return lang === 'fr' ? `Disponible · ${m} ${y}` : `Available · ${m} ${y}`;
    })(),
    contactTitle: lang === 'fr' ? 'Prenons contact' : "Let’s connect",
    emailValue: 'irmane@hotmail.fr',
    linkedin: 'www.linkedin.com/in/irmane'
  };
  L = applyContentOverrides('accueil', lang, L);

  return (
    <div ref={rootRef} className="ix-root" data-theme={theme} style={{
      width: '100%', minHeight: '100%',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Albert Sans", "Manrope", system-ui, sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition: 'background .3s, color .3s',
      position: 'relative'
    }}>
      <style>{`
        .ix-root { font-feature-settings: "ss01","cv11"; }
        .ix-display { font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 500; font-variation-settings: "wdth" 100, "opsz" 96; letter-spacing: -0.04em; line-height: 0.86; }
        .ix-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.4px; text-transform: uppercase; color: var(--ink-muted); font-weight: 500; }
        .ix-pill { display:inline-flex; align-items:center; height:22px; padding:0 9px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:10.5px; font-weight:500; letter-spacing:.2px; }
        .ix-row { display:grid; grid-template-columns: 80px 1.5fr 1fr 1.4fr 60px; gap:24px; padding:30px 24px; border-bottom:1px solid var(--line); align-items:center; transition: background .25s, color .25s; cursor: pointer; position: relative; }
        .ix-row:hover { background: var(--paper-2); }
        .ix-row:hover .ix-rowtitle { color: var(--accent); }
        .ix-row .ix-rowarrow { opacity:0; transform: translateX(-8px); transition: opacity .25s, transform .25s; }
        .ix-row:hover .ix-rowarrow { opacity:1; transform: translateX(0); }
        .ix-rowtitle { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size: 38px; letter-spacing:-0.025em; line-height:1; transition: color .25s; }
        .ix-rowdesc { font-size:14px; line-height:1.45; color: var(--ink-muted); text-wrap: pretty; }
        .ix-cta { display:inline-flex; align-items:center; gap:10px; height:54px; padding:0 22px; border-radius:6px; font-size:14.5px; font-weight:500; transition: all .25s; }
        .ix-cta:hover { transform: translateY(-1px); }
        .ix-link { transition: color .2s; }
        .ix-link:hover { color: var(--accent); }
        .ix-marquee { display:flex; gap: 60px; white-space:nowrap; }
        .ix-marquee-track { animation: ixMarquee 38s linear infinite; }
        @keyframes ixMarquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ix-dot { position:relative; width:8px; height:8px; border-radius:999px; background: var(--accent); display:inline-block; }
        .ix-dot::before { content:''; position:absolute; inset:-4px; border-radius:999px; border: 1.5px solid var(--accent); opacity:.45; animation: ixPulse 2s ease-out infinite; }
        @keyframes ixPulse { 0% { transform: scale(.6); opacity:.6 } 100% { transform: scale(1.6); opacity: 0 } }

        /* — Creative scroll: reveal is driven by JS inline opacity/transform.
           Hidden initial state is gated behind .ix-anim so content stays
           visible if scripts don't run. No CSS transition on the gated props. */
        .ix-anim .ix-reveal { opacity: 0; transform: translateY(30px); }

        /* — Scroll progress bar — */
        .ix-prog { position: fixed; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0); transform-origin: 0 50%; background: var(--accent); z-index: 60; will-change: transform; }

        /* — Dot cursor — */
        html.ix-has-dot, html.ix-has-dot .ix-root, html.ix-has-dot .ix-root * { cursor: none !important; }
        .ix-cursor-dot, .ix-cursor-ring { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 70; border-radius: 999px; opacity: 0; will-change: transform; --cur: #0F2A1B; }
        /* color is purely background-driven, so it inverts identically in light & dark mode */
        .ix-cursor-dot[data-light="1"], .ix-cursor-ring[data-light="1"] { --cur: #EFE9DA; }
        .ix-cursor-dot { width: 7px; height: 7px; background: var(--cur); transition: background .18s ease; }
        .ix-cursor-ring { width: 34px; height: 34px; border: 1.5px solid var(--cur); box-sizing: border-box; transition: width .2s ease, height .2s ease, background .18s ease, border-color .18s ease, border-width .12s ease; }
        /* hover: ring grows + subtle fill, same hue as the active cursor color */
        .ix-cursor-ring[data-hot="1"] { width: 54px; height: 54px; background: color-mix(in oklab, var(--cur) 14%, transparent); border-color: var(--cur); }
        /* click: the ring thickens */
        .ix-cursor-ring[data-down="1"] { border-width: 3.5px; }
        @media (pointer: coarse) { .ix-cursor-dot, .ix-cursor-ring, .ix-prog { display: none; } }
        /* No floating cover-thumb on touch devices */
        @media (pointer: coarse) { .ix-floatthumb { display: none !important; } }

        /* — Scroll-over reveal: the hero stays pinned while the rest of the page
           lifts up over it as a single panel. — */
        .ix-hero { position: sticky; top: 0; z-index: 0; }
        .ix-overlay {
          position: relative; z-index: 1;
          background: var(--paper);
        }
        @media (prefers-reduced-motion: reduce) {
          .ix-hero { position: relative; }
        }

        /* ───────── Responsive ───────── */
        /* Tablet */
        @media (max-width: 1024px) {
          .ix-root > header > div,
          .ix-root > section,
          .ix-root > footer > div { padding-left: 32px !important; padding-right: 32px !important; }
          .ix-row { grid-template-columns: 56px 1.6fr 1fr 60px; }
          .ix-row > :nth-child(4) { display: none; } /* tags column */
          .ix-rowtitle { font-size: 30px; }
        }
        /* Mobile */
        @media (max-width: 680px) {
          .ix-root > header > div { padding: 14px 20px !important; }
          .ix-root > section { padding-left: 20px !important; padding-right: 20px !important; padding-top: 48px !important; }
          .ix-root > footer > div { padding: 18px 20px !important; flex-direction: column; gap: 12px; align-items: flex-start !important; }
          .ix-root > header nav { gap: 16px !important; font-size: 12.5px !important; }
          .ix-hero-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .ix-hero-grid > div { text-align: left !important; align-items: flex-start !important; padding-bottom: 0 !important; }
          .ix-bio-grid, .ix-contact-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .ix-contact-title { white-space: normal !important; }
          .ix-floatthumb { display: none !important; }
          .ix-hero { position: relative !important; height: auto !important; padding: 40px 20px 36px !important; }
          .ix-overlay { position: relative !important; }
          .ix-bio-grid { margin-top: 28px !important; gap: 24px !important; }
          .ix-row { grid-template-columns: 1fr auto !important; gap: 8px 14px !important; padding: 22px 4px !important; }
          .ix-row > :nth-child(1) { grid-row: 1; align-self: start; } /* № */
          .ix-row > :nth-child(2) { grid-column: 1 / -1; grid-row: 2; } /* title + desc */
          .ix-row > :nth-child(3) { justify-self: end; } /* year */
          .ix-row > :nth-child(4) { display: none; } /* tags */
          .ix-row > :nth-child(5) { display: none; } /* arrow */
          .ix-rowtitle { font-size: 26px; }
          .ix-rowdesc { font-size: 13.5px; }
          .ix-marquee-word { font-size: 36px !important; }
          .ix-cta { height: 48px; font-size: 14px; }
          .ix-cta-col { align-items: flex-start !important; }
          .ix-cta-row { flex-direction: column; align-items: stretch; width: 100%; }
          .ix-cta-row .ix-cta { width: 100%; justify-content: center; }
        }
        @media (max-width: 400px) {
          .ix-root > header .ix-mono { display: none; } /* hide location next to logo */
        }
      `}</style>

      <div className="ix-prog" ref={progRef} aria-hidden="true"></div>
      <div className="ix-cursor-ring" ref={ringRef} aria-hidden="true"></div>
      <div className="ix-cursor-dot" ref={dotRef} aria-hidden="true"></div>

      {/* — TOP NAV — */}
      <header style={{ borderBottom: '1px solid var(--line)', position: 'sticky', top: 0, zIndex: 10, background: 'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter: 'blur(8px)' }}>
        <div style={{ padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="./" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 21, letterSpacing: -0.6 }}>I<span style={{ color: 'var(--accent)' }}>.</span>UX</a>
            <span className="ix-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="ix-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
          items={[
          { href: 'projets/', label: t.navWork },
          { href: 'apropos/', label: t.navAbout },
          { href: 'contact/', label: t.navContact }]
          } />
        </div>
      </header>

      {/* — HERO — editorial layout, Index typography (Bricolage / Albert Sans / JetBrains Mono) — */}
      <section className="ix-hero" style={{ padding: '88px 48px 64px', height: "586px" }}>
        {/* meta strip top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56 }}>
          <span className="ix-mono">{`${t.section['01']} - 01`}</span>
          <span className="ix-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span className="ix-dot" />
            {L.available}
          </span>
        </div>

        {/* Headline grid */}
        <div className="ix-reveal ix-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'end', gap: 24 }}>
          <h1 className="ix-display" style={{ color: 'var(--ink)', fontSize: "clamp(64px, 13.5vw, 180px)" }}>
            Irmane<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
          <div style={{ paddingBottom: 24, textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
            <span className="ix-mono">{`${t.based} ${t.location}`}</span>
            <span style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 400, fontSize: 22, color: 'var(--ink-2)', letterSpacing: -0.4, lineHeight: 1.1 }}>UX/UI Designer · 2023-2026</span>
          </div>
        </div>

        {/* Bio + CTAs */}
        <div className="ix-reveal ix-reveal-d1 ix-bio-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: '"Albert Sans", sans-serif', fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', textWrap: 'pretty', maxWidth: 520, fontWeight: 400, width: '100%' }}>
              {L.bio}
            </p>
          </div>
          <div className="ix-cta-col" style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-end' }}>
            <div className="ix-cta-row" style={{ display: 'flex', gap: 10 }}>
              <a className="ix-cta" href="contact/" style={{ background: 'var(--accent)', color: '#fff' }}>
                {L.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a className="ix-cta" href="projets/" style={{ border: '1px solid var(--line-strong)', color: 'var(--ink)' }}>
                {L.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* — SCROLL-OVER PANEL: everything below lifts up over the pinned hero — */}
      <div className="ix-overlay">
      {/* — WORK INDEX — */}
      <section id="work" style={{ padding: '32px 48px 56px', position: 'relative' }}>
        <div className="ix-reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 28 }}>
          <div>
            <span className="ix-mono">{`${t.indexLabel} - 02`}</span>
            <h2 className="ix-display" style={{ fontSize: "clamp(40px, 9vw, 88px)", marginTop: 10 }}>
              {lang === 'fr' ? 'Mes projets' : 'My projects'}<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
          </div>
        </div>

        {/* Column headers */}
        <div className="ix-row" style={{ paddingTop: 14, paddingBottom: 14, borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)', cursor: 'default', background: 'transparent' }}
          onMouseEnter={() => {}}>
          <span className="ix-mono">{t.indexCol}</span>
          <span className="ix-mono">{t.projectCol}</span>
          <span className="ix-mono">{t.yearCol}</span>
          <span className="ix-mono">{t.roleCol}</span>
          <span />
        </div>

        {/* Rows */}
        <div style={{ position: 'relative' }}>
          {t.projects.map((p, i) =>
            <div key={p.id} className="ix-row ix-reveal"
            onClick={() => {
              if (p.id === 'playmobil') window.navTo('playmobil/');else
              if (p.id === 'hairly') window.navTo('hairly/');else
              if (p.id === 'kenya') window.navTo('kenya/');
            }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered((h) => h === p.id ? null : h)}>
              <span className="ix-mono" style={{ color: 'var(--ink)', fontSize: 13 }}>№ {String(i + 1).padStart(3, '0')}</span>
              <div>
                <div className="ix-rowtitle">{p.title}</div>
                <div className="ix-rowdesc" style={{ marginTop: 6, maxWidth: 380 }}>{p.desc}</div>
              </div>
              <span style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 24, fontWeight: 400, letterSpacing: -0.5, color: 'var(--ink-2)' }}>{p.year}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.slice(0, 4).map((tag) => <span key={tag} className="ix-pill">{tag}</span>)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <span className="ix-rowarrow" style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 999, background: 'var(--accent)', color: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </div>
            </div>
            )}

          {/* Floating thumb preview */}
          <div className="ix-floatthumb" style={{
              position: 'absolute', top: 80, right: 24, width: 240, aspectRatio: '4/5',
              transform: hovered ? 'translate(0, 0) rotate(-2deg)' : 'translate(20px, -10px) rotate(-2deg)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity .25s, transform .35s cubic-bezier(.2,.7,.2,1)',
              borderRadius: 14, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(15,42,27,.35)',
              pointerEvents: 'none', zIndex: 5,
              border: '8px solid var(--paper)'
            }}>
            {hovered && (() => {const Thumb = THUMBS[hovered];return <ProjectCoverWithSlot id={hovered}><Thumb /></ProjectCoverWithSlot>;})()}
          </div>
        </div>
      </section>

      {/* — MARQUEE / SKILLS — */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', background: 'var(--paper-2)', backgroundColor: "rgb(255, 255, 255)", textAlign: "left", padding: "34px 0px", height: "87px" }}>
        <div className="ix-marquee">
          <div className="ix-marquee-track" style={{ display: 'flex', gap: 60 }}>
            {[...Array(2)].map((_, k) =>
              <div key={k} style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
                {['UX Research', 'Design Systems', 'Service Design', 'User Journeys', 'Accessibility', 'Prototyping', 'UX Strategy', 'Mobile UX', 'Audit'].map((s, j) =>
                <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: 24, fontSize: "20px" }}>
                    <span className="ix-display ix-marquee-word" style={{ color: '#0F2A1B', fontSize: "20px" }}>{s}</span>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--accent)' }} />
                  </span>
                )}
              </div>
              )}
          </div>
        </div>
      </section>

      {/* — CONTACT — */}
      <section id="contact" style={{ padding: '72px 48px 56px', letterSpacing: "0px" }}>
        <div className="ix-reveal ix-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <span className="ix-mono">{`${t.section['03']} - 03`}</span>
            <h2 className="ix-display ix-contact-title" style={{ marginTop: 12, fontSize: "clamp(44px, 8vw, 82px)", whiteSpace: 'nowrap', lineHeight: 1 }}>
              {L.contactTitle}<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
          </div>
          <div>
            <a href={`mailto:${L.emailValue}`} style={{ fontSize: 28, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 10, borderBottom: '1px solid var(--ink)', paddingBottom: 6 }}>
              {L.emailValue}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
            <div style={{ marginTop: 20 }}>
              <a href="https://www.linkedin.com/in/irmane/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={(e)=>{e.preventDefault();window.open('https://www.linkedin.com/in/irmane/','_blank','noopener,noreferrer');}}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, color: 'var(--ink)', transition: 'color .2s, transform .2s' }}
                onMouseEnter={(e) => {e.currentTarget.style.color = 'var(--accent)';e.currentTarget.style.transform = 'translateY(-2px)';}}
                onMouseLeave={(e) => {e.currentTarget.style.color = 'var(--ink)';e.currentTarget.style.transform = 'none';}}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* — FOOTER — */}
      <footer style={{ borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '22px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="ix-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>
      <BackToTopFab />
      </div>
    </div>);

}

Object.assign(window, { VariantIndex });