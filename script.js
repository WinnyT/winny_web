const app = document.getElementById("app");

const georgiaPin = document.getElementById("GeorgiaTap");
const vietnamPin = document.getElementById("VietnamTap");

const backButton = document.getElementById("backButton");

const georgiaStory = document.getElementById("GeorgiaStory");
const vietnamStory = document.getElementById("VietnamStory");

const contactPlane = document.getElementById("ContactTap");
const closeContact = document.getElementById("closeContact");


function openStory(story) {

  document.querySelectorAll(".story").forEach(function(item) {
    item.classList.remove("active");
  });

  story.classList.add("active");

  app.classList.add("story-open");
}


georgiaPin.addEventListener("click", function() {
  openStory(georgiaStory);
});


vietnamPin.addEventListener("click", function() {
  openStory(vietnamStory);
});


backButton.addEventListener("click", function() {
  app.classList.remove("story-open");
});


contactPlane.addEventListener("click", function() {
  app.classList.add("contact-open");
});


closeContact.addEventListener("click", function() {
  app.classList.remove("contact-open");
});