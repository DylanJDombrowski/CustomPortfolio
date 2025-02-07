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
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
          if (elementId === "achievements-placeholder" || elementId === "contact-placeholder") {
            attachCollapsibleListeners();
          }
        } else {
          console.error(`Element with ID ${elementId} not found.`);
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
      await loadHTML("components/about.html", "about-placeholder");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  loadComponents();
});
