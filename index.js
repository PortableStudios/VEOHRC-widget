import './style.scss';
import $ from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

var d = new Date();

$(function() {
	function ajaxSubmit(form) {

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
				console.log(xhr, resp, text);
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
