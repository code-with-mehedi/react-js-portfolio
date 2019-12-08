(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------

		// effect list
		/*
			sliceDown
			sliceDownLeft
			sliceUp
			sliceUpLeft
			sliceUpDown
			sliceUpDownLeft
			fold
			fade
			random
			slideInRight
			slideInLeft
			boxRandom
			boxRain
			boxRainReverse
			boxRainGrow
			boxRainGrowReverse
		*/

		$('#ensign-nivoslider').nivoSlider({
			effect: 'random',
			slices: 15,
			boxCols: 8,
			boxRows: 4,
			animSpeed: 800,
			pauseTime: 5000,
			startSlide: 0,
			directionNav: true,
			controlNavThumbs: false,
			pauseOnHover: false,
			manualAdvance: false
		});
})(jQuery); 