// load.js
// Dynamically load navbar HTML, CSS, and JS

(function () {

  const NAVBAR_HTML = "navbar.html";
  const NAVBAR_CSS  = "navbar.css";
  const NAVBAR_JS   = "navbar.js";

  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  /* Load CSS only once */
  if (!document.querySelector(`link[href="${NAVBAR_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = NAVBAR_CSS;
    document.head.appendChild(link);
  }

  /* Load Navbar HTML */
  fetch(NAVBAR_HTML)
    .then(res => res.text())
    .then(html => {
      placeholder.innerHTML = html;

      /* Load JS after HTML is injected */
      if (!document.querySelector(`script[src="${NAVBAR_JS}"]`)) {
        const script = document.createElement("script");
        script.src = NAVBAR_JS;
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => {
      console.error("Navbar load failed:", err);
    });

})();
