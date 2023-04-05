$('head').append(
    '<style>body{display:none;}'
);

$(window).on("load", function() {
    $('body').delay(700).fadeIn("slow");
});




$(document).ready(function(){  //ずっと悩んでた奴が解決
  $("#ytweb").click(function(){
    var str7 = "yt-web_imgがクリックされました。"
    console.log(str7);

    $("#back-curtain")
    .css({
        'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
        'height':$(document).height()
    })
    .show();

    $("#largeImage7")
    .css({
        'position': 'absolute',                     // ②絶対座標
        'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
        'top': $(window).scrollTop() + 30 + 'px'            // ②上から３０pixel
    })
    .fadeIn();
  });

  $("#back-curtain,#largeImage7").click(function(){
    $('#largeImage7').fadeOut('slow', function() {$('#back-curtain').hide();});

  });

});




$(document).ready(function(){  //robot_img
    $("#robot").click(function(){
      var str1 = "robot_imgがクリックされました。"
      console.log(str1);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage1")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage1").click(function(){
      $('#largeImage1').fadeOut('slow', function() {$('#back-curtain').hide();});
  
    });
  
  });
  
  $(document).ready(function(){  //fish-scene
    $("#fish").click(function(){
      var str2 = "fish-scene_imgがクリックされました。"
      console.log(str2);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage2")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage2").click(function(){
      $('#largeImage2').fadeOut('slow', function() {$('#back-curtain').hide();});
  
    });
  
  });
  
  $(document).ready(function(){  //sofa
    $("#sofa").click(function(){
      var str3 = "sofa_imgがクリックされました。"
      console.log(str3);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage3")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage3").click(function(){
      $('#largeImage3').fadeOut('slow', function() {$('#back-curtain').hide();});
  
    });
  
  });

  $(document).ready(function(){  //sugar
    $("#sugar").click(function(){
      var str4 = "sugar_imgがクリックされました。"
      console.log(str4);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage4")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage4").click(function(){
      $('#largeImage4').fadeOut('slow', function() {$('#back-curtain').hide();});
  
    });
  
  });
  
  $(document).ready(function(){  //chair
    $("#chair").click(function(){
      var str5 = "chair_imgがクリックされました。"
      console.log(str5);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage5")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage5").click(function(){
      $('#largeImage5').fadeOut('slow', function() {$('#back-curtain').hide();});
  
    });
  
  });

  $(document).ready(function(){  //palm
    $("#palm").click(function(){
      var str6 = "palm_imgがクリックされました。"
      console.log(str6);
  
      $("#back-curtain")
      .css({
          'width':$(document).width(), //windowではなくdocumentでブラウザの下端まで
          'height':$(document).height()
      })
      .show();
  
      $("#largeImage6")
      .css({
          'position': 'absolute',                     // ②絶対座標
          'left': Math.floor(($(window).width() - 800) / 2) + 'px',   // ②ウィンドウ中央
          'top': $(window).scrollTop() + 120 + 'px'            // ②上から100pixel
      })
      .fadeIn();
    });
  
    $("#back-curtain,#largeImage6").click(function(){
      $('#largeImage6').fadeOut('slow', function() {$('#back-curtain').hide();});
  
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
  
  
  
  
  