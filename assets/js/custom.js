$(window).on('load', function () {
    $(".loader").fadeOut("slow");
});
$(document).ready(function () {
    var percent = 0, bar = $('#myBar'), crsl = $('#carouselExampleIndicators');
    function progressBarCarousel() {
        bar.css({ width: percent + '%' });
        percent = percent + 0.5;
        if (percent > 100) {
            percent = 0;
            crsl.carousel('next');
        }
    }
    $(".carosalnav").on('click', function () {
        percent = 0;
    });
    crsl.carousel({
        interval: false,
        pause: true
    }).on('slid.bs.carousel', function () { }); var barInterval = setInterval(progressBarCarousel, 30);
    crsl(
        function () {
            clearInterval(barInterval);
        },
        function () {
            barInterval = setInterval(progressBarCarousel, 30);
        })
});
// $(document).ready(function(){
//     $('#toggle').click(function () {
//         $(this).toggleClass('active');
//         $('#overlay').toggleClass('open');
//     });
//     $("#mycarouselExampleIndicators").swiperight(function () {
//         $(this).carousel('prev');
//     });
//     $("#mycarouselExampleIndicators").swipeleft(function () {
//         $(this).carousel('next');
//     });
// });
// $(document).ready(function(){

//     var wrapperMenu = document.querySelector('.wrapper-menu');

//     wrapperMenu.addEventListener('click', function () {
//         $('#toggle').toggleClass('active');
//         $('#overlay').toggleClass('open');
//         wrapperMenu.classList.toggle('open');
//     })
// });
$(window).on('load',function(){ 
    var containerHeight = $(".pracCont").height();
    var CounterHight = containerHeight-100+"px";
    var halfpx = containerHeight / 2;
    var pixel = halfpx + "px";
    var contPixel = halfpx/1.3;
    var pixel2 = contPixel+"px";
    $('.counter').css('transform', 'translate(0px, ' + pixel + ')');
    // $('.Practice-section').height(CounterHight);
    $('.Counter-content').css('transform', 'translate(0px, ' + pixel + ')');
    $('.Counter-content').css('height', CounterHight);
    $('.Practice-section').height(function (index, height) {
        return (height + halfpx);
    });


    

});



// counter

$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


$(document).ready(function () {
    $('.service-slick').slick({
        slidesToShow: 5,
        prevArrow: false,
        nextArrow: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
                responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
  });

});

// Scroll Reval

$(document).ready(function(){
    var slideUp = {
        distance: '50%',
        origin: 'bottom',
        delay: 200,
        duration: 1900,
        opacity: 0,
        
    };
    ScrollReveal().reveal('.Aboutus_Section', slideUp);

    // card item
    ScrollReveal().reveal('.crd-icon', { delay: 350, distance: '25%', origin: 'right', duration: 1200, opacity: 0 });
    ScrollReveal().reveal('.crd-heading', { delay: 450, distance: '25%', origin: 'right', duration: 1200, opacity: 0 });
    ScrollReveal().reveal('.crd-contents', { delay: 550, distance: '25%', origin: 'right', duration: 1200, opacity: 0});

    var contactContent = {
        distance: '30%',
        origin : 'left',
        delay : 450,
        duration : 1200,
        opacity : 0,
    };
    ScrollReveal().reveal('.contact-content', contactContent);

    var ContactForm = {
        distance: '30%',
        origin: 'right',
        delay: 450,
        duration: 1200,
        opacity: 0,
    };
    ScrollReveal().reveal('.Contact-form', ContactForm);

    var abtcontent = {
        distance: '30%',
        origin: 'right',
        delay: 450,
        duration: 1200,
        opacity: 0,
    };
    ScrollReveal().reveal('.abt-content', abtcontent);
    
    var detail_img = {
        distance: '30%',
        origin: 'bottom',
        delay: 250,
        duration: 1200,
        opacity: 0,
    };
    ScrollReveal().reveal('.detail-img', detail_img);


    var detail_img = {
        distance: '30%',
        origin: 'bottom',
        delay: 250,
        duration: 1200,
        opacity: 0,
    };
    ScrollReveal().reveal('.detail-img', detail_img);

    var prack_detail = {
        distance: '30%',
        origin: 'bottom',
        delay: 350,
        duration: 1200,
        opacity: 0,
    };
    ScrollReveal().reveal('.prack-detail', prack_detail);

    var quote_sec = {
        distance: '30%',
        origin: 'bottom',
        delay: 350,
        duration: 1200,
        scale: 0.85,
        opacity: 0,
    };
    ScrollReveal().reveal('.quote-sec', quote_sec);


    var num_sec = {
        distance: '30%',
        origin: 'bottom',
        delay: 350,
        duration: 1200,
        scale: 0.85,
        opacity: 0,
    };
    ScrollReveal().reveal('.num-sec', num_sec);

    var final_drop_content = {
        distance: '30%',
        origin: 'bottom',
        delay: 350,
        duration: 1200,
        scale: 0.85,
        opacity: 0,
    };
    ScrollReveal().reveal('.final-drop-content', final_drop_content);

    // var slideUp = {
    //     distance: '50%',
    //     origin: 'bottom',
    //     delay: 200,
    //     duration: 1900,
    //     opacity: 0,
    //     reset: true
    // };
    // ScrollReveal().reveal('.blogs', slideUp);
    
    // ScrollReveal().reveal('.dp', { delay: 10, distance: '25%', origin: 'right', duration: 1200, opacity: 0, reset: true });
    // ScrollReveal().reveal('.testi-name', { delay: 10, distance: '25%', origin: 'right', duration: 1200, opacity: 0, reset: true });
    // ScrollReveal().reveal('.rating', { delay: 10, distance: '25%', origin: 'right', duration: 1200, opacity: 0, reset: true });


});


$("html").on("click", ".btn1", function (evt) {
    var btn = $(evt.currentTarget);
    var x = evt.pageX - btn.offset().left;
    var y = evt.pageY - btn.offset().top;

    $("<span/>").appendTo(btn).css({
        left: x,
        top: y
    });
});

// counter Trigger
$(document).ready(function(){
    var waypoint = new Waypoint({
        element: document.getElementById('cont'),
        handler: function (direction) {
            if (direction == 'down') {
                $.fn.jQuerySimpleCounter = function (options) {
                    var settings = $.extend({
                        start: 0,
                        end: 100,
                        easing: 'swing',
                        duration: 400,
                        complete: ''
                    }, options);

                    var thisElement = $(this);

                    $({ count: settings.start }).animate({ count: settings.end }, {
                        duration: settings.duration,
                        easing: settings.easing,
                        step: function () {
                            var mathCount = Math.ceil(this.count);
                            thisElement.text(mathCount);
                        },
                        complete: settings.complete
                    });
                };


                $('#number1').jQuerySimpleCounter({ end: 12, duration: 5000 });
                $('#number2').jQuerySimpleCounter({ end: 55, duration: 5000 });
                $('#number3').jQuerySimpleCounter({ end: 359, duration: 5000 });
                $('#number4').jQuerySimpleCounter({ end: 246, duration: 5500 });
            }
        },
        offset: 100
    });
});




