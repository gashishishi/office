
jQuery(function($) {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.nav-menu').addClass('active');
            $('.nav-menu').removeClass('d-flex');

        } else {
            $('.nav-menu').removeClass('active');
            $('.nav-menu').addClass('d-flex');
        } 
      
    });
});


//メニュー内を閉じておく
// メニュー内が選択されたらメニューを閉じる
jQuery(function($) {
    $('.nav-item').click(function() {
        $('.nav-menu').removeClass('active');
        $('.hamburger').removeClass('active');
        $('.nav-menu').addClass('d-flex');
    });
  });