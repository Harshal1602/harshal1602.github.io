jQuery(document).ready(function($){
	$("#submitted").click(function(){
		$('.text-green-contact').hide();
	});

	function getQueryParams() {
		var queryParams = {};
		window.location.search.substring(1).split("&").forEach(function(pair) {
		  var [key, value] = pair.split("=");
		  queryParams[decodeURIComponent(key)] = decodeURIComponent(value || "");
		});
		return queryParams;
	  }
  
	  // Check if the 'message' query parameter is 'submitted'
	  var queryParams = getQueryParams();
	  if (queryParams.message === "submitted") {
		$("#success-message").show();
		$('html, body').animate({
		  scrollTop: $("#success-message").offset().top - 300
		}, 1000); // Scroll duration in milliseconds
  
		// Clean the URL
		var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
		window.history.replaceState({ path: newUrl }, '', newUrl);
	  }
  
	  // Form submission handler using AJAX
	  $("#contact-form").on("submit", function(e) {
		e.preventDefault(); // Prevent the default form submission
	  });
});