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

CMwindows.forEach(function (item, i, arr) {
    item.on('scroll', function () {
        CMscroll = item.getScrollInfo();
        CMwindows.forEach(function (item2, i2, arr2) {
            if (item != item2) {
                item2.scrollTo(CMscroll.left, CMscroll.top)
            }
        });
    });
});

var Mass1JAP = [0, 1, 2, 3, 3, 4, 5, 5];
var Mass2ENG = [0, 0, 1, 2, 3, 4, 4, 5];
var Mass3RUS = [0, 1, 1, 2, 3, 3, 4, 5];


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
    item.on('focus',function(){window.activeElement = item;});
});

CMoriginalJap.on('change', function (cm, changeObj) {
    var cur = cm.getSearchCursor(/<ruby>.*?<\/ruby>/, changeObj.from)
    while (cur.findNext()) {
        if (cm.getDoc().findMarksAt(cur.from()).some(function () {
                return this.primary.className == 'ruby';
            }))
            break;
        cm.getDoc().markText(cur.from(), cur.to(), {
            className: 'ruby',
            shared: true,
            replacedWith: $(cur.pos.match[0]).get(0)
        });
    }
})
