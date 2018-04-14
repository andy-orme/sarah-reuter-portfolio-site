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


	// Waypoints
	var imgGrid = $(".img-grid");

	imgGrid.waypoint(function(){
		imgGrid.addClass("js-img-grid-animate")
	}, {offset:"50%"});


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