$(function () {
    $("#volumestree").jstree({ "plugins" : ["themes","html_data","ui"], "core" : { "initially_open" : [ "solution_window_2" ] }})
});


var mwextUrlProtocolsVAL = {"tag":{"pre":"mw-tag-pre","nowiki":"mw-tag-nowiki","phptag":"text/x-php"},"func":[],"data":[]};
var mwextTagsVAL = {"pre":true,"nowiki":true,"gallery":true,"indicator":true,"phptag":true,"source":true,"syntaxhighlight":true,"foxway":true}
var mwextFunctionSynonymsVAL = [{"ns":"ns","nse":"nse","urlencode":"urlencode","lcfirst":"lcfirst","ucfirst":"ucfirst","lc":"lc","uc":"uc","localurl":"localurl","localurle":"localurle","fullurl":"fullurl","fullurle":"fullurle","canonicalurl":"canonicalurl","canonicalurle":"canonicalurle","formatnum":"formatnum","grammar":"grammar","gender":"gender","plural":"plural","#language":"language","padleft":"padleft","padright":"padright","anchorencode":"anchorencode","filepath":"filepath","pageid":"pageid","int":"int","#special":"special","#speciale":"speciale","#tag":"tag","#formatdate":"formatdate","#dateformat":"formatdate","#phptag":"phptag","#multimaps":"multimaps","#number_format":"number_format","#numbertext":"MAG_NUMBERTEXT","#moneytext":"MAG_MONEYTEXT","#if":"if","#ifeq":"ifeq","#switch":"switch","#ifexist":"ifexist","#ifexpr":"ifexpr","#iferror":"iferror","#expr":"expr","#time":"time","#timel":"timel","#rel2abs":"rel2abs","#titleparts":"titleparts","#len":"len","#pos":"pos","#rpos":"rpos","#sub":"sub","#count":"count","#replace":"replace","#explode":"explode","#urldecode":"urldecode","#foxway":"foxway","articlepath":"articlepath","server":"server","servername":"servername","scriptpath":"scriptpath","stylepath":"stylepath","currentuser":"MAG_CURRENTUSER","currentloggeduser":"MAG_CURRENTLOGGEDUSER","currentuserrealname":"MAG_CURRENTUSERREALNAME","logo":"MAG_LOGO","uuid":"MAG_UUID","userlanguagecode":"MAG_USERLANGUAGECODE"},{"NUMBEROFPAGES":"numberofpages","NUMBEROFUSERS":"numberofusers","NUMBEROFACTIVEUSERS":"numberofactiveusers","NUMBEROFARTICLES":"numberofarticles","NUMBEROFFILES":"numberoffiles","NUMBEROFADMINS":"numberofadmins","NUMBERINGROUP":"numberingroup","NUMINGROUP":"numberingroup","NUMBEROFEDITS":"numberofedits","DEFAULTSORT":"defaultsort","DEFAULTSORTKEY":"defaultsort","DEFAULTCATEGORYSORT":"defaultsort","PAGESINCATEGORY":"pagesincategory","PAGESINCAT":"pagesincategory","PAGESIZE":"pagesize","PROTECTIONLEVEL":"protectionlevel","NAMESPACEE":"namespacee","NAMESPACENUMBER":"namespacenumber","TALKSPACE":"talkspace","TALKSPACEE":"talkspacee","SUBJECTSPACE":"subjectspace","ARTICLESPACE":"subjectspace","SUBJECTSPACEE":"subjectspacee","ARTICLESPACEE":"subjectspacee","PAGENAME":"pagename","PAGENAMEE":"pagenamee","FULLPAGENAME":"fullpagename","FULLPAGENAMEE":"fullpagenamee","ROOTPAGENAME":"rootpagename","ROOTPAGENAMEE":"rootpagenamee","BASEPAGENAME":"basepagename","BASEPAGENAMEE":"basepagenamee","SUBPAGENAME":"subpagename","SUBPAGENAMEE":"subpagenamee","TALKPAGENAME":"talkpagename","TALKPAGENAMEE":"talkpagenamee","SUBJECTPAGENAME":"subjectpagename","ARTICLEPAGENAME":"subjectpagename","SUBJECTPAGENAMEE":"subjectpagenamee","ARTICLEPAGENAMEE":"subjectpagenamee","REVISIONID":"revisionid","REVISIONDAY":"revisionday","REVISIONDAY2":"revisionday2","REVISIONMONTH":"revisionmonth","REVISIONMONTH1":"revisionmonth1","REVISIONYEAR":"revisionyear","REVISIONTIMESTAMP":"revisiontimestamp","REVISIONUSER":"revisionuser","CASCADINGSOURCES":"cascadingsources","NAMESPACE":"namespace","DISPLAYTITLE":"displaytitle","!":"!","CURRENTMONTH":"currentmonth","CURRENTMONTH2":"currentmonth","CURRENTMONTH1":"currentmonth1","CURRENTMONTHNAME":"currentmonthname","CURRENTMONTHNAMEGEN":"currentmonthnamegen","CURRENTMONTHABBREV":"currentmonthabbrev","CURRENTDAY":"currentday","CURRENTDAY2":"currentday2","CURRENTDAYNAME":"currentdayname","CURRENTYEAR":"currentyear","CURRENTTIME":"currenttime","CURRENTHOUR":"currenthour","LOCALMONTH":"localmonth","LOCALMONTH2":"localmonth","LOCALMONTH1":"localmonth1","LOCALMONTHNAME":"localmonthname","LOCALMONTHNAMEGEN":"localmonthnamegen","LOCALMONTHABBREV":"localmonthabbrev","LOCALDAY":"localday","LOCALDAY2":"localday2","LOCALDAYNAME":"localdayname","LOCALYEAR":"localyear","LOCALTIME":"localtime","LOCALHOUR":"localhour","SITENAME":"sitename","CURRENTWEEK":"currentweek","CURRENTDOW":"currentdow","LOCALWEEK":"localweek","LOCALDOW":"localdow","REVISIONSIZE":"revisionsize","CURRENTVERSION":"currentversion","CURRENTTIMESTAMP":"currenttimestamp","LOCALTIMESTAMP":"localtimestamp","DIRECTIONMARK":"directionmark","DIRMARK":"directionmark","CONTENTLANGUAGE":"contentlanguage","CONTENTLANG":"contentlanguage"}];
var CMoriginalJap = CodeMirror(document.getElementById("originalJap"), {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineWrapping: true,
    mwextUrlProtocols: mwextUrlProtocolsVAL,
    mwextTags: mwextTagsVAL,
    mwextFunctionSynonyms: mwextFunctionSynonymsVAL,
    mode: "mediawiki",
    value: source_Jap
});
var CMoriginalEng = CodeMirror(document.getElementById("originalEng"), {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineWrapping: true,
    mwextUrlProtocols: mwextUrlProtocolsVAL,
    mwextTags: mwextTagsVAL,
    mwextFunctionSynonyms: mwextFunctionSynonymsVAL,
    mode: "mediawiki",
    value: source_Eng
});
var CMoriginalPrev = CodeMirror(document.getElementById("originalPrev"), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    mwextUrlProtocols: mwextUrlProtocolsVAL,
    mwextTags: mwextTagsVAL,
    mwextFunctionSynonyms: mwextFunctionSynonymsVAL,
    styleActiveLine: true,
    mode: "mediawiki",
    value: source_editor3
});
var CMoriginalOrph = CodeMirror(document.getElementById("originalOrph"), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    mwextUrlProtocols: mwextUrlProtocolsVAL,
    mwextTags: mwextTagsVAL,
    mwextFunctionSynonyms: mwextFunctionSynonymsVAL,
    mode: "mediawiki",
    value: source_editor3
});
var CMvol1_window = CodeMirror(document.getElementById("volume0"), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    mwextUrlProtocols: mwextUrlProtocolsVAL,
    mwextTags: mwextTagsVAL,
    mwextFunctionSynonyms: mwextFunctionSynonymsVAL,
    mode: "mediawiki",
    value: source_Rus
});
var CMwindows = [CMoriginalJap, CMoriginalEng, CMoriginalPrev, CMoriginalOrph, CMvol1_window];
var CMscroll, leftX, topY;

