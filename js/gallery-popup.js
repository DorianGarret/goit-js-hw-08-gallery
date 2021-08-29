import popupImage from './gallery.js';
const galleryEl = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

galleryEl.addEventListener('click', onOpenPopup);
closeBtn.addEventListener('click', onClosePopup);

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

function onClosePopup() {
    document.querySelector('.js-lightbox').classList.remove('is-open');
    document.querySelector('.lightbox__image').removeAttribute('src');
    document.querySelector('.lightbox__image').removeAttribute('alt');
}
