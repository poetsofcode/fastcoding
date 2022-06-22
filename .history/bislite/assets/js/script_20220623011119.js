(function ($) {
  //dom ready start
  $(document).ready(function () {
    //testimonial carousel
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
        480: {
          items: 3,
        },
        769: {
          items: 6,
        },
      },
    });
  });
  //dom ready end
})(jQuery);