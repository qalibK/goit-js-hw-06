const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}
