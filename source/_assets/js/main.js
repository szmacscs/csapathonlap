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
                //console.log((window.innerHeight/window.innerWidth)* window.pageYOffset/5)
                //console.log(cards[i].offsetTop)
                cards[i].style.opacity = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5;
                cards[i].style.left = (window.innerHeight / window.innerWidth) * window.pageYOffset / 5 + "px";
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