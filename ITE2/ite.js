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

        var $button_bold = $('<button type="button" class="btn btn-default btn-xs" title="Жирный" data-insert="\'\'\'insert\'\'\'"><i class="fa fa-bold"></i></button>');
        var $button_ital = $('<button type="button" class="btn btn-default btn-xs" title="Курсив"  data-insert="\'\'insert\'\'"><i class="fa fa-italic"></i></button>');
        var $button_h2 = $('<button type="button" class="btn btn-default btn-xs" title="Заголовок 2-го уровня"  data-insert="==insert=="><i class="fa fa-header"></i>2</button>');
        var $button_h3 = $('<button type="button" class="btn btn-default btn-xs" title="Заголовок 3-го уровня"  data-insert="===insert==="><i class="fa fa-header"></i>3</button>');
        var $button_uh = $('<button type="button" class="btn btn-default btn-xs UnderHead" title="Подзаголовок"  data-insert="{{Подзаголовок|insert}}"><i class="fa fa-header"></i><i class="fa fa-align-center" style="font-size:80%"></i></button>');
        var $button_pr = $('<button type="button" class="btn btn-default btn-xs" title="Примечание"  data-insert="{{ref|insert}}"><i class="fa fa-file-text"></i></button>');
        var $button_com = $('<button type="button" class="btn btn-default btn-xs" title="Комментарий"  data-insert="<!— insert —>"><i class="fa fa-tag"></i></button>');
        var $button_illus = $('<button type="button" class="btn btn-default btn-xs Illus" title="Иллюстрация" data-insert="{{Иллюстрация}}insert "><i class="fa fa-picture-o"></i></button>');
        var $button_wiki = $('<button type="button" class="btn btn-default btn-xs" title="Ссылка на Википедию" data-insert="Подробнее на [insert Википедии]"><i class="fa fa-link"></i><span style="font-size: 72%; margin-left: -2px; vertical-align: super; font-weight: bold;">W</span></button>');

        myPanel.layout().addItem($button_bold);
        myPanel.layout().addItem($button_ital);
        myPanel.layout().addItem($button_h2);
        myPanel.layout().addItem($button_h3);
        myPanel.layout().addItem($button_uh);
        myPanel.layout().addItem($button_pr);
        myPanel.layout().addItem($button_com);
        myPanel.layout().addItem($button_illus);
        myPanel.layout().addItem($button_wiki);
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

var volumePanel = myDocker.addPanel('volume', wcDocker.DOCK.RIGHT, null);
var volumePanel1 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);
var volumePanel2 = myDocker.addPanel('volume', wcDocker.DOCK.STACKED, volumePanel);

var GJap = myDocker.addPanel('GJap', wcDocker.DOCK.BOTTOM, volumePanel, { w: "75%" });
var GEn = myDocker.addPanel('GEn', wcDocker.DOCK.STACKED, GJap);
var Jap = myDocker.addPanel('Jap', wcDocker.DOCK.STACKED, GJap);
var Fresh = myDocker.addPanel('Fresh', wcDocker.DOCK.STACKED, GJap, { tabOrientation: wcDocker.TAB.BOTTOM });

var translateG = myDocker.addPanel('TranG', wcDocker.DOCK.LEFT, GJap, { w: "25%" });
var translateM = myDocker.addPanel('TranM', wcDocker.DOCK.STACKED, translateG);
var translateSin = myDocker.addPanel('TranSin', wcDocker.DOCK.STACKED, translateG, { tabOrientation: wcDocker.TAB.BOTTOM });

var originalJap = myDocker.addPanel('originalJap', wcDocker.DOCK.LEFT, volumePanel, { w: "50%" });
var originalEng = myDocker.addPanel('originalEng', wcDocker.DOCK.STACKED, originalJap);
var originalPrev = myDocker.addPanel('originalPrev', wcDocker.DOCK.STACKED, originalJap);
var originalOrph = myDocker.addPanel('originalOrph', wcDocker.DOCK.STACKED, originalJap);


var toolBoxPanel = myDocker.addPanel('Toolbox', wcDocker.DOCK.TOP);
// var statusbarPanel = myDocker.addPanel('Statusbar', wcDocker.DOCK.BOTTOM);
var treePanel = myDocker.addPanel('VolumeTree', wcDocker.DOCK.LEFT, wcDocker.COLLAPSED, { w: "25%" });



// SETTING
treePanel.title("Дерево Томов");
translateG.title("Google");
translateM.title("Multitran");
translateSin.title("Синоним");
GJap.title("Google Japanese");
GEn.title("Google English");
Jap.title("Japanese");
Fresh.title("Свежий Взгляд");
originalJap.title("Japanese");
originalEng.title("English");
originalPrev.title("Предыдущий");
originalOrph.title("Орфус");
$('#originalJap').height(originalJap.height() - 10).click();
$('#originalEng').height(originalEng.height() - 10).click();
$('#originalPrev').height(originalPrev.height() - 10).click();
$('#originalOrph').height(originalOrph.height() - 10).click();

/* INITIALIZATION */
myDocker.on(wcDocker.EVENT.LOADED, function () {
    myDocker.finishLoading(500);
});
    myDocker.on(wcDocker.EVENT.RESIZE_ENDED, function() {
		console.log(wcDocker.EVENT.RESIZE_ENDED, document.activeElement, window.activeElement)
		setTimeout(function(){
			console.log('setTimeout', document.activeElement, window.activeElement)
			if(document.activeElement == $('body').get(0))
				window.activeElement.focus();
		}, 0);      
    });
