var myDocker = new wcDocker('.dockerContainer', {
    allowDrawers: true,
    responseRate: 10,
    hideOnResize: true,
    theme: "ruranobe",
    allowContextMenu: false
});

var _showingInfo = true;
var _savedLayout = null;
var _chatterIndex = 1;

var defaultTitle = '<i class="icon-circle-arrow-right"></i> ';

myDocker.registerPanelType('Toolbox', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        // Constrain the sizing of this window so the user can't resize it.
        myPanel.initSize(Infinity, 30);
        myPanel.minSize(100, 30);
        myPanel.maxSize(Infinity, 30);
        myPanel.title(false);

        // Do not allow the user to move or remove this panel, this will remove the title bar completely from the frame.
        myPanel.moveable(false);
        myPanel.closeable(false);
        myPanel.scrollable(false, false);

        window.$button_bold = $('<button type="button" data-type="BoldIt" class="btn btn-default btn-xs" title="Жирный" data-insert="\'\'\'insert\'\'\'"><i class="fa fa-bold"></i></button>');
        window.$button_ital = $('<button type="button" data-type="BoldIt" class="btn btn-default btn-xs" title="Курсив"  data-insert="\'\'insert\'\'"><i class="fa fa-italic"></i></button>');
        window.$button_h2 = $('<button type="button" data-type="head" class="btn btn-default btn-xs" title="Заголовок 2-го уровня"  data-insert="==insert=="><i class="fa fa-header"></i>2</button>');
        window.$button_h3 = $('<button type="button" data-type="head" class="btn btn-default btn-xs" title="Заголовок 3-го уровня"  data-insert="===insert==="><i class="fa fa-header"></i>3</button>');
        window.$button_uh = $('<button type="button" data-type="head" class="btn btn-default btn-xs UnderHead" title="Подзаголовок"  data-insert="{{Подзаголовок|insert}}"><i class="fa fa-header"></i><i class="fa fa-align-center" style="font-size:80%"></i></button>');
        window.$button_pr = $('<button type="button" class="btn btn-default btn-xs" title="Примечание"  data-insert="{{ref|insert}}"><i class="fa fa-file-text"></i></button>');
        window.$button_com = $('<button type="button" class="btn btn-default btn-xs" title="Комментарий"  data-insert="<!— insert —>"><i class="fa fa-tag"></i></button>');
        window.$button_illus = $('<button type="button" class="btn btn-default btn-xs Illus" title="Иллюстрация" data-insert="{{Иллюстрация}}insert "><i class="fa fa-picture-o"></i></button>');
        window.$button_wiki = $('<button type="button" class="btn btn-default btn-xs" title="Ссылка на Википедию" data-insert="Подробнее на [insert Википедии]"><i class="fa fa-link"></i><span style="font-size: 72%; margin-left: -2px; vertical-align: super; font-weight: bold;">W</span></button>');
        window.$button_fullscreen = $('<button type="button" class="btn btn-default btn-xs" title="Полноэкранный режим"><i class="fa fa-expand"></i></button>');
        window.$button_scrollock = $('<button type="button" class="btn btn-default btn-xs" title="Синхронизировать высоту строк"><i class="fa fa-arrows-v"></i></button>');

        myPanel.layout().$table.addClass('toolbox');
        myPanel.layout().addItem($button_bold);
        myPanel.layout().addItem($button_ital);
        myPanel.layout().addItem($button_h2);
        myPanel.layout().addItem($button_h3);
        myPanel.layout().addItem($button_uh);
        myPanel.layout().addItem($button_pr);
        myPanel.layout().addItem($button_com);
        myPanel.layout().addItem($button_illus);
        myPanel.layout().addItem($button_wiki);
        myPanel.layout().addItem($button_fullscreen);
        // myPanel.layout().addItem($button_scrollock);

        $button_fullscreen.click(function(){
            var doc = window.document;
            var docEl = doc.documentElement;

            var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
            var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

            if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                requestFullScreen.call(docEl);
                $('body').addClass('wcFullScreen')
                $button_fullscreen.find('.fa').addClass('fa-compress').removeClass('fa-expand');
            }
            else {
                cancelFullScreen.call(doc);
                $('body').removeClass('wcFullScreen')
                $button_fullscreen.find('.fa').addClass('fa-expand').removeClass('fa-compress');
            }
        });

        $button_scrollock.click(function(){
            updateLineSyncOp(114)
        });
    }
});
myDocker.registerPanelType('Statusbar', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        // myPanel.layout().$table.css('padding', '5px');
        // Constrain the sizing of this window so the user can't resize it.
        myPanel.initSize(Infinity, 24);
        myPanel.minSize(100, 24);
        myPanel.maxSize(Infinity, 24);
        myPanel.title(false);
        // Do not allow the user to move or remove this panel, this will remove the title bar completely from the frame.
        myPanel.moveable(false);
        myPanel.closeable(false);
        myPanel.scrollable(false, false);
        var $qwe = $('<span>SOME TEXT</span>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('VolumeTree', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        // myPanel.layout().$table.css('padding', '5px');
        var $treediv = $('<div id="volumestree"></div>')
        var $tree = $('<ul></ul');
        for (var i = 1; i < 6; i++) {
            var $volume1 = $('<li id="solution_window_' + i + '">' + '<a href="#">Том ' + i + '</a>' + '<ul>' + '<li id="v' + i + '_p1"><a href="#">Пролог</a></li>' + '<li id="v' + i + '_p2"><a href="#">Глава 1</a></li>' + '<li id="v' + i + '_p3"><a href="#">Глава 2</a></li>' + '</ul>' + '</ul>' + '</li>');
            $tree.append($volume1);
        }
        $treediv.append($tree);
        myPanel.layout().addItem($treediv);
    }
});
myDocker.registerPanelType('TranG', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        var $qwe = $('<div id="TranG"></div>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('TranM', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        var $qwe = $('<div id="TranM"></div>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('TranSin', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel) {
        var $qwe = $('<div id="TranSin"></div>');
        myPanel.layout().addItem($qwe);
    }
});