$.each(CMwindows, function() {
    this.setOption("extraKeys", {
        "Ctrl-H": function(cm) {
            cm.execCommand("replace");
        },
        "F3": function(cm) {
            cm.execCommand("findNext");
        },
        "Shift-F3": function(cm) {
            cm.execCommand("findPrev");
        },
        "Shift-Ctrl-H": function(cm) {
            cm.execCommand("replaceAll");
        }
    });
});

var scrollLockTileout;
function onScroll(cm){
	if(scrollLockTileout) clearTimeout(scrollLockTileout);
	var scroll = cm.getScrollInfo();
	$.each(CMwindows, function() {
		if (cm != this) {
			this.off('scroll', onScroll);
			this.scrollTo(scroll.left, scroll.top);
			console.log(cm, this);
		}
	});
	scrollLockTileout = setTimeout(function(){
		$.each(CMwindows, function() { if (cm != this) this.on('scroll', onScroll); });
        setTimeout(function(){ updateLineSyncOp(); },100);
	},100);
}
$.each(CMwindows, function() {
	this.on('scroll', onScroll);
});

/*
$('#originalEng .CodeMirror-code div:eq(0) pre span').html($('#originalEng .CodeMirror-code div:eq(0) pre span').html() + '\n')
function addN(type, num, col){
  var el = $('#original'+type+' .CodeMirror-code div:eq('+num+') pre span');
  for (var i=0;i<col;i++){
    el.html(el.html() + '\n')
  }
}
*/

