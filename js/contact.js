jQuery(document).ready(function($){
	$("#submitted").click(function(){
		$('.text-green').hide();
	});
});
$(function() {
	$('.text-green').hide();
	'use strict';
	// Form
	var contactForm = function() {
		if($('#contact-form').length > 0) {
			$("#contact-form").validate({
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					subject: "required",
					phone: {
						required: true,
					},
				},
				messages: {
					name: "* The Name field is required.",
					email: "* Please enter a valid email address.",
					subject: "* The Subject field is required.",
					phone: "* The Phone field is required."
				},
				/* submit via ajax */
				submitHandler: function(form) {
					$('.text-green').hide();
					var $submit = $('.submitting'),
						waitText = 'Submitting...';
					$.ajax({
						type: "POST",
						url: $(form).attr('action'),
						data: $(form).serialize(),
						beforeSend: function() {
							$submit.css('display', 'block').text(waitText);
						},
						success: function(msg) {
							if(msg.success == true) {
								$('input[type=text]').val('');
								$('input[type=number]').val('');
								$('#message_new').val('');
								$('.text-green').fadeIn();
								$('.text-green').show();
								$submit.css('display', 'none');
							} else {
								$('.text-danger.font-bold').html(msg);
								$('.text-danger.font-bold').fadeIn();
								$('.text-green').hide();
								$submit.css('display', 'none');
							}
						},
						error: function() {
							$('.text-danger.font-bold').html("Something went wrong. Please try again.");
							$('.text-danger.font-bold').fadeIn();
							$submit.css('display', 'none');
						}
					});
				}
			});
		}
	};
	contactForm();
});