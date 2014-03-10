var anade = (function(){

    "use strict";

    window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);

        return (elems.length === 1) ? elems[0] : elems;
    };

    var lista = $("#lista"),
        lis   = lista.children,
        count = lista.children.length;

   var mostrarTexto = function(e){
        e.preventDefault();
        //e.stopPagination();
        console.log(this);
        console.log(e);
    };

    lista.addEventListener('click', mostrarTexto);

    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click',mostrarTexto);
    }

    var anade = function(){

        var li = document.createElement('li');
        li.innerText = "Elemento " + (++count);
    
        lista.appendChild(li);


    };

    return anade;


})();

