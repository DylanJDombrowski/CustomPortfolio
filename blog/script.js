// blog/script.js
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { createVisualization } from "./visualization.js";

const visualizationContainer = document.getElementById(
  "visualization-container"
);
const modal = document.getElementById("post-modal");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalTags = document.getElementById("modal-tags");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementsByClassName("close")[0];

async function loadPosts() {
  const response = await fetch("posts.json");
  const posts = await response.json();

  createVisualization(posts, visualizationContainer, displayPost);
}

function displayPost(post) {
  modalTitle.textContent = post.id;
  modalDate.textContent = new Date(post.date).toLocaleDateString();

  modalTags.innerHTML = "";
  post.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.textContent = tag;
    modalTags.appendChild(tagElement);
  });

  fetch(post.file)
    .then((response) => response.text())
    .then((markdown) => {
      modalContent.innerHTML = marked.parse(markdown);
    });

  modal.style.display = "block";
}

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

loadPosts();
