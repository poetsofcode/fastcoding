(function ($) {
  //dom ready start
  $(document).ready(function () {
    //gallery carousel
    $(".slider").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      smartSpeed: 500,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        769: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  });
  //dom ready end
})(jQuery);
