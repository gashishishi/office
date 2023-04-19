/** top画像とwork部の画像をbackground-attachment: fixedっぽくする */
jQuery(function($){
    const fixedHeight = $('nav').height();
    var scroll;

    var workImgTop = $('.work-fixed').offset().top;
    var workBottom = $('.work').offset().top + $('.work').outerHeight();;
    $(window).on('scroll', function(){
        scroll = $(window).scrollTop();
    // work-fixedがnavの位置まで来たら固定する
    if(scroll >= workImgTop - fixedHeight){
        if(!$('.work-fixed').hasClass('active')){
            $('.work-fixed').addClass('active')
        }
    } else {
        if($('.work-fixed').addClass('active')){
            $('.work-fixed').removeClass('active')
        }
    }

    // workを通り過ぎたら hero-bg-img,work-bg-imgをd-noneにする。
    const heroImg = $('.hero-bg-img');
    const workImg = $('.work-bg-img');
    if(scroll >= workBottom){
        if (!heroImg.hasClass('d-none'))
            heroImg.addClass('d-none');
            workImg.addClass('d-none');
    } else {
        if (heroImg.hasClass('d-none'))
            heroImg.removeClass('d-none');
            workImg.removeClass('d-none');
    }
    });
});
