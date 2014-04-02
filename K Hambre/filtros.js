var App = App || {};
App.Filtros = (function() {
    "use strict";

    var filtro = function(maquinas,filtros) {

        var lfiltros = [];

        for (var a in filtros) {
            if (filtros[a] === true) lfiltros.push(a);
        }

        var $m_filtradas = [];

        for (var i = maquinas.length - 1; i >= 0; i--) {
            for (var j = maquinas[i].contenido.length - 1; j >= 0; j--) {
                if ($.inArray(maquinas[i].contenido[j],lfiltros) > -1) $m_filtradas.push(maquinas[i]);
            }
        }

       return $m_filtradas;
    
    };

    return {
        filtro : filtro
    };



})();