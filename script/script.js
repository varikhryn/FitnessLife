$(document).ready(function(){
    $('.menuBtn-mobile').click(function() {
        $(this).toggleClass('act');
        if($(this).hasClass('act')) {
            $('.mynav').addClass('act');
        }
        else {
            $('.mynav').removeClass('act');
        }
    });
});