function smartPasteListner(cm) {
    return function(event) {
        var data = event.clipboardData.getData('text/html');
        if(data) {
            //убераем лишние пробельные символы
            data = data.replace(/([\n\r] *)+/g,'\n');
            data = data.replace(/>\n</g,'><');
            data = data.replace(/\s+/g,' ');
            //экранируем теги руби избавляясь от стилей
            data = data.replace(/<(\/?(rb|rp|rt|ruby))( +[^>]*?)?>/g,'[$1]');
            //добавляем разрывы строк в места абзацев и брейков
            data = data.replace(/(<p( [^>]*?)?>)?<\/?br( [^>]*?)?\/?>( <\/p>)?/g,'\n');
            data = data.replace(/(<\/p>(\n*))?<p( [^>]*?)?>/g,'$2\n');
            //удаляем все теги стиля и теги пространства имен вместе с содержимим
            data = data.replace(/<([^: >]+:[^ >]+|style)( [^>]*?)?>.*?<\/\1>/g,'');
            //удаляем текст после завершающего html
            data = data.replace(/<\/html>.*/,'');
            console.log(data);
            //обрабатываем вордовские сноски
            var data_t = data;
            do {
                data = data_t;
                data_t = data.replace(/<a[^>]+style ?= ?["']([^"']*;)?mso-(foot|end)note-id: ?([^"'; ]+) ?(;[^"']*)?["'].*?<\/a>((.|\r|\n)*?)<div[^>]+id ?= ?["']?\3["']?[^>]*>\s*((.|\r|\n)*?<\/div>)/g, '{{ref|$7}}$5');
            } while(data != data_t);
            //обрабатываем вордовские сноски
            var data_t = data;
            do {
                data = data_t;
                data_t = data.replace(/<a[^>]+href ?= ?["']#(sd(foot|end)note\d+sym)["'].*?<\/a>((.|\r|\n)*?)\s*<a[^>]+name ?= ?["']\1["'].*?<\/a>(<sup[^<]+<\/sup>)?\s*(.*?)\s*<\/div>/g, '{{ref|$6}}$3');
            } while(data != data_t);
            data = data.replace(/<!\[if !support(Foot|End)notes\]>(.|\r|\n)*?<!\[endif\]>/g,'');
            //обрабатываем жирность-курсив для гугл доков
            data = data.replace(/<b [^>]*style\s*=\s*"[^">]*font-weight:normal[^">]*"[^>]*>/g,'');
            data = data.replace(/<i [^>]*style\s*=\s*"[^">]*font-style:normal[^">]*"[^>]*>/g,'');
            data = data.replace(/<span [^>]*style\s*=\s*"[^">]*font-weight:bold[^">]*font-style:italic[^">]*"[^>]*>(.*?)<\/span>/g,"'''''$1'''''");
            data = data.replace(/<span [^>]*style\s*=\s*"[^">]*font-style:italic[^">]*font-weight:bold[^">]*"[^>]*>(.*?)<\/span>/g,"'''''$1'''''");
            data = data.replace(/<span [^>]*style\s*=\s*"[^">]*font-weight:bold[^">]*"[^>]*>(.*?)<\/span>/g,"'''$1'''");
            data = data.replace(/<span [^>]*style\s*=\s*"[^">]*font-style:italic[^">]*"[^>]*>(.*?)<\/span>/g,"''$1''");
            //обрабатываем жирность-курсив для ворда и офиса
            data = data.replace(/<i( [^>]*?)?>(.*?)<\/i>/g,"''$2''");
            data = data.replace(/<b( [^>]*?)?>(.*?)<\/b>/g,"'''$2'''");
            //дублирование иллюстраций в таблице если ячейка второй колонки пустая
            data = data.replace(/(<tr[^>]*>\s*<td[^>]*>\s*.*?\s*(<img[^>]*>)\s*.*?\s*<\/td>\s*<td[^>]*>)\s*(<\/td>\s*<\/tr>)/g,"$1\n$2$3");
            //удаляем правую колонку таблицы если их две
            data = data.replace(/(<tr[^>]*>)\s*<td[^>]*>\s*.*?\s*<\/td>(\s*<td[^>]*>\s*.*?\s*<\/td>\s*<\/tr>)/g,"$1$2");
            //удаляем картинки внешней ссылки
            data = data.replace(/\s*<img[^>]*src="data:image\/(png|jpeg);base64,.{1,500}?"[^>]*>/g,''); //маленький base64
            data = data.replace(/\s*<img[^>]*width="[0-2]?\d(px)?;?"[^>]*>/g,''); //маленький width
            //заменяем иллюстрации
            data = data.replace(/<img[^>]*>/g,'{{Иллюстрация}}');
            //удаляем все теги
            data = data.replace(/<\/?.+?>/g,'');
            //чистка пустой жирности-курсива
            data = data.replace(/([^'])('{2,3})( +)?\2([^'])/g,'$1$3$4');
            //чистка разлежшейся жирности-курсива
            console.log(data);
            data = data.replace(/([^'\n])('{2,3})([,. !?—–]*)(.*?)([,. !?—–]*(\{\{ref\|.*?\}\}[,. !?—–]*)?)(\2)([^'\n])/g,'$1$3$2$4$7$5$8');
            console.log(data);
            //чистка примечаний
            data = data.replace(/\{\{ref\| /g,'{{ref|');
            data = data.replace(/ \}\}/g,'}}');
            //востановление руби
            data = data.replace(/\[(\/?(rb|rp|rt|ruby))\]/g,'<$1>');
            //удаляем разрывы с начала фрагмента
            data = data.replace(/^\n/,'');
            //заменяем ###
            data = data.replace(/^###$/gm,'{{Иллюстрация}}');
            // заменяем html-сущьности
            data = data.replace(/&nbsp;/g,' ');
            data = data.replace(/&ldquo;/g,'“');
            data = data.replace(/&rdquo;/g,'”');
            data = data.replace(/&rsquo;/g,'’');
            data = data.replace(/&lsquo;/g,'‘');
            data = data.replace(/&quot;/g,'"');
            //заменяем %%%
            data = data.replace(/\n\n+/g,"\n");
            data = data.replace(/^%%%$/gm,'');
            //чистка лишних пробелов и корректировка тире
            data = data.replace(/  +/g,' ');
            data = data.replace(/ ?\n ?/g,"\n");
            data = data.replace(/\n[-–] ?/g,"\n— ");
            data = data.replace(/ [-–] /g," — ");
            data = data.replace(/([^ \n—])[—–]([^ \n—])/g,"$1-$1");
            data = data.replace(/— —/g,"——");
            data = data.replace(/— —/g,"——");
            //console.log(data);
            cm.getDoc().replaceSelection(data);
            event.preventDefault();
        }
    }
}
CMwindows.forEach(function (item, i, arr) {
    item.getWrapperElement().addEventListener("paste", smartPasteListner(item));
    item.on('focus',function(){window.activeCoreMirror = item;});
});
myDocker.on(wcDocker.EVENT.LOADED, function () {
    CMwindows.forEach(function (item, i, arr) {
        item.setOption('lineNumbers', !$('body').hasClass('wcMobile'));
    });
    markRuby(CMoriginalJap);
});

function markRuby(cm, from){
    if(!from) from=0;
    var cur = cm.getSearchCursor(/<ruby>.*?<\/ruby>/, {line: from, ch: 0})
    while (cur.findNext()) {
        if (cm.getDoc().findMarksAt(cur.from()).some(function () {
                return this.primary && this.primary.className == 'ruby';
            }))
            break;
        cm.getDoc().markText(cur.from(), cur.to(), {
            className: 'ruby',
            shared: true,
            replacedWith: $(cur.pos.match[0]).get(0)
        });
    }
}

CMoriginalJap.on('change', function (cm, changeObj) {
    markRuby(cm, changeObj.from.line);
    setTimeout(function(){ updateLineSyncOp(); },100);
})



CMs=[CMoriginalJap, CMoriginalEng, CMvol1_window];
Mass=[[],[],[]];
for(var c = 0; c < CMs.length; c++) {
	for(var i=0;i<150;++i)
		Mass[c][i]=0;
}
Mass[1][3] = 1;
Mass[2][3] = 1;
Mass[0][89] = 1;
Mass[1][89] = 1;
Mass[0][108] = 1;


aligners=[[],[],[]];
function padBelow(cm, line, size) {
	var $elt = $('<div>').addClass('line-sync-spacer').css({height: size, minWidth: 1});
	return cm.addLineWidget(line, $elt.get(0), {height: size, above: false, handleMouseEvents: true});
}

function updateLineSync() {
	var scroll = CMvol1_window.getScrollInfo().top;
	// for (var i = 0; i < aligners.length; i++)
	  // aligners[i].clear();
	// aligners=[];
	shift=[0,0,0];
	for(var i = 0;; i++){
		cms=[];
        var last=true;
		for(var c = 0; c < CMs.length; c++){
			shift[c]+=Mass[c][i];
            if(i-shift[c] < CMs[c].getDoc().lineCount()) {
                last = false;
    			if(!Mass[c][i]) cms.push(c);
            }
		}
        if(last) break;
		var sizes=[];
		if(cms.length>1) {
			var maxheight=0;
            var minheight=Infinity;
			for(var j = 0; j < cms.length; j++){
				sizes[j]=CMs[cms[j]].heightAtLine(i-shift[cms[j]]+1, "local");
				if (maxheight < sizes[j])
					maxheight = sizes[j];
                if (minheight > sizes[j])
                    minheight = sizes[j];
			}
            if(maxheight==minheight) continue;
            for(var j = 0; j < cms.length; j++){
                if(aligners[cms[j]][i-shift[cms[j]]]) {
                    aligners[cms[j]][i-shift[cms[j]]].clear();
                    aligners[cms[j]][i-shift[cms[j]]] = undefined;
                }
            }
            var maxheight=0;
            var minheight=Infinity;
            for(var j = 0; j < cms.length; j++){
                sizes[j]=CMs[cms[j]].heightAtLine(i-shift[cms[j]]+1, "local");
                if (maxheight < sizes[j])
                    maxheight = sizes[j];
                if (minheight > sizes[j])
                    minheight = sizes[j];
            }
            if(maxheight==minheight) continue;
			for(var j = 0; j < cms.length; j++)
				if(maxheight-sizes[j]>0)
                    aligners[cms[j]][i-shift[cms[j]]] = padBelow(CMs[cms[j]], i-shift[cms[j]], maxheight-sizes[j]);
			// console.log(i,shift,cms,maxheight,sizes);
		}
	}
	CMvol1_window.scrollTo(0, scroll)
}

function updateLineSyncOp() {
	var func = function(){updateLineSync()};
	for(var c = 0; c < CMs.length; c++)
		(function(){
			var cm=CMs[c];
			var prevF = func;
			func = function(){cm.operation(prevF)};
		})()
	func();
}

var onResizeTimeout;
$.each([volumePanel, volumePanel1, volumePanel2, originalJap, originalEng, originalPrev, originalOrph],function(){
    this.on(wcDocker.EVENT.RESIZE_ENDED, function (panel, data) {
        if(onResizeTimeout) clearTimeout(onResizeTimeout);
        onResizeTimeout = setTimeout(function(){
            updateLineSyncOp();
        },100);
    });
});


function find(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }
    return -1;
}
function clearReg(text,type){
    var status = []; // 0 - ничего, 1 - курсив, 2 - жирный, 3 - заголовок2, 4 - заголовок 3, 5 - подзаголовок
    var statusL = 0;
    var statuses = [];
    if (type == 'head'){
        var array = ["\'\'\'", "\'\'", "\=\=\=", "\=\=", "\{\{Подзаголовок\|"];
        var podHead = 4;
    } else {
        var array = ["\=\=\=", "\=\=", "\{\{Подзаголовок\|"];
        var podHead = 2;
    }
    var start,end,prev,next;
    for (var i = 0; i < array.length; i++) {
        if (i != podHead) {
            found = text.match(array[i] + "[0-9a-zA-Zа-яА-Я .,-;=]+" + array[i]);
            console.log(found);
        } else {
            found = /(\{\{Подзаголовок\|[0-9a-zA-Zа-яА-Я .,-;=]+\}\})/g.exec(text);
            console.log(found);
        }
        if (found != null) {
            start = text.indexOf(array[i])+array[i].length;
            prev = text.slice(0, start-array[i].length);
            if (i != podHead) {
                end = text.indexOf(array[i],start);
                next = text.slice(end+array[i].length, text.length);
            } else {
                end = text.indexOf("}}",start);
                next = text.slice(end+2, text.length);
            }
            text = text.slice(start, end);
            text = prev+text+next;
        }
    }
    return text;
}


$('button[data-type=head]').on('click', function(e){
    var selText = CMvol1_window.getSelection();
    var insert = $(this).data('insert').split('insert');
    var sel = {'start': CMvol1_window.listSelections()[0].anchor,'end': CMvol1_window.listSelections()[0].head};
    var startLine = sel.start.line;
    var head = '\n';
    if ((sel.start.ch == 0 || sel.end.ch == 0) && sel.end.ch == (CMvol1_window.getLine(startLine)).length){
        head = '';
    }
    CMvol1_window.setSelection({"line":startLine, "ch":0},{"line":startLine,"ch":(CMvol1_window.getLine(startLine)).length});
    selText = CMvol1_window.getSelection();
    if(insert[1]=='}}') {
        selText = clearReg(selText,'boldIt');
    } else {
        selText = clearReg(selText,'head');
    }
    CMvol1_window.replaceSelection(insert[0]+selText+insert[1]+head);
    CMvol1_window.focus();
})
$('button[data-type=BoldIt], button[data-type=another]').on('click', function(e){
    var selText = CMvol1_window.getSelection();
    var insert = $(this).data('insert').split('insert');
    var sel = {'start': CMvol1_window.listSelections()[0].anchor,'end': CMvol1_window.listSelections()[0].head};
    var startLine = sel.start.line;
    if (e.shiftKey){
        console.log(startLine);
        CMvol1_window.setSelection({"line":startLine, "ch":0},{"line":startLine,"ch":(CMvol1_window.getLine(startLine)).length});
        selText = CMvol1_window.getSelection();
        selText = clearReg(selText,'boldIt');
        CMvol1_window.replaceSelection(insert[0]+selText+insert[1]);
    } else if (selText.length == 0) {
        CMvol1_window.replaceSelection(insert[0]+insert[1]);
        CMvol1_window.setCursor(startLine, (sel.start.ch+insert[0].length));
    } else {
        console.log('selected = '+selText)
        selText = clearReg(selText,'boldIt');
        CMvol1_window.replaceSelection(insert[0]+selText+insert[1]);
    }
    CMvol1_window.focus();
})