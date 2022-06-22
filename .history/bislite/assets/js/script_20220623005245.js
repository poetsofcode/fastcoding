(function ($) {
  //dom ready start
  $(document).ready(function () {
    //testimonial carousel
    $(".slider").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      smartSpeed: 500,
      // responsive: true,
    });
  });
  //dom ready end
})(jQuery);
