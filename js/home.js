jQuery(document).ready(function($){
    var owl = $("#my-portfolio");
    owl.owlCarousel({
        autoplay :false,
        autoplayHoverPause: true,
        touchDrag  : false,
         mouseDrag  : false,
         responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
    });

    var owl = $("#testimonies");
    owl.owlCarousel({
        items :2,
        loop: true,
        margin: 20,
        responsive: {
            0: {
              items: 1
            },
            1024: {
              items: 1
            },
            1200: {
              items: 2
            }
          }
    });
});