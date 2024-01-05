// Your JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(url, elementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(elementId).innerHTML = data;
        });
}
loadHTML('components/header.html', 'header-placeholder');
loadHTML('components/footer.html', 'footer-placeholder');
loadHTML('components/about.html', 'about-placeholder');
loadHTML('components/socialIcons.html', 'social-icons-placeholder');

});