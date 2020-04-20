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