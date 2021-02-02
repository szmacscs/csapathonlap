import 'bootstrap';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;


$(function(){

    window.sr = ScrollReveal();


    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '200px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '200px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '200px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '200px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '200px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.gradient-box', {
        origin: 'left',
        easing: 'ease-in-out',
        duration: 800,
    });


});
