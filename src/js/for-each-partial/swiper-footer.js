import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 0,
  fade: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    grabCursor: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
