

$(document).ready(function() {


	$('#navbar a').smoothScroll({
		speed: 'auto',
		autoCoefficient: 1.5
	});
	
	adjust = function() {
	  	if ($(window).scrollTop() <= 5) {
	        $('#navbar, #logo, #logo-other').removeClass('opaque');
	        $('.nav-text').removeClass('dark-nav-text');
	    } else {
	        $('#navbar, #logo, #logo-other').addClass('opaque');
	        $('.nav-text').addClass('dark-nav-text');
	    }
	}

	// elems = ['#section-faq']

	// elems.forEach(function(e) {
	// 	$(e).scrollspy({
	// 		min: $(e).offset().top,
	// 	    onEnter: function(element, position) {
	// 	        $($(element).attr('nav-link')).addClass('active');
	// 	        console.log('enter', e)
	// 	    },
	// 	    onLeave: function(element, position) {
	// 	        $($(element).attr('nav-link')).removeClass('active');
	// 	    }
	// 	});
	// });
	
	adjust();

	$(window).scroll(function(scroll) {
		adjust();
	});
});