$(function(){

    $('#top').click(function(){
        $('html, body').scrollTop(0);
    });

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position 
        }, 500);
    });

    $('.lesson p').hover(
        function() {
          
        },
        function() {
          
        }
    );

    $('.lessons a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position 
        }, 500);
    });

    $('.lessons a').click(function(){
        $('html, body').animate({
          'scrollTop': 0
        }, 500);
    });

});
