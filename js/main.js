$( document ).ready(function() {

	// Minimize Navbar
	$(document).on("scroll", function() {

		if($(document).scrollTop()>100) {
			$(".navbar").addClass("scrolled");
			$(".navbar").addClass("nav-shadow");
			$(".navbar-brand img").addClass("w-50");
			$(".navbar-brand img").removeClass("w-75");
			$(".navbar-nav").addClass("mx-auto");
			$(".nav-link").addClass("text-color");
		} else {
			$(".navbar").removeClass("scrolled");
			$(".navbar").removeClass("nav-shadow");
			$(".navbar-brand img").removeClass("w-50");
			$(".navbar-brand img").addClass("w-75");
			$(".navbar-nav").removeClass("mx-auto");
			$(".nav-link").removeClass("text-color");
		}

	});

	// Smooth Scrolling

	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});


	// Hero Stars
	for (var i = 0; i < 7; i++) {
		$('#stars').append('<i><img src="assets/images/star.png" alt="Estrella"></i>');
	}

	// Class changer
	$(window).on('load, resize', function mobileViewUpdate() {
	    var viewportWidth = $(window).width();
	    if (viewportWidth <= 992) {
	        $(".card-body ul").addClass("text-center");
	        $(".card-body ul").css("padding-left", "0");
	    }else {
	      $(".card-body ul").removeClass();
	      $(".card-body ul").css("padding-left", "40");
	    }
	});

	// Validate Form
	$('#contactform').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: false
			},
			email: {
				required: true,
				email: true
			},
			comment: {
				required: true,
				minlength: 10
			}
		},
			messages: {
				name: {
					required: "Por favor ingresa tu nombre.",
					minlength: "Tú nombre debe tener al menos 2 caracteres"
				},
				email: {
					required: "Por favor ingresa tú email",
					email: "Por favor ingresa un email valido"
				},
				comment: {
					required: "Por favor ingresa un comentario",
					minlength: "Tú comentario debe contener al menos 10 caracteres"
				}
			}
	});
});
