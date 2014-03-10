var comprobarCadena = (function (){
    "use strict";

    var comprobarMayusculas = function(cadena) {
        return cadena && cadena.toUpperCase() === cadena;
    };

    var comprobarMinusculas = function(cadena) {
        return cadena && cadena.toLowerCase() === cadena;
    };


     var comprobarCadena = function(cadena) {        
        if (comprobarMinusculas(cadena)) return "Minusculas";
        else if (comprobarMayusculas(cadena)) return "Mayusculas";
        else return "Ambas";
    };   

    return comprobarCadena;  

})();

console.log(comprobarCadena("sfdgsdfgdf"));

