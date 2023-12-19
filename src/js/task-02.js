const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];

// const galleryContainerEl = document.querySelector("ul.gallery");

// const galleryMarkupEl = images
//   .map(
//     (image) => `
//   <li>
//     <img src="${image.url}" alt="${image.alt}">
//   </li>
// `
//   )
//   .join("");

// galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkupEl);

// --------------------------------------


// const galleryElements = [];

// const galleryContainerEl = document.querySelector("ul.gallery");

// for (let i = 0; i < images.length; i += 1) {
//   const image = images[i];

//   const galleryItemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.alt = image.alt;
//   imageEl.src = image.url;

//   galleryItemEl.append(imageEl);

//   galleryElements.push(galleryItemEl);
// }

// galleryContainerEl.append(...galleryElements);



// --------------------------------------



// const galleryContainerEl = document.querySelector("ul.gallery");

// const galleryElements = images.map((image) => {
//   const galleryItemEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.alt = image.alt;
//   imageEl.src = image.url;

//   galleryItemEl.append(imageEl);

//   return galleryItemEl;
// });

// galleryContainerEl.append(...galleryElements);


// --------------------------------------

const galleryContainerEl = document.querySelector("ul.gallery");

const makeGallery = images => {
  return images.map(image => {
    const galleryItemEl = document.createElement("li");
    const imageEl = document.createElement("img");
    imageEl.alt = image.alt;
    imageEl.src = image.url;

    galleryItemEl.append(imageEl);

    return galleryItemEl;
  });
};

const galleryElements = makeGallery(images);
galleryContainerEl.append(...galleryElements);
