$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.menu').slideToggle("slow"); // Usa slideToggle per aprire/chiudere il menu
    });

    // Chiudi il menu quando si fa clic su un elemento del menu
    $('.menu li').click(function() {
        $('.menu').slideUp("slow");
    });
});

