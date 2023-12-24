const categoriesListEl = document.querySelector("ul#categories");

const categoryItemsEl = categoriesListEl.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const categoryElement = categoryItem.querySelectorAll("ul > li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${ categoryElement.length }`);
});
