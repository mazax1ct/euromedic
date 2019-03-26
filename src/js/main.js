//компенсация высоты окна при скрытии адресной строки для мобильных
window.onresize = function(){
  document.body.height = window.innerHeight;
};
window.onresize();

//открытие/закрытие главного меню
$(".js-menu-opener").click(function() {
  $(this).toggleClass("is-active");
  $(".main-menu").toggleClass("is-open");
  $("body").toggleClass("overflow");
});

//открытие/закрытие поиска
$(".js-search-opener").click(function() {
  $(this).toggleClass("is-active");
  $(".header__top").toggleClass("search-open");
  $("body").toggleClass("overflow");
});

//обработчик клика по кнопке поиска, в случае если поле поиска пустое
$(".search__button").click(function() {
  if(!$('.search__input').val()){
    $('.search__input').focus();
    return false;
  }
});

//потеря фокуса поля поиска
$('.search__input').blur(function() {
  if ($(this).val() != 0) {
    $(this).addClass('focus');
  } else {
    $(this).removeClass('focus');
  }
});

//залипание меню при скролле (из-за позиционирования приходится работать с постоянными числами)
$(window).scroll(function () {
  var breake;
  if($('body').width() > 991 && $('body').width() < 1200) {
    breake = 176;
  } else if($('body').width() > 1199) {
    breake = 200;
  }

  if ($(this).scrollTop() > breake) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

$(document).ready(function () {
  //инициализация кастомного select
  setTimeout(function() {
    $('.js-select').styler();
  }, 100);

  //слайдер акций
  if ($('.js-actions-slider').length) {
    $('.js-actions-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
  }
});
