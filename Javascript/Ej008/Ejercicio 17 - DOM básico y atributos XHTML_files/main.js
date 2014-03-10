var anade = (function(){

    "use strict";

    window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);

        return (elems.length ===1) ? elems[0] : elems;
    };

    var anade = function(){

        var texto = "Nuevo nodo (";
        var num = document.querySelectorAll("li").length-4;
        var nuevoLi = document.createElement("li");
        var contenido = document.createTextNode(texto+num.toString()+")");
        nuevoLi.appendChild(contenido);
        var lista = document.querySelectorAll("ul");
        lista[0].appendChild(nuevoLi);



        

    };

    return anade;


})();

