(function($) {

    $.trimLeft = function(element, options) {

        var trim = this;

        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        var initialText = element.innerHTML;

        trim.init = function() {
            overrideNodeMethod("html", function(){ return initialText; });
            trimContents(element, element);
            return trim;
        };

        trim.reset = function(){
            element.innerHTML = initialText;
            return trim;
        };

        //Overide .html() to return initialText.
        var overrideNodeMethod = function(methodName, action) {
            var originalVal = $.fn[methodName];
            var thisNode = $element;
            $.fn[methodName] = function() {
                if (this[0]==thisNode[0]) {
                    return action.apply(this, arguments);
                } else {
                    return originalVal.apply(this, arguments);
                }
            };
        };

        var trimContents = function(row, node){
            while (row.scrollWidth > row.offsetWidth) {
                var childNode = node.firstChild;
                if (!childNode)
                    return true;
                if (childNode.nodeType == document.TEXT_NODE){
                    trimText(row, node, childNode);
                }
                else {
                    var empty = trimContents(row, childNode);
                    if (empty){
                        node.removeChild(childNode);
                    }
                }
            };
        };

        var trimText = function(row, node, textNode){
            var value = '\u2026' + textNode.nodeValue;
            do {
                value = '\u2026' + value.substr(4);
                textNode.nodeValue = value;
                if (value == '\u2026'){
                    node.removeChild(textNode);
                    return;
                }
            }
            while (row.scrollWidth > row.offsetWidth);
        };

        trim.init();

    };

    $.fn.trimLeft = (function(options){
      var othat = this;

      var single = function(that){
          if (undefined == $(that).data('trim')) {
              var trim = new $.trimLeft(that, options);
              $(that).data('trim', trim);
              $(window).resize(function(){
                  $(that).each(function(){
                        trim.reset().init();
                  });
              });
           }
       };

       var multiple = function(){
            $(othat).each(function() {
                single(this);
            });
        };

        if($(othat).length>1)
            multiple(othat);
        else
            single(othat);

        //-----------
        return this;
    });


})(jQuery);