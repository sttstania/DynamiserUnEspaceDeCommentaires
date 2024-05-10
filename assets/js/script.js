console.log("Hello! script chargé");

const myForm = document.querySelector("form");
console.log("variable myForm:", myForm);

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("mon event contient:", event);

  let inputFirstName = document.querySelector("#first-name").value;
  console.log("inputFirstName contien:", inputFirstName);

  let inputLastName = document.querySelector("#last-name").value;
  console.log("inputLastName contien:", inputLastName);

  let inputmessage = document.querySelector("#message").value;
  console.log("inputmessage contien:", inputmessage);
});
