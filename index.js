import './style.scss';
import $, { post } from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

var d = new Date();

$(function() {
	function ajaxSubmit(form) {

		const postcode = document.getElementById("postcode");
		const numbers = /^[0-9]+$/;

		if (postcode.value.length === 4 || postcode.value.match(numbers)) {
			$(".postcode-error").fadeOut();
			$("#postcode").removeClass("error")
		}

		if (postcode.length !== 4 || !postcode.match(numbers)) {
			$(".postcode-error").fadeIn();
			$("#postcode").addClass("error")
			return;
		}

		// fire ajax here
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
				ajaxSuccess();
			},
			error: function error(xhr, resp, text) {
				ajaxFail();
			}
		});
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
});
