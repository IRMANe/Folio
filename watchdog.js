/* watchdog.js — reloads the page once if #root is empty after 1.5s */
(function () {
  var KEY = 'wd_reload:' + location.pathname;
  var attempts = parseInt(sessionStorage.getItem(KEY) || '0', 10);

  window.addEventListener('load', function () {
    setTimeout(function () {
      var root = document.getElementById('root');
      var empty = !root || root.children.length === 0;
      if (empty && attempts < 1) {
        sessionStorage.setItem(KEY, String(attempts + 1));
        location.reload();
      } else {
        /* Page rendered OK — reset counter for next visit */
        sessionStorage.removeItem(KEY);
      }
    }, 1500);
  });
})();
