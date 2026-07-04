/* Hairly — case study page
   Same UI vocabulary as the Playmobil case (variant-index DNA).
*/

function HairlyCase({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const t = I18N[lang];
  useContentVersion();

  let L = lang === 'fr' ? {
    back: '← Retour aux projets',
    subtitle: 'Une marketplace mobile pour la réservation de coiffure à domicile',
    tags: ['Product design', 'UX research', 'User journey', 'Mobile'],
    meta: [['Année', '2025'], ['Durée', '1 semaine'], ['Équipe', '10 membres']],
    frameTitle: 'Cadre du projet',
    frameBody: "Hairly est né d'un court sprint produit d'une semaine en mode startup. L'objectif était de concevoir un MVP viable, cohérent et différenciant dans un temps contraint.",
    roleTitle: 'Mon rôle',
    roles: ['UX Designer', 'Analyse capillaire IA', 'Architecture du flow de réservation', 'Simplification des parcours mobile'],
    contextTitle: 'Contexte',
    contextBody: "La coiffure à domicile a connu une croissance de +25% entre 2018 et 2023, portée par une demande de services flexibles et personnalisés. Pourtant, le marché reste fragmenté et difficile d'accès :",
    contextBullets: [
      "57% des consommateurs déclarent que trouver un coiffeur reste difficile.",
      "65% des coiffeurs à domicile travaillent seuls.",
      "Gestion administrative chronophage.",
      "Visibilité qualifiée des besoins clients.",
    ],
    problemTitle: 'Problématique',
    problemBody: "Il existe un décalage entre des clients qui veulent réserver rapidement et des professionnels qui veulent des demandes claires et exploitables.",
    objectiveTitle: 'Objectif',
    objectives: [
      'Créer une marketplace mobile qui :',
      'Permet une réservation en moins de 3 minutes',
      'Qualifie intelligemment la demande',
      'Optimise le matching client / professionnel',
    ],
    researchTitle: 'Recherche & insights clés',
    researchIntro: "Nous avons mené un questionnaire auprès de 25 répondants pour valider les besoins du marché.",
    insights: [
      "82% fréquentent un service de coiffure 1 à 2 fois par an.",
      "La prise de rendez-vous facile et le choix du coiffeur sont les fonctionnalités les plus attendues (100%).",
      "La compétence du coiffeur est la principale crainte à l'utilisation d'une app (133%).",
      "La simplicité est citée comme le premier avantage d'une telle application.",
    ],
    personasTitle: 'Personas',
    personas: [
      {
        name: 'Amina',
        meta: '32 / Chargée comm. à domicile, 2 enfants',
        story: "Diminuer la routine.",
        body: "Le mercredi, elle veut un service de coiffure rapide à proximité du travail, sans se déplacer plus loin que l'école.",
        objective: "Réserver rapidement, bénéficier de la compétence du coiffeur, obtenir un rendez-vous à la maison ou au bureau.",
        habits: "Pas de disponibilité en semaine, difficulté à trouver le coiffeur disponible. Elle achète temps & qualité.",
        behavior: "Prête à payer +20% si le coiffeur est disponible rapidement. Elle utilise le téléphone mobile pour tout réserver.",
      },
      {
        name: 'Ryane',
        meta: "28 / Coiffeur indépendant à domicile · Lyon · 7 ans d'expérience",
        story: "Je veux des clients qui viennent à moi sans déplacement.",
        body: "Ryane a une clientèle stable, il s'est lancé à son compte et veut développer son business sans louer un salon.",
        objective: "Avoir un agenda optimisé, recevoir des commandes claires et exploitables. Valoriser sa compétence.",
        habits: "Habituellement il prend que les clients à l'épée de cheveux, sa clientèle se trie naturellement par recommandation.",
        behavior: "Comportement habituel de 80% des coiffeurs sur un sprint : Ryane est en sprint pour développer 5 nouveaux clients par semaine, ce qui lui demande de s'organiser au jour le jour.",
      },
    ],
    problemKeyTitle: 'Problème clé identifié',
    problemKeyBox: "Une donnée mal qualifiée impacte l'expérience client, la préparation du professionnel et la performance globale de la plateforme.",
    problemKeyBody: "La qualité de la mise en relation dans une marketplace de services dépend directement de la précision des informations collectées en amont. Dans le cas des prestations capillaires, la complexité varie selon plusieurs paramètres : longueur, densité, texture, volume, qui influencent directement le temps nécessaire et la préparation du professionnel. La qualité de la mise en relation dans une marketplace de services dépend directement de la précision des informations collectées en amont. Dans le cas des prestations capillaires, la complexité varie selon plusieurs paramètres : longueur, densité, texture, volume, qui influencent directement le temps nécessaire et la préparation du professionnel.",
    strategyTitle: 'Repositionnement stratégique',
    strategyIntro: "Nous avons structuré la nouvelle expérience autour de 5 dimensions clés. Ce cadre nous a permis de prioriser les fonctionnalités, clarifier la navigation, et aligner UX, business et branding.",
    strategySteps: ['Rechercher', 'Acheter', 'Informer', 'Engager', 'Divertir'],
    solutionTitle: 'Solution · Analyse capillaire avancée par IA',
    solutionBody: "Hairly intègre une analyse capillaire assistée par IA directement dans le flow de réservation. À partir d'une simple photo, l'IA analyse le type de cheveux (lisse, ondulé, bouclé, crépu), la densité capillaire, la longueur estimée, le volume et l'état apparent.",
    marketTitle: 'Logique marketplace',
    marketCols: [
      { title: 'Particulier', items: ['Rapidité', 'Personnalisation', 'Réduction d\u2019incertitude'] },
      { title: 'Professionnel', items: ['Meilleure préparation', 'Estimation facile', 'Agenda optimisé'] },
    ],
    marketBottom: 'Modèle économique · Abonnement premium · Monétisation additionnelle',
    kpiTitle: 'KPI envisagés',
    kpis: [
      "Taux de complétion analyse IA",
      "Taux de matching réussi",
      "Temps moyen de réservation",
      "Taux d'annulation",
      "Taux de rétention",
    ],
    closing: "Ce sprint m'a appris à prioriser rapidement sous contrainte. Quand on a une semaine, chaque décision de design doit être justifiée par la valeur qu'elle apporte au produit. J'ai également compris que l'IA dans un parcours UX doit rester transparente et rassurante. L'analyse capillaire n'a de valeur que si l'utilisateur comprend pourquoi on lui demande une photo et ce qu'on en fait. Enfin, concevoir pour deux cibles simultanément, client et professionnel, m'a appris à toujours garder les deux perspectives en tête lors de chaque décision produit.",
    otherTitle: 'Mes projets',
  } : {
    back: '← Back to projects',
    subtitle: 'A mobile marketplace for home hairstyling appointments',
    tags: ['Product design', 'UX research', 'User journey', 'Mobile'],
    meta: [['Year', '2025'], ['Duration', '1 week'], ['Team', '10 people']],
    frameTitle: 'Project frame',
    frameBody: "Hairly came out of a one-week product sprint, startup-style. The goal: ship a viable, coherent and differentiated MVP under tight time constraints.",
    roleTitle: 'My role',
    roles: ['UX Designer', 'AI hair analysis', 'Booking flow architecture', 'Mobile journey simplification'],
    contextTitle: 'Context',
    contextBody: "Home hairstyling grew +25 % between 2018 and 2023, driven by demand for flexible, personalised services. Yet the market remains fragmented and hard to access:",
    contextBullets: [
      "57 % of consumers say finding a stylist is difficult.",
      "65 % of home stylists work alone.",
      "Heavy administrative overhead.",
      "Limited visibility on qualified client needs.",
    ],
    problemTitle: 'Problem',
    problemBody: "There is a gap between clients who want to book fast and pros who want clear, actionable requests.",
    objectiveTitle: 'Objective',
    objectives: [
      'Build a mobile marketplace that:',
      'Allows a booking in under 3 minutes',
      'Qualifies the request intelligently',
      'Optimises the client / pro match',
    ],
    researchTitle: 'Research & key insights',
    researchIntro: "We ran a survey with 25 respondents to validate market needs.",
    insights: [
      "82 % use a hairstyling service 1-2 times a year.",
      "Easy booking and stylist choice are the most expected features (100 %).",
      "Stylist skill is the top concern when using the app (133 %).",
      "Simplicity is the #1 perceived benefit of such an app.",
    ],
    personasTitle: 'Personas',
    personas: [
      {
        name: 'Amina',
        meta: '32 / Comms manager working from home, 2 kids',
        story: "Cutting the routine.",
        body: "On Wednesdays she wants a quick service near work, no detour past school.",
        objective: "Book fast, get a skilled stylist, at home or at the office.",
        habits: "No mid-week availability, hard to find a stylist who fits. She trades cash for time & quality.",
        behavior: "Willing to pay +20 % for fast availability. Books everything from her phone.",
      },
      {
        name: 'Ryane',
        meta: '28 / Independent home stylist · Lyon · 7 yrs',
        story: "I want clients who come to me, no commute.",
        body: "Ryane has a stable book of clients, went freelance and wants to grow without renting a salon.",
        objective: "Tight schedule, clear briefs, value his skill.",
        habits: "Usually only takes referral clients, slow growth.",
        behavior: "Sprinting to add 5 new clients a week, needs day-to-day organisation.",
      },
    ],
    problemKeyTitle: 'Key problem',
    problemKeyBox: "Badly qualified data damages the client experience, the pro's prep and the platform's overall performance.",
    problemKeyBody: "Match quality in a service marketplace depends directly on how accurate the upstream brief is. For hairstyling, complexity varies on multiple parameters (length, density, texture, volume) that directly impact required time and prep. The richer and more accurate the brief, the better the match, the booking time and the perceived value.",
    strategyTitle: 'Strategic positioning',
    strategyIntro: "We framed the experience around 5 dimensions, helping us prioritise features, clarify navigation and align UX, business and brand.",
    strategySteps: ['Search', 'Book', 'Inform', 'Engage', 'Entertain'],
    solutionTitle: 'Solution · AI-assisted hair analysis',
    solutionBody: "Hairly embeds an AI-assisted hair analysis directly inside the booking flow. From a single photo, the AI infers hair type (straight, wavy, curly, coily), density, estimated length, volume and visible condition.",
    marketTitle: 'Marketplace logic',
    marketCols: [
      { title: 'Client', items: ['Speed', 'Personalisation', 'Reduced uncertainty'] },
      { title: 'Professional', items: ['Better prep', 'Easy estimation', 'Optimised calendar'] },
    ],
    marketBottom: 'Business model · Premium subscription · Add-on monetisation',
    kpiTitle: 'KPIs tracked',
    kpis: [
      "AI analysis completion rate",
      "Successful match rate",
      "Average booking time",
      "Cancellation rate",
      "Retention rate",
    ],
    closing: "This sprint taught me to prioritise hard under constraint. When you have a week, every design call has to earn its place. I also learnt that AI in a UX flow has to stay transparent and reassuring. The hair analysis is only valuable if the user understands why we ask for a photo and what happens with it. Designing for two audiences at once, client and pro, taught me to always carry both perspectives through every decision.",
    otherTitle: 'Other projects',
  };
  L = applyContentOverrides('hairly', lang, L);

  const otherProjects = t.projects.filter(p => p.id !== 'hairly');

  return (
    <div className="hr-root" data-theme={theme} style={{
      width:'100%', minHeight:'100vh',
      background:'var(--paper)', color:'var(--ink)',
      fontFamily:'"Albert Sans","Manrope",system-ui,sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition:'background .3s,color .3s', position:'relative'
    }}>
      <style>{`
        .hr-root { font-feature-settings: "ss01","cv11"; }
        .hr-display { font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 500; font-variation-settings: "wdth" 100, "opsz" 96; letter-spacing: -0.035em; line-height: 0.9; }
        .hr-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.4px; text-transform: uppercase; color: var(--ink-muted); font-weight: 500; }
        .hr-pill { display:inline-flex; align-items:center; height:28px; padding:0 12px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:12px; font-weight:500; letter-spacing:.2px; }
        .hr-link { transition: color .2s; }
        .hr-link:hover { color: var(--accent); }
        .hr-card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 22px 24px; }
        .hr-section-head { display:flex; align-items:baseline; gap:18px; margin-bottom: 22px; }
        .hr-section-num { font-family:'JetBrains Mono', monospace; font-size:12px; color: var(--ink-muted); letter-spacing:.4px; }
        .hr-h2 { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size:32px; letter-spacing:-.025em; line-height:1; }
        .hr-body { font-family:'Albert Sans', sans-serif; font-size:16px; line-height:1.6; color:var(--ink-2); text-wrap: pretty; }
        image-slot[data-filled] { cursor: zoom-in; }
        image-slot[id^="cover-"][data-filled] { cursor: default; }
        a image-slot[data-filled] { cursor: pointer; }
        .hr-bullet { display:flex; gap:12px; align-items:flex-start; padding:6px 0; }
        .hr-bullet::before { content:''; width:6px; height:6px; border-radius:999px; background: var(--accent); margin-top: 9px; flex-shrink:0; }
        .hr-insight { background: var(--card); border:1px solid var(--line); border-radius:12px; padding:16px 22px; font-size:15px; line-height:1.5; color: var(--ink-2); }
        .hr-step { width:74px; height:74px; border-radius:14px; background: var(--accent); color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; }
        .hr-step-num { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size:22px; line-height:1; }
        .hr-step-label { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.4px; text-transform:uppercase; }
        .hr-soft-box { background: var(--accent-soft); color: var(--accent-soft-ink); border-radius:12px; padding:18px 22px; font-size:14.5px; line-height:1.55; }
        .hr-divider { border-top: 1px solid var(--line); }

        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .hr-root > header > div, .hr-root > main, .hr-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
          .hr-root [style*="grid-template-columns: repeat(4"] { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media (max-width: 680px) {
          .hr-root > header > div { padding:14px 20px !important; }
          .hr-root > main { padding:28px 20px 64px !important; }
          .hr-root > footer > div { padding:18px 20px !important; }
          .hr-root > header nav { gap:14px !important; font-size:12px !important; }
          .hr-root main [style*="grid-template-columns"] { grid-template-columns:1fr !important; }
          .hr-root [style*="max-width:62%"], .hr-root [style*="max-width: 62%"],
          .hr-root [style*="max-width:60%"], .hr-root [style*="max-width: 60%"],
          .hr-root [style*="max-width:70%"], .hr-root [style*="max-width: 70%"],
          .hr-root [style*="max-width:72%"], .hr-root [style*="max-width: 72%"] { max-width:100% !important; }
          /* Demo videos: keep a tidy, homogeneous 2-up grid instead of full-width portrait blocks */
          .hr-root main .hr-demo-grid[style] { grid-template-columns:repeat(2,1fr) !important; gap:12px !important; max-width:360px !important; }
        }
        @media (max-width: 400px) {
          .hr-root > header .hr-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ borderBottom: '1px solid var(--line)', position: 'sticky', top: 0, zIndex: 10, background: 'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter: 'blur(8px)' }}>
        <div style={{ padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="./" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 21, letterSpacing: -0.6 }}>I<span style={{ color: 'var(--accent)' }}>.</span>UX</a>
            <span className="hr-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="hr-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork },
              { href: 'apropos/', label: t.navAbout },
              { href: 'contact/', label: t.navContact },
            ]} />
        </div>
      </header>

      <main style={{ padding: '40px 48px 80px' }}>

        {/* Back */}
        <a href="projets/" className="hr-link hr-mono" style={{ display:'inline-flex', alignItems:'center', gap:6, marginBottom: 28 }}>{L.back}</a>

        {/* Title */}
        <h1 className="hr-display" style={{ fontSize: 'clamp(48px, 11vw, 96px)' }}>
          Hairly<span style={{ color: 'var(--accent)' }}>.</span>
        </h1>
        <div className="hr-body" style={{ fontSize:18, color:'var(--ink-muted)', marginTop:10, maxWidth: '60%' }}>{L.subtitle}</div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop: 18, marginBottom: 32 }}>
          {L.tags.map(tag => <span key={tag} className="hr-pill">{tag}</span>)}
        </div>

        {/* HERO cream card with logo */}
        <HairlyHeroCard />

        {/* Meta strip */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, padding:'28px 0 36px', borderBottom:'1px solid var(--line)', marginBottom:48 }}>
          {L.meta.map(([k,v]) => (
            <div key={k}>
              <div className="hr-mono">{k}</div>
              <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:500, marginTop:6, letterSpacing:-.5 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Cadre du projet */}
        <Section num="01" title={L.frameTitle}>
          <p className="hr-body" style={{ maxWidth: '60%' }}>{L.frameBody}</p>
        </Section>

        {/* Mon rôle */}
        <Section num="02" title={L.roleTitle}>
          <ul style={{ listStyle:'none' }}>
            {L.roles.map(r => <li key={r} className="hr-bullet"><span className="hr-body" style={{ fontSize:17 }}>{r}</span></li>)}
          </ul>
        </Section>

        {/* Contexte */}
        <Section num="03" title={L.contextTitle}>
          <p className="hr-body" style={{ maxWidth: '60%', marginBottom: 14 }}>{L.contextBody}</p>
          <ul style={{ listStyle:'none' }}>
            {L.contextBullets.map(b => <li key={b} className="hr-bullet"><span className="hr-body" style={{ fontSize:15.5 }}>{b}</span></li>)}
          </ul>
        </Section>

        {/* Problématique */}
        <Section num="04" title={L.problemTitle}>
          <div className="hr-soft-box" style={{ maxWidth: '60%', padding:'24px 28px' }}>
            <p className="hr-body">{L.problemBody}</p>
          </div>
        </Section>

        {/* Objectif */}
        <Section num="05" title={L.objectiveTitle}>
          <p className="hr-body" style={{ marginBottom: 6 }}>{L.objectives[0]}</p>
          <ul style={{ listStyle:'none' }}>
            {L.objectives.slice(1).map(o => <li key={o} className="hr-bullet"><span className="hr-body" style={{ fontSize:15.5 }}>{o}</span></li>)}
          </ul>
        </Section>

        {/* Recherche & insights */}
        <Section num="06" title={L.researchTitle}>
          <p className="hr-body" style={{ maxWidth: '60%', marginBottom: 20 }}>{L.researchIntro}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {L.insights.map((ins,i) => <div key={i} className="hr-insight">{ins}</div>)}
          </div>
        </Section>

        {/* Personas */}
        <Section num="07" title={L.personasTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            {L.personas.map((p,i) => <PersonaCard key={i} persona={p} slotId={`hr-persona-${i}`} />)}
          </div>
        </Section>

        {/* Problème clé identifié */}
        <Section num="08" title={L.problemKeyTitle}>
          <div className="hr-card" style={{ marginBottom:16 }}>
            <p style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, lineHeight:1.45, fontWeight:500, letterSpacing:-.2 }}>{L.problemKeyBox}</p>
          </div>
          <p className="hr-body">{L.problemKeyBody}</p>
        </Section>

        {/* Repositionnement stratégique */}
        <Section num="09" title={L.strategyTitle}>
          <p className="hr-body" style={{ maxWidth: '60%', marginBottom: 26 }}>{L.strategyIntro}</p>
          <div style={{ display:'flex', gap:18, flexWrap:'wrap' }}>
            {L.strategySteps.map((s, i) => (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                <div className="hr-step">
                  <span className="hr-step-num">{i + 1}</span>
                </div>
                <span className="hr-mono" style={{ color:'var(--ink)' }}>{s}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Solution */}
        <Section num="10" title={L.solutionTitle}>
          <div className="hr-soft-box" style={{ marginBottom: 22, maxWidth: '60%' }}>
            <p style={{ fontSize:14.5, lineHeight:1.6 }}>{L.solutionBody}</p>
          </div>
          {/* 3 demo videos — balises <video> natives (webm prioritaire, mp4 fallback) */}
          <div className="hr-demo-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
            {[
              { name: 'onboarding', label: "Démo vidéo — onboarding de l'application Hairly" },
              { name: 'reservation-prerequis', label: 'Démo vidéo — prérequis de la réservation Hairly' },
              { name: 'reservation-analyse-cheveux', label: 'Démo vidéo — analyse capillaire par IA dans Hairly' },
            ].map(v => (
              <div key={v.name} style={{ position:'relative', borderRadius:18, aspectRatio:'0.55/1', overflow:'hidden', background:'#000' }}>
                <video autoPlay muted loop playsInline preload="metadata"
                  poster="images/hairly/cover.jpg" aria-label={v.label}
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }}>
                  <source src={`videos/hairly/${v.name}.webm`} type="video/webm" />
                  <source src={`videos/hairly/${v.name}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </Section>

        {/* Logique marketplace */}
        <Section num="11" title={L.marketTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            {L.marketCols.map(col => (
              <div key={col.title} className="hr-card">
                <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:500, marginBottom:10 }}>{col.title}</div>
                <ul style={{ listStyle:'none' }}>
                  {col.items.map(it => <li key={it} className="hr-bullet"><span className="hr-body" style={{ fontSize:15 }}>{it}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="hr-mono" style={{ marginTop:18 }}>{L.marketBottom}</div>
        </Section>

        {/* KPI */}
        <Section num="12" title={L.kpiTitle}>
          <ul style={{ listStyle:'none', maxWidth: '60%' }}>
            {L.kpis.map(k => <li key={k} className="hr-bullet"><span className="hr-body" style={{ fontSize:15.5 }}>{k}</span></li>)}
          </ul>
        </Section>

        {/* Closing reflection */}
        <section style={{ borderTop:'1px solid var(--line)', paddingTop:40, marginTop: 40, marginBottom: 70 }}>
          <p className="hr-body" style={{ fontSize:16, textWrap:'pretty', maxWidth:'60%' }}>{L.closing}</p>
        </section>

        {/* Mes projets */}
        <Section num="13" title={L.otherTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 320px))', gap:24, justifyContent:'start' }}>
            {otherProjects.map(p => {
              const Thumb = THUMBS[p.id];
              const href = p.id === 'playmobil' ? 'playmobil/' : p.id === 'kenya' ? 'kenya/' : 'projets/';
              return (
                <a key={p.id} href={href} className="hr-link" style={{ display:'block' }}>
                  <div style={{ aspectRatio:'4/3', borderRadius:14, overflow:'hidden', background:'var(--paper-2)' }}>
                    <ProjectCoverWithSlot id={p.id}><Thumb /></ProjectCoverWithSlot>
                  </div>
                  <div style={{ marginTop:12, fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:500, letterSpacing:-.5 }}>{p.title}</div>
                  <div className="hr-body" style={{ fontSize:13, marginTop:3, color:'var(--ink-muted)' }}>{p.desc}</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:10 }}>
                    {p.tags.slice(0,3).map(tag => <span key={tag} className="hr-pill" style={{ height:22, fontSize:10.5 }}>{tag}</span>)}
                  </div>
                </a>
              );
            })}
          </div>
        </Section>

      </main>

      {/* — FOOTER — */}
      <footer style={{ borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '22px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="hr-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>

      <ScrollProgress />
      <ImageLightbox />
      <BackToTopFab />
    </div>
  );
}

function Section({ num, title, children }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <div className="hr-section-head">
        <h2 className="hr-h2">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function HairlyHeroCard() {
  return (
    <div style={{
      position:'relative', background:'#EEEAE0',
      borderRadius:18, overflow:'hidden',
      aspectRatio:'1180/500',
      display:'flex', alignItems:'center', justifyContent:'center',
      marginTop: 8,
    }}>
      {/* Cover image (alt text supplied via media.js) */}
      <image-slot id="cover-hairly" locked fit="cover" shape="rect"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', background:'transparent', display:'block' }}>
      </image-slot>
    </div>
  );
}

function PersonaCard({ persona, slotId }) {
  return (
    <div className="hr-card" style={{ padding:'22px 24px' }}>
      <div style={{ display:'flex', gap:14, alignItems:'center', marginBottom:14 }}>
        <div style={{ width:54, height:54, borderRadius:'50%', overflow:'hidden', background:'var(--paper-2)', flexShrink:0, position:'relative' }}>
          <image-slot id={slotId} locked fit="contain" placeholder="Photo" shape="circle" data-no-zoom style={{ width:'100%', height:'100%', display:'block', background:'transparent', cursor:'default' }}></image-slot>
        </div>
        <div>
          <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:600, fontSize:22, letterSpacing:-.4, lineHeight:1 }}>{persona.name}</div>
          <div className="hr-mono" style={{ marginTop:4, textTransform:'none', letterSpacing:0 }}>{persona.meta}</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:13.5, lineHeight:1.55, color:'var(--ink-2)' }}>
        <div><strong style={{ fontWeight:600 }}>{persona.story}</strong> {persona.body}</div>
        <div><span style={{ fontWeight:600 }}>Objectif :</span> {persona.objective}</div>
        <div><span style={{ fontWeight:600 }}>Habitudes :</span> {persona.habits}</div>
        <div><span style={{ fontWeight:600 }}>Comportement :</span> {persona.behavior}</div>
      </div>
    </div>
  );
}

Object.assign(window, { HairlyCase });
