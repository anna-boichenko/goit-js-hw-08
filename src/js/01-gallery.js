// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(galleryPhotos) {
    return galleryPhotos
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
        })
        .join('');
}

galleryContainer.addEventListener("click", evt => {
    evt.preventDefault();
  
}) 
  var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
console.log(galleryItems);
