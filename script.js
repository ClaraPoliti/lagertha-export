const message =
  "Merci pour votre message. Des qu'on finisse de colonisser le monde, on pourra vous repondre.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
