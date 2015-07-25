 $(document).ready(function() {
        $(".fancybox").fancybox();
 });

/* AFFIX */
function reinitAffix() {
    $(window).off('.affix')
    $('#contents-module>div').removeData('bs.affix').removeClass('affix affix-top affix-bottom')
        .css('top', '').affix({
            offset: {
                top: $('#contents-module > div').offset().top - 20,
                bottom: $('footer').outerHeight(true)
            }
        })
    $('.controlText>div').removeData('bs.affix').removeClass('affix affix-top affix-bottom')
        .css('top', '').affix({
            offset: {
                top: $('.controlText > div').offset().top - 40,
                bottom: $(document).height() - ($('#comments').length ? $('#comments').offset().top : $('.leftColumn').offset().top + $('.leftColumn').outerHeight(true))
            }
        });
}
$(window).resize(reinitAffix);
$(document).ready(function() {
    reinitAffix();
});
/* AFFIX */

/* ИНСТРУМЕНТЫ */
$('.daynight-button').on('click', function(e) {
    if ($(this).children('.fa').hasClass('fa-sun-o')){
        $('body').addClass("night");
        saveSettings({
            key: 'night',
            item: true
        });
    } else {
        $('body').removeClass("night");
        saveSettings({
            key: 'night',
            item: false
        });
    }
    $(this).children('.fa').toggleClass('fa-sun-o fa-moon-o');
});
$('.controlText .btn').hover(
    function() {
        $(this).children('.hint').show()
        if ($(this).hasClass('options')) $(this).addClass('activated');
    },
    function() {
        $(this).children('.hint').hide()
        if ($(this).hasClass('options')) $(this).removeClass('activated');
    }
);
$('.btn.top-button').click(function() {
    $(document).scrollTop(0);
});
$('.overlayT').click(function() {
    $('.overlayT').hide();
    $('div.mistake').hide();
});
$('.btn').hover(
    function() {
        $(this).children('.hint').show()
    },
    function() {
        $(this).children('.hint').hide()
    }
);
$('.controlText .btn.disable').attr('disabled', 'disabled');
/* ИНСТРУМЕНТЫ */

/* MOBILE */
function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

var $right = $('#contents-module');
var $center = $('.leftColumn');
var $left = $('.controlText > div');

function OpenRight() {
    if ($left.hasClass("active")) {
        $left.removeClass("active");
        $center.removeClass("activeLeft");
    } else {
        $right.addClass("active");
        $right.children('div').addClass("active");
        $center.addClass("activeRight");
    }
}

function OpenLeft() {
    if ($right.hasClass("active")) {
        $right.removeClass("active");
        $right.children('div').removeClass("active");
        $center.removeClass("activeRight");
    } else {
        $left.addClass("active");
        $center.addClass("activeLeft");
    }
}
$('.leftbg').click(OpenRight);
$('.rightbg').click(OpenLeft);
$('.leftMobile').click(OpenLeft);
$('.rightMobile').click(OpenRight);
$('.soderj-button').click(function() {
    OpenRight();
    OpenRight();
});
if (isMobile() == true) $(".leftColumn").swipe({
    swipeLeft: function() {
        OpenRight()
    },
    swipeRight: function() {
        OpenLeft()
    },
    threshold: 100,
    excludedElements: $.fn.swipe.defaults.excludedElements
});
$('#nav').click(function() {
    $right.removeClass("active");
    $right.children('div').removeClass("active");
    $center.removeClass("activeRight");
});
$('.controlText .btn').click(function() {
    if ($(this).hasClass('options-button')) {
        return false;
    }
    $left.removeClass("active");
    $center.removeClass("activeLeft");
});
$('.controlText .btn.options-button').click(function() {
    if ($(this).hasClass('activated')) {
        return false;
    }
    $('.controlText .btn.options-button').addClass('activated');
    if (isMobile() == true) $('.overlayT').show();
})
$('.overlayT').click(function() {
    $('.overlayT').hide();
    $('.controlText .btn.options-button').removeClass('activated');
    $left.removeClass("active");
    $center.removeClass("activeLeft");
});
/* MOBILE */

