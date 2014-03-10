var comprobarCadena = (function (){
    "use strict";

    var comprobarCadena = function(cadena) {

        var cadena2 = [];

        cadena2 = cadena.split("");

        return cadena && cadena2 === cadena2.reverse();

    };

    return comprobarCadena;  

})();

console.log(comprobarCadena("aaaaa"));