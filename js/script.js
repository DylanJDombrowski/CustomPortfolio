// Your JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(url, elementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load and insert the header
loadHTML('components/header.html', 'header-placeholder');

// Load and insert the footer
loadHTML('components/footer.html', 'footer-placeholder');

// Load and insert the about section
loadHTML('components/about.html', 'about-placeholder');

// Load and insert the Social Icons
loadHTML('components/socialIcons.html', 'social-icons-placeholder');
  // Smooth scroll to the section with an offset for padding
  const navLinks = document.querySelectorAll("a.nav-link");
  const offset = -100; // Increase this value to show more of the top screen

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const hrefAttribute = this.getAttribute("href");

      // Check if the href attribute points to an ID on the same page
      if (hrefAttribute.startsWith("#")) {
        event.preventDefault();
        const targetSection = document.querySelector(hrefAttribute);
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + offset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      // If it points to a different page, allow the default navigation action
    });
  });

  // Your existing JavaScript code goes here
  // For example, the code to change the navbar background on scroll
  const header = document.querySelector(".navbar");
  window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };

  // Add other custom JavaScript code here...
  // ...
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide the "Page Up" button based on screen size
window.addEventListener("resize", function () {
  const pageUpBtn = document.getElementById("pageUpBtn");
  if (window.innerWidth < 768) {
    pageUpBtn.style.display = "none";
  } else {
    pageUpBtn.style.display = "block";
  }
});

// Initially check the screen size on page load
window.addEventListener("load", function () {
  const pageUpBtn = document.getElementById("pageUpBtn");
  if (window.innerWidth < 768) {
    pageUpBtn.style.display = "none";
  } else {
    pageUpBtn.style.display = "block";
  }
});

// set background gradient colors and angle using mouse
document.onmousemove = e => {
  var boxw = document.body.getBoundingClientRect().width;
  var boxh = document.body.getBoundingClientRect().height;
  var x = e.clientX - boxw / 2;
  var y = e.clientY - boxh / 2;
  var rad = Math.atan(y / x) + Math.PI * (x < 0 ? 1.5 : 0.5);
  var deg = rad * 180 / Math.PI;
  document.body.style.backgroundImage =
    "linear-gradient(" + rad + "rad, hsl(" + deg + ",90%,30%), hsl(" + (deg + 120) + ",90%,30%))";
};

// Function to load and insert HTML content
