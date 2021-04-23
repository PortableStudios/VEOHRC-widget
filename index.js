import './style.scss';
import $ from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

const d = new Date();
const postcode = document.querySelector("#postcode");
postcode.addEventListener("keydown", function() {
	const isNotNumber = isNaN(Number(postcode.value));
	if (!isNotNumber) {
		$(".postcode-error").fadeOut();
		$("#postcode").removeClass("error")
	} 
	if (isNotNumber) {
		$(".postcode-error").fadeIn();
		$("#postcode").addClass("error")
		return;
	}
})

$(function() {
	function ajaxSubmit(form) {
		const isNotNumber = isNaN(Number(postcode.value));

		if (postcode.value.length !== 4 || isNotNumber) {
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
