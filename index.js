import './style.scss';
import $ from "jquery";

$("input").on('blur', function(event) {
	if($(this).val().length < 1 ) $(this).prev(".label").removeClass('focus');
}).on('focus', function(event) {
	$(this).prev(".label").addClass('focus')
});
$("textarea").on('blur', function(event) {
	$("header").removeClass('hidden')
}).on('focus', function(event) {
	$("header").addClass('hidden')
});