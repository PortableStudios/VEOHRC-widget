import './style.scss';
import $ from "jquery";

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