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
$(document).ready(function(){
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    $("#mycarouselExampleIndicators").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#mycarouselExampleIndicators").swipeleft(function () {
        $(this).carousel('next');
    });
});
$(document).ready(function(){

    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function () {
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
        wrapperMenu.classList.toggle('open');
    })
});
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


    $('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
    $('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
    $('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
    $('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });


});

$(document).ready(function () {
    $('.service-slick').slick({
        slidesToShow: 5,
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
// $(document).ready(function(){
//     $('#carouselExampleIndicators').on('slide.bs.carousel', function () {
//         $('.carosel-content').fadeOut(300);
//     })
//     $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
//         $('.carosel-content').fadeIn(600);
//     })
// });