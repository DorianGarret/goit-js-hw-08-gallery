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
refs.overlay.addEventListener('click', onBackdropClick);

function onOpenPopup(event) {
    event.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('keydown', onKeyPressChangingImg);

    const IMG = 'img';

    if (event.target.localName === IMG) {
        refs.lightbox.classList.add('is-open');
    }

    openImageInPopup(event.target.dataset.source);
}

function openImageInPopup(source) {
    return popupImage.filter(({ original, description }) => {
        if (original === source) {
            refs['lightbox-img'].src = original;
            refs['lightbox-img'].alt = description;
        }
    });
}

function onClosePopup() {
    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onKeyPressChangingImg);

    refs.lightbox.classList.remove('is-open');
    refs['lightbox-img'].removeAttribute('src');
    refs['lightbox-img'].removeAttribute('alt');
}

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        onClosePopup();
    }
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
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
