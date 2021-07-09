$(document).ready(function () {
  const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  effect: "coverflow",
        rotate: 30,
        slideShadows: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

});

  var swiperReview = new Swiper(".mySwiperR", {
       direction: 'horizontal',
  loop: true,
  
  
        navigation: {
          nextEl: ".swiper-button-next--next",
          prevEl: ".swiper-button-prev--prev",
        },
      });
      
  var menuButton = document.querySelector(".header-top-menu-button")
      menuButton.addEventListener("click", function () {

  console.log('click menu button')
  document.querySelector(".header-bottom").classList.toggle('header-bottom--mobile_visible');

  });

  var modalButton = $("[data-toggle=modal]")
  var modalButtonClose = $(".modal-window__close")
  modalButton.on("click", openModal );
  modalButtonClose.on("click", closeModal) ;

  function openModal() {
    var modalWindow = $(".modal-window");
    modalWindow.addClass("modal-window--visible")
  }

  function closeModal() {
    var modalWindow = $(".modal-window");
    modalWindow.removeClass("modal-window--visible")
  }

  // modal thanks

  var modalButtonThx = $("[data-thx=modals]")
  var modalButtonCloseThx = $(".modal-thanks__close")
  modalButtonThx.on("click", openModalThx );
  modalButtonCloseThx.on("click", closeModalThx) ;

  function openModalThx() {
    var modalWindowThx = $(".modal-thanks");
    modalWindowThx.addClass("modal-thanks--visible")
  }

  function closeModalThx() {
    var modalWindowThx = $(".modal-thanks");
    modalWindowThx.removeClass("modal-thanks--visible")
  }

  $(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.footer__title-send-message-input-phone').mask('+0 (000) 000-00-00');
  $('.modal-window__title-send-message-input-phone').mask('+0 (000) 000-00-00');
  
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});

 AOS.init();
  
 
});