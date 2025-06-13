
// Цей рядок імпортує бібліотеку iziToast — це популярна JavaScript-бібліотека для створення гарних сповіщень (тостів) у вебдодатках.
import iziToast from 'izitoast';

// Цей рядок імпортує CSS-стилі iziToast.
// Вони потрібні, щоб зробити візуальне оформлення сповіщень відповідно до дизайну iziToast (кольори, анімації, розташування тостів тощо).
import 'izitoast/dist/css/iziToast.min.css';

// Бібліотека з гарними індикаторами завантаження css-loader
import './css/loader.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.search-form');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  currentPage = 1;
  currentQuery = event.target.elements.searchQuery.value.trim();

  if (!currentQuery) {
    iziToast.error({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  showLoader();     // Показуємо лоадер
  clearGallery();   // Очищаємо попередню галерею

  getImagesByQuery(currentQuery, currentPage)
    .then(data => {
      if (data.hits.length === 0) {

        //  Метод бібліотеки iziToast, який показує інформаційне (info) повідомлення. Якщо бекенд повертає порожній масив, це означає, що нічого підходящого не було знайдено. У такому випадку відображай повідомлення з текстом:
//  'Sorry, there are no images matching your search query. Please try again!'
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {

      
      iziToast.error({
                message: 'ERROR! Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();  // Завжди ховаємо лоадер, навіть при помилці
    });

  event.target.reset();
}


