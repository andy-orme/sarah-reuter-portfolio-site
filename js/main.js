$(function(){

	// Navigation
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );

	// // On click toggle navigation open and closed
	// $("#hamburger").on("click", function() {
	// 	$("nav").slideToggle();
	// });
	// // Stops the nav bugging if window is re-sized when toggled open
	// $(window).on("resize", function() {
	// 	if ($(window).width() >= 1024 && !$("nav").is(":visible")) {
	// 		$("nav").show();
	// 	}
	// 	else if ($(window).width() < 1024 && !$("nav").is (":visible")) {
	// 		$("nav").hide();
	// 	}
	// });


	// Homepage hero heading waypoint
	var heroHeading = $(".hero-heading");

	heroHeading.waypoint(function(){
		heroHeading.addClass("js-hero-heading-animate")
	}, {offset:"25%"});

	// Homepage image grid waypoint
	var imgGrid = $(".img-grid");

	imgGrid.waypoint(function(){
		imgGrid.addClass("js-img-grid-animate")
	}, {offset:"50%"});

	// Homepage chevrons waypoint
	var chevrons = $(".chevrons");

	chevrons.waypoint(function(){
		chevrons.addClass("js-chevrons-animate")
	}, {offset:"50%"});

	// Homepage chevrons waypoint
	var buttonAnimation = $(".button-animation");

	buttonAnimation.waypoint(function(){
		buttonAnimation.addClass("js-button-container-animate")
	}, {offset:"80%"});

	// Homepage signposting waypoint
	var signPosting = $(".sign-posting");

	signPosting.waypoint(function(){
		signPosting.addClass("js-sign-posting-animate")
	}, {offset:"80%"});

	// About me featured projects waypoint
	var projects = $(".projects");

	projects.waypoint(function(){
		projects.addClass("js-projects-animate")
	}, {offset:"80%"});

	// About me insta grid waypoint
	var instaGrid = $(".insta-grid");

	instaGrid.waypoint(function(){
		instaGrid.addClass("js-insta-grid-animate")
	}, {offset:"80%"});

	// My work work row 1 waypoint
	var workRow1 = $(".work-row-1");

	workRow1.waypoint(function(){
		workRow1.addClass("js-work-row-animate")
	}, {offset:"65%"});

	// My work work row 2 waypoint
	var workRow2 = $(".work-row-2");

	workRow2.waypoint(function(){
		workRow2.addClass("js-work-row-animate")
	}, {offset:"80%"});

	// My work work row 3 waypoint
	var workRow3 = $(".work-row-3");

	workRow3.waypoint(function(){
		workRow3.addClass("js-work-row-animate")
	}, {offset:"80%"});


	// Slick carousel function for when the screen is less than 768px
	function checkWindowWidth() {
		var $carousel = $('.img-grid');

		if ($(window).width() >= 768) {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		} else {
			if (!$carousel.hasClass('slick-initialized')) {
			  $carousel.slick({
			  	prevArrow: $('.prev'),
      		nextArrow: $('.next')
			  });
			}
		}
	}
	// Check window width on load
	checkWindowWidth();
	// Check window width on resize
	$(window).on('resize', function() {
		checkWindowWidth();
	});

	$(".my-work-btn").click(function(event){
	    event.preventDefault();
	});
	
});