(function ($) {
 "use strict";

/*----------------------------
    jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
    wow js active
------------------------------ */
    new WOW().init();
 
/*----------------------------
    Product Carousel active
------------------------------ */  
    $(".product-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });
    
/*----------------------------
    Blog Carousel active
------------------------------ */  
    $(".blog-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 3,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
    });
    
/*----------------------------
    Brand Carousel active
------------------------------ */  
    $(".brand-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 6,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });    
    
/*----------------------------
    Product Details Carousel Active
------------------------------ */  
    $(".p-details-slider").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,4],
        itemsMobile : [479,3]
    }); 
    
/*----------------------------
    Upsell Product Carousel Active
------------------------------ */  
    $(".upsell-product-details-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 3,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });

/*----------------------------
    Price-slider active
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: 40,
        max: 600,
        values: [ 60, 570 ],
        slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
    ScrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	  
    
/*--------------------------
    Countdown
---------------------------- */	
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>days</div><div class="cdown hours"><span class="counting">%-H</span>hrs</div><div class="cdown minutes"><span class="counting">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
        });
    });	
    
/*--------------------------
    Sticky Js 
---------------------------- */	
    $("#sticker").sticky({topSpacing:0});
    
    
/*----------------------------------------------
    Delivery Old and New Address toggle function
------------------------------------------------*/
	$("#ship-new-address").on('click', function(){
        $(".ship-new-address-info").slideToggle();
    });
    
 /*----------------------------------------------
    Personal Address toggle function
-----------------------------------------------*/
    $("#add-new-address").on('click', function(){
        $("#add-new-address-info").slideToggle();
    });
//плавный скролинг
    $(document).ready(function(){
    $("#menuu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс 
        //top-65- растояние от шапки вниз для видибельности заголовка
        $('body,html').animate({scrollTop: top-65}, 1500);
    });
});
 
/*-------------------------------------------
    ElevateZoom Js
-------------------------------------------- */ 
    $("#zoom1").elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: "active", 
        imageCrossfade: true,
        easing : true,
        cursor: "default",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });  
 
})(jQuery); 