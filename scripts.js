// single line comment
/*
 multi line comment 
 */

 /**
  * jQuery usecase:
  * $ or jQuery
  */
// jQuery() or $()
$(document).ready(function() {
    $(".billboard").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });
});

