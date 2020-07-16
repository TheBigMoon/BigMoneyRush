$(document).ready(function () {
	var sliderWidth = $('.slider').width();
    var show = sliderWidth > 1000 && sliderWidth < 1500 
    ? 4 : sliderWidth < 1000 
    ? 2 : 6;

    var w = $('.slider').width() / show;
    var l = $('.slide').length;
    
    $('.slide').width(w);
    $('.slide-container').width(w * l)
    
    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 2000);
});

$('.submitBtn').click(function() {
	let name = $('.form_name')[0].value;
	let surname = $('.form_surname')[0].value;
	let email = $('.form_email')[0].value;

	$('#popUpName').html(name || 'empty');
	$('#popUpSurname').html(surname || 'empty');
	$('#popUpEmail').html(email || 'empty');

	$('.form_name')[0].value = '';
	$('.form_surname')[0].value = '';
	$('.form_email')[0].value = '';
	
	$('.popUp_background').css("display", "flex")
})

$('.popUp_Btn').click(function() {
	$('.popUp_background').css("display", "none")
})

