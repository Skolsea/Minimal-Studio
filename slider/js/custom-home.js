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

 	
	/* Top Carousel */
	
	$(document).ready(function() {
	
	  var time = 7; // time in seconds
	 
	  var $progressBar,
		  $bar, 
		  $elem, 
		  isPause, 
		  tick,
		  percentTime;
	 
		//Init the carousel
		$("#owl-top").owlCarousel({
			pagination : false,
			transitionStyle : "backSlide",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			afterInit : progressBar,
			afterMove : moved,
			startDragging : pauseOnDragging			
			
		});

		
		//Init progressBar where elem is $("#owl-demo")
		function progressBar(elem){
		  $elem = elem;
		  //build progress bar elements
		  buildProgressBar();
		  //start counting
		  start();
		}
	 
		//create div#progressBar and div#bar then prepend to $("#owl-demo")
		function buildProgressBar(){
		  $progressBar = $("<div>",{
			id:"progressBar"
		  });
		  $bar = $("<div>",{
			id:"bar"
		  });
		  $progressBar.append($bar).prependTo($elem);
		}
	 
		function start() {
		  //reset timer
		  percentTime = 0;
		  isPause = false;
		  //run interval every 0.01 second
		  tick = setInterval(interval, 10);
		};
	 
		function interval() {
		  if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		  }
		}
	 
		//pause while dragging 
		function pauseOnDragging(){
		  isPause = true;
		}
	 
		//moved callback
		function moved(){
		  //clear interval
		  clearTimeout(tick);
		  //start again
		  start();
		}
	 
		//uncomment this to make pause on mouseover 
		// $elem.on('mouseover',function(){
		//   isPause = true;
		// })
		// $elem.on('mouseout',function(){
		//   isPause = false;
		// })
 	 
	  var owl = $("#owl-top");
	 
	  owl.owlCarousel();
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	 
	});	

 	
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