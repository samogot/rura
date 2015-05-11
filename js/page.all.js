$('.module_name').click(function() {
    $(this).children('.fa').toggleClass("fa-chevron-right fa-chevron-down");
    if ($(this).hasClass("opened")) {
        if($('.module-content').length != 0) {
            $(this).parent().children('.actions').slideUp(reinitAffix);
        }
        else {
            $(this).parent().children('.actions').slideUp();
        }
        $(this).removeClass("opened");
    } else {
        if($('.module-content').length != 0) {
            $(this).parent().children('.actions').slideDown(reinitAffix);
        }
        else {
            $(this).parent().children('.actions').slideDown();
        }
        $(this).addClass("opened");
    }
});
$(document).ready(function(){
    $('.ellipses-left').trimLeft();

    var banH = $('.projects-module .banners a').height();
    var lasts = $('.module').last().offset().top+$('.module').last().height();
    if (lasts > $('.leftColumn .content').height()) {
        var needDelete = parseInt((((lasts - $('.leftColumn .content').height()) / $('.projects-module .banners a').height()) + 1), 10);
        $('.projects-module .banners').append('<div class="hiddenBanners"></div>');
        var Blength = $('.projects-module .banners a').length;
        var deleteFrom = Blength - needDelete + 1;
        console.log(deleteFrom);
        if (deleteFrom < 4) {
            deleteFrom = 4;
        }
        console.log("var i = " + deleteFrom + "; i <" + Blength);
        $('.projects-module .banners a:gt(' + deleteFrom + ')').each(function(indx) {
            $(this).detach().appendTo('.hiddenBanners');
        });
        $('.hiddenBanners').before('<span class="more moreprojects">Больше</span>')
        $('.moreprojects').click(function() {
            $(this).remove();
            if($('.module-content').length != 0) {
                $('.hiddenBanners').slideDown(reinitAffix);
            } else {
                $('.hiddenBanners').slideDown();
            }
        });
    }
});