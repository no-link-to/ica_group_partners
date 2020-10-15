$(document).ready(function() {

    $('.header--burger').on('click', function() {

        $('.first-span').toggleClass('active')
        $('.middle-span').toggleClass('active')
        $('.last-span').toggleClass('active')
        $('.hidden-menu').toggleClass('show')

    });

    function partnersBackground() {
        if ($(window).width() <= 500){
            $('.partner-wrapper').css({'background-image': 'none', 'padding': '0'})
            $('.partners--item').css({'background': 'none'})
        }
    }

    partnersBackground();

    $(window).resize(function() {
        partnersBackground();
    })

});