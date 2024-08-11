$(document).ready(function () {
  $(".buy-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".buy-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".buy-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".review-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".review-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".review-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    variableWidth: true,
    prevArrow: $(".info-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".info-slider-wrap .slider-navigation .slick-next"),
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".blog-slider2").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    prevArrow: $(".blog-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".blog-slider-wrap .slider-navigation .slick-next"),
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });
});
