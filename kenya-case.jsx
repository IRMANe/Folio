/* Kenya Airways — full case study page.
   Same visual language as the Playmobil / Hairly case studies:
   Bricolage Grotesque display, Albert Sans body, JetBrains Mono micro-labels,
   cream paper + green accent. All imagery is uploadable from the Console
   (locked <image-slot> elements keyed by id). */

function KenyaCase({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const t = I18N[lang];
  useContentVersion();

  let L = lang === 'fr' ? {
    back: '← Retour aux projets',
    subtitle: "Réaligner une app avec l'âme d'une marque",
    tags: ['Product design', 'UX research', 'Strategy', 'Mobile', 'Recommandation'],
    meta: [['Année', '2026'], ['Durée', '2 semaines'], ['Équipe', '1 personne']],

    roleTitle: 'Mon rôle',
    roles: ['Recherche utilisateur', 'Audit UX applicatif', 'Analyse stratégique & concurrentielle', 'Recommandations UX'],

    introTitle: 'Introduction',
    introBody: [
      "Kenya Airways est la compagnie aérienne nationale du Kenya, fondée en 1977. Basée à Nairobi, elle opère depuis l'aéroport international Jomo Kenyatta, hub stratégique de son réseau. Elle assure des liaisons domestiques, régionales et internationales, reliant l'Afrique à l'Europe, au Moyen-Orient et à l'Asie.",
      "Au fil des années, elle s'est imposée comme un acteur majeur de la connectivité aérienne en Afrique de l'Est, facilitant les échanges économiques, touristiques et institutionnels entre le continent et le reste du monde.",
    ],
    introStats: [
      ['188,5 Mds KSh', "Chiffre d'affaires (~1,17 Md €)"],
      ['1977', 'Année de fondation'],
      ['Nairobi', 'Hub · aéroport Jomo Kenyatta'],
    ],

    posTitle: 'Positionnement stratégique',
    posBody: "Au-delà de son rôle opérationnel, Kenya Airways construit son positionnement autour de valeurs fortes qui structurent son identité de marque et son expérience client.",
    posValues: [
      ['Sécurité', "Pilier fondamental du transport aérien."],
      ['Excellence de service', "Améliorer l'expérience globale des passagers."],
      ['Fiabilité opérationnelle', "Tenir ses engagements à chaque étape du voyage."],
      ['Hospitalité africaine', "Qualité d'accueil, chaleur humaine et attention portée aux voyageurs, la valeur différenciante."],
    ],
    posInsight: "Le déploiement de solutions conversationnelles automatisées constitue un levier d'optimisation majeur : selon LivePerson (2023), chatbots et assistants virtuels traitent jusqu'à 59 % des demandes clients sans intervention humaine, réduisant la pression sur les centres de contact.",

    mapTitle: 'Cartographie concurrentielle',
    mapBody: "Positionnée sur deux axes (réseau & couverture, digital & expérience), Kenya Airways occupe une position intermédiaire sur le marché africain.",
    mapPlayers: [
      ['Ethiopian Airlines', 'Leader continental', 'lead'],
      ['Kenya Airways', 'Position intermédiaire : réseau solide, expérience digitale moins avancée', 'self'],
      ['RwandAir', 'Premium émergent', 'mid'],
      ['South African Airways', 'Acteur fragilisé', 'low'],
    ],
    mapDiffTitle: 'Éléments différenciateurs',
    mapDiff: [
      "Hub stratégique à Nairobi, en concurrence directe avec Addis-Abeba (Ethiopian Airlines).",
      "Connectivité régionale dense, orientée Afrique de l'Est et centrale.",
      "Identité de service fondée sur l'hospitalité africaine.",
    ],
    mapSlotLabel: 'Cartographie de positionnement',

    digTitle: 'Stratégie digitale actuelle',
    digBody: "Une présence active et diversifiée sur les canaux digitaux, mais une application mobile encore peu adoptée au regard du volume de passagers.",
    digSocial: [['TikTok', '+100k'], ['Facebook', '+636k'], ['Instagram', '+144k'], ['X', '+904k']],
    digPoints: [
      "Compte de support client dédié sur X pour le traitement des demandes en ligne.",
      "Application mobile (achat de billets, gestion des voyages) : +100 000 téléchargements sur Google Play, adoption modérée.",
      "Emailing pour les informations de voyage, confirmations de réservation et offres promotionnelles.",
    ],

    swotTitle: 'SWOT',
    swot: {
      strengths: { label: 'Forces', tone: 'pos', items: ['Forte notoriété régionale', 'Hub stratégique à Nairobi', 'Reprise du trafic post-crise', "Image d'hospitalité africaine", 'Acteur clé du tourisme kényan', 'Présence sur les réseaux sociaux'] },
      weaknesses: { label: 'Faiblesses', tone: 'neg', items: ['Service client peu performant', 'Assistance lente ou difficile à joindre', 'Expérience digitale peu fluide', 'Application mobile limitée', 'Retard de digitalisation (UI, webview)', "Coûts d'exploitation élevés"] },
      opportunities: { label: 'Opportunités', tone: 'pos', items: ['Intégration IA & chatbots, notifications', "Automatisation de l'assistance", 'Refonte ergonomique des interfaces', 'Parcours personnalisés', 'Positionnement digital modernisé'] },
      threats: { label: 'Menaces', tone: 'neg', items: ['Concurrence africaine plus digitalisée', 'Attentes clients en hausse', 'Hausse des coûts carburant', 'Instabilité économique', "Dégradation de l'image de marque", 'Baisse de fidélité · écart promesse/expérience'] },
    },
    problemTitle: 'Problématique',
    problemBody: "Comment Kenya Airways peut-elle améliorer l'assistance et l'accompagnement des voyageurs en situation d'imprévu, alors que l'expérience digitale actuelle est jugée peu fluide et peu réactive ?",

    auditTitle: "Audit de l'application",
    auditIntro: "L'application a été auditée sur trois dimensions clés de l'expérience voyageur.",
    auditDims: [
      { name: 'Dimension informationnelle', objective: 'Fournir des informations fiables et en temps réel.', ux: "Informations globalement fiables, claires et structurées en situation normale ; mais des limites pour rendre l'information actionnable et accompagner l'utilisateur dans l'incertitude.", features: 'Barre de recherche · géolocalisation · suggestions · affichage des détails' },
      { name: 'Dimension décisionnelle', objective: "Aider l'utilisateur à choisir rapidement et sereinement.", ux: "Des options existent, mais l'absence de hiérarchisation claire et de suggestions proactives limite une décision rapide et rassurante.", features: 'Barre de recherche · géolocalisation · suggestions · filtres · CTA' },
      { name: "Dimension d'assistance", objective: "Accompagner lors d'une difficulté, d'une incertitude ou d'un imprévu.", ux: "Pas de support en temps réel ni d'assistance proactive ; l'accès au support est peu visible et le parcours existant peu optimal.", features: 'Feedback · gérer son vol · check-in en ligne' },
    ],
    auditScreensLabel: "Écrans de l'application actuelle",

    researchTitle: 'Étude utilisateur',
    researchBody: "Une enquête quantitative et qualitative bilingue (FR/EN) a été menée pour recueillir les usages, attentes et difficultés des passagers, notamment en situation d'imprévu. Diffusée à l'international via des canaux digitaux, elle a permis d'identifier des tendances globales et des points de friction.",
    researchMeta: [['Google Forms', 'Outil'], ['FR / EN', 'Deux versions'], ['Voyageurs KQ', 'Population ciblée']],
    keyFiguresTitle: "Ce que révèle l'étude",
    keyFigures: [
      { value: '83 %', label: "des voyageurs gèrent un imprévu via un canal humain (call center ou aéroport)", source: 'Enquête' },
      { value: '67 %', label: "des imprévus rencontrés concernent les bagages (retard ou perte)", source: 'Enquête' },
      { value: '12 %', label: "seulement utilisent l'application mobile pour voyager", source: 'Enquête' },
      { value: '59 %', label: "des demandes clients traitables sans humain via un assistant conversationnel", source: 'LivePerson, 2023' },
    ],
    researchFindings: [
      "Voyages majoritairement touristiques et familiaux, à faible fréquence (1-2 fois/an).",
      "Application quasiment pas utilisée : réservation surtout via agence et site web.",
      "Imprévus fréquents : retards et pertes de bagages, retards et annulations de vol.",
      "Gestion des imprévus dépendante des canaux humains (call center, personnel à l'aéroport), vite saturés.",
    ],
    researchInsight: "L'étude révèle un désalignement marqué entre les attentes d'assistance des voyageurs et les capacités actuelles des dispositifs digitaux. L'application n'apparaît pas comme un outil de résolution des situations critiques, renforçant la dépendance aux canaux humains.",

    personaTitle: 'Personas',
    personas: [
      {
        name: 'Nancy', meta: '33 ans · Toulouse · En couple, secteur tertiaire', slot: 'kn-persona-0',
        tags: ['Tourisme', '1 fois ou moins / an'],
        quote: "Quand il y a un problème, je veux juste savoir quoi faire et à qui parler rapidement.",
        objective: ['Voyager sereinement', 'Comprendre facilement les étapes du voyage', 'Être rassurée en cas de problème'],
        behavior: ['Voyageuse occasionnelle, peu familière des procédures', 'Privilégie le contact humain', "Ne pense pas à utiliser l'app en situation critique"],
        needs: ['Information claire et contextualisée', 'Accompagnement pas à pas', 'Réassurance émotionnelle', "Accès simple à l'assistance en cas d'imprévu"],
        frustration: ["Ne sait pas vers qui se tourner en cas d'imprévu", 'Informations peu claires ou difficiles à trouver', "Temps d'attente élevé au service client / à l'aéroport", "N'utilise pas l'app, perçue comme peu fiable"],
      },
      {
        name: 'Daniel', meta: "43 ans · Londres · Parent, vit à l'étranger", slot: 'kn-persona-1',
        tags: ['Visites familiales', '1 à 2 fois / an'],
        quote: "En cas d'annulation, je dois réussir à joindre le centre d'appel pour comprendre ce qui se passe.",
        objective: ['Arriver à destination sans complications', 'Gérer efficacement les correspondances', "Ne pas perdre de temps lors d'un imprévu"],
        behavior: ['Se rend directement au comptoir', 'Appelle le service client si nécessaire', "N'utilise pas l'app pour gérer les imprévus"],
        needs: ["Centralisation de l'information", 'Visibilité en temps réel', "Solutions digitales en complément de l'humain", "Réduction de l'incertitude"],
        frustration: ['Annulations et reprogrammations mal expliquées', "Difficulté à anticiper les changements", 'Dépendance totale au personnel sur place', 'Aucun outil digital pour suivre ou résoudre la situation'],
      },
    ],
    objLabel: 'Objectifs', behLabel: 'Comportement', needLabel: 'Besoins', frusLabel: 'Frustrations',

    journeyTitle: 'User journey',
    journeyBody: "Trois parcours en situation d'imprévu ont été cartographiés pour révéler les points de rupture et les opportunités d'amélioration.",
    journeys: [
      { name: 'Retard de vol', desc: "Info limitée à l'écran, push peu clair, l'utilisateur ne sait pas comment faire.", opp: 'Info en temps réel + assistance (chatbot)', slot: 'kn-journey-0' },
      { name: 'Annulation', desc: 'Notification tardive, pas de rebooking, dépendance au call center et au comptoir.', opp: 'Rebooking autonome + alertes contextualisées', slot: 'kn-journey-1' },
      { name: 'Problème de bagages', desc: "Attente longue, bagages absents, pas d'info, formulaire long.", opp: "Tracking temps réel + signalement guidé dans l'app", slot: 'kn-journey-2' },
    ],

    recoTitle: 'Recommandations UX',
    recoIntro: "Les situations d'imprévu constituent le principal point de rupture de l'expérience passager. Les recommandations se concentrent donc prioritairement sur l'assistance digitale et l'accompagnement en temps réel.",
    recos: [
      { name: "Centre d'assistance digital unifié", objective: "Centraliser toute l'aide au même endroit.", features: ['Chat en direct', 'FAQ dynamique', 'Suivi des demandes', 'Contact priorisé'], benefits: "Accès rapide à l'aide · réduction du stress · assistance 24/7", mock:'images/kenya/screen-help.webp', caption:"Répond au painpoint « ne sait pas vers qui se tourner en cas d'imprévu » : assistance rapide, FAQ et contact agent réunis sur un seul écran." },
      { name: 'Notifications & alertes temps réel', objective: 'Informer immédiatement les passagers.', features: ['Retard / annulation push', "Porte d'embarquement", 'Reprogrammation auto', 'Messages contextualisés'], benefits: "Réassurance · anticipation · réduction de l'incertitude", mock:'images/kenya/screen-notifications.webp', caption:"Répond au painpoint « notification tardive et peu claire » : une alerte push instantanée et explicite dès l'annulation du vol." },
      { name: 'Rebooking autonome', objective: 'Permettre aux passagers de modifier seuls.', features: ['Changement de vol', 'Propositions alternatives', 'Gestion des correspondances', 'Upgrade possible'], benefits: 'Gain de temps · autonomie · moins de dépendance au support', mock:'images/kenya/screen-rebooking.webp', caption:"Répond au painpoint « pas de rebooking, dépendance au call center » : le passager sélectionne seul un vol alternatif, sans supplément." },
      { name: 'Suivi bagages & incidents', objective: 'Rassurer après le vol.', features: ['Tracking bagages', 'Déclaration de perte', 'Suivi indemnisation', 'Notifications de statut'], benefits: 'Visibilité · réassurance · résolution facilitée', mock:'images/kenya/screen-confirmation.webp', caption:"Répond au painpoint « bagages absents, aucune info » : réattribution des bagages et nouvelle carte d'embarquement confirmées dans l'app." },
      { name: "Refonte ergonomique de l'app", objective: "Moderniser l'expérience globale.", features: ['Navigation simplifiée', 'Design system cohérent', 'Temps de chargement optimisé', 'Accessibilité mobile'], benefits: 'Fluidité · cohérence · inclusivité', mock:'images/kenya/screen-alerte.webp', caption:"Répond au painpoint « informations peu claires, app peu fiable » : écran de vol retardé clarifié, statut en temps réel et actions immédiates." },
    ],
    recoAlign: "Hospitalité africaine = accompagnement + réassurance",
    recoMockupLabel: 'Mockups des solutions recommandées',
    flowTitle: 'Parcours utilisateur amélioré',
    flowIntro: "Bout à bout, voici comment l'application accompagne un passager en situation d'imprévu — de l'alerte à la confirmation, sans rupture. Cliquez sur un écran pour l'agrandir.",
    flow: [
      { img:'images/kenya/screen-alerte.webp', step:'01', title:'Alerte & options', caption:"Statut du vol en temps réel et actions immédiates — fini l'info limitée à l'écran." },
      { img:'images/kenya/screen-rebooking.webp', step:'02', title:'Rebooking autonome', caption:'Le passager choisit seul son vol de remplacement, sans passer par le comptoir.' },
      { img:'images/kenya/screen-assistance.webp', step:'03', title:'Assistance en direct', caption:"Un agent répond dans l'app, 24/7 — plus d'attente au call center." },
      { img:'images/kenya/screen-confirmation.webp', step:'04', title:'Confirmation', caption:"Bagages réattribués et nouvelle carte d'embarquement : l'incertitude levée." },
    ],
    impactTitle: 'Impact attendu',
    impactUX: { label: 'UX', items: ['Satisfaction client', 'Net Promoter Score (NPS)', "Taux d'usage de l'app", 'Taux de résolution digitale'] },
    impactBiz: { label: 'Business', items: ['Réduction des appels au service client', 'Diminution des coûts de support', 'Augmentation de la fidélité', "Amélioration de l'image de marque"] },
    deployTitle: 'Déploiement multicanal',
    deploy: ['Application mobile', 'Site responsive', 'Support humain'],

    conclusionTitle: 'Conclusion',
    conclusionBody: "Kenya Airways dispose d'atouts structurels solides : notoriété régionale, hub de Nairobi, image d'hospitalité africaine. Mais l'étude UX révèle un décalage entre cette promesse de marque et l'expérience vécue, surtout en situation d'imprévu, où les dispositifs d'assistance montrent leurs limites. Le renforcement de l'assistance en temps réel, de l'autonomie passager et de l'expérience multicanale apparaît comme un levier stratégique prioritaire, au service de la satisfaction client et de la performance opérationnelle.",

    moreLabel: 'Vous souhaitez en savoir plus ?',
    contactCTA: 'Contactez-moi',
    otherTitle: 'Mes projets',
  } : {
    back: '← Back to projects',
    subtitle: "Realigning an app with a brand's soul",
    tags: ['Product design', 'UX research', 'Strategy', 'Mobile', 'Recommendation'],
    meta: [['Year', '2026'], ['Duration', '2 weeks'], ['Team', '1 person']],

    roleTitle: 'My role',
    roles: ['User research', 'App UX audit', 'Strategic & competitive analysis', 'UX recommendations'],

    introTitle: 'Introduction',
    introBody: [
      "Kenya Airways is the national airline of Kenya, founded in 1977. Based in Nairobi, it operates from Jomo Kenyatta International Airport, the strategic hub of its network, serving domestic, regional and international routes that link Africa to Europe, the Middle East and Asia.",
      "Over the years it has become a major player in East-African air connectivity, enabling economic, tourism and institutional exchanges between the continent and the rest of the world.",
    ],
    introStats: [
      ['KSh 188.5B', 'Revenue (~€1.17B)'],
      ['1977', 'Year founded'],
      ['Nairobi', 'Hub · Jomo Kenyatta airport'],
    ],

    posTitle: 'Strategic positioning',
    posBody: "Beyond its operational role, Kenya Airways builds its positioning around strong values that shape its brand identity and customer experience.",
    posValues: [
      ['Safety', 'A fundamental pillar of air travel.'],
      ['Service excellence', 'Improving the overall passenger experience.'],
      ['Operational reliability', 'Delivering on its promise at every step.'],
      ['African hospitality', 'Warmth, care and attention to travellers, the differentiating value.'],
    ],
    posInsight: "Automated conversational solutions are a major optimisation lever: per LivePerson (2023), chatbots and virtual assistants handle up to 59% of customer requests without human intervention, easing pressure on contact centres.",

    mapTitle: 'Competitive mapping',
    mapBody: "Positioned on two axes (network & coverage, digital & experience), Kenya Airways sits in an intermediate position in the African market.",
    mapPlayers: [
      ['Ethiopian Airlines', 'Continental leader', 'lead'],
      ['Kenya Airways', 'Intermediate position: solid network, less advanced digital experience', 'self'],
      ['RwandAir', 'Emerging premium', 'mid'],
      ['South African Airways', 'Weakened player', 'low'],
    ],
    mapDiffTitle: 'Differentiators',
    mapDiff: [
      "Strategic Nairobi hub, in direct competition with Addis Ababa (Ethiopian Airlines).",
      "Dense regional connectivity across East and Central Africa.",
      "A service identity rooted in African hospitality.",
    ],
    mapSlotLabel: 'Positioning map',

    digTitle: 'Current digital strategy',
    digBody: "An active, diversified presence across digital channels, but a mobile app still under-adopted relative to passenger volume.",
    digSocial: [['TikTok', '+100k'], ['Facebook', '+636k'], ['Instagram', '+144k'], ['X', '+904k']],
    digPoints: [
      "Dedicated customer-support account on X for handling requests online.",
      "Mobile app (ticket purchase, trip management): 100k+ downloads on Google Play, moderate adoption.",
      "Email used for travel info, booking confirmations and promotional offers.",
    ],

    swotTitle: 'SWOT',
    swot: {
      strengths: { label: 'Strengths', tone: 'pos', items: ['Strong regional reputation', 'Strategic Nairobi hub', 'Post-crisis traffic recovery', 'African-hospitality image', 'Key player in Kenyan tourism', 'Active on social media'] },
      weaknesses: { label: 'Weaknesses', tone: 'neg', items: ['Underperforming customer service', 'Slow or hard-to-reach support', 'Clunky digital experience', 'Limited mobile app', 'Digital lag (UI, webview)', 'High operating costs'] },
      opportunities: { label: 'Opportunities', tone: 'pos', items: ['AI & chatbots, notifications', 'Support automation', 'Interface ergonomic redesign', 'Personalised journeys', 'Modernised digital positioning'] },
      threats: { label: 'Threats', tone: 'neg', items: ['More digitalised African competitors', 'Rising customer expectations', 'Higher fuel costs', 'Economic instability', 'Brand-image erosion', 'Loyalty drop · promise/experience gap'] },
    },
    problemTitle: 'Problem statement',
    problemBody: "How can Kenya Airways improve assistance and support for travellers during disruption, when the current digital experience is seen as clunky and unresponsive?",

    auditTitle: 'App audit',
    auditIntro: 'The app was audited across three key dimensions of the traveller experience.',
    auditDims: [
      { name: 'Information dimension', objective: 'Provide reliable, real-time information.', ux: "Information is broadly reliable, clear and structured in normal conditions, but falls short on making it actionable and supporting users through uncertainty.", features: 'Search bar · geolocation · suggestions · detail display' },
      { name: 'Decision dimension', objective: 'Help the user choose quickly and confidently.', ux: "Options exist, but the lack of clear hierarchy and proactive suggestions limits fast, reassuring decisions.", features: 'Search bar · geolocation · suggestions · filters · CTA' },
      { name: 'Assistance dimension', objective: 'Support the user through difficulty, uncertainty or disruption.', ux: "No real-time support or proactive assistance; access to support is low-visibility and the existing path is sub-optimal.", features: 'Feedback · manage flight · online check-in' },
    ],
    auditScreensLabel: 'Current app screens',

    researchTitle: 'User research',
    researchBody: "A bilingual (FR/EN) quantitative and qualitative survey was run to capture passengers' usage, expectations and difficulties, especially during disruption. Distributed internationally through digital channels, it surfaced global trends and friction points.",
    researchMeta: [['Google Forms', 'Tool'], ['FR / EN', 'Two versions'], ['KQ travellers', 'Target population']],
    keyFiguresTitle: 'What the study reveals',
    keyFigures: [
      { value: '83%', label: 'of travellers handle disruption through a human channel (call centre or airport)', source: 'Survey' },
      { value: '67%', label: 'of the disruptions experienced are baggage-related (delay or loss)', source: 'Survey' },
      { value: '12%', label: 'only use the mobile app to travel', source: 'Survey' },
      { value: '59%', label: 'of customer requests are resolvable without a human via a chatbot', source: 'LivePerson, 2023' },
    ],
    researchFindings: [
      'Mostly tourism and family travel, at low frequency (1-2 times/year).',
      'App barely used: booking mostly via agency and website.',
      'Frequent disruptions: baggage delays/loss, flight delays and cancellations.',
      'Disruption handling relies on human channels (call centre, airport staff), which quickly overload.',
    ],
    researchInsight: "The study reveals a marked misalignment between travellers' assistance expectations and the current capabilities of the digital tools. The app does not appear as a tool for resolving critical situations, reinforcing dependence on human channels.",

    personaTitle: 'Personas',
    personas: [
      {
        name: 'Nancy', meta: '33 · Toulouse · In a couple, services sector', slot: 'kn-persona-0',
        tags: ['Tourism', 'Once a year or less'],
        quote: "When something goes wrong, I just want to know what to do and who to talk to, fast.",
        objective: ['Travel with peace of mind', 'Easily understand the trip steps', 'Feel reassured when a problem occurs'],
        behavior: ['Occasional traveller, unfamiliar with procedures', 'Prefers human contact', "Doesn't think to use the app in critical moments"],
        needs: ['Clear, contextual information', 'Step-by-step guidance', 'Emotional reassurance', 'Simple access to help during disruption'],
        frustration: ["Doesn't know who to turn to during disruption", 'Unclear or hard-to-find information', 'Long wait times with support / at the airport', 'Avoids the app, seen as unreliable'],
      },
      {
        name: 'Daniel', meta: '43 · London · Parent, lives abroad', slot: 'kn-persona-1',
        tags: ['Family visits', '1-2 times / year'],
        quote: "When a flight is cancelled, I need to reach the call centre to understand what's happening.",
        objective: ['Reach the destination without complications', 'Manage connections efficiently', 'Not lose time during disruption'],
        behavior: ['Goes straight to the counter', 'Calls support when needed', "Doesn't use the app to manage disruption"],
        needs: ['Centralised information', 'Real-time visibility', 'Digital solutions alongside human support', 'Reduced uncertainty'],
        frustration: ['Poorly explained cancellations and rebookings', 'Hard to anticipate changes', 'Total dependence on on-site staff', 'No digital tool to track or resolve the situation'],
      },
    ],
    objLabel: 'Goals', behLabel: 'Behaviour', needLabel: 'Needs', frusLabel: 'Frustrations',

    journeyTitle: 'User journey',
    journeyBody: 'Three disruption journeys were mapped to surface the breaking points and improvement opportunities.',
    journeys: [
      { name: 'Flight delay', desc: 'Limited on-screen info, unclear push, the user is unsure what to do.', opp: 'Real-time info + assistance (chatbot)', slot: 'kn-journey-0' },
      { name: 'Cancellation', desc: 'Late notification, no rebooking, dependence on call centre and counter.', opp: 'Self-service rebooking + contextual alerts', slot: 'kn-journey-1' },
      { name: 'Baggage issue', desc: 'Long wait, missing bags, no info, lengthy form.', opp: 'Real-time tracking + guided reporting in the app', slot: 'kn-journey-2' },
    ],

    recoTitle: 'UX recommendations',
    recoIntro: "Disruption is the main breaking point of the passenger experience. Recommendations therefore focus first on digital assistance and real-time support.",
    recos: [
      { name: 'Unified digital help centre', objective: 'Centralise all help in one place.', features: ['Live chat', 'Dynamic FAQ', 'Request tracking', 'Prioritised contact'], benefits: 'Fast access to help · less stress · 24/7 assistance', mock:'images/kenya/screen-help.webp', caption:"Addresses the painpoint “doesn't know who to turn to during disruption”: quick help, FAQ and agent contact on a single screen." },
      { name: 'Real-time notifications & alerts', objective: 'Inform passengers immediately.', features: ['Delay / cancellation push', 'Boarding gate', 'Auto rebooking', 'Contextual messages'], benefits: 'Reassurance · anticipation · less uncertainty', mock:'images/kenya/screen-notifications.webp', caption:'Addresses the painpoint “late, unclear notification”: an instant, explicit push alert the moment the flight is cancelled.' },
      { name: 'Self-service rebooking', objective: 'Let passengers make changes on their own.', features: ['Flight change', 'Alternative options', 'Connection management', 'Possible upgrade'], benefits: 'Time saved · autonomy · less support dependence', mock:'images/kenya/screen-rebooking.webp', caption:'Addresses the painpoint “no rebooking, dependence on the call centre”: travellers pick an alternative flight themselves, at no extra cost.' },
      { name: 'Baggage & incident tracking', objective: 'Reassure after the flight.', features: ['Baggage tracking', 'Loss reporting', 'Compensation tracking', 'Status notifications'], benefits: 'Visibility · reassurance · easier resolution', mock:'images/kenya/screen-confirmation.webp', caption:'Addresses the painpoint “missing bags, no information”: baggage reassignment and a new boarding pass confirmed in the app.' },
      { name: 'App ergonomic redesign', objective: 'Modernise the overall experience.', features: ['Simplified navigation', 'Coherent design system', 'Optimised load time', 'Mobile accessibility'], benefits: 'Fluidity · consistency · inclusivity', mock:'images/kenya/screen-alerte.webp', caption:'Addresses the painpoint “unclear info, unreliable app”: a clarified delayed-flight screen with real-time status and immediate actions.' },
    ],
    recoAlign: 'African hospitality = support + reassurance',
    recoMockupLabel: 'Recommended-solution mockups',
    flowTitle: 'Improved user journey',
    flowIntro: "End to end, here's how the app supports a passenger through disruption — from alert to confirmation, with no breakpoint. Click a screen to enlarge it.",
    flow: [
      { img:'images/kenya/screen-alerte.webp', step:'01', title:'Alert & options', caption:'Real-time flight status and immediate actions — no more information stuck on one screen.' },
      { img:'images/kenya/screen-rebooking.webp', step:'02', title:'Self-service rebooking', caption:'Travellers pick their replacement flight themselves, without queuing at the counter.' },
      { img:'images/kenya/screen-assistance.webp', step:'03', title:'Live assistance', caption:'An agent replies in the app, 24/7 — no more call-centre waits.' },
      { img:'images/kenya/screen-confirmation.webp', step:'04', title:'Confirmation', caption:'Baggage reassigned and a new boarding pass: uncertainty resolved.' },
    ],
    impactTitle: 'Expected impact',
    impactUX: { label: 'UX', items: ['Customer satisfaction', 'Net Promoter Score (NPS)', 'App usage rate', 'Digital resolution rate'] },
    impactBiz: { label: 'Business', items: ['Fewer customer-service calls', 'Lower support costs', 'Higher loyalty', 'Improved brand image'] },
    deployTitle: 'Multichannel rollout',
    deploy: ['Mobile app', 'Responsive site', 'Human support'],

    conclusionTitle: 'Conclusion',
    conclusionBody: "Kenya Airways has solid structural assets: regional reputation, the Nairobi hub, an African-hospitality image. But the UX study reveals a gap between this brand promise and the lived experience, especially during disruption, where assistance tools show their limits. Strengthening real-time assistance, passenger autonomy and the multichannel experience emerges as a priority strategic lever, serving both customer satisfaction and operational performance.",

    moreLabel: 'Want to know more?',
    contactCTA: 'Get in touch',
    otherTitle: 'Other projects',
  };
  L = applyContentOverrides('kenya', lang, L);

  const otherProjects = t.projects.filter(p => p.id !== 'kenya');

  return (
    <div className="kn-root" data-theme={theme} style={{
      width: '100%', minHeight: '100vh',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Albert Sans","Manrope",system-ui,sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition: 'background .3s,color .3s', position: 'relative'
    }}>
      <style>{`
        .kn-root { font-feature-settings: "ss01","cv11"; }
        .kn-display { font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 500; font-variation-settings: "wdth" 100, "opsz" 96; letter-spacing: -0.035em; line-height: 0.9; }
        .kn-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.4px; text-transform: uppercase; color: var(--ink-muted); font-weight: 500; }
        .kn-pill { display:inline-flex; align-items:center; height:28px; padding:0 12px; border-radius:999px; background:var(--accent-soft); color:var(--accent-soft-ink); font-size:12px; font-weight:500; letter-spacing:.2px; }
        .kn-link { transition: color .2s; }
        .kn-link:hover { color: var(--accent); }
        .kn-card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px; }
        .kn-figures { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-bottom:44px; }
        .kn-figure { border-top:2px solid var(--accent); padding-top:14px; }
        .kn-figure-num { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size:clamp(38px,4vw,50px); line-height:1; letter-spacing:-.03em; color:var(--accent); }
        .kn-figure-label { font-family:'Albert Sans', sans-serif; font-size:13.5px; line-height:1.45; color:var(--ink-2); margin-top:11px; text-wrap:pretty; }
        .kn-figure-src { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.6px; text-transform:uppercase; color:var(--ink-faint); margin-top:9px; }
        @media (max-width:760px){ .kn-figures{ grid-template-columns:repeat(2,1fr); gap:20px 16px; } }
        .kn-body { font-family:'Albert Sans', sans-serif; font-size:16px; line-height:1.65; color:var(--ink-2); text-wrap: pretty; }
        image-slot[data-filled] { cursor: zoom-in; }
        image-slot[id^="cover-"][data-filled] { cursor: default; }
        #kn-mapping::part(frame),
        [id^="kn-journey-"]::part(frame) { background: transparent; }
        a image-slot[data-filled] { cursor: pointer; }
        .kn-section-head { display:flex; align-items:baseline; gap:18px; margin-bottom: 22px; }
        .kn-section-num { font-family:'JetBrains Mono', monospace; font-size:12px; color: var(--ink-muted); letter-spacing:.4px; }
        .kn-h2 { font-family:'Bricolage Grotesque', sans-serif; font-weight:500; font-size:36px; letter-spacing:-.025em; line-height:1; }
        .kn-bullet { display:flex; gap:12px; align-items:flex-start; padding:7px 0; }
        .kn-bullet::before { content:''; width:6px; height:6px; border-radius:999px; background: var(--accent); margin-top: 9px; flex-shrink:0; }
        .kn-cta { display:inline-flex; align-items:center; gap:10px; height:54px; padding:0 26px; border-radius:8px; background: var(--accent); color:#fff; font-size:14.5px; font-weight:500; white-space:nowrap; transition: all .2s; }
        .kn-cta:hover { transform: translateY(-1px); }
        .kn-phone { position:relative; background:#EFE7DA; border-radius:24px; padding:24px 16px; aspect-ratio:0.55/1; overflow:hidden; }

        /* — Embedded mockups — */
        .kn-shot { border:1px solid var(--line); border-radius:18px; overflow:hidden; background:#fff; box-shadow:0 16px 38px rgba(15,42,27,.13); cursor:zoom-in; line-height:0; transition: transform .25s ease, box-shadow .25s ease; }
        .kn-shot:hover { transform: translateY(-3px); box-shadow:0 22px 52px rgba(15,42,27,.18); }
        .kn-shot img { display:block; }
        .kn-shot-banner { border-radius:14px; align-self:flex-start; }
        .kn-shot-banner img { width:300px; height:auto; }
        .kn-shot-cap { font-family:'Albert Sans',sans-serif; font-size:12.5px; line-height:1.45; color:var(--ink-muted); text-wrap:pretty; margin:0; max-width:300px; }
        .kn-reco-row { display:flex; gap:28px; align-items:center; }
        .kn-reco-media { flex:0 0 280px; min-width:0; display:flex; flex-direction:column; gap:12px; }
        .kn-reco-media .kn-shot { background:transparent; border:none; box-shadow:none; cursor:zoom-in; }
        .kn-reco-media .kn-shot:hover { box-shadow:none; }
        .kn-flow { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; align-items:start; }
        .kn-flow-item { display:flex; flex-direction:column; }
        .kn-flow .kn-shot { width:100%; }
        .kn-flow .kn-shot img { width:100%; height:520px; object-fit:cover; object-position:top center; }
        @media (max-width: 960px) {
          .kn-reco-row { flex-direction:column !important; align-items:stretch; gap:24px; }
          .kn-reco-media { align-items:flex-start; max-width:300px; }
          .kn-flow { grid-template-columns:repeat(2,1fr); }
        }
        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .kn-root > header > div, .kn-root > main, .kn-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
          .kn-root [style*="grid-template-columns: repeat(4"] { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media (max-width: 680px) {
          .kn-root > header > div { padding:14px 20px !important; }
          .kn-root > main { padding:28px 20px 64px !important; }
          .kn-root > footer > div { padding:18px 20px !important; }
          .kn-root > header nav { gap:14px !important; font-size:12px !important; }
          .kn-root main [style*="grid-template-columns"] { grid-template-columns:1fr !important; }
          .kn-root [style*="max-width:62%"], .kn-root [style*="max-width: 62%"],
          .kn-root [style*="max-width:60%"], .kn-root [style*="max-width: 60%"],
          .kn-root [style*="max-width:70%"], .kn-root [style*="max-width: 70%"],
          .kn-root [style*="max-width:72%"], .kn-root [style*="max-width: 72%"] { max-width:100% !important; }
          .kn-reco-media { flex-basis:auto !important; max-width:240px !important; margin-inline:auto; }
          .kn-flow .kn-shot img { height:420px; }
        }
        @media (max-width: 400px) {
          .kn-root > header .kn-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ borderBottom: '1px solid var(--line)', position: 'sticky', top: 0, zIndex: 10, background: 'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter: 'blur(8px)' }}>
        <div style={{ padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="./" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 21, letterSpacing: -0.6 }}>I<span style={{ color: 'var(--accent)' }}>.</span>UX</a>
            <span className="kn-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="kn-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork },
              { href: 'apropos/', label: t.navAbout },
              { href: 'contact/', label: t.navContact },
            ]} />
        </div>
      </header>

      <main style={{ padding: '40px 48px 80px' }}>

        {/* Back */}
        <a href="projets/" className="kn-link kn-mono" style={{ display:'inline-flex', alignItems:'center', gap:6, marginBottom: 28 }}>{L.back}</a>

        {/* Title */}
        <h1 className="kn-display" style={{ fontSize: 'clamp(44px, 10vw, 88px)' }}>
          Kenya Airways<span style={{ color: 'var(--accent)' }}>.</span>
        </h1>
        <div className="kn-body" style={{ fontSize:18, color:'var(--ink-muted)', marginTop:12, maxWidth: '60%' }}>{L.subtitle}</div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop: 18, marginBottom: 32 }}>
          {L.tags.map(tag => <span key={tag} className="kn-pill">{tag}</span>)}
        </div>

        {/* HERO */}
        <KenyaHeroCard />

        {/* Meta strip */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, padding:'28px 0 36px', borderBottom:'1px solid var(--line)', marginBottom:48 }}>
          {L.meta.map(([k,v]) => (
            <div key={k}>
              <div className="kn-mono">{k}</div>
              <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:500, marginTop:6, letterSpacing:-.5 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* 01 · Mon rôle */}
        <Section num="01" title={L.roleTitle}>
          <ul style={{ listStyle:'none' }}>
            {L.roles.map(r => <li key={r} className="kn-bullet"><span className="kn-body" style={{ fontSize:17 }}>{r}</span></li>)}
          </ul>
        </Section>

        {/* 02 · Introduction */}
        <Section num="02" title={L.introTitle}>
          <div style={{ display:'flex', flexDirection:'column', gap:16, maxWidth:'62%', marginBottom:28 }}>
            {L.introBody.map((p,i) => <p key={i} className="kn-body">{p}</p>)}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:18 }}>
            {L.introStats.map(([n,l]) => (
              <div key={l} className="kn-card" style={{ padding:'22px 24px' }}>
                <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:20, fontWeight:600, letterSpacing:-1, lineHeight:1, color:'var(--accent-soft-ink)' }}>{n}</div>
                <div className="kn-body" style={{ fontSize:13.5, marginTop:8, color:'var(--ink-muted)' }}>{l}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 03 · Positionnement stratégique */}
        <Section num="03" title={L.posTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:24 }}>{L.posBody}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:16, marginBottom:22 }}>
            {L.posValues.map(([title, desc]) => (
              <div key={title} className="kn-card">
                <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:600, letterSpacing:-.3, marginBottom:6 }}>{title}</div>
                <div className="kn-body" style={{ fontSize:14.5 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background:'var(--accent-soft)', color:'var(--accent-soft-ink)', borderRadius:14, padding:'22px 26px', maxWidth:'62%' }}>
            <span className="kn-mono" style={{ color:'var(--accent-soft-ink)' }}>Insight · LivePerson 2023</span>
            <p className="kn-body" style={{ color:'inherit', marginTop:8 }}>{L.posInsight}</p>
          </div>
        </Section>

        {/* 04 · Cartographie concurrentielle */}
        <Section num="04" title={L.mapTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:24 }}>{L.mapBody}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14, marginBottom:22 }}>
            {L.mapPlayers.map(([name, pos, tone]) => {
              const isSelf = tone === 'self';
              return (
                <div key={name} className="kn-card" style={{ padding:'18px 22px', background: isSelf ? 'var(--accent-soft)' : 'var(--card)', borderColor: isSelf ? 'transparent' : 'var(--line)' }}>
                  <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:17, fontWeight:600, letterSpacing:-.3, color: isSelf ? 'var(--accent-soft-ink)' : 'var(--ink)' }}>{name}</div>
                  <div className="kn-body" style={{ fontSize:13.5, marginTop:5, color: isSelf ? 'var(--accent-soft-ink)' : 'var(--ink-muted)' }}>{pos}</div>
                </div>
              );
            })}
          </div>
          <image-slot id="kn-mapping" locked fit="contain" shape="rounded" radius="14" placeholder={L.mapSlotLabel}
            style={{ display:'block', width:'100%', maxWidth:364, height:'auto', aspectRatio:'596 / 589', background:'transparent', marginBottom:24 }}></image-slot>
          <div className="kn-card" style={{ background:'var(--paper-2)', borderColor:'transparent', maxWidth:'62%' }}>
            <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:600, marginBottom:8 }}>{L.mapDiffTitle}</div>
            <ul style={{ listStyle:'none' }}>
              {L.mapDiff.map(d => <li key={d} className="kn-bullet"><span className="kn-body" style={{ fontSize:14.5 }}>{d}</span></li>)}
            </ul>
          </div>
        </Section>

        {/* 05 · Stratégie digitale actuelle */}
        <Section num="05" title={L.digTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:24 }}>{L.digBody}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:24 }}>
            {L.digSocial.map(([net, n]) => (
              <div key={net} className="kn-card" style={{ padding:'18px 20px', textAlign:'left' }}>
                <div className="kn-mono" style={{ color:'var(--accent-soft-ink)' }}>{net}</div>
                <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:30, fontWeight:600, letterSpacing:-1, marginTop:8, lineHeight:1 }}>{n}</div>
              </div>
            ))}
          </div>
          <ul style={{ listStyle:'none', maxWidth:'70%' }}>
            {L.digPoints.map(p => <li key={p} className="kn-bullet"><span className="kn-body" style={{ fontSize:15 }}>{p}</span></li>)}
          </ul>
        </Section>

        {/* 06 · SWOT */}
        <Section num="06" title={L.swotTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14, marginBottom:24 }}>
            <SwotCard letter="S" {...L.swot.strengths} />
            <SwotCard letter="W" {...L.swot.weaknesses} />
            <SwotCard letter="O" {...L.swot.opportunities} />
            <SwotCard letter="T" {...L.swot.threats} />
          </div>
          <div style={{ background:'var(--accent-soft)', color:'var(--accent-soft-ink)', borderRadius:14, padding:'22px 26px', maxWidth:'62%' }}>
            <span className="kn-mono" style={{ color:'var(--accent-soft-ink)' }}>{L.problemTitle}</span>
            <p className="kn-body" style={{ color:'inherit', marginTop:8 }}>{L.problemBody}</p>
          </div>
        </Section>

        {/* 07 · Audit de l'application */}
        <Section num="07" title={L.auditTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:24 }}>{L.auditIntro}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16, marginBottom:28 }}>
            {L.auditDims.map(d => <AuditCard key={d.name} dim={d} L={L} />)}
          </div>
        </Section>

        {/* 08 · Étude utilisateur */}
        <Section num="08" title={L.researchTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:30 }}>{L.researchBody}</p>
          <div className="kn-mono" style={{ marginBottom:18 }}>{L.keyFiguresTitle}</div>
          <div className="kn-figures">
            {L.keyFigures.map((fig) => (
              <div key={fig.label} className="kn-figure">
                <div className="kn-figure-num">{fig.value}</div>
                <div className="kn-figure-label">{fig.label}</div>
                <div className="kn-figure-src">{fig.source}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginBottom:16 }}>
            {L.researchMeta.map(([v, k]) => (
              <div key={k} className="kn-card" style={{ padding:'16px 18px' }}>
                <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:600, letterSpacing:-.3 }}>{v}</div>
                <div className="kn-mono" style={{ marginTop:5, textTransform:'none', letterSpacing:0 }}>{k}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
            {L.researchFindings.map(f => <div key={f} className="kn-card" style={{ padding:'16px 22px' }}><span className="kn-body" style={{ fontSize:15 }}>{f}</span></div>)}
          </div>
          <div className="kn-card" style={{ background:'var(--paper-2)', borderColor:'transparent', maxWidth:'62%' }}>
            <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:600, marginBottom:8 }}>Insight clé</div>
            <p className="kn-body" style={{ fontSize:14.5 }}>{L.researchInsight}</p>
          </div>
        </Section>

        {/* 09 · Personas */}
        <Section num="09" title={L.personaTitle}>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {L.personas.map(p => <PersonaCard key={p.name} persona={p} L={L} />)}
          </div>
        </Section>

        {/* 10 · User journey */}
        <Section num="10" title={L.journeyTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:24 }}>{L.journeyBody}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
            {L.journeys.map((j, i) => (
              <div key={j.name}>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, marginBottom:12 }}>
                  <span className="kn-mono" style={{ color:'var(--accent-soft-ink)' }}>{String(i+1).padStart(2,'0')}</span>
                  <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:22, fontWeight:600, letterSpacing:-.4 }}>{j.name}</div>
                </div>
                <p className="kn-body" style={{ maxWidth:'62%', marginBottom:14, fontSize:15 }}>
                  {j.desc} <span style={{ color:'var(--accent-soft-ink)', fontWeight:600 }}>→ {j.opp}.</span>
                </p>
                <image-slot id={j.slot} locked fit="contain" shape="rounded" radius="14" placeholder={`User journey · ${j.name}`}
                  style={{ display:'block', width:'100%', maxWidth:435, height:'auto', aspectRatio:'894 / 740', background:'transparent' }}></image-slot>
              </div>
            ))}
          </div>
        </Section>

        {/* 11 · Recommandations UX */}
        <Section num="11" title={L.recoTitle}>
          <p className="kn-body" style={{ maxWidth:'62%', marginBottom:26 }}>{L.recoIntro}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:40, marginBottom:36 }}>
            {L.recos.map((r, i) => <RecoRow key={r.name} reco={r} num={i+1} flip={false} />)}
          </div>

          <div className="kn-reco-align" style={{ background:'var(--accent)', color:'#fff', borderRadius:14, padding:'clamp(18px,4vw,24px) clamp(18px,4vw,30px)', textAlign:'center', marginBottom:32 }}>
            <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:'clamp(18px,4.6vw,26px)', fontWeight:600, letterSpacing:-.4, lineHeight:1.15, textWrap:'balance' }}>{L.recoAlign}</div>
          </div>

          {/* Impact */}
          <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:24, fontWeight:600, letterSpacing:-.4, marginBottom:16 }}>{L.impactTitle}</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:32 }}>
            {[L.impactUX, L.impactBiz].map(col => (
              <div key={col.label} className="kn-card">
                <div className="kn-mono" style={{ color:'var(--accent-soft-ink)', marginBottom:10 }}>{col.label}</div>
                <ul style={{ listStyle:'none' }}>
                  {col.items.map(it => <li key={it} className="kn-bullet"><span className="kn-body" style={{ fontSize:14.5 }}>{it}</span></li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Déploiement */}
          <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:600, marginBottom:12 }}>{L.deployTitle}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {L.deploy.map(d => <span key={d} className="kn-pill" style={{ height:36, padding:'0 18px', fontSize:14 }}>{d}</span>)}
          </div>
        </Section>

        {/* 12 · Conclusion */}
        <Section num="12" title={L.conclusionTitle}>
          <p className="kn-body" style={{ maxWidth:'72%', fontSize:17 }}>{L.conclusionBody}</p>
          <p className="kn-body" style={{ marginTop:26, marginBottom:18 }}>{L.moreLabel}</p>
          <a href="contact/" className="kn-cta">{L.contactCTA}</a>
        </Section>

        {/* Mes projets */}
        <Section num="13" title={L.otherTitle}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 320px))', gap:24, justifyContent:'start' }}>
            {otherProjects.map(p => {
              const Thumb = THUMBS[p.id];
              const href = p.id === 'playmobil' ? 'playmobil/' : p.id === 'hairly' ? 'hairly/' : 'projets/';
              return (
                <a key={p.id} href={href} className="kn-link" style={{ display:'block' }}>
                  <div style={{ aspectRatio:'4/3', borderRadius:14, overflow:'hidden', background:'var(--paper-2)' }}>
                    <ProjectCoverWithSlot id={p.id}><Thumb /></ProjectCoverWithSlot>
                  </div>
                  <div style={{ marginTop:12, fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:500, letterSpacing:-.5 }}>{p.title}</div>
                  <div className="kn-body" style={{ fontSize:13, marginTop:3, color:'var(--ink-muted)' }}>{p.desc}</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:10 }}>
                    {p.tags.slice(0,3).map(tag => <span key={tag} className="kn-pill" style={{ height:22, fontSize:10.5 }}>{tag}</span>)}
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
          <span className="kn-mono">{t.footerCredit} · 2026</span>
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
      <div className="kn-section-head">
        <h2 className="kn-h2">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SwotCard({ label, tone, items, letter }) {
  const pos = tone === 'pos';
  const c = pos ? 'var(--accent-soft-ink)' : 'var(--danger-ink)';
  const top = items.slice(0, 3);
  return (
    <div className="kn-card" style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ flex:'0 0 auto', width:34, height:34, borderRadius:'50%', background:c, color:'var(--paper)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:17, fontWeight:700 }}>{letter}</span>
        <span style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:600, letterSpacing:-.3, color:c }}>{label}</span>
      </div>
      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
        {top.map(it => (
          <li key={it} style={{ display:'flex', gap:9, alignItems:'baseline',
            fontFamily:'"Albert Sans", sans-serif', fontSize:15, lineHeight:1.35, color:'var(--ink)' }}>
            <span style={{ flex:'0 0 auto', width:5, height:5, marginTop:7, borderRadius:'50%', background:c }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AuditCard({ dim, L }) {
  return (
    <div className="kn-card" style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:17, fontWeight:600, letterSpacing:-.3, lineHeight:1.1 }}>{dim.name}</div>
      <div>
        <div className="kn-mono" style={{ color:'var(--accent-soft-ink)', marginBottom:4 }}>Objectif</div>
        <p className="kn-body" style={{ fontSize:13.5 }}>{dim.objective}</p>
      </div>
      <div>
        <div className="kn-mono" style={{ marginBottom:4 }}>UX actuelle</div>
        <p className="kn-body" style={{ fontSize:13.5 }}>{dim.ux}</p>
      </div>
      <div style={{ marginTop:'auto', paddingTop:12, borderTop:'1px solid var(--line)' }}>
        <div className="kn-mono" style={{ marginBottom:4 }}>Fonctionnalités</div>
        <p className="kn-body" style={{ fontSize:12.5, color:'var(--ink-muted)', minHeight:'4.95em' }}>{dim.features}</p>
      </div>
    </div>
  );
}

function PhoneSlot({ id }) {
  return (
    <div className="kn-phone">
      <div style={{ position:'absolute', top:14, left:'50%', transform:'translateX(-50%)', width:'42%', height:18, background:'#0F2A1B', borderRadius:999, zIndex:1 }} />
      <image-slot id={id} locked placeholder="Écran app" shape="rounded" radius="14"
        style={{ position:'absolute', top:44, left:16, right:16, bottom:16, width:'auto', height:'auto', display:'block', background:'transparent' }}></image-slot>
    </div>
  );
}

function PersonaCard({ persona, L }) {
  const blocks = [
    [L.objLabel, persona.objective],
    [L.behLabel, persona.behavior],
    [L.needLabel, persona.needs],
    [L.frusLabel, persona.frustration],
  ];
  return (
    <div className="kn-card" style={{ padding:'26px 28px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'start' }}>
        {/* left: identity */}
        <div style={{ width:200, flexShrink:0 }}>
          <image-slot id={persona.slot} locked fit="cover" shape="rounded" radius="14" data-no-zoom placeholder={`Photo · ${persona.name}`}
            style={{ display:'block', width:200, height:200, background:'var(--paper-2)', marginBottom:14, cursor:'default' }}></image-slot>
          <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:26, fontWeight:600, letterSpacing:-.5, lineHeight:1 }}>{persona.name}</div>
          <div className="kn-mono" style={{ marginTop:6, textTransform:'none', letterSpacing:0, lineHeight:1.4 }}>{persona.meta}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:10 }}>
            {persona.tags.map(tg => <span key={tg} className="kn-pill" style={{ height:22, fontSize:10.5 }}>{tg}</span>)}
          </div>
        </div>
        {/* right: content */}
        <div>
          <p style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:19, fontWeight:500, letterSpacing:-.3, lineHeight:1.35, color:'var(--accent-soft-ink)', marginBottom:18, textWrap:'pretty' }}>« {persona.quote} »</p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
            {blocks.map(([label, items]) => (
              <div key={label}>
                <div className="kn-mono" style={{ marginBottom:6 }}>{label}</div>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:4 }}>
                  {items.map(it => <li key={it} className="kn-body" style={{ fontSize:13.5, lineHeight:1.45 }}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RecoRow({ reco, num, flip }) {
  return (
    <div className="kn-reco-row" style={{ flexDirection: flip ? 'row-reverse' : 'row' }}>
      <div style={{ flex:1, minWidth:0, maxWidth:480 }}>
        <RecoCard reco={reco} num={num} />
      </div>
      <div className="kn-reco-media">
        <div className="kn-shot" style={{ width:'100%' }}>
          <image-slot id={`kn-reco-${num-1}`} locked fit="contain" shape="rounded" radius="18"
            src={reco.mock} placeholder={`Mockup · ${reco.name}`}
            style={{ display:'block', width:'100%', height:'auto', aspectRatio:'786 / 1568' }}></image-slot>
        </div>
      </div>
    </div>
  );
}

function RecoCard({ reco, num }) {
  return (
    <div className="kn-card" style={{ display:'flex', flexDirection:'column', gap:12 }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:10 }}>
        <span className="kn-mono" style={{ color:'var(--accent-soft-ink)' }}>{String(num).padStart(2,'0')}</span>
        <div style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontSize:18, fontWeight:600, letterSpacing:-.3, lineHeight:1.1 }}>{reco.name}</div>
      </div>
      <p className="kn-body" style={{ fontSize:14 }}>{reco.objective}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
        {reco.features.map(f => (
          <span key={f} style={{ display:'inline-flex', alignItems:'center', height:26, padding:'0 11px', borderRadius:7, background:'var(--paper-2)', border:'1px solid var(--line)', fontSize:12, color:'var(--ink-2)' }}>{f}</span>
        ))}
      </div>
      <div style={{ marginTop:'auto', paddingTop:12, borderTop:'1px solid var(--line)' }}>
        <span className="kn-body" style={{ fontSize:13, color:'var(--ink-muted)' }}>{reco.benefits}</span>
      </div>
    </div>
  );
}

function KenyaHeroCard() {
  return (
    <div style={{
      position:'relative', background:'#F4ECDF',
      borderRadius:18, overflow:'hidden',
      aspectRatio:'1180/620',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding: 40, marginBottom: 8,
    }}>
      {/* Cover image (alt text supplied via media.js) */}
      <image-slot id="cover-kenya" locked fit="cover" placeholder="" shape="rect"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', background:'transparent', display:'block' }}>
      </image-slot>
    </div>
  );
}

Object.assign(window, { KenyaCase });
