import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconXUrl from './img/bi-x-octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../src/css/layout/simple-lightbox-window.css';
import iconsUrl from '../src/img/icons.svg';
import getImages from './js/pixabay-api.js';
import createCadsGallery from './js/render-functions.js';
import { scrollingDown } from './js/render-functions.js';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader');
const searchForm = document.querySelector('.search-form');
const moreBtn = document.getElementById('morePageBtn');

moreBtn.addEventListener('click', onMoreBtnClick);
moreBtn.style.display = 'none';

searchForm.addEventListener('submit', onSearchFormSubmit);

let currentPage = 1;
let maxPages = 0;
let searchStr = '';
let images = [];

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

async function onSearchFormSubmit(event) {
  event.preventDefault();
  searchStr = event.currentTarget.search.value.trim();
  if (searchStr === '') return;
  reset();
  loaderRef.style.display = 'block';
  try {
    const data = await getImages(searchStr, currentPage);
    refreshOnSuccess(data);
  } catch (error) {
    refreshOnError(error);
  } finally {
    loaderRef.style.display = 'none';
  }
}

function refreshOnError(msg) {
  searchForm.search.value = '';
  loaderRef.style.display = 'none';
  createErrMsg(msg);
  galleryRef.style.backgroundColor = '#f5f5f5';
  galleryRef.innerHTML = '';
  slBox.refresh();
  moreBtn.style.display = 'none';
}

function refreshOnSuccess(data) {
  galleryRef.style.backgroundColor = '#ffffff';
  maxPages = Math.ceil(data.totalHits / 15);
  images.push(...data.hits);
  currentPage += 1;
  createCadsGallery(images, galleryRef);
  slBox && slBox.refresh();
  scrollingDown();
  updateMoreBtn();
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

async function onMoreBtnClick() {
  loaderRef.style.display = 'block';
  moreBtn.style.visible = 'none';
  try {
    const data = await getImages(searchStr, currentPage);
    refreshOnSuccess(data);
  } catch (error) {
    refreshOnError(error);
  } finally {
    loaderRef.style.display = 'none';    
  }
}

function updateMoreBtn() {
  moreBtn.style.display = images.length > 0 ? 'block' : 'none';
  if (currentPage > maxPages) {
    moreBtn.style.display = 'none';
    if (maxPages > 1) {
      createErrMsg(
        "We're sorry, but you've reached the end of search results."
      );
    }
  }
}

function reset() {
  currentPage = 1;
  maxPages = 0;
  images = [];
}
