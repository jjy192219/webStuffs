
( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
 
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      adjustWindow();

			  $body.removeClass('loading').addClass('loaded');		  
		}, 800);
	});
	
	
	function adjustWindow(){

	    winH = $window.height();

	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    $slide.height(winH);
	    
	    
	}
		
} )( jQuery );