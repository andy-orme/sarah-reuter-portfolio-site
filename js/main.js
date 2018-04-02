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
});