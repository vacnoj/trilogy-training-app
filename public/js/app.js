$(document).ready(function() {

    console.log('app.js loaded');

    // When the user scrolls the page, execute myFunction
    document.onscroll = function() {myFunction()};

    function myFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

        $('.modal').modal();

    $('.scrollspy').scrollSpy();

});



