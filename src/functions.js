$(document).ready(function() {
	$('.height-full').css({
		'min-height' : function() { return $(window).height() * 1.0; }
	});
	$('.height-3-4').css({
		'min-height' : function() { return $(window).height() * 0.75; }
	});
	$('.height-half').css({
		'min-height' : function() { return $(window).height() * 0.5; }
	});
	$('.grid-rectangle').each(function() {
		$(this).height( $(this).width() * 0.75 );
	});
	$('.vertical-middle').css({
		'margin-top' : function() { return -$(this).outerHeight() / 2; }
	});




	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");

	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() );
		});
		$('#content').each(function() {
			$(this).width( $(window).width() );
		});
*/
	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() - 144);
		});
		$('#content').each(function() {
			$(this).width( $(window).width() - 144);
		});
*/
	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() - 160);
		});
		$('#content').each(function() {
			$(this).width( $(window).width() - 160);
		});
*/
	}
});








$(window).resize(function() {
	$('.height-full').css({
		'min-height' : function() { return $(window).height() * 1.0; }
	});
	$('.height-3-4').css({
		'min-height' : function() { return $(window).height() * 0.75; }
	});
	$('.height-half').css({
		'min-height' : function() { return $(window).height() * 0.5; }
	});
	$('.grid-rectangle').each(function() {
		$(this).height( $(this).width() * 0.75 );
	});
	$('.vertical-middle').css({
		'margin-top' : function() { return -$(this).outerHeight() / 2; }
	});




	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");

	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() );
		});
		$('#content').each(function() {
			$(this).width( $(window).width() );
		});
		$('#page-container > #footer').each(function() {
			$(this).width( $(window).width() );
		});
*/
	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() - 144);
		});
		$('#content').each(function() {
			$(this).width( $(window).width() - 144);
		});
		$('#page-container > #footer').each(function() {
			$(this).width( $(window).width() - 144);
		});
*/
	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");
/*
		$('#page-container > #header').each(function() {
			$(this).width( $(window).width() - 168);
		});
		$('#content').each(function() {
			$(this).width( $(window).width() - 168);
		});
		$('#page-container > #footer').each(function() {
			$(this).width( $(window).width() - 168);
		});
*/
	}
}).resize();








$(window).scroll(function() {
	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");

	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");
// Add shadow to header + stickiness after scroll away from position 0
/*
		if($(this).scrollTop() > 1) {
			$('#nav-primary').addClass('scroll-shadow');
		} else {
			$('#nav-primary').removeClass('scroll-shadow');
		}
*/
	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");

	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");

	}
});
