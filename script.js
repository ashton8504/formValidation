// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");
const errorContainer = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

form.addEventListener("submit", e => {
  const errorMessages = [];
  clearErrors();

  if (userNameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters!");
  }

  if (passwordInput.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters!");
  }

  if (passwordInput.value.length !== passwordConfirmInput.value.length) {
    errorMessages.push("Passwords must match!");
  }

  if (!termsInput.checked) {
    errorMessages.push("You must accept the terms!");
  }

  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
});

function clearErrors() {
  errorList.innerHTML = "";
  errorContainer.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach(errorMessage => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorList.appendChild(li);
  });
  errorContainer.classList.add("show");
}
