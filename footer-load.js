document.addEventListener("DOMContentLoaded", function () {
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (!footerPlaceholder) return;

  fetch("footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Footer not found");
      }
      return response.text();
    })
    .then(html => {
      footerPlaceholder.innerHTML = html;

      // Load footer.js AFTER footer is injected
      const script = document.createElement("script");
      script.src = "js/footer.js";
      script.defer = true;
      document.body.appendChild(script);
    })
    .catch(error => {
      console.error("Footer loading error:", error);
    });
});
