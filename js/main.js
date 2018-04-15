$(function(){
	// On click toggle navigation open and closed
	$("#hamburger").on("click", function() {
		$("nav").slideToggle();
	});
	// Stops the nav bugging if window is re-sized when toggled open
	$(window).on("resize", function() {
		if ($(window).width() >= 1024 && !$("nav").is(":visible")) {
			$("nav").show();
		}
		else if ($(window).width() < 1024 && !$("nav").is (":visible")) {
			$("nav").hide();
		}
	});


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
		if ($(window).width() < 768) {
			$('.img-grid').slick();
		} else {
			$('.img-grid').slick('unslick');
		}
	}
	// Check window width on load
	checkWindowWidth();
	// Check window width on resize
	$(window).on('resize', function() {
		checkWindowWidth();
	});
	
});