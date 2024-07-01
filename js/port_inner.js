jQuery(document).ready(function($){
	var owl = $("#testimonies_port");
    owl.owlCarousel({
        items :2,
        loop: true,
        margin: 40,
        responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1200: {
              items: 2
            }
          }
    });
    //Sub Menu Active
	if($("body").hasClass('portfolios')) {
		$(".dropdown.has-sub").next().addClass("current");
    $("ul.footer-list02.explore li:eq(1)").addClass("current");
	}
});