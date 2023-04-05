$('head').append(
    '<style>body{display:none;}'
);

$(window).on("load", function() {
    $('body').delay(700).fadeIn("slow");

    $(".Icon img").mouseover(function(){
        var str10 = "animationが実行されました。"
        
        $(".Icon img").css(
            'border','solid 5px #ccff99'
        );

        $(".fukidasi").css(
            'visibility','visible',
            
        );
    });
    $(".Icon img").mouseout(function(){
        var str11 = "Iconからマウスが離れました。"

        $(".Icon img").css(
            'border','solid 5px #333333'
        );

        $(".fukidasi").css(
            'visibility','hidden',
            
        );
    });
    
});

$(function() {
    var topBtn = $('.fa-angle-double-up');
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
  


