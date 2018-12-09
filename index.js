import './style.scss';
import $ from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

var d = new Date();

$(function() {
	$("input").on('blur', function(event) {
		if($(this).val().length < 1 ) $(this).prev(".label").removeClass('focus');
	}).on('focus', function(event) {
		$(this).prev(".label").addClass('focus')
	});
	$("textarea").on('blur', function(event) {
		$("header").removeClass('hidden')
		$(".what_info").addClass('hidden')
	}).on('focus', function(event) {
		$(".what_info").removeClass('hidden')
		$("header").addClass('hidden')
	});

	function ajaxSubmit(form){

		// fire ajax here
		//console.log($(form).serialize());
		$.ajax({
			url: 'https://22q75fpfs0.execute-api.eu-west-1.amazonaws.com/default/veohrc-widget-api',
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify({
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				what: document.getElementById("what").value,
				where: document.getElementById("postcode").value,
				nocontact: document.getElementById("nocontact").checked,
				url: window.location.origin,
				time: d.toLocaleString()
			}),
			success: function success(result) {
				console.log(result);
			},
			error: function error(xhr, resp, text) {
				console.log(xhr, resp, text);
			}
		});

		// on success
		ajaxSuccess()

		// on fail
		//ajaxFail()
	}

	function ajaxSuccess(){
		$("#contact").slideUp()
	    $(".submitted").fadeIn();
	}

	function ajaxFail(){
	    $(".failed").fadeIn();
	}

	$("#contact").validate({
	  submitHandler: function(form) {
	    ajaxSubmit(form);
	  }
	});

	function onSubmit() {

	}

	// grecaptcha.ready(function() {
	// 	grecaptcha.execute('6LfGRX0UAAAAAINiXRMozu84LiFGNjdKn-QRwgr4', {action: 'widget_form'})
	// 	.then(function(token) {
	// 	// Verify the token on the server.
	// 		console.log(token)
	// 	});
	// });
});
