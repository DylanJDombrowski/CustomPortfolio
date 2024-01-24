document.addEventListener("DOMContentLoaded", function () {
  function attachCollapsibleListeners() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
      // Initialize content to be hidden
      var content = coll[i].nextElementSibling;
      if (content) {
        // Check if content is not null
        content.style.display = "none";
      }

      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content && content.style.display === "block") {
          content.style.display = "none";
        } else if (content) {
          content.style.display = "block";
        }
      });
    }
  }

  function loadHTML(url, elementId) {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
        if (
          elementId === "achievements-placeholder" ||
          elementId === "projects-placeholder"
        ) {
          attachCollapsibleListeners();
        }
      })
      .catch((error) => {
        console.error("Error loading HTML: ", error);
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
