import Swiper from 'swiper';
import '/node_modules/swiper/swiper.css';

if (window.innerWidth > 1199) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
}
window.addEventListener('resize', function () {
  if (window.innerWidth > 1199) {
    const mySwiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
    });
  } else {
    if (mySwiper) {
      mySwiper.destroy();
    }
  }
});
