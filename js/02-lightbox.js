import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li  class="gallery__item" href="${original}">
            <a>
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        </li>`;
    })
    .join(" ");
}
new SimpleLightbox(".gallery__item", {
  captionDelay: 250,
});
