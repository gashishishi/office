jQuery(function($){
    function getScrollHeight(){
        //navバーの高さ
        return $('nav').height();
    }

    let navHeight = getScrollHeight();

    $(window).resize(function(){
        navHeight = getScrollHeight();
      });

    $('#scroll-top').on('click',function(){
        let heroTop = $('#hero').offset().top - navHeight;
        $('html').animate({scrollTop:heroTop},{ duration: 1, easing: 'linear' });
    });
    $('.title-logo').on('click',function(){
        let heroTop = $('#hero').offset().top - navHeight;
        $('html').animate({scrollTop:heroTop},{ duration: 1, easing: 'linear' });
    });

    $('#scroll-work').on('click',function(){
        let workTop = $('#work-title').offset().top - navHeight;
        $('html').animate({scrollTop:workTop},{ duration: 1, easing: 'linear' });
    });

    $('#scroll-advantage').on('click',function(){
        let advantageTop = $('#advantage').offset().top - navHeight;
        $('html').animate({scrollTop:advantageTop},{ duration: 1, easing: 'linear' });
    });

    $('#scroll-staff').on('click',function(){
        let staffTop = $('#staff').offset().top - navHeight;
        $('html').animate({scrollTop:staffTop},{ duration: 1, easing: 'linear' });
    });

    $('#scroll-footer').on('click',function(){
        let footerTop = $('#footer').offset().top - navHeight;
        $('html').animate({scrollTop:footerTop},{ duration: 1, easing: 'linear' });
    });


});
