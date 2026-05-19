$(function(){
    // dropdown menu
    $('#main-menu > li').on('click',function(e){
        e.preventDefault();
        $(this).find('.sub-menu').stop().slideToggle();
    });
    // $('#main-menu > li').on('click',function(e){
    //     e.preventDefault();
    //     $(this).find('.sub-menu').stop().slideUp();
    // });

    // trigger menu
    $('#trigger').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('#main-menu').toggleClass('active');
    });


    // scroll
    $(window).on('scroll',function(){
        var wid = $(this).width();
        var dis = $(this).scrollTop();
        if(wid >=600 && wid <=1049) {
            if(dis >= 200) {
            $('header').addClass('active');
            } else {
            $('header').removeClass('active')
            }
        } else if(wid <600) {
            if(dis >= 300) {
            $('header').addClass('active');
            } else {
            $('header').removeClass('active')
            }
        }
        
    });
});