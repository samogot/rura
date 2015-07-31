$(function() { $(window).resize(); });

/* AFFIX */
function reinitAffix() {
    $(window).off('.affix')
    $('.admin-header').each(function() {
        $(this).removeData('bs.affix').removeClass('affix affix-top affix-bottom').css('top', '').affix({
            offset: {
                top: $(this).offset().top,
                bottom: $(document).height() - $(this).closest('form').offset().top - $(this).closest('form').outerHeight() + $(this).outerHeight() + 75
            }
        });
    });
    $('#contents-module>div').removeData('bs.affix').removeClass('affix affix-top affix-bottom').css('top', '').affix({
            offset: {
                top: $('#contents-module > div').offset().top - 20,
                bottom: $('footer').outerHeight(true)
            }
        })
    $('.admin-affix').each(function() {
        var self = $(this);
        $(this).removeData('bs.affix').removeClass('affix affix-top affix-bottom').css('top', '').affix({
            offset: {
                top: function() { return self.parent().offset().top - 10; }, // в открепленнойм стиле у меня стоит отступ 10 пикселов от верхнего края экрана, знасит откреплять мы начинаем за 10 пикселей от позиции родительского елемента
                bottom: function() { return $(document).height() - self.parent().outerHeight(true) - self.parent().offset().top; } // нижняя граница, конда плагину нужно снова закрепить admin-affix считается по разнице нижней граници родительского елемента и нижнего края экрана
            } // то есть мы аффиксируем admin-affix в пределах его родительского елемента. предпологается что размер родительского елемента растягивается за счет наполнения list-group.select, но нужно где то явно указать min-height что бы в случае если елементов в list-group.select меньше чем высота самого admin-affix, родительский елемень не схлопнулся при откреплении admin-affix
        });
    });
}
$(window).resize(reinitAffix);
$(document).ready(function() {
    reinitAffix();
});

$('.btn-group button').click(reinitAffix);
/* AFFIX */
