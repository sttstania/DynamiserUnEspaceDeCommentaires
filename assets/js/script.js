const myForm = document.querySelector("form");
console.log("variable myForm", myForm);

myForm.addEventListener("submit", checkInputs);

function checkInputs(event) {
  event.preventDefault();
  event.stopPropagation();

  let inputFirstName = document.querySelector("#first-name").value.trim();
  console.log("inputFirstName contien:", inputFirstName);
  let inputLastName = document.querySelector("#last-name").value.trim();
  console.log("inputLastName contien:", inputLastName);
  let inputmessage = document.querySelector("#message").value.trim();
  console.log("inputmessage contien:", inputmessage);

  const errorMsg = document.getElementById("error-message");

  if ((inputFirstName || inputLastName || inputmessage) === "") {
    //add comment
    console.log("Un champ est vide");

    console.log(errorMsg);
    errorMsg.style.display = "block";
  } else {
    console.log("tous les champs sont complets");
    errorMsg.style.display = "none";
    const commentList = document.getElementById("comment-list");
    console.log("commentList");
  }
}
