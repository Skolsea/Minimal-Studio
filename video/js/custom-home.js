(function($) { "use strict";


	
	/* Scroll Too */
	
	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;

			$('html, body').animate({scrollTop:target_top}, 1000);
		});
	});

	
 	//Parallax
	
	$('.parallax-home').parallax("50%", 0.4);
		
	
	//Tooltip
	
	$(".tipped").tipper();	

 	
	/* Quotes Carousel */
	
	$(document).ready(function() {
	 
	  $("#owl-quotes").owlCarousel({
	 
		  navigation : false,
		  autoPlay: 5000,
		  slideSpeed : 800,
		  paginationSpeed : 800,
		  singleItem:true
	 
	  });
	 
	});
	
	/* Logos Carousel */
	
	$(document).ready(function() {
	 
	  var owl = $("#owl-logos");
	 
	  owl.owlCarousel({
		  navigation : false,
		  autoPlay: 6000,
		  pagination : false,
		  items : 6, //6 items above 1000px browser width
		  itemsDesktop : [1000,4], //4 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0
		  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	  });
	 
	});	
	
	
  })(jQuery); 