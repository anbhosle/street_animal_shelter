$(document).ready(function(){

    $('.menu i').click(function(){
        $(this).toggleclass('fa-times');
        $('header').toggleclass('toggle');
    });

    $(window).on('scroll load', function() {
        $('.menu i').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});  
