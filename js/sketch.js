$('head').append(
    '<style>body{display:none;}'
);


$(window).on("load", function() {
    $('body').delay(700).fadeIn("slow");

});

$(window).on('load',function(){
    const images = $(".slide img");

    let counter = 0;
    let index = 0;

    $("#next").click(function(){

        $('.fukidasi').fadeOut(500);

        images.eq(index).css('display','none');

        index = ++counter % images.length;

        images.eq(index).fadeIn();

        
    
    });

    $("#rev").click(function(){
        images.eq(index).css('display','none');

        index = --counter % images.length;

        images.eq(index).fadeIn();

    });


});
