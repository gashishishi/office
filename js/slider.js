jQuery(function($){
    $('.slider').slick({
        arrows: true,
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
        //一番大きいサイズ用設定
        centerMode:true,
        slidesToShow:3,
        slidesToScroll:1,
        variableWidth:true,
        
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow:1,
                    slidesToScroll:1,
                    variableWidth:true

                }
            },

            {
                breakpoint: 576,
                settings:{
                    centerMode: false,
                    variableWidth:false,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
        ],
        // asNavFor: '.thumbnail-slider'
    });

    // $('.thumbnail-slider').slick({
    //     arrows: true,
    //     slidesToShow: 3, // サムネイルの表示数
    //     asNavFor: ".slider", // メイン画像と同期
    //     focusOnSelect: true, // サムネイルクリックを有効化


    //   });
});