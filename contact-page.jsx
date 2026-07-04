/* Me contacter — contact page.
   Reuses the established design system (tokens, type, nav). */

function ContactPage({ accent = '#6E8E3A', accentSoft = '#DAEACD', accentInk = '#355C1E' }) {
  const [lang, setLangState] = React.useState(() => window.getInitialLang ? window.getInitialLang() : 'fr');
  const setLang = (l) => { window.setLangPref && window.setLangPref(l); setLangState(l); };
  const [theme, setThemeState] = React.useState(() => window.getInitialTheme ? window.getInitialTheme() : 'light');
  const setTheme = (val) => { window.setThemePref && window.setThemePref(val); setThemeState(val); };
  React.useEffect(() => {}, []);
  const [hoveredCard, setHoveredCard] = React.useState('linkedin');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const emailTemplate = lang === 'fr'
    ? `Bonjour Irmane,\n\nJe me permets de vous contacter car je suis à la recherche d'un(e) UX/UI Designer pour un projet de [type de projet] dans le domaine de [votre secteur].\n\nAprès avoir consulté votre profil, votre expertise me semble correspondre à nos besoins. Je serais ravi(e) de vous présenter le projet plus en détail et d'échanger sur une éventuelle collaboration.\n\nAuriez-vous un créneau disponible cette semaine pour en discuter ?\n\nDans l'attente de votre retour, je reste à votre disposition pour toute question.\n\nBien cordialement,\n[Votre prénom nom]`
    : `Hi Irmane,\n\nI'm reaching out because I'm looking for a UX/UI Designer for a [type of project] in the [your industry] space.\n\nAfter looking through your portfolio, your expertise seems like a great fit for what we need. I'd love to walk you through the project and explore a potential collaboration.\n\nWould you have any availability this week for a quick call?\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your name]`;

  const handleCopy = () => {
    const tryClipboard = () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(emailTemplate);
      }
      return Promise.reject('no clipboard API');
    };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = emailTemplate;
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    };
    tryClipboard()
      .catch(() => { try { fallback(); } catch(e) {} })
      .finally(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
  };
  const t = I18N[lang];
  useContentVersion();

  const Lsave = lang === 'fr' ? { saveTime: 'Gagner du temps', saveTimeSub: 'Copiez un modèle d\'email prêt à envoyer', copyBtn: 'Copier le modèle', copiedBtn: 'Copié !', closeBtn: 'Fermer', templateTitle: 'Modèle d\'email', templateHint: 'Voici un exemple d\'email à copier et à compléter avec vos propres informations.' } : { saveTime: 'Save time', saveTimeSub: 'Copy a ready-to-send email template', copyBtn: 'Copy template', copiedBtn: 'Copied!', closeBtn: 'Close', templateTitle: 'Email template', templateHint: 'Here\'s an example email to copy and fill in with your own details.' };

  let L = lang === 'fr' ? {
    title: 'Me contacter',
    intro: "Un projet en tête ? Une question ? Je serais ravi d'échanger avec vous.",
    email: 'Email',
    emailValue: 'irmane@hotmail.fr',
    linkedin: 'LinkedIn',
    linkedinValue: 'Connectons-nous',
    formTitle: 'Envoyez-moi un message',
    nameLabel: 'Nom',
    namePh: 'Votre nom',
    emailLabel: 'Email',
    emailPh: 'email@exemple.com',
    msgLabel: 'Message',
    msgPh: 'Un service, une question, un petit coucou…',
    send: 'Envoyer mon message',
    sent: 'Message envoyé · Merci !',
    errName: 'Merci d’indiquer votre nom.',
    errEmail: 'Adresse email invalide.',
    errEmailRequired: 'L’email est requis.',
    errMessage: 'Votre message ne peut pas être vide.',
  } : {
    title: 'Get in touch',
    intro: "A project in mind? A question? I'd be glad to hear from you.",
    email: 'Email',
    emailValue: 'irmane@hotmail.fr',
    linkedin: 'LinkedIn',
    linkedinValue: "Let's connect",
    formTitle: 'Send me a message',
    nameLabel: 'Name',
    namePh: 'Your name',
    emailLabel: 'Email',
    emailPh: 'email@example.com',
    msgLabel: 'Message',
    msgPh: 'A service, a question, just saying hi…',
    send: 'Send my message',
    sent: 'Message sent · Thank you!',
    errName: 'Please enter your name.',
    errEmail: 'Invalid email address.',
    errEmailRequired: 'Email is required.',
    errMessage: 'Your message cannot be empty.',
  };
  L = applyContentOverrides('contact', lang, L);

  return (
    <div className="ct-root" data-theme={theme} style={{
      width: '100%', minHeight: '100vh',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Albert Sans","Manrope",system-ui,sans-serif',
      ['--accent']: accent, ['--accent-soft']: accentSoft, ['--accent-soft-ink']: accentInk,
      transition: 'background .3s,color .3s', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      <style>{`
        .ct-root { font-feature-settings: "ss01","cv11"; }
        .ct-display { font-family:'Bricolage Grotesque', system-ui, sans-serif; font-weight:500; font-variation-settings:"wdth" 100, "opsz" 96; letter-spacing:-0.035em; line-height:0.95; }
        .ct-mono { font-family:'JetBrains Mono', monospace; font-size:11.5px; letter-spacing:0.4px; text-transform:uppercase; color:var(--ink-muted); font-weight:500; }
        .ct-link { transition: color .2s; }
        .ct-link:hover { color: var(--accent); }

        /* contact tiles */
        .ct-tile {
          display: flex; align-items: center; gap: 22px;
          padding: 22px 26px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: var(--paper);
          transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
          text-align: left; width: 100%;
          position: relative;
        }
        .ct-tile:hover { background: var(--paper-2); border-color: var(--line-strong); transform: translateY(-1px); }
        .ct-tile:hover .ct-tile-val { color: var(--accent); }
        .ct-tile:hover .ct-tile-ext { color: var(--accent); transform: translate(2px,-2px); }
        .ct-tile-ext {
          margin-left: auto;
          color: var(--ink-faint);
          transition: color .25s, transform .25s;
          display: inline-flex;
        }
        .ct-tile-icon {
          flex-shrink: 0;
          width: 56px; height: 56px; border-radius: 50%;
          background: color-mix(in oklab, var(--accent-soft) 55%, var(--accent)); color: var(--accent-soft-ink);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; font-size: 18px; letter-spacing: -0.02em;
        }
        .ct-tile-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size: 19px; letter-spacing:-0.01em; color: var(--ink); }
        .ct-tile-val { font-size: 14.5px; color: var(--accent-soft-ink); transition: color .25s; margin-top: 2px; }

        /* form */
        .ct-form-wrap {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 36px 36px 32px;
        }
        .ct-form-title { font-family:'Bricolage Grotesque', sans-serif; font-weight:600; font-size: 24px; letter-spacing:-0.015em; color: var(--ink); margin-bottom: 28px; }
        .ct-label { display:block; font-size: 13.5px; font-weight: 600; color: var(--ink); margin-bottom: 9px; letter-spacing: 0.1px; }
        .ct-required { color: var(--accent); margin-left: 3px; font-weight: 600; }
        .ct-field, .ct-area {
          width: 100%;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 14px 16px;
          font: inherit; font-size: 15px;
          color: var(--ink);
          transition: border-color .2s, box-shadow .2s, background .2s;
          outline: none;
        }
        .ct-field::placeholder, .ct-area::placeholder { color: var(--ink-faint); }
        .ct-field:focus, .ct-area:focus { border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent); }
        .ct-field[aria-invalid="true"], .ct-area[aria-invalid="true"] {
          border-color: var(--danger);
          background: color-mix(in oklab, var(--danger-soft) 32%, var(--card));
        }
        .ct-field[aria-invalid="true"]:focus, .ct-area[aria-invalid="true"]:focus {
          border-color: var(--danger);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--danger) 22%, transparent);
        }
        .ct-error {
          display: flex; align-items: center; gap: 6px;
          margin-top: 8px;
          font-size: 13px; font-weight: 500;
          color: var(--danger);
        }
        .ct-error svg { flex-shrink: 0; }
        .ct-area { resize: vertical; min-height: 156px; line-height: 1.5; font-family: inherit; }
        .ct-row + .ct-row { margin-top: 22px; }

        .ct-submit {
          margin-top: 28px;
          width: 100%;
          background: var(--accent);
          color: #fff;
          border-radius: 10px;
          height: 56px;
          font-size: 15.5px; font-weight: 600; letter-spacing: 0.1px;
          transition: background .2s, transform .15s, box-shadow .25s;
          display: inline-flex; align-items:center; justify-content:center; gap: 10px;
        }
        .ct-submit:hover { background: color-mix(in oklab, var(--accent) 88%, black); box-shadow: 0 12px 28px -14px color-mix(in oklab, var(--accent) 80%, transparent); }
        .ct-submit:active { transform: translateY(1px); }

        /* toast */
        .ct-toast {
          position: fixed; left: 50%; transform: translateX(-50%);
          bottom: 32px; padding: 12px 22px;
          background: var(--ink); color: var(--paper);
          border-radius: 999px; font-size: 13.5px; font-weight: 500;
          box-shadow: 0 18px 40px -16px rgba(0,0,0,0.35);
          z-index: 50;
          font-family: 'Albert Sans', sans-serif;
        }

        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .ct-root > header > div, .ct-root > main, .ct-root > footer > div { padding-left:32px !important; padding-right:32px !important; }
        }
        @media (max-width: 680px) {
          .ct-root > header > div { padding:14px 20px !important; }
          .ct-root > main { padding:56px 20px 72px !important; }
          .ct-root > footer > div { padding:18px 20px !important; }
          .ct-root > header nav { gap:16px !important; font-size:12.5px !important; }
          .ct-form-wrap { padding:24px 20px !important; }
          .ct-tile { padding:18px 18px !important; gap:16px !important; }
        }
        @media (max-width: 400px) {
          .ct-root > header .ct-mono { display:none; }
        }
      `}</style>

      {/* — TOP NAV — */}
      <header style={{ borderBottom:'1px solid var(--line)', position:'sticky', top:0, zIndex:10, background:'color-mix(in oklab, var(--paper) 90%, transparent)', backdropFilter:'blur(8px)' }}>
        <div style={{ padding:'18px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <a href="./" style={{ fontFamily:'"Bricolage Grotesque", sans-serif', fontWeight:700, fontSize:21, letterSpacing:-0.6 }}>I<span style={{ color:'var(--accent)' }}>.</span>UX</a>
            <span className="ct-mono">{t.location}</span>
          </div>
          <ResponsiveNav linkClass="ct-link" lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
            items={[
              { href: 'projets/', label: t.navWork },
              { href: 'apropos/', label: t.navAbout },
              { href: 'contact/', label: t.navContact, active: true },
            ]} />
        </div>
      </header>

      <main style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '88px 48px 96px', flex: 1 }}>

        {/* Title block */}
        <h1 className="ct-display" style={{ fontSize:'clamp(40px, 9vw, 58px)', color:'var(--accent-soft-ink)' }}>{L.title}</h1>
        <p style={{ fontSize:18, lineHeight:1.55, color:'var(--ink-2)', marginTop:22, maxWidth:560, textWrap:'pretty' }}>{L.intro}</p>

        {/* Save time button */}
        <button
          onClick={() => setModalOpen(true)}
          style={{
            marginTop: 40,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '13px 22px',
            background: 'var(--accent-soft)',
            color: 'var(--accent-soft-ink)',
            border: '1px solid color-mix(in oklab, var(--accent) 30%, transparent)',
            borderRadius: 12,
            fontFamily: 'inherit', fontSize: 15, fontWeight: 600,
            cursor: 'pointer',
            transition: 'background .2s, transform .15s, box-shadow .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'color-mix(in oklab, var(--accent-soft) 80%, var(--accent))'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-soft)'; }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <polyline points="13 2 13 9 20 9"/>
            <line x1="9" y1="13" x2="15" y2="13"/>
            <line x1="9" y1="17" x2="13" y2="17"/>
          </svg>
          {Lsave.saveTime}
        </button>

        {/* Contact tiles */}
        <div style={{ display:'flex', flexDirection:'column', gap: 16, marginTop: 24 }}>
          <a className="ct-tile" href="mailto:irmane@hotmail.fr"
             onMouseEnter={()=>setHoveredCard('email')}
             style={hoveredCard === 'email' ? { background:'var(--paper-2)', borderColor:'var(--line-strong)' } : {}}>
            <div className="ct-tile-icon" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>
            </div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              <div className="ct-tile-title">{L.email}</div>
              <div className="ct-tile-val">{L.emailValue}</div>
            </div>
            <span className="ct-tile-ext" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 5h5v5"/>
                <path d="M19 5 10 14"/>
                <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>
              </svg>
            </span>
          </a>

          <a className="ct-tile" href="https://www.linkedin.com/in/irmane/" target="_blank" rel="noopener noreferrer" onClick={(e)=>{e.preventDefault();window.open('https://www.linkedin.com/in/irmane/','_blank','noopener,noreferrer');}}
             onMouseEnter={()=>setHoveredCard('linkedin')}
             style={hoveredCard === 'linkedin' ? { background:'var(--paper-2)', borderColor:'var(--line-strong)' } : {}}>
            <div className="ct-tile-icon" aria-hidden>in</div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              <div className="ct-tile-title">{L.linkedin}</div>
              <div className="ct-tile-val">{L.linkedinValue}</div>
            </div>
            <span className="ct-tile-ext" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 5h5v5"/>
                <path d="M19 5 10 14"/>
                <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>
              </svg>
            </span>
          </a>
        </div>

      </main>

      {/* — FOOTER — */}
      <footer style={{ borderTop:'1px solid var(--line)' }}>
        <div style={{ padding:'22px 48px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span className="ct-mono">{t.footerCredit} · 2026</span>
        </div>
      </footer>
      {/* ── Email template modal ── */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'color-mix(in oklab, var(--ink) 40%, transparent)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 20,
              padding: '36px 36px 28px',
              maxWidth: 560, width: '100%',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.25)',
              position: 'relative',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              aria-label={Lsave.closeBtn}
              style={{
                position: 'absolute', top: 18, right: 18,
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--paper-2)', border: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--ink-muted)',
                transition: 'background .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--line)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--paper-2)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Header */}
            <div style={{ display:'flex', alignItems:'center', gap: 12, marginBottom: 6 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--accent-soft)', color: 'var(--accent-soft-ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                  <polyline points="13 2 13 9 20 9"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:'"Bricolage Grotesque",sans-serif', fontWeight:600, fontSize:19, letterSpacing:-0.015, color:'var(--ink)' }}>{Lsave.templateTitle}</div>
                <div style={{ fontSize:13, color:'var(--ink-muted)', marginTop:1 }}>
                  {Lsave.templateHint}{' '}
                  <a href="mailto:irmane@hotmail.fr" style={{ color:'var(--accent)', fontWeight:600, textDecoration:'none' }}>irmane@hotmail.fr</a>
                </div>
              </div>
            </div>

            {/* Template text */}
            <pre style={{
              marginTop: 20,
              background: 'var(--card, var(--paper-2))',
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: '18px 20px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13, lineHeight: 1.7,
              color: 'var(--ink)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowX: 'hidden',
              userSelect: 'text',
            }}>{emailTemplate}</pre>

            {/* Actions */}
            <div style={{ display:'flex', gap:10, marginTop:20 }}>
              <button
                onClick={handleCopy}
                style={{
                  flex: 1,
                  height: 48,
                  background: copied ? 'color-mix(in oklab, var(--accent) 15%, var(--paper))' : 'var(--accent)',
                  color: copied ? 'var(--accent-soft-ink)' : '#fff',
                  border: copied ? '1px solid color-mix(in oklab, var(--accent) 40%, transparent)' : 'none',
                  borderRadius: 10,
                  fontFamily: 'inherit', fontSize: 15, fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'background .25s, color .25s, border .25s',
                }}
              >
                {copied ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {Lsave.copiedBtn}
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    {Lsave.copyBtn}
                  </>
                )}
              </button>
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  height: 48, padding: '0 20px',
                  background: 'var(--paper-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 10,
                  fontFamily: 'inherit', fontSize: 15, fontWeight: 500,
                  color: 'var(--ink-muted)',
                  cursor: 'pointer',
                  transition: 'background .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--line)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--paper-2)'}
              >
                {Lsave.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      <BackToTopFab />
    </div>
  );
}

Object.assign(window, { ContactPage });