myDocker.registerPanelType('volume', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var volL = $('.volume').length
        var $qwe = $('<div class="volume" id="volume' + volL + '"></div>');
        myPanel.title('Глава ' + (volL + 1));
        myPanel.layout().addItem($qwe);
        myPanel.scrollable(false, false);
    }
});
myDocker.registerPanelType('GJap', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="GJap"></div>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('GEn', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="GEn"></div>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('Jap', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="Jap"></div>');
        myPanel.layout().addItem($qwe);
    }
});
myDocker.registerPanelType('Fresh', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="Fresh"></div>');
        myPanel.layout().addItem($qwe);
    }
});


myDocker.registerPanelType('originalJap', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="originalJap"></div>');
        myPanel.layout().addItem($qwe);
        myPanel.scrollable(false, false);
    }
});
myDocker.registerPanelType('originalEng', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="originalEng"></div>');
        myPanel.layout().addItem($qwe);
        myPanel.scrollable(false, false);
    }
});
myDocker.registerPanelType('originalPrev', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="originalPrev"></div>');
        myPanel.layout().addItem($qwe);
        myPanel.scrollable(false, false);
    }
});
myDocker.registerPanelType('originalOrph', {
    faicon: 'icon-circle-arrow-right',
    isPrivate: true,
    onCreate: function (myPanel, options) {
        var $qwe = $('<div id="originalOrph"></div>');
        myPanel.layout().addItem($qwe);
        myPanel.scrollable(false, false);
    }
});

/* INITIALIZATION */
myDocker.startLoading('Loading...');

