$('head').append(
    '<style>body{display:none;}'
);


$(window).on("load", function() {
    $('body').delay(700).fadeIn("slow");
});
    