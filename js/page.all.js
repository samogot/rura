$(document).ready(function () {
    $('.module_name').click(function () {
        $(this).children('.fa').toggleClass("fa-chevron-right fa-chevron-down").end()
            .toggleClass("opened").next('.actions').slideToggle($('#contents-module').length ? reinitAffix : undefined);
    });

    $('.ellipses-left').trimLeft();

    var banH = $('#all-projects-module .banners a').height();
    var lasts = $('.module').last().offset().top + $('.module').last().height();
    if (lasts > $('.leftColumn .content').height()) {
        var needDelete = parseInt((((lasts - $('.leftColumn .content').height()) / $('#all-projects-module .banners a').height()) + 1), 10);
        var Blength = $('#all-projects-module .banners a').length;
        var deleteFrom = Blength - needDelete + 1;
        if (deleteFrom < 4) deleteFrom = 4;
        $('#all-projects-module .banners a').slice(deleteFrom + 1).hide();
        $('#all-projects-module .banners').append('<span class="more moreprojects">Больше</span>');
        $('.moreprojects').click(function () {
            $(this).remove();
            $('#all-projects-module .banners a:hidden').slideDown($('#contents-module').length ? reinitAffix : undefined);
        });
    }
});