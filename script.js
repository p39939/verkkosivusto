const yearElement = document.getElementById("year");
const helloButton = document.getElementById("hello-button");
const helloMessage = document.getElementById("hello-message");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (helloButton && helloMessage) {
  helloButton.addEventListener("click", () => {
    helloMessage.textContent = "Hei! Kiitos kun tutustuit sivustoon.";
  });
}