if($('body').hasClass('wcMobile'))
{
    window.volumePanel = myDocker.addPanel('volume', wcDocker.DOCK.RIGHT, null);
    window.volumePanel1 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);
    window.volumePanel2 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);

    window.GJap = myDocker.addPanel('GJap', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.GEn = myDocker.addPanel('GEn', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.JRTt = myDocker.addPanel('Jap', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.JRTd = myDocker.addPanel('Jap', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.Jap = myDocker.addPanel('Jap', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.Eng = myDocker.addPanel('Jap', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.Fresh = myDocker.addPanel('Fresh', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);

    window.translateG = myDocker.addPanel('TranG', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.translateM = myDocker.addPanel('TranM', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.translateY = myDocker.addPanel('TranM', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);
    window.translateSin = myDocker.addPanel('TranSin', wcDocker.DOCK.BOTTOM, wcDocker.COLLAPSED);

    window.originalJap = myDocker.addPanel('originalJap', wcDocker.DOCK.LEFT, volumePanel, { w: "50%" });
    window.originalEng = myDocker.addPanel('originalEng', wcDocker.DOCK.STACKED, originalJap);
    window.originalPrev = myDocker.addPanel('originalPrev', wcDocker.DOCK.STACKED, originalJap);
    window.originalOrph = myDocker.addPanel('originalOrph', wcDocker.DOCK.STACKED, originalJap);


    window.toolBoxPanel = myDocker.addPanel('Toolbox', wcDocker.DOCK.TOP);
    window.treePanel = myDocker.addPanel('VolumeTree', wcDocker.DOCK.STACKED, originalJap);
}
else
{
    window.volumePanel = myDocker.addPanel('volume', wcDocker.DOCK.RIGHT, null);
    window.volumePanel1 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);
    window.volumePanel2 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);

    window.Jap = myDocker.addPanel('Jap', wcDocker.DOCK.BOTTOM, volumePanel, { w: "75%" });
    window.Eng = myDocker.addPanel('Jap', wcDocker.DOCK.STACKED, Jap);
    window.GJap = myDocker.addPanel('GJap', wcDocker.DOCK.STACKED, Jap);
    window.GEn = myDocker.addPanel('GEn', wcDocker.DOCK.STACKED, Jap);
    window.JRTt = myDocker.addPanel('Jap', wcDocker.DOCK.STACKED, Jap);
    window.JRTd = myDocker.addPanel('Jap', wcDocker.DOCK.STACKED, Jap);
    window.Fresh = myDocker.addPanel('Fresh', wcDocker.DOCK.STACKED, Jap, { tabOrientation: wcDocker.TAB.BOTTOM });

    window.translateG = myDocker.addPanel('TranG', wcDocker.DOCK.LEFT, Jap, { w: "25%" });
    window.translateM = myDocker.addPanel('TranM', wcDocker.DOCK.STACKED, translateG);
    window.translateY = myDocker.addPanel('TranM', wcDocker.DOCK.STACKED, translateG);
    window.translateSin = myDocker.addPanel('TranSin', wcDocker.DOCK.STACKED, translateG, { tabOrientation: wcDocker.TAB.BOTTOM });

    window.originalJap = myDocker.addPanel('originalJap', wcDocker.DOCK.LEFT, volumePanel, { w: "50%" });
    window.originalEng = myDocker.addPanel('originalEng', wcDocker.DOCK.STACKED, originalJap);
    window.originalPrev = myDocker.addPanel('originalPrev', wcDocker.DOCK.STACKED, originalJap);
    window.originalOrph = myDocker.addPanel('originalOrph', wcDocker.DOCK.STACKED, originalJap);


    window.toolBoxPanel = myDocker.addPanel('Toolbox', wcDocker.DOCK.TOP);
    // window.statusbarPanel = myDocker.addPanel('Statusbar', wcDocker.DOCK.BOTTOM);
    window.treePanel = myDocker.addPanel('VolumeTree', wcDocker.DOCK.LEFT, wcDocker.COLLAPSED, { w: "25%" });
}



// SETTING
treePanel.title("Дерево глав");
translateG.title("Google");
translateM.title("Multitran");
translateY.title("Яркси");
translateSin.title("Ссоварь синонимов");
GJap.title("Google абзаца с япа");
GEn.title("Google абзаца с англа");
JRTt.title("ЯРП перевод");
JRTd.title("ЯРП разбор");
Jap.title("Яп абзац");
Eng.title("Англ абзац");
Fresh.title("Свежий Взгляд");
originalJap.title("Японский");
originalEng.title("Анлейт");
originalPrev.title("Предыдущая");
originalOrph.title("Орфус");
$('#originalJap').height(originalJap.height() - 10).click();
$('#originalEng').height(originalEng.height() - 10).click();
$('#originalPrev').height(originalPrev.height() - 10).click();
$('#originalOrph').height(originalOrph.height() - 10).click();

/* INITIALIZATION */
myDocker.on(wcDocker.EVENT.LOADED, function () {
    myDocker.finishLoading(500);
});
myDocker.on(wcDocker.EVENT.RESIZE_STARTED, function() {
	if(window.activeCoreMirror && document.activeElement != $(window.activeCoreMirror.getWrapperElement()).find('textarea').get(0))
		window.activeCoreMirror = undefined;
    if($('body').hasClass('wcFullScreen') && !window.document.fullscreenElement && !window.document.mozFullScreenElement && !window.document.webkitFullscreenElement && !window.document.msFullscreenElement) {
        $('body').removeClass('wcFullScreen')
        $button_fullscreen.find('.fa').addClass('fa-expand').removeClass('fa-compress');
    }
});
myDocker.on(wcDocker.EVENT.RESIZE_ENDED, function() {
	if(document.activeElement == $('body').get(0) && window.activeCoreMirror)
		window.activeCoreMirror.focus();
});


