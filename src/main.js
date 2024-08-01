import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconXUrl from './img/bi-x-octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../src/css/layout/simple-lightbox-window.css';
import iconsUrl from '../src/img/icons.svg';
import getImages from './js/pixabay-api.js';
import createCadsGallery from './js/render-functions.js';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader');
const searchForm = document.querySelector('.search-form');
const moreBtn = document.getElementById('morePageBtn');

moreBtn.addEventListener('click', onMoreBtnClick);

searchForm.addEventListener('submit', onSearchFormSubmit);

let currentPage = 1;

let slBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  nav: true,
  navText: [
    `<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${iconsUrl}#icon-chevron-left"></use>
        </svg>`,
    `<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${iconsUrl}#icon-chevron-right"></use>
        </svg>`,
  ],
  close: true,
  closeText: `
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${iconsUrl}#close-form"></use>
        </svg>`,
  enableKeyboard: true,
  showCounter: true,
  animationSlide: true,
  loop: true,
});

function onSearchFormSubmit(event) {
  event.preventDefault();
  loaderRef.style.display = 'block';
  const searchStr = event.currentTarget.search.value.trim();
  getImages(searchStr, currentPage)
    .then(data => refreshOnSuccess(data))
    .catch(msg => refreshOnError(msg));
}

function refreshOnError(msg) {
  searchForm.search.value = '';
  loaderRef.style.display = 'none';
  createErrMsg(msg);
  galleryRef.style.backgroundColor = '#f5f5f5';
  galleryRef.innerHTML = '';
  slBox.refresh();
}

function refreshOnSuccess(data) {
  searchForm.search.value = '';
  loaderRef.style.display = 'none';
  galleryRef.style.backgroundColor = '#ffffff';
  createCadsGallery(data, galleryRef);
  slBox.refresh();
}

function createErrMsg(msg) {
  iziToast.show({
    message: msg,
    messageColor: '#fafafb',
    messageSize: '16px',
    backgroundColor: '#fc5a5a',
    position: 'topRight',
    closeOnEscape: true,
    close: true,
    icon: 'Icomoon',
    iconUrl: `${iconXUrl}`,
    iconColor: '#fafafb',
  });
}

function onMoreBtnClick() {
  currentPage += 1;
  // this.#loader.style.display = 'block';
  // this.#moreBtn.style.visible = 'none';
  // this.#fnGetImages(this.#searchStr, nextPage)
  //   .then(images => {
  //     this.addData(images.hits, this.#maxPages, this.#searchStr);
  //   })
  //   .catch(error => {
  //     createErrMsg(error);
  //     this.#moreBtn.style.display = 'none';
  //   })
  //   .finally(() => {
  //     this.#loader.style.display = 'none';
  //     this.#boxRef && this.#boxRef.refresh();
  //     this.#moreBtn.style.visible = 'flex';
  //   });
}

