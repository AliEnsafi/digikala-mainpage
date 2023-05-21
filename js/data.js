$(document).ready(function () {

    if ($('.offer-slider-container').length) {
        var viewedSlider = $('.offer-slider-container');

        viewedSlider.owlCarousel(
            {
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 6000,
                nav: false,
                dots: false,
                responsive:
                {
                    0: { items: 1 },
                    575: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1199: { items: 6 }
                }
            });
    }
});


// subemail
var checkInput = (e) => {
    const content = $("#staticEmail2").val().trim();
    $('#subemail-btn').prop('disabled', content === '');
};


$(document).on('keyup', '#staticEmail2', checkInput);