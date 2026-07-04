/* Playmobil — case study page
   Reuses the Index variant's visual language: Bricolage Grotesque display,
   Albert Sans body, JetBrains Mono micro-labels, cream paper + green accent.
   Section numbering uses the same "LABEL - NN" pattern as the portfolio page.
*/

function PlaymobilCase({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const t = I18N[lang];
  useContentVersion();

  // — Local labels (FR/EN)
  let L = lang === 'fr' ? {
    back: '← Retour aux projets',
    subtitle: 'Repositionnement UX & Design System',
    tags: ['UX Research', 'Strategy', 'Eco-system', 'Accessibility', 'Design System'],
    heroEyebrow: 'Vers une nouvelle expérience',
    heroEyebrow2: 'Design System',
    heroCredits: 'Irmane Mze Ali · Corentin Painchaud · Ketura Toure',
    meta: [['Année', '2025'], ['Durée', '1 mois'], ['Équipe', '3 membres']],
    roleTitle: 'Mon rôle',
    roles: ['UX research', 'Navigation & arborescence', 'Design System', 'Audit UX & Accessibilité'],
    contextTitle: 'Contexte',
    contextBody: [
      "Playmobil est une marque iconique qui souffre d'un retard digital face à ses concurrents. Face aux marchés du jouet en mutation et celui d'Adultes (« kidultes ») en pleine croissance, nous avons reçu une expérience digitale de la marque : refonte de la navigation, de l'arborescence et création d'un Design System.",
      "La marque enregistrait par ailleurs 559 millions de dollars en 2023, avec une décroissance actuelle de 6,9 %. Avec ce contexte, Playmobil occupe un retard digital significatif face à ses concurrents comme LEGO ou l'histoire, qui ont su diversifier leur offre via des licences, le cinéma et les plateformes interactives.",
    ],
    problemTitle: 'Problématique',
    problemBody: "Comment adapter l'expérience utilisateur du site Playmobil afin de mieux attirer et engager les Kidultes, tout en conservant l'attrait de la marque auprès du jeune public ?",
    researchTitle: 'Recherche & insights clés',
    researchIntro: "Nous avons mené des interviews, concurrentiel, mini-sondé et fait des personae pour les regrouper et guider l'ensemble des choix dans une UX et stratégiques.",
    insights: [
      "Le marché ressent un fort signal émotionnel : besoin de parler en jeu plaisir et un fort retour en ronde d'expérience premium.",
      "L'expérience e-commerce manque de contenu engageant : avis, storytelling, vidéos ou la scène produits.",
      "Des sources d'inconfort viennent l'inconfort de l'inactivité du site.",
    ],
    personaTitle: 'Persona',
    personaName: 'Cyrien Dufay',
    personaBody: "Cyrien, 34 ans, Cyrien est passionné de culture pop et de jouets de collection depuis l'enfance, il a grandi avec Playmobil ou des jeux de constructions et d'autres licences emblématiques. Il suit les tendances Geek sur les réseaux sociaux via Tiktok et Instagram. Il achète principalement en ligne et privilégie les plateformes officielles. Il souhaite retrouver l'émotion et la nostalgie de son enfance, afficher sa passion dans son intérieur et se différencier avec des objets originaux et vintage.",
    personaAttrs: [['Âge', '34 ans'], ['Job', 'Chef de projet digital'], ['Statut', 'En couple, 1 enfant']],
    auditTitle: 'Audit UX & Accessibilité',
    auditIntro: "Nous avons mené un audit complet du site existant, mettant en évidence des problèmes UX et d'accessibilité majeurs.",
    auditUX: {
      title: 'Problèmes UX',
      items: ['CTA et call-to-action peu visibles · Navigation lente et peu hiérarchisée', "Fiches produits longues et peu lisibles · Manque d'accompagnement à l'achat"],
    },
    auditA11y: {
      title: "Problèmes d'accessibilité",
      items: ["Contrastes des titres · Navigation clavier partielle · Manque d'alternatives visuelles · Gabarits parfois peu inclusifs"],
    },
    auditNote: "Objectif : intégrer l'accessibilité dès la conception, et non comme une contrainte a posteriori.",
    strategyTitle: 'Repositionnement stratégique',
    strategyIntro: "Nous avons structuré la nouvelle expérience autour de 5 intentions clés. Ce cadre nous a permis de prioriser les fonctionnalités, clarifier la navigation, et aligner UX, business et branding.",
    strategySteps: ['Rechercher', 'Acheter', 'Informer', 'Engager', 'Divertir'],
    focusTitle: 'Focus Kidultes · Playworld',
    focusBody: [
      "Un focus particulier a été porté sur la création d'une expérience aux Kidultes (Playworld), combinant collection exclusives, archives de la marque et démarchés communautaires.",
      "Cet espace agrandit aux attentes d'une clientèle premium et engagée tout en assurant le cycle stratégique.",
    ],
    navTitle: 'Navigation & arborescence',
    navBody: "La navigation a été repensée pour simplifier les parcours utilisateurs, réduire la surcharge cognitive, et facilité l'accès aux collections et nouveautés.",
    navPrinciplesTitle: 'Principes clés',
    navPrinciples: ['5 grandes catégories claires pour une navigation intuitive', "Navigation des Adultes sur les évènements et saisons", "Mise en avant visuelle des univers Playworld"],
    dsTitle: 'Design System',
    dsBody: "Création d'un design system concret garantissant cohérence et scalabilité à travers toute l'expérience digitale Playmobil.",
    dsCards: ['Colors', 'Type', 'Components', 'Navigation'],
    designsTitle: 'Designs',
    learnTitle: 'Apprentissages clés',
    learnings: [
      "L'importance d'intégrer l'accessibilité dès la phase de conception pour créer une expérience véritablement inclusive.",
      "La nécessité d'arbitrer les besoins de différentes cibles (Kidultes vs jeune public) à travers une architecture claire.",
      "Un design system robuste et documenté facilité la collaboration et accélère l'implémentation.",
      "La recherche utilisateur approfondie révèle des insights stratégiques essentiels au repositionnement digital.",
    ],
    otherTitle: 'Mes projets',
  } : {
    back: '← Back to projects',
    subtitle: 'UX repositioning & Design System',
    tags: ['UX Research', 'Strategy', 'Eco-system', 'Accessibility', 'Design System'],
    heroEyebrow: 'Towards a new experience',
    heroEyebrow2: 'Design System',
    heroCredits: 'Irmane Mze Ali · Corentin Painchaud · Ketura Toure',
    meta: [['Year', '2025'], ['Duration', '1 month'], ['Team', '3 people']],
    roleTitle: 'My role',
    roles: ['UX research', 'Navigation & IA', 'Design System', 'UX & accessibility audit'],
    contextTitle: 'Context',
    contextBody: [
      "Playmobil is an iconic brand falling behind in the digital space. With the toy market shifting and the adult collector (« kidult ») audience growing fast, we were tasked with reimagining the brand's digital experience: navigation, IA and a new design system.",
      "The brand still booked $559M in 2023 but is now declining at 6.9 % YoY. Playmobil lags behind direct rivals like LEGO who have diversified through licensing, film and interactive platforms.",
    ],
    problemTitle: 'Problem',
    problemBody: "How can we adapt the Playmobil web experience to better attract and engage adult collectors, while preserving the brand's appeal for its younger audience?",
    researchTitle: 'Research & key insights',
    researchIntro: "Through interviews, competitive analysis, surveys and personas we framed the project around three strategic, user-centred pillars.",
    insights: [
      "Adult collectors seek a strong emotional signal, story-led, premium presentation that mirrors the toy's craft.",
      "The e-commerce surface lacks engaging content: reviews, storytelling, video and contextualised product staging.",
      "Several friction sources emerge from the dated, slow current site.",
    ],
    personaTitle: 'Persona',
    personaName: 'Cyrien Dufay',
    personaBody: "Cyrien, 34, is passionate about pop culture and collectible toys. He grew up with Playmobil and other iconic licences. He follows geek trends on TikTok & Instagram, buys mostly online and prefers official platforms. He wants to relive childhood emotion, display his passion at home, and stand out with original, vintage objects.",
    personaAttrs: [['Age', '34'], ['Job', 'Digital project manager'], ['Status', 'In a couple, one kid']],
    auditTitle: 'UX & Accessibility audit',
    auditIntro: "We ran a complete audit of the existing site, surfacing significant UX and accessibility issues.",
    auditUX: {
      title: 'UX issues',
      items: ['Low-visibility CTAs · Slow, flat navigation', "Long, hard-to-scan product pages · No guided buying support"],
    },
    auditA11y: {
      title: 'Accessibility issues',
      items: ["Heading contrast · Partial keyboard navigation · Missing visual alternatives · Layouts not consistently inclusive"],
    },
    auditNote: "Goal: integrate accessibility from day one, not as a late-stage constraint.",
    strategyTitle: 'Strategic repositioning',
    strategyIntro: "We framed the new experience around five clear intents. This lens helped us prioritise features, clarify navigation and align UX, business and brand.",
    strategySteps: ['Search', 'Buy', 'Inform', 'Engage', 'Entertain'],
    focusTitle: 'Focus kidults · Playworld',
    focusBody: [
      "A dedicated layer was carved out for the kidult audience (Playworld), combining exclusive collections, brand archives and community-driven content.",
      "This space addresses the expectations of a premium, engaged audience while supporting the overall strategic cycle.",
    ],
    navTitle: 'Navigation & information architecture',
    navBody: "Navigation was rethought to simplify user journeys, reduce cognitive load and ease access to collections and new arrivals.",
    navPrinciplesTitle: 'Key principles',
    navPrinciples: ['Five clear top-level categories', "Adult-focused entries for events and seasons", "Visual emphasis on Playworld universes"],
    dsTitle: 'Design System',
    dsBody: "A concrete design system ensuring consistency and scalability across the Playmobil digital experience.",
    dsCards: ['Colors', 'Type', 'Components', 'Navigation'],
    designsTitle: 'Designs',
    learnTitle: 'Key learnings',
    learnings: [
      "The importance of integrating accessibility at the design phase to create a truly inclusive experience.",
      "Balancing the needs of distinct audiences (kidults vs younger fans) through a clear architecture.",
      "A documented design system accelerates collaboration and implementation.",
      "Deep user research surfaces the strategic insights critical to a digital repositioning.",
    ],
    otherTitle: 'Other projects',
  };
  L = applyContentOverrides('playmobil', lang, L);

  const otherProjects = t.projects.filter(p => p.id !== 'playmobil');

  return (
    <div className="pm-root" data-theme={theme} style={{
      width: '100%', minHeight: '100vh',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Albert Sans", "Manrope", system-ui, sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition: 'background .3s, color .3s', position: 'relative'
    }}>
      <style>{`
        .pm-root { font-feature-settings: "ss01","cv11"; }
        .pm-display { font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 500; font-variation-settings: "wdth" 100, "opsz" 96; letter-spacing: -0.035em; line-height: 0.9; }
        .pm-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.4px; text-transform: uppercase; color: var(--ink-muted); font-weight: 500; }
        .pm-pill { display:inline-flex; align-items:center; height:28px; padding:0 12px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:12px; font-weight:500; letter-spacing:.2px; }
        .pm-link { transition: color .2s; }
        .pm-link:hover { color: var(--accent); }
        .pm-card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 24px 26px; }
        image-slot[data-filled] { cursor: zoom-in; }
        image-slot[id^="cover-"][data-filled] { cursor: default; }
        a image-slot[data-filled] { cursor: pointer; }
        .pm-section-head { display:flex; align-items:baseline; gap:18px; margin-bottom: 22px; }
        .pm-section-num { font-family:'JetBrains Mono', monospace; font-size:12px; color: var(--ink-muted); letter-spacing:.4px; }
        .pm-h2 { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size:36px; letter-spacing:-.025em; line-height:1; }
        .pm-body { font-family:'Albert Sans', sans-serif; font-size:16px; line-height:1.6; color:var(--ink-2); text-wrap: pretty; }
        .pm-bullet { display:flex; gap:12px; align-items:flex-start; padding:8px 0; }
        .pm-bullet::before { content:''; width:6px; height:6px; border-radius:999px; background: var(--accent); margin-top: 9px; flex-shrink:0; }
        .pm-row-divider { border-top: 1px solid var(--line); }
        .pm-insight { background: var(--card); border:1px solid var(--line); border-radius:12px; padding:18px 22px; font-size:15px; line-height:1.5; color: var(--ink-2); }
        .pm-step { width:74px; height:74px; border-radius:14px; background: var(--accent); color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; }
        .pm-step-num { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size:22px; line-height:1; }
        .pm-step-label { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.4px; text-transform:uppercase; }
        .pm-focus-card { background: var(--accent-soft); color: var(--accent-soft-ink); border-radius:12px; padding:18px 22px; font-size:14.5px; line-height:1.55; }
        .pm-tree-node { background:#7B5BD8; color:#fff; font-size:10px; padding:6px 8px; border-radius:6px; text-align:center; font-weight:500; line-height:1.2; min-height:34px; display:flex; align-items:center; justify-content:center; }
        .pm-tree-node.lvl1 { background:#5B3DC4; font-size:11px; min-height:38px; }
        .pm-tree-node.lvl3 { background:#9D80E8; }

        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .pm-root > header > div, .pm-root > main, .pm-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
          .pm-root [style*="grid-template-columns: repeat(4"] { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media (max-width: 680px) {
          .pm-root > header > div { padding:14px 20px !important; }
          .pm-root > main { padding:28px 20px 64px !important; }
          .pm-root > footer > div { padding:18px 20px !important; }
          .pm-root > header nav { gap:14px !important; font-size:12px !important; }
          .pm-root main [style*="grid-template-columns"] { grid-template-columns:1fr !important; }
          .pm-root [id^="pm-ds-card-"] { width:100% !important; height:auto !important; aspect-ratio:404/227; }
          .pm-root [style*="max-width:62%"], .pm-root [style*="max-width: 62%"],
          .pm-root [style*="max-width:60%"], .pm-root [style*="max-width: 60%"],
          .pm-root [style*="max-width:70%"], .pm-root [style*="max-width: 70%"],
          .pm-root [style*="max-width:72%"], .pm-root [style*="max-width: 72%"] { max-width:100% !important; }
        }
        @media (max-width: 400px) {
          .pm-root > header .pm-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV (mirror of Index variant) — */}
      <header style={{ borderBottom: '1px solid var(--line)', position: 'sticky', top: 0, zIndex: 10, background: 'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter: 'blur(8px)' }}>
        <div style={{ padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="./" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 21, letterSpacing: -0.6 }}>I<span style={{ color: 'var(--accent)' }}>.</span>UX</a>
            <span className="pm-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="pm-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork },
              { href: 'apropos/', label: t.navAbout },
              { href: 'contact/', label: t.navContact },
            ]} />
        </div>
      </header>

      {/* — Page chrome — */}
      <main style={{ padding: '40px 48px 80px' }}>

        {/* Back link */}
        <a href="projets/" className="pm-link pm-mono" style={{ display:'inline-flex', alignItems:'center', gap:6, marginBottom: 28 }}>{L.back}</a>

        {/* Title block */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', gap:32, marginBottom: 18 }}>
          <div>
            <h1 className="pm-display" style={{ fontSize: 'clamp(48px, 11vw, 96px)', letterSpacing:-.04 + 'em' }}>
              Playmobil<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            <div className="pm-body" style={{ fontSize:18, color:'var(--ink-muted)', marginTop:10 }}>{L.subtitle}</div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom: 32 }}>
          {L.tags.map(tag => <span key={tag} className="pm-pill">{tag}</span>)}
        </div>

        {/* HERO blue card */}
        <PlaymobilHeroCard L={L} />

        {/* Meta strip */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, padding:'28px 0 36px', borderBottom:'1px solid var(--line)', marginBottom:48 }}>
          {L.meta.map(([k,v]) => (
            <div key={k}>
              <div className="pm-mono">{k}</div>
              <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:500, marginTop:6, letterSpacing:-.5 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Mon rôle */}
        <Section num="01" title={L.roleTitle}>
          <ul style={{ listStyle:'none' }}>
            {L.roles.map(r => <li key={r} className="pm-bullet"><span className="pm-body" style={{ fontSize:17 }}>{r}</span></li>)}
          </ul>
        </Section>

        {/* Contexte */}
        <Section num="02" title={L.contextTitle}>
          <div style={{ display:'flex', flexDirection:'column', gap:18, maxWidth: '60%' }}>
            {L.contextBody.map((p,i) => <p key={i} className="pm-body">{p}</p>)}
          </div>
        </Section>

        {/* Problématique */}
        <Section num="03" title={L.problemTitle}>
          <div style={{ background:'var(--accent-soft)', color:'var(--accent-soft-ink)', borderRadius:14, padding:'26px 30px', maxWidth: '60%' }}>
            <p className="pm-body" style={{ color:'inherit', fontSize:16, lineHeight:1.6, textWrap:'pretty' }}>{L.problemBody}</p>
          </div>
        </Section>

        {/* Recherche & insights */}
        <Section num="04" title={L.researchTitle}>
          <p className="pm-body" style={{ maxWidth: '60%', marginBottom: 22 }}>{L.researchIntro}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {L.insights.map((ins, i) => <div key={i} className="pm-insight">{ins}</div>)}
          </div>
        </Section>

        {/* Persona */}
        <Section num="05" title={L.personaTitle}>
          <PersonaCard L={L} />
        </Section>

        {/* Audit */}
        <Section num="06" title={L.auditTitle}>
          <p className="pm-body" style={{ maxWidth: '60%', marginBottom: 22 }}>{L.auditIntro}</p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom: 18 }}>
            <AuditCard {...L.auditUX} />
            <AuditCard {...L.auditA11y} />
          </div>
          <div className="pm-card" style={{ background:'var(--paper-2)', borderColor:'transparent' }}>
            <span className="pm-mono" style={{ color:'var(--accent-soft-ink)' }}>Objectif</span>
            <p className="pm-body" style={{ fontSize:15.5, marginTop:4 }}>{L.auditNote}</p>
          </div>
        </Section>

        {/* Repositionnement stratégique */}
        <Section num="07" title={L.strategyTitle}>
          <p className="pm-body" style={{ maxWidth: '60%', marginBottom: 26 }}>{L.strategyIntro}</p>
          <div style={{ display:'flex', gap:18, flexWrap:'wrap' }}>
            {L.strategySteps.map((s, i) => (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                <div className="pm-step">
                  <span className="pm-step-num">{i + 1}</span>
                </div>
                <span className="pm-mono" style={{ color:'var(--ink)' }}>{s}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Focus Kidultes */}
        <Section num="08" title={L.focusTitle}>
          <div style={{ display:'flex', flexDirection:'column', gap:12, maxWidth: '60%' }}>
            {L.focusBody.map((p,i) => <div key={i} className="pm-focus-card">{p}</div>)}
          </div>
        </Section>

        {/* Navigation & arborescence */}
        <Section num="09" title={L.navTitle}>
          <p className="pm-body" style={{ maxWidth: '60%', marginBottom: 24 }}>{L.navBody}</p>
          <div className="pm-card" style={{ marginBottom: 22, maxWidth: '60%' }}>
            <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:500, marginBottom:10 }}>{L.navPrinciplesTitle}</div>
            <ul style={{ listStyle:'none' }}>
              {L.navPrinciples.map(p => <li key={p} className="pm-bullet"><span className="pm-body" style={{ fontSize:15 }}>{p}</span></li>)}
            </ul>
          </div>
          <SiteMap />
        </Section>

        {/* Design System */}
        <Section num="10" title={L.dsTitle}>
          <p className="pm-body" style={{ maxWidth: '60%', marginBottom: 22 }}>{L.dsBody}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 404px))', gap:18, justifyContent:'start' }}>
            {L.dsCards.map((label, i) => (
              <image-slot
                key={label}
                id={'pm-ds-card-' + i}
                locked
                shape="rounded"
                radius="18"
                fit="fill"
                placeholder={label}
                style={{ display:'block', width:'100%', maxWidth:404, height:'auto', aspectRatio:'404 / 227', background:'transparent' }}
              ></image-slot>
            ))}
          </div>
        </Section>

        {/* Designs */}
        <Section num="11" title={L.designsTitle}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:18 }}>
            {[
              { id:'pm-design-hero',    label:'Mockup · accueil app Playmobil', w:356, h:200, fit:'contain', ar:'832 / 468' },
              { id:'pm-design-desktop', label:'Desktop mockup', w:227, h:200, fit:'contain', ar:'759 / 670' },
            ].map(d => (
              <image-slot
                key={d.id}
                id={d.id}
                locked
                shape="rounded"
                radius="18"
                fit={d.fit}
                placeholder={d.label}
                style={{ display:'block', width:'100%', maxWidth:d.w, height:'auto', aspectRatio:d.ar, background:'transparent' }}
              ></image-slot>
            ))}
          </div>
        </Section>

        {/* Apprentissages clés */}
        <Section num="12" title={L.learnTitle}>
          <ul style={{ listStyle:'none', maxWidth: '60%' }}>
            {L.learnings.map(item => (
              <li key={item} className="pm-bullet" style={{ padding:'10px 0', borderBottom:'1px solid var(--line)' }}>
                <span className="pm-body" style={{ fontSize:15.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Mes projets */}
        <Section num="13" title={L.otherTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 320px))', gap:24, justifyContent:'start' }}>
            {otherProjects.map(p => {
              const Thumb = THUMBS[p.id];
              const href = p.id === 'hairly' ? 'hairly/' : p.id === 'kenya' ? 'kenya/' : 'projets/';
              return (
                <a key={p.id} href={href} className="pm-link" style={{ display:'block' }}>
                  <div style={{ aspectRatio:'4/3', borderRadius:14, overflow:'hidden', background:'var(--paper-2)' }}>
                    <ProjectCoverWithSlot id={p.id}><Thumb /></ProjectCoverWithSlot>
                  </div>
                  <div style={{ marginTop:12, fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:500, letterSpacing:-.5 }}>{p.title}</div>
                  <div className="pm-body" style={{ fontSize:13, marginTop:3, color:'var(--ink-muted)' }}>{p.desc}</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:10 }}>
                    {p.tags.slice(0,3).map(tag => <span key={tag} className="pm-pill" style={{ height:22, fontSize:10.5 }}>{tag}</span>)}
                  </div>
                </a>
              );
            })}
          </div>
        </Section>

      </main>

      {/* — FOOTER (mirror of Index variant) — */}
      <footer style={{ borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '22px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="pm-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>

      <ScrollProgress />
      <ImageLightbox />
      <BackToTopFab />
    </div>
  );
}

/* — Sub-components — */

function Section({ num, title, children }) {
  return (
    <section style={{ marginBottom: 60 }}>
      <div className="pm-section-head">
        <h2 className="pm-h2">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PlaymobilHeroCard({ L }) {
  return (
    <div style={{
      position:'relative', background:'#3F8FE8',
      borderRadius:18, overflow:'hidden',
      padding:'34px 40px 40px',
      aspectRatio:'1180/440',
      marginBottom: 8,
    }}>
      {/* Cover image (alt text supplied via media.js) */}
      <image-slot id="cover-playmobil" locked fit="cover" placeholder="" shape="rect"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', background:'transparent', display:'block' }}>
      </image-slot>
    </div>
  );
}

function PersonaCard({ L }) {
  return (
    <div style={{ display:'flex', justifyContent:'flex-start' }}>
      <image-slot
        id="pm-persona-img"
        locked
        shape="rounded"
        radius="18"
        fit="fill"
        placeholder="Déposer l'image du persona (PNG)"
        style={{ display:'block', width:'100%', maxWidth:505, height:'auto', aspectRatio:'505 / 257', flexShrink:1, background:'transparent' }}
      ></image-slot>
    </div>
  );
}

function AuditCard({ title, items }) {
  return (
    <div className="pm-card">
      <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:16, fontWeight:500, marginBottom:8 }}>{title}</div>
      <div style={{ display:'flex', flexDirection:'column', gap:6, fontSize:13.5, lineHeight:1.5, color:'var(--ink-muted)' }}>
        {items.map((it, i) => <span key={i}>{it}</span>)}
      </div>
    </div>
  );
}

function SiteMap() {
  const wrapRef = React.useRef(null);
  const innerRef = React.useRef(null);
  const [overflow, setOverflow] = React.useState(false);
  React.useEffect(() => {
    const fit = () => {
      const w = wrapRef.current, inner = innerRef.current;
      if (!w || !inner) return;
      setOverflow(inner.scrollWidth > w.clientWidth + 1);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', fit);
    return () => { ro.disconnect(); window.removeEventListener('resize', fit); };
  }, []);
  const branches = [
    { label: "L'univers playmobil", children: [
      { label: 'Toutes les offres' }, { label: 'Nos engagements' }, { label: 'PlaymoLab' },
    ]},
    { label: 'My Playworld', children: [
      { label: 'VIP' }, { label: 'Ma collection' }, { label: 'Marketplace' },
    ]},
    { label: 'Shop', children: [
      { label: 'Playmobil Junior',      children: [{ label: 'Catalogue', children: [{ label: 'Page produit' }] }] },
      { label: 'Les univers playmobile', children: [{ label: 'Catalogue', children: [{ label: 'Page produit' }] }] },
      { label: 'Editions spéciales',    children: [{ label: 'Catalogue', children: [{ label: 'Page produit' }] }] },
      { label: 'Toute notre collection', children: [{ label: 'Catalogue', children: [{ label: 'Page produit' }] }] },
      { label: 'Les iconiques',         children: [{ label: 'Catalogue', children: [{ label: 'Page produit' }] }] },
    ]},
    { label: 'Aide', children: [
      { label: 'FAQ' }, { label: 'Nous contacter' }, { label: 'Pièce de rechange/SAV' },
    ]},
  ];
  return (
    <div className="sm-wrap" ref={wrapRef}>
      <style>{`
        .sm-wrap { padding:16px 2px 8px; overflow-x:auto; }
        .sm-inner { width:max-content; }
        .sm-tree, .sm-tree ul { display:flex; justify-content:center; list-style:none; margin:0; padding:0; }
        .sm-tree ul { padding-top:20px; position:relative; }
        .sm-tree li { position:relative; padding:20px 7px 0; display:flex; flex-direction:column; align-items:center; }
        .sm-tree li::before, .sm-tree li::after { content:''; position:absolute; top:0; right:50%; width:50%; height:20px; border-top:2px solid var(--sm-line); }
        .sm-tree li::after { right:auto; left:50%; border-left:2px solid var(--sm-line); }
        .sm-tree li:first-child::before, .sm-tree li:last-child::after { border:0; }
        .sm-tree li:last-child::before { border-right:2px solid var(--sm-line); }
        .sm-tree li:only-child { padding-top:0; }
        .sm-tree li:only-child::before, .sm-tree li:only-child::after { display:none; }
        .sm-tree ul::before { content:''; position:absolute; top:0; left:50%; width:0; height:20px; border-left:2px solid var(--sm-line); }
        .sm-node { background:var(--sm-box); color:#fff; font-size:12px; line-height:1.18; font-weight:500; padding:9px 11px; border-radius:3px; min-width:64px; max-width:116px; text-align:center; text-wrap:balance; }
        .sm-home-row { display:flex; align-items:center; gap:11px; }
        .sm-arr { color:#7c7780; font-size:15px; flex-shrink:0; }
      `}</style>
      <div className="sm-inner" ref={innerRef} style={{ marginInline: overflow ? '0' : 'auto' }}>
        <ul className="sm-tree" style={{ '--sm-line':'#bcb6c1', '--sm-box':'#9C159C' }}>
          <li>
            <div className="sm-home-row">
              <div className="sm-node">Mon compte</div>
              <span className="sm-arr">←</span>
              <div className="sm-node">Home</div>
              <span className="sm-arr">→</span>
              <div className="sm-node">Panier</div>
            </div>
            <ul>
              {branches.map((b, i) => <SiteNode key={i} node={b} />)}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SiteNode({ node }) {
  return (
    <li>
      <div className="sm-node">{node.label}</div>
      {node.children && <ul>{node.children.map((k, i) => <SiteNode key={i} node={k} />)}</ul>}
    </li>
  );
}

function DSColors() {
  const swatches = ['#3F8FE8', '#0F2A1B', '#D63F2F', '#F4C39E', '#3B49C9', '#DAEACD'];
  return (
    <div className="pm-card" style={{ padding:0, overflow:'hidden' }}>
      <div style={{ padding:'18px 20px', background:'linear-gradient(135deg, #3F8FE8 0%, #DAEACD 100%)', color:'#fff' }}>
        <div className="pm-mono" style={{ color:'rgba(255,255,255,.85)' }}>10 · Colors</div>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:600, marginTop:6, letterSpacing:-.5 }}>Colors</div>
      </div>
      <div style={{ padding:'14px 18px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:6 }}>
        {swatches.map((c,i) => <div key={i} style={{ aspectRatio:'1.6/1', borderRadius:6, background:c }}/>)}
      </div>
    </div>
  );
}

function DSType() {
  return (
    <div className="pm-card" style={{ padding:0, overflow:'hidden' }}>
      <div style={{ padding:'18px 20px' }}>
        <div className="pm-mono">10 · Type</div>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:600, marginTop:6, letterSpacing:-.5 }}>Type</div>
      </div>
      <div style={{ padding:'4px 20px 20px' }}>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:34, fontWeight:600, letterSpacing:-1, lineHeight:1 }}>Aa</div>
        <div style={{ fontFamily:'"Albert Sans", sans-serif', fontSize:14, color:'var(--ink-muted)', marginTop:8, lineHeight:1.4 }}>Bricolage Grotesque<br/>Albert Sans</div>
      </div>
    </div>
  );
}

function DSComponents() {
  return (
    <div className="pm-card" style={{ padding:0, overflow:'hidden' }}>
      <div style={{ padding:'18px 20px' }}>
        <div className="pm-mono">10 · Components</div>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:600, marginTop:6, letterSpacing:-.5 }}>Components</div>
      </div>
      <div style={{ padding:'4px 18px 18px', display:'flex', flexDirection:'column', gap:8 }}>
        <div style={{ display:'flex', gap:6 }}>
          {[1,2,3,4].map(i => <div key={i} style={{ flex:1, height:18, borderRadius:4, background:['#3F8FE8','#D63F2F','#F4C39E','#0F2A1B'][i-1] }}/>)}
        </div>
        <div style={{ display:'flex', gap:6 }}>
          <div style={{ flex:2, height:24, borderRadius:999, background:'var(--accent)' }}/>
          <div style={{ flex:1, height:24, borderRadius:6, background:'var(--paper-2)' }}/>
        </div>
        <div style={{ height:32, borderRadius:6, background:'var(--paper-2)', border:'1px solid var(--line)' }}/>
      </div>
    </div>
  );
}

function DSNavigation() {
  return (
    <div className="pm-card" style={{ padding:0, overflow:'hidden' }}>
      <div style={{ padding:'18px 20px', background:'linear-gradient(135deg, #3F8FE8 0%, #93C7F5 100%)', color:'#fff' }}>
        <div className="pm-mono" style={{ color:'rgba(255,255,255,.85)' }}>10 · Navigation</div>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:600, marginTop:6, letterSpacing:-.5 }}>Navigation</div>
      </div>
      <div style={{ padding:'14px 18px', display:'flex', flexDirection:'column', gap:6 }}>
        {['Accueil','Boutique','Playworld','Inspiration'].map(label => (
          <div key={label} style={{ height:22, background:'var(--paper-2)', borderRadius:4, padding:'0 8px', display:'flex', alignItems:'center', fontSize:11, color:'var(--ink-2)' }}>{label}</div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { PlaymobilCase });
