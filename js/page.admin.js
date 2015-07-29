$(function() { $(window).resize(); });

/* AFFIX */
function reinitAffix() {
    $(window).off('.affix')
    $('.admin-header').each(function() {
        $(this).removeData('bs.affix').removeClass('affix affix-top affix-bottom').css('top', '').affix({ offset: {
            top: $(this).offset().top,
            bottom: $(document).height() - $(this).closest('form').offset().top - $(this).closest('form').outerHeight() + $(this).outerHeight() + 75
        }});
    });
    $('#contents-module>div').removeData('bs.affix').removeClass('affix affix-top affix-bottom')
        .css('top', '').affix({
            offset: {
                top: $('#contents-module > div').offset().top - 20,
                bottom: $('footer').outerHeight(true)
            }
        })
}
$(window).resize(reinitAffix);
$(document).ready(function() {
    reinitAffix();
});

$('.btn-group button').click(reinitAffix);
/* AFFIX */