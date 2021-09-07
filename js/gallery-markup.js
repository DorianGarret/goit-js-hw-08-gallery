import galerry from './gallery.js';

const galleryContainer = document.querySelector('.js-gallery');

galleryContainer.insertAdjacentHTML('beforeend', getMarkup(galerry));

function getMarkup(galerry) {
    return galerry
        .map(({ preview, original, description }, index) => {
            return `
            <li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"
                data-source="${original}"
                alt="${description}"/>
              </a>
            </li>`;
        })
        .join('');
}
