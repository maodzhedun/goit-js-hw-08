import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryHTMLMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryHTMLMarkup(galleryItems) { 
  return galleryItems.map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`)
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});