import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGallery = (gallery) => {
  return gallery
    .map(({preview, original, description}) => {
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
        </div>
      `;
    })
    .join('');
};

const createGalleryHtml = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', createGalleryHtml);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  const onCloseModal = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener('keydown', onCloseModal);
}

galleryEl.addEventListener('click', onGalleryClick);
