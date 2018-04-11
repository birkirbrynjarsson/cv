var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
		$(this).animate({
			width: newWidth,
		}, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
		$(this).animate({
			height: 14,
		}, 2000);
	});
	$('.my-age').html(getAge('May 2, 1988 00:00:01'));
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}