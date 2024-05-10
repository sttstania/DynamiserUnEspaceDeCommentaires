console.log("Hello! script chargé");

const myForm = document.querySelector("form");
console.log("variable myForm:", myForm);

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("mon event contient:", event);
});
