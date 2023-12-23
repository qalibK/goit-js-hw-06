const form = document.querySelector(".login-form");
const email = form.elements["email"].value.trim();
const password = form.elements["password"].value.trim();

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const inputs = document.querySelectorAll(".form-input");

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please fill in all fields");
    }
  }

  formData.forEach((email, password) => {
    const formEmail = email.trim();
    const formPassword = password.trim();
    console.log("Key", formEmail);
    console.log("Value", formPassword);
    // const elements = [];
    // elements.push(formEmail, formPassword);
    // console.log(elements);
  });

  resetForm();
}

function resetForm() {
  form.reset();
}
