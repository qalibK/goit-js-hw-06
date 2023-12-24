function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorOutput: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener(`click`, onChangeColor);

function onChangeColor(event) {
  const body = document.body;

  const randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;
    
    refs.colorOutput.textContent = randomColor;
}

console.log(refs.changeColorBtn);
