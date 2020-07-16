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