/*
      $(function(){
      var lastScrollTop = 0, delta = 5;
      $(window).scroll(function(event){
         var st = $(this).scrollTop();
         if(Math.abs(lastScrollTop - st) <= delta)
            return;

         if (st < lastScrollTop){
            // upscroll code
            $('.navbar-static-top').addClass('active')
            $('.navbar-lower').addClass('active')
         } else {
             // downscroll code
            $('.navbar-static-top').removeClass('active')
            $('.navbar-lower').removeClass('active')
         }
         lastScrollTop = st;
      });
      })
*/

/* НАСТРОЙКИ */
$('.options-button .font').click(function() {
    if ($(this).hasClass("active")) {} else {
        $('.options-button .font').removeClass("active");
        $(this).addClass("active");
        $('.text').css('font-family', $(this).data('name'));
    }
    saveSettings({
        key: 'fontname',
        item: $(this).data('name')
    });
})
$('.options-button .pagecolor').click(function() {
    if ($(this).hasClass("active")) {} else {
        $('.options-button .pagecolor').removeClass("active");
        $(this).addClass("active");
        $('body').removeClass($('body').data('color'));
        $('body').addClass($(this).data('color'));
        $('body').data('color', $(this).data('color'));
        saveSettings({
            key: 'bgcolor',
            item: $(this).data('color')
        });
    }
})
$("#fontslide").on("change mousemove", function() {
    var font = '';
    switch ($(this).val()) {
        case '0':
            font = '80%';
            break;
        case '1':
            font = '100%';
            break;
        case '2':
            font = '120%';
            break;
    }
    $('.text').css('font-size', font);
    saveSettings({
        key: 'fontsize',
        item: $(this).val()
    });
});

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function saveSettings(options) {
    if (!supportsLocalStorage()) {
        return false;
    }
    localStorage.setItem(options.key, options.item);
}

function loadSettings() {
    if (!supportsLocalStorage()) {
        return false;
    }
    if (localStorage.getItem("bgcolor") != undefined) {
        $('body').addClass(localStorage.getItem("bgcolor"));
        $('body').attr('data-color', localStorage.getItem("bgcolor"));
        $('.options-button .pagecolor[data-color="' + localStorage.getItem("bgcolor") + '"]').addClass('active');
    }
    if (localStorage.getItem("night") == "true") {
        $('body').addClass("night");
        $('.daynight-button .fa').toggleClass('fa-sun-o fa-moon-o');
    } else {
        $('body').removeClass("night");
    }
    if (localStorage.getItem("fontsize")) {
        var font = '';
        switch (localStorage.getItem("fontsize")) {
            case '0':
                font = '80%';
                break;
            case '1':
                font = '100%';
                break;
            case '2':
                font = '120%';
                break;
        }
        $('.text').css('font-size', font);
        $("#fontslide").val(localStorage.getItem("fontsize"));
    }
    if (localStorage.getItem("fontname")) {
        $('.options-button .font.' + localStorage.getItem("fontname")).addClass("active");
        $('.text').css('font-family', localStorage.getItem("fontname"));
    }
}
$(document).ready(function() {
    loadSettings()
});
/* НАСТРОЙКИ */

/* ЗАКЛАДКИ */
function hideP() {
    $('.text p').removeClass('show');
    $('.text p').off('click');
    $('.btn.bookmark-button').attr('data-active', false);
}
$('.controlText .btn.bookmark-button').click(function() {
    $('.text p')
        .addClass('show')
        .on('click', function() {
            alert($(this).attr('id'));
            saveSettings({
                key: 'bookmark',
                item: $(this).attr('id')
            });
            hideP()
        });
    setTimeout(function() {
        $('.btn.bookmark-button').attr('data-active', true)
    }, 2000);
});
$('body').click(function(eventObject) {
    if ($(eventObject.target).closest('div.text').length == 0 && $(eventObject.target).closest(".btn.bookmark-button").length == 0) {
        hideP()
    }
});
$('.controlText .btn.bookmark-button').click(function() {
    if ($(this).attr('data-active') == "true") {
        hideP()
    }
});
$('body').keydown(function(eventObject) {
    if (eventObject.which == 27) {
        hideP()
    }
});
/* ЗАКЛАДКИ */


