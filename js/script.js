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
    arrows: false,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
        },
      },
    ],
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

  $(".header-banner .info-item").on("click", function () {
    $(".header-banner .info-item").find("svg").removeClass("open");
    $(".header-banner .info-item").find(".hide-text").removeClass("show");
    $(this).find("svg").addClass("open");
    $(this).closest(".info-item").find(".hide-text").addClass("show");
  });

  $(".works-items .works-item").on("click", function () {
    $(".works-items .works-item").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".works-text p").removeClass("active");
    $(".works-text p").eq(index).addClass("active");
  });
  $(".buy .buttons button").on("click", function () {
    $(".buy .buttons button").removeClass("active");
    $(this).addClass("active");
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".main-menu li a").smoothScroll({
    speed: 800,
  });
});
