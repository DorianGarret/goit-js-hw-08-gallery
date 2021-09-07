import popupImage from './gallery.js';
const refs = {
    galleryEl: document.querySelector('.js-gallery'),
    closeBtn: document.querySelector('[data-action="close-lightbox"]'),
    lightbox: document.querySelector('.js-lightbox'),
    overlay: document.querySelector('.js-overlay'),
    ['lightbox-img']: document.querySelector('.lightbox__image'),
};

refs.galleryEl.addEventListener('click', onOpenPopup);
refs.closeBtn.addEventListener('click', onClosePopup);
refs.overlay.addEventListener('click', onClosePopup);

function onOpenPopup(event) {
    event.preventDefault();

    const IMG = 'img';

    if (event.target.localName !== IMG) {
        return;
    }

    refs.lightbox.classList.toggle('is-open');

    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('keydown', onKeyPressChangingImg);

    openImageInPopup(event.target);
}

function openImageInPopup(source) {
    refs['lightbox-img'].src = source.dataset.source;
    refs['lightbox-img'].alt = source.alt;
}

function onClosePopup() {
    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onKeyPressChangingImg);

    refs.lightbox.classList.toggle('is-open');
    refs['lightbox-img'].src = '';
    refs['lightbox-img'].alt = '';
}

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        onClosePopup();
    }
}

let currentIndex = 0;

function onKeyPressChangingImg(event) {
    const ARROW_KEY_CODE = {
        ARROW_LEFT: 'ArrowLeft',
        ARROW_RIGHT: 'ArrowRight',
    };

    if (event.code === ARROW_KEY_CODE.ARROW_RIGHT) {
        currentIndex += 1;
        if (currentIndex >= popupImage.length) {
            currentIndex = 0;
        }
    }

    if (event.code === ARROW_KEY_CODE.ARROW_LEFT) {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = popupImage.length - 1;
        }
    }

    refs['lightbox-img'].src = popupImage[currentIndex].original;
    refs['lightbox-img'].alt = popupImage[currentIndex].description;
}
