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


    // Preloder
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});
    });
    
    //mobile menu
    $('nav#dropdown').meanmenu();

    //sticky menu activation code 
    var Sticky = $('#sticky')
    $(window).on('scroll', function(){
        if( $(window).scrollTop()>80 ){
            Sticky.addClass('stick');
            } else {
            Sticky.removeClass('stick');
        }
    });

 //One Page Navigatiopn active
    $('#nav').onePageNav({
        scrollOffset: 70
    });


    // Team Slider // 
    $('#slide-team').owlCarousel( {
	        loop: false, 
	        margin: 10, 
	        dots: false, 
	        nav: false, 
	        autoplayHoverPause: false, 
	        autoplay: false, 
	        smartSpeed: 1500, 
	        navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', 
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'], 
	        responsive: {
            0: {
                items: 1, 
                center: false
            }
            , 480: {
                items: 1, 
                center: false
            }
            , 600: {
                items: 1, 
                center: false
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 3
            }
            , 1200: {
                items: 4
            }
        }
	});


    // Testimonial Carousel
    $('.testimonial-caro').owlCarousel({
        animateIn:'pulse',
        animateOut:'fadeOutLeft',
        autoplay: true,
        loop:true,
        nav:false,
        dots:true,
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Blog Slider // 
    $('#slide-news').owlCarousel( {
	        loop: true,
	        margin: 15,
	        dots: false,
	        nav: false,
	        autoplayHoverPause: false,
	        autoplay: true,
	        smartSpeed: 1500,
	        navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', 
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'], 
	        responsive: {
            0: {
                items: 1, 
                center: false
            }
            , 480: {
                items: 1, 
                center: false
            }
            , 600: {
                items: 1, 
                center: false
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 3
            }
            , 1200: {
                items: 3
            }
        }
	});

    
    //scrollUp
    $.scrollUp( {
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    //======================
    // Magnify popup jquery
    //======================
    $('.popup-gallery').magnificPopup( {
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    }
    );

    //======================
    // Counterup
    //======================
    if($('.about-counter').length > 0) {
        $('.about-counter').counterUp( {
            delay: 50, time: 3000
        });
    }


    //======================
    // Progress bar
    //======================
    if($('.progress-bar1').length > 0) {
        $(".progress-bar1").loading();
    }
    
    //======================
    // Mixit up
    //======================

    if($('.work-list').length > 0) {
        var mixer = mixitup('.work-list', {
            selectors: {
                control: '[data-mixitup-control]'
            }
        });
    }

    //==============================
    // Download Resume text change
    //==============================

    // if($('.download-cv').length > 0) {
    //     var prev; 
    //     $(document).on('mouseenter','.download-cv', function (event) {
    //         prev = $(this).text();
    //         $( this ).text("Download");
    //     }).on('mouseleave','.download-cv',  function(){
    //         $(this).text(prev);
    //     });
    // }

    //========================
    // Our Incredible Skill
    //========================

    if ($(".skill-set").length > 0)
    {
        $('.skill-set').appear();
        $('.skill-set').on('appear', loadSkills);
    }
    var count = true;
    function loadSkills() {
        $(".single-skill").each(function() {
            var datacount = $(this).attr("data-limit");
            $(".skill", this).animate({'width': datacount + '%'}, 2000);
            if (count)
            {
                $(this).find('.parcent').each(function() {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        count = false;
    }

    //========================
    // Smooth Scroll
    //========================
    if($('a[href*="#about-sec"]').length > 0) {
        var scroll = new SmoothScroll('a[href*="#about-sec"]');
    }

    //========================
    // Typed js
    //========================
    if($('.typed').length > 0) {
        var typed = new Typed('.typed', {
            strings: ["Designer &amp; Developer"],
            typeSpeed: 80,
            backSpeed: 80,
            showCursor: false,
            loop: true
        });
    } 

    //========================
    // Color Switcher 
    //========================
    if($('.colorSwitcher').length > 0) {
        $('.colorSwitcher i').on('click', function() {
            $(this).parent().toggleClass('enabled');
        });
        $('.colorSwitcher ul li').on('click', function(){
            var path = $(this).data('path');
            $('#colorPreset').attr('href', path);
        });
    }

})(jQuery);