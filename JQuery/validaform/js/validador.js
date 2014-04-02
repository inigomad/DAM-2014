var App = App || {};
App.filtros = (function() {
    "use strict";
    window.$ = Element.prototype.$ = function(a) {
        var b = this instanceof Element ? this : document,
            c = b.querySelectorAll(a);
        return 1 === c.length ? c[0] : c;
    };

    var filtro = function(maquinas,filtros) {

        var $m_filtradas = ['{"id:1","contenido:[\'bebidas\',\'comida\',\'otros\']"}'];

        for (var i = maquinas.length - 1; i >= 0; i--) {
            for (var j = maquinas[j].contenido.length - 1; j >= 0; j--) {
                if ($.inArray(maquinas[i].contenido[j],filtros) > -1) $m_filtradas.push(maquinas[i]);
            }
        }

        console.log(m_filtradas);
       
       return m_filtradas;
    
    };

    return {
        filtro : filtro
    };
})();