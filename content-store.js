/* content-store.js
 * Tiny content-override store: localStorage-backed key/value overrides per
 * page + language, with a subscribe model so pages re-render on edit.
 *
 * Public API:
 *   window.SITE_CONTENT_KEY                  // localStorage key
 *   window.getContentOverrides()             // → full overrides object
 *   window.applyContentOverrides(p, lang, L) // merge overrides into L
 *   window.setContentOverride(p, lang, k, v) // patch + persist + broadcast
 *   window.resetContent(p?)                  // wipe (per-page or all)
 *   window.useContentVersion()               // React hook → bumps on change
 *
 * Edits broadcast via window 'site-content-change' CustomEvent and storage
 * event (cross-tab). Pages call useContentVersion() to subscribe.
 *
 * IMAGES are handled by the existing <image-slot> sidecar system — see
 * image-slot.js. The Console just renders live <image-slot> instances with
 * matching ids; they sync through the same store.
 */
(function () {
  const STORAGE_KEY = 'site-content-overrides:v1';
  const MESSAGES_KEY = 'site-contact-messages:v1';

  function read() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }
  function write(obj) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }
    catch (e) { console.warn('content-store: persist failed', e); }
  }

  function getContentOverrides() {
    return read();
  }

  // Merge page-level overrides into the language-specific L object.
  // Only string/array/scalar keys are replaced — deep nested objects pass through.
  function applyContentOverrides(page, lang, L) {
    const o = read();
    const patch = (o[page] && o[page][lang]) || {};
    return { ...L, ...patch };
  }

  function setContentOverride(page, lang, key, value) {
    const o = read();
    o[page] = o[page] || {};
    o[page][lang] = o[page][lang] || {};
    if (value === undefined || value === null || value === '') {
      delete o[page][lang][key];
      if (Object.keys(o[page][lang]).length === 0) delete o[page][lang];
      if (Object.keys(o[page]).length === 0) delete o[page];
    } else {
      o[page][lang][key] = value;
    }
    write(o);
    broadcast();
  }

  function resetContent(page) {
    if (page) {
      const o = read();
      delete o[page];
      write(o);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    broadcast();
  }

  function broadcast() {
    window.dispatchEvent(new CustomEvent('site-content-change'));
  }

  /* ── Contact messages store ───────────────────────────────────── */
  function readMessages() {
    try { return JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]'); }
    catch { return []; }
  }
  function writeMessages(arr) {
    try { localStorage.setItem(MESSAGES_KEY, JSON.stringify(arr)); }
    catch (e) { console.warn('content-store: persist messages failed', e); }
  }
  function getMessages() { return readMessages(); }
  function saveMessage({ name, email, message }) {
    const arr = readMessages();
    arr.unshift({
      id: 'm' + Date.now() + '-' + Math.random().toString(36).slice(2,7),
      name: String(name || '').trim(),
      email: String(email || '').trim(),
      message: String(message || '').trim(),
      timestamp: Date.now(),
      read: false,
    });
    writeMessages(arr);
    broadcast();
  }
  function markMessageRead(id, read = true) {
    const arr = readMessages();
    const i = arr.findIndex(m => m.id === id);
    if (i >= 0) { arr[i].read = read; writeMessages(arr); broadcast(); }
  }
  function deleteMessage(id) {
    writeMessages(readMessages().filter(m => m.id !== id));
    broadcast();
  }
  function clearMessages() {
    writeMessages([]);
    broadcast();
  }

  // React hook — bumps a counter when overrides change, forcing re-render.
  function useContentVersion() {
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
      const onChange = () => setV(x => x + 1);
      window.addEventListener('site-content-change', onChange);
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY || e.key === MESSAGES_KEY) onChange();
      });
      return () => {
        window.removeEventListener('site-content-change', onChange);
      };
    }, []);
    return v;
  }

  /* ── Language preference ──────────────────────────────────────────
   * Default language follows the device (French if the device locale is
   * French, English otherwise), unless the user has manually picked one
   * (persisted in localStorage). */
  const LANG_KEY = 'site-lang-pref:v1';
  function detectDeviceLang() {
    try {
      const list = navigator.languages && navigator.languages.length
        ? navigator.languages : [navigator.language || navigator.userLanguage || 'fr'];
      for (const l of list) {
        const code = String(l).toLowerCase().slice(0, 2);
        if (code === 'fr') return 'fr';
        if (code === 'en') return 'en';
      }
    } catch (e) {}
    return 'en';
  }
  function getInitialLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (e) {}
    return detectDeviceLang();
  }
  function setLangPref(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  /* ── Theme preference ──────────────────────────────────────────────
   * Default theme follows the device's system setting (prefers-color-scheme),
   * unless the user has manually picked one (persisted in localStorage).
   * Manual choice wins until the user clears it. */
  const THEME_KEY = 'site-theme-pref:v1';
  function detectSystemTheme() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) {}
    return 'light';
  }
  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return detectSystemTheme();
  }
  function setThemePref(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    try { document.documentElement.setAttribute('data-theme', theme); } catch (e) {}
  }
  /* Lets pages react live to OS theme changes — but only while the user
   * hasn't manually overridden it. Returns an unsubscribe fn. */
  function onSystemThemeChange(cb) {
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => {
        let saved = null;
        try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
        if (saved !== 'light' && saved !== 'dark') cb(e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else mq.addListener(handler);
      return () => { if (mq.removeEventListener) mq.removeEventListener('change', handler); else mq.removeListener(handler); };
    } catch (e) { return () => {}; }
  }

  Object.assign(window, {
    SITE_CONTENT_KEY: STORAGE_KEY,
    SITE_MESSAGES_KEY: MESSAGES_KEY,
    getContentOverrides,
    applyContentOverrides,
    setContentOverride,
    resetContent,
    useContentVersion,
    getInitialLang,
    setLangPref,
    getInitialTheme,
    setThemePref,
    onSystemThemeChange,
    getMessages,
    saveMessage,
    markMessageRead,
    deleteMessage,
    clearMessages,
  });
})();

/* ── Page transitions & clean-URL routing ──────────────────────────────────
 * Pages live in folders for clean URLs (/apropos/), resolved via a dynamic
 * <base> tag set in each page's <head>. This environment's preview server
 * does NOT serve directory indexes, so in preview/dev we append index.html to
 * folder URLs; production (GitHub Pages) serves them as clean URLs untouched.
 * Also fades out on internal navigation for a smooth page-to-page feel. */
(function () {
  var IS_PREVIEW = /claudeusercontent|localhost|127\.0\.0\.1/.test(location.hostname);
  function previewFix(url) {
    if (IS_PREVIEW && /\/$/.test(url.pathname)) {
      return new URL(url.pathname + 'index.html' + url.search + url.hash, url.origin);
    }
    return url;
  }
  function leave(url) {
    document.documentElement.classList.add('app-leaving');
    setTimeout(function () { location.href = url.href; }, 200);
  }
  // For JS-driven navigation (e.g. clickable cards). Resolves against <base>.
  window.navTo = function (href) {
    var url;
    try { url = new URL(href, document.baseURI); } catch (_) { location.href = href; return; }
    leave(previewFix(url));
  };

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    var raw = a.getAttribute('href');
    if (!raw || raw.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(raw)) return;
    var url;
    try { url = new URL(a.href); } catch (_) { return; } // a.href already respects <base>
    if (url.origin !== location.origin) return;
    url = previewFix(url);
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    leave(url);
  }, false);
})();
