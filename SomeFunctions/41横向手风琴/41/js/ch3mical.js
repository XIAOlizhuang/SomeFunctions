$(document).ready(function() {
	var $centerwell_first = $('#centerwell li:first');
	$centerwell_first.animate({width: '318px'}, 300);
	$centerwell_first.find('h3').animate({backgroundPosition: '-72px'}, 300);
	
	$('#centerwell li').click(function() {
		window.open($(this).find('a').attr('href'));
	});

	$('#centerwell li').mouseenter(function() {
		if(!$(this).is(':animated')){
			$(this).animate({width: '318px'}, 300).siblings().animate({width: '72px'}, 300);
			$(this).find('h3').animate({backgroundPosition: '-72px'}, 300).parent().siblings().find('h3').animate({backgroundPosition: '0px'}, 300);
		}
	});
});