var anade = (function(){

    "use strict";

    window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);

        return (elems.length ===1) ? elems[0] : elems;
    };

    var anade = function(){

        

    };

    return anade;


})();

