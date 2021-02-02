import $ from 'jquery';

window.jQuery = $;
window.$ = $;


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (1 <= currentScrollPos) {

        var element = document.getElementById("header");
        $(element).fadeIn("slow")
        document.getElementById("header").style.display="block";
        document.getElementById("header").style.position="fixed";


    } else {
        var element = document.getElementById("header");
        if(true === $(element).fadeOut("slow")) {
            document.getElementById("header").style.display = "none";
        }
    }
    prevScrollpos = currentScrollPos;


}