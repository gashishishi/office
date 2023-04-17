
    $(window).on('load', function(){
        jQuery(function($) {
        console.log('fade');
        // fade-titleの変化が終わってからfade-textのアニメーションを開始する。
        // cssで予めopacity:0にしてある
        $('.fade-title').stop().animate({'opacity':1}, 1000, function(){
            $('.fade-text').animate({'opacity':1},2000);
        });
    });

    //もしかしてif(opacity ===0){    }とかでループ再生できる?
    // setTimeout('stopload()',10000);
});