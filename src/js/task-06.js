function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountInput: document.querySelector("#controls input"),
  createElementsBtn: document.querySelector("[data-create]"),
  destroyElementsBtn: document.querySelector("[data-destroy]"),
};

refs.createElementsBtn.addEventListener("click", createBoxes);
refs.destroyElementsBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(refs.amountInput.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }

  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList = "box";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);

    boxSize += 10;
  }

  refs.amountInput.value = "";
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}
