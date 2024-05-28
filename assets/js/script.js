const myForm = document.querySelector("form");

myForm.addEventListener("submit", checkInputs);

function checkInputs(event) {
  event.preventDefault();
  event.stopPropagation();

  let inputFirstName = document.querySelector("#first-name").value.trim();
  let inputLastName = document.querySelector("#last-name").value.trim();
  let inputmessage = document.querySelector("#message").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (inputFirstName === "" || inputLastName === "" || inputmessage === "") {
    //add errorcomment
    const errorMsg = document.getElementById("error-message");

    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    const commentList = document.getElementById("comment-list");

    //clone last comment
    const totalCommentList = commentList.children.length;
    const toCopy = commentList.children[totalCommentList - 1];

    const newComment = toCopy.cloneNode(true);

    const title = newComment.querySelector("h3");
    const text = newComment.querySelector("p");

    title.innerHTML = inputFirstName + " " + inputLastName;
    text.innerHTML = inputmessage;

    commentList.append(newComment);

    //delete field's form
    myForm.reset();
  }
}
