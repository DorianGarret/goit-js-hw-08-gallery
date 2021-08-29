import popupImage from './gallery.js';
const galleryEl = document.querySelector('.js-gallery');

galleryEl.addEventListener('click', onOpenPopup);

function onOpenPopup(event) {
    event.preventDefault();

    const IMG = 'img';

    if (event.target.localName === IMG) {
        document.querySelector('.js-lightbox').classList.add('is-open');
    }

    openImageInPopup(event.target.dataset.source);
}

function openImageInPopup(source) {
    return popupImage.filter(({ original, description }) => {
        if (original === source) {
            document.querySelector('.lightbox__image').src = original;
            document.querySelector('.lightbox__image').alt = description;
        }
    });
}
