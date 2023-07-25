// Your JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the section with an offset for padding
  const navLinks = document.querySelectorAll("a.nav-link");
  const offset = -100; // Increase this value to show more of the top screen

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
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
