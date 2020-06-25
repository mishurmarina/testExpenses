$(document).ready(function(){
  // $(".modal").show(3000);
  $('.main_btna').on('click', function(){
    // $('.modal').show(3000);
    AnimateOverlayModal();
  });
  $('.main_nav nav > ul li a').on('click', function(){
     AnimateOverlayModal();
  });
  $('.main_btn').on('click', function(){
    //$('.main').hide(300);
   // $(".main").css("background-image", "none"); // Для скрытия
    AnimateOverlayModal();
  });

  function AnimateOverlayModal() {
    $('.modal').show(3000);
    $('.overlay').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 3000);
  }

  $('.close').on('click', function () {
    $('.modal').hide(3000);
    $('.overlay').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 3000);
  });
  
});