const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const inputs = document.querySelectorAll(".form-input");

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please fill in all fields");
      return;
    }
  }

  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value.trim();
  });

  console.log("Form Values: ", formValues);

  resetForm();
}

function resetForm() {
  form.reset();
}

const inputEl = document.querySelectorAll(".form-input");

inputEl.forEach(function (element) {
  element.addEventListener("focus", function onInputFocus(event) {
    element.setAttribute("placeholder", "Type area");
  }),
    element.addEventListener("blur", function onInputBlur(event) {
      element.removeAttribute("placeholder");
    });
});

