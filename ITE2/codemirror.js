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
            //обрабатываем вордовские сноски
            var data_t = data;
            do {
                data = data_t;
                data_t = data.replace(/<a[^>]+style ?= ?["']([^"']*;)?mso-(foot|end)note-id: ?([^"'; ]+) ?(;[^"']*)?["'].*?<\/a>((.|\r|\n)*?)<div[^>]+id ?= ?["']?\3["']?[^>]*>\s*((.|\r|\n)*?<\/div>)/g, '{{ref|$7}}$5');
            } while(data != data_t);
            data = data.replace(/<!\[if !support(Foot|End)notes\]>(.|\r|\n)*?<!\[endif\]>/g,'');
            //обрабатываем жирность-курсив
            data = data.replace(/<i( [^>]*?)?>(.*?)<\/i>/g,"''$2''");
            data = data.replace(/<b( [^>]*?)?>(.*?)<\/b>/g,"'''$2'''");
            //удаляем все теги
            data = data.replace(/<\/?.+?>/g,'');
            //чистка жирности-курсива
            data = data.replace(/''''''/g,'');
            data = data.replace(/''''/g,'');
            //чистка примечаний
            data = data.replace(/\{\{ref\| /g,'{{ref|');
            //востановление руби
            data = data.replace(/\[(\/?(rb|rp|rt|ruby))\]/g,'<$1>');
            //удаляем разрывы с начала фрагмента
            data = data.replace(/^\n/,'');
            //заменяем ###
            data = data.replace(/###/g,'{{Иллюстрация}}');
            // заменяем неразрывный пробел
            data = data.replace(/&nbsp;/g," ");
            //заменяем %%%
            //data = data.replace(/\n\n+/g,"\n");
            data = data.replace(/%%%/g,'');
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



function checkLine(text){

}

$('button[data-type=head]').on('click', function(e){
    var selText = CMvol1_window.getSelection();
    var insert = $(this).data('insert').split('insert');
    var sel = {'start': CMvol1_window.listSelections()[0].anchor,'end': CMvol1_window.listSelections()[0].head};
    var startLine = sel.start.line;
    var head = '';
    if (sel.start.ch == 0 && sel.end.ch == (CMvol1_window.getLine(startLine)).length){
        head = '\n'
    }
    CMvol1_window.setSelection({"line":startLine, "ch":0},{"line":startLine,"ch":(CMvol1_window.getLine(startLine)).length});
    selText = CMvol1_window.getSelection();
    CMvol1_window.replaceSelection(insert[0]+selText+insert[1]+head);
    CMvol1_window.focus();
})
$('button[data-type=BoldIt]').on('click', function(e){
    var selText = CMvol1_window.getSelection();
    var insert = $(this).data('insert').split('insert');
    var sel = {'start': CMvol1_window.listSelections()[0].anchor,'end': CMvol1_window.listSelections()[0].head};
    var startLine = sel.start.line;
    if (e.shiftKey){
        console.log(startLine);
        CMvol1_window.setSelection({"line":startLine, "ch":0},{"line":startLine,"ch":(CMvol1_window.getLine(startLine)).length});
        selText = CMvol1_window.getSelection();
        CMvol1_window.replaceSelection(insert[0]+selText+insert[1]);
    } else if (selText.length == 0) {
        CMvol1_window.replaceSelection(insert[0]+insert[1]);
        CMvol1_window.setCursor(startLine, (sel.start.ch+insert[0].length));
    }
    CMvol1_window.focus();
})