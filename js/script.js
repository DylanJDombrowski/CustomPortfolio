// Your JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(url, elementId) {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      });
  }

  async function loadComponents() {
    try {
      await loadHTML("components/layout.html", "layout-placeholder");
      await loadHTML("components/header.html", "header");
      await loadHTML("components/identity.html", "identity-placeholder");
      await loadHTML("components/nav.html", "nav-placeholder");
      await loadHTML("components/socialIcons.html", "social-icons-placeholder");
      await loadHTML("components/about.html", "about-placeholder");
      await loadHTML(
        "components/achievements.html",
        "achievements-placeholder"
      );
      await loadHTML("components/projects.html", "projects-placeholder");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  loadComponents();
});
