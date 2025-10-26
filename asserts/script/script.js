$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: { items: 1, nav: false },
      768: { items: 1, nav: false },
      992: { items: 1, nav: false },
    },
  });

  $("#next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $("#previous").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
