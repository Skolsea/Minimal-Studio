(function($) { "use strict";
		
	
	//Tooltip
	
	$(".tipped").tipper();	

	
 	//Parallax
	
	$('.parallax-about').parallax("50%", 0.4);
	$('.parallax-about-1').parallax("50%", 0.4);

	
 	//Facts Counter 
	
	jQuery(document).ready(function($){
        $('.counter-facts').counterUp({
            delay: 100,
            time: 3000
        });
    });
	

		
  })(jQuery);