
///////////////////// JS Tree Views ////////////////////////////
$(function () {
	$("#part_window").jstree({ "plugins" : ["themes","html_data","ui"], "core" : { "initially_open" : [ "solution_window_2" ] }})
	$("#toolbox_window").jstree({ "plugins" : ["themes","html_data","ui","crrm","hotkeys"], "core" : {	 }})
});

///////////////////// Code Mirror Editor ////////////////////////////
var CMoriginalJap = CodeMirror(document.getElementById("originalJap"), {
  lineNumbers: true,
  matchBrackets: true,
  styleActiveLine: true,
  lineWrapping: true,
  mode:  "mediawiki",
  value: source_Jap
});
var CMoriginalEng = CodeMirror(document.getElementById("originalEng"), {
  lineNumbers: true,
  matchBrackets: true,
  styleActiveLine: true,
  lineWrapping: true,
  mode:  "mediawiki",
  value: source_Eng
});
var CMoriginalPrev = CodeMirror(document.getElementById("originalPrev"), {
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  styleActiveLine: true,
  mode:  "mediawiki",
  value: source_editor3
});
var CMoriginalOrph = CodeMirror(document.getElementById("originalOrph"), {
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  styleActiveLine: true,
  mode:  "mediawiki",
  value: source_editor3
});
var CMvol1_window = CodeMirror(document.getElementById("vol1_window"), {
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  styleActiveLine: true,
  mode:  "mediawiki",
  value: source_Rus
});
var CMwindows = [CMoriginalJap, CMoriginalEng, CMoriginalPrev, CMoriginalOrph, CMvol1_window];
var CMscroll,leftX,topY;


CMwindows.forEach(function(item, i, arr) {
  item.on('scroll', function(){
    CMscroll = item.getScrollInfo();
    CMwindows.forEach(function(item2, i2, arr2) {
      if(item!=item2){
        item2.scrollTo(CMscroll.left,CMscroll.top)
      }
    });
  });
});


CMoriginalJap.on('change', function(cm, changeObj){
  var cur=cm.getSearchCursor(/<ruby>.*?<\/ruby>/, changeObj.from)
  while(cur.findNext()) {
    if(cm.getDoc().findMarksAt(cur.from()).some(function(){return this.primary.className=='ruby';}))
    break;
    cm.getDoc().markText(cur.from(), cur.to(), {
    className: 'ruby',
    shared: true,
    replacedWith: $(cur.pos.match[0]).get(0)
    });
  }
})
////////////////////////////////////////////////////////////////

