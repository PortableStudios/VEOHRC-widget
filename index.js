import './style.scss';
import $ from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

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

	// $("#contact").submit(function(event) {
	// 	console.log(event)
	// 	event.preventDefault()
	// });

	function ajaxSubmit(form){
		// fire ajax here
		console.log($(form).serialize());
		
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
	    console.log('captcha submit');
	}

	// grecaptcha.ready(function() {
	// 	grecaptcha.execute('6LfGRX0UAAAAAINiXRMozu84LiFGNjdKn-QRwgr4', {action: 'widget_form'})
	// 	.then(function(token) {
	// 	// Verify the token on the server.
	// 		console.log(token)
	// 	});
	// });	
});
