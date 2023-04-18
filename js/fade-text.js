
    $(window).on('load', function(){
        jQuery(function($) {
        // fade-titleの変化が終わってからfade-textのアニメーションを開始する。
        // cssで予めopacity:0にしてある
        $('.fade-title').stop().animate({'opacity':1}, 1000, function(){
            $('.fade-text').animate({'opacity':1},2000);
        });
    });

});