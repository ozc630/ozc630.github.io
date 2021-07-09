var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: ".swiper-button-next__content-swiper",
    prevEl: ".swiper-button-prev__content-swiper",
  },

  
});

var swiperAction = new Swiper(".mySwiperAction", {
        slidesPerView: 4,
        spaceBetween: 30,

        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
