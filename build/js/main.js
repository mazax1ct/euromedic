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

//обработчик клика по кнопке поиска, в случае если поле поиска пустое
$(".search__button").click(function() {
  if(!$('.search__input').val()){
    $('.search__input').focus();
    return false;
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
