import './style.scss';
import $ from "jquery";
import validate from "jquery-validation/dist/jquery.validate.min.js";

const validatePostcode = (postcode) => {
	const regexFourNumbers = /^[0-9]{4}$/
	const trimmedPostcode = postcode.trim();
	const isValidPostcode = trimmedPostcode.match(regexFourNumbers);
	return isValidPostcode;
}

const postcode = document.querySelector("#postcode");
postcode.addEventListener("keyup", function() {
	const isValidPostcode = validatePostcode(postcode.value);
	if (isValidPostcode) {
		$(".postcode-error").fadeOut();
		$("#postcode").removeClass("error")
	}
	if (!isValidPostcode) {
		$(".postcode-error").fadeIn();
		$("#postcode").addClass("error")
		return;
	}
})

$(function() {
	function ajaxSubmit(form) {
		const isValidPostcode = validatePostcode(postcode.value);

		if (!isValidPostcode) {
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
				time: (new Date()).toLocaleString()
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
		$("#contact").slideUp();
		$(".submitted").fadeIn();

		if (typeof window.gtag !== 'undefined') {
				// CRT form submission
				window.gtag('event', 'form_submit', {
					'Host domain': window.document.referrer,
					'event_category': 'community_reporting_tool'
				});
		}
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
