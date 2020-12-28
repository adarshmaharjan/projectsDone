////preloader
//$(window).on('load',function(){
//   $('#status').fadeOut(); 
//    $('#preloader').delay(350).fadeOut();
//});

//slider
//jQuery no conflict

$('.slider').slick({
    dots: true,
    // arrows:false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow: '<span class="slide-arrow prev-arrow"></span>',
    nextArrow: '<span class="slide-arrow next-arrow"></span>',

    // infinite: true,

    // fade: true,


    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
//Magnific-popup
$(document).ready(function () {
    $('.image-content').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        },
        navigateByImgClick: true,
        closeBtnInside:false
    });

});