/* MODAL */
function getText() {
    if (window.getSelection) {
        return window.getSelection() + "";
    } else if (document.getSelection) {
        return document.getSelection() + "";
    } else if (document.selection) {
        return document.selection.createRange().text + "";
    }
    return '';
}
$('div.mistake').on('hidden.bs.modal', function(e) {
    $('body').css('padding', 0)
})
$('.btn.mistake-button').click(function() {
    var Mistake = getText();
    if (Mistake == "" || Mistake == ' ') {
        alert('Для начала, выделите ошибку!');
    } else {
        var Parameters = getOrphusParameters();
        var chapterId = $('.chapter').data('chapter');
        console.log(Parameters);
        console.log(chapterId);
        var callbackUrl = '';
        showOrphusDialog(Parameters.originalText, callbackUrl, Parameters.startOffset, Parameters.paragraph, chapterId);
    }
});
/* MODAL */
/* ОШИБКИ */
function showOrphusDialog(originalText, callbackUrl, startOffset, paragraph, chapterId) {
    bootbox.dialog({
        title: "Предложить правку",
        message: '<form id="orphusForm">' +
            '  <div class="form-group">' +
            '    <label for="orphusReplacement">Текст правки</label>' +
            '    <input type="text" class="form-control" name="replacementText" id="orphusReplacement" value="' + originalText + '">' +
            '    <p class="help-block" style="display: none"></p>' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="orphusComment">Комментарий <small>(необязательно)</small></label>' +
            '    <input type="text" class="form-control" name="optionalComment" id="orphusComment">' +
            '  </div>' +
            '</form>',
        buttons: {
            cancel: {
                label: "Отменить",
                className: "btn-default",
                callback: function() {}
            },
            success: {
                label: "Подтвердить",
                className: "btn-success",
                callback: function() {
                    /* TODO: text size check */
                    var replacement = $('#orphusReplacement').val();
                    if (!replacement) {
                        $('#orphusReplacement').next('.help-block').text('Введите текст для замены.').show();
                        $('#orphusReplacement').parent('.form-group').addClass('has-error');
                        return false;
                    }
                    if (replacement == originalText) {
                        $('#orphusReplacement').next('.help-block').text('Текст для замены должен отличаться от исходного.').show();
                        $('#orphusReplacement').parent('.form-group').addClass('has-error');
                        return false;
                    }
                    var data = $('#orphusForm').serialize();
                    var wcall = Wicket.Ajax.get({
                        'u': callbackUrl + '&' + data + '&startOffset=' + startOffset + '&paragraph=' + paragraph + '&chapterId=' + chapterId + '&originalText=' + originalText
                    });
                }
            }
        }
    });
}


/* variable attrs come from wicket framework */
function isOrphusPreconditionsMet(attrs) {
    if ($('#orphusForm').length) {
        return false;
    }
    var keycode = Wicket.Event.keyCode(attrs.event);
    if ((keycode == 13) && (attrs.event.ctrlKey)) //ctrl+enter
    {
        var range = getSelectionRange();
        if (range && range.toString().length > 0) {
            /* TODO: tag p must have associated 'id' attribute.
             *  Probably with special format like ch+chapterId+p+paragraph
             *  where paragraph is just порядковый номер абзаца :) */
            return $(range.startContainer).closest('p').is($(range.endContainer).closest('p'));
        }
    }
    return false;
}

function getSelectionRange() {
    if (window.getSelection && window.getSelection().rangeCount > 0) {
        return window.getSelection().getRangeAt(0);
    } else if (document.selection && document.selection.type != "Control") {
        return document.selection.createRange();
    }
    return null;
}

function getOrphusParameters() {
        var range = getSelectionRange();
        var p = $(range.startContainer).closest('p').get(0);
        var offset = 0;
        if (range.cloneRange) {
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(p);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            offset = preCaretRange.toString().length;
        } else {
            var preCaretTextRange = document.body.createTextRange();
            preCaretTextRange.moveToElementText(p);
            preCaretTextRange.setEndPoint("EndToEnd", range);
            offset = preCaretTextRange.text.length;
        }
        /* TODO: add chapterId parameter. Maybe in wicket code */
        return {
            originalText: range.toString(),
            startOffset: offset - range.toString().length,
            paragraph: p.id
        };
    }
    /* ОШИБКИ */



/* ПРИМЕЧАНИЯ */
$(".reference").popover({
    trigger: 'hover',
    title: 'Примечание',
    placement: 'bottom'
});