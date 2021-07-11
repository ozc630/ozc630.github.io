var scrrn = document.body.clientWidth

function mediaQuery() {
  if (scrrn  < 998 && scrrn > 576) {
    var slider = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
      });
  }
  else if (scrrn  > 1200) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
      });
  }
  else if (scrrn <= 576 ) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
      });
  }
  else if (scrrn <= 1200 ) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
      });
  }
}
mediaQuery();


// window.addEventListener("resize",  function(event){
//     if (window.innerWidth <  700) { }
//         console.log(window.innerWidth)
// })
