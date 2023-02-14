import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
          </a>
        </div>`;
    })
    .join(" ");
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const selectedImg = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`<img src="${selectedImg}">`);

  instance.show();
});
