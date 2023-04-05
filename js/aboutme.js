$('head').append(
    '<style>body{display:none;}'
);

$(window).on("load", function() {
    $('body').delay(700).fadeIn("slow");

    $(".profile-img img").mouseover(function(){
        var str10 = "animationが実行されました。"
        
        $(".profile-img img").css(
            'border','solid 5px #ccff99'
        );

    });
    $(".profile-img img").mouseout(function(){
        var str11 = "profile-imgからマウスが離れました。"

        $(".profile-img img").css(
            'border','solid 5px #333333'
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
  