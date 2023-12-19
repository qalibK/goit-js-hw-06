const ingredientPickerOptions = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientListEl = document.querySelector("#ingredients");

const ingredientElements = ingredientPickerOptions.map((option) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = option;
  listItemEl.classList.add("item");

  return listItemEl;
});

ingredientListEl.append(...ingredientElements);
