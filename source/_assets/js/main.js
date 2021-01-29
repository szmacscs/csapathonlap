import 'bootstrap';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (0 < currentScrollPos) {

        var element = document.getElementById("header");
        $(element).fadeIn("slow")
        document.getElementById("header").style.display="block";
        document.getElementById("header").style.position="fixed";
        if(currentScrollPos>prevScrollpos) {
            document.getElementById("card-container").style.position = "relative";
            var cards = Array.prototype.slice.call(document.querySelectorAll('#card-news'))
            for (var i = 0; i < cards.length; i++) {
                console.log(-750+((window.innerHeight / window.innerWidth) * window.pageYOffset*2 ))
                //console.log(cards[i].offsetTop)
                if(window.innerHeight> 1200) {
                    if(((window.innerHeight / window.innerWidth) * window.pageYOffset / 5)<300 ){
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = -(window.innerWidth / 2) + ((window.innerHeight / window.innerWidth) * window.pageYOffset * 2) + "px";
                    }else{
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = 300 + "px";
                    }
                }else if(window.innerHeight> 800){
                    if(((window.innerHeight / window.innerWidth) * window.pageYOffset / 5)<300 ){
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = -(window.innerWidth / 1.6) + ((window.innerHeight / window.innerWidth) * window.pageYOffset * 2) + "px";
                    }else{
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = 300 + "px";
                    }
                }else{
                    if(((window.innerHeight / window.innerWidth) * window.pageYOffset / 5)<150 ){
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = -(window.innerWidth / 0.65) + ((window.innerHeight / window.innerWidth) * window.pageYOffset * 2) + "px";
                    }else{
                        cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                        cards[i].style.left = 150 + "px";
                    }
                }
            }
        }

    } else {
        var element = document.getElementById("header");
        if(true === $(element).fadeOut("slow")) {
            document.getElementById("header").style.display = "none";
        }
    }
    prevScrollpos = currentScrollPos;


}

$(function(){

    window.sr = ScrollReveal({reset:true});

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });


});
