var muestra = (function(){

    "use strict";

    var muestra = function(){

        var texto = document.querySelectorAll("p > span.adicional");
        var enlace = document.querySelectorAll("a.enlace");

        texto[0].classList.remove('oculto');
        enlace[0].classList.add('oculto');



        

    };

    return muestra;


})();

