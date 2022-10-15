/*-------------------------------
            Loading
--------------------------------- */

    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });


/*----------------------------
    START - Counterup
    ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

/*-----------------------------------------------
                Testimonial Slider
----------------------------------------------- */
    $('.review-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });

    $('.clients-slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:2,
                margin:10
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


/*--------------------------------------------------
                    Background Slider
-------------------------------------------------- */
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.gallery').find('.gallery-item').each(function() {
        var pi_height1 = $(this).outerWidth(true),
        pi_height2 = pi_height1/2;
        
        if($(this).hasClass('grid-long') && window_w > 991){
            $(this).css('height', pi_height2);
        }else{
            $(this).css('height', Math.abs(pi_height1));
        }
    });

    $('.gallery').masonry({
        itemSelector: '.gallery-item',
        columnWidth: '.grid-sizer',
        gutter: 20
    });


/*----------------------------------
    Principais Slider
----------------------------------- */
var siteCarousel = function () {
    if ( $('.nonloop-block-13').length > 0 ) {
        $('.nonloop-block-13').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive:{
                600:{
                    margin: 0,
                    nav: true,
                    items: 2
                },
                1000:{
                    margin: 0,
                    stagePadding: 0,
                    nav: true,
                    items: 3
                },
                1200:{
                    margin: 0,
                    stagePadding: 0,
                    nav: true,
                    items: 4
                }
            }
        });
    }

    $('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        nav: true,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
        mouseDrag: false,
        touchDrag: false
    });

    $('.slide-one-item-alt').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 700,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        mouseDrag: false,
        touchDrag: false
    });

    $('.slide-one-item-alt-text').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 700,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        mouseDrag: false,
        touchDrag: false
    });
  
    $('.custom-next').click(function(e) {
        e.preventDefault();
        $('.slide-one-item-alt').trigger('next.owl.carousel');
        $('.slide-one-item-alt-text').trigger('next.owl.carousel');
    });

    $('.custom-prev').click(function(e) {
        e.preventDefault();
        $('.slide-one-item-alt').trigger('prev.owl.carousel');
        $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
    });
  
};
siteCarousel();


    /*-----------------------
        Scroll Up
    ------------------------*/
    $.scrollUp({
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
        scrollText: '<i class="fa fa-chevron-up"></i>',
    });


    /*-----------------------
        Summernote
    ------------------------*/
    $(function () {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
        });
    });