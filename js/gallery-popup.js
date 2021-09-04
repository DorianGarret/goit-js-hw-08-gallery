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

function onKeyPressChangingImg(event) {
    const ARROW_KEY_CODE = {
        ARROW_LEFT: 'ArrowLeft',
        ARROW_RIGHT: 'ArrowRight',
    };

    switch (event.code) {
        case ARROW_KEY_CODE.ARROW_RIGHT:
            showNextSlide(ARROW_KEY_CODE.ARROW_RIGHT);
            break;
        case ARROW_KEY_CODE.ARROW_LEFT:
            showPrevSlide(ARROW_KEY_CODE.ARROW_LEFT);
            break;
    }
}

function showNextSlide(right) {
    return console.log(right);
}

function showPrevSlide(left) {
    return console.log(left);
}
