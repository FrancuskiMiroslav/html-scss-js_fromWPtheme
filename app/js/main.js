console.log('main.js file loaded')

$(document).ready(function () {
  $('.slider__boxes').slick({
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false
  });
});