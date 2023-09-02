import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    slidesPerView: 'auto',
    loop: true,
    speed:10000,
    slidePerView:3,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,//默認為true，用戶操作swiper之後，是否禁止autoplay
    },
  });