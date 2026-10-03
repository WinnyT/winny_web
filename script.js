const app = document.getElementById("app");

const georgiaPin = document.getElementById("GeorgiaTap");
const texasPin = document.getElementById("TexasTap");

const backButton = document.getElementById("backButton");

const storyTitle = document.getElementById("storyTitle");
const storyContent = document.getElementById("storyContent");

georgiaPin.addEventListener("click", function () {

  storyTitle.textContent = "Georgia";

  storyContent.textContent =
    "This is where my Georgia story will go.";

  app.classList.add("story-open");

});

texasPin.addEventListener("click", function () {

  storyTitle.textContent = "Texas";

  storyContent.textContent =
    "This is where my Texas story will go.";

  app.classList.add("story-open");

});

backButton.addEventListener("click", function () {

  app.classList.remove("story-open");

});

