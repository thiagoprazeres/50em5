
jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 764){
    jQuery('#main-nav').addClass('navbar-fixed-top');
  } else {
    jQuery('#main-nav').removeClass('navbar-fixed-top');
  }
});


$(document).ready(function() {
    $("#dwnTg").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#download").offset().top
        }, 1000);
    });
    $("#topTarget").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
    $("#aboutTarget").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#description").offset().top
        }, 1000);
    });
    $("#dwnTarget").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#download").offset().top
        }, 1000);
    });
    $("#contactTarget").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
  
      $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });

    jQuery(function( $ ){
          
           
        });

