$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
//Timer
$('.clock').timeTo({
    timeTo: new Date(new Date('Wed May 25 2016 09:00:00 GMT+0300 (Ð¤Ð¸Ð½Ð»ÑÐ½Ð´Ð¸Ñ (Ð»ÐµÑÐ¾))')),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 54,
    captionSize: 14,
    lang: 'ru'
});


//Parallax
$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
});
//smooth scroll to hash
$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});
    
});
//animation
$(document).ready(function() {
        $(window).scroll(function() {
            $('.sect_1').each(function() {
                var imagePos = $(this).offset().top;
                var imagePosHeight = imagePos + $(this).height();
                var topOfWindow = $(window).scrollTop();
                if (imagePos > topOfWindow + $(this).height())
                    $(this).removeClass("");
                if (imagePos < topOfWindow + $(window).height() / 1) {
                    $(this).addClass("animated fadeInUp");
                }
                if (imagePosHeight < topOfWindow)
                    $(this).removeClass("")
            });
        });
    });