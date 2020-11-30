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

    $('.tab').on('click', function() {
        let name_tab = $(this).text().trim();
        if (name_tab === 'Клиенты') {
            $('#firstTab').addClass('active-tab');
            $('#secondTab').removeClass('active-tab');
            $('.second-tab').addClass('hidden');
            $('.first-tab').removeClass('hidden');
        } else {
            $('#secondTab').addClass('active-tab');
            $('#firstTab').removeClass('active-tab');
            $('.second-tab').removeClass('hidden');
            $('.first-tab').addClass('hidden');
        }
    });
});