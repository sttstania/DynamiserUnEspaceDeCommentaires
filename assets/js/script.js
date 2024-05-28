console.log("Hello! script chargé");

const myForm = document.querySelector("form");
console.log("variable myForm:", myForm);
const errorMessagesDiv = document.getElementById("error-message");
console.log("ceci est un message d'erreur");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("mon event contient:", event);

  let inputFirstName = document.querySelector("#first-name").value.trim();
  console.log("inputFirstName contien:", inputFirstName);

  let inputLastName = document.querySelector("#last-name").value.trim();
  console.log("inputLastName contien:", inputLastName);

  let inputmessage = document.querySelector("#message").value.trim();
  console.log("inputmessage contien:", inputmessage);

  if (inputFirstName === "" || inputLastName === "" || inputmessage === "") {
    console.log("Un champ est vide");
  }
